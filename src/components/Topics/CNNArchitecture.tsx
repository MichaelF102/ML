import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ArrowRight, Filter, Activity, Minimize2, Layers, Target, CheckCircle2, Award, BookOpen, Play, Pause, RefreshCw, Car } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const CNNArchitecture = () => {
  const [pos, setPos] = useState({x: 0, y: 0});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setPos(p => {
          let nextX = p.x + 1;
          let nextY = p.y;
          if (nextX > 3) {
            nextX = 0;
            nextY = p.y + 1;
          }
          if (nextY > 3) {
            nextX = 0;
            nextY = 0;
            setIsPlaying(false);
          }
          return {x: nextX, y: nextY};
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Dummy 6x6 matrix for convolution demo
  const matrix = Array(6).fill(0).map(() => Array(6).fill(0).map(() => Math.floor(Math.random() * 10)));

  return (
    <SectionLayout 
      title="3. Convolutional Neural Network (CNN) Architecture" 
      description="A deep learning architecture designed specifically for processing grid-like data such as images. CNNs efficiently extract spatial features using convolution filters."
    >
      {/* 1. Intro & Why CNN */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <ImageIcon className="mr-2" /> Why CNN is Needed?
          </h2>
          <p className="text-sm text-indigo-800 mb-4">
            Traditional fully connected neural networks struggle with images due to <strong>high dimensional data</strong>.
          </p>
          <div className="bg-white p-4 rounded-lg text-sm text-slate-700 font-mono mb-4 shadow-sm border border-indigo-100">
            Image: 64 × 64 pixels (RGB: 3 channels)<br/>
            Total input features = 64 × 64 × 3 = <strong>12,288</strong>
          </div>
          <p className="text-sm text-indigo-800">
            A standard network would require millions of parameters, making training difficult. CNNs solve this by <strong>sharing parameters</strong> and <strong>preserving spatial structure</strong> using small moving filters.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
             Basic Architecture Flow
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="bg-slate-700 px-2 py-1 rounded">Input Image</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-blue-600 px-2 py-1 rounded">Convolution</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-emerald-600 px-2 py-1 rounded">ReLU</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-orange-600 px-2 py-1 rounded">Pooling</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-blue-600 px-2 py-1 rounded">Conv...</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-purple-600 px-2 py-1 rounded">Flatten</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-pink-600 px-2 py-1 rounded">Fully Connected</span> <ArrowRight size={14} className="text-slate-400"/>
            <span className="bg-indigo-500 px-2 py-1 rounded font-bold">Output (Softmax)</span>
          </div>
          <p className="text-slate-400 text-xs mt-4">Each layer extracts higher-level hierarchical features (Edges → Textures → Parts → Objects).</p>
        </div>
      </div>

      {/* 2. Layer Deep Dive with Interactive Demo */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Deep Dive into CNN Layers</h2>
      
      {/* Convolution Layer + Interactive Demo */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center mb-4">
          <Filter className="text-blue-500 mr-3" size={28} />
          <h3 className="text-xl font-bold text-slate-800">The Convolution Layer</h3>
        </div>
        <p className="text-sm text-slate-600 mb-6">
          The core component of a CNN. It applies small filters (kernels) that slide across the image, computing dot products to extract features like vertical or horizontal edges. 
          <br/><span className="font-mono bg-slate-100 px-1 rounded text-xs">S(i,j) = (Image * Filter)(i,j)</span>
        </p>

        {/* Interactive Demo */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center mb-6">
          <h4 className="font-bold text-slate-700 mb-4 uppercase tracking-wider text-sm">Interactive Convolution Demo</h4>
          <div className="mb-6 flex space-x-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {isPlaying ? <Pause size={18} className="mr-2"/> : <Play size={18} className="mr-2"/>}
              {isPlaying ? 'Pause Animation' : 'Slide Filter (Convolve)'}
            </button>
            <button 
              onClick={() => setPos({x: 0, y: 0})}
              className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition"
            >
              <RefreshCw size={18} className="mr-2"/> Reset
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            {/* Input Image */}
            <div className="text-center">
              <h4 className="font-bold mb-2 text-slate-600 text-sm">Input Image (6x6)</h4>
              <div className="relative inline-block border-2 border-slate-300 bg-white p-1 rounded shadow-sm">
                <div className="grid grid-cols-6 gap-1">
                  {matrix.map((row, rIdx) => 
                    row.map((val, cIdx) => (
                      <div key={`${rIdx}-${cIdx}`} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 font-mono text-xs md:text-sm">
                        {val}
                      </div>
                    ))
                  )}
                </div>
                {/* Sliding Filter Highlight */}
                <div 
                  className="absolute border-[3px] border-blue-500 bg-blue-500/20 pointer-events-none transition-all duration-300 ease-in-out"
                  style={{
                    width: 'calc(3 * 2.5rem + 0.5rem)',
                    height: 'calc(3 * 2.5rem + 0.5rem)',
                    left: `calc(0.25rem + ${pos.x * 2.75}rem)`,
                    top: `calc(0.25rem + ${pos.y * 2.75}rem)`,
                  }}
                />
              </div>
            </div>

            <ArrowRight size={32} className="text-slate-300 transform rotate-90 md:rotate-0" />

            {/* Output Feature Map */}
            <div className="text-center">
              <h4 className="font-bold mb-2 text-slate-600 text-sm">Feature Map (4x4)</h4>
              <div className="inline-block border-2 border-slate-300 bg-blue-50 p-1 rounded shadow-sm">
                <div className="grid grid-cols-4 gap-1">
                  {Array(4).fill(0).map((_, rIdx) => 
                    Array(4).fill(0).map((_, cIdx) => {
                      const isActive = rIdx === pos.y && cIdx === pos.x;
                      const isComputed = rIdx < pos.y || (rIdx === pos.y && cIdx <= pos.x);
                      return (
                        <div 
                          key={`${rIdx}-${cIdx}`} 
                          className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border font-mono text-sm transition-colors ${
                            isActive ? 'bg-blue-600 text-white border-blue-700 shadow-inner' 
                            : isComputed ? 'bg-blue-200 border-blue-300 text-blue-900' : 'bg-white border-slate-200 text-transparent'
                          }`}
                        >
                          {isComputed ? 'x' : ''}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Other Layers */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-emerald-700 mb-2 flex items-center"><Activity size={18} className="mr-2"/> Activation (ReLU)</h4>
          <p className="text-sm text-slate-600 mb-2">After convolution, a nonlinear activation function is applied. The most common is Rectified Linear Unit (ReLU).</p>
          <div className="bg-slate-50 p-2 text-xs font-mono text-slate-700 rounded border border-slate-100 mb-2">
            ReLU(x) = max(0, x)<br/>
            Input:  [-3, 2, -1, 5]<br/>
            Output: [0, 2, 0, 5]
          </div>
          <p className="text-xs text-slate-500"><strong>Purpose:</strong> Introduces nonlinearity, prevents vanishing gradients.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-orange-700 mb-2 flex items-center"><Minimize2 size={18} className="mr-2"/> Pooling Layer</h4>
          <p className="text-sm text-slate-600 mb-2">Reduces the spatial size of feature maps to lower computation and prevent overfitting. Most common: <strong>Max Pooling</strong>.</p>
          <div className="bg-slate-50 p-2 text-xs font-mono text-slate-700 rounded border border-slate-100 mb-2 flex items-center space-x-4">
             <div>
               [4, 2]<br/>
               [6, 3]
             </div>
             <ArrowRight size={14}/>
             <div className="bg-orange-100 px-2 py-1 rounded text-orange-800 font-bold border border-orange-200">
               Max = 6
             </div>
          </div>
          <p className="text-xs text-slate-500">Other types: Average Pooling, Global Pooling.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-purple-700 mb-2 flex items-center"><Layers size={18} className="mr-2"/> Flatten & Fully Connected</h4>
          <p className="text-sm text-slate-600 mb-2"><strong>Flatten:</strong> Converts the 2D/3D pooled feature map into a 1D vector (e.g., 3x3x2 matrix → 18x1 vector) so it can be passed to standard neural network layers.</p>
          <p className="text-sm text-slate-600"><strong>FC Layer:</strong> Standard dense layers that combine extracted features to perform the final classification.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-indigo-700 mb-2 flex items-center"><Target size={18} className="mr-2"/> Output (Softmax)</h4>
          <p className="text-sm text-slate-600 mb-2">Produces final predictions. For multi-class classification, the Softmax function turns outputs into probabilities.</p>
          <div className="bg-indigo-50 p-2 text-xs font-mono text-indigo-800 rounded border border-indigo-100">
            Cat → 0.80 (80%)<br/>
            Dog → 0.15 (15%)<br/>
            Horse → 0.05 (5%)<br/>
            <strong>Prediction = Cat</strong>
          </div>
        </div>
      </div>

      {/* 3. Visualizing the Complete Architecture */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Visualizing the Complete Architecture</h2>
        <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-200 shadow-sm overflow-x-auto">
          <div className="min-w-[800px]">
            <svg viewBox="0 0 1000 450" className="w-full h-auto">
              {/* Feature Extraction Label */}
              <line x1="50" y1="380" x2="700" y2="380" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="370" x2="50" y2="390" stroke="#94a3b8" strokeWidth="2" />
              <line x1="700" y1="370" x2="700" y2="390" stroke="#94a3b8" strokeWidth="2" />
              <text x="375" y="410" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#475569">Feature Extraction</text>

              {/* Classification Label */}
              <line x1="720" y1="380" x2="920" y2="380" stroke="#94a3b8" strokeWidth="2" />
              <line x1="720" y1="370" x2="720" y2="390" stroke="#94a3b8" strokeWidth="2" />
              <line x1="920" y1="370" x2="920" y2="390" stroke="#94a3b8" strokeWidth="2" />
              <text x="820" y="410" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#475569">Classification</text>

              {/* Feature Maps Label */}
              <line x1="120" y1="60" x2="650" y2="60" stroke="#1e293b" strokeWidth="1" markerStart="url(#dot)" markerEnd="url(#dot)" />
              <text x="385" y="50" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">Feature Maps</text>

              {/* Input Image */}
              <rect x="40" y="180" width="80" height="80" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <rect x="90" y="200" width="20" height="20" fill="none" stroke="#1e293b" strokeWidth="1" />
              <text x="80" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Input image</text>

              {/* Block 1 */}
              <g transform="translate(120, 100)">
                <text x="50" y="-10" textAnchor="middle" fontSize="14" fill="#475569">Pooling</text>
                {Array(10).fill(0).map((_, i) => (
                  <rect key={i} x={i * 5} y={i * 5} width="80" height="80" fill="#15803d" stroke="#166534" strokeWidth="1" opacity={0.8 - i * 0.05} />
                ))}
                <text x="60" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Convolution + Relu</text>
                {/* Connector from Input */}
                <line x1="-30" y1="110" x2="10" y2="100" stroke="#1e293b" strokeWidth="1" />
                <line x1="-30" y1="110" x2="10" y2="140" stroke="#1e293b" strokeWidth="1" />
              </g>

              {/* Block 2 */}
              <g transform="translate(320, 120)">
                <text x="40" y="-10" textAnchor="middle" fontSize="14" fill="#475569">Pooling</text>
                {Array(8).fill(0).map((_, i) => (
                  <rect key={i} x={i * 5} y={i * 5} width="70" height="70" fill="#15803d" stroke="#166534" strokeWidth="1" opacity={0.8 - i * 0.05} />
                ))}
                <text x="50" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Convolution + Relu</text>
                {/* Connector from B1 */}
                <rect x="-100" y="100" width="20" height="20" fill="none" stroke="#1e293b" strokeWidth="1" />
                <line x1="-80" y1="110" x2="10" y2="80" stroke="#1e293b" strokeWidth="1" />
                <line x1="-80" y1="110" x2="10" y2="110" stroke="#1e293b" strokeWidth="1" />
              </g>

              {/* Block 3 */}
              <g transform="translate(480, 140)">
                <text x="35" y="-10" textAnchor="middle" fontSize="14" fill="#475569">Pooling</text>
                {Array(6).fill(0).map((_, i) => (
                  <rect key={i} x={i * 5} y={i * 5} width="60" height="60" fill="#15803d" stroke="#166534" strokeWidth="1" opacity={0.8 - i * 0.05} />
                ))}
                <text x="40" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Convolution + Relu</text>
                {/* Connector from B2 */}
                <rect x="-80" y="80" width="15" height="15" fill="none" stroke="#1e293b" strokeWidth="1" />
                <line x1="-65" y1="87" x2="10" y2="60" stroke="#1e293b" strokeWidth="1" />
                <line x1="-65" y1="87" x2="10" y2="85" stroke="#1e293b" strokeWidth="1" />
              </g>

              {/* Block 4 */}
              <g transform="translate(620, 160)">
                <text x="30" y="-10" textAnchor="middle" fontSize="14" fill="#475569">Pooling</text>
                {Array(4).fill(0).map((_, i) => (
                  <rect key={i} x={i * 5} y={i * 5} width="50" height="50" fill="#15803d" stroke="#166534" strokeWidth="1" opacity={0.8 - i * 0.05} />
                ))}
                <text x="35" y="80" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Convolution + Relu</text>
                {/* Connector from B3 */}
                <rect x="-70" y="60" width="12" height="12" fill="none" stroke="#1e293b" strokeWidth="1" />
                <line x1="-58" y1="66" x2="10" y2="45" stroke="#1e293b" strokeWidth="1" />
                <line x1="-58" y1="66" x2="10" y2="65" stroke="#1e293b" strokeWidth="1" />
              </g>

              {/* Flattened */}
              <g transform="translate(750, 100)">
                <rect x="0" y="0" width="25" height="250" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1" />
                <text x="12" y="125" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#92400e" transform="rotate(90, 12, 125)">Flattened</text>
                {/* Connector from B4 */}
                <line x1="-80" y1="110" x2="0" y2="0" stroke="#1e293b" strokeWidth="1" />
                <line x1="-80" y1="110" x2="0" y2="250" stroke="#1e293b" strokeWidth="1" />
              </g>

              {/* Fully Connected Layer */}
              <g transform="translate(820, 50)">
                <text x="50" y="-20" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">Fully Connected Layer</text>
                <path d="M 50 -10 L 10 10 M 50 -10 L 90 10" fill="none" stroke="#94a3b8" strokeWidth="1" />
                
                {/* Nodes Layer 1 */}
                {Array(6).fill(0).map((_, i) => (
                  <circle key={i} cx="20" cy={30 + i * 50} r="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
                ))}
                {/* Nodes Layer 2 */}
                {Array(4).fill(0).map((_, i) => (
                  <circle key={i} cx="100" cy={80 + i * 50} r="12" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
                ))}

                {/* Connections */}
                {Array(6).fill(0).map((_, i) => (
                  Array(4).fill(0).map((__, j) => (
                    <line key={`${i}-${j}`} x1="32" y1={30 + i * 50} x2="88" y2={80 + j * 50} stroke="#cbd5e1" strokeWidth="0.5" />
                  ))
                ))}

                {/* Flattened to FC connections */}
                {Array(6).fill(0).map((_, i) => (
                  <line key={i} x1="-45" y1={100} x2="8" y2={30 + i * 50} stroke="#cbd5e1" strokeWidth="0.5" />
                ))}

                {/* Probabilities */}
                <text x="125" y="85" fontSize="14" fontWeight="bold" fill="#1e293b">0.3</text>
                <text x="125" y="135" fontSize="14" fontWeight="bold" fill="#1e293b">0.1</text>
                <text x="125" y="185" fontSize="14" fontWeight="bold" fill="#1e293b">0.2</text>
                <text x="125" y="235" fontSize="14" fontWeight="bold" fill="#1e293b">0.9</text>
                <text x="125" y="210" fontSize="14" fontWeight="bold" fill="#1e293b">...</text>
              </g>

              <defs>
                <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
                  <circle cx="5" cy="5" r="5" fill="#1e293b" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-12 bg-slate-100 p-6 rounded-xl border border-slate-200">
         <h2 className="text-xl font-bold text-slate-800 mb-4">Important CNN Parameters</h2>
         <div className="grid md:grid-cols-3 gap-4">
           <div className="bg-white p-4 rounded-lg shadow-sm">
             <div className="font-bold text-slate-700 mb-1">1. Filter Size</div>
             <p className="text-xs text-slate-600">The dimension of the sliding window. Common sizes are 3×3, 5×5, and 7×7.</p>
           </div>
           <div className="bg-white p-4 rounded-lg shadow-sm">
             <div className="font-bold text-slate-700 mb-1">2. Stride</div>
             <p className="text-xs text-slate-600">Step size of filter movement. Stride=1 means move 1 pixel. Stride=2 moves 2 pixels (reduces output size).</p>
           </div>
           <div className="bg-white p-4 rounded-lg shadow-sm">
             <div className="font-bold text-slate-700 mb-1">3. Padding</div>
             <p className="text-xs text-slate-600">Adds zeros around the image border. <em>Valid</em> = no padding. <em>Same</em> = padding added to keep output size equal to input size.</p>
           </div>
         </div>
      </div>

      {/* 4. Real World Apps & Architectures */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Real World Applications</h2>
          <ul className="space-y-3">
            <li className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <ImageIcon className="text-blue-500 mr-3 mt-0.5" size={18}/>
              <div><strong className="block text-sm text-slate-700">Computer Vision</strong><span className="text-xs text-slate-500">Face recognition, Image classification</span></div>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <Activity className="text-red-500 mr-3 mt-0.5" size={18}/>
              <div><strong className="block text-sm text-slate-700">Medical Imaging</strong><span className="text-xs text-slate-500">Tumor detection, MRI analysis</span></div>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <Car className="text-emerald-500 mr-3 mt-0.5" size={18}/>
              <div><strong className="block text-sm text-slate-700">Autonomous Vehicles</strong><span className="text-xs text-slate-500">Lane & pedestrian detection</span></div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><Award className="mr-2 text-yellow-500"/> Popular Architectures</h2>
          <div className="bg-slate-800 p-5 rounded-xl text-white shadow-sm h-full">
            <p className="text-sm text-slate-300 mb-4">These breakthrough architectures dramatically improved computer vision over the years:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-700 px-3 py-1.5 rounded text-sm font-medium border border-slate-600">LeNet-5 (1998)</span>
              <span className="bg-slate-700 px-3 py-1.5 rounded text-sm font-medium border border-slate-600">AlexNet (2012)</span>
              <span className="bg-slate-700 px-3 py-1.5 rounded text-sm font-medium border border-slate-600">VGGNet (2014)</span>
              <span className="bg-slate-700 px-3 py-1.5 rounded text-sm font-medium border border-slate-600">ResNet (2015)</span>
              <span className="bg-slate-700 px-3 py-1.5 rounded text-sm font-medium border border-slate-600">Inception</span>
            </div>
            <div className="mt-6 text-emerald-400 text-sm font-bold flex items-center">
              <CheckCircle2 size={16} className="mr-1"/> Highly accurate in vision tasks.
            </div>
          </div>
        </div>
      </div>

      {/* 5. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          A Convolutional Neural Network (CNN) is a deep learning architecture designed for processing image data. It uses <strong>convolutional layers</strong> to extract spatial features, activation functions such as <strong>ReLU</strong> to introduce nonlinearity, <strong>pooling layers</strong> to reduce dimensionality, and <strong>fully connected layers</strong> to perform classification. CNNs automatically learn hierarchical features from images and are widely used in computer vision tasks such as image recognition, object detection, and medical imaging.
        </p>
      </div>
    </SectionLayout>
  );
};
