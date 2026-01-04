import React from 'react';

export default function GroupToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-8xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Group Tours</h1>
          <p className="text-xl">Travel together, save together</p>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-lg text-gray-600">
          We are preparing amazing group tour packages for you. Stay tuned!
        </p>
      </div>
    </div>
  );
}