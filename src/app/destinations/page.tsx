import React from 'react';
import { BestFromNepal } from '@/components/home/BestFromNepal';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-8xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl">Discover the beauty of Nepal and beyond</p>
        </div>
      </div>
      <BestFromNepal />
    </div>
  );
}