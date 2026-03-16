import React from 'react';
import { Target, Shield, Split, Zap, CheckCircle2, BookOpen, Layers, Maximize2 } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const SVMExplanation = () => {
  return (
    <SectionLayout 
      title="5. Support Vector Machines (SVM)" 
      description="A powerful supervised learning algorithm used for classification and regression that finds the optimal hyperplane to separate data points into different classes."
    >
      {/* 1. Intro & Core Concept */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <Shield className="mr-2 text-indigo-600" /> What is SVM?
          </h2>
          <p className="text-sm text-indigo-800 mb-4">
            SVM is a <strong>supervised learning</strong> algorithm that works by finding a <strong>hyperplane</strong> (a decision boundary) that best separates data into different classes.
          </p>
          <div className="bg-white p-4 rounded-lg border border-indigo-100 text-sm text-slate-700 shadow-sm">
            <strong>The Goal:</strong> Maximize the <strong>margin</strong> (distance) between the hyperplane and the nearest data points from each class.
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
             Key Terminology
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
              <span><strong>Hyperplane:</strong> The decision boundary that separates classes.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <span><strong>Support Vectors:</strong> The data points closest to the hyperplane.</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
              <span><strong>Margin:</strong> The gap between the support vectors of different classes.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Visual Intuition */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Visualizing the Maximum Margin</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              Unlike other algorithms that just find <em>any</em> line to separate data, SVM looks for the <strong>Optimal Hyperplane</strong>—the one with the largest possible margin. This makes the model more robust to new, unseen data.
            </p>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Target size={18} className="mr-2 text-red-500"/> Support Vectors</h4>
              <p className="text-sm text-slate-600">
                Support vectors are the most important points. If you move them, the hyperplane moves. If you move any other points, the hyperplane stays the same. This makes SVM very <strong>memory efficient</strong>.
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-2">Why Maximize Margin?</h4>
              <p className="text-sm text-emerald-800">
                A larger margin reduces the chance of misclassification. Think of it as a wider "no-man's land" between two warring territories—it's harder for a point to accidentally cross over to the wrong side.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col items-center justify-center p-8 shadow-inner min-h-[350px]">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Optimal Hyperplane & Margin</h4>
            <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
              {/* Grid lines */}
              <line x1="50" y1="250" x2="350" y2="250" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="50" y1="250" x2="50" y2="50" stroke="#f1f5f9" strokeWidth="1" />

              {/* Class A (Blue) */}
              <circle cx="100" cy="100" r="6" fill="#3b82f6" />
              <circle cx="120" cy="140" r="6" fill="#3b82f6" />
              <circle cx="80" cy="160" r="6" fill="#3b82f6" />
              <circle cx="150" cy="110" r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" /> {/* Support Vector */}

              {/* Class B (Red) */}
              <circle cx="300" cy="200" r="6" fill="#ef4444" />
              <circle cx="280" cy="240" r="6" fill="#ef4444" />
              <circle cx="320" cy="220" r="6" fill="#ef4444" />
              <circle cx="250" cy="210" r="6" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" /> {/* Support Vector */}

              {/* Hyperplane (Main Line) */}
              <line x1="100" y1="280" x2="300" y2="40" stroke="#1e293b" strokeWidth="3" />
              <text x="310" y="50" fontSize="12" fill="#1e293b" fontWeight="bold">Hyperplane</text>

              {/* Margin Lines */}
              <line x1="130" y1="280" x2="330" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" />
              <line x1="70" y1="280" x2="270" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" />

              {/* Margin Indicators */}
              <path d="M 180 180 L 215 210" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" markerStart="url(#arrow-green)" />
              <text x="210" y="190" fontSize="10" fill="#10b981" fontWeight="bold" transform="rotate(40, 210, 190)">Margin</text>

              <defs>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" /></marker>
              </defs>
            </svg>
            <div className="flex space-x-4 mt-4">
              <div className="flex items-center text-[10px] text-slate-500"><div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div> Class A</div>
              <div className="flex items-center text-[10px] text-slate-500"><div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div> Class B</div>
              <div className="flex items-center text-[10px] text-slate-500"><div className="w-3 h-3 border-2 border-slate-800 rounded-full mr-1"></div> Support Vector</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Kernel Trick */}
      <div className="mb-12 bg-slate-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={120} /></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <Layers className="mr-3" /> The Kernel Trick
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl">
            What if the data is not linearly separable? (e.g., one class is a circle inside another). In 2D, you can't draw a straight line to separate them.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-white mb-2">1. The Problem (2D)</h4>
              <p className="text-xs text-slate-400 mb-4">Data points are mixed in a way that no straight line can separate them.</p>
              <div className="h-24 bg-slate-900 rounded border border-slate-700 flex items-center justify-center">
                <div className="relative w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-indigo-300 mb-2">2. The Solution (Higher D)</h4>
              <p className="text-xs text-slate-400 mb-4">The Kernel Trick maps data into a <strong>higher dimension</strong> (e.g., 3D) where a hyperplane <em>can</em> separate them.</p>
              <div className="h-24 bg-slate-900 rounded border border-slate-700 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1 bg-indigo-500 mb-1"></div>
                  <div className="w-8 h-8 bg-blue-500/20 border border-blue-500 rounded-full"></div>
                  <div className="w-12 h-1 bg-indigo-500 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-indigo-900/50 text-indigo-200 px-3 py-1 rounded-full text-xs font-mono border border-indigo-700">Linear Kernel</span>
            <span className="bg-indigo-900/50 text-indigo-200 px-3 py-1 rounded-full text-xs font-mono border border-indigo-700">Polynomial Kernel</span>
            <span className="bg-indigo-900/50 text-indigo-200 px-3 py-1 rounded-full text-xs font-mono border border-indigo-700">RBF (Gaussian) Kernel</span>
            <span className="bg-indigo-900/50 text-indigo-200 px-3 py-1 rounded-full text-xs font-mono border border-indigo-700">Sigmoid Kernel</span>
          </div>
        </div>
      </div>

      {/* 4. Hard vs Soft Margin */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center"><Maximize2 className="mr-2 text-blue-500" /> Hard Margin</h3>
          <p className="text-sm text-slate-600 mb-4">Strictly separates all points. Only works if data is perfectly linearly separable. Very sensitive to outliers.</p>
          <div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs text-slate-500 italic">
            "No mistakes allowed. Every point must be on the correct side."
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center"><Split className="mr-2 text-orange-500" /> Soft Margin (C Parameter)</h3>
          <p className="text-sm text-slate-600 mb-4">Allows some misclassifications to achieve a better overall separation. Controlled by the <strong>C parameter</strong>.</p>
          <ul className="text-xs text-slate-500 space-y-1">
            <li><strong>Small C:</strong> Wider margin, allows more mistakes (Generalizes better).</li>
            <li><strong>Large C:</strong> Narrower margin, allows fewer mistakes (May overfit).</li>
          </ul>
        </div>
      </div>

      {/* 5. Pros, Cons & Apps */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 shadow-sm">
          <h4 className="font-bold text-emerald-900 mb-2 flex items-center"><CheckCircle2 size={18} className="mr-2"/> Pros</h4>
          <ul className="text-xs text-emerald-800 space-y-2 list-disc list-inside">
            <li>Effective in high dimensions.</li>
            <li>Memory efficient (uses only support vectors).</li>
            <li>Versatile (different kernels).</li>
            <li>Robust to outliers with soft margin.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm">
          <h4 className="font-bold text-red-900 mb-2 flex items-center"><Zap size={18} className="mr-2"/> Cons</h4>
          <ul className="text-xs text-red-800 space-y-2 list-disc list-inside">
            <li>Slow on very large datasets.</li>
            <li>Doesn't provide probability estimates directly.</li>
            <li>Choosing the right kernel is difficult.</li>
            <li>Sensitive to feature scaling.</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center"><Target size={18} className="mr-2"/> Applications</h4>
          <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
            <li>Text Classification (Spam detection).</li>
            <li>Image Recognition.</li>
            <li>Bioinformatics (Protein classification).</li>
            <li>Handwriting Recognition.</li>
          </ul>
        </div>
      </div>

      {/* 6. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Support Vector Machine (SVM) is a supervised learning algorithm that finds the optimal hyperplane to separate data into classes by maximizing the margin between the boundary and the nearest data points (support vectors). For non-linearly separable data, SVM uses the <strong>Kernel Trick</strong> to map data into higher-dimensional spaces. SVM is highly effective in high-dimensional spaces and is widely used for text classification, image recognition, and bioinformatics.
        </p>
      </div>
    </SectionLayout>
  );
};
