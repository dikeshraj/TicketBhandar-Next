// 'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="max-w-8xl mx-auto px-6">
        {/* Visit Us Online */}
        <div className="mb-10">
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
        </div>

        {/* Connect With Us */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-5 text-gray-900">Connect with us</h3>
          <div className="flex items-center gap-8 flex-wrap">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
            >
              <Facebook size={20} fill="currentColor" />
              <span className="font-semibold">facebook</span>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition"
            >
              <Instagram size={20} />
              <span className="font-semibold">instagram</span>
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 font-semibold transition"
            >
              TikTok
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
            >
              <Youtube size={20} fill="currentColor" />
              <span className="font-semibold">Youtube</span>
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-5 text-gray-900">We accept</h3>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="px-6 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="text-red-600 font-black text-xl">khalti</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-400 -ml-3"></div>
              </div>
            </div>
            <div className="px-6 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="text-blue-900 font-black text-xl">VISA</span>
            </div>
            <div className="px-6 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="text-green-600 font-black text-xl">e-Sewa</span>
            </div>
            <div className="px-6 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="text-red-600 font-black text-xl">fonepay</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-5 text-gray-900">Quick links</h3>
          <div className="flex gap-10 flex-wrap">
            <Link href="/about" className="text-gray-600 hover:text-red-600 font-medium transition">
              About us
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-red-600 font-medium transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600 font-medium transition">
              Contact us
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-red-600 font-medium transition">
              Gallery
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-red-600 font-medium transition">
              Privacy policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2025, Ticket Bhandar. Positively yours on holiday Travel Private Limited.
            Nepal. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};