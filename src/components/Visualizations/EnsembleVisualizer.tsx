import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Layers, Zap, Box } from 'lucide-react';

export function EnsembleVisualizer() {
  const [method, setMethod] = useState<'bagging' | 'boosting'>('bagging');

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-12">
        <button
          onClick={() => setMethod('bagging')}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2",
            method === 'bagging' ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200"
          )}
        >
          <Box className="w-4 h-4" /> Bagging (Random Forest)
        </button>
        <button
          onClick={() => setMethod('boosting')}
          className={cn(
            "px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2",
            method === 'boosting' ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200"
          )}
        >
          <Zap className="w-4 h-4" /> Boosting (XGBoost)
        </button>
      </div>

      <div className="relative w-full max-w-2xl h-64 flex items-center justify-between px-12">
        {/* Input */}
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-400">
          Data
        </div>

        {/* Models */}
        <div className={cn(
          "flex gap-4",
          method === 'bagging' ? "flex-row" : "flex-col"
        )}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold shadow-md">
                M{i}
              </div>
              {method === 'boosting' && i < 3 && (
                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 text-indigo-400">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Output */}
        <div className="w-20 h-20 rounded-full bg-indigo-900 text-white flex flex-col items-center justify-center shadow-xl">
          <span className="text-[10px] font-bold uppercase opacity-60">Result</span>
          <span className="font-bold">Aggregated</span>
        </div>

        {/* Connecting Lines (Simplified) */}
        <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" stroke="#6366f1" strokeWidth="2" fill="none">
          {method === 'bagging' ? (
            <>
              <path d="M 100 128 L 200 80" />
              <path d="M 100 128 L 200 128" />
              <path d="M 100 128 L 200 176" />
              <path d="M 300 80 L 450 128" />
              <path d="M 300 128 L 450 128" />
              <path d="M 300 176 L 450 128" />
            </>
          ) : (
            <>
              <path d="M 100 128 L 250 60" />
              <path d="M 250 180 L 450 128" />
            </>
          )}
        </svg>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 w-full">
        <div className="p-6 bg-white rounded-2xl border border-slate-100">
          <h5 className="font-bold text-slate-900 mb-2">How it works</h5>
          <p className="text-sm text-slate-600 leading-relaxed">
            {method === 'bagging' 
              ? "Models are trained independently in parallel. Their results are averaged (regression) or voted on (classification)."
              : "Models are trained sequentially. Each new model focuses on correcting the errors made by the previous models."}
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-100">
          <h5 className="font-bold text-slate-900 mb-2">Key Benefit</h5>
          <p className="text-sm text-slate-600 leading-relaxed">
            {method === 'bagging'
              ? "Reduces variance and prevents overfitting. Great for complex models like deep Decision Trees."
              : "Reduces bias and improves accuracy. Often provides the best performance on structured data."}
          </p>
        </div>
      </div>
    </div>
  );
}
