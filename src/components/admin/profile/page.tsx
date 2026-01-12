'use client';

import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/lib/authContext';
import { User, Mail, Phone, Calendar, Briefcase } from 'lucide-react';

export default function AdminProfile() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout role="admin">
        <AdminProfileContent />
      </AdminLayout>
    </ProtectedRoute>
  );
}

function AdminProfileContent() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                {user?.avatar || user?.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{user?.name}</h2>
              <p className="text-gray-600 mb-1">{user?.email}</p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Admin
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
                <Briefcase size={18} />
                <span>Manage Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
            <p className="text-gray-600">Admin profile editing coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
