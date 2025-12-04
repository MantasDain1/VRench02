import React, { useState } from 'react';
import { Menu, X, Box, BarChart2, BookOpen, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Box className="w-4 h-4 mr-2" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { id: 'dashboard', label: 'Performance', icon: <BarChart2 className="w-4 h-4 mr-2" /> },
    { id: 'advisor', label: 'AI Advisor', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Box className="w-8 h-8 text-lime-400" />
            <span className="ml-2 text-xl font-bold tracking-tight">VRench</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-bold transition-all ${
                    activeTab === item.id
                      ? 'bg-lime-500 text-black shadow-[0_0_15px_rgba(132,204,22,0.4)]'
                      : 'text-zinc-400 hover:text-lime-400 hover:bg-zinc-900'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'bg-lime-500 text-black'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-lime-400'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;