import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export function PCAVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [showProjection, setShowProjection] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 500;
    const margin = 40;

    const x = d3.scaleLinear().domain([-10, 10]).range([margin, width - margin]);
    const y = d3.scaleLinear().domain([-10, 10]).range([height - margin, margin]);

    // Generate correlated data
    const data = d3.range(50).map(() => {
      const xVal = d3.randomNormal(0, 4)();
      const yVal = xVal * 0.8 + d3.randomNormal(0, 1)();
      return { x: xVal, y: yVal };
    });

    // Draw axes
    svg.append("g")
      .attr("transform", `translate(0,${height / 2})`)
      .call(d3.axisBottom(x).ticks(0));
    svg.append("g")
      .attr("transform", `translate(${width / 2},0)`)
      .call(d3.axisLeft(y).ticks(0));

    // Draw points
    const points = svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 4)
      .attr("fill", "#6366f1")
      .attr("opacity", 0.6);

    // Principal Component Line (approximate)
    const pcLine = svg.append("line")
      .attr("x1", x(-10))
      .attr("y1", y(-8))
      .attr("x2", x(10))
      .attr("y2", y(8))
      .attr("stroke", "#f43f5e")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "5,5")
      .attr("opacity", 0);

    if (showProjection) {
      pcLine.transition().duration(500).attr("opacity", 1);

      points.transition()
        .duration(1000)
        .attr("cx", d => {
          // Project point onto line y = 0.8x
          const k = 0.8;
          const projX = (d.x + k * d.y) / (1 + k * k);
          return x(projX);
        })
        .attr("cy", d => {
          const k = 0.8;
          const projX = (d.x + k * d.y) / (1 + k * k);
          return y(k * projX);
        })
        .attr("fill", "#f43f5e");
    }

  }, [showProjection]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-inner mb-6">
        <svg ref={svgRef} width="500" height="500" />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setShowProjection(false)}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all",
            !showProjection ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
          )}
        >
          Original Data
        </button>
        <button
          onClick={() => setShowProjection(true)}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all",
            showProjection ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-600"
          )}
        >
          Project to 1D (PCA)
        </button>
      </div>
      <p className="mt-4 text-sm text-slate-500 max-w-md text-center">
        PCA finds the direction of maximum variance. By projecting data onto this principal component, we reduce dimensions while preserving as much information as possible.
      </p>
    </div>
  );
}

import { cn } from '@/src/lib/utils';
