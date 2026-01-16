import React from 'react';
import { SearchHeader } from '@/components/flights/SearchHeader';
import { DateSelector } from '@/components/flights/DateSelector';
import { FlightCard } from '@/components/flights/FlightCard';
import { BottomNavigation } from '@/components/flights/BottomNavigation';
import { MOCK_FLIGHTS } from '@/lib/constants';
import SidebarFilters from '@/components/flights/FlightFilters';
export default function FlightSearchPage() {
  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden bg-gray-50 pb-20">
      <SearchHeader
        from="Kathmandu"
        fromCode="KTM"
        to="London"
        toCode="LHR"
        date="13 Oct"
        travelers={1}
        flightClass="Economy"
      />
      <DateSelector />
      <div className="grid grid-cols-[25%_75%] gap-4 mx-auto pt-8">
        <SidebarFilters />
        <div className="">
          {MOCK_FLIGHTS.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
}
