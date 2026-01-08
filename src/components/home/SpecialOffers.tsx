'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SPECIAL_OFFERS } from '@/lib/constants';
import Image from 'next/image';

export const SpecialOffers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="container pt-40 pb-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[28px] leading-[36px] font-bold text-text-default">Special Offer</h2>
        <button className="text-text-primary hover:text-red-700 font-semibold flex items-center gap-1 transition">
          View All Offers
          <ChevronRight className="text-secondary-default" size={18} />
        </button>
      </div>

      <div className="content-wrapper bg-background-light px-8 py-8 rounded-[20px] border border-border-blue-25">
        {/* Filters */}
        <div className="flex gap-3 mb-8 flex-wrap ">
          {['all', 'flights', 'holiday', 'packages'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-1 rounded-full border border-black font-medium capitalize text-sm transition ${
                activeFilter === filter
                  ? 'bg-red-200'
                  : 'bg-background-default text-text-default hover:bg-gray-200'
              }`}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {SPECIAL_OFFERS.map((offer) => (
            <div key={offer.id} className="col-span-1 w-full">
              <div className="relative w-full h-[260px]">
                <Image src={offer.image} alt={offer.title} fill className="object-contain w-full h-full" />
              </div>
              {/*  <div className="flex-1">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl mb-4 flex items-center justify-center text-3xl">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>
              <div className="mb-1">
                <span className="text-6xl font-black text-red-600">{offer.discount}</span>
                <span className="text-3xl font-bold text-red-600 ml-1">% OFF</span>
              </div>
              <p className="text-gray-600 mb-6">{offer.validUntil}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-0.5">International</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {offer.internationalFlights}+
                  </div>
                  <div className="text-xs text-gray-400">Flights</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-0.5">Domestic</div>
                  <div className="text-2xl font-bold text-gray-900">{offer.domesticFlights}+</div>
                  <div className="text-xs text-gray-400">Flights</div>
                </div>
              </div>

              <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-3 rounded-lg font-bold transition shadow-lg">
                Book Now
              </button>
            </div> */}

              {/*   <div className="w-full md:w-60 h-60 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-8xl">🎡</div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
