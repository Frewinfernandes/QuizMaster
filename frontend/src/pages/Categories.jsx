import { useState } from 'react';
import { Search } from 'lucide-react';
import QuizCard from '../components/QuizCard';

// Mock Data
const MOCK_QUIZZES = [
  {
    _id: '1',
    title: 'Advanced React Patterns',
    description: 'Test your knowledge on React hooks, context, and performance optimization techniques.',
    category: 'React',
    difficulty: 'Hard',
    timeLimitMinutes: 15,
    questionCount: 10
  },
  {
    _id: '2',
    title: 'JavaScript Fundamentals',
    description: 'A comprehensive quiz covering ES6+, closures, prototypes, and async programming.',
    category: 'JavaScript',
    difficulty: 'Medium',
    timeLimitMinutes: 10,
    questionCount: 15
  },
  {
    _id: '3',
    title: 'CSS Grid & Flexbox',
    description: 'Master modern CSS layout modules with this visual and structural quiz.',
    category: 'CSS',
    difficulty: 'Easy',
    timeLimitMinutes: 5,
    questionCount: 8
  },
  {
    _id: '4',
    title: 'Node.js Backend Architecture',
    description: 'Explore concepts of REST APIs, event loop, and middleware patterns in Node.',
    category: 'Node.js',
    difficulty: 'Hard',
    timeLimitMinutes: 20,
    questionCount: 12
  },
  {
    _id: '5',
    title: 'Docker for Beginners',
    description: 'Learn the basics of containerization, images, and Docker Compose.',
    category: 'DevOps',
    difficulty: 'Easy',
    timeLimitMinutes: 10,
    questionCount: 10
  },
  {
    _id: '6',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Practice questions for the foundational AWS certification exam.',
    category: 'Cloud',
    difficulty: 'Medium',
    timeLimitMinutes: 25,
    questionCount: 20
  }
];

const CATEGORIES = ['All', 'React', 'JavaScript', 'CSS', 'Node.js', 'DevOps', 'Cloud'];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredQuizzes = MOCK_QUIZZES.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || quiz.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Quiz Categories</h1>
        <p className="text-slate-400 text-lg">Browse our collection of technical quizzes and test your skills.</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-700 rounded-lg leading-5 bg-slate-800/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition-colors"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar space-x-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Grid */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz, index) => (
            <QuizCard key={quiz._id} quiz={quiz} delay={index * 0.1} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-panel rounded-2xl">
          <p className="text-slate-400 text-lg">No quizzes found matching your criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-4 text-brand-400 hover:text-brand-300 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
