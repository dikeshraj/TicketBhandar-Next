'use client';

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { MOCK_DATE_PRICES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(MOCK_DATE_PRICES[1].date);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[73px] z-30">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {MOCK_DATE_PRICES.map((datePrice) => (
            <button
              key={datePrice.date}
              onClick={() => setSelectedDate(datePrice.date)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg border transition ${
                selectedDate === datePrice.date
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}
            >
              <div className="text-xs font-medium">{datePrice.day}</div>
              <div className="text-base font-bold">{datePrice.dayNum}</div>
              <div className="text-xs">₹ {formatPrice(datePrice.price)}</div>
            </button>
          ))}
          <button className="flex-shrink-0 p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition">
            <Calendar size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
