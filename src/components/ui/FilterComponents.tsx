import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

// MUI price range slider component (specially for sidebar filter in flightsearch page)
export function PriceRange() {
  const [value, setValue] = useState<number[]>([200, 1200]);
   const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-between text-xs text-gray-600">
        <span>Min. {value[0]}</span>
        <span>Max. {value[1]}</span>
      </div>

      <Slider
        value={value}
        min={0}
        onChange={handleChange}
        max={2000}
        step={50}
        valueLabelDisplay="auto"
        sx={{
          color: '#2563eb',
          height: 4,
          '& .MuiSlider-thumb': {
            height: 14,
            width: 14,
          },
        }}
      />

      <div className="flex justify-between text-xs text-gray-600">
        <span>NPR 0</span>
        <span>NPR 2000</span>
      </div>
    </div>
  );
}

// Filter blocks (specially for sidebar filter in flightsearch page)

interface FilterBlockProps {
  title: string;
  children: React.ReactNode;
}

export function FilterBlock({ title, children }: FilterBlockProps) {
  return (
    <div className="space-y-3 w-full">
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <div className="space-y-2 w-full">
        <div className=" flex flex-col items-start w-full">{children}</div>
      </div>
      <Divider />
    </div>
  );
}
