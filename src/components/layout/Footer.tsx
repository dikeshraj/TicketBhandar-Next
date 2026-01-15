// 'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8">
      <div className="container">
        {/* Visit Us Online */}
        {/*  <div className="mb-10">
          <h3 className="text-lg font-bold mb-5 text-gray-900">Visit us online</h3>
          <div className="flex items-center gap-10 flex-wrap">
            <div className="text-blue-600 font-bold text-xl">Sea Links</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              <span className="font-bold text-xl text-gray-800">One Go</span>
            </div>
            <div className="text-orange-500 font-bold text-xl">BUDDHA AIR</div>
            <div className="text-blue-700 font-bold text-xl">NIRVANA</div>
            <div className="text-blue-600 font-bold text-xl">SEALINKS</div>
          </div>
        </div> */}

        {/* Connect With Us */}
        <div className="pt-8">
          <h3 className="text-xl font-bold mb-5 text-gray-900">Connect with us</h3>
          <div className="flex items-center justify-start gap-10 flex-wrap ">
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[125px] max-w-[130px] h-[50px] md:w-[140px] md:max-w-[145px] md:h-[65px] hover:scale-90 transition relative"
            >
              <Image
                src={siteConfig.social.facebook.image}
                alt="Facebook"
                fill
                className="object-contain"
              />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[125px] max-w-[130px] h-[50px] md:w-[140px] md:max-w-[145px] md:h-[65px] hover:scale-90 transition relative"
            >
              <Image
                src={siteConfig.social.instagram.image}
                alt="Instagram"
                fill
                className="object-contain"
              />
            </Link>
            <Link
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[125px] max-w-[130px] h-[50px] md:w-[140px] md:max-w-[145px] md:h-[65px] hover:scale-90 transition relative"
            >
              <Image
                src={siteConfig.social.twitter.image}
                alt="Twitter"
                fill
                className="object-contain"
              />
            </Link>
            <Link
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[125px] max-w-[130px] h-[50px] md:w-[140px] md:max-w-[145px] md:h-[65px] hover:scale-90 transition relative"
            >
              <Image
                src={siteConfig.social.tiktok.image}
                alt="TikTok"
                fill
                className="object-contain"
              />
            </Link>
            <Link
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[125px] max-w-[130px] h-[50px] md:w-[140px] md:max-w-[145px] md:h-[65px] hover:scale-90 transition relative"
            >
              <Image
                src={siteConfig.social.youtube.image}
                alt="YouTube"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pt-8">
          <h3 className="text-xl font-bold mb-5 text-gray-900">We accept</h3>
          <div className="flex items-center gap-10 flex-wrap">
            <div className="w-[100px] max-w-[105px] h-[45px] md:w-[135px] md:max-w-[140px] md:h-[55px] relative">
              {/* <span className="text-red-600 font-black text-xl">khalti</span> */}
              <Image
                src="/images/brands/khalti.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-[100px] max-w-[105px] h-[45px]  md:w-[120px] md:max-w-[125px] md:h-[55px] relative">
              <Image
                src="/images/brands/mastercard.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
              {/*  <div className="w-8 h-8 rounded-full bg-red-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-400 -ml-3"></div> */}
            </div>
            <div className="w-[100px] max-w-[105px] h-[45px] md:w-[120px] md:max-w-[125px] md:h-[55px] relative">
              <Image
                src="/images/brands/visa-inc.png" 
                alt="Facebook"
                fill
                className="object-contain"
              />
              {/*   <span className="text-blue-900 font-black text-xl">VISA</span> */}
            </div>
            <div className="w-[100px] max-w-[105px] h-[45px]  md:w-[120px] md:max-w-[125px] md:h-[55px] relative">
              <Image
                src="/images/brands/esewa.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
              {/*  <span className="text-green-600 font-black text-xl">e-Sewa</span> */}
            </div>
            <div className="w-[100px] max-w-[105px] h-[45px] md:w-[120px] md:max-w-[125px] md:h-[55px] relative">
              {/* <span className="text-red-600 font-black text-xl">fonepay</span> */}
              <Image
                src="/images/brands/fonepay.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-8 mb-10">
          <h3 className="text-xl font-bold mb-5 text-gray-900">Quick links</h3>
          <div className="flex gap-10 flex-wrap">
            <Link
              href="/about"
              className="text-gray-600 hover:text-red-600 font-medium transition underline"
            >
              About us
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-red-600 font-medium transition underline"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-red-600 font-medium transition underline"
            >
              Contact us
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-red-600 font-medium transition underline"
            >
              Gallery
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-red-600 font-medium transition underline"
            >
              Privacy policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border-blue-25 text-start">
          <p className="text-text-default font-medium text-xs">
            Copyright © 2025 Ticket Bhandar (formerly known as Sealinks Travel Private Limited),Nepal. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
