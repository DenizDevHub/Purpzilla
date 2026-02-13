import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, Loader2 } from 'lucide-react';
import { getOracleResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Oracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "GREETINGS HUMAN. I AM THE PURPZILLA ORACLE. ASK ME ABOUT MY BAGS OR THE FUTURE." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getOracleResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="oracle" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
             <Sparkles className="text-purple-400 w-8 h-8 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            THE ORACLE
          </h2>
          <p className="text-gray-400">Ask the AI Oracle about price predictions, crypto advice, or just for a roast.</p>
        </div>

        <div className="bg-gray-900/80 border border-purple-500/30 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.15)] overflow-hidden flex flex-col h-[500px]">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-gray-800 text-purple-200 border border-purple-500/20 rounded-bl-none'
                }`}>
                  {msg.role === 'model' && (
                    <div className="flex items-center mb-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                      <Bot className="w-3 h-3 mr-1" /> Oracle
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-gray-800 p-4 rounded-2xl rounded-bl-none border border-purple-500/20 flex items-center space-x-2">
                   <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                   <span className="text-gray-400 text-sm">Consulting the blockchain spirits...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-950 border-t border-purple-900/50">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the Oracle (e.g., 'Will we moon?')"
                className="flex-1 bg-gray-900 text-white placeholder-gray-500 border border-purple-900/50 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-all font-bold flex items-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oracle;