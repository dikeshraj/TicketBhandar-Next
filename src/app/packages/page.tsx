import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: 'Kathmandu Valley Tour',
      duration: '3 Days / 2 Nights',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
      includes: ['Hotel', 'Transportation', 'Guide', 'Meals'],
    },
    {
      id: 2,
      title: 'Pokhara Adventure',
      duration: '4 Days / 3 Nights',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop',
      includes: ['Hotel', 'Activities', 'Guide', 'Breakfast'],
    },
    {
      id: 3,
      title: 'Chitwan Jungle Safari',
      duration: '2 Days / 1 Night',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
      includes: ['Resort', 'Safari', 'Guide', 'All Meals'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-8xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Holiday Packages</h1>
          <p className="text-xl">Explore Nepal with our curated tour packages</p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  NPR {pkg.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <span>⏱️</span> {pkg.duration}
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Package Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition">
                  Book Now
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
