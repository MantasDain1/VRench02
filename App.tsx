import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import CourseCatalog from './components/CourseCatalog';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero onStart={() => setActiveTab('courses')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <CourseCatalog />;
      case 'advisor':
        return <GeminiAdvisor />;
      default:
        return <Hero onStart={() => setActiveTab('courses')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans text-zinc-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-neutral-900 text-zinc-500 py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight">VRench</span>
            <p className="text-sm mt-1">Safety First Training Solutions</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Contact</a>
          </div>
          <div className="mt-4 md:mt-0 text-xs">
            &copy; {new Date().getFullYear()} VRench. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;