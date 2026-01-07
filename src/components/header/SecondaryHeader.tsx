// components/layout/SecondaryHeader.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { HeaderUser } from '@/types/user';

type SecondaryHeaderProps = {
  user?: HeaderUser | null;
};

export const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            {user && (
              <div className="flex items-center gap-3">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User size={16} />
                  </div>
                )}
                <div className="sm:flex flex-col leading-tight text-right">
                  <span className="text-sm font-medium text-gray-800">{user.name}</span>
                  {user.balance && <span className="text-xs text-gray-500">{user.balance}</span>}
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
