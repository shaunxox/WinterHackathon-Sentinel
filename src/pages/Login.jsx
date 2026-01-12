import React from 'react';
import { FileText, Github } from 'lucide-react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Verity</h1>
          <p className="text-zinc-400">AI Documentation Rot Detector</p>
        </div>
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            <input type="email" placeholder="you@company.com" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white" />
            <input type="password" placeholder="••••••••" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white" />
            <button onClick={onLogin} className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
              Sign In
            </button>
            <button onClick={onLogin} className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
              <Github size={20} /> Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;