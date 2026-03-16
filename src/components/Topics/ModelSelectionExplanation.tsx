import React from 'react';
import { CheckCircle2, AlertCircle, BookOpen, Zap, BarChart3, TrendingUp, Filter, Layers, Target, Calculator } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const ModelSelectionExplanation = () => {
  return (
    <SectionLayout 
      title="14. Model Selection Criteria" 
      description="The process of choosing the best machine learning model among several candidates based on performance, complexity, and generalization ability."
    >
      {/* 1. Intro & Why Needed */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Filter className="mr-2 text-indigo-600" /> Why Model Selection?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            In machine learning, we often have multiple candidate models (e.g., Linear vs. Polynomial, or Decision Tree vs. Random Forest). Model selection helps us choose the one that <strong>generalizes</strong> best to unseen data.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
            <strong>The Goal:</strong> Balance model fit (accuracy on training data) with model complexity to avoid <strong>Overfitting</strong> and <strong>Underfitting</strong>.
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
             Core Techniques
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
              <span><strong>Cross-Validation:</strong> Testing on multiple data folds.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span><strong>Information Criteria:</strong> AIC and BIC scores.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
              <span><strong>Adjusted R²:</strong> Correcting R² for complexity.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
              <span><strong>Validation Error:</strong> Comparing MSE/Accuracy on a hold-out set.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Overfitting vs Underfitting */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-12 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center"><Zap className="mr-3"/> Overfitting vs. Underfitting</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-red-400 mb-2 flex items-center"><AlertCircle size={18} className="mr-2"/> Underfitting</h4>
            <p className="text-xs text-slate-400 mb-3">Model is too simple to capture patterns. High training and test error.</p>
            <div className="bg-slate-900 p-3 rounded text-[10px] text-slate-300 italic">
              Example: Using a straight line for a curved relationship.
            </div>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-orange-400 mb-2 flex items-center"><Zap size={18} className="mr-2"/> Overfitting</h4>
            <p className="text-xs text-slate-400 mb-3">Model is too complex and memorizes noise. Low training error, high test error.</p>
            <div className="bg-slate-900 p-3 rounded text-[10px] text-slate-300 italic">
              Example: A very deep decision tree that fits every outlier.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Information Criteria (AIC & BIC) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Information Criteria: AIC & BIC</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              Information criteria balance <strong>Model Fit</strong> and <strong>Model Complexity</strong>. They penalize models for having too many parameters.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center"><Calculator size={18} className="mr-2 text-blue-500"/> Scoring Formulas</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-xs text-slate-700 mb-1">AIC (Akaike Information Criterion)</h5>
                  <div className="font-mono text-xs text-indigo-600 mb-2">AIC = 2k - 2ln(L)</div>
                  <p className="text-[10px] text-slate-500">k = parameters, L = likelihood. Lower is better.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-xs text-slate-700 mb-1">BIC (Bayesian Information Criterion)</h5>
                  <div className="font-mono text-xs text-indigo-600 mb-2">BIC = k ln(n) - 2ln(L)</div>
                  <p className="text-[10px] text-slate-500">n = observations. Penalizes complexity more strongly than AIC.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
             <h4 className="text-xs font-bold text-indigo-900 uppercase mb-4 text-center">Example Comparison</h4>
             <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                   <thead className="bg-indigo-100 text-indigo-800">
                      <tr>
                         <th className="p-2 border-b border-indigo-200">Model</th>
                         <th className="p-2 border-b border-indigo-200">AIC</th>
                         <th className="p-2 border-b border-indigo-200">BIC</th>
                      </tr>
                   </thead>
                   <tbody className="text-indigo-900">
                      <tr className="border-b border-indigo-100">
                         <td className="p-2">Model A</td>
                         <td className="p-2">120</td>
                         <td className="p-2">130</td>
                      </tr>
                      <tr className="border-b border-indigo-100 bg-emerald-100/50">
                         <td className="p-2 font-bold">Model B</td>
                         <td className="p-2 font-bold">110</td>
                         <td className="p-2 font-bold">125</td>
                      </tr>
                      <tr>
                         <td className="p-2">Model C</td>
                         <td className="p-2">115</td>
                         <td className="p-2">140</td>
                      </tr>
                   </tbody>
                </table>
             </div>
             <p className="text-[10px] text-indigo-700 mt-4 italic"><strong>Result:</strong> Model B is selected as it has the lowest AIC and BIC scores.</p>
          </div>
        </div>
      </div>

      {/* 4. Adjusted R-Squared */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><TrendingUp className="mr-2" size={20}/> Adjusted R²</h3>
          <p className="text-sm text-emerald-800 mb-4">
            Regular R² always increases when new variables are added. Adjusted R² corrects this by penalizing unnecessary predictors.
          </p>
          <div className="bg-white p-3 rounded font-mono text-[10px] text-center border border-emerald-100 text-emerald-600">
            Adj R² = 1 - [(1 - R²)(n - 1) / (n - k - 1)]
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center"><CheckCircle2 className="mr-2" size={20}/> Cross-Validation</h3>
          <p className="text-sm text-blue-800 mb-4">
            K-Fold Cross Validation divides data into K parts, training on K-1 and testing on 1. This provides a robust estimate of model performance.
          </p>
          <div className="flex justify-center space-x-1">
             {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold ${i === 3 ? 'bg-orange-500 text-white' : 'bg-blue-200 text-blue-800'}`}>
                   {i === 3 ? 'Test' : 'Train'}
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* 5. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Model selection is the process of choosing the best statistical or machine learning model from a set of candidate models based on performance and complexity. Common model selection techniques include <strong>cross-validation</strong>, <strong>Akaike Information Criterion (AIC)</strong>, <strong>Bayesian Information Criterion (BIC)</strong>, and <strong>Adjusted R²</strong>. These methods help balance model fit and complexity, preventing overfitting and ensuring good generalization to new data.
        </p>
      </div>
    </SectionLayout>
  );
};
