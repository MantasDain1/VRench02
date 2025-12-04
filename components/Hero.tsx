import React from 'react';
import { ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="bg-black">
      {/* Main Hero */}
      <div className="relative overflow-hidden bg-black text-white pb-16">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Master Blue-Collar Skills <br />
              <span className="text-lime-400">Without the Risk.</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              VRench provides immersive VR training simulations for construction, warehouse, and machinery operations. 
              Train safer, faster, and cheaper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-black bg-lime-500 hover:bg-lime-400 md:py-4 md:text-lg transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-zinc-700 text-base font-medium rounded-md text-zinc-300 hover:bg-zinc-900 hover:text-white md:py-4 md:text-lg transition-all">
                For Schools & Employers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-xl border-t-4 border-lime-500">
            <div className="flex items-center mb-4">
              <div className="bg-lime-500/10 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-lime-400" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-white">Zero Risk</h3>
            </div>
            <p className="text-zinc-400">Practice dangerous machinery maneuvers without putting people or expensive equipment at risk.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg shadow-xl border-t-4 border-zinc-500">
             <div className="flex items-center mb-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <TrendingUp className="w-8 h-8 text-zinc-300" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-white">40% Faster</h3>
            </div>
            <p className="text-zinc-400">Accelerate learning with repeatable scenarios. Fail fast, learn faster, and get job-ready.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg shadow-xl border-t-4 border-lime-500">
             <div className="flex items-center mb-4">
              <div className="bg-lime-500/10 p-3 rounded-full">
                <Users className="w-8 h-8 text-lime-400" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-white">Accessible</h3>
            </div>
            <p className="text-zinc-400">Cost-effective training for students and businesses. No need for onsite heavy equipment.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by Future Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-800 hover:border-lime-500/50 transition-colors">
              <p className="text-zinc-300 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full mr-4 grayscale" />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-lime-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;