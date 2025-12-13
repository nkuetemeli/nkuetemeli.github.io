import React from 'react';

export interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface Publications {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  comingSoon?: boolean;
}

export interface NewsLink {
  label: string;
  href: string;
}

export interface News {
  date: string;
  text: string;
  links?: NewsLink[];
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
