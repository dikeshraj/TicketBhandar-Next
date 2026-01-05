'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Plane, Package, FileText, Settings, 
  LogOut, Menu, X, Bell, Search, ChevronDown, UserCircle, 
  BarChart3, DollarSign, Shield, TrendingUp, ClipboardList
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import { User } from '@/types/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
  role: 'super-admin' | 'admin' | 'agent';
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, role }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  if (!user || user.role !== role) {
    return null;
  }

  const getNavigationItems = () => {
    if (role === 'super-admin') {
      return [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/super-admin' },
        { icon: Users, label: 'User Management', href: '/admin/super-admin/users' },
        { icon: Shield, label: 'Admin Management', href: '/admin/super-admin/admins' },
        { icon: Users, label: 'Agent Management', href: '/admin/super-admin/agents' },
        { icon: Plane, label: 'All Bookings', href: '/admin/super-admin/bookings' },
        { icon: BarChart3, label: 'Analytics', href: '/admin/super-admin/analytics' },
        { icon: FileText, label: 'Reports', href: '/admin/super-admin/reports' },
        { icon: Package, label: 'System Settings', href: '/admin/super-admin/settings' },
        { icon: UserCircle, label: 'My Profile', href: '/admin/super-admin/profile' },
      ];
    }

    if (role === 'admin') {
      return [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
        { icon: Plane, label: 'Bookings', href: '/admin/bookings' },
        { icon: Users, label: 'Customers', href: '/admin/customers' },
        { icon: Package, label: 'Packages', href: '/admin/packages' },
        { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
        { icon: FileText, label: 'Reports', href: '/admin/reports' },
        { icon: Settings, label: 'Settings', href: '/admin/settings' },
        { icon: UserCircle, label: 'My Profile', href: '/admin/profile' },
      ];
    }

    // Agent
    return [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/agent' },
      { icon: Plane, label: 'My Bookings', href: '/admin/agent/bookings' },
      { icon: Users, label: 'My Customers', href: '/admin/agent/customers' },
      { icon: DollarSign, label: 'Commission', href: '/admin/agent/commission' },
      { icon: TrendingUp, label: 'Performance', href: '/admin/agent/performance' },
      { icon: ClipboardList, label: 'Tasks', href: '/admin/agent/tasks' },
      { icon: UserCircle, label: 'My Profile', href: '/admin/agent/profile' },
    ];
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l7 7-7 7-7-7 7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Ticket Bhandar</div>
                <div className="text-xs text-gray-500 capitalize">{role.replace('-', ' ')} Panel</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-64"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.avatar || user.name.charAt(0)}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{user.role.replace('-', ' ')}</div>
                </div>
                <ChevronDown size={16} className="text-gray-600" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <div className="px-4 py-3 border-b">
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                  <Link 
                    href={`/admin/${role === 'super-admin' ? 'super-admin' : role}/profile`}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <UserCircle size={16} />
                    My Profile
                  </Link>
                  <Link 
                    href={`/admin/${role === 'super-admin' ? 'super-admin' : role}/settings`}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <Settings size={16} />
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-40 overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Info at Bottom */}
          <div className="p-4 border-t mt-auto">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {user.avatar || user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">{user.name}</div>
                <div className="text-xs text-gray-500 capitalize">{user.role.replace('-', ' ')}</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};