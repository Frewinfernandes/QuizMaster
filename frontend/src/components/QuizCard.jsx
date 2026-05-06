import { Clock, BarChart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function QuizCard({ quiz, delay = 0 }) {
  const difficultyColor = {
    Easy: 'text-green-400 bg-green-400/10 border-green-400/20',
    Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    Hard: 'text-red-400 bg-red-400/10 border-red-400/20'
  }[quiz.difficulty] || 'text-brand-400 bg-brand-400/10 border-brand-400/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl p-6 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 border border-slate-700 text-slate-300">
          {quiz.category}
        </span>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${difficultyColor}`}>
          {quiz.difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{quiz.title}</h3>
      <p className="text-slate-400 text-sm flex-grow mb-6 line-clamp-2">
        {quiz.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex space-x-4">
          <div className="flex items-center text-slate-400 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {quiz.timeLimitMinutes}m
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <BarChart className="w-4 h-4 mr-1" />
            {quiz.questionCount} Qs
          </div>
        </div>
        
        <Link 
          to={`/quiz/${quiz._id}`}
          className="flex items-center text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors"
        >
          Start
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}
