'use client';

import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Plane, Users, DollarSign, Award } from 'lucide-react';

export default function AgentDashboard() {
  return (
    <ProtectedRoute allowedRoles={['agent']}>
      <AdminLayout role="agent">
        <AgentDashboardContent />
      </AdminLayout>
    </ProtectedRoute>
  );
}

function AgentDashboardContent() {
  const stats = [
    { label: 'My Bookings', value: '48', change: '+5', icon: Plane, color: 'bg-blue-500' },
    { label: 'My Customers', value: '32', change: '+3', icon: Users, color: 'bg-green-500' },
    { label: 'This Month Commission', value: 'NPR 45K', change: '+12%', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Performance', value: '4.8/5', change: 'Excellent', icon: Award, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Agent Dashboard</h1>

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
