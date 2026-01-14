'use client';

import React from 'react';
import { ADS_BANNERS } from '@/config/adsBanner';
import Image from 'next/image';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

interface AdsBannerProps {
  type?: 'kathmandu' | 'fare';
}

export const AdsBanner: React.FC<AdsBannerProps> = ({ type = 'kathmandu' }) => {
  if (type === 'kathmandu') {
    const banner = ADS_BANNERS[type];
    return (
      <>
        <div className="container">
        <div className="relative w-full h-[280px]">
          <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            effect="fade"
            loop={banner.length > 1}
            autoplay={
              banner.length > 1
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false
            }
            className="w-full h-full"
          >
            {banner.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[280px]">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
   
        

        {/* <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 rounded-2xl px-8 md:px-12 py-10 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full -mr-40 -mt-40"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-2 tracking-tight">
                BEST KATHMANDU VIEW
              </h2>
              <p className="text-xl md:text-2xl font-bold text-gray-700">
                TICKET BHANDAR <span className="text-red-600">HOLIDAY</span>
              </p>
            </div>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              <div className="text-5xl md:text-6xl">🏛️</div>
              <div className="text-5xl md:text-6xl">⛩️</div>
              <div className="text-5xl md:text-6xl">🛕</div>
              <div className="text-3xl md:text-4xl font-black text-gray-800">KATHMANDU</div>
            </div>
          </div>
        </div> */}
      </>
       
    );
  }
  if (type === 'fare') {
    const banner = ADS_BANNERS[type];
    return (
      <>
        <div className="container">
        <div className="relative w-full h-[280px]">
          <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            effect="fade"
            loop={banner.length > 1}
            autoplay={
              banner.length > 1
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false
            }
            className="w-full h-full"
          >
            {banner.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[280px]">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
        {/* <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-2xl px-8 md:px-12 py-10 relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-7xl md:text-8xl">✈️</div>
          <div className="text-center flex-1">
            <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-3">
              Best Fair Easy Day
            </h3>
            <p className="text-lg md:text-xl text-gray-700">
              Travel National or International With Ticket Bhandar
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-4xl md:text-5xl">✈️</div>
            <div className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
              Ticket
              <br />
              Bhandar
            </div>
          </div>
        </div>
      </div> */}
      </>
      
    );
  }
};
