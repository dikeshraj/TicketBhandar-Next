import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { DESTINATIONS } from '@/lib/constants';

export const BestFromNepal: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto px-6 py-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Best From Nepal</h2>
        <button className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 transition">
          View All Offers
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DESTINATIONS.map((dest) => (
          <div key={dest.id} className="group cursor-pointer">
            <div className="relative h-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
              />
              {dest.label && (
                <div className="absolute top-4 left-4 bg-blue-900 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  {dest.label}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-3xl font-bold text-white mb-1">{dest.name}</h3>
                {dest.description && (
                  <p className="text-white/80 text-sm">{dest.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
