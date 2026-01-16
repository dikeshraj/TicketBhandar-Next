'use client';

import { PriceRange, FilterBlock } from '../ui/FilterComponents';
import { SquareCheckbox } from '../ui/RoundCheckbox';

export default function SidebarFilters() {
  return (
    <aside className="w-full shrink-0 border border-border-blue-50 rounded-[20px] bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-4 space-y-6">

        <h2 className="text-lg font-semibold text-gray-900 text-center">Filters</h2>

        {/* Price Range */}
        <FilterBlock title="">
          <PriceRange />
        </FilterBlock>

        {/* Stops */}
        <FilterBlock title="Stops">
          <SquareCheckbox label="Non-stop" />
          <SquareCheckbox label="1 Stop" />
          <SquareCheckbox label="2+ Stops" />
        </FilterBlock>

        {/* Airlines */}
        <FilterBlock title="Airlines">
          <SquareCheckbox label="Qatar Airways" />
          <SquareCheckbox label="Turkish Airlines" />
          <SquareCheckbox label="Emirates" />
          <SquareCheckbox label="Etihad Airways" />
        </FilterBlock>

        {/* Departure Time */}
        <FilterBlock title="Departure Time">
          <SquareCheckbox label="Morning (5am - 12pm)" />
          <SquareCheckbox label="Afternoon (12pm - 5pm)" />
          <SquareCheckbox label="Evening (5pm - 9pm)" />
          <SquareCheckbox label="Night (9pm - 5am)" />
        </FilterBlock>

        {/* Arrival Time */}
        <FilterBlock title="Arrival Time">
          <SquareCheckbox label="Morning" />
          <SquareCheckbox label="Afternoon" />
          <SquareCheckbox label="Evening" />
          <SquareCheckbox label="Night" />
        </FilterBlock>

        {/* Refund */}
        <FilterBlock title="Fare Type">
          <SquareCheckbox label="Refundable" />
          <SquareCheckbox label="Non-refundable" />
        </FilterBlock>

      </div>
    </aside>
  );
}
