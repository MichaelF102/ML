import React from 'react';
import { Layers, Target, CheckCircle2, BookOpen, Zap, Split, Activity, ShieldCheck, Filter, Users, ArrowDownRight, MousePointer2 } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const ClassificationExplanation = () => {
  return (
    <SectionLayout 
      title="10. Classification in Machine Learning" 
      description="A supervised learning technique used to predict discrete, categorical class labels for input data."
    >
      {/* 1. Intro */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Layers className="mr-2 text-indigo-600" /> What is Classification?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Classification is a type of <strong>supervised learning</strong> where the output variable is <strong>discrete</strong> (categories). The model learns from labeled data to assign new observations to specific classes.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Examples</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold">Spam vs Not Spam</span>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold">Cat vs Dog</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">Disease vs Healthy</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
            <Activity className="mr-2 text-indigo-600" /> How it Works
          </h2>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-indigo-800">Collect labeled training data</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-indigo-800">Train algorithm to find patterns</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <span className="text-indigo-800">Create a decision boundary</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
              <span className="text-indigo-800">Predict class for new data</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Types of Classification */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Types of Classification</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Split size={20} />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Binary</h4>
            <p className="text-xs text-slate-500">Exactly two possible classes. (e.g., Yes/No, 0/1, Spam/Ham)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Users size={20} />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Multiclass</h4>
            <p className="text-xs text-slate-500">More than two classes, but each point belongs to only one. (e.g., Cat, Dog, or Bird)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Filter size={20} />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Multi-label</h4>
            <p className="text-xs text-slate-500">Each point can belong to multiple classes at once. (e.g., Movie tags: Action AND Comedy)</p>
          </div>
        </div>
      </div>

      {/* 3. Decision Boundary Visualization */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Target className="mr-2 text-red-500" /> 3. The Decision Boundary
        </h2>
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden p-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-8">Linear vs Non-Linear Boundary</h4>
            <div className="relative w-full aspect-square max-w-[300px] bg-slate-50 rounded-lg border border-slate-100 p-4">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background Regions */}
                <path d="M 0 0 L 200 200 L 0 200 Z" fill="#e0e7ff" opacity="0.3" />
                <path d="M 0 0 L 200 200 L 200 0 Z" fill="#ecfdf5" opacity="0.3" />
                
                {/* Decision Boundary Line */}
                <line x1="0" y1="0" x2="200" y2="200" stroke="#6366f1" strokeWidth="3" strokeDasharray="4" />
                
                {/* Class A Points (Blue) */}
                <circle cx="40" cy="120" r="5" fill="#4f46e5" />
                <circle cx="70" cy="160" r="5" fill="#4f46e5" />
                <circle cx="30" cy="180" r="5" fill="#4f46e5" />
                <circle cx="100" cy="180" r="5" fill="#4f46e5" />
                
                {/* Class B Points (Green) */}
                <circle cx="160" cy="40" r="5" fill="#10b981" />
                <circle cx="130" cy="70" r="5" fill="#10b981" />
                <circle cx="180" cy="80" r="5" fill="#10b981" />
                <circle cx="170" cy="120" r="5" fill="#10b981" />

                <text x="10" y="190" fontSize="10" fill="#4f46e5" fontWeight="bold">Class A</text>
                <text x="150" y="20" fontSize="10" fill="#10b981" fontWeight="bold">Class B</text>
              </svg>
            </div>
            <div className="mt-4 flex items-center text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <MousePointer2 size={10} className="mr-1" />
              The boundary separates different categories
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2 text-sm">What is a Decision Boundary?</h4>
              <p className="text-xs text-indigo-800 leading-relaxed">
                It is a hypersurface that partitions the underlying vector space into two or more sets, one for each class. 
                The classifier assigns all points on one side of the boundary to one class and all points on the other side to another class.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Linear</div>
                <p className="text-[10px] text-slate-600">A straight line or plane. (e.g., Logistic Regression, Linear SVM)</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Non-Linear</div>
                <p className="text-[10px] text-slate-600">Complex curves or regions. (e.g., KNN, Random Forest, Neural Nets)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Classification vs Regression */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-12 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center"><Zap className="mr-3"/> Classification vs. Regression</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center text-sm"><Target size={16} className="mr-2 text-indigo-400"/> Classification</h4>
            <p className="text-xs text-slate-400 mb-3">Predicts <strong>discrete categories</strong>.</p>
            <div className="bg-slate-900 p-3 rounded text-[10px] text-slate-300 italic">
              "Will it rain tomorrow? (Yes/No)"
            </div>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center text-sm"><Activity size={16} className="mr-2 text-emerald-400"/> Regression</h4>
            <p className="text-xs text-slate-400 mb-3">Predicts <strong>continuous values</strong>.</p>
            <div className="bg-slate-900 p-3 rounded text-[10px] text-slate-300 italic">
              "How much rain will fall tomorrow? (2.5mm)"
            </div>
          </div>
        </div>
      </div>

      {/* 4. Evaluation Metrics */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <ShieldCheck className="mr-2 text-emerald-500" /> 4. Evaluation Metrics
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          How do we know if our classifier is good? Accuracy isn't always enough, especially with imbalanced data.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Accuracy</h4>
            <p className="text-[10px] text-slate-500 mb-2">Total correct predictions / Total predictions.</p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded text-slate-700">(TP + TN) / Total</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Precision</h4>
            <p className="text-[10px] text-slate-500 mb-2">Of all predicted positives, how many were actually positive?</p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded text-slate-700">TP / (TP + FP)</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Recall</h4>
            <p className="text-[10px] text-slate-500 mb-2">Of all actual positives, how many did we catch?</p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded text-slate-700">TP / (TP + FN)</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-1">F1-Score</h4>
            <p className="text-[10px] text-slate-500 mb-2">Harmonic mean of Precision and Recall.</p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded text-slate-700">2 * (P * R) / (P + R)</div>
          </div>
        </div>
      </div>

      {/* 5. Lazy vs Eager Learners */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <h3 className="font-bold text-blue-900 mb-4 flex items-center">
            <Zap className="mr-2" size={20}/> Lazy Learners
          </h3>
          <p className="text-sm text-blue-800 mb-4">
            They don't learn a model during training. They simply store the data and wait until a prediction is needed.
          </p>
          <ul className="text-xs text-blue-700 space-y-2 list-disc list-inside">
            <li><strong>Fast Training:</strong> Just storing data.</li>
            <li><strong>Slow Prediction:</strong> Must search all data for every query.</li>
            <li><strong>Example:</strong> K-Nearest Neighbors (KNN).</li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-4 flex items-center">
            <Zap className="mr-2" size={20}/> Eager Learners
          </h3>
          <p className="text-sm text-emerald-800 mb-4">
            They construct a generalized model during training. Once the model is built, the training data can be discarded.
          </p>
          <ul className="text-xs text-emerald-700 space-y-2 list-disc list-inside">
            <li><strong>Slow Training:</strong> Building the model takes time.</li>
            <li><strong>Fast Prediction:</strong> Model is ready to go.</li>
            <li><strong>Example:</strong> Decision Trees, Logistic Regression.</li>
          </ul>
        </div>
      </div>

      {/* 6. Common Algorithms */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Layers className="mr-2 text-indigo-500" /> 6. Common Algorithms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { name: 'Logistic Regression', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { name: 'Decision Trees', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
            { name: 'SVM', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
            { name: 'Naive Bayes', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            { name: 'KNN', color: 'bg-orange-50 text-orange-700 border-orange-200' },
            { name: 'Neural Networks', color: 'bg-red-50 text-red-700 border-red-200' },
          ].map((algo) => (
            <div key={algo.name} className={`${algo.color} p-3 rounded-lg border text-center text-[10px] font-bold shadow-sm hover:scale-105 transition-transform`}>
              {algo.name}
            </div>
          ))}
        </div>
      </div>

      {/* 7. Imbalanced Data */}
      <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-12 shadow-sm">
        <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
          <Filter className="mr-3 text-orange-600" /> 7. Handling Imbalanced Data
        </h2>
        <p className="text-sm text-orange-800 mb-6">
          When one class has significantly more samples than the other (e.g., Fraud Detection), accuracy becomes misleading.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-orange-100">
            <h4 className="font-bold text-orange-900 mb-2 flex items-center text-sm">
              <ArrowDownRight className="mr-2 text-red-500" size={16}/> Undersampling
            </h4>
            <p className="text-xs text-orange-700">Remove samples from the majority class to balance the dataset.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-orange-100">
            <h4 className="font-bold text-orange-900 mb-2 flex items-center text-sm">
              <ArrowDownRight className="mr-2 text-emerald-500" size={16} style={{ transform: 'rotate(-90deg)' }}/> Oversampling (SMOTE)
            </h4>
            <p className="text-xs text-orange-700">Add synthetic samples to the minority class to balance the dataset.</p>
          </div>
        </div>
      </div>

      {/* 8. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Classification is a supervised machine learning technique used to predict <strong>categorical class labels</strong> for input data. In classification problems, the output variable belongs to discrete categories such as Yes/No, Spam/Not Spam, or different object classes. The model is trained using labeled data and learns patterns that allow it to assign new observations to the appropriate class. Common algorithms include <strong>Logistic Regression, Decision Trees, SVM, and Naive Bayes</strong>.
        </p>
      </div>
    </SectionLayout>
  );
};
