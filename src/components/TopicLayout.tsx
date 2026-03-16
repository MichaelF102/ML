import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

interface TopicLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string;
  mathIntuition?: string;
}

export function TopicLayout({ title, description, children, codeExample, mathIntuition }: TopicLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
        <p className="text-xl text-slate-600 leading-relaxed">{description}</p>
      </header>

      <section className="mb-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-1 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 py-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interactive Visualization</span>
          </div>
          <div className="p-8 min-h-[400px] flex items-center justify-center bg-slate-50/30">
            {children}
          </div>
        </div>
      </section>

      {mathIntuition && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Mathematical Intuition</h3>
          <div className="prose prose-slate max-w-none bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100">
            <ReactMarkdown>{mathIntuition}</ReactMarkdown>
          </div>
        </section>
      )}

      {codeExample && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Python Implementation</h3>
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
              <code>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}
    </div>
  );
}
