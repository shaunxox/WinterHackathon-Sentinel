import React from 'react';
import { AlertCircle } from 'lucide-react';

const AlertItem = ({ type, message, severity }) => {
  const colors = {
    high: 'border-red-500/50 bg-red-500/10 text-red-400',
    medium: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400',
    low: 'border-blue-500/50 bg-blue-500/10 text-blue-400'
  };

  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border ${colors[severity]}`}>
      <AlertCircle size={18} />
      <span className="text-sm font-medium">{message}</span>
      <span className="ml-auto text-[10px] uppercase font-bold tracking-widest">{severity}</span>
    </div>
  );
};

export default AlertItem;