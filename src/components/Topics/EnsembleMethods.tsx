import React from 'react';
import { Layers, Zap, Target, CheckCircle2, BookOpen, GitBranch, Shield, ArrowRight } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const EnsembleMethods = () => {
  return (
    <SectionLayout 
      title="9. Ensemble Methods: Bagging vs. Boosting" 
      description="Techniques that combine multiple machine learning models to create a single, more powerful model with better accuracy and robustness."
    >
      {/* 1. Intro & Core Concept */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <Layers className="mr-2 text-indigo-600" /> What are Ensemble Methods?
          </h2>
          <p className="text-sm text-indigo-800 mb-4">
            Ensemble methods follow the <strong>"Wisdom of the Crowd"</strong> principle. Instead of relying on one "expert" model, we combine many "weak" models to make a better decision.
          </p>
          <div className="bg-white p-4 rounded-lg border border-indigo-100 text-sm text-slate-700 shadow-sm">
            <strong>The Goal:</strong> Reduce <strong>Variance</strong> (overfitting) or <strong>Bias</strong> (underfitting) to improve overall model performance.
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
             The Two Main Strategies
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 p-1.5 rounded mr-3 mt-0.5"><Shield size={14}/></div>
              <div><strong className="block text-sm">Bagging (Parallel)</strong><span className="text-xs text-slate-400">Builds models independently and averages them.</span></div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 p-1.5 rounded mr-3 mt-0.5"><Zap size={14}/></div>
              <div><strong className="block text-sm">Boosting (Sequential)</strong><span className="text-xs text-slate-400">Builds models one by one, each correcting the previous one.</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bagging Deep Dive */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-xl mr-4"><Shield className="text-blue-600" size={32}/></div>
          <h2 className="text-2xl font-bold text-slate-800">1. Bagging (Bootstrap Aggregating)</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              Bagging works by creating multiple subsets of the original data (with replacement) and training a separate model on each subset. The final result is the <strong>average</strong> (regression) or <strong>majority vote</strong> (classification) of all models.
            </p>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Key Features</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Models are trained in <strong>parallel</strong>.</li>
                <li>Reduces <strong>Variance</strong> (prevents overfitting).</li>
                <li>Example: <strong>Random Forest</strong> (an ensemble of Decision Trees).</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Intuition</h4>
              <p className="text-sm text-blue-800">
                If you ask 100 people to guess the weight of an elephant, their individual guesses might be far off, but their <strong>average</strong> guess will likely be very close to the truth.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white p-8 shadow-inner min-h-[300px]">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-6 text-center">Bagging Workflow (Parallel)</h4>
             <div className="flex flex-col items-center space-y-4">
                <div className="bg-slate-100 px-4 py-2 rounded border-2 border-slate-300 font-bold text-sm">Original Dataset</div>
                <ArrowRight size={20} className="text-slate-300 transform rotate-90"/>
                <div className="flex justify-center space-x-4">
                   <div className="flex flex-col items-center">
                      <div className="bg-blue-50 p-2 rounded border border-blue-200 text-[10px] mb-2">Subset 1</div>
                      <div className="bg-blue-600 text-white p-2 rounded shadow-sm"><GitBranch size={20}/></div>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-blue-50 p-2 rounded border border-blue-200 text-[10px] mb-2">Subset 2</div>
                      <div className="bg-blue-600 text-white p-2 rounded shadow-sm"><GitBranch size={20}/></div>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-blue-50 p-2 rounded border border-blue-200 text-[10px] mb-2">Subset 3</div>
                      <div className="bg-blue-600 text-white p-2 rounded shadow-sm"><GitBranch size={20}/></div>
                   </div>
                </div>
                <ArrowRight size={20} className="text-slate-300 transform rotate-90"/>
                <div className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">Final Voting / Averaging</div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. Boosting Deep Dive */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <div className="bg-emerald-100 p-3 rounded-xl mr-4"><Zap className="text-emerald-600" size={32}/></div>
          <h2 className="text-2xl font-bold text-slate-800">2. Boosting</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              Boosting works <strong>sequentially</strong>. Each new model focuses on the mistakes made by the previous models. It gives more weight to the data points that were misclassified.
            </p>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Key Features</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Models are trained <strong>sequentially</strong>.</li>
                <li>Reduces <strong>Bias</strong> (improves accuracy).</li>
                <li>Examples: <strong>AdaBoost, Gradient Boosting, XGBoost</strong>.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-2">Intuition</h4>
              <p className="text-sm text-emerald-800">
                Think of a student learning for an exam. They take a practice test, see which questions they got wrong, and spend more time studying <strong>those specific topics</strong> before the next test.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white p-8 shadow-inner min-h-[300px]">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-6 text-center">Boosting Workflow (Sequential)</h4>
             <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col items-center">
                   <div className="bg-emerald-600 text-white p-3 rounded shadow-sm mb-2"><GitBranch size={24}/></div>
                   <div className="text-[10px] font-bold text-slate-500">Model 1</div>
                </div>
                <div className="flex flex-col items-center">
                   <ArrowRight size={20} className="text-emerald-400 mb-2"/>
                   <div className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Update Weights</div>
                </div>
                <div className="flex flex-col items-center">
                   <div className="bg-emerald-600 text-white p-3 rounded shadow-sm mb-2 opacity-80"><GitBranch size={24}/></div>
                   <div className="text-[10px] font-bold text-slate-500">Model 2</div>
                </div>
                <div className="flex flex-col items-center">
                   <ArrowRight size={20} className="text-emerald-400 mb-2"/>
                   <div className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Update Weights</div>
                </div>
                <div className="flex flex-col items-center">
                   <div className="bg-emerald-600 text-white p-3 rounded shadow-sm mb-2 opacity-60"><GitBranch size={24}/></div>
                   <div className="text-[10px] font-bold text-slate-500">Model 3</div>
                </div>
             </div>
             <div className="mt-8 text-center bg-indigo-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg inline-block mx-auto w-full max-w-[200px]">Weighted Average</div>
          </div>
        </div>
      </div>

      {/* 4. Comparison Table */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Comparison: Bagging vs. Boosting</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-3 font-bold border-b text-sm">Feature</th>
                <th className="p-3 font-bold border-b text-sm">Bagging</th>
                <th className="p-3 font-bold border-b text-sm">Boosting</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600">
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Training</td>
                <td className="p-3">Parallel (Independent)</td>
                <td className="p-3">Sequential (Dependent)</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Goal</td>
                <td className="p-3">Reduce <strong>Variance</strong></td>
                <td className="p-3">Reduce <strong>Bias</strong></td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Weighting</td>
                <td className="p-3">Equal weight for all models</td>
                <td className="p-3">Weighted based on performance</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Overfitting</td>
                <td className="p-3">Reduces overfitting</td>
                <td className="p-3">May overfit if not tuned</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Example</td>
                <td className="p-3">Random Forest</td>
                <td className="p-3">XGBoost, AdaBoost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Ensemble methods combine multiple machine learning models to improve overall performance. <strong>Bagging</strong> (e.g., Random Forest) trains models in parallel on different data subsets to reduce variance and prevent overfitting. <strong>Boosting</strong> (e.g., XGBoost) trains models sequentially, where each new model focuses on correcting the errors of the previous ones to reduce bias and improve accuracy. Both techniques are widely used to achieve state-of-the-art results in competitive machine learning.
        </p>
      </div>
    </SectionLayout>
  );
};
