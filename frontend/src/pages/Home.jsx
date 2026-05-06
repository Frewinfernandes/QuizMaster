import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrainCircuit, Trophy, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-brand-400" />,
      title: 'Instant Results',
      description: 'Get immediate feedback and detailed analytics right after you finish your quiz.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: 'Global Leaderboards',
      description: 'Compete with developers worldwide and climb the ranks to prove your skills.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: 'Anti-Cheat System',
      description: 'Fair play is guaranteed with our advanced tab-switching and fullscreen monitoring.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Abstract Background shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-3xl opacity-50 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">v1.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Master your skills with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">
              Interactive Quizzes
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            A production-grade platform designed to test your knowledge, track your progress, and compete on global leaderboards.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/categories">
                Start Playing Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/leaderboard">
                View Leaderboard
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose QuizMaster?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built with modern web technologies to deliver the best testing experience possible.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
