import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TechItem {
  iconClass?: string;
  svg?: ReactNode;
  name: string;
  description: string;
  colorClass: string;
}