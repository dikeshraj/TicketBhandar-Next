import React from 'react';
import { SearchHeader } from '@/components/flights/SearchHeader';
import { DateSelector } from '@/components/flights/DateSelector';
import { FlightCard } from '@/components/flights/FlightCard';
import { BottomNavigation } from '@/components/flights/BottomNavigation';
import { MOCK_FLIGHTS } from '@/lib/constants';

export default function FlightSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
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
      
      <div className="px-4 py-4">
        {MOCK_FLIGHTS.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
      
      <BottomNavigation />
    </div>
  );
}