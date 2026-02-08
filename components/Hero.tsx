
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-gold-400 font-medium tracking-[0.5em] text-sm md:text-base mb-6 animate-fade-in">
          ELEVATING THE ART OF SELLING
        </h2>
        <h1 className="text-white font-serif text-5xl md:text-8xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
          Your Home, <br />
          <span className="italic">Redefined for the Market.</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          From curated staging to cinematic marketing, Maison Pawli delivers a bespoke experience that turns properties into highly coveted estates.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('process')}
            className="w-full md:w-auto bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-sm font-bold flex items-center justify-center transition-all group"
          >
            Start My Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-sm font-bold transition-all"
          >
            Explore Packages
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/60">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/60"></div>
      </div>
    </section>
  );
};

export default Hero;
