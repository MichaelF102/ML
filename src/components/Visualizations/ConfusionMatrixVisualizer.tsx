import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

export function ConfusionMatrixVisualizer() {
  const [tp, setTp] = useState(45);
  const [fp, setFp] = useState(5);
  const [fn, setFn] = useState(10);
  const [tn, setTn] = useState(40);

  const total = tp + fp + fn + tn;
  const accuracy = (tp + tn) / total;
  const precision = tp / (tp + fp);
  const recall = tp / (tp + fn);
  const f1 = 2 * (precision * recall) / (precision + recall);

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Adjust Values</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>True Positives (TP)</span>
                <span>{tp}</span>
              </div>
              <input type="range" min="0" max="100" value={tp} onChange={(e) => setTp(parseInt(e.target.value))} className="w-full accent-indigo-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>False Positives (FP)</span>
                <span>{fp}</span>
              </div>
              <input type="range" min="0" max="100" value={fp} onChange={(e) => setFp(parseInt(e.target.value))} className="w-full accent-rose-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>False Negatives (FN)</span>
                <span>{fn}</span>
              </div>
              <input type="range" min="0" max="100" value={fn} onChange={(e) => setFn(parseInt(e.target.value))} className="w-full accent-amber-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>True Negatives (TN)</span>
                <span>{tn}</span>
              </div>
              <input type="range" min="0" max="100" value={tn} onChange={(e) => setTn(parseInt(e.target.value))} className="w-full accent-emerald-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Confusion Matrix</h4>
          <div className="grid grid-cols-2 gap-2 w-64 h-64">
            <div className="bg-indigo-100 border-2 border-indigo-200 rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-xs font-bold text-indigo-600 uppercase">TP</span>
              <span className="text-2xl font-bold text-indigo-900">{tp}</span>
            </div>
            <div className="bg-rose-100 border-2 border-rose-200 rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-xs font-bold text-rose-600 uppercase">FP</span>
              <span className="text-2xl font-bold text-rose-900">{fp}</span>
            </div>
            <div className="bg-amber-100 border-2 border-amber-200 rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-xs font-bold text-amber-600 uppercase">FN</span>
              <span className="text-2xl font-bold text-amber-900">{fn}</span>
            </div>
            <div className="bg-emerald-100 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-xs font-bold text-emerald-600 uppercase">TN</span>
              <span className="text-2xl font-bold text-emerald-900">{tn}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Accuracy', value: accuracy, color: 'text-slate-900' },
          { label: 'Precision', value: precision, color: 'text-indigo-600' },
          { label: 'Recall', value: recall, color: 'text-amber-600' },
          { label: 'F1 Score', value: f1, color: 'text-emerald-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={cn("text-xl font-bold", stat.color)}>{(stat.value * 100).toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
