import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-brand-500" />
            <span className="font-bold text-lg text-slate-200">QuizMaster</span>
          </div>

          <div className="text-center">
            <p className="text-slate-300 italic mb-2">
              "Testing your knowledge so you don't have to test your code in production."
            </p>
            <p className="text-sm text-slate-400">
              Created <span className="text-red-500"></span> by <span className="font-semibold text-brand-400">Frewin Johan Fernandes</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
