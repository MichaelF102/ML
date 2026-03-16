import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';

export function TitanicPreprocessingVisualizer() {
  const [step, setStep] = useState(0);
  
  const rawData = [
    { name: 'Braund, Mr. Owen Harris', age: 22, sex: 'male', embarked: 'S', survived: 0 },
    { name: 'Cumings, Mrs. John Bradley', age: 38, sex: 'female', embarked: 'C', survived: 1 },
    { name: 'Heikkinen, Miss. Laina', age: NaN, sex: 'female', embarked: 'S', survived: 1 },
  ];

  const processedData = [
    { age: 22, sex: 0, embarked_S: 1, embarked_C: 0, survived: 0 },
    { age: 38, sex: 1, embarked_S: 0, embarked_C: 1, survived: 1 },
    { age: 28, sex: 1, embarked_S: 1, embarked_C: 0, survived: 1 }, // Imputed age
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-8">
        {['Raw Data', 'Handle Missing', 'Encode Categorical', 'Final Features'].map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold",
              step >= i ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-500"
            )}>
              {i + 1}
            </div>
            <span className={cn("text-xs font-bold", step >= i ? "text-slate-900" : "text-slate-400")}>{s}</span>
            {i < 3 && <ArrowRight className="w-3 h-3 text-slate-300" />}
          </div>
        ))}
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              {step === 0 && ['Name', 'Age', 'Sex', 'Embarked'].map(h => <th key={h} className="px-4 py-3 font-bold text-slate-500 uppercase tracking-wider text-[10px]">{h}</th>)}
              {step === 1 && ['Name', 'Age (Imputed)', 'Sex', 'Embarked'].map(h => <th key={h} className="px-4 py-3 font-bold text-slate-500 uppercase tracking-wider text-[10px]">{h}</th>)}
              {step >= 2 && ['Age', 'Sex (Binary)', 'Emb_S', 'Emb_C'].map(h => <th key={h} className="px-4 py-3 font-bold text-slate-500 uppercase tracking-wider text-[10px]">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {(step < 2 ? rawData : processedData).map((row, i) => (
              <tr key={i} className="border-b border-slate-50 last:border-0">
                {step < 2 ? (
                  <>
                    <td className="px-4 py-3 text-slate-600 font-medium">{(row as any).name}</td>
                    <td className="px-4 py-3">
                      {isNaN((row as any).age) ? (
                        step === 1 ? <span className="text-indigo-600 font-bold">28.0</span> : <span className="text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> NaN</span>
                      ) : (row as any).age}
                    </td>
                    <td className="px-4 py-3">{(row as any).sex}</td>
                    <td className="px-4 py-3">{(row as any).embarked}</td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-3">{(row as any).age}</td>
                    <td className="px-4 py-3">{(row as any).sex}</td>
                    <td className="px-4 py-3">{(row as any).embarked_S}</td>
                    <td className="px-4 py-3">{(row as any).embarked_C}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => setStep(Math.max(0, step - 1))}
          className="px-6 py-2 rounded-xl font-bold bg-slate-100 text-slate-600"
        >
          Back
        </button>
        <button 
          onClick={() => setStep(Math.min(3, step + 1))}
          className="px-6 py-2 rounded-xl font-bold bg-indigo-600 text-white"
        >
          {step === 3 ? "Reset" : "Next Step"}
        </button>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 max-w-md text-center">
        <p className="text-xs text-indigo-900 leading-relaxed">
          {step === 0 && "Raw data often contains missing values (NaN) and text that machines can't understand."}
          {step === 1 && "We fill missing ages using the median age of other passengers (Imputation)."}
          {step === 2 && "We convert text like 'male/female' into numbers (0/1) and use One-Hot Encoding for Embarked."}
          {step === 3 && "The data is now a clean matrix of numbers, ready for a Machine Learning model!"}
        </p>
      </div>
    </div>
  );
}
