import React from 'react';

interface SectionLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const SectionLayout = ({ title, description, children }: SectionLayoutProps) => (
  <div className="flex flex-col h-full overflow-y-auto p-6 bg-slate-50">
    <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
    <p className="text-slate-600 mb-8 text-lg">{description}</p>
    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      {children}
    </div>
  </div>
);
