import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { cn } from '@/src/lib/utils';

export function KMeansVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [step, setStep] = useState(0);
  const [centroids, setCentroids] = useState<{x: number, y: number, color: string}[]>([]);
  const [data, setData] = useState<{x: number, y: number, cluster?: number}[]>([]);

  const colors = ["#ef4444", "#3b82f6", "#10b981"];

  const init = () => {
    const newData = d3.range(60).map(() => ({
      x: Math.random() * 10,
      y: Math.random() * 10
    }));
    const newCentroids = [
      { x: 2, y: 2, color: colors[0] },
      { x: 8, y: 2, color: colors[1] },
      { x: 5, y: 8, color: colors[2] }
    ];
    setData(newData);
    setCentroids(newCentroids);
    setStep(0);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 500;
    const margin = 40;

    const x = d3.scaleLinear().domain([0, 10]).range([margin, width - margin]);
    const y = d3.scaleLinear().domain([0, 10]).range([height - margin, margin]);

    // Draw points
    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 5)
      .attr("fill", d => d.cluster !== undefined ? colors[d.cluster] : "#cbd5e1")
      .attr("opacity", 0.8);

    // Draw centroids
    svg.selectAll(".centroid")
      .data(centroids)
      .enter()
      .append("path")
      .attr("d", d3.symbol().type(d3.symbolCross).size(200))
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .attr("fill", d => d.color)
      .attr("stroke", "white")
      .attr("stroke-width", 2);

  }, [data, centroids]);

  const nextStep = () => {
    if (step % 2 === 0) {
      // Assign to clusters
      const newData = data.map(d => {
        let minDist = Infinity;
        let cluster = 0;
        centroids.forEach((c, i) => {
          const dist = Math.sqrt((d.x - c.x)**2 + (d.y - c.y)**2);
          if (dist < minDist) {
            minDist = dist;
            cluster = i;
          }
        });
        return { ...d, cluster };
      });
      setData(newData);
    } else {
      // Update centroids
      const newCentroids = centroids.map((c, i) => {
        const clusterPoints = data.filter(d => d.cluster === i);
        if (clusterPoints.length === 0) return c;
        const avgX = d3.mean(clusterPoints, d => d.x)!;
        const avgY = d3.mean(clusterPoints, d => d.y)!;
        return { ...c, x: avgX, y: avgY };
      });
      setCentroids(newCentroids);
    }
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-inner mb-6">
        <svg ref={svgRef} width="500" height="500" />
      </div>
      <div className="flex gap-4">
        <button
          onClick={init}
          className="px-6 py-2 rounded-xl font-bold bg-slate-100 text-slate-600 hover:bg-slate-200"
        >
          Reset
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {step % 2 === 0 ? "Assign Clusters" : "Update Centroids"}
        </button>
      </div>
      <p className="mt-4 text-sm text-slate-500 text-center max-w-md">
        K-Means is an iterative algorithm. It assigns points to the nearest centroid, then moves centroids to the average of their assigned points.
      </p>
    </div>
  );
}
