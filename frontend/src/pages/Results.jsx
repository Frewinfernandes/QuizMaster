import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Target, Clock, ChevronRight, Award } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Button from '../components/Button';

export default function Results() {
  // Mock results data
  const score = 85;
  const timeTaken = "8m 45s";
  const correct = 17;
  const incorrect = 3;
  const total = 20;

  const data = [
    { name: 'Correct', value: correct, color: '#10b981' },
    { name: 'Incorrect', value: incorrect, color: '#ef4444' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 mb-6 shadow-2xl shadow-brand-500/50"
        >
          <Award className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Quiz Completed!</h1>
        <p className="text-slate-400 text-lg">Here's how you performed</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 rounded-3xl flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="flex items-center text-brand-400 mb-2">
                <Trophy className="w-5 h-5 mr-2" />
                <span className="font-semibold">Score</span>
              </div>
              <span className="text-4xl font-bold text-white">{score}%</span>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="flex items-center text-purple-400 mb-2">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-semibold">Accuracy</span>
              </div>
              <span className="text-4xl font-bold text-white">{Math.round((correct/total)*100)}%</span>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 col-span-2">
              <div className="flex items-center text-blue-400 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Time Taken</span>
              </div>
              <span className="text-3xl font-bold text-white">{timeTaken}</span>
            </div>
          </div>
        </motion.div>

        {/* Chart Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Performance Breakdown</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2" />
              <span className="text-slate-300">Correct ({correct})</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <span className="text-slate-300">Incorrect ({incorrect})</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link to="/categories">
            Take Another Quiz
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link to="/leaderboard" className="flex items-center">
            View Leaderboard
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
