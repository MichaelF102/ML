import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    if (selectedOption === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-2">Quiz Complete!</h4>
        <p className="text-slate-600 mb-6">You scored {score} out of {questions.length}</p>
        <button 
          onClick={() => { setCurrentQuestion(0); setScore(0); }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question {currentQuestion + 1} of {questions.length}</span>
        <HelpCircle className="w-4 h-4 text-slate-300" />
      </div>
      
      <h4 className="text-lg font-bold text-slate-900 mb-6">{q.question}</h4>
      
      <div className="space-y-3 mb-8">
        {q.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(i)}
            className={cn(
              "w-full text-left p-4 rounded-xl border-2 transition-all",
              selectedOption === i 
                ? "border-indigo-600 bg-indigo-50" 
                : "border-slate-100 hover:border-slate-200 bg-white",
              isSubmitted && i === q.correctIndex && "border-emerald-500 bg-emerald-50",
              isSubmitted && selectedOption === i && i !== q.correctIndex && "border-rose-500 bg-rose-50"
            )}
          >
            <div className="flex items-center justify-between">
              <span className={cn(
                "text-sm font-medium",
                selectedOption === i ? "text-indigo-900" : "text-slate-600",
                isSubmitted && i === q.correctIndex && "text-emerald-900",
                isSubmitted && selectedOption === i && i !== q.correctIndex && "text-rose-900"
              )}>
                {option}
              </span>
              {isSubmitted && i === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              {isSubmitted && selectedOption === i && i !== q.correctIndex && <XCircle className="w-4 h-4 text-rose-500" />}
            </div>
          </button>
        ))}
      </div>

      {isSubmitted && (
        <div className="mb-8 p-4 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-100">
          <span className="font-bold text-slate-900 block mb-1">Explanation:</span>
          {q.explanation}
        </div>
      )}

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 transition-all"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      )}
    </div>
  );
}
