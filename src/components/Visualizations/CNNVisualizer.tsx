import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Layers, Square, Grid3X3 } from 'lucide-react';

export function CNNVisualizer() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    { name: 'Input Image', type: 'input', size: '28x28', color: 'bg-slate-200', icon: Grid3X3 },
    { name: 'Convolution', type: 'conv', size: '24x24', color: 'bg-indigo-400', icon: Search },
    { name: 'Pooling', type: 'pool', size: '12x12', color: 'bg-emerald-400', icon: Square },
    { name: 'Fully Connected', type: 'fc', size: '128', color: 'bg-amber-400', icon: Layers },
    { name: 'Output', type: 'output', size: '10', color: 'bg-rose-400', icon: TargetIcon },
  ];

  function TargetIcon({ className }: { className?: string }) {
    return <div className={className}>🎯</div>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-2xl mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10" />
        {layers.map((layer, idx) => (
          <button
            key={idx}
            onClick={() => setActiveLayer(idx)}
            className="flex flex-col items-center group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              activeLayer === idx ? `${layer.color} text-white scale-125 shadow-xl` : 'bg-white text-slate-400 border border-slate-200 group-hover:border-indigo-300'
            }`}>
              <layer.icon className="w-6 h-6" />
            </div>
            <span className={`mt-4 text-xs font-bold uppercase tracking-tighter ${activeLayer === idx ? 'text-slate-900' : 'text-slate-400'}`}>
              {layer.name}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full bg-white rounded-2xl p-8 border border-slate-100 shadow-inner min-h-[300px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-md"
          >
            <div className={`inline-block p-4 rounded-2xl mb-6 ${layers[activeLayer].color} text-white shadow-lg`}>
              <span className="text-2xl font-mono font-bold">{layers[activeLayer].size}</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{layers[activeLayer].name}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {activeLayer === 0 && "The raw pixel data of the image. For MNIST, this is a 28x28 grayscale grid where each pixel is a value from 0 to 255."}
              {activeLayer === 1 && "Filters slide over the image to detect features like edges, curves, and textures. This creates 'Feature Maps'."}
              {activeLayer === 2 && "Reduces the spatial dimensions (width and height) while keeping the most important information. Max Pooling is common."}
              {activeLayer === 3 && "Flattens the data into a single vector and connects every neuron to every neuron in the next layer to learn high-level combinations."}
              {activeLayer === 4 && "The final layer uses Softmax to output probabilities for each class (digits 0-9)."}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {Array.from({ length: activeLayer === 3 ? 10 : 4 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className={`w-8 h-8 rounded-md ${layers[activeLayer].color} opacity-20`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
