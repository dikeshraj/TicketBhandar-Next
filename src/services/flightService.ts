import { Flight, FlightSearchParams } from '@/types';
import { API_ENDPOINTS, API_BASE_URL } from '@/config/api';
import { MOCK_FLIGHTS } from '@/lib/constants';

export class FlightService {
  static async searchFlights(params: FlightSearchParams): Promise<Flight[]> {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SEARCH_FLIGHTS}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(params),
      // });
      // return await response.json();
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return MOCK_FLIGHTS;
    } catch (error) {
      console.error('Error searching flights:', error);
      throw error;
    }
  }

  static async getFlightDetails(id: string): Promise<Flight | null> {
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 300));
      return MOCK_FLIGHTS.find(f => f.id === id) || null;
    } catch (error) {
      console.error('Error getting flight details:', error);
      throw error;
    }
  }

  static async bookFlight(flightId: string, passengers: any): Promise<any> {
    try {
      // TODO: Implement actual booking API call
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BOOK_FLIGHT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightId, passengers }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error booking flight:', error);
      throw error;
    }
  }
}