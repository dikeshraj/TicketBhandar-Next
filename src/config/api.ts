export const API_ENDPOINTS = {
  SEARCH_FLIGHTS: '/api/flights/search',
  GET_FLIGHT_DETAILS: '/api/flights/:id',
  BOOK_FLIGHT: '/api/flights/book',
  SEARCH_HOTELS: '/api/hotels/search',
  GET_PACKAGES: '/api/packages',
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';