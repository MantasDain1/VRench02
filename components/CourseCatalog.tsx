import React from 'react';
import { COURSES } from '../constants';
import { Clock, BarChart, Tag } from 'lucide-react';

const CourseCatalog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white">Available Simulation Modules</h2>
        <p className="text-zinc-400 mt-2 max-w-2xl mx-auto">
          Choose from our library of safety-certified VR training modules. 
          Start your journey to becoming a certified professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div key={course.id} className="bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-[0_0_20px_rgba(132,204,22,0.15)] transition-all border border-zinc-800 hover:border-lime-500/50 flex flex-col h-full group">
            <div className="relative h-48">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {course.category}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-zinc-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-lime-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BarChart className="w-4 h-4 mr-1 text-lime-400" />
                    {course.difficulty}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-2xl font-bold text-lime-400">€{course.price}</span>
                <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-lime-500 transition-colors text-sm font-bold">
                  Start Training
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;