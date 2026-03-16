import React from 'react';
import { Target, AlertCircle, CheckCircle2, BookOpen, Zap, Activity, BarChart3, TrendingUp } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const BiasVarianceExplanation = () => {
  return (
    <SectionLayout 
      title="13. Bias-Variance Tradeoff" 
      description="A fundamental concept in machine learning that describes the balance between a model's complexity and its ability to generalize to new data."
    >
      {/* 1. Intro & Definitions */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center">
            <AlertCircle className="mr-2 text-red-600" /> What is Bias?
          </h2>
          <p className="text-sm text-red-800 mb-4">
            Bias is the error introduced by approximating a real-world problem with a simplified model.
          </p>
          <div className="bg-white p-4 rounded-lg border border-red-100 text-sm text-slate-700 shadow-sm">
            <strong>High Bias:</strong> The model is too simple and fails to capture the underlying patterns. This leads to <strong>Underfitting</strong>.
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm">
          <h2 className="text-xl font-bold text-orange-900 mb-3 flex items-center">
            <Zap className="mr-2 text-orange-600" /> What is Variance?
          </h2>
          <p className="text-sm text-orange-800 mb-4">
            Variance is the error introduced by the model's sensitivity to small fluctuations in the training set.
          </p>
          <div className="bg-white p-4 rounded-lg border border-orange-100 text-sm text-slate-700 shadow-sm">
            <strong>High Variance:</strong> The model is too complex and learns the noise in the training data. This leads to <strong>Overfitting</strong>.
          </div>
        </div>
      </div>

      {/* 2. Visualizing the Tradeoff (Bullseye Diagram) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Visualizing Bias and Variance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Low Bias, Low Variance */}
          <div className="bg-white p-4 rounded-xl border-2 border-emerald-200 shadow-sm text-center">
             <div className="text-xs font-bold text-emerald-600 uppercase mb-4">Low Bias, Low Variance</div>
             <div className="relative w-32 h-32 mx-auto bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-slate-200"></div>
                <div className="w-16 h-16 rounded-full border border-slate-200"></div>
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-200/50"></div>
                {/* Hits */}
                <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" style={{top: '45%', left: '45%'}}></div>
                <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" style={{top: '50%', left: '50%'}}></div>
                <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" style={{top: '55%', left: '48%'}}></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-4"><strong>The Ideal Model:</strong> Accurate and consistent.</p>
          </div>

          {/* Low Bias, High Variance */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
             <div className="text-xs font-bold text-orange-600 uppercase mb-4">Low Bias, High Variance</div>
             <div className="relative w-32 h-32 mx-auto bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-slate-200"></div>
                <div className="w-16 h-16 rounded-full border border-slate-200"></div>
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-200/50"></div>
                {/* Hits */}
                <div className="absolute w-2 h-2 bg-orange-500 rounded-full" style={{top: '30%', left: '40%'}}></div>
                <div className="absolute w-2 h-2 bg-orange-500 rounded-full" style={{top: '60%', left: '60%'}}></div>
                <div className="absolute w-2 h-2 bg-orange-500 rounded-full" style={{top: '40%', left: '70%'}}></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-4"><strong>Overfitting:</strong> Accurate on average, but inconsistent.</p>
          </div>

          {/* High Bias, Low Variance */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
             <div className="text-xs font-bold text-red-600 uppercase mb-4">High Bias, Low Variance</div>
             <div className="relative w-32 h-32 mx-auto bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-slate-200"></div>
                <div className="w-16 h-16 rounded-full border border-slate-200"></div>
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-200/50"></div>
                {/* Hits */}
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{top: '15%', left: '15%'}}></div>
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{top: '20%', left: '20%'}}></div>
                <div className="absolute w-2 h-2 bg-red-500 rounded-full" style={{top: '18%', left: '25%'}}></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-4"><strong>Underfitting:</strong> Consistent, but consistently wrong.</p>
          </div>

          {/* High Bias, High Variance */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
             <div className="text-xs font-bold text-slate-600 uppercase mb-4">High Bias, High Variance</div>
             <div className="relative w-32 h-32 mx-auto bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-slate-200"></div>
                <div className="w-16 h-16 rounded-full border border-slate-200"></div>
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-200/50"></div>
                {/* Hits */}
                <div className="absolute w-2 h-2 bg-slate-400 rounded-full" style={{top: '10%', left: '80%'}}></div>
                <div className="absolute w-2 h-2 bg-slate-400 rounded-full" style={{top: '80%', left: '10%'}}></div>
                <div className="absolute w-2 h-2 bg-slate-400 rounded-full" style={{top: '20%', left: '30%'}}></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-4"><strong>Worst Case:</strong> Inaccurate and inconsistent.</p>
          </div>
        </div>
      </div>

      {/* 3. The Tradeoff Curve */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. The Error vs. Complexity Curve</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              As we increase <strong>Model Complexity</strong> (e.g., adding more layers to a neural network or increasing the degree of a polynomial), Bias decreases but Variance increases.
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
              <h4 className="font-bold text-indigo-900 mb-3 flex items-center"><TrendingUp size={18} className="mr-2"/> Total Error</h4>
              <p className="text-sm text-indigo-800 mb-4">
                The Total Error of a model is the sum of Bias, Variance, and Irreducible Error (noise).
              </p>
              <div className="bg-white p-3 rounded font-mono text-xs text-center border border-indigo-100 text-indigo-600">
                Total Error = Bias² + Variance + Irreducible Error
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-2">The Sweet Spot</h4>
              <p className="text-sm text-emerald-800">
                The goal of machine learning is to find the <strong>optimal complexity</strong> where the Total Error is at its minimum. This is the point where the model generalizes best to new data.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white p-8 shadow-inner min-h-[350px]">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-6 text-center">Bias-Variance Tradeoff Curve</h4>
             <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
                <line x1="50" y1="250" x2="350" y2="250" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                <line x1="50" y1="250" x2="50" y2="50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                <text x="300" y="270" fontSize="12" fill="#94a3b8">Model Complexity</text>
                <text x="10" y="60" fontSize="12" fill="#94a3b8" transform="rotate(-90, 10, 60)">Error</text>

                {/* Bias Curve (Decreasing) */}
                <path d="M 60 70 Q 100 230 340 240" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
                <text x="300" y="230" fontSize="10" fill="#ef4444" fontWeight="bold">Bias²</text>

                {/* Variance Curve (Increasing) */}
                <path d="M 60 240 Q 300 230 340 70" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4" />
                <text x="300" y="100" fontSize="10" fill="#f97316" fontWeight="bold">Variance</text>

                {/* Total Error Curve (U-shaped) */}
                <path d="M 60 100 Q 200 280 340 100" fill="none" stroke="#3b82f6" strokeWidth="4" />
                <text x="220" y="130" fontSize="12" fill="#3b82f6" fontWeight="bold">Total Error</text>

                {/* Optimal Point */}
                <line x1="200" y1="250" x2="200" y2="190" stroke="#10b981" strokeWidth="2" strokeDasharray="2" />
                <circle cx="200" cy="190" r="6" fill="#10b981" />
                <text x="160" y="180" fontSize="10" fill="#10b981" fontWeight="bold">Optimal Complexity</text>

                <defs>
                  <marker id="arrow-slate" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" /></marker>
                </defs>
             </svg>
          </div>
        </div>
      </div>

      {/* 4. Underfitting vs Overfitting Table */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Summary: Underfitting vs. Overfitting</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-3 font-bold border-b text-sm">Feature</th>
                <th className="p-3 font-bold border-b text-sm">Underfitting</th>
                <th className="p-3 font-bold border-b text-sm">Overfitting</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600">
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Bias / Variance</td>
                <td className="p-3 text-red-600">High Bias, Low Variance</td>
                <td className="p-3 text-orange-600">Low Bias, High Variance</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Training Error</td>
                <td className="p-3">High</td>
                <td className="p-3">Very Low</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Test Error</td>
                <td className="p-3">High</td>
                <td className="p-3">High</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Model Complexity</td>
                <td className="p-3">Too Simple</td>
                <td className="p-3">Too Complex</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">Solutions</td>
                <td className="p-3">Add features, increase complexity</td>
                <td className="p-3">Regularization, more data, pruning</td>
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
          The Bias-Variance tradeoff is a fundamental problem in machine learning where we must balance two types of errors. <strong>Bias</strong> is the error from overly simple assumptions (Underfitting), while <strong>Variance</strong> is the error from overly complex models that learn noise (Overfitting). The goal is to find the optimal model complexity that minimizes the <strong>Total Error</strong>, ensuring the model performs well on both training data and new, unseen data.
        </p>
      </div>
    </SectionLayout>
  );
};
