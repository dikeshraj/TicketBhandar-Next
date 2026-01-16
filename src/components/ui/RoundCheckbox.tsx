import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RoundCheckbox({
  checked,
  onChange,
  label,
  subLabel,
  // Inner circle styles
  uncheckedCircleColor = 'bg-background-grey-light',
  checkedCircleColor = 'bg-secondary-default',
  // Outer label styles
  uncheckedLabelClassName = 'text-text-default',
  checkedLabelClassName = 'bg-background-light text-text-default',
  // extra class for full control
  className = '',
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  subLabel?: string;
  uncheckedCircleColor?: string;
  checkedCircleColor?: string;
  uncheckedLabelClassName?: string;
  checkedLabelClassName?: string;
  className?: string;
}) {
  return (
    <label
      className={`flex items-center cursor-pointer select-none px-2 py-1.5 rounded-[20px] transition-colors ${
        checked ? checkedLabelClassName : uncheckedLabelClassName
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
        aria-checked={checked}
      />
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-colors ${
          checked ? checkedCircleColor : uncheckedCircleColor
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <div className="block ml-4">
        <div className=" text-xs md:text-sm font-medium">{label}</div>
        {subLabel && (
          <div className="text-[8px] md:text-[12px] opacity-40">{subLabel}</div>
        )}
      </div>
    </label>
  );
}


// MUI square checkbox component (specially for sidebar filter in flightsearch page)
export function SquareCheckbox({ label }: { label: string }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          sx={{
            padding: '4px',
            color: '#9ca3af', // gray-400
            '&.Mui-checked': {
              color: '#2563eb', // blue-600
            },
          }}
        />
      }
      label={
        <span className="text-sm text-gray-700">{label}</span>
      }
      sx={{
        margin: 0,
      }}
    />
  );
}
