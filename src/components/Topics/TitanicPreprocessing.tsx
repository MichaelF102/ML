import React from 'react';
import { 
  Database, Filter, Layers, CheckCircle2, BookOpen, Trash2, 
  RefreshCw, Table, FileCode, Search, Scissors, ArrowRight,
  ChevronRight, Play
} from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export const TitanicPreprocessing = () => {
  return (
    <SectionLayout 
      title="7. Data Preprocessing: Titanic Case Study" 
      description="A step-by-step guide to transforming raw data into a machine-learning-ready format using the Titanic survival dataset."
    >
      {/* 1. Intro & Load */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
            <FileCode className="mr-2 text-blue-500" /> 1. Load the Dataset
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            First, we import the required libraries and load the raw CSV data using Pandas.
          </p>
          <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-emerald-400">
            <div>import pandas as pd</div>
            <div>import numpy as np</div>
            <div className="mt-2">df = pd.read_csv("titanic.csv")</div>
            <div>df.head()</div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <Search className="mr-2 text-indigo-600" /> 2. Understand the Data
          </h2>
          <p className="text-sm text-indigo-800 mb-4">
            Before cleaning, we must understand the structure and statistics of our features.
          </p>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="bg-white/50 p-2 rounded border border-indigo-100">df.info()</div>
            <div className="bg-white/50 p-2 rounded border border-indigo-100">df.describe()</div>
          </div>
          <p className="text-[10px] text-indigo-600 mt-3 italic">Check for data types, counts, and basic stats (mean, min, max).</p>
        </div>
      </div>

      {/* 2. Feature Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><Table className="mr-2 text-blue-500"/> Typical Titanic Columns</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-3 font-bold border-b text-sm">Column</th>
                <th className="p-3 font-bold border-b text-sm">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600">
              {[
                { c: 'PassengerId', d: 'Unique passenger ID' },
                { c: 'Survived', d: 'Survival (0 = No, 1 = Yes)' },
                { c: 'Pclass', d: 'Passenger class (1, 2, 3)' },
                { c: 'Name', d: 'Passenger name' },
                { c: 'Sex', d: 'Gender' },
                { c: 'Age', d: 'Age of passenger' },
                { c: 'SibSp', d: 'Number of siblings/spouses aboard' },
                { c: 'Parch', d: 'Number of parents/children aboard' },
                { c: 'Ticket', d: 'Ticket number' },
                { c: 'Fare', d: 'Ticket fare' },
                { c: 'Cabin', d: 'Cabin number' },
                { c: 'Embarked', d: 'Port of embarkation' },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-700">{row.c}</td>
                  <td className="p-3">{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Handling Missing Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><Filter className="mr-2 text-blue-500"/> 3. Handle Missing Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-2">A</span> Age
            </h4>
            <p className="text-xs text-slate-600 mb-3">Fill missing values with <strong>median</strong> age.</p>
            <div className="bg-slate-800 p-2 rounded font-mono text-[10px] text-emerald-400">
              df['Age'].fillna(df['Age'].median(), inplace=True)
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs mr-2">E</span> Embarked
            </h4>
            <p className="text-xs text-slate-600 mb-3">Fill with the <strong>most frequent</strong> value (mode).</p>
            <div className="bg-slate-800 p-2 rounded font-mono text-[10px] text-emerald-400">
              df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True)
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center">
              <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs mr-2">C</span> Cabin
            </h4>
            <p className="text-xs text-slate-600 mb-3">Too many missing values → <strong>Drop</strong> column.</p>
            <div className="bg-slate-800 p-2 rounded font-mono text-[10px] text-emerald-400">
              df.drop('Cabin', axis=1, inplace=True)
            </div>
          </div>
        </div>
      </div>

      {/* 4. Drop Irrelevant & 5. Encode */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center">
            <Scissors className="mr-2" /> 4. Drop Irrelevant Columns
          </h2>
          <p className="text-sm text-red-800 mb-4">
            Remove features that do not significantly help the model predict survival.
          </p>
          <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-red-400">
            df.drop(['PassengerId','Name','Ticket'], axis=1, inplace=True)
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-900 mb-3 flex items-center">
            <RefreshCw className="mr-2" /> 5. Encode Categorical Variables
          </h2>
          <p className="text-sm text-emerald-800 mb-4">
            ML algorithms require numerical input. Convert text categories to numbers.
          </p>
          <div className="space-y-2 font-mono text-[10px]">
            <div className="bg-white/50 p-2 rounded border border-emerald-100 text-emerald-900">
              {"df['Sex'] = df['Sex'].map({'male':0,'female':1})"}
            </div>
            <div className="bg-white/50 p-2 rounded border border-emerald-100 text-emerald-900">
              df = pd.get_dummies(df, columns=['Embarked'], drop_first=True)
            </div>
          </div>
        </div>
      </div>

      {/* 6. Feature Engineering & 7. Scaling */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm">
          <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center">
            <Layers className="mr-2" /> 6. Feature Engineering
          </h2>
          <p className="text-sm text-purple-800 mb-4">
            Create new features to improve prediction accuracy.
          </p>
          <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-purple-300 space-y-2">
            <div>df['FamilySize'] = df['SibSp'] + df['Parch'] + 1</div>
            <div>df['IsAlone'] = 0</div>
            <div>df.loc[df['FamilySize'] == 1, 'IsAlone'] = 1</div>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm">
          <h2 className="text-xl font-bold text-orange-900 mb-3 flex items-center">
            <RefreshCw className="mr-2" /> 7. Feature Scaling
          </h2>
          <p className="text-sm text-orange-800 mb-4">
            Scale numerical features like Age and Fare for better model performance.
          </p>
          <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-orange-300">
            <div>from sklearn.preprocessing import StandardScaler</div>
            <div className="mt-1">scaler = StandardScaler()</div>
            <div>df[['Age','Fare']] = scaler.fit_transform(df[['Age','Fare']])</div>
          </div>
        </div>
      </div>

      {/* 8. Separate & 9. Split */}
      <div className="bg-slate-800 p-8 rounded-2xl text-white mb-16 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Scissors size={120} />
        </div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Scissors className="mr-3 text-blue-400" /> 8 & 9. Final Preparation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Separate Features & Target</h4>
            <div className="bg-slate-700 p-4 rounded-lg font-mono text-sm text-emerald-400">
              <div>y = df['Survived']</div>
              <div>X = df.drop('Survived', axis=1)</div>
            </div>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Train-Test Split</h4>
            <div className="bg-slate-700 p-4 rounded-lg font-mono text-sm text-emerald-400">
              <div>from sklearn.model_selection import train_test_split</div>
              <div className="mt-1">X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Titanic Preprocessing Pipeline</h2>
        <div className="flex flex-col items-center space-y-4">
          {[
            { label: 'Raw Titanic Dataset', color: 'bg-slate-200 text-slate-700' },
            { label: 'Handle Missing Values', color: 'bg-blue-500 text-white' },
            { label: 'Drop Irrelevant Columns', color: 'bg-red-500 text-white' },
            { label: 'Encode Categorical Variables', color: 'bg-emerald-500 text-white' },
            { label: 'Feature Engineering', color: 'bg-purple-500 text-white' },
            { label: 'Feature Scaling', color: 'bg-orange-500 text-white' },
            { label: 'Train-Test Split', color: 'bg-indigo-500 text-white' },
            { label: 'Machine Learning Model', color: 'bg-slate-800 text-white font-bold' },
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className={`px-6 py-3 rounded-lg shadow-md text-sm w-full max-w-md text-center ${step.color}`}>
                {step.label}
              </div>
              {i < arr.length - 1 && <ArrowRight className="rotate-90 text-slate-300" size={24} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Exam Summary Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
          <BookOpen size={20} className="mr-2"/> Short Exam Answer (5–7 Marks)
        </h3>
        <p className="text-yellow-900 text-sm leading-relaxed font-medium">
          Data preprocessing for the Titanic dataset involves preparing the raw data before applying machine learning models. The process includes handling <strong>missing values</strong> in Age and Embarked, <strong>removing irrelevant columns</strong> such as PassengerId, Name, Ticket, <strong>encoding categorical variables</strong> like Sex and Embarked into numerical form, <strong>creating new features</strong> such as FamilySize and IsAlone, and <strong>scaling numerical features</strong> like Age and Fare. Finally, the dataset is split into training and testing sets for building predictive models.
        </p>
      </div>
    </SectionLayout>
  );
};
