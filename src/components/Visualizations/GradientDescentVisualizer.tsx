import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { cn } from '@/src/lib/utils';

export function GradientDescentVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [method, setMethod] = useState<'sgd' | 'momentum' | 'nesterov'>('sgd');
  const [isAnimating, setIsAnimating] = useState(false);

  // Quadratic function: f(x) = x^2
  const f = (x: number) => x * x;
  const df = (x: number) => 2 * x;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const x = d3.scaleLinear().domain([-5, 5]).range([margin.left, width - margin.right]);
    const y = d3.scaleLinear().domain([0, 25]).range([height - margin.bottom, margin.top]);

    // Draw axes
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Draw function curve
    const line = d3.line<number>()
      .x(d => x(d))
      .y(d => y(f(d)));

    const data = d3.range(-5, 5.1, 0.1);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Animation logic
    if (isAnimating) {
      let currentX = -4.5;
      let velocity = 0;
      const lr = 0.1;
      const mu = 0.9; // momentum factor
      const points: [number, number][] = [[currentX, f(currentX)]];

      const path = svg.append("path")
        .attr("fill", "none")
        .attr("stroke", method === 'sgd' ? '#ef4444' : method === 'momentum' ? '#3b82f6' : '#10b981')
        .attr("stroke-width", 3);

      const dot = svg.append("circle")
        .attr("r", 6)
        .attr("fill", method === 'sgd' ? '#ef4444' : method === 'momentum' ? '#3b82f6' : '#10b981');

      let step = 0;
      const maxSteps = 50;

      const timer = d3.interval(() => {
        if (step >= maxSteps) {
          timer.stop();
          setIsAnimating(false);
          return;
        }

        if (method === 'sgd') {
          currentX = currentX - lr * df(currentX);
        } else if (method === 'momentum') {
          velocity = mu * velocity - lr * df(currentX);
          currentX = currentX + velocity;
        } else if (method === 'nesterov') {
          // Lookahead
          const lookaheadX = currentX + mu * velocity;
          velocity = mu * velocity - lr * df(lookaheadX);
          currentX = currentX + velocity;
        }

        points.push([currentX, f(currentX)]);
        
        path.attr("d", d3.line<[number, number]>()
          .x(d => x(d[0]))
          .y(d => y(d[1]))(points));

        dot.attr("cx", x(currentX)).attr("cy", y(f(currentX)));

        step++;
      }, 100);

      return () => timer.stop();
    }
  }, [method, isAnimating]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex gap-4 mb-6">
        {(['sgd', 'momentum', 'nesterov'] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMethod(m); setIsAnimating(false); }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold transition-all",
              method === m 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
            )}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-inner">
        <svg ref={svgRef} width="600" height="400" />
      </div>
      <button
        onClick={() => setIsAnimating(true)}
        disabled={isAnimating}
        className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50"
      >
        {isAnimating ? 'Optimizing...' : 'Start Optimization'}
      </button>
    </div>
  );
}
