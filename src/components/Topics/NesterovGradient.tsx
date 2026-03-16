import React, { useState } from 'react';
import { BookOpen, Zap, TrendingDown, Activity, Target, Calculator, Info, CheckCircle2, AlertCircle, MousePointer2 } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const NesterovGradient = () => {
  const [vizMode, setVizMode] = useState<'gd' | 'momentum' | 'nesterov'>('nesterov');

  const vizOptions = [
    { id: 'gd', label: 'Gradient Descent', icon: Activity, color: 'slate', desc: 'Step → check slope → move' },
    { id: 'momentum', label: 'Momentum', icon: TrendingDown, color: 'blue', desc: 'Ball rolls with inertia' },
    { id: 'nesterov', label: 'Nesterov', icon: Target, color: 'indigo', desc: 'Ball looks ahead before rolling' },
  ];

  return (
    <SectionLayout 
      title="2. Nesterov Accelerated Gradient (NAG)" 
      description="A smarter optimization algorithm that 'looks ahead' to correct its course, preventing the overshooting problems of standard momentum."
    >
      {/* 1. Introduction */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Info className="mr-2 text-indigo-600" /> What is Nesterov Gradient?
          </h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            <strong>Nesterov Accelerated Gradient (NAG)</strong> is an advanced version of Gradient Descent with Momentum. While standard momentum blindly follows the accumulated velocity, NAG is "smarter" because it calculates the gradient at a <strong>predicted future position</strong>.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Why is it an improvement?</h4>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start"><CheckCircle2 size={14} className="mr-2 text-emerald-500 shrink-0 mt-0.5"/> <strong>Over GD:</strong> It uses momentum to escape local minima and speed up convergence.</li>
              <li className="flex items-start"><CheckCircle2 size={14} className="mr-2 text-emerald-500 shrink-0 mt-0.5"/> <strong>Over Momentum:</strong> It prevents "overshooting" by anticipating the slope ahead and slowing down if necessary.</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
             The Ball Analogy Intuition
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-lg mr-3 shadow-sm"><Activity className="text-slate-600" size={20}/></div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">1. Standard Gradient Descent (No Momentum)</h4>
                <p className="text-[11px] text-slate-700 leading-relaxed">A ball moves step-by-step downhill. At each step, it checks the slope at its <strong>current position</strong>, moves slightly, then stops. <br/><strong>Problem:</strong> Movement is slow and zig-zags in steep valleys.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-lg mr-3 shadow-sm"><TrendingDown className="text-blue-600" size={20}/></div>
              <div>
                <h4 className="text-sm font-bold text-blue-900">2. Momentum Gradient Descent (With Inertia)</h4>
                <p className="text-[11px] text-blue-800 leading-relaxed">The ball now has <strong>inertia</strong>. It remembers its previous direction and keeps moving. <br/><strong>Effect:</strong> Moves faster but often <strong>overshoots</strong> the minimum because it builds too much speed.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-lg mr-3 shadow-sm"><Target className="text-indigo-600" size={20}/></div>
              <div>
                <h4 className="text-sm font-bold text-indigo-900">3. Nesterov Gradient Descent (Look-Ahead Ball)</h4>
                <p className="text-[11px] text-indigo-800 leading-relaxed">Before calculating the slope, the ball first moves forward using momentum, then <strong>checks the slope ahead</strong>. <br/><strong>Result:</strong> Faster convergence and less overshooting by correcting direction early.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Visual Comparison Table */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Simple Visual Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase mb-2">Gradient Descent</div>
            <div className="text-sm text-slate-700">Step → check slope → move</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
            <div className="text-xs font-bold text-blue-400 uppercase mb-2">Momentum</div>
            <div className="text-sm text-blue-700">Ball rolls with inertia</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-center border-indigo-300 bg-indigo-50/30">
            <div className="text-xs font-bold text-indigo-400 uppercase mb-2">Nesterov</div>
            <div className="text-sm text-indigo-700 font-bold">Ball looks ahead before rolling</div>
          </div>
        </div>
      </div>

      {/* 2. Mathematical Formulation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Mathematical Formulation</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Standard GD */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-4">1. Standard Gradient Descent</h4>
            <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-800 mb-4 text-center">
              θ<sub>t+1</sub> = θ<sub>t</sub> - η · ∇J(θ<sub>t</sub>)
            </div>
            <p className="text-[10px] text-slate-500 italic">Uses only current gradient. Slow and prone to oscillations.</p>
          </div>

          {/* Momentum */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-4">2. Momentum Gradient Descent</h4>
            <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-800 mb-4">
              v<sub>t</sub> = γv<sub>t-1</sub> + η · ∇J(θ<sub>t</sub>)<br/>
              θ<sub>t+1</sub> = θ<sub>t</sub> - v<sub>t</sub>
            </div>
            <p className="text-[10px] text-slate-500 italic">Accumulates past gradients. Fast but often overshoots the minimum.</p>
          </div>

          {/* Nesterov */}
          <div className="bg-indigo-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-xs font-bold text-indigo-300 uppercase mb-4">3. Nesterov Accelerated Gradient</h4>
            <div className="bg-indigo-800 p-4 rounded-lg font-mono text-sm text-white mb-4">
              v<sub>t</sub> = γv<sub>t-1</sub> + η · ∇J(<span className="text-yellow-400">θ<sub>t</sub> - γv<sub>t-1</sub></span>)<br/>
              θ<sub>t+1</sub> = θ<sub>t</sub> - v<sub>t</sub>
            </div>
            <p className="text-[10px] text-indigo-300 italic">Calculates gradient at the <strong>look-ahead</strong> position.</p>
          </div>
        </div>

        {/* Symbol Definitions */}
        <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center"><Calculator size={16} className="mr-2"/> Symbol Definitions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">θ</span> Parameters (Weights)</div>
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">η</span> Learning Rate</div>
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">v</span> Velocity (Momentum)</div>
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">γ</span> Momentum Coefficient (e.g. 0.9)</div>
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">∇J</span> Gradient of Loss Function</div>
            <div className="flex items-center"><span className="font-mono font-bold text-indigo-600 mr-2">t</span> Current Time Step</div>
          </div>
        </div>
      </div>

      {/* 3. Algorithm Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Algorithm Steps</h2>
        <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-6">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">1</div>
              <h4 className="font-bold text-slate-800 mb-2 text-sm">Look-Ahead</h4>
              <p className="text-xs text-slate-500">Calculate the predicted future position using current momentum: <br/><strong>θ' = θ<sub>t</sub> - γv<sub>t-1</sub></strong></p>
            </div>
            <div className="p-6">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
              <h4 className="font-bold text-slate-800 mb-2 text-sm">Gradient Calculation</h4>
              <p className="text-xs text-slate-500">Compute the gradient of the loss function at this <strong>look-ahead</strong> position: <br/><strong>g = ∇J(θ')</strong></p>
            </div>
            <div className="p-6">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">3</div>
              <h4 className="font-bold text-slate-800 mb-2 text-sm">Velocity Update</h4>
              <p className="text-xs text-slate-500">Update the velocity by combining past momentum and the new gradient: <br/><strong>v<sub>t</sub> = γv<sub>t-1</sub> + ηg</strong></p>
            </div>
            <div className="p-6">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">4</div>
              <h4 className="font-bold text-slate-800 mb-2 text-sm">Parameter Update</h4>
              <p className="text-xs text-slate-500">Apply the updated velocity to the parameters: <br/><strong>θ<sub>t+1</sub> = θ<sub>t</sub> - v<sub>t</sub></strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Visualization Pane */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Visualization: Optimization Paths</h2>
        
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden">
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
            {/* 2D Cost Function Plot (New Visualization Style) */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-8">Cost vs Weight Visualization</h4>
              <div className="relative w-full aspect-[4/3] max-w-[400px]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Axes */}
                  <line x1="40" y1="20" x2="40" y2="260" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                  <line x1="40" y1="260" x2="380" y2="260" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                  <text x="10" y="140" fontSize="12" fill="#475569" transform="rotate(-90, 10, 140)" fontWeight="bold">Cost</text>
                  <text x="180" y="285" fontSize="12" fill="#475569" fontWeight="bold">Weight</text>

                  {/* Parabolic Curve (Cost Function) */}
                  <path d="M 60 40 Q 200 450 340 40" fill="none" stroke="#f97316" strokeWidth="4" opacity="0.8" />
                  <text x="70" y="240" fontSize="10" fill="#f97316" fontWeight="bold">Derivative of Cost</text>

                  {/* Minimum Point */}
                  <circle cx="200" cy="245" r="4" fill="#10b981" />
                  <line x1="200" y1="245" x2="240" y2="245" stroke="#10b981" strokeWidth="1" strokeDasharray="2" />
                  <text x="245" y="248" fontSize="10" fill="#10b981" fontWeight="bold">Minimum Cost</text>

                  {/* Gradient Descent Visualization */}
                  {vizMode === 'gd' && (
                    <g>
                      {/* Initial Position */}
                      <circle cx="300" cy="115" r="8" fill="#000" />
                      <text x="315" y="110" fontSize="10" fill="#000" fontWeight="bold">Initial Weight</text>
                      
                      {/* Tangent Line (Gradient) */}
                      <line x1="260" y1="65" x2="340" y2="165" stroke="#000" strokeWidth="1.5" strokeDasharray="4" />
                      <text x="345" y="160" fontSize="10" fill="#000">Gradient</text>

                      {/* Incremental Steps */}
                      <path d="M 290 130 L 275 155 M 265 170 L 250 190 M 240 205 L 225 225" fill="none" stroke="#000" strokeWidth="2" markerEnd="url(#arrow-black-small)" />
                      <text x="240" y="140" fontSize="10" fill="#000" fontWeight="bold" textAnchor="end">Incremental<br/>Step</text>
                    </g>
                  )}

                  {/* Momentum Visualization */}
                  {vizMode === 'momentum' && (
                    <g>
                      <circle cx="300" cy="115" r="8" fill="#3b82f6" />
                      {/* Overshoot Path */}
                      <path d="M 300 115 Q 150 350 100 200" fill="none" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                      <text x="100" y="180" fontSize="10" fill="#3b82f6" fontWeight="bold">Overshoots Minimum</text>
                      <text x="315" y="110" fontSize="10" fill="#3b82f6" fontWeight="bold">High Inertia</text>
                    </g>
                  )}

                  {/* Nesterov Visualization */}
                  {vizMode === 'nesterov' && (
                    <g>
                      <circle cx="300" cy="115" r="8" fill="#4f46e5" />
                      {/* Lookahead Point */}
                      <circle cx="220" cy="225" r="4" fill="#a5b4fc" stroke="#4f46e5" />
                      <text x="160" y="215" fontSize="10" fill="#4f46e5" fontWeight="bold">Look-ahead Point</text>
                      
                      {/* Corrected Path */}
                      <path d="M 300 115 L 220 225 L 200 245" fill="none" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#arrow-indigo)" />
                      <text x="260" y="180" fontSize="10" fill="#4f46e5" fontWeight="bold">Corrected Step</text>
                    </g>
                  )}

                  <defs>
                    <marker id="arrow-slate" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" /></marker>
                    <marker id="arrow-black-small" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#000" /></marker>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker>
                    <marker id="arrow-indigo" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" /></marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Dynamic Contour Plot */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-inner flex flex-col items-center justify-center min-h-[300px]">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-8">Loss Surface Trajectory</h4>
              <svg viewBox="0 0 400 300" className="w-full h-full max-w-sm">
                {/* Contours */}
                <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#334155" strokeWidth="1" />
                <ellipse cx="200" cy="150" rx="140" ry="90" fill="none" stroke="#334155" strokeWidth="1" />
                <ellipse cx="200" cy="150" rx="100" ry="60" fill="none" stroke="#334155" strokeWidth="1" />
                <ellipse cx="200" cy="150" rx="60" ry="30" fill="none" stroke="#334155" strokeWidth="1" />
                <circle cx="200" cy="150" r="4" fill="#ef4444" />

                {vizMode === 'gd' && (
                  <path d="M 50 50 L 80 120 L 110 80 L 140 160 L 170 140 L 200 150" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="4" className="animate-pulse" />
                )}
                
                {vizMode === 'momentum' && (
                  <path d="M 50 50 Q 150 20 250 180 Q 220 200 200 150" fill="none" stroke="#3b82f6" strokeWidth="3" className="animate-pulse" />
                )}

                {vizMode === 'nesterov' && (
                  <path d="M 50 50 Q 120 60 180 120 Q 200 140 200 150" fill="none" stroke="#4f46e5" strokeWidth="4" className="animate-pulse" />
                )}
                
                <text x="20" y="280" fontSize="12" fill="#94a3b8" className="font-mono">
                  {vizMode === 'gd' && "Status: Slow Zig-Zag"}
                  {vizMode === 'momentum' && "Status: High Inertia Overshoot"}
                  {vizMode === 'nesterov' && "Status: Optimal Look-Ahead Path"}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Comparison Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="p-4 font-bold border-b text-sm">Feature</th>
                <th className="p-4 font-bold border-b text-sm">Gradient Descent</th>
                <th className="p-4 font-bold border-b text-sm">Momentum</th>
                <th className="p-4 font-bold border-b text-sm bg-indigo-50 text-indigo-700">Nesterov (NAG)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600">
              <tr className="border-b">
                <td className="p-4 font-bold text-slate-800">Gradient Calculation</td>
                <td className="p-4">At current position</td>
                <td className="p-4">At current position</td>
                <td className="p-4 bg-indigo-50/30">At look-ahead position</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-bold text-slate-800">Convergence Speed</td>
                <td className="p-4 text-red-500">Slow</td>
                <td className="p-4 text-blue-500">Fast</td>
                <td className="p-4 bg-indigo-50/30 text-indigo-600 font-bold">Fastest</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-bold text-slate-800">Oscillations</td>
                <td className="p-4">High</td>
                <td className="p-4">Moderate</td>
                <td className="p-4 bg-indigo-50/30 text-indigo-600 font-bold">Very Low</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-800">Stability</td>
                <td className="p-4">Stable but slow</td>
                <td className="p-4 text-orange-500">Can overshoot</td>
                <td className="p-4 bg-indigo-50/30 text-emerald-600 font-bold">Highly Stable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Advantages & Applications */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-4 flex items-center"><CheckCircle2 className="mr-2"/> Advantages</h3>
          <ul className="text-sm text-emerald-800 space-y-3">
            <li className="flex items-start"><strong>1. Faster Convergence:</strong> Reaches the global minimum in fewer iterations than standard momentum.</li>
            <li className="flex items-start"><strong>2. Reduced Oscillations:</strong> The look-ahead correction prevents the "ping-pong" effect in narrow valleys.</li>
            <li className="flex items-start"><strong>3. Better Stability:</strong> Particularly effective in deep learning where loss surfaces are complex and non-convex.</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-sm text-white">
          <h3 className="font-bold text-indigo-300 mb-4 flex items-center"><TrendingDown className="mr-2"/> Applications</h3>
          <ul className="text-sm text-slate-300 space-y-3">
            <li className="flex items-start"><strong>Neural Network Training:</strong> Standard choice for training deep Feedforward and Recurrent networks.</li>
            <li className="flex items-start"><strong>Computer Vision:</strong> Used in training CNNs for image classification and object detection.</li>
            <li className="flex items-start"><strong>Modern Optimizers:</strong> Foundation for algorithms like <strong>Nadam</strong> (Nesterov + Adam).</li>
          </ul>
        </div>
      </div>

      {/* 7. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          In Nesterov Gradient Descent, the optimizer first moves in the direction of momentum to estimate a future position and then computes the gradient at that point. This is similar to a <strong>ball rolling down a hill that looks slightly ahead</strong> before deciding its direction, resulting in faster and more stable convergence by reducing overshooting and oscillations.
        </p>
      </div>
    </SectionLayout>
  );
};
