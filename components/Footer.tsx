
import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-dark pt-20 pb-10 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex flex-col mb-8">
              <span className="font-serif text-3xl font-bold tracking-widest text-white">MAISON PAWLI</span>
              <span className="text-[10px] tracking-[0.3em] font-light text-gold-500 uppercase">Boutique Realty</span>
            </a>
            <p className="max-w-md mb-8 leading-relaxed">
              Redefining luxury real estate through a focus on design, narrative, and global reach. We don't just sell homes; we curate the next chapter of your life.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#process" className="hover:text-gold-500 transition-colors">The Process</a></li>
              <li><a href="#packages" className="hover:text-gold-500 transition-colors">Our Packages</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Seller Guide</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Market Insights</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Maison Pawli Boutique Realty. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">Member of Elite Luxury Network International</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
