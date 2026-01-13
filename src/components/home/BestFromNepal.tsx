'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, MapPin, Clock } from 'lucide-react';
import { DESTINATIONS } from '@/lib/constants';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

export const BestFromNepal: React.FC = () => {
  return (
    <section className="container py-12">
      <div className="border border-border-blue-25 rounded-[14px] px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 capitalize">
          <h2 className="text-[28px] leading-[36px] font-bold text-text-default">
            Best From Nepal
          </h2>

          <button className="text-text-primary font-semibold flex items-center gap-1">
            View All Offers
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* LEFT NAV */}
          <button
            className="best-prev hidden lg:flex absolute left-[-20px] top-1/2 -translate-y-1/2 
                       z-20 w-9 h-9 rounded-full 
                       bg-secondary-default backdrop-blur 
                       items-center justify-center 
                       hover:bg-background-light transition"
          >
            <ChevronLeft size={20} className="text-white"/>
          </button>

          {/* RIGHT NAV */}
          <button
            className="best-next hidden lg:flex absolute right-[-20px] top-1/2 -translate-y-1/2 
                       z-20 w-9 h-9 rounded-full 
                       bg-secondary-default backdrop-blur 
                       items-center justify-center 
                       hover:bg-background-light transition"
          >
            <ChevronRight size={20} className="text-white"/>
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}     
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.best-prev',
              nextEl: '.best-next',
              enabled: false, // mobile disabled
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
                navigation: {
                  enabled: true, // desktop only
                },
              },
            }}
          >
            {DESTINATIONS.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="group cursor-pointer">
                  <div className="relative min-h-[360px] max-h-[370px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />

                    {dest.label && (
                      <div className="absolute top-4 right-4 bg-primary-dark text-white px-2.5 py-1 rounded-full text-[10px] font-medium z-10 flex items-center gap-1">
                        <Clock size={10} />
                        {dest.label.split(' ')[0]}
                        <MapPin size={10} />
                        {dest.label.split(' ').slice(1).join(' ')}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-6 z-10 w-full">
                      <h3 className="text-xl font-medium text-white text-center">
                        {dest.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
