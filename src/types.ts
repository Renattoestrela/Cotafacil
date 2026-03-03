import { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  title: string;
  description: string;
  painPoint: string;
  whenItMakesSense: string;
  icon: LucideIcon;
  category: 'patrimony' | 'credit' | 'strategy';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface PartnerBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}
