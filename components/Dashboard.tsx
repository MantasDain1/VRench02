import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { MOCK_PERFORMANCE_DATA, SKILL_DISTRIBUTION } from '../constants';
import { Award, Clock, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-black min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Training Analytics</h2>
        <p className="text-zinc-400">Student: Karolis (Heavy Machinery Track)</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-l-4 border-lime-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">Training Hours</p>
              <h4 className="text-2xl font-bold text-white">42.5 hrs</h4>
            </div>
            <Clock className="w-6 h-6 text-lime-400" />
          </div>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-l-4 border-zinc-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">Modules Completed</p>
              <h4 className="text-2xl font-bold text-white">3/8</h4>
            </div>
            <CheckCircle className="w-6 h-6 text-zinc-400" />
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border-l-4 border-lime-500">
           <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">Safety Score</p>
              <h4 className="text-2xl font-bold text-white">94/100</h4>
            </div>
            <ShieldCheckIcon />
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border-l-4 border-white">
           <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">Est. Risk Reduction</p>
              <h4 className="text-2xl font-bold text-white">85%</h4>
            </div>
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Progress Bar Chart */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-800">
          <h3 className="text-lg font-bold text-white mb-6">Skill Acquisition Velocity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MOCK_PERFORMANCE_DATA}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="name" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: '1px solid #3f3f46', color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="value" name="Practical Skill" fill="#84cc16" radius={[4, 4, 0, 0]} />
                <Bar dataKey="secondary" name="Theory Knowledge" fill="#3f3f46" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart for Skills */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-800">
          <h3 className="text-lg font-bold text-white mb-6">Competency Map</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DISTRIBUTION}>
                <PolarGrid stroke="#3f3f46" />
                <PolarAngleAxis dataKey="name" stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#52525b" />
                <Radar
                  name="Current Student"
                  dataKey="value"
                  stroke="#a3e635"
                  strokeWidth={3}
                  fill="#84cc16"
                  fillOpacity={0.4}
                />
                <Legend />
                <Tooltip contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: '1px solid #3f3f46', color: '#fff' }}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Recent Incidents / Safety Log */}
      <div className="mt-8 bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-800">
        <h3 className="text-lg font-bold text-white mb-4">Recent Simulation Safety Log</h3>
        <div className="overflow-hidden border border-zinc-800 rounded-md">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-950">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Module</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900 divide-y divide-zinc-800">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Oct 24, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Forklift Basic</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Correct load balancing check</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-lime-900/50 text-lime-400 border border-lime-800">
                    Passed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Oct 23, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Crane Ops</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Emergency Stop Drill</td>
                <td className="px-6 py-4 whitespace-nowrap">
                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-lime-900/50 text-lime-400 border border-lime-800">
                    Passed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Oct 20, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Electrical Safety</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Failed to ground equipment</td>
                <td className="px-6 py-4 whitespace-nowrap">
                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/50 text-red-400 border border-red-800">
                    Critical Fail
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
)

export default Dashboard;