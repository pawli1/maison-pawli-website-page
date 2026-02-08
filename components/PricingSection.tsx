
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants';

const PricingSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-500 font-bold tracking-widest text-sm mb-4 uppercase">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-6">Boutique Listing Packages</h3>
          <p className="text-gray-600 text-lg">
            Choose the tier that aligns with your property's needs. Each level is designed to maximize your ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative p-8 rounded-sm border transition-all duration-300 flex flex-col ${
                pkg.isFeatured 
                ? 'border-gold-500 shadow-2xl scale-105 z-10 bg-luxury-dark text-white' 
                : 'border-gray-100 bg-luxury-cream text-luxury-dark hover:border-gold-300'
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full">
                  Recommended Experience
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-2xl font-serif mb-2 ${pkg.isFeatured ? 'text-gold-300' : 'text-luxury-dark'}`}>
                  {pkg.name}
                </h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.isFeatured ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.isFeatured ? 'text-gold-400' : 'text-gold-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-sm font-bold text-center transition-all ${
                  pkg.isFeatured 
                  ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg' 
                  : 'bg-luxury-dark text-white hover:bg-luxury-slate'
                }`}
              >
                Select {pkg.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm">
            * Commission percentages vary by market conditions and property type. Book a consult for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
