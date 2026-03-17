import React, { useState } from 'react';
import { Info, ChevronRight, Database, Network, Cpu, Code, Activity, Table, Play, Car, MessageSquare, CheckCircle2, XCircle } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const MLvsProgramming = () => {
  const [mode, setMode] = useState('traditional');

  return (
    <SectionLayout 
      title="1. Machine Learning vs Traditional Programming" 
      description="Understand the core paradigm shift, types, workflow, and applications of Machine Learning."
    >
      {/* 1. What is ML */}
      <div className="mb-12 bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
        <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <Info className="mr-2" /> What is Machine Learning?
        </h2>
        <p className="text-indigo-800 text-lg mb-4 italic">
          "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed." <span className="text-sm not-italic text-indigo-600">— Arthur Samuel</span>
        </p>
        <p className="text-indigo-900 mb-4">
          Machine Learning (ML) is a branch of Artificial Intelligence (AI) that enables computers to learn patterns from data and make predictions or decisions. Instead of writing explicit rules for every situation, we train an algorithm on data, and it automatically discovers patterns.
        </p>
        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm flex items-center justify-between overflow-x-auto text-sm">
          <div className="text-center px-4"><div className="font-bold text-slate-700">Training Data</div><div className="text-slate-500 mt-1">(e.g., labeled emails)</div></div>
          <ChevronRight className="text-indigo-300 flex-shrink-0" />
          <div className="text-center px-4"><div className="font-bold text-slate-700">Learning Algorithm</div><div className="text-slate-500 mt-1">(Finds patterns)</div></div>
          <ChevronRight className="text-indigo-300 flex-shrink-0" />
          <div className="text-center px-4"><div className="font-bold text-slate-700">Model</div><div className="text-slate-500 mt-1">(Can predict new data)</div></div>
        </div>
      </div>

      {/* 2. Interactive Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Interactive Paradigm Shift</h2>
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-lg inline-flex">
            <button 
              onClick={() => setMode('traditional')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${mode === 'traditional' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Traditional Programming
            </button>
            <button 
              onClick={() => setMode('ml')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${mode === 'ml' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center space-x-4 md:space-x-12 overflow-x-auto w-full justify-center">
            <div className="flex flex-col space-y-4">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-lg font-bold text-center w-32 shadow-sm border border-blue-200">Data</div>
              <div className="bg-blue-100 text-blue-800 p-4 rounded-lg font-bold text-center w-32 shadow-sm border border-blue-200">
                {mode === 'traditional' ? 'Code' : 'Output'}
              </div>
            </div>
            
            <ChevronRight size={32} className="text-slate-400 flex-shrink-0" />
            
            <div className="bg-slate-800 text-white p-6 rounded-xl font-bold text-center w-48 shadow-lg flex flex-col items-center justify-center h-32 flex-shrink-0">
              <Code size={32} className="mb-2 text-indigo-400" />
              {mode === 'traditional' ? 'Computer' : 'ML Algorithm'}
            </div>
            
            <ChevronRight size={32} className="text-slate-400 flex-shrink-0" />
            
            <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg font-bold text-center w-32 shadow-sm border border-emerald-200 flex-shrink-0">
              {mode === 'traditional' ? 'Answers' : 'Model'}
            </div>
          </div>
          
          <p className="text-center text-slate-600 max-w-xl mt-8">
            {mode === 'traditional' 
              ? "In traditional programming, you provide the data and explicit rules (e.g., if image has whiskers -> cat). The computer outputs the answers. This is rigid and hard for complex tasks." 
              : "In machine learning, you provide the data and expected answers (labels). The algorithm automatically learns the underlying rules (features) to output a model."}
          </p>
        </div>
      </div>

      {/* 3. Components of ML */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Components of Machine Learning</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <Database className="text-blue-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-800 mb-2">1. Data</h3>
            <p className="text-sm text-slate-600 mb-4">The information used to train the model.</p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 font-mono">
              <strong>House Price Dataset:</strong><br/>
              Size: 1000sqft → Price: 23 Lakh<br/>
              Size: 1500sqft → Price: 35 Lakh
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <Network className="text-emerald-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-800 mb-2">2. Model</h3>
            <p className="text-sm text-slate-600 mb-4">A mathematical function that maps inputs (x) to outputs (y).</p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 font-mono text-center">
              <strong>Linear Regression:</strong><br/>
              <span className="text-lg">y = β₀ + β₁x</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <Cpu className="text-purple-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-800 mb-2">3. Learning Algorithm</h3>
            <p className="text-sm text-slate-600 mb-4">The algorithm that adjusts the model parameters to minimize error.</p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 font-mono">
              <strong>Example:</strong><br/>
              Gradient Descent
            </div>
          </div>
        </div>
      </div>

      {/* 4. Types of ML */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Types of Machine Learning</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-t-4 border-t-indigo-500 shadow-sm">
            <h3 className="font-bold text-indigo-900 mb-2 text-lg">1. Supervised Learning</h3>
            <p className="text-sm text-slate-600 mb-4">Training data has input + output labels.</p>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Example</span>
              <p className="text-sm font-medium text-slate-700">Email Text → Spam / Not Spam</p>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Algorithms</span>
              <ul className="text-sm text-slate-600 list-disc list-inside mt-1">
                <li>Linear / Logistic Regression</li>
                <li>Decision Trees / SVM</li>
                <li>Neural Networks</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border-t-4 border-t-emerald-500 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2 text-lg">2. Unsupervised Learning</h3>
            <p className="text-sm text-slate-600 mb-4">Training data has no labels. Goal is to find hidden patterns.</p>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Example</span>
              <p className="text-sm font-medium text-slate-700">Customer Segmentation</p>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Algorithms</span>
              <ul className="text-sm text-slate-600 list-disc list-inside mt-1">
                <li>K-Means Clustering</li>
                <li>PCA (Dimensionality Reduction)</li>
                <li>Hierarchical Clustering</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border-t-4 border-t-orange-500 shadow-sm">
            <h3 className="font-bold text-orange-900 mb-2 text-lg">3. Reinforcement Learning</h3>
            <p className="text-sm text-slate-600 mb-4">Model learns by interacting with an environment and receiving rewards.</p>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Example</span>
              <p className="text-sm font-medium text-slate-700">Self-driving cars, Game AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. How ML Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">How Machine Learning Works (Workflow)</h2>
        <div className="flex flex-col space-y-4">
          {[
            { step: 1, title: 'Data Collection', desc: 'Collect dataset (e.g., Titanic passenger data).' },
            { step: 2, title: 'Data Preprocessing', desc: 'Clean the data: Remove missing values, encode categorical variables.' },
            { step: 3, title: 'Model Training', desc: 'Fit the learning algorithm to the training data.' },
            { step: 4, title: 'Model Evaluation', desc: 'Check performance using metrics like Accuracy, Precision, Recall.' },
            { step: 5, title: 'Prediction', desc: 'Use the trained model on new, unseen data to make predictions.' }
          ].map((item, i) => (
            <div key={item.step} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mr-4 flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Comparison Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailed Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-4 font-bold border-b">Feature</th>
                <th className="p-4 font-bold border-b">Traditional Programming</th>
                <th className="p-4 font-bold border-b text-indigo-700">Machine Learning</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600">
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">Rule Creation</td>
                <td className="p-4">Human writes explicit rules.</td>
                <td className="p-4 font-medium text-indigo-600">Algorithm learns rules automatically.</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">Input</td>
                <td className="p-4">Data + Program</td>
                <td className="p-4 font-medium text-indigo-600">Data + Output (Labels)</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">Output</td>
                <td className="p-4">Result (Answers)</td>
                <td className="p-4 font-medium text-indigo-600">Model (Rules)</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">Flexibility</td>
                <td className="p-4">Low (Rigid logic)</td>
                <td className="p-4 font-medium text-indigo-600">High (Adapts to new data)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">Best For</td>
                <td className="p-4">Well-defined problems (e.g., calculating area)</td>
                <td className="p-4 font-medium text-indigo-600">Pattern recognition (e.g., Image recognition)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. Apps, Pros, Cons */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Real World Applications</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start">
               <Activity className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
               <div><span className="font-bold text-slate-700 block text-sm">Healthcare</span><span className="text-xs text-slate-500">Disease/Cancer prediction</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start">
               <Table className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={20} />
               <div><span className="font-bold text-slate-700 block text-sm">Finance</span><span className="text-xs text-slate-500">Credit card fraud detection</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start">
               <Play className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
               <div><span className="font-bold text-slate-700 block text-sm">Recommendations</span><span className="text-xs text-slate-500">Netflix, Amazon, YouTube</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start">
               <Car className="text-slate-800 mr-3 mt-1 flex-shrink-0" size={20} />
               <div><span className="font-bold text-slate-700 block text-sm">Autonomous Vehicles</span><span className="text-xs text-slate-500">Object & lane detection</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start col-span-2">
               <MessageSquare className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
               <div><span className="font-bold text-slate-700 block text-sm">Natural Language Processing (NLP)</span><span className="text-xs text-slate-500">Chatbots, Speech recognition, Translation</span></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pros & Cons</h2>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-4">
            <h3 className="font-bold text-emerald-700 flex items-center mb-3"><CheckCircle2 className="mr-2" size={18}/> Advantages</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Handles extremely large datasets efficiently.</li>
              <li>• Improves automatically with more experience/data.</li>
              <li>• Can detect complex patterns unseen by humans.</li>
              <li>• Automates complex decision making processes.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-red-700 flex items-center mb-3"><XCircle className="mr-2" size={18}/> Limitations</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Requires large amounts of clean training data.</li>
              <li>• Computationally expensive to train complex models.</li>
              <li>• Prone to overfitting (memorizing instead of learning).</li>
              <li>• "Black box" effect: Model interpretability issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
