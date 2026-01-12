import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { mockLogs } from '../constants/mockData';

const Dashboard = ({ setFile, onFinish, onNavigate }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [localFile, setLocalFile] = useState(null);
  const [logs, setLogs] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file?.name.endsWith('.zip')) {
      setLocalFile(file);
      setFile(file);
    }
  };

  const startAnalysis = () => {
    setIsProcessing(true);
    mockLogs.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (i === mockLogs.length - 1) setTimeout(onFinish, 1000);
      }, i * 500);
    });
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar activePage="dashboard" onNavigate={onNavigate} />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Analyze Repository</h1>
        
        {!isProcessing ? (
          <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-16 text-center">
            {localFile ? (
              <div className="space-y-4">
                <CheckCircle className="mx-auto text-cyan-400" size={48} />
                <p className="text-xl text-white font-semibold">{localFile.name}</p>
                <button onClick={startAnalysis} className="bg-indigo-600 px-8 py-3 rounded-lg font-bold">Validate Now</button>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="mx-auto text-zinc-500" size={48} />
                <p className="text-zinc-400">Drag & Drop repository ZIP here</p>
                <input type="file" onChange={handleFileUpload} className="hidden" id="repo-up" />
                <label htmlFor="repo-up" className="inline-block bg-zinc-800 px-6 py-2 rounded-lg cursor-pointer">Browse Files</label>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-black rounded-xl p-6 font-mono text-sm border border-zinc-800 h-96 overflow-y-auto">
            {logs.map((log, i) => <div key={i} className="text-cyan-400 mb-1">$ {log}</div>)}
            <div className="animate-pulse text-white">_</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;