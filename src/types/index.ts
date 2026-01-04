export interface Destination {
  id: string;
  name: string;
  image: string;
  label?: string;
  description?: string;
  price?: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  discount: string;
  validUntil: string;
  internationalFlights: number;
  domesticFlights: number;
  image?: string;
  category: 'flight' | 'hotel' | 'package';
}

export interface Service {
  id: string;
  title: string;
  image: string;
  description?: string;
  slug: string;
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
  tripType: 'round-trip' | 'one-way';
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  currency: string;
  class: string;
  seatsLeft: number;
  refundable: boolean;
  baggage: {
    checkin: number;
    cabin: number;
  };
}

export interface DatePrice {
  date: string;
  day: string;
  dayNum: number;
  price: number;
}
