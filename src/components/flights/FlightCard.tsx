import React from 'react';
import { Flight } from '@/types';
import { formatPrice } from '@/lib/utils';

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-gray-700">
              {flight.from} ({flight.fromCode})
            </span>
          </div>
          <div className="text-2xl font-bold">{flight.departureTime}</div>
        </div>

        <div className="flex-1 text-center px-2">
          <div className="text-xs text-gray-500 mb-1">
            {flight.duration} ({flight.stops} stop)
          </div>
          <div className="flex items-center justify-center mb-1">
            <div className="h-0.5 w-16 bg-gray-300 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l7 7-7 7-7-7 7-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600 justify-center">
            <span>📦 {flight.baggage.checkin} KG</span>
            <span>🎒 {flight.baggage.cabin} KG</span>
          </div>
        </div>

        <div className="flex-1 text-right">
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-sm font-semibold text-gray-700">
              {flight.to} ({flight.toCode})
            </span>
          </div>
          <div className="text-2xl font-bold">{flight.arrivalTime}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">
            {flight.airlineLogo}
          </div>
          <div>
            <div className="font-semibold text-sm">{flight.airline}</div>
            <div className="text-xs text-gray-600">{flight.class}</div>
          </div>
        </div>

        <div className="text-right">
          {flight.refundable && (
            <div className="text-xs text-green-600 font-medium mb-1">Refundable</div>
          )}
          <div className="text-2xl font-black">
            {flight.currency} {formatPrice(flight.price)}
          </div>
          <div className="text-xs text-gray-600">{flight.class}</div>
          <div className="text-xs text-orange-600 font-medium">
            ⏰ {flight.seatsLeft} seats left !
          </div>
        </div>
      </div>
    </div>
  );
};
