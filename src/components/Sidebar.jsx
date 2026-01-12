import React from 'react';
import { Home, Clock, FileBarChart, Settings, FileText } from 'lucide-react';

export default function Sidebar({ currentPage, onNavigate }) {
  const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: Clock, label: 'History', page: 'history' },
    { icon: FileBarChart, label: 'Reports', page: 'results' },
    { icon: Settings, label: 'Settings', page: 'settings' }
  ];

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 h-screen flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Verity</h2>
            <p className="text-xs text-zinc-500">Doc Analyzer</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.page)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === item.page
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}