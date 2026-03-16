import React, { useState } from 'react';
import { 
  Brain, Code, TrendingDown, Layers, Maximize, Scissors, 
  Table, Mail, ScatterChart, Target, Calculator, Network, Users, Filter
} from 'lucide-react';
import { MLvsProgramming } from './components/Topics/MLvsProgramming';
import { NesterovGradient } from './components/Topics/NesterovGradient';
import { CNNArchitecture } from './components/Topics/CNNArchitecture';
import { PCAExplanation } from './components/Topics/PCAExplanation';
import { SVMExplanation } from './components/Topics/SVMExplanation';
import { KMeansExplanation } from './components/Topics/KMeansExplanation';
import { TitanicPreprocessing } from './components/Topics/TitanicPreprocessing';
import { NaiveBayesExplanation } from './components/Topics/NaiveBayesExplanation';
import { EnsembleMethods } from './components/Topics/EnsembleMethods';
import { ConfusionMatrixExplanation } from './components/Topics/ConfusionMatrixExplanation';
import { NeuralNetworksExplanation } from './components/Topics/NeuralNetworksExplanation';
import { DecisionTreesExplanation } from './components/Topics/DecisionTreesExplanation';
import { BiasVarianceExplanation } from './components/Topics/BiasVarianceExplanation';
import { ModelSelectionExplanation } from './components/Topics/ModelSelectionExplanation';
import { ClassificationExplanation } from './components/Topics/ClassificationExplanation';

export default function App() {
  const [activeTopic, setActiveTopic] = useState('intro');

  const topics = [
    { id: 'intro', title: '1. ML vs Programming', icon: Code },
    { id: 'nesterov', title: '2. Nesterov Gradient', icon: TrendingDown },
    { id: 'cnn', title: '3. CNN Architecture', icon: Maximize },
    { id: 'pca', title: '4. PCA', icon: ScatterChart },
    { id: 'svm', title: '5. SVM', icon: Scissors },
    { id: 'kmeans', title: '6. K-Means', icon: Target },
    { id: 'preprocessing', title: '7. Preprocessing', icon: Table },
    { id: 'naive-bayes', title: '8. Naive Bayes', icon: Mail },
    { id: 'ensemble', title: '9. Ensemble Methods', icon: Users },
    { id: 'classification', title: '10. Classification', icon: Layers },
    { id: 'metrics', title: '11. Confusion Matrix', icon: Calculator },
    { id: 'nn', title: '12. Neural Networks', icon: Brain },
    { id: 'decision-tree', title: '13. Decision Trees', icon: Network },
    { id: 'bias-variance', title: '14. Bias-Variance', icon: Layers },
    { id: 'model-selection', title: '15. Model Selection', icon: Filter },
  ];

  const renderContent = () => {
    switch(activeTopic) {
      case 'intro': return <MLvsProgramming />;
      case 'nesterov': return <NesterovGradient />;
      case 'cnn': return <CNNArchitecture />;
      case 'pca': return <PCAExplanation />;
      case 'svm': return <SVMExplanation />;
      case 'kmeans': return <KMeansExplanation />;
      case 'preprocessing': return <TitanicPreprocessing />;
      case 'naive-bayes': return <NaiveBayesExplanation />;
      case 'ensemble': return <EnsembleMethods />;
      case 'classification': return <ClassificationExplanation />;
      case 'metrics': return <ConfusionMatrixExplanation />;
      case 'nn': return <NeuralNetworksExplanation />;
      case 'decision-tree': return <DecisionTreesExplanation />;
      case 'bias-variance': return <BiasVarianceExplanation />;
      case 'model-selection': return <ModelSelectionExplanation />;
      default: return <MLvsProgramming />;
    }
  }

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900 text-slate-300 flex flex-col h-full shadow-2xl z-10">
        <div className="p-6 bg-slate-950 border-b border-slate-800">
          <h1 className="text-xl font-black text-white flex items-center">
            <Brain className="mr-3 text-indigo-500" /> ML Interactive
          </h1>
          <p className="text-xs text-slate-500 mt-2">15 Core Concepts Visualized</p>
        </div>
        <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full text-left px-6 py-3 flex items-center transition-all duration-200 border-l-4 ${
                  isActive 
                  ? 'border-indigo-500 bg-slate-800 text-white' 
                  : 'border-transparent hover:bg-slate-800/50 hover:text-slate-100'
                }`}
              >
                <Icon size={18} className={`mr-3 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span className="text-sm font-medium">{topic.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-full relative">
        {renderContent()}
      </div>
    </div>
  );
}
