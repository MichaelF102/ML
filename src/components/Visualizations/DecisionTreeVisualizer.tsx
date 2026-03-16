import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function DecisionTreeVisualizer() {
  const [step, setStep] = useState(0);

  const treeData = {
    question: "Is it raining?",
    yes: {
      question: "Do you have an umbrella?",
      yes: "Go outside with umbrella",
      no: "Stay inside"
    },
    no: {
      question: "Is it very cold?",
      yes: "Wear a jacket",
      no: "Go outside"
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-lg h-[400px] bg-white rounded-2xl border border-slate-100 p-8 overflow-hidden">
        <div className="flex flex-col items-center gap-12">
          {/* Root */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg z-10"
          >
            {treeData.question}
          </motion.div>

          {/* Level 1 */}
          <div className="flex gap-24 relative">
            <div className="absolute top-[-48px] left-1/2 w-[200px] h-[48px] border-l-2 border-r-2 border-t-2 border-slate-200 -translate-x-1/2 rounded-t-2xl -z-0" />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.2, x: 0 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 -mt-14 z-10">Yes</div>
              <div className="bg-white border-2 border-indigo-100 text-slate-700 px-4 py-2 rounded-lg font-bold shadow-sm">
                {treeData.yes.question}
              </div>
              
              <div className="flex gap-8">
                <motion.div 
                  animate={{ opacity: step >= 2 ? 1 : 0.2 }}
                  className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md text-xs font-bold border border-emerald-100"
                >
                  {treeData.yes.yes}
                </motion.div>
                <motion.div 
                  animate={{ opacity: step >= 2 ? 1 : 0.2 }}
                  className="bg-rose-50 text-rose-700 px-3 py-1 rounded-md text-xs font-bold border border-rose-100"
                >
                  {treeData.yes.no}
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.2, x: 0 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 -mt-14 z-10">No</div>
              <div className="bg-white border-2 border-indigo-100 text-slate-700 px-4 py-2 rounded-lg font-bold shadow-sm">
                {treeData.no.question}
              </div>

              <div className="flex gap-8">
                <motion.div 
                  animate={{ opacity: step >= 2 ? 1 : 0.2 }}
                  className="bg-amber-50 text-amber-700 px-3 py-1 rounded-md text-xs font-bold border border-amber-100"
                >
                  {treeData.no.yes}
                </motion.div>
                <motion.div 
                  animate={{ opacity: step >= 2 ? 1 : 0.2 }}
                  className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold border border-indigo-100"
                >
                  {treeData.no.no}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => setStep(Math.max(0, step - 1))}
          className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map(i => (
            <div key={i} className={cn("w-2 h-2 rounded-full", step === i ? "bg-indigo-600" : "bg-slate-200")} />
          ))}
        </div>
        <button 
          onClick={() => setStep(Math.min(2, step + 1))}
          className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <p className="mt-4 text-sm text-slate-500 font-medium">
        {step === 0 && "Start with a root question that splits the data."}
        {step === 1 && "Each branch represents a decision based on a feature."}
        {step === 2 && "The leaves represent the final classification or value."}
      </p>
    </div>
  );
}
