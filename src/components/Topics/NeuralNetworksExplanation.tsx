import React from 'react';
import { Brain, Zap, Target, CheckCircle2, BookOpen, Layers, Activity, ArrowRight } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const NeuralNetworksExplanation = () => {
  return (
    <SectionLayout 
      title="12. Neural Networks: How They Work" 
      description="A computational model inspired by the human brain, consisting of interconnected layers of neurons that learn to recognize complex patterns in data."
    >
      {/* 1. Intro & Biological Inspiration */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <Brain className="mr-2 text-indigo-600" /> What is a Neural Network?
          </h2>
          <p className="text-sm text-indigo-800 mb-4">
            An Artificial Neural Network (ANN) is a set of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Deep Learning</span>
            <span className="bg-emerald-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">ANN</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-100 text-sm text-slate-700 shadow-sm">
            <strong>The Building Block:</strong> The <strong>Perceptron</strong> (Artificial Neuron). It takes multiple inputs, applies weights, adds a bias, and passes the result through an activation function.
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
             The Biological Connection
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-700 p-3 rounded border border-slate-600">
               <div className="font-bold text-indigo-400 mb-1">Biological Neuron</div>
               <ul className="space-y-1 text-slate-400">
                 <li>Dendrites (Inputs)</li>
                 <li>Cell Body (Processor)</li>
                 <li>Axon (Output)</li>
                 <li>Synapses (Weights)</li>
               </ul>
            </div>
            <div className="bg-slate-700 p-3 rounded border border-slate-600">
               <div className="font-bold text-emerald-400 mb-1">Artificial Neuron</div>
               <ul className="space-y-1 text-slate-400">
                 <li>Input Features (x)</li>
                 <li>Summation (Σ)</li>
                 <li>Activation (f)</li>
                 <li>Weights (w)</li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Perceptron Math */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Inside a Single Neuron (Perceptron)</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              A neuron processes information in three main steps:
            </p>
            <ol className="space-y-4">
              <li className="flex items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">1</div>
                <div>
                  <strong className="block text-sm text-slate-800">Weighted Sum</strong>
                  <span className="text-xs text-slate-500">Multiply each input by its weight and add a bias: <br/><span className="font-mono text-indigo-600">z = (w₁x₁ + w₂x₂ + ... + wₙxₙ) + b</span></span>
                </div>
              </li>
              <li className="flex items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">2</div>
                <div>
                  <strong className="block text-sm text-slate-800">Activation Function</strong>
                  <span className="text-xs text-slate-500">Apply a non-linear function to the sum: <br/><span className="font-mono text-indigo-600">a = f(z)</span></span>
                </div>
              </li>
              <li className="flex items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">3</div>
                <div>
                  <strong className="block text-sm text-slate-800">Output</strong>
                  <span className="text-xs text-slate-500">The result is passed to the next layer or used as the final prediction.</span>
                </div>
              </li>
            </ol>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white p-8 shadow-inner min-h-[350px]">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-8 text-center">Anatomy of a Perceptron</h4>
             <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
                {/* Inputs */}
                <circle cx="50" cy="80" r="15" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                <text x="45" y="85" fontSize="12" fill="#64748b">x₁</text>
                <circle cx="50" cy="150" r="15" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                <text x="45" y="155" fontSize="12" fill="#64748b">x₂</text>
                <circle cx="50" cy="220" r="15" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                <text x="45" y="225" fontSize="12" fill="#64748b">xₙ</text>

                {/* Weights */}
                <line x1="65" y1="80" x2="180" y2="150" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="105" fontSize="10" fill="#3b82f6" fontWeight="bold">w₁</text>
                <line x1="65" y1="150" x2="180" y2="150" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="145" fontSize="10" fill="#3b82f6" fontWeight="bold">w₂</text>
                <line x1="65" y1="220" x2="180" y2="150" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="200" fontSize="10" fill="#3b82f6" fontWeight="bold">wₙ</text>

                {/* Summation Node */}
                <circle cx="200" cy="150" r="30" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="3" />
                <text x="190" y="158" fontSize="24" fill="white" fontWeight="bold">Σ</text>
                <text x="190" y="110" fontSize="10" fill="#64748b" fontWeight="bold">Bias (b)</text>
                <line x1="200" y1="115" x2="200" y2="120" stroke="#64748b" strokeWidth="2" />

                {/* Activation Node */}
                <rect x="260" y="125" width="50" height="50" rx="8" fill="#10b981" stroke="#047857" strokeWidth="3" />
                <path d="M 270 160 Q 285 160 285 150 Q 285 140 300 140" fill="none" stroke="white" strokeWidth="3" />
                <text x="275" y="120" fontSize="10" fill="#047857" fontWeight="bold">f(z)</text>

                {/* Connections */}
                <line x1="230" y1="150" x2="260" y2="150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-slate)" />
                <line x1="310" y1="150" x2="360" y2="150" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow-slate)" />
                <text x="330" y="140" fontSize="12" fill="#047857" fontWeight="bold">Output</text>

                <defs>
                  <marker id="arrow-slate" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" /></marker>
                </defs>
             </svg>
          </div>
        </div>
      </div>

      {/* 3. Multi-Layer Perceptron (MLP) Visualization */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Multi-Layer Perceptron (MLP)</h2>
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden p-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-8">A Simple Deep Network</h4>
            <div className="relative w-full aspect-video max-w-[400px]">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Connections (Background) */}
                {[
                  {l1: [40, 60], l2: [40, 100, 160]},
                  {l1: [100, 60], l2: [40, 100, 160]},
                  {l1: [160, 60], l2: [40, 100, 160]},
                  {l2: [40, 140], l3: [100]},
                  {l2: [100, 140], l3: [100]},
                  {l2: [160, 140], l3: [100]},
                ].map((conn, i) => (
                  <g key={i}>
                    {conn.l1 && conn.l2.map((y2, j) => (
                      <line key={j} x1="60" y1={conn.l1[0]} x2="140" y2={y2} stroke="#e2e8f0" strokeWidth="1" />
                    ))}
                    {conn.l2 && conn.l3 && conn.l2.map((y2, j) => (
                      <line key={j} x1="140" y1={y2} x2="220" y2={conn.l3[0]} stroke="#e2e8f0" strokeWidth="1" />
                    ))}
                  </g>
                ))}

                {/* Input Layer */}
                <circle cx="60" cy="60" r="10" fill="#3b82f6" />
                <circle cx="60" cy="100" r="10" fill="#3b82f6" />
                <circle cx="60" cy="140" r="10" fill="#3b82f6" />
                <text x="45" y="35" fontSize="10" fill="#64748b" fontWeight="bold">Input</text>

                {/* Hidden Layer */}
                <circle cx="140" cy="40" r="10" fill="#6366f1" />
                <circle cx="140" cy="80" r="10" fill="#6366f1" />
                <circle cx="140" cy="120" r="10" fill="#6366f1" />
                <circle cx="140" cy="160" r="10" fill="#6366f1" />
                <text x="120" y="25" fontSize="10" fill="#64748b" fontWeight="bold">Hidden</text>

                {/* Output Layer */}
                <circle cx="220" cy="100" r="10" fill="#10b981" />
                <text x="205" y="85" fontSize="10" fill="#64748b" fontWeight="bold">Output</text>
              </svg>
            </div>
            <div className="mt-4 flex items-center text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <Activity size={10} className="mr-1" />
              Layers of neurons work together to learn features
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Layer Functions</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li><span className="font-bold text-blue-600">Input:</span> Passes raw features into the network.</li>
                <li><span className="font-bold text-indigo-600">Hidden:</span> Extracts abstract patterns (e.g., edges in images).</li>
                <li><span className="font-bold text-emerald-600">Output:</span> Provides the final classification or value.</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 text-sm mb-1">Deep Learning</h4>
              <p className="text-xs text-indigo-800">
                When a network has <strong>two or more</strong> hidden layers, it is considered "Deep". This allows it to learn extremely complex hierarchies of data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Activation Functions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Activation Functions</h2>
        <p className="text-sm text-slate-600 mb-8">
          Activation functions introduce <strong>non-linearity</strong>. Without them, a neural network would just be a giant linear regression model, unable to learn complex patterns.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2">Sigmoid</h5>
            <div className="h-20 bg-slate-50 rounded mb-3 flex items-center justify-center">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 10 35 Q 50 35 50 20 Q 50 5 90 5" fill="none" stroke="#3b82f6" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500">Range: (0, 1). Used for binary classification.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2">ReLU</h5>
            <div className="h-20 bg-slate-50 rounded mb-3 flex items-center justify-center">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 10 35 L 50 35 L 90 5" fill="none" stroke="#10b981" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500">Range: [0, ∞). Most common for hidden layers.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2">Tanh</h5>
            <div className="h-20 bg-slate-50 rounded mb-3 flex items-center justify-center">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 10 35 Q 50 35 50 20 Q 50 5 90 5" fill="none" stroke="#6366f1" strokeWidth="2" transform="translate(0, -5)" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500">Range: (-1, 1). Zero-centered, often better than Sigmoid.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2">Softmax</h5>
            <div className="h-20 bg-slate-50 rounded mb-3 flex flex-col justify-center space-y-1 px-4">
              <div className="h-2 bg-indigo-500 rounded w-full"></div>
              <div className="h-2 bg-indigo-300 rounded w-1/2"></div>
              <div className="h-2 bg-indigo-100 rounded w-1/4"></div>
            </div>
            <p className="text-[10px] text-slate-500">Output layer. Probabilities that sum to 1.0.</p>
          </div>
        </div>
      </div>

      {/* 5. How Learning Happens */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-16 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center"><Activity className="mr-3"/> 5. The Learning Cycle</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-indigo-600 p-2 rounded mr-4 mt-1"><ArrowRight size={16}/></div>
              <div>
                <h4 className="font-bold text-white mb-1">1. Forward Propagation</h4>
                <p className="text-xs text-slate-400">Data flows from input to output. The network makes a prediction based on current weights.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 p-2 rounded mr-4 mt-1"><ArrowRight size={16}/></div>
              <div>
                <h4 className="font-bold text-white mb-1">2. Loss Calculation</h4>
                <p className="text-xs text-slate-400">The prediction is compared to the actual target. The difference is the <strong>Loss</strong>.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-600 p-2 rounded mr-4 mt-1"><ArrowRight size={16}/></div>
              <div>
                <h4 className="font-bold text-white mb-1">3. Backpropagation</h4>
                <p className="text-xs text-slate-400">The error is sent back using <strong>Chain Rule</strong> to find gradients for every weight.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded mr-4 mt-1"><ArrowRight size={16}/></div>
              <div>
                <h4 className="font-bold text-white mb-1">4. Weight Update</h4>
                <p className="text-xs text-slate-400">Weights are adjusted using an <strong>Optimizer</strong> to minimize the loss.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-center items-center text-center">
             <div className="text-indigo-400 mb-4"><Zap size={48}/></div>
             <h4 className="text-xl font-bold mb-2">The Goal of Training</h4>
             <p className="text-sm text-slate-400">To find the set of <strong>Weights</strong> and <strong>Biases</strong> that minimize the <strong>Loss Function</strong> across the entire training dataset.</p>
          </div>
        </div>
      </div>

      {/* 6. Loss & Optimization */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center"><Target className="mr-2 text-red-500"/> Loss Functions</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <h4 className="font-bold text-xs text-slate-700 mb-1">Mean Squared Error (MSE)</h4>
              <p className="text-[10px] text-slate-500">Used for <strong>Regression</strong>. Penalizes large errors heavily.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <h4 className="font-bold text-xs text-slate-700 mb-1">Cross-Entropy Loss</h4>
              <p className="text-[10px] text-slate-500">Used for <strong>Classification</strong>. Measures difference between probability distributions.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center"><Zap className="mr-2 text-yellow-500"/> Optimizers</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <h4 className="font-bold text-xs text-slate-700 mb-1">SGD (Stochastic Gradient Descent)</h4>
              <p className="text-[10px] text-slate-500">Updates weights using a single or small batch of samples.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <h4 className="font-bold text-xs text-slate-700 mb-1">Adam Optimizer</h4>
              <p className="text-[10px] text-slate-500">Adaptive Moment Estimation. The most popular "go-to" optimizer today.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Deep Learning vs Machine Learning */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">7. Deep Learning vs. Traditional ML</h2>
        <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-800">Feature</th>
                <th className="px-6 py-4 font-bold text-indigo-600">Machine Learning</th>
                <th className="px-6 py-4 font-bold text-emerald-600">Deep Learning (Neural Nets)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-700">Feature Engineering</td>
                <td className="px-6 py-4 text-slate-500">Manual (Experts must extract features)</td>
                <td className="px-6 py-4 text-slate-500">Automated (Network learns features)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-700">Data Requirement</td>
                <td className="px-6 py-4 text-slate-500">Works well with small datasets</td>
                <td className="px-6 py-4 text-slate-500">Requires massive amounts of data</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-700">Hardware</td>
                <td className="px-6 py-4 text-slate-500">Standard CPU</td>
                <td className="px-6 py-4 text-slate-500">High-end GPUs / TPUs</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-700">Interpretability</td>
                <td className="px-6 py-4 text-slate-500">High (Easy to explain)</td>
                <td className="px-6 py-4 text-slate-500">Low ("Black Box" model)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 8. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          A Neural Network is a computational model inspired by the human brain that consists of interconnected layers of artificial neurons. It works by passing data through an <strong>Input Layer</strong>, one or more <strong>Hidden Layers</strong>, and an <strong>Output Layer</strong>. Each neuron calculates a weighted sum of its inputs, adds a bias, and applies an <strong>activation function</strong>. The network learns by iteratively adjusting its weights through <strong>Forward Propagation</strong> (making predictions) and <strong>Backpropagation</strong> (calculating and minimizing error using Gradient Descent).
        </p>
      </div>
    </SectionLayout>
  );
};
