// components/customDaypicker/CustomDay.tsx
import { DayProps } from 'react-day-picker';
import { format, isValid } from 'date-fns';
import { flightPrices } from '@/components/customDaypicker/flightPrices';

export function CustomDay({ date, isOutside }: DayProps) {
  // Only hide off-month days
  if (isOutside) {
    return null;
  }

  // Safely render even if price is missing
  const dateKey = isValid(date) ? format(date, 'yyyy-MM-dd') : '';
  const price = dateKey ? flightPrices[dateKey] : undefined;

  return (
    <div className="flex flex-col items-center justify-center h-12 gap-1">
      <span className="text-sm font-medium">{date.getDate()}</span>
      {price !== undefined && (
        <span className="text-[10px] font-semibold text-green-600">{price}</span>
      )}
    </div>
  );
}