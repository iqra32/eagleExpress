import React from 'react';
import { Truck, User, Star } from "lucide-react";

export const stats = [
  { icon: <Truck size={24} color="#3a7bd5" />, label: 'Loads', end: 10000, suffix: '+' },
  { icon: <Truck size={24} color="#3a7bd5" />, label: 'New Trucks in 2024', end: 1000, suffix: '+' },
  { icon: <User size={24} color="#3a7bd5" />, label: 'Owner Operators', end: 300, suffix: '+' },
  { icon: <Star size={24} color="#3a7bd5" />, label: 'Rate on Google', end: 4.9, suffix: '+', decimals: 1 },
];