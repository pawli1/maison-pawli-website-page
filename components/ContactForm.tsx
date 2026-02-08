
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    setSubmitted(true);
    // Reset after 5 seconds to allow another inquiry
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-luxury-cream rounded-sm p-12 lg:p-20 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-gold-500 font-bold tracking-widest text-sm mb-4 uppercase">Let's Connect</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-8">Begin Your Boutique Experience</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Every property has a unique story. Share yours with us, and we'll create a bespoke strategy to ensure its successful sale.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-100 flex items-center justify-center rounded-sm">
                  <span className="text-gold-600 font-bold italic font-serif">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-luxury-dark">Our Boutique Atelier</h4>
                  <p className="text-gray-500 text-sm">123 Luxury Lane, Yorkville, ON</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-100 flex items-center justify-center rounded-sm">
                  <span className="text-gold-600 font-bold italic font-serif">C</span>
                </div>
                <div>
                  <h4 className="font-bold text-luxury-dark">Call Us Directly</h4>
                  <p className="text-gray-500 text-sm">416.555.PAWLI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white border border-gold-200 rounded-sm animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-gold-500 mb-6" />
                <h4 className="text-2xl font-serif text-luxury-dark mb-4">Inquiry Received</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. A Maison Pawli specialist will contact you shortly to schedule your private consultation.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-gold-600 font-bold uppercase tracking-widest text-xs hover:text-gold-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">First Name</label>
                    <input required type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Last Name</label>
                    <input required type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Property Address</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Message / Inquiries</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold-500 transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-luxury-dark text-white py-5 rounded-sm font-bold hover:bg-gold-500 transition-all shadow-xl">
                  Request Private Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
