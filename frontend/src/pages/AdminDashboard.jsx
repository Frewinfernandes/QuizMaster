import { Users, FileQuestion, Activity, Plus, Settings } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import Button from '../components/Button';

const data = [
  { name: 'Mon', attempts: 400 },
  { name: 'Tue', attempts: 300 },
  { name: 'Wed', attempts: 550 },
  { name: 'Thu', attempts: 450 },
  { name: 'Fri', attempts: 700 },
  { name: 'Sat', attempts: 850 },
  { name: 'Sun', attempts: 900 },
];

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Users', value: '1,245', change: '+12%', icon: Users, color: 'text-blue-400' },
    { title: 'Active Quizzes', value: '48', change: '+4', icon: FileQuestion, color: 'text-purple-400' },
    { title: 'Total Attempts', value: '15.4k', change: '+24%', icon: Activity, color: 'text-emerald-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-400">Manage quizzes and view platform analytics.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="hidden sm:flex">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Quiz
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg bg-slate-800 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
                <span className="text-slate-500 text-sm ml-2">vs last week</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-6">Quiz Attempts (Last 7 Days)</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAttempts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '0.5rem', color: '#f8fafc' }}
              />
              <Area type="monotone" dataKey="attempts" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorAttempts)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
