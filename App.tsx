
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessTimeline from './components/ProcessTimeline';
import PricingSection from './components/PricingSection';
import GeminiConcierge from './components/GeminiConcierge';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Intro Text */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-dark mb-10 leading-tight">
              A boutique approach where <span className="italic">every detail</span> is orchestrated for the perfect sale.
            </h2>
            <div className="h-1 w-24 bg-gold-400 mx-auto"></div>
          </div>
        </section>

        <ProcessTimeline />
        <PricingSection />
        <GeminiConcierge />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
