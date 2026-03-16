import React from 'react';
import { Mail, ShieldCheck, AlertTriangle, BookOpen, Zap, Calculator, Info, CheckCircle2, ListChecks } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const NaiveBayesExplanation = () => {
  return (
    <SectionLayout 
      title="8. Naive Bayes Classifier" 
      description="A supervised learning algorithm based on Bayes' Theorem with an assumption of independence among predictors."
    >
      {/* 1. Intro */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Mail className="mr-2 text-indigo-600" /> What is Naive Bayes?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Naive Bayes is a classification algorithm based on <strong>Bayes' Theorem</strong>. It is "Naive" because it assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Common Uses</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold">Spam Detection</span>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold">Sentiment Analysis</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">Text Classification</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
            <Calculator className="mr-2 text-indigo-600" /> 2. Bayes' Theorem Formula
          </h2>
          <div className="bg-white p-6 rounded-lg border border-indigo-100 text-center shadow-sm">
            <div className="text-2xl font-serif italic text-indigo-900 mb-6 bg-slate-50 py-4 rounded border border-slate-100">
              P(A|B) = <span className="inline-block border-b-2 border-indigo-200">[ P(B|A) * P(A) ]</span> / P(B)
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 text-left mt-4 border-t pt-4">
              <div className="bg-indigo-50/50 p-2 rounded">
                <strong className="text-indigo-700 block">Posterior: P(A|B)</strong>
                Probability of hypothesis A given evidence B.
              </div>
              <div className="bg-emerald-50/50 p-2 rounded">
                <strong className="text-emerald-700 block">Likelihood: P(B|A)</strong>
                Probability of evidence B given hypothesis A.
              </div>
              <div className="bg-blue-50/50 p-2 rounded">
                <strong className="text-blue-700 block">Prior: P(A)</strong>
                Initial probability of hypothesis A before evidence.
              </div>
              <div className="bg-slate-50 p-2 rounded">
                <strong className="text-slate-700 block">Evidence: P(B)</strong>
                Total probability of the evidence.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The "Naive" Assumption */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Why is it called "Naive"?</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              It is called <strong>"Naive"</strong> because it assumes <strong>Conditional Independence</strong>. It assumes that the effect of a feature value on a given class is independent of the values of other features.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 text-xs text-amber-800">
              <strong>Reality Check:</strong> In real life, features are often correlated. For example, in a "Weather" dataset, "Humidity" and "Temperature" are usually related. Naive Bayes ignores this relationship to simplify the math.
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 font-mono text-xs text-indigo-300">
              P(x₁, x₂, ..., xₙ | C) = P(x₁|C) × P(x₂|C) × ... × P(xₙ|C)
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col items-center">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-6">Independence Visualization</h4>
            <svg viewBox="0 0 200 120" className="w-full max-w-[250px]">
              {/* Class Node */}
              <circle cx="100" cy="30" r="15" fill="#6366f1" />
              <text x="90" y="34" fontSize="10" fill="white" fontWeight="bold">Class</text>
              
              {/* Feature Nodes */}
              <circle cx="40" cy="90" r="12" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="32" y="93" fontSize="8" fill="#64748b">Feat 1</text>
              
              <circle cx="100" cy="90" r="12" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="92" y="93" fontSize="8" fill="#64748b">Feat 2</text>
              
              <circle cx="160" cy="90" r="12" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="152" y="93" fontSize="8" fill="#64748b">Feat 3</text>
              
              {/* Connections */}
              <line x1="90" y1="42" x2="45" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
              <line x1="100" y1="45" x2="100" y2="78" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
              <line x1="110" y1="42" x2="155" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            </svg>
            <p className="text-[9px] text-slate-400 mt-4 text-center">Features only interact with the Class, not each other.</p>
          </div>
        </div>
      </div>

      {/* 4. Step-by-Step Example: Spam Detection */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Step-by-Step Example: Spam Detection</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 uppercase">
                  <tr>
                    <th className="p-3">Email</th>
                    <th className="p-3">"Free"</th>
                    <th className="p-3">"Win"</th>
                    <th className="p-3">Class</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t">
                    <td className="p-3">1</td>
                    <td className="p-3 text-emerald-600 font-bold">Yes</td>
                    <td className="p-3 text-emerald-600 font-bold">Yes</td>
                    <td className="p-3 font-bold">Spam</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">2</td>
                    <td className="p-3 text-emerald-600 font-bold">Yes</td>
                    <td className="p-3 text-red-600 font-bold">No</td>
                    <td className="p-3 font-bold">Spam</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">3</td>
                    <td className="p-3 text-red-600 font-bold">No</td>
                    <td className="p-3 text-emerald-600 font-bold">Yes</td>
                    <td className="p-3 font-bold">Spam</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">4</td>
                    <td className="p-3 text-red-600 font-bold">No</td>
                    <td className="p-3 text-red-600 font-bold">No</td>
                    <td className="p-3 font-bold">Not Spam</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Calculation for: "Free=Yes, Win=Yes"</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <p><strong>1. Prior:</strong> P(Spam) = 3/4, P(Not Spam) = 1/4</p>
                <p><strong>2. Likelihood (Spam):</strong> P(Free|Spam)=2/3, P(Win|Spam)=2/3</p>
                <p><strong>3. Likelihood (Not Spam):</strong> P(Free|NotSpam)=0, P(Win|NotSpam)=0</p>
                <div className="mt-4 p-3 bg-white rounded border border-slate-200 font-mono text-indigo-600">
                  Score(Spam) = (3/4) * (2/3) * (2/3) = 0.33<br/>
                  Score(Not Spam) = (1/4) * 0 * 0 = 0
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">Result: Classified as <strong>Spam</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Solved Problem: Weather Dataset */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Solved Problem: Predicting "Play"</h2>
        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">The Dataset (Dataframe)</h3>
            <div className="overflow-x-auto mb-6">
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
                    ['1', 'Sunny', 'Mild', 'High', 'Weak', 'No'],
                    ['2', 'Cloudy', 'Hot', 'High', 'Weak', 'Yes'],
                    ['3', 'Sunny', 'Mild', 'Normal', 'Strong', 'Yes'],
                    ['4', 'Cloudy', 'Mild', 'High', 'Strong', 'Yes'],
                    ['5', 'Rainy', 'Mild', 'High', 'Strong', 'No'],
                    ['6', 'Rainy', 'Cool', 'Normal', 'Strong', 'No'],
                    ['7', 'Rainy', 'Mild', 'High', 'Weak', 'Yes'],
                    ['8', 'Sunny', 'Hot', 'High', 'Strong', 'No'],
                    ['9', 'Cloudy', 'Cool', 'Normal', 'Weak', 'Yes'],
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

            <h3 className="text-lg font-bold text-indigo-900 mb-4">The Challenge</h3>
            <p className="text-sm text-slate-600 mb-4">
              Predict if a game will be played (<strong>Play=Yes</strong> or <strong>Play=No</strong>) for the following conditions:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-indigo-700 inline-block">
              X = (Weather=Sunny, Temp=Cool, Humidity=Normal, Wind=Weak)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 text-xs mb-3 uppercase">Step 1: Class Frequencies</h4>
                <div className="space-y-2 text-xs text-emerald-800">
                  <p>Total Records: 10</p>
                  <p>• P(Yes) = 5/10 = 0.5</p>
                  <p>• P(No) = 5/10 = 0.5</p>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-xs mb-3 uppercase font-mono">Step 2: P(X | Play=Yes)</h4>
                <div className="space-y-2 text-[10px] text-blue-800">
                  <p>• P(Sunny|Yes) = 1/5</p>
                  <p>• P(Cool|Yes) = 1/5</p>
                  <p>• P(Normal|Yes) = 2/5</p>
                  <p>• P(Weak|Yes) = 3/5</p>
                  <div className="mt-3 p-2 bg-white rounded border border-blue-200 font-mono">
                    P(X|Yes) = (1/5)*(1/5)*(2/5)*(3/5) = 6/625 = 0.0096<br/>
                    <span className="text-indigo-600 font-bold">Final: 0.0096 * 0.5 = 0.0048</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-900 text-xs mb-3 uppercase font-mono">Step 3: P(X | Play=No)</h4>
                <div className="space-y-2 text-[10px] text-red-800">
                  <p>• P(Sunny|No) = 2/5</p>
                  <p>• P(Cool|No) = 1/5</p>
                  <p>• P(Normal|No) = 1/5</p>
                  <p>• P(Weak|No) = 1/5</p>
                  <div className="mt-3 p-2 bg-white rounded border border-red-200 font-mono">
                    P(X|No) = (2/5)*(1/5)*(1/5)*(1/5) = 2/625 = 0.0032<br/>
                    <span className="text-indigo-600 font-bold">Final: 0.0032 * 0.5 = 0.0016</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl text-white">
                <h4 className="font-bold text-indigo-300 text-xs mb-3 uppercase">Step 4: Final Comparison</h4>
                <div className="space-y-2 text-xs">
                  <p className="flex justify-between"><span>P(Yes|X) ∝</span> <span className="font-mono text-emerald-400">0.0048</span></p>
                  <p className="flex justify-between"><span>P(No|X) ∝</span> <span className="font-mono text-red-400">0.0016</span></p>
                  <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                    <p className="text-indigo-300 font-bold">0.0048 &gt; 0.0016</p>
                    <p className="text-lg font-bold mt-1">Prediction: YES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Types of Naive Bayes & Laplace Smoothing */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <ListChecks className="mr-2 text-blue-500" /> Variations of Naive Bayes
          </h3>
          <div className="space-y-4">
            <div className="group p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-blue-900 text-sm">Gaussian Naive Bayes</h4>
                <span className="text-[8px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">CONTINUOUS</span>
              </div>
              <p className="text-xs text-slate-600">Used when features follow a <strong>Normal Distribution</strong>. It calculates the mean and standard deviation for each class.</p>
            </div>
            <div className="group p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-emerald-900 text-sm">Multinomial Naive Bayes</h4>
                <span className="text-[8px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">DISCRETE</span>
              </div>
              <p className="text-xs text-slate-600">Ideal for <strong>word counts</strong> in text mining. It considers the frequency of words in documents.</p>
            </div>
            <div className="group p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-indigo-900 text-sm">Bernoulli Naive Bayes</h4>
                <span className="text-[8px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">BINARY</span>
              </div>
              <p className="text-xs text-slate-600">Used for <strong>Boolean features</strong> (Yes/No). It only cares if a word exists, not how many times.</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 shadow-sm">
          <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
            <AlertTriangle className="mr-2" size={24}/> The Zero Probability Problem
          </h3>
          <p className="text-sm text-orange-800 mb-6 leading-relaxed">
            If a feature value never appeared in a class during training, the probability becomes <strong>zero</strong>. Since we multiply probabilities, one zero wipes out the entire result!
          </p>
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-inner">
            <h4 className="text-xs font-bold text-orange-900 mb-4 uppercase tracking-wider">Solution: Laplace Smoothing</h4>
            <div className="bg-slate-900 text-indigo-300 p-4 rounded-lg font-mono text-center text-sm mb-4">
              P(x|c) = (count + α) / (total + α * d)
            </div>
            <div className="space-y-2 text-[10px] text-orange-700">
              <p>• <strong>α (Alpha):</strong> Smoothing parameter (usually 1).</p>
              <p>• <strong>d:</strong> Number of unique features/categories.</p>
              <p className="mt-4 p-2 bg-orange-50 rounded border border-orange-100 italic">
                Example: If a word appears 0 times in 100 spam emails with 1000 unique words: <br/>
                <span className="font-bold">P = (0 + 1) / (100 + 1000) = 0.0009</span> (No longer zero!)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Advantages & Disadvantages */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><CheckCircle2 className="mr-2" size={20}/> Advantages</h3>
          <ul className="text-sm text-emerald-800 space-y-2 list-disc list-inside">
            <li><strong>Fast & Efficient:</strong> Very low computational cost.</li>
            <li><strong>Small Datasets:</strong> Performs well even with limited training data.</li>
            <li><strong>High Dimensionality:</strong> Handles many features effectively.</li>
            <li><strong>Multi-class:</strong> Naturally supports multi-class classification.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h3 className="font-bold text-red-900 mb-3 flex items-center"><AlertTriangle className="mr-2" size={20}/> Limitations</h3>
          <ul className="text-sm text-red-800 space-y-2 list-disc list-inside">
            <li><strong>Independence Assumption:</strong> Rarely true in real-world data.</li>
            <li><strong>Zero Frequency:</strong> Requires smoothing to handle unseen values.</li>
            <li><strong>Feature Interactions:</strong> Cannot capture relationships between features.</li>
          </ul>
        </div>
      </div>

      {/* 5. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Naive Bayes is a supervised classification algorithm based on <strong>Bayes' Theorem</strong>. It assumes that features are <strong>conditionally independent</strong> given the class label. The algorithm calculates posterior probabilities for each class using prior probabilities and likelihoods, and assigns the class with the highest probability. It is widely used in spam filtering and sentiment analysis because it is simple, efficient, and works well with high-dimensional text data.
        </p>
      </div>
    </SectionLayout>
  );
};
