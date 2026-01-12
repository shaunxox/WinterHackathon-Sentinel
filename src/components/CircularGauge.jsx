import React from 'react';

const CircularGauge = ({ score }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="transform -rotate-90 w-48 h-48">
        <circle cx="96" cy="96" r={radius} stroke="currentColor" strokeWidth="12" fill="none" className="text-zinc-800" />
        <circle
          cx="96" cy="96" r={radius} stroke="currentColor" strokeWidth="12" fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-cyan-400 transition-all duration-1000"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-white">{score}</span>
        <span className="text-sm text-zinc-400">Health Score</span>
      </div>
    </div>
  );
};

export default CircularGauge;