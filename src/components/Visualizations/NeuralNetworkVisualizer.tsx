import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function NeuralNetworkVisualizer() {
  const [weights, setWeights] = useState([0.5, -0.5, 0.8]);
  const [input, setInput] = useState([1, 0]);
  
  const hidden = [
    input[0] * weights[0] + input[1] * weights[1],
    input[0] * weights[2] + input[1] * weights[0]
  ];
  
  const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));
  const output = sigmoid(hidden[0] + hidden[1]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center gap-16 mb-12">
        {/* Input Layer */}
        <div className="space-y-12">
          {input.map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold transition-all",
                val > 0 ? "bg-indigo-500 border-indigo-200 text-white" : "bg-slate-100 border-slate-200 text-slate-400"
              )}>
                {val}
              </div>
              <button 
                onClick={() => {
                  const next = [...input];
                  next[i] = next[i] === 1 ? 0 : 1;
                  setInput(next);
                }}
                className="text-[10px] font-bold uppercase text-slate-400 hover:text-indigo-600"
              >
                Toggle
              </button>
            </div>
          ))}
        </div>

        {/* Connections 1 */}
        <div className="relative w-24 h-48">
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="0" y1="24" x2="100%" y2="48" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="0" y1="24" x2="100%" y2="144" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="0" y1="168" x2="100%" y2="48" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="0" y1="168" x2="100%" y2="144" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
        </div>

        {/* Hidden Layer */}
        <div className="space-y-12">
          {hidden.map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center font-bold text-indigo-600 shadow-sm"
              >
                {val.toFixed(1)}
              </motion.div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Neuron {i+1}</span>
            </div>
          ))}
        </div>

        {/* Connections 2 */}
        <div className="relative w-24 h-48">
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="0" y1="48" x2="100%" y2="96" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="0" y1="144" x2="100%" y2="96" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
        </div>

        {/* Output Layer */}
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            animate={{ 
              backgroundColor: output > 0.5 ? '#10b981' : '#f43f5e',
              scale: output > 0.5 ? 1.2 : 1
            }}
            className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
          >
            <span className="text-xs font-bold uppercase opacity-70">Output</span>
            <span className="text-xl font-bold">{(output * 100).toFixed(0)}%</span>
          </motion.div>
          <span className="text-[10px] font-bold uppercase text-slate-400 mt-2">Prediction</span>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 w-full max-w-md">
        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Adjust Weights</h5>
        <div className="space-y-4">
          {weights.map((w, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold text-slate-600">
                <span>Weight {i+1}</span>
                <span>{w.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="-2" 
                max="2" 
                step="0.1" 
                value={w} 
                onChange={(e) => {
                  const next = [...weights];
                  next[i] = parseFloat(e.target.value);
                  setWeights(next);
                }}
                className="w-full accent-indigo-600" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
