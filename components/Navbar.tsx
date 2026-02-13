import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Oracle', href: '#oracle' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-purple-500 mr-2" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              PURP<span className="text-purple-500">ZILLA</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-display text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-200 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]">
                BUY $PURP
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-purple-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-display text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-bold">
              BUY $PURP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;