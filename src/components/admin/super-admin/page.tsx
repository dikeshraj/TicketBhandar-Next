'use client';

import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Users, Plane, DollarSign, Activity } from 'lucide-react';

export default function SuperAdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={['super-admin']}>
      <AdminLayout role="super-admin">
        <DashboardContent />
      </AdminLayout>
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const stats = [
    { label: 'Total Users', value: '12,453', change: '+12.5%', icon: Users, color: 'bg-blue-500' },
    { label: 'Total Bookings', value: '8,924', change: '+8.2%', icon: Plane, color: 'bg-green-500' },
    { label: 'Revenue', value: 'NPR 4.5M', change: '+23.1%', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Active Agents', value: '156', change: '+5.3%', icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Super Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
