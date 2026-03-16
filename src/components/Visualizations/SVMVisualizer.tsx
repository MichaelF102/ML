import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { cn } from '@/src/lib/utils';

export function SVMVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [kernel, setKernel] = useState<'linear' | 'rbf'>('linear');

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 500;
    const margin = 40;

    const x = d3.scaleLinear().domain([-5, 5]).range([margin, width - margin]);
    const y = d3.scaleLinear().domain([-5, 5]).range([height - margin, margin]);

    // Data generation
    let data: { x: number, y: number, label: number }[] = [];
    if (kernel === 'linear') {
      data = [
        ...d3.range(15).map(() => ({ x: d3.randomNormal(-2, 1)(), y: d3.randomNormal(2, 1)(), label: 1 })),
        ...d3.range(15).map(() => ({ x: d3.randomNormal(2, 1)(), y: d3.randomNormal(-2, 1)(), label: -1 })),
      ];
    } else {
      data = [
        ...d3.range(20).map(() => {
          const r = d3.randomUniform(0, 2)();
          const a = d3.randomUniform(0, 2 * Math.PI)();
          return { x: r * Math.cos(a), y: r * Math.sin(a), label: 1 };
        }),
        ...d3.range(20).map(() => {
          const r = d3.randomUniform(3, 5)();
          const a = d3.randomUniform(0, 2 * Math.PI)();
          return { x: r * Math.cos(a), y: r * Math.sin(a), label: -1 };
        }),
      ];
    }

    // Draw decision boundary (simplified)
    if (kernel === 'linear') {
      svg.append("line")
        .attr("x1", x(-5))
        .attr("y1", y(-5))
        .attr("x2", x(5))
        .attr("y2", y(5))
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "4");
      
      // Margins
      svg.append("line")
        .attr("x1", x(-4))
        .attr("y1", y(-5))
        .attr("x2", x(5))
        .attr("y2", y(4))
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 1)
        .attr("opacity", 0.3);
      
      svg.append("line")
        .attr("x1", x(-5))
        .attr("y1", y(-4))
        .attr("x2", x(4))
        .attr("y2", y(5))
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 1)
        .attr("opacity", 0.3);
    } else {
      svg.append("circle")
        .attr("cx", x(0))
        .attr("cy", y(0))
        .attr("r", (x(2.5) - x(0)))
        .attr("fill", "none")
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "4");
    }

    // Draw points
    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 6)
      .attr("fill", d => d.label === 1 ? "#10b981" : "#ef4444")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5);

  }, [kernel]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setKernel('linear')}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all",
            kernel === 'linear' ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
          )}
        >
          Linear Kernel
        </button>
        <button
          onClick={() => setKernel('rbf')}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all",
            kernel === 'rbf' ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
          )}
        >
          RBF Kernel (Non-linear)
        </button>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-inner">
        <svg ref={svgRef} width="500" height="500" />
      </div>
      <p className="mt-4 text-sm text-slate-500 text-center max-w-md">
        SVM finds the hyperplane that maximizes the margin between classes. The kernel trick allows SVM to separate non-linearly separable data by projecting it into higher dimensions.
      </p>
    </div>
  );
}
