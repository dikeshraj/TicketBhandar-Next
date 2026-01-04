import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const OtherServices: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto px-6 py-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Other Services</h2>
        <button className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 transition">
          View All Offers
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((service) => (
          <div key={service.id} className="group cursor-pointer">
            <div className="relative h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="text-white font-bold text-lg">{service.title}</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <ChevronRight size={20} className="text-gray-900 group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
