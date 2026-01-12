// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Phone, MessageCircle, Globe, DollarSign, HelpCircle, Menu, X } from 'lucide-react';
// import { siteConfig } from '@/config/site';

// export const Header: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-8xl mx-auto px-6">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between py-2.5 text-sm border-b border-gray-100">
//           <div className="flex items-center gap-5">
//             <span className="text-gray-600 flex items-center gap-1.5">
//               <Phone size={13} />
//               Book now call {siteConfig.phone}
//             </span>
//             <button className="text-gray-500 hover:text-blue-600 transition">
//               <MessageCircle size={15} />
//             </button>
//           </div>
//           <div className="hidden md:flex items-center gap-5 text-gray-600">
//             {/* <button className="flex items-center gap-1 hover:text-blue-600 transition">
//               <Globe size={13} />
//               Español
//             </button> */}
//             <button className="flex items-center gap-1 hover:text-blue-600 transition">
//               <DollarSign size={13} />
//               NPR | Euro
//             </button>
//             <Link href="/login" className="hover:text-blue-600 transition">
//               Log in
//             </Link>
//             <Link href="/signup" className="hover:text-blue-600 transition">
//               Sign up
//             </Link>
//             <button className="hover:text-blue-600 transition">
//               <HelpCircle size={15} />
//             </button>
//           </div>
//         </div>

//         {/* Main Header */}
//         <div className="flex items-center justify-between py-4">
//           <Link href="/" className="flex items-center gap-2.5">
//             <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2l7 7-7 7-7-7 7-7z" />
//               </svg>
//             </div>
//             <div className="leading-tight">
//               <div className="text-lg font-bold text-gray-800">Ticket</div>
//               <div className="text-lg font-bold text-red-600">Bhandar</div>
//             </div>
//           </Link>

//           <nav className="hidden lg:flex items-center gap-7">
//             {siteConfig.navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-red-600 font-medium text-sm transition"
//               >
//                 {item.icon} {item.name}
//               </Link>
//             ))}
//           </nav>

//           <button
//             className="lg:hidden text-gray-700"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden pb-4 border-t">
//             <nav className="flex flex-col gap-3 pt-4">
//               {siteConfig.navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-700 hover:text-red-600 py-2"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.icon} {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Globe, DollarSign, HelpCircle, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
// import { Logo } from '@/components/common/Logo';
import { useAuth } from '@/lib/authContext';

export const Header: React.FC = () => {
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

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2.5 text-sm border-b border-gray-100">
          <div className="flex items-center gap-5">
            <span className="text-gray-600 flex items-center gap-1.5">
              <Phone size={13} />
              <span className="hidden sm:inline">Book now call</span> {siteConfig.phone}
            </span>
            <button className="text-gray-500 hover:text-blue-600 transition">
              <MessageCircle size={15} />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-5 text-gray-600">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              <Globe size={13} />
              Español
            </button>
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              <DollarSign size={13} />
              NPR | Euro
            </button>
            
            {isAuthenticated && user ? (
              <>
                <Link 
                  href={getDashboardLink()}
                  className="flex items-center gap-1 hover:text-blue-600 transition font-semibold"
                >
                  <UserIcon size={14} />
                  {user.name}
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 transition font-semibold"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-blue-600 transition font-semibold">
                  Log in
                </Link>
                <Link href="/register" className="hover:text-blue-600 transition font-semibold">
                  Sign up
                </Link>
              </>
            )}
            
            <button className="hover:text-blue-600 transition">
              <HelpCircle size={15} />
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
 <Link href="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l7 7-7 7-7-7 7-7z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-gray-800">Ticket</div>
              <div className="text-lg font-bold text-red-600">Bhandar</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium text-sm transition"
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t">
            <nav className="flex flex-col gap-3 pt-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon} {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                {isAuthenticated && user ? (
                  <>
                    <Link 
                      href={getDashboardLink()}
                      className="text-gray-700 hover:text-red-600 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <UserIcon size={16} className="inline mr-2" />
                      {user.name}
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-red-600 hover:text-red-700 py-2"
                    >
                      <LogOut size={16} className="inline mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="text-gray-700 hover:text-red-600 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link 
                      href="/register" 
                      className="text-gray-700 hover:text-red-600 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
