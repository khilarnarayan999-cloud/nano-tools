
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-gray-100 dark:border-slate-800 pt-16 pb-8 px-4 md:px-8 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#0088cc] rounded-[8px] flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xl font-black text-[#0f172a] dark:text-white uppercase tracking-tight">Nano Tools</span>
          </div>
          <p className="text-gray-500 dark:text-slate-400 max-w-sm leading-relaxed">
            The Only Hub You Ever Need. Fast, simple AI-powered text tools for creators, students, and everyday writing. Clean. Focused.
          </p>
        </div>
        
        <div>
          <h4 className="font-black text-[#0f172a] dark:text-white mb-6 uppercase text-xs tracking-[0.2em]">Product</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">All Tools</Link></li>
            <li><Link to="/faq" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">FAQ</Link></li>
            <li><Link to="/about" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">About Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-[#0f172a] dark:text-white mb-6 uppercase text-xs tracking-[0.2em]">Legal</h4>
          <ul className="space-y-3">
            <li><Link to="/privacy" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">Terms of Service</Link></li>
            <li><Link to="/contact" className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-slate-800 mt-16 pt-8 text-center text-gray-400 dark:text-slate-600 text-xs font-medium uppercase tracking-widest">
        © {new Date().getFullYear()} Nano Tools. Designed for creators & students.
      </div>
    </footer>
  );
};

export default Footer;
