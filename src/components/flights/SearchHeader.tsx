'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

interface SearchHeaderProps {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  date: string;
  travelers: number;
  flightClass: string;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  from,
  fromCode,
  to,
  toCode,
  date,
  travelers,
  flightClass,
}) => {
  const router = useRouter();

  return (
    <div className="pt-10 z-40">
      <div className="px-4 py-3 border border-primary-default rounded-[20px] bg-white  ">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-sm font-semibold">9:30</div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
           { <SlidersHorizontal size={24} />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold">{from}</span>
              <span className="text-gray-400">→</span>
              <span className="text-xl font-bold">{to}</span>
            </div>
            <div className="text-sm text-gray-600">
              {date} • {travelers} Traveller • {flightClass}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};