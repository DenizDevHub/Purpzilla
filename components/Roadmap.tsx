import React from 'react';
import { RoadmapItem } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

const steps: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Inception",
    status: "completed",
    items: ["Website Launch", "Token Creation", "Social Media Setup", "Initial Liquidity Burn"]
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    status: "current",
    items: ["CoinGecko Listing", "1,000 Holders", "Community Contests", "Oracle AI Beta"]
  },
  {
    phase: "Phase 3",
    title: "Takeover",
    status: "upcoming",
    items: ["CEX Listings", "NFT Collection", "PurpZilla Merch", "To The Moon"]
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            ROADMAP
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full box-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-2xl border ${
                step.status === 'current' 
                  ? 'bg-purple-900/20 border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]' 
                  : 'bg-gray-900/30 border-gray-800'
              } transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
                  step.status === 'completed' ? 'bg-green-900/50 text-green-400' :
                  step.status === 'current' ? 'bg-purple-600 text-white animate-pulse' :
                  'bg-gray-800 text-gray-500'
                }`}>
                  {step.status}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{step.phase}</h3>
              <h4 className="text-lg text-purple-400 mb-6 font-medium">{step.title}</h4>
              
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    {step.status === 'completed' || (step.status === 'current' && i < 2) ? (
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-600 mr-3 shrink-0" />
                    )}
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;