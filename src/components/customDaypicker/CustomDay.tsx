
import { DayButtonProps, UI, useDayPicker } from 'react-day-picker';
import { format, isValid } from 'date-fns';
import { flightPrices } from '@/components/customDaypicker/flightPrices';

function WrappedDayButton(props: DayButtonProps) {
  const { components, classNames } = useDayPicker();
  const date = props.day.date;

  // Safely look up price
  const dateKey = isValid(date) ? format(date, 'yyyy-MM-dd') : '';
  const price = dateKey ? flightPrices[dateKey] : undefined;

  // react-day-picker's built-in DayButton component for core behavior/styling
  return (
    <components.DayButton
      {...props}
      className={`${classNames[UI.DayButton]} flex flex-col items-center justify-center h-12 w-full gap-1`}
    >
      <span className="text-sm font-medium">{date.getDate()}</span>
      
      {/*custom price component below the date */}
      {price !== undefined && (
        <span className="text-[10px] font-semibold text-green-600">
          {price}
        </span>
      )}
    </components.DayButton>
  );
}

export default WrappedDayButton;
