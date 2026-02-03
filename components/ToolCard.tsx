
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link 
      to={`/tool/${tool.id}`}
      className="group block bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300"
    >
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {tool.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
        {tool.description}
      </p>
    </Link>
  );
};

export default ToolCard;
