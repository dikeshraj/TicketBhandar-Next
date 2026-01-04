'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tripType, setTripType] = useState<'regular' | 'student'>('regular');
  const [formData, setFormData] = useState({
    from: 'Kathmandu',
    to: 'London',
    departDate: '',
    returnDate: '',
    travelers: '1',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/flights/search');
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Nepali Architecture Silhouettes */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute left-0 bottom-0 w-full">
          <svg viewBox="0 0 1200 300" className="w-full h-auto" fill="currentColor">
            <path d="M0,250 L50,180 L80,200 L100,160 L130,190 L150,140 L180,170 L200,120 L230,150 L250,100 L280,140 L300,80 L330,120 L350,70 L380,110 L400,60 L0,60 Z" className="text-white" />
            <circle cx="120" cy="100" r="25" className="text-white" />
            <path d="M500,250 L550,180 L580,200 L620,160 L650,190 L680,150 L710,180 L740,130 L770,170 L800,120 L500,120 Z" className="text-white" />
            <rect x="900" y="200" width="40" height="50" className="text-white" />
            <path d="M920,200 L950,170 L980,200 Z" className="text-white" />
          </svg>
        </div>
        <div className="absolute right-20 top-10 text-white text-8xl">⛩️</div>
        <div className="absolute right-80 top-32 text-white text-6xl">🛕</div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 rounded-full transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 rounded-full transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative z-10 max-w-8xl mx-auto px-6 pt-12 pb-8">
        {/* Hero Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            From Nepal to the World – <span className="text-red-500">Easy</span>
          </h1>
          <p className="text-xl text-white/95">Book cheap flights other sites simply can't</p>
          <div className="inline-block mt-1 text-red-500 text-xl font-bold">Ticket</div>
        </div>

        {/* Tabs Row */}
        <div className="flex gap-3 mb-4 flex-wrap">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
            <span>✈️</span> Round Trip
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-white hover:bg-white/20 transition">
            <span>✈️</span> One Way
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-white hover:bg-white/20 transition">
            <span>🏨</span> Hotel
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-white hover:bg-white/20 transition">
            <span>🎄</span> Holiday Packages
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-white hover:bg-white/20 transition">
            <span>📄</span> Visa
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-white hover:bg-white/20 transition">
            <span>🚗</span> Car Hire
          </button>
        </div>

        {/* Search Card */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6">
          {/* Passenger Type */}
          <div className="flex gap-3 mb-5 flex-wrap">
            <button
              type="button"
              onClick={() => setTripType('regular')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
                tripType === 'regular'
                  ? 'bg-pink-100 text-pink-600 border border-pink-400'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  tripType === 'regular' ? 'border-pink-500' : 'border-gray-400'
                }`}
              >
                {tripType === 'regular' && <div className="w-2 h-2 rounded-full bg-pink-500"></div>}
              </div>
              Regular
            </button>
            <button
              type="button"
              onClick={() => setTripType('student')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
                tripType === 'student'
                  ? 'bg-pink-100 text-pink-600 border border-pink-400'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  tripType === 'student' ? 'border-pink-500' : 'border-gray-400'
                }`}
              >
                {tripType === 'student' && <div className="w-2 h-2 rounded-full bg-pink-500"></div>}
              </div>
              Student Fare
            </button>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">From</label>
              <input
                type="text"
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                placeholder="Kathmandu"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">To</label>
              <input
                type="text"
                value={formData.to}
                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                placeholder="London"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Depart</label>
              <input
                type="date"
                value={formData.departDate}
                onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Return</label>
              <input
                type="date"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Travelers</label>
              <select
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4+ Adults</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition"
          >
            <Search size={20} />
            Search Flight
          </button>
        </form>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};