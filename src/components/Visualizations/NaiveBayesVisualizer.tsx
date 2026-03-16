import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

export function NaiveBayesVisualizer() {
  const [isSpam, setIsSpam] = useState(false);
  const [word, setWord] = useState('Free');

  const probabilities = {
    'Free': { spam: 0.8, ham: 0.1 },
    'Meeting': { spam: 0.05, ham: 0.4 },
    'Money': { spam: 0.9, ham: 0.05 },
  };

  const pSpam = 0.4;
  const pHam = 0.6;

  const pWordSpam = (probabilities as any)[word].spam;
  const pWordHam = (probabilities as any)[word].ham;

  // Bayes Theorem: P(Spam|Word) = [P(Word|Spam) * P(Spam)] / P(Word)
  const pWord = (pWordSpam * pSpam) + (pWordHam * pHam);
  const pSpamGivenWord = (pWordSpam * pSpam) / pWord;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-8">
        {Object.keys(probabilities).map((w) => (
          <button
            key={w}
            onClick={() => setWord(w)}
            className={cn(
              "px-6 py-2 rounded-xl font-bold transition-all",
              word === w ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200"
            )}
          >
            "{w}"
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Prior Probabilities</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">P(Spam)</span>
              <span className="font-mono font-bold text-rose-600">{pSpam}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">P(Ham)</span>
              <span className="font-mono font-bold text-emerald-600">{pHam}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Likelihoods for "{word}"</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">P("{word}" | Spam)</span>
              <span className="font-mono font-bold text-rose-600">{pWordSpam}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">P("{word}" | Ham)</span>
              <span className="font-mono font-bold text-emerald-600">{pWordHam}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Posterior Probability</div>
        <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl text-center min-w-[300px]">
          <p className="text-sm opacity-70 mb-2">P(Spam | "{word}")</p>
          <h3 className="text-5xl font-bold">{(pSpamGivenWord * 100).toFixed(1)}%</h3>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs font-medium text-indigo-300">
              {pSpamGivenWord > 0.5 ? "Classified as SPAM" : "Classified as HAM"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
