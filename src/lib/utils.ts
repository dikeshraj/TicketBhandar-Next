import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number, currency: string = 'NPR'): string {
  return new Intl.NumberFormat('en-NP', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatCurrency(price: number): string {
  return `₹ ${formatPrice(price)}`;
}

export function formatDate(date: string | Date, format: string = 'dd MMM'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const day = d.getDate();
  const month = months[d.getMonth()];
  
  if (format === 'dd MMM') {
    return `${day} ${month}`;
  }
  
  return d.toLocaleDateString();
}

export function getDayName(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[d.getDay()];
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
