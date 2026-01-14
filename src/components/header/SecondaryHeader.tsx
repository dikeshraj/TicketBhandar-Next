'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, User, LogOut } from 'lucide-react';
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
    <div className="bg-background-default border-b border-primary-dark shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {siteConfig.secondaryNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-700 transition flex items-center"
                >
                  <Image src={item.image} alt={item.name} width={18} height={18} className="mr-2" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Social Links + User + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Icons (Desktop Only) */}
            <div className="hidden md:flex items-center gap-3">
              {siteConfig.socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <Image
                    src={link.icon}
                    alt={`${link.href.split('/')[2]} icon`}
                    width={20}
                    height={20}
                    className="rounded"
                  />
                </Link>
              ))}
            </div>

            {/* User Section */}
            {/*USER / AUTH SECTION   */}
            {isAuthenticated && user ? (
              <Link href={getDashboardLink()} className="flex items-center gap-3">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                ) : (
                  <Link
                    href={getDashboardLink()}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
                  >
                    <User size={16} />
                  </Link>
                )}

                <div className="flex flex-col leading-tight">
                  <span className="font-medium text-gray-800">{user.name}</span>
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

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-gray-700 hover:text-blue-700 transition"
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden pb-4 border-t">
                <nav className="flex flex-col gap-3 pt-4">
                  {siteConfig.secondaryNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-700 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                 {/*  <div className="flex flex-col gap-2 pt-4 border-t">
                    {isAuthenticated && user ? (
                      <>
                        <Link
                          href={getDashboardLink()}
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User size={16} />
                          {user.name}
                        </Link>

                        <button
                          onClick={() => {
                            logout();
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 text-left text-red-600 hover:text-red-700 py-2"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          className="text-gray-700 hover:text-blue-700 py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Log in
                        </Link>

                        <Link
                          href="/register"
                          className="text-gray-700 hover:text-blue-700 py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Sign up
                        </Link>
                      </>
                    )}
                  </div> */}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
