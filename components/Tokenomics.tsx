import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Liquidity Pool', value: 45, color: '#9333ea' }, // Purple 600
  { name: 'Marketing', value: 25, color: '#a855f7' }, // Purple 500
  { name: 'Community Airdrop', value: 20, color: '#c084fc' }, // Purple 400
  { name: 'Dev Team', value: 10, color: '#581c87' }, // Purple 900
];

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            TOKENOMICS
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full box-glow"></div>
          <p className="mt-4 text-gray-400">Total Supply: 1,000,000,000 $PURP</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #6b21a8', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="block text-2xl font-bold text-purple-400">100%</span>
              <span className="text-xs text-gray-500">Distributed</span>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-6">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-4 shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: item.color, color: item.color }}
                  ></div>
                  <span className="text-lg font-medium text-gray-200">{item.name}</span>
                </div>
                <span className="text-xl font-bold text-purple-400">{item.value}%</span>
              </div>
            ))}
            <div className="mt-8 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg text-center">
              <p className="text-purple-300 font-display">TAX: 0% BUY / 0% SELL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;