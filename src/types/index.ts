export interface Destination {
  id: string;
  name: string;
  image: string;
  label?: string;
  description?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  discount: string;
  validUntil: string;
  internationalFlights: number;
  domesticFlights: number;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface FlightSearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  travelers: number;
  passengerType: 'regular' | 'student';
}