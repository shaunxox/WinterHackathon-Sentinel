import React from 'react';
import { Share2, Download, TrendingUp } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import CircularGauge from '../components/CircularGauge';
import AlertItem from '../components/AlertItem';
import { trendData, rotAlerts } from '../constants/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Results = ({ file, onNavigate }) => {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar activePage="results" onNavigate={onNavigate} />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Analysis Results</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg"><Share2 size={18}/> Share</button>
            <button className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-lg font-bold"><Download size={18}/> Download Report</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center">
            <CircularGauge score={82} />
          </div>
          <div className="col-span-2 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="font-bold mb-4">Rot Alerts</h3>
            <div className="space-y-3">
              {rotAlerts.map((alert, i) => <AlertItem key={i} {...alert} />)}
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 h-64">
          <h3 className="font-bold mb-4 flex items-center gap-2"><TrendingUp size={18}/> Documentation Trend</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis dataKey="day" hide />
              <YAxis hide />
              <Tooltip contentStyle={{backgroundColor: '#18181b', border: 'none'}} />
              <Line type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Results;