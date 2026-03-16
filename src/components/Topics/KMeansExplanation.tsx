import React from 'react';
import { Target, ScatterChart, Activity, BookOpen, Zap, Calculator, Info, CheckCircle2, AlertCircle, TrendingDown } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const KMeansExplanation = () => {
  return (
    <SectionLayout 
      title="6. K-Means Clustering" 
      description="An unsupervised learning algorithm used to group similar data points into K clusters based on their distance to a centroid."
    >
      {/* 1. Intro */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <Target className="mr-2 text-indigo-600" /> What is K-Means?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            K-Means is an <strong>unsupervised</strong> algorithm that partitions a dataset into <strong>K</strong> distinct, non-overlapping clusters. It automatically finds patterns without needing labeled data.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Applications</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold">Customer Segmentation</span>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold">Image Compression</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">Document Clustering</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
            <Calculator className="mr-2 text-indigo-600" /> Objective Function
          </h2>
          <p className="text-xs text-indigo-800 mb-4">K-Means tries to minimize the <strong>Within-Cluster Sum of Squares (WCSS)</strong>, which is the sum of squared distances between points and their centroids.</p>
          <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center shadow-sm">
            <div className="text-sm font-serif italic text-indigo-900">
              J = Σ Σ ||x - μᵢ||²
            </div>
            <div className="text-[10px] text-slate-400 mt-2">Minimize distance from points (x) to centroid (μ)</div>
          </div>
        </div>
      </div>

      {/* 2. Algorithm Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">2. How the Algorithm Works</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Initialize</h4>
            <p className="text-[10px] text-slate-500">Choose <strong>K</strong> random points as initial centroids.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Assign</h4>
            <p className="text-[10px] text-slate-500">Assign each point to the <strong>nearest</strong> centroid (Euclidean distance).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Update</h4>
            <p className="text-[10px] text-slate-500">Calculate the <strong>mean</strong> of points in each cluster to find new centroids.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Repeat</h4>
            <p className="text-[10px] text-slate-500">Repeat steps 2 & 3 until centroids <strong>stop changing</strong> (convergence).</p>
          </div>
        </div>
      </div>

      {/* 3. Numerical Example */}
      <div className="bg-slate-900 p-8 rounded-2xl text-white mb-12 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center"><Zap className="mr-3"/> Numerical Example</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Dataset</h4>
            <div className="grid grid-cols-3 gap-2 text-xs text-center mb-4">
              <div className="bg-slate-700 p-2 rounded">A (1,2)</div>
              <div className="bg-slate-700 p-2 rounded">B (1,4)</div>
              <div className="bg-slate-700 p-2 rounded">C (1,0)</div>
              <div className="bg-slate-700 p-2 rounded">D (10,2)</div>
              <div className="bg-slate-700 p-2 rounded">E (10,4)</div>
              <div className="bg-slate-700 p-2 rounded">F (10,0)</div>
            </div>
            <p className="text-[10px] text-slate-400">Let <strong>K = 2</strong>. Initial centroids: <strong>C1=(1,2)</strong>, <strong>C2=(10,2)</strong>.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Iteration 1</h4>
            <div className="space-y-2 text-[10px] text-slate-300">
              <p>• Points A, B, C are closer to C1. Cluster 1 = {'{A, B, C}'}</p>
              <p>• Points D, E, F are closer to C2. Cluster 2 = {'{D, E, F}'}</p>
              <div className="p-2 bg-slate-700 rounded mt-2">
                <div className="text-indigo-300 font-bold">New Centroid 1:</div>
                X = (1+1+1)/3 = 1, Y = (2+4+0)/3 = 2 → <strong>(1,2)</strong>
              </div>
              <div className="p-2 bg-slate-700 rounded mt-1">
                <div className="text-indigo-300 font-bold">New Centroid 2:</div>
                X = (10+10+10)/3 = 10, Y = (2+4+0)/3 = 2 → <strong>(10,2)</strong>
              </div>
              <p className="text-emerald-400 font-bold mt-2">Centroids unchanged. Converged!</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Elbow Method */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Choosing Optimal K: The Elbow Method</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600">
              Choosing the right <strong>K</strong> is tricky. We run K-Means for various K values and plot the <strong>WCSS</strong> (error).
            </p>
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center"><TrendingDown size={18} className="mr-2"/> The Elbow Point</h4>
              <p className="text-sm text-yellow-800">
                As K increases, WCSS always decreases. We look for the "elbow" of the curve—the point where the rate of decrease slows down significantly. This is usually the optimal K.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white p-8 shadow-inner min-h-[300px]">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-6 text-center">WCSS vs. Number of Clusters (K)</h4>
             <svg viewBox="0 0 400 250" className="w-full h-full">
                {/* Axes */}
                <line x1="50" y1="200" x2="350" y2="200" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="50" y1="200" x2="50" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                <text x="330" y="220" fontSize="10" fill="#94a3b8">K</text>
                <text x="10" y="60" fontSize="10" fill="#94a3b8" transform="rotate(-90, 10, 60)">WCSS</text>

                {/* Curve */}
                <path d="M 60 60 Q 150 180 340 190" fill="none" stroke="#6366f1" strokeWidth="3" />
                
                {/* Points */}
                <circle cx="60" cy="60" r="4" fill="#6366f1" />
                <circle cx="100" cy="110" r="4" fill="#6366f1" />
                <circle cx="150" cy="165" r="6" fill="#ef4444" /> {/* Elbow */}
                <circle cx="220" cy="182" r="4" fill="#6366f1" />
                <circle cx="300" cy="188" r="4" fill="#6366f1" />

                {/* Label */}
                <text x="165" y="160" fontSize="12" fill="#ef4444" fontWeight="bold">Elbow (K=3)</text>
             </svg>
          </div>
        </div>
      </div>

      {/* 5. Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><CheckCircle2 className="mr-2" size={20}/> Advantages</h3>
          <ul className="text-sm text-emerald-800 space-y-2 list-disc list-inside">
            <li><strong>Simple:</strong> Easy to understand and implement.</li>
            <li><strong>Scalable:</strong> Efficient for large datasets.</li>
            <li><strong>Fast:</strong> Computationally faster than hierarchical clustering.</li>
            <li><strong>Versatile:</strong> Widely used in many industries.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h3 className="font-bold text-red-900 mb-3 flex items-center"><AlertCircle className="mr-2" size={20}/> Limitations</h3>
          <ul className="text-sm text-red-800 space-y-2 list-disc list-inside">
            <li><strong>Predefined K:</strong> You must choose K beforehand.</li>
            <li><strong>Centroid Sensitivity:</strong> Initial random centroids can affect results.</li>
            <li><strong>Spherical Bias:</strong> Assumes clusters are spherical and similar size.</li>
            <li><strong>Outliers:</strong> Highly sensitive to extreme data points.</li>
          </ul>
        </div>
      </div>

      {/* 6. Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Summary
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          K-Means is an <strong>unsupervised clustering algorithm</strong> that partitions data into K clusters based on similarity. The algorithm initializes K centroids, assigns data points to the nearest centroid using <strong>Euclidean distance</strong>, and iteratively updates centroids by calculating the mean of assigned points. The goal is to minimize the <strong>Within-Cluster Sum of Squares (WCSS)</strong>. The optimal K is often determined using the <strong>Elbow Method</strong>.
        </p>
      </div>
    </SectionLayout>
  );
};
