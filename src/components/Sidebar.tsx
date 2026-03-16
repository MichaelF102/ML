import React from 'react';
import { cn } from '@/src/lib/utils';
import { 
  BookOpen, 
  Activity, 
  Layers, 
  Maximize, 
  Shield, 
  GitBranch, 
  Database, 
  PieChart, 
  Target, 
  BarChart3, 
  Cpu, 
  Users,
  Home
} from 'lucide-react';

export interface Topic {
  id: string;
  title: string;
  icon: React.ElementType;
}

export const topics: Topic[] = [
  { id: 'intro', title: 'What is ML?', icon: Home },
  { id: 'gradient-descent', title: 'Nesterov Gradient Descent', icon: Activity },
  { id: 'cnn', title: 'CNN Architecture', icon: Layers },
  { id: 'pca', title: 'PCA', icon: Maximize },
  { id: 'svm', title: 'SVM', icon: Shield },
  { id: 'decision-trees', title: 'Decision Trees', icon: GitBranch },
  { id: 'preprocessing', title: 'Data Preprocessing', icon: Database },
  { id: 'naive-bayes', title: 'Naive Bayes', icon: PieChart },
  { id: 'k-means', title: 'K-Means Clustering', icon: Users },
  { id: 'classification', title: 'Classification', icon: Target },
  { id: 'metrics', title: 'Classification Metrics', icon: BarChart3 },
  { id: 'neural-networks', title: 'Neural Networks', icon: Cpu },
  { id: 'ensemble', title: 'Ensemble Learning', icon: BookOpen },
];

interface SidebarProps {
  activeTopic: string;
  onTopicSelect: (id: string) => void;
}

export function Sidebar({ activeTopic, onTopicSelect }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          ML Academy
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Learning Path</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onTopicSelect(topic.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTopic === topic.id
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <topic.icon className={cn(
              "w-4 h-4",
              activeTopic === topic.id ? "text-indigo-600" : "text-slate-400"
            )} />
            {topic.title}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-xs text-slate-600 font-medium">Progress</p>
          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
            <div className="bg-indigo-600 h-1.5 rounded-full w-1/12" />
          </div>
        </div>
      </div>
    </div>
  );
}
