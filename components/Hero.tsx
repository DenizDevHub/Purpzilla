import React from 'react';
import { Copy, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const contractAddress = "0x78a...PURP...99z";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied!");
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
          <span className="block text-white mb-2">UNLEASH THE</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 neon-glow">
            PURPZILLA
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          The only meme coin that devours the dip and spits out purple flames. 
          Powered by community, fueled by hype, and guided by the Oracle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] hover:-translate-y-1">
            <TrendingUp className="mr-2 h-5 w-5" />
            BUY ON DEX
          </button>
          
          <button className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-purple-300 border border-purple-500/30 hover:bg-purple-900/20 transition-all backdrop-blur-sm">
            VIEW CHART
          </button>
        </div>

        <div className="mt-12 inline-flex items-center space-x-2 bg-gray-900/50 rounded-lg p-2 border border-purple-500/20 backdrop-blur-sm">
          <span className="text-gray-400 font-mono text-sm px-2 hidden sm:inline">CA:</span>
          <span className="text-purple-300 font-mono text-sm sm:text-base break-all">{contractAddress}</span>
          <button 
            onClick={copyToClipboard}
            className="p-2 hover:bg-purple-500/20 rounded-md transition-colors text-gray-400 hover:text-white"
            title="Copy Address"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;