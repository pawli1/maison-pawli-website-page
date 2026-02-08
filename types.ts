
export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface SellingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
