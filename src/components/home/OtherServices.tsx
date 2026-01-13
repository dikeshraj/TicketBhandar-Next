import React from 'react';
import Image from 'next/image';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const OtherServices: React.FC = () => {
  return (
    <section className="container py-12">
      <div className="border border-border-blue-25 rounded-[14px] px-8 py-8">
        <div className="flex items-center justify-between mb-6 capitalize">
          <h2 className="text-[28px] leading-[36px] font-bold text-text-default">Other Services</h2>
          <button className="text-text-primary hover:text-red-700 font-semibold flex items-center gap-1 transition">
            View All Offers
            <ChevronRight className="text-secondary-default" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div key={service.id} className="group cursor-pointer relative">
              {/* Clipped Card Container */}
              <div
                className="relative min-h-[360px] max-h-[370px] w-full rounded-[10px] shadow-lg hover:shadow-xl transition-all overflow-hidden"
                style={{
                  // Apply clipPath to the container
                  clipPath: `
            polygon(
              0% 0%,
              100% 0%,
              100% calc(100% - 1.5rem),
              calc(100% - 1.5rem) 100%,
              0% 100%
            )
          `,
                }}
              >
                {/* Background Image as div (not Next.js <Image>) */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="text-white font-semibold text-lg tracking-wide">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Arrow Button (outside clipped area) */}
              <div className="absolute bottom-[-6px] right-[-10px] z-[999]">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
