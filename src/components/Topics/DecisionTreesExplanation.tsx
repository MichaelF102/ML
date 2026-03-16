import React from 'react';
import { GitBranch, Filter, Target, CheckCircle2, BookOpen, Zap, Split, AlertCircle } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const DecisionTreesExplanation = () => {
  return (
    <SectionLayout 
      title="13. Decision Trees: Concept and Splitting" 
      description="A tree-structured supervised learning algorithm used for both classification and regression, which makes decisions by splitting data based on feature values."
    >
      {/* 1. Intro & Core Concept */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <GitBranch className="mr-2 text-emerald-600" /> What is a Decision Tree?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            A Decision Tree is a flowchart-like structure where each internal node represents a <strong>test</strong> on a feature, each branch represents the <strong>outcome</strong> of the test, and each leaf node represents a <strong>class label</strong> or decision.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
            <strong>The Goal:</strong> Create a model that predicts the value of a target variable by learning simple <strong>if-then-else</strong> decision rules.
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
             Tree Terminology
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
              <span><strong>Root Node:</strong> The very first node representing the entire dataset.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span><strong>Decision Node:</strong> A node that splits into further sub-nodes.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
              <span><strong>Leaf Node:</strong> The final node that provides the prediction.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
              <span><strong>Pruning:</strong> Removing branches to prevent overfitting.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Splitting Mathematics: Entropy & Gini */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. The Mathematics of Splitting</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Filter className="mr-2 text-blue-500" /> 1. Entropy (Information Theory)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Entropy measures the <strong>impurity</strong> or <strong>uncertainty</strong> in a group of observations. It ranges from 0 (perfectly pure) to 1 (perfectly mixed).
              </p>
              <div className="bg-slate-900 text-indigo-300 p-4 rounded-lg font-mono text-sm mb-4">
                Entropy(S) = - Σ pᵢ log₂(pᵢ)
              </div>
              <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                <li>pᵢ is the probability of class 'i' in the set.</li>
                <li>If all samples belong to one class, Entropy = 0.</li>
                <li>If samples are split 50/50, Entropy = 1.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Target className="mr-2 text-emerald-500" /> 2. Gini Impurity (CART)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Used by the CART algorithm, Gini measures the probability of a random sample being incorrectly labeled if it was randomly labeled according to the distribution in the subset.
              </p>
              <div className="bg-slate-900 text-emerald-300 p-4 rounded-lg font-mono text-sm mb-4">
                Gini = 1 - Σ (pᵢ)²
              </div>
              <p className="text-xs text-slate-500">Gini ranges from 0 to 0.5 (for binary classification).</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <Zap className="mr-2 text-yellow-500" /> 3. Information Gain
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Information Gain (IG) is the <strong>reduction in entropy</strong> achieved by partitioning the data according to a feature.
            </p>
            <div className="bg-slate-900 text-yellow-200 p-4 rounded-lg font-mono text-xs mb-6">
              IG(S, A) = Entropy(S) - Σ [ (|Sᵥ| / |S|) * Entropy(Sᵥ) ]
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">!</div>
                <p className="text-xs text-blue-800 font-medium">The feature with the <strong>Highest Information Gain</strong> is chosen for the split.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 mb-2 uppercase">Splitting Logic</h4>
                <ol className="text-[10px] text-slate-500 space-y-1 list-decimal list-inside">
                  <li>Calculate Entropy of the target.</li>
                  <li>Calculate Weighted Entropy for each feature.</li>
                  <li>Subtract feature entropy from target entropy (IG).</li>
                  <li>Split on the feature with max IG.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Solved Problem: Weather Dataset */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Solved Problem: Finding the Best Split</h2>
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
            <h3 className="font-bold text-slate-800">Problem Statement</h3>
            <p className="text-sm text-slate-600">Given the following dataset, determine which attribute (Weather, Temp, Humidity, Wind) is the best for the <strong>first split</strong>.</p>
          </div>
          
          <div className="p-6 grid lg:grid-cols-2 gap-8">
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border p-1">Day</th>
                    <th className="border p-1">Weather</th>
                    <th className="border p-1">Temp</th>
                    <th className="border p-1">Humidity</th>
                    <th className="border p-1">Wind</th>
                    <th className="border p-1 bg-emerald-50 text-emerald-700 font-bold">Play?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1', 'Sunny', 'Hot', 'High', 'Weak', 'No'],
                    ['2', 'Cloudy', 'Hot', 'High', 'Weak', 'Yes'],
                    ['3', 'Sunny', 'Mild', 'Normal', 'Strong', 'Yes'],
                    ['4', 'Cloudy', 'Mild', 'High', 'Strong', 'Yes'],
                    ['5', 'Rainy', 'Mild', 'High', 'Strong', 'No'],
                    ['6', 'Rainy', 'Cool', 'Normal', 'Strong', 'No'],
                    ['7', 'Rainy', 'Mild', 'High', 'Weak', 'Yes'],
                    ['8', 'Sunny', 'Hot', 'High', 'Strong', 'No'],
                    ['9', 'Cloudy', 'Hot', 'Normal', 'Weak', 'Yes'],
                    ['10', 'Rainy', 'Mild', 'High', 'Strong', 'No'],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      {row.map((cell, j) => (
                        <td key={j} className={`border p-1 text-center ${j === 5 ? (cell === 'Yes' ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold') : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs mb-2 uppercase">Step 1: Calculate Total Entropy</h4>
                <p className="text-[10px] text-indigo-800 mb-2">Total Samples: 10 | Yes: 5, No: 5</p>
                <div className="font-mono text-[10px] bg-white p-2 rounded border border-indigo-200">
                  Entropy(S) = -(5/10)log₂(5/10) - (5/10)log₂(5/10) = 1.0
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 text-xs mb-2 uppercase">Step 2: Information Gain for "Weather"</h4>
                <div className="space-y-2 text-[10px] text-emerald-800">
                  <p>• <strong>Sunny (3):</strong> 1 Yes, 2 No → Entropy = 0.918</p>
                  <p>• <strong>Cloudy (3):</strong> 3 Yes, 0 No → Entropy = 0 (Pure)</p>
                  <p>• <strong>Rainy (4):</strong> 1 Yes, 3 No → Entropy = 0.811</p>
                  <div className="font-mono bg-white p-2 rounded border border-emerald-200 mt-2">
                    E(Weather) = (3/10)*0.918 + (3/10)*0 + (4/10)*0.811 = 0.60<br/>
                    IG(Weather) = 1.0 - 0.60 = 0.40
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-xs mb-2 uppercase">Step 3: Information Gain for "Wind"</h4>
                <div className="space-y-2 text-[10px] text-blue-800">
                  <p>• <strong>Weak (4):</strong> 3 Yes, 1 No → Entropy = 0.811</p>
                  <p>• <strong>Strong (6):</strong> 2 Yes, 4 No → Entropy = 0.918</p>
                  <div className="font-mono bg-white p-2 rounded border border-blue-200 mt-2">
                    E(Wind) = (4/10)*0.811 + (6/10)*0.918 = 0.875<br/>
                    IG(Wind) = 1.0 - 0.875 = 0.125
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-700 text-xs mb-2 uppercase">Step 4: Final Comparison</h4>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="p-2 bg-white rounded border">IG(Weather) = 0.400</div>
                  <div className="p-2 bg-white rounded border">IG(Temp) = 0.114</div>
                  <div className="p-2 bg-white rounded border">IG(Wind) = 0.125</div>
                  <div className="p-2 bg-white rounded border">IG(Humidity) = 0.035</div>
                </div>
                <div className="mt-4 p-3 bg-emerald-600 text-white rounded-lg text-center font-bold text-xs">
                  Winner: Weather (Highest Information Gain)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Advantages & Disadvantages */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><CheckCircle2 className="mr-2" size={20}/> Advantages</h3>
          <ul className="text-sm text-emerald-800 space-y-2 list-disc list-inside">
            <li><strong>Easy to Interpret:</strong> Can be visualized and explained to non-experts.</li>
            <li><strong>No Scaling Needed:</strong> Works with raw data (no normalization required).</li>
            <li><strong>Handles Both Data Types:</strong> Can process both numerical and categorical data.</li>
            <li><strong>Feature Selection:</strong> Automatically identifies the most important features.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h3 className="font-bold text-red-900 mb-3 flex items-center"><AlertCircle className="mr-2" size={20}/> Disadvantages</h3>
          <ul className="text-sm text-red-800 space-y-2 list-disc list-inside">
            <li><strong>Overfitting:</strong> Trees can become too complex and fail to generalize (needs pruning).</li>
            <li><strong>Instability:</strong> Small changes in data can lead to a completely different tree.</li>
            <li><strong>Bias:</strong> Can be biased if one class dominates.</li>
            <li><strong>Greedy Algorithm:</strong> Makes local optimal choices, which might not lead to a global optimum.</li>
          </ul>
        </div>
      </div>

      {/* 5. Pruning and Random Forest */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-12 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center"><Zap className="mr-3"/> Preventing Overfitting</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center"><Split size={18} className="mr-2 text-indigo-400"/> 1. Pruning</h4>
            <p className="text-xs text-slate-400">Removing the branches that use features with low importance. This simplifies the tree and improves generalization.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center"><GitBranch size={18} className="mr-2 text-emerald-400"/> 2. Random Forest</h4>
            <p className="text-xs text-slate-400">Instead of one tree, we use an ensemble of many trees (a forest) and take their average. This dramatically reduces overfitting.</p>
          </div>
        </div>
      </div>

      {/* 6. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          A Decision Tree is a supervised learning algorithm that uses a tree-like structure to make predictions. It splits the data at each node based on the feature that provides the highest <strong>Information Gain</strong> or lowest <strong>Gini Impurity</strong>. The process continues until pure leaf nodes are reached. While easy to interpret and visualize, decision trees are prone to <strong>overfitting</strong>, which can be mitigated through <strong>pruning</strong> or by using ensemble methods like <strong>Random Forest</strong>.
        </p>
      </div>
    </SectionLayout>
  );
};
