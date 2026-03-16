import React, { useState } from 'react';
import { Minimize2, BarChart3, Target, CheckCircle2, BookOpen, ArrowDownRight, Layers, Info, Activity, MousePointer2 } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const PCAExplanation = () => {
  const [vizMode, setVizMode] = useState<'original' | 'pc1' | 'pc2'>('original');

  const vizOptions = [
    { id: 'original', label: 'Original Data', icon: Activity, color: 'slate', desc: 'Correlated features' },
    { id: 'pc1', label: 'PC1 Projection', icon: Target, color: 'blue', desc: 'Max variance direction' },
    { id: 'pc2', label: 'PC2 Projection', icon: Minimize2, color: 'red', desc: 'Remaining variance' },
  ];

  return (
    <SectionLayout 
      title="4. Principal Component Analysis (PCA)" 
      description="A statistical technique used for dimensionality reduction by transforming a large set of variables into a smaller one that still contains most of the information."
    >
      {/* 1. Intro & The Curse of Dimensionality */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Minimize2 className="mr-2 text-blue-500" /> What is PCA?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            PCA is an <strong>unsupervised learning</strong> technique used to reduce the number of features (dimensions) in a dataset while preserving as much <strong>variance</strong> (information) as possible.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
            <strong>Goal:</strong> Transform high-dimensional data (e.g., 100 features) into low-dimensional data (e.g., 2 features) for visualization or faster training.
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center">
             The Curse of Dimensionality
          </h2>
          <p className="text-sm text-red-800 mb-4">
            As the number of features increases, the volume of the space increases so fast that the data becomes <strong>sparse</strong>.
          </p>
          <ul className="text-xs text-red-700 space-y-2 list-disc list-inside">
            <li><strong>Overfitting:</strong> Models learn noise instead of signal.</li>
            <li><strong>Computation:</strong> Training becomes extremely slow.</li>
            <li><strong>Visualization:</strong> Humans cannot visualize data beyond 3D.</li>
          </ul>
        </div>
      </div>

      {/* 2. How PCA Works (Step-by-Step) */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">How PCA Works (Step-by-Step)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Standardize</h4>
            <p className="text-[10px] text-slate-600">Scale data to mean=0, var=1.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Covariance</h4>
            <p className="text-[10px] text-slate-600">Find relationships between features.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Eigen-Decomp</h4>
            <p className="text-[10px] text-slate-600">Extract directions and magnitudes.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Sort & Select</h4>
            <p className="text-[10px] text-slate-600">Pick top K components by variance.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Project</h4>
            <p className="text-[10px] text-slate-600">Transform data to new axes.</p>
          </div>
        </div>
      </div>

      {/* 3. Principal Components & Interactive Visualization */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Understanding Principal Components</h2>
        
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden mb-8">
          {/* Selector Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            {vizOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = vizMode === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setVizMode(opt.id as any)}
                  className={`flex-1 py-4 px-6 flex flex-col items-center transition-all duration-200 border-b-2 ${
                    isActive 
                    ? `border-${opt.color}-500 bg-white text-${opt.color}-700` 
                    : 'border-transparent text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={20} className={`mb-1 ${isActive ? `text-${opt.color}-500` : 'text-slate-400'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">{opt.label}</span>
                  <span className="text-[10px] opacity-60 mt-1">{opt.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="p-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive SVG Visualization */}
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-8">Projection Visualization</h4>
              <div className="relative w-full aspect-square max-w-[350px]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Axes */}
                  <line x1="50" y1="250" x2="350" y2="250" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                  <line x1="50" y1="250" x2="50" y2="50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                  <text x="340" y="270" fontSize="12" fill="#94a3b8">Feature 1</text>
                  <text x="10" y="60" fontSize="12" fill="#94a3b8" transform="rotate(-90, 10, 60)">Feature 2</text>

                  {/* Data Points */}
                  {[
                    {x: 100, y: 200}, {x: 120, y: 190}, {x: 140, y: 170}, 
                    {x: 160, y: 160}, {x: 180, y: 140}, {x: 200, y: 130},
                    {x: 220, y: 110}, {x: 240, y: 100}, {x: 260, y: 80}
                  ].map((p, i) => {
                    // Projection math (simplified for visualization)
                    // PC1 line: y = -0.75x + 275 (approx)
                    // PC2 is perpendicular
                    const pc1X = p.x + (p.y - (-0.75 * p.x + 275)) * 0.5;
                    const pc1Y = -0.75 * pc1X + 275;

                    return (
                      <g key={i}>
                        {/* Original Point */}
                        <circle cx={p.x} cy={p.y} r="4" fill="#94a3b8" opacity={vizMode === 'original' ? 1 : 0.3} />
                        
                        {/* Projection Lines */}
                        {vizMode === 'pc1' && (
                          <>
                            <line x1={p.x} y1={p.y} x2={pc1X} y2={pc1Y} stroke="#3b82f6" strokeWidth="1" strokeDasharray="2" opacity="0.5" />
                            <circle cx={pc1X} cy={pc1Y} r="3" fill="#3b82f6" />
                          </>
                        )}
                      </g>
                    );
                  })}

                  {/* PC1 Line */}
                  <line 
                    x1="80" y1="220" x2="300" y2="60" 
                    stroke="#3b82f6" 
                    strokeWidth={vizMode === 'pc1' ? "4" : "1"} 
                    opacity={vizMode === 'pc1' || vizMode === 'original' ? 1 : 0.2}
                    markerEnd="url(#arrow-blue)" 
                  />
                  {(vizMode === 'pc1' || vizMode === 'original') && (
                    <text x="280" y="50" fontSize="14" fill="#3b82f6" fontWeight="bold">PC1</text>
                  )}

                  {/* PC2 Line */}
                  <line 
                    x1="150" y1="100" x2="230" y2="200" 
                    stroke="#ef4444" 
                    strokeWidth={vizMode === 'pc2' ? "4" : "1"} 
                    opacity={vizMode === 'pc2' || vizMode === 'original' ? 1 : 0.2}
                    markerEnd="url(#arrow-red)" 
                  />
                  {(vizMode === 'pc2' || vizMode === 'original') && (
                    <text x="235" y="215" fontSize="14" fill="#ef4444" fontWeight="bold">PC2</text>
                  )}

                  <defs>
                    <marker id="arrow-slate" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" /></marker>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker>
                  </defs>
                </svg>
              </div>
              <div className="mt-4 flex items-center text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                <MousePointer2 size={12} className="mr-1" />
                Click the tabs above to see projections
              </div>
            </div>

            {/* Explanation Content */}
            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-3 flex items-center">
                  <Info size={18} className="mr-2" /> The "Shadow" Analogy
                </h4>
                <p className="text-sm text-indigo-800 mb-4 leading-relaxed">
                  Imagine a 3D object. PCA is like finding the best angle to shine a light so the <strong>2D shadow</strong> captures the most detail (variance) of the original object.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <div className="text-xs font-bold text-indigo-600 uppercase mb-1">PC1</div>
                    <div className="text-xs text-indigo-800">The longest possible shadow (max spread).</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <div className="text-xs font-bold text-indigo-600 uppercase mb-1">PC2</div>
                    <div className="text-xs text-indigo-800">The next longest shadow, perpendicular to PC1.</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl text-white shadow-md">
                <h4 className="font-bold text-indigo-300 mb-3">Mathematical Formulation</h4>
                <p className="text-sm text-slate-300 mb-4 italic">"Transforming correlated features into uncorrelated components"</p>
                <div className="bg-slate-700 p-4 rounded-lg font-mono text-xs text-emerald-400 space-y-2">
                  <div>1. Covariance Matrix: <strong>Σ = (1/n) XᵀX</strong></div>
                  <div>2. Eigen-Decomposition: <strong>Σv = λv</strong></div>
                  <div className="text-slate-400 mt-2">
                    λ (Eigenvalue) = Variance captured<br/>
                    v (Eigenvector) = Direction of PC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Explained Variance & Scree Plot */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center"><BarChart3 className="mr-2 text-indigo-500"/> Explained Variance & Scree Plot</h3>
          <p className="text-sm text-slate-600 mb-4">
            How many components should we keep? We use a <strong>Scree Plot</strong> to find the "Elbow".
          </p>
          
          {/* Simple Scree Plot Visualization */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
            <svg viewBox="0 0 200 100" className="w-full h-24">
              <path d="M 20 20 L 60 60 L 100 85 L 140 95 L 180 98" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="20" cy="20" r="3" fill="#3b82f6" />
              <circle cx="60" cy="60" r="3" fill="#3b82f6" />
              <circle cx="100" cy="85" r="3" fill="#3b82f6" />
              <text x="55" y="50" fontSize="8" fill="#ef4444" fontWeight="bold">Elbow Point</text>
              <line x1="60" y1="60" x2="60" y2="55" stroke="#ef4444" strokeWidth="1" />
            </svg>
          </div>

          <div className="space-y-3">
            <div className="w-full bg-slate-100 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{width: '70%'}}></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-500"><span>PC1</span><span>70% Variance</span></div>
            
            <div className="w-full bg-slate-100 rounded-full h-4">
              <div className="bg-blue-400 h-4 rounded-full" style={{width: '20%'}}></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-500"><span>PC2</span><span>20% Variance</span></div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic">Rule of thumb: Keep components that capture 80-95% of total variance.</p>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><CheckCircle2 className="mr-2" /> Advantages of PCA</h3>
          <ul className="text-sm text-emerald-800 space-y-2 list-disc list-inside">
            <li><strong>Removes Noise:</strong> Keeps only the most important patterns.</li>
            <li><strong>Speeds up Algorithms:</strong> Fewer features = faster training.</li>
            <li><strong>Visualization:</strong> Can plot high-dimensional data in 2D or 3D.</li>
            <li><strong>Solves Multicollinearity:</strong> PCs are independent of each other.</li>
          </ul>
        </div>
      </div>

      {/* 5. Limitations & Applications */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Real-World Applications</h2>
          <div className="space-y-3">
            <div className="flex items-center bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <Layers className="text-blue-500 mr-3" size={18}/>
              <span className="text-sm text-slate-700 font-medium">Image Compression (Eigenfaces)</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <Target className="text-red-500 mr-3" size={18}/>
              <span className="text-sm text-slate-700 font-medium">Genetics (Analyzing DNA patterns)</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <ArrowDownRight className="text-emerald-500 mr-3" size={18}/>
              <span className="text-sm text-slate-700 font-medium">Stock Market Analysis</span>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm">
          <h3 className="font-bold text-orange-900 mb-3">Limitations</h3>
          <ul className="text-sm text-orange-800 space-y-2 list-disc list-inside">
            <li><strong>Interpretability:</strong> PCs are hard to understand compared to original features.</li>
            <li><strong>Information Loss:</strong> Some data is always lost during reduction.</li>
            <li><strong>Linearity:</strong> PCA assumes linear relationships between variables.</li>
            <li><strong>Sensitive to Scaling:</strong> Must standardize data first.</li>
          </ul>
        </div>
      </div>

      {/* 6. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Principal Component Analysis (PCA) is an unsupervised dimensionality reduction technique that transforms a high-dimensional dataset into a lower-dimensional space. It works by identifying the directions (Principal Components) along which the data has the maximum variance. By keeping only the top components that capture most of the information, PCA helps in reducing computation time, removing noise, and enabling data visualization, while minimizing information loss.
        </p>
      </div>
    </SectionLayout>
  );
};
