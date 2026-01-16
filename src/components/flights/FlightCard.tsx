import React from 'react';
import { Flight } from '@/types';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Clock6 } from 'lucide-react';


import Image from 'next/image';

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-3 shadow-sm hover:shadow-md transition">
      <div className="grid grid-cols-12 px-2">
        <div className="col-span-9 flex items-center justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center justify-start gap-2 mb-1">
              <span className="text-sm font-semibold text-text-default">
                {flight.from} ({flight.fromCode})
              </span>
            </div>
            <div className="text-2xl font-bold">{flight.departureTime}</div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-xs text-gray-600 justify-start">
                <span className="flex flex-nowrap  w-full ">
                  {flight.fromCode} - IST - {flight.toCode}{' '}
                </span>
              </div>
              <div className="flex items-center justify-center mb-1 w-full">
                <Image
                  src="/images/icons/flight.png"
                  alt="Flight"
                  width={20}
                  height={20}
                  className="object-contain text-center"
                />
              </div>
              <div className="text-xs text-center text-gray-500 mb-1 w-full">
                {flight.duration} ({flight.stops} stops)
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 justify-center w-full">
                <span className="flex flex-nowrap">
                  <Image
                    src="/images/icons/baggage.png"
                    alt="Baggage"
                    width={6}
                    height={6}
                    className="object-contain mr-1"
                  />
                  {flight.baggage.checkin} KG
                </span>
                <span className="flex flex-nowrap">
                  <Image
                    src="/images/icons/baggage.png"
                    alt="Baggage"
                    width={6}
                    height={6}
                    className="object-contain mr-1"
                  />
                  {flight.baggage.cabin} KG
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center justify-center w-full gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-700">
                {flight.to} ({flight.toCode})
              </span>
              <div className="text-2xl font-bold">{flight.arrivalTime}</div>
            </div>
          </div>

          <div className="flex-1 flex-col items-center justify-center w-full">
            <div className="w-[90px] h-[90px] flex items-center justify-center relative">
              {/*  {flight.airlineLogo} */}
              {flight.airlineLogo.map((logo, index) => (
                <Image
                  key={logo}
                  src={logo}
                  alt="Airline logo"
                  fill
                  className={`rounded-full object-contain ${
                    index === 0 ? 'ml-4 z-10' : ' ml-14 text-right z-0'
                  }`}
                />
              ))}
            </div>
            <div>
              <div className="font-normal text-gray-500 text-xs text-center whitespace-nowrap">
                {flight.airline}
              </div>
              {/*  <div className="text-xs text-gray-600">{flight.class}</div> */}
            </div>
          </div>
        </div>

        <div className="col-span-3 flex items-center justify-end ">
          <div className="text-right w-full">
            <div className="flex flex-row justify-end gap-4">
              {flight.refundable && (
                <div className="text-[10px] 2xl:text-xs text-[#0B4D20] font-normal mb-1">Refundable</div>
              )}
              <div className="text-[10px] 2xl:text-xs text-[#0B4D20] font-normal mb-1">View Details</div>
            </div>

            <div className="flex items-center justify-end">
              <span className="font-semibold text-[18px] leading-normal text-text-primary">{flight.currency}</span><span className="font-semibold text-[28px] leading-normal text-text-primary">{formatPrice(flight.price)}</span>
            </div>
            <div className="flex flex-row items-center justify-end gap-3">
              <div className="text-[10px] font-medium 2xl:text-xs text-text-default">{flight.class}</div>
              <div className="flex flex-nowrap items-center text-[10px] 2xl:text-xs font-medium text-text-default">
              <Clock6 size={10} className="stroke-black mr-0.5"/> {flight.seatsLeft} seats left !
              </div>
            </div>
            <button className="mt-3 w-max max-w-[200px] bg-primary-dark hover:bg-secondary-dark text-white text-sm font-medium py-1.5 px-8 rounded-[10px] transition">Book Now</button>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};
