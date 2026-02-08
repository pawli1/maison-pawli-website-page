
import React from 'react';
import { SELLING_STEPS, ICON_MAP } from '../constants';

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-luxury-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-500 font-bold tracking-widest text-sm mb-4 uppercase">The Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-6">A Curated Path to Closing</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We don't just list properties; we launch them. Our meticulous process ensures every detail is optimized for high-value results.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold-200 -translate-x-1/2"></div>

          <div className="space-y-16 relative">
            {SELLING_STEPS.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full lg:w-auto">
                  <div className={`p-8 bg-white shadow-sm border border-gray-100 rounded-sm hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'}`}>
                    <div className="text-gold-500 mb-4 bg-gold-50 w-12 h-12 flex items-center justify-center rounded-full">
                      {ICON_MAP[step.icon]}
                    </div>
                    <span className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-2 block">Step 0{step.id}</span>
                    <h4 className="text-2xl font-serif text-luxury-dark mb-4">{step.title}</h4>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 my-6 lg:my-0">
                  <div className="w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_0_8px_rgba(194,146,67,0.1)]"></div>
                </div>

                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
