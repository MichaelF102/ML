import React from 'react';
import { Calculator, Target, CheckCircle2, BookOpen, Zap, Activity, AlertCircle, BarChart3, TrendingUp, Search } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const ConfusionMatrixExplanation = () => {
  return (
    <SectionLayout 
      title="11. Classification Metrics & Confusion Matrix" 
      description="Essential tools for evaluating the performance of classification models, especially on imbalanced datasets."
    >
      {/* 1. Confusion Matrix */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">1. The Confusion Matrix</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-600 text-sm">
              A confusion matrix is a table that summarizes the performance of a classification algorithm. It compares the <strong>Actual</strong> values with the <strong>Predicted</strong> values.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-xs font-bold mr-3 shrink-0">TP</div>
                <div><strong className="text-xs block">True Positive</strong><span className="text-[10px] text-slate-500">Correctly predicted as Positive.</span></div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-slate-200 text-slate-600 rounded flex items-center justify-center text-xs font-bold mr-3 shrink-0">TN</div>
                <div><strong className="text-xs block">True Negative</strong><span className="text-[10px] text-slate-500">Correctly predicted as Negative.</span></div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded flex items-center justify-center text-xs font-bold mr-3 shrink-0">FP</div>
                <div><strong className="text-xs block">False Positive (Type I Error)</strong><span className="text-[10px] text-slate-500">Wrongly predicted as Positive.</span></div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded flex items-center justify-center text-xs font-bold mr-3 shrink-0">FN</div>
                <div><strong className="text-xs block">False Negative (Type II Error)</strong><span className="text-[10px] text-slate-500">Wrongly predicted as Negative.</span></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
             <div className="grid grid-cols-3 gap-2 text-center">
                <div className="col-start-2 text-[10px] font-bold text-slate-400 uppercase">Predicted Pos</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Predicted Neg</div>
                
                <div className="flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase [writing-mode:vertical-rl] rotate-180">Actual Pos</div>
                <div className="bg-emerald-500 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-sm">
                   <div className="text-xl font-bold">40</div>
                   <div className="text-[8px] uppercase font-black opacity-70">TP</div>
                </div>
                <div className="bg-orange-400 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-sm">
                   <div className="text-xl font-bold">10</div>
                   <div className="text-[8px] uppercase font-black opacity-70">FN</div>
                </div>

                <div className="flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase [writing-mode:vertical-rl] rotate-180">Actual Neg</div>
                <div className="bg-red-400 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-sm">
                   <div className="text-xl font-bold">5</div>
                   <div className="text-[8px] uppercase font-black opacity-70">FP</div>
                </div>
                <div className="bg-slate-600 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-sm">
                   <div className="text-xl font-bold">45</div>
                   <div className="text-[8px] uppercase font-black opacity-70">TN</div>
                </div>
             </div>
             <p className="text-center text-[10px] text-slate-400 mt-4 italic">Example: Disease Prediction (N=100)</p>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-sm">
          <h4 className="font-bold text-blue-900 text-xs mb-2">Accuracy</h4>
          <p className="text-[10px] text-blue-700 mb-3">Overall correctness of the model.</p>
          <div className="bg-white p-2 rounded font-mono text-[10px] text-center border border-blue-100 text-blue-600">
            (TP + TN) / Total
          </div>
          <div className="mt-2 text-[10px] font-bold text-blue-800">Result: 85%</div>
        </div>
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 shadow-sm">
          <h4 className="font-bold text-indigo-900 text-xs mb-2">Precision</h4>
          <p className="text-[10px] text-indigo-700 mb-3">Accuracy of positive predictions.</p>
          <div className="bg-white p-2 rounded font-mono text-[10px] text-center border border-indigo-100 text-indigo-600">
            TP / (TP + FP)
          </div>
          <div className="mt-2 text-[10px] font-bold text-indigo-800">Result: 89%</div>
        </div>
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 shadow-sm">
          <h4 className="font-bold text-emerald-900 text-xs mb-2">Recall (Sensitivity)</h4>
          <p className="text-[10px] text-emerald-700 mb-3">Ability to find all actual positives.</p>
          <div className="bg-white p-2 rounded font-mono text-[10px] text-center border border-emerald-100 text-emerald-600">
            TP / (TP + FN)
          </div>
          <div className="mt-2 text-[10px] font-bold text-emerald-800">Result: 80%</div>
        </div>
        <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-sm">
          <h4 className="font-bold text-purple-900 text-xs mb-2">F1 Score</h4>
          <p className="text-[10px] text-purple-700 mb-3">Harmonic mean of Precision & Recall.</p>
          <div className="bg-white p-2 rounded font-mono text-[10px] text-center border border-purple-100 text-purple-600">
            2 * (P * R) / (P + R)
          </div>
          <div className="mt-2 text-[10px] font-bold text-purple-800">Result: 84%</div>
        </div>
      </div>

      {/* 3. Advanced Metrics */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Advanced Evaluation Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-center"><ShieldCheck size={16} className="mr-2 text-blue-500"/> Specificity</h4>
            <p className="text-xs text-slate-500 mb-3">True Negative Rate. Ability to identify negatives correctly.</p>
            <div className="font-mono text-[10px] text-indigo-600">TN / (TN + FP)</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-center"><Search size={16} className="mr-2 text-orange-500"/> ROC-AUC</h4>
            <p className="text-xs text-slate-500 mb-3">Area Under Curve. Measures model's ability to distinguish between classes.</p>
            <div className="font-mono text-[10px] text-indigo-600">Range: 0.5 to 1.0</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-center"><TrendingUp size={16} className="mr-2 text-emerald-500"/> MCC</h4>
            <p className="text-xs text-slate-500 mb-3">Matthews Correlation Coefficient. Best for imbalanced data.</p>
            <div className="font-mono text-[10px] text-indigo-600">Range: -1 to +1</div>
          </div>
        </div>
      </div>

      {/* 4. When to use what? */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-12 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center"><Zap className="mr-3"/> Choosing the Right Metric</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Use Precision when...</h4>
            <p className="text-xs text-slate-400"><strong>False Positives</strong> are costly. Example: Spam filtering (don't want to block important emails).</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Use Recall when...</h4>
            <p className="text-xs text-slate-400"><strong>False Negatives</strong> are dangerous. Example: Cancer detection (don't want to miss a case).</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Use F1 Score when...</h4>
            <p className="text-xs text-slate-400">You have <strong>imbalanced data</strong> and need a balance between Precision and Recall.</p>
          </div>
        </div>
      </div>

      {/* 5. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Classification metrics evaluate model performance using a <strong>Confusion Matrix</strong>, which tracks TP, TN, FP, and FN. <strong>Accuracy</strong> measures overall correctness, <strong>Precision</strong> measures positive prediction quality, and <strong>Recall</strong> measures the ability to detect actual positives. The <strong>F1 Score</strong> provides a harmonic mean of both. For imbalanced datasets, Accuracy can be misleading, making Precision, Recall, and AUC more reliable indicators of performance.
        </p>
      </div>
    </SectionLayout>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
