import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

// Mock Questions for demonstration
const MOCK_QUESTIONS = [
  {
    id: 1,
    text: "Which hook is used to handle side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
  },
  {
    id: 2,
    text: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
  },
  {
    id: 3,
    text: "In JavaScript, what is a closure?",
    options: ["A function inside another function", "A closed database connection", "A private class field", "An executed promise"],
  }
];

export default function QuizMode() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [warning, setWarning] = useState('');

  // Anti-Cheat: Tab switch detection mockup
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarning('Warning: Navigating away from the quiz is not allowed!');
        setTimeout(() => setWarning(''), 5000);
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timerId = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, send `selectedAnswers` to the backend.
    navigate(`/results/${id}`);
  };

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {warning && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 text-red-100 p-4 rounded-lg mb-6 flex items-center shadow-lg shadow-red-500/10"
        >
          <AlertTriangle className="w-5 h-5 mr-3 text-red-400" />
          <span className="font-medium">{warning}</span>
        </motion.div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8 glass-panel p-4 rounded-xl">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium">Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}</span>
        </div>
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold ${timeLeft < 60 ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-brand-400'}`}>
          <Clock className="w-5 h-5" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="bg-brand-500 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex + 1) / MOCK_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="glass-card p-8 rounded-2xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === index;
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  isSelected 
                    ? 'bg-brand-500/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold ${
                    isSelected ? 'bg-brand-500 text-white' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-lg">{option}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        {currentQuestionIndex === MOCK_QUESTIONS.length - 1 ? (
          <Button variant="primary" onClick={handleSubmit}>
            Submit Quiz
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            Next Question
          </Button>
        )}
      </div>
    </div>
  );
}
