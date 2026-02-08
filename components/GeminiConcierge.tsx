import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const GeminiConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Maison Pawli. I am your AI Concierge. How can I assist you in your property selling journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    const response = await getChatResponse(newHistory);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="concierge" className="py-24 bg-luxury-dark relative overflow-hidden">
      {/* Abstract patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-[10px] uppercase font-bold tracking-[0.2em]">Intelligent Concierge</span>
            </div>
            <h3 className="text-4xl font-serif text-white mb-4">Ask Our Specialist</h3>
            <p className="text-gray-400">Instant answers about our process, staging, or the luxury real estate market.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[600px] shadow-2xl">
            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-gold-500 ml-3' : 'bg-white/10 mr-3'
                    }`}>
                      {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-gold-400" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-gold-500 text-white rounded-tr-none' 
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex flex-row">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 mr-3">
                      <Bot className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl flex space-x-1 items-center">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="E.g. How does the curation process work?"
                  className="w-full bg-white/10 border border-white/20 text-white rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-3 bg-gold-500 hover:bg-gold-600 rounded-full text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiConcierge;