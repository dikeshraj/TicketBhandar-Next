import React from 'react';
import { Plane, Briefcase, Package, HelpCircle, CreditCard } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        <button className="flex flex-col items-center gap-1 py-2 text-blue-600">
          <Plane size={24} />
          <span className="text-xs font-semibold">Flight</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600 transition">
          <Briefcase size={24} />
          <span className="text-xs font-medium">Insurance</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600 transition">
          <Package size={24} />
          <span className="text-xs font-medium">Packages</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600 transition">
          <HelpCircle size={24} />
          <span className="text-xs font-medium">Heli</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600 transition">
          <CreditCard size={24} />
          <span className="text-xs font-medium">Visa</span>
        </button>
      </div>
    </div>
  );
};