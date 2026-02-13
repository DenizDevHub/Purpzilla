import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Oracle from './components/Oracle';
import { Send as Telegram } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Infinite Marquee Strip */}
        <div className="w-full bg-purple-600 rotate-1 py-3 overflow-hidden border-y-4 border-black relative z-20 shadow-xl">
           <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex space-x-8">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="text-black font-black text-xl font-display tracking-widest">
                  BUY $PURP • HODL • MOON • NO JEETS •
                </span>
              ))}
           </div>
        </div>

        <Tokenomics />
        <Roadmap />
        <Oracle />
      </main>

      <footer className="bg-black border-t border-purple-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="https://x.com/memelordu0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors p-3 bg-gray-900 rounded-full" aria-label="X (formerly Twitter)">
              {/* X Logo */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://t.me/memelorducagrilari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors p-3 bg-gray-900 rounded-full" aria-label="Telegram">
              <Telegram className="w-6 h-6" />
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors p-3 bg-gray-900 rounded-full flex items-center justify-center" aria-label="DexScreener">
              <img src="https://dexscreener.com/favicon.png" alt="DexScreener" className="w-6 h-6 rounded-full" />
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © 2024 PurpZilla. Not Financial Advice. Pure Memes.
          </p>
        </div>
      </footer>
      
      {/* Global CSS for Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;