'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { HeaderUser } from '@/types/user';
import { useAuth } from '@/lib/authContext';

type SecondaryHeaderProps = {
  user?: HeaderUser | null;
};

export const SecondaryHeader: React.FC<SecondaryHeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if not scrolled
  if (!isScrolled) return null;

  return (
    <div className="bg-background-default border-b border-border-blue-25 shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out py-1">
      <div className="container mx-auto lg:px-4 xl:px-10">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-2 xl:gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center lg:mr-2 xl:mr-3">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-start">
              {siteConfig.secondaryNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-normal text-text-default hover:text-text-primary transition flex flex-col items-center justify-center px-2.5 py-2"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={28}
                    height={28}
                    className="object-cover mb-0.5"
                  />
                  <span className="text-xs whitespace-nowrap xl:text-sm">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Social Links + User + Mobile Menu */}
          <div className="flex items-center justify-end">
            {/* Social Icons (Desktop Only) */}
            <div className="hidden md:flex items-center gap-2 lg:gap-2.5 px-4 lg:px-5">
              {siteConfig.socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" "
                >
                  <Image
                    src={link.icon}
                    alt={`${link.href.split('/')[2]} icon`}
                    width={22}
                    height={22}
                    className="rounded"
                  />
                </Link>
              ))}
            </div>

            {/* User Section */}
            {/*USER / AUTH SECTION   */}
            {isAuthenticated && user ? (
              <Link
                href={getDashboardLink()}
                className="flex items-center gap-1 px-4 lg:px-5 h-4 border-l border-secondary-default"
              >
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User size={16} />
                  </div>
                )}

                <div className="flex flex-col leading-tight">
                  <span className="font-medium text-gray-800 whitespace-nowrap">{user.name}</span>
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
                <div className="flex items-center gap-2 px-4 xl:px-5 h-4 border-l border-secondary-default">
                  <Link href="/login" className="hover:text-blue-700 whitespace-nowrap text-xs xl:text-sm">
                    Log In
                  </Link>

                  <Link
                    href="/register"
                    className="px-2.5 py-0.5 text-xs whitespace-nowrap xl:text-sm rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
                  >
                    Sign Up
                  </Link>
                </div>
              )
            )}

            {/* Currency */}
            <button className="flex items-center flex-nowrap gap-1 px-4 lg:px-5h-4 border-l border-secondary-default hover:text-blue-700">
              <span className="text-xs lg:text-sm whitespace-nowrap">
                {siteConfig.topHeader.currency ? `NRs ${siteConfig.topHeader.currency}` : 'NRs'}
              </span>

              {!siteConfig.topHeader.currency && (
                <ChevronDown size={14} className="text-xs stroke-primary-default" />
              )}
            </button>

            {/* Hamburger Button (Mobile Only) */}
            {/* Hamburger Button (Mobile/Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-gray-700 hover:text-blue-700 transition ml-3"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-49 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Slide-in Menu */}
                <div className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-white shadow-xl z-50 lg:hidden flex flex-col">
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-gray-900 transition"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-1 px-4 pb-4 overflow-y-auto">
                    {siteConfig.secondaryNav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="py-3 px-4 flex flex-row items-center text-sm font-medium text-text-default hover:text-primary-default rounded-lg transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={28}
                          height={28}
                          className="object-cover mb-0.5 mr-2"
                        />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
