'use client';

import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/lib/authContext';
import { User, Mail, Phone, Calendar, Award, DollarSign } from 'lucide-react';

export default function AgentProfile() {
  return (
    <ProtectedRoute allowedRoles={['agent']}>
      <AdminLayout role="agent">
        <AgentProfileContent />
      </AdminLayout>
    </ProtectedRoute>
  );
}

function AgentProfileContent() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                {user?.avatar || user?.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{user?.name}</h2>
              <p className="text-gray-600 mb-1">{user?.email}</p>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                Agent
              </span>
            </div>

            <div className="mt-6 pt-6 border-t space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={18} />
                <span>{user?.phone || 'Not provided'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar size={18} />
                <span>Joined {user?.createdAt}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Award size={18} />
                <span>Performance: 4.8/5</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <DollarSign size={18} />
                <span>Total Earnings: NPR 245K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Agent Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">48</div>
                <div className="text-sm text-gray-600">Total Bookings</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">32</div>
                <div className="text-sm text-gray-600">Active Customers</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">NPR 45K</div>
                <div className="text-sm text-gray-600">This Month</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}