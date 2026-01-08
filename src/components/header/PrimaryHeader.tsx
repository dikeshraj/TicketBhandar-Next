'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, User } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { HeaderUser } from '@/types/user';

type TopHeaderProps = {
  user?: HeaderUser | null;
};

export const TopHeader: React.FC<TopHeaderProps> = ({ user }) => {
  return (
    <div className="bg-background-default border-b border-primary-dark">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 text-sm">

          {/* Left section */}
          <div className="flex items-center gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                priority
              />
            </Link>

            {/* Call button */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-900 bg-white text-blue-900">
                <Phone size={14} />
                <span className="font-semibold text-black text-sm">Book now – </span><span className="font-medium text-xs text-black">call us 24/7 </span><span className="font-semibold text-xs text-blue-950">{siteConfig.phone}</span>
            </div>

            {/* Chat icon */}
            <button className="text-blue-900 hover:opacity-80">
              <MessageCircle size={18} />
            </button>
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-6 text-gray-700">
            {siteConfig.topHeader.showAgencyId && (
              <Link href="/agency" className="hover:text-blue-700">
                Agency ID
              </Link>
            )}

            {siteConfig.topHeader.showFareInquiry && (
              <Link
                href="/fare-inquiry"
                className="flex items-center gap-1 hover:text-blue-700 font-medium"
              >
                <span className="text-blue-700 font-semibold">$</span>
                Lowest Fare Inquiry
              </Link>
            )}

            {/*USER / AUTH SECTION   */}
            {user ? (
              <div className="flex items-center gap-3">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                ) : <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User size={16} />
                  </div>}

                <div className="flex flex-col leading-tight">
                  <span className="font-medium text-gray-800">
                    {user.name}
                  </span>
                  {user.balance && (
                    <span className="text-xs text-gray-500">
                      {user.balance}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              siteConfig.topHeader.showAuth && (
                <>
                  <Link href="/login" className="hover:text-blue-700">
                    Log In
                  </Link>

                  <Link
                    href="/signup"
                    className="px-3 py-1 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
                  >
                    Sign Up
                  </Link>
                </>
              )
            )}

            {/* Currency */}
            <button className="flex items-center gap-1 hover:text-blue-700">
              {siteConfig.topHeader.currency}
              <span className="text-xs">▾</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
