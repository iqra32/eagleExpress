import React from 'react';
import { Truck, User, Star } from "lucide-react";

export const stats = [
  { icon: <Truck size={24} color="#3a7bd5" />, label: 'Loads', end: 10000, suffix: '+' },
  { icon: <Truck size={24} color="#3a7bd5" />, label: 'New Trucks in 2024', end: 1000, suffix: '+' },
  { icon: <User size={24} color="#3a7bd5" />, label: 'Owner Operators', end: 300, suffix: '+' },
  { icon: <Star size={24} color="#3a7bd5" />, label: 'Rate on Google', end: 4.9, suffix: '+', decimals: 1 },
];

/** About page — testimonial-style cards (layout inspired by dispatch industry sites) */
export const aboutTestimonials = [
  {
    quote:
      'Partnering with Eagle Express has been a game-changer. They keep me on better-paying freight and my dispatcher actually picks up the phone. They feel like part of my operation—not just another vendor.',
    name: 'James D.',
    role: 'Independent trucker',
    initials: 'JD',
  },
  {
    quote:
      'I used to burn hours on load boards and broker calls. Eagle Express handles the paperwork and negotiation so I can drive. Revenue is up and my stress is way down.',
    name: 'Maria L.',
    role: 'Owner-operator',
    initials: 'ML',
  },
  {
    quote:
      'We run a small fleet and needed consistency. Their team keeps our trucks moving with solid loads and clear communication. Best dispatch relationship we have had in years.',
    name: 'Robert K.',
    role: 'Fleet manager',
    initials: 'RK',
  },
];