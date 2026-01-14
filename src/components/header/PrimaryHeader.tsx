'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, User, LogOut, DollarSign} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { HeaderUser } from '@/types/user';
import { useAuth } from '@/lib/authContext';

type TopHeaderProps = {
  user?: HeaderUser | null;
};

export const TopHeader: React.FC<TopHeaderProps> = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { user, isAuthenticated, logout } = useAuth();
  
    const getDashboardLink = () => {
      if (!user) return '/';
      switch (user.role) {
        case 'super-admin':
          return '/admin/super-admin';
        case 'admin':
          return '/admin/dashboard';
        case 'agent':
          return '/admin/agent';
        default:
          return '/';
      }
    };
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
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-900 text-blue-900">
                <Phone strokeWidth={3} size={14} className="stroke-primary-dark" />
                <span className="font-medium text-black text-xs">Book now – </span><span className="font-medium text-xs text-black">call us 24/7 </span><span className="font-semibold text-xs text-blue-950">{siteConfig.phone}</span>
            </div>
            {/* Chat icon */}
            <button className="text-blue-900 hover:opacity-80">
              {/* <MessageCircle size={18} /> */}
              <Image src="/images/icons/message.png" alt="message" width={20} height={20}/>
            </button>
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-6 text-gray-700">
            {siteConfig.topHeader.showAgencyId && (
              <Link href="/agency" className="flex flex-nowrap gap-1 hover:text-secondary-dark ">
                <Image alt="agencyid" src="/images/icons/idcard.png" width={16} height={16} className="object-contain aspect-square"/>
                <span className="text-text-primary font-medium text-xs">Agency ID</span>
                
              </Link>
            )}

            {siteConfig.topHeader.showFareInquiry && (
              <Link
                href="/fare-inquiry"
                className="flex items-center gap-1 hover:text-secondary-dark "
              >
                {/* <span className="text-text-primary hover:text-secondary-dark text-lg font-semibold">$</span> */}
                <DollarSign size={24} strokeWidth={3.5} className="text-text-primary hover:text-secondary-dark"/>
                <div className="flex flex-col font-normal"><span className="text-text-grey text-xs">Lowest</span><span className="text-text-primary text-xs">Fare Inquiry</span></div>
              </Link>
            )}

            {/*USER / AUTH SECTION   */}
            {isAuthenticated && user ? (
              <Link  href={getDashboardLink()}
                                className="flex items-center gap-3">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                ) : <Link  href={getDashboardLink()} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User size={16} />
                  </Link>}

                <div className="flex flex-col leading-tight">
                  <span className="font-medium text-gray-800">
                    {user.name}
                  </span>
                  <button
                  onClick={logout}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 transition font-semibold"
                >
                  <LogOut size={14} />
                  Logout
                </button>
                  {/* {user.balance && (
                    <span className="text-xs text-gray-500">
                      {user.balance}
                    </span>
                  )} */}
                </div>
              </Link>
            ) : (
              siteConfig.topHeader.showAuth && (
                <>
                  <Link href="/login" className="hover:text-blue-700">
                    Log In
                  </Link>

                  <Link
                    href="/register"
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
