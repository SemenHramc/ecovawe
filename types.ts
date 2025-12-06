import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: string; // Tailwind class for grid span
  bgClass?: string;
  highlight?: boolean;
  image?: string; // URL for background image
}

export interface Partner {
  id: number;
  name: string;
  logoText: string;
}