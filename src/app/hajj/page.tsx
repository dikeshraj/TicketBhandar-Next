import React from 'react';

export default function HajjPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-8xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">🕌 Hajj Services</h1>
          <p className="text-xl">Complete Hajj and Umrah packages</p>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Hajj Packages 2025</h2>
        <p className="text-lg text-gray-600 mb-8">
          Complete packages for Hajj and Umrah with accommodation, transportation, and guidance.
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Contact us for more details</h3>
          <p className="text-gray-600 mb-4">Phone: +977-01-5437 980/5435948</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}