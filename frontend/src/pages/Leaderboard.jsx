import { Trophy, Medal, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_LEADERBOARD = [
  { rank: 1, name: "Alex Developer", score: 9800, quizzes: 12, accuracy: 95 },
  { rank: 2, name: "Sarah Hacker", score: 9450, quizzes: 10, accuracy: 92 },
  { rank: 3, name: "John Coder", score: 8900, quizzes: 15, accuracy: 88 },
  { rank: 4, name: "Emma Design", score: 8200, quizzes: 8, accuracy: 90 },
  { rank: 5, name: "Michael Cloud", score: 7850, quizzes: 9, accuracy: 85 },
  { rank: 6, name: "David Script", score: 7100, quizzes: 11, accuracy: 82 },
];

export default function Leaderboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Global Leaderboard</h1>
          <p className="text-slate-400">See how you rank against other developers worldwide.</p>
        </div>
        
        <div className="mt-6 md:mt-0 relative w-full md:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg leading-5 bg-slate-800/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Find a player..."
          />
        </div>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/80 text-slate-300 border-b border-slate-700">
                <th className="py-4 px-6 font-semibold">Rank</th>
                <th className="py-4 px-6 font-semibold">Player</th>
                <th className="py-4 px-6 font-semibold text-right">Score (XP)</th>
                <th className="py-4 px-6 font-semibold text-right hidden sm:table-cell">Quizzes</th>
                <th className="py-4 px-6 font-semibold text-right">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((player, index) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={player.rank}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-6">
                    {player.rank === 1 ? (
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center">
                        <Trophy className="w-4 h-4" />
                      </div>
                    ) : player.rank === 2 ? (
                      <div className="w-8 h-8 rounded-full bg-slate-400/20 text-slate-300 flex items-center justify-center">
                        <Medal className="w-4 h-4" />
                      </div>
                    ) : player.rank === 3 ? (
                      <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center">
                        <Medal className="w-4 h-4" />
                      </div>
                    ) : (
                      <span className="text-slate-500 font-bold ml-2">{player.rank}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-medium text-white">{player.name}</td>
                  <td className="py-4 px-6 text-right text-brand-400 font-bold">{player.score.toLocaleString()}</td>
                  <td className="py-4 px-6 text-right text-slate-400 hidden sm:table-cell">{player.quizzes}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end">
                      <span className="text-slate-300 mr-2">{player.accuracy}%</span>
                      <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden hidden md:block">
                        <div 
                          className={`h-full ${player.accuracy >= 90 ? 'bg-green-500' : player.accuracy >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${player.accuracy}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
