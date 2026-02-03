
import React, { useState, useMemo } from 'react';
import { TOOLS, CATEGORIES } from '../constants';
import ToolCard from '../components/ToolCard';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white dark:bg-[#0f172a] pt-16 pb-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-8 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full uppercase tracking-wider">
            30+ AI & Text Tools
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black text-[#0f172a] dark:text-white mb-8 tracking-tight leading-[1.1] flex flex-col items-center">
            <span>The Only Hub</span>
            <span>You</span>
            <span className="bg-gradient-to-r from-[#0088cc] via-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent pb-2">
              Ever Need.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Fast, simple AI-powered text tools for creators, students, and everyday writing. 
            All in one place. Clean. Focused.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 text-gray-900 dark:text-white transition-all text-lg shadow-xl shadow-blue-500/5 dark:shadow-none outline-none"
              placeholder="Search for a tool (e.g., YouTube Title Generator)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        {searchQuery ? (
          <div className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Search Results ({filteredTools.length})
            </h2>
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-slate-800/30 rounded-3xl border-2 border-dashed border-gray-100 dark:border-slate-800">
                <p className="text-gray-400 dark:text-slate-500 text-lg font-medium">No tools found matching your search.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                >
                  View all tools
                </button>
              </div>
            )}
          </div>
        ) : (
          CATEGORIES.map(category => (
            <div key={category} className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {category}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {TOOLS.filter(tool => tool.category === category).map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
