'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SPECIAL_OFFERS } from '@/lib/constants';
import Image from 'next/image';

export const SpecialOffers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="container pt-40 pb-14 ">
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
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
