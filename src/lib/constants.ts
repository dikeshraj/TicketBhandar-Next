import { Destination, Service, Partner, SpecialOffer, Flight, DatePrice } from '@/types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Chitwan',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
    label: '2D Chitwan',
   /*  description: 'Wildlife and Nature', */
    price: 5000,
  },
  {
    id: '2',
    name: 'Pokhara',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop',
    label: '2D Pokhara',
    /* description: 'Lakes and Mountains', */
    price: 4500,
  },
  {
    id: '3',
    name: 'Lumbini',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop',
    label: '2D Lumbini',
    /* description: 'Birthplace of Buddha', */
    price: 6000,
  },
  {
    id: '4',
    name: 'Bandipur',
    image: 'https://images.unsplash.com/photo-1583419952559-3a89dd1b2b7a?w=800&h=600&fit=crop',
    label: '2D Bandipur',
    /* description: 'Historic Hill Town', */
    price: 3500,
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'HELI BOOKING',
    image: 'https://images.unsplash.com/photo-1469854523-eac1f0cc9679?w=600&h=400&fit=crop',
    description: 'Book helicopter tours',
    slug: 'heli-booking',
  },
  {
    id: '2',
    title: 'CRUISE SERVICE',
    image: 'https://images.unsplash.com/photo-1548574505-5e239289d0f8?w=600&h=400&fit=crop',
    description: 'Luxury cruise packages',
    slug: 'cruise-service',
  },
  {
    id: '3',
    title: 'INSURANCE',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    description: 'Travel insurance coverage',
    slug: 'insurance',
  },
  {
    id: '4',
    title: 'VISA ASSISTANCE',
    image: 'https://images.unsplash.com/photo-1573497019418-b9f58d7b8ecc?w=600&h=400&fit=crop',
    description: 'Visa application support',
    slug: 'visa-assistance',
  },
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'SeatLinks', logo: '/images/partners/client1.png', url: '#' },
  { id: '2', name: 'One Go', logo: '/images/partners/onego.png', url: '#' },
  { id: '3', name: 'BUDDHA AIR', logo: '/images/partners/client2.png', url: '#' },
  { id: '4', name: 'NIRVANA', logo: '/images/partners/nirvana.png', url: '#' },
  { id: '5', name: 'SEALINKS', logo: '/images/partners/client3.png', url: '#' },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: '1',
    title: 'Black Friday Sale',
    discount: '50',
    validUntil: 'On Domestic flight',
    internationalFlights: 100,
    domesticFlights: 200,
    category: 'flight',
    image: '/images/offers/offer1.png',
   
  },
  {
    id: '2',
    title: 'Black Friday Sale',
    discount: '50',
    validUntil: 'On Domestic flight',
    internationalFlights: 100,
    domesticFlights: 200,
    category: 'flight',
    image: '/images/offers/offer2.png',
   
  },
];

export const MOCK_FLIGHTS: Flight[] = Array.from({ length: 7 }, (_, i) => ({
  id: `flight-${i + 1}`,
  airline: 'Turkish Airlines',
  airlineLogo: '🇹🇷',
  from: 'Kathmandu',
  fromCode: 'KTM',
  to: 'London',
  toCode: 'LHR',
  departureTime: '13:24',
  arrivalTime: '18:24',
  duration: '22h 45m',
  stops: 2,
  price: 82045,
  currency: 'NPR',
  class: 'Economy',
  seatsLeft: 9,
  refundable: true,
  baggage: {
    checkin: 25,
    cabin: 10,
  },
}));

export const MOCK_DATE_PRICES: DatePrice[] = [
  { date: '2024-10-12', day: 'Sun', dayNum: 12, price: 32251 },
  { date: '2024-10-13', day: 'Mon', dayNum: 13, price: 32251 },
  { date: '2024-10-14', day: 'Tue', dayNum: 14, price: 32251 },
  { date: '2024-10-15', day: 'Wed', dayNum: 15, price: 32251 },
  { date: '2024-10-16', day: 'Thu', dayNum: 16, price: 32251 },
  { date: '2024-10-17', day: 'Fri', dayNum: 17, price: 35000 },
  { date: '2024-10-18', day: 'Sat', dayNum: 18, price: 35000 },
];
