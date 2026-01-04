import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="max-w-8xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Book Your Flight</h1>
        <p className="text-lg text-gray-600 mb-8">
          Search and book flights to destinations worldwide. Get the best prices and deals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">✈️ International Flights</h3>
            <p className="text-gray-600">Fly to over 100+ international destinations</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">🏠 Domestic Flights</h3>
            <p className="text-gray-600">Explore beautiful destinations within Nepal</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">💰 Best Prices</h3>
            <p className="text-gray-600">Get exclusive deals and discounts</p>
          </div>
        </div>
      </div>
    </div>
  );
}