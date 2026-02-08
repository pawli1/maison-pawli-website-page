import React from 'react';
import { PricingPackage, SellingStep } from './types.ts';
import { 
  Home, 
  Camera, 
  Paintbrush, 
  Megaphone, 
  Gavel, 
  Key 
} from 'lucide-react';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'standard',
    name: 'Essential Entry',
    price: 'Standard %',
    description: 'Perfect for the independent seller who wants maximum exposure with minimal overhead.',
    features: [
      'Full MLS Listing Exposure',
      'Professional Photography',
      'Digital Marketing Suite',
      'Automated Showing Management',
      'Legal Document Support',
      'Standard Yard Signage'
    ]
  },
  {
    id: 'signature',
    name: 'Maison Signature',
    price: 'Premium %',
    description: 'Our most popular choice, providing comprehensive boutique staging and marketing.',
    isFeatured: true,
    features: [
      'Everything in Essential',
      'Complimentary Staging Consultation',
      'Cinematic Property Video',
      'Social Media Ad Campaigns',
      'Targeted Buyer Outreach',
      'Open House Hosting & Events',
      'Premium Print Collateral'
    ]
  },
  {
    id: 'luxury',
    name: 'Boutique Bespoke',
    price: 'Custom %',
    description: 'The white-glove experience for high-value estates requiring discrete and elite handling.',
    features: [
      'Everything in Signature',
      'Full Interior Design & Staging',
      'Aerial Drone & Matterport 3D',
      'International Listing Syndication',
      'Luxury Lifestyle Magazine Placement',
      'Private Concierge Coordination',
      'Elite Event Showcasing'
    ]
  }
];

export const SELLING_STEPS: SellingStep[] = [
  {
    id: 1,
    title: 'The Assessment',
    description: 'We begin with a deep dive into your property\'s unique value and market position.',
    icon: 'Home',
    details: [
      'Comparative Market Analysis',
      'Pricing Strategy Development',
      'Identify Value-Add Improvements'
    ]
  },
  {
    id: 2,
    title: 'Curation & Design',
    description: 'Preparing your home to captivate the most discerning buyers through elite staging.',
    icon: 'Paintbrush',
    details: [
      'Boutique Interior Staging',
      'Minor Repairs & Enhancements',
      'Professional Deep Cleaning'
    ]
  },
  {
    id: 3,
    title: 'Digital Capture',
    description: 'Creating high-fidelity visual assets that tell your property\'s story.',
    icon: 'Camera',
    details: [
      'Daylight & Twilight Photography',
      '4K Cinematic Walkthroughs',
      'Aerial Perspective Imaging'
    ]
  },
  {
    id: 4,
    title: 'Strategic Launch',
    description: 'Omni-channel marketing to put your home in front of the right buyers globally.',
    icon: 'Megaphone',
    details: [
      'Social Media Blitz',
      'Private Broker Previews',
      'Geo-Targeted Ad Campaigns'
    ]
  },
  {
    id: 5,
    title: 'Negotiation Power',
    description: 'Expert representation to ensure the best terms and highest price possible.',
    icon: 'Gavel',
    details: [
      'Offer Vetting & Verification',
      'Multi-Offer Strategy',
      'Counter-Offer Management'
    ]
  },
  {
    id: 6,
    title: 'The Handover',
    description: 'A seamless transition through closing and beyond.',
    icon: 'Key',
    details: [
      'Closing Coordination',
      'Title & Escrow Management',
      'Moving Assistance & Support'
    ]
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Megaphone: <Megaphone className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  Key: <Key className="w-6 h-6" />,
};