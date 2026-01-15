'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown, User, LogOut, DollarSign} from 'lucide-react';
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
    <div className="bg-background-default border-b border-border-blue-25 py-1">
      <div className="container mx-auto px-3 lg:px-10">
        <div className="flex items-center justify-between h-14 text-sm">

          {/* Left section */}
          <div className="flex items-center justify-start">
            {/* Logo */}
            <Link href="/" className="hidden lg:flex items-center mr-6">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                priority
                className="object-contain"
              />
            </Link>

            {/* Call button */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5 px-1.5 lg:px-3 py-1.5 rounded-full border-[1.5px] border-primary-default text-text-primary mr-2">
                <Phone strokeWidth={3} size={15} className="stroke-primary-dark transition-transform rotate-6 w-[15px] h-[15px] md:w-4 md:h-4" />
                <span className="font-medium text-black text-xs lg:text-sm">Book now – </span>
                <span className="font-medium text-xs text-black hidden lg:inline-flex ">call us 24/7 </span>
                <span className="font-semibold text-xs text-blue-950">{siteConfig.phone}</span>
            </div>
            {/* Chat icon */}
            <button className="text-blue-900 hover:opacity-80">
              {/* <MessageCircle size={18} /> */}
              <Image src="/images/icons/message.png" alt="message" width={20} height={20} className=""/>
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center text-gray-700">
            {siteConfig.topHeader.showAgencyId && (
              <Link href="/agency" className="flex items-center flex-nowrap gap-1 px-2.5 lg:px-4 h-3 hover:text-secondary-dark">
                <Image alt="agencyid" src="/images/icons/idcard.png" width={16} height={16} className="object-contain aspect-square"/>
                <span className="text-text-primary font-medium text-[10px] lg:text-xs">Agency ID</span>
                
              </Link>
            )}

            {siteConfig.topHeader.showFareInquiry && (
              <Link
                href="/fare-inquiry"
                className="flex items-center gap-1 px-2.5 lg:px-4 h-4 border-l border-secondary-default hover:text-secondary-dark"
              >
                {/* <span className="text-text-primary hover:text-secondary-dark text-lg font-semibold">$</span> */}
                <DollarSign size={24} strokeWidth={3.5} className="text-text-primary hover:text-secondary-dark w-5 h-5 lg:w-6 lg:h-6"/>
                <div className="flex flex-col font-normal"><span className="text-text-grey text-[10px] leading-[10px] lg:text-xs lg:leading-[14px]">Lowest</span><span className="text-text-primary text-[10px] leading-[10px] lg:text-xs lg:leading-[14px]">Fare Inquiry</span></div>
              </Link>
            )}

            {/*USER / AUTH SECTION   */}
            {isAuthenticated && user ? (
              <Link  href={getDashboardLink()}
                                className="flex items-center gap-1 px-2.5 lg:px-4 h-4 border-l border-secondary-default">
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
                  <button
                  onClick={logout}
                  className="flex items-center gap-1 text-secondary-default hover:text-red-700 transition font-semibold"
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
                <div className="flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-4 h-4 text-xs lg:text-sm border-l border-secondary-default">
                  <Link href="/login" className="hover:text-blue-700">
                    Log In
                  </Link>

                  <Link
                    href="/register"
                    className="px-1.5 lg:px-2.5 lg:py-0.5 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
                  >
                    Sign Up
                  </Link>
                </div>
              )
            )}

            {/* Currency */}
            <button className="flex items-center gap-1 px-2.5 lg:px-4 h-4 border-l border-secondary-default hover:text-blue-700">
              <span className=" text-xs lg:text-sm">NRs</span>
              <ChevronDown size={14} className="text-xs stroke-primary-default" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
