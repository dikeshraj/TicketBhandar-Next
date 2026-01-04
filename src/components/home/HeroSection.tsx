'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Hotel, Package } from 'lucide-react';

type TabType = 'round-trip' | 'one-way' | 'hotel' | 'packages' | 'visa' | 'car-hire';
type PassengerType = 'regular' | 'student';

interface FormData {
  // Flight fields
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  travelers: string;
  
  // Hotel fields
  destination: string;
  checkIn: string;
  checkOut: string;
  rooms: string;
  guests: string;
  
  // Package fields
  packageDestination: string;
  packageDate: string;
  packageDuration: string;
  
  // Visa fields
  visaCountry: string;
  visaType: string;
  travelDate: string;
  
  // Car hire fields
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
}

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('round-trip');
  const [passengerType, setPassengerType] = useState<PassengerType>('regular');
  
  const [formData, setFormData] = useState<FormData>({
    from: 'Kathmandu',
    to: 'London',
    departDate: '',
    returnDate: '',
    travelers: '1',
    destination: '',
    checkIn: '',
    checkOut: '',
    rooms: '1',
    guests: '2',
    packageDestination: '',
    packageDate: '',
    packageDuration: '3',
    visaCountry: '',
    visaType: 'tourist',
    travelDate: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    switch (activeTab) {
      case 'round-trip':
      case 'one-way':
        router.push('/flights/search');
        break;
      case 'hotel':
        router.push('/hotels/search');
        break;
      case 'packages':
        router.push('/packages');
        break;
      case 'visa':
        router.push('/visa');
        break;
      case 'car-hire':
        router.push('/car-hire');
        break;
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Tab Configuration
  const tabs = [
    { id: 'round-trip' as TabType, label: 'Round Trip', icon: '✈️' },
    { id: 'one-way' as TabType, label: 'One Way', icon: '✈️' },
    { id: 'hotel' as TabType, label: 'Hotel', icon: '🏨' },
    { id: 'packages' as TabType, label: 'Holiday Packages', icon: '🎄' },
    { id: 'visa' as TabType, label: 'Visa', icon: '📄' },
    { id: 'car-hire' as TabType, label: 'Car Hire', icon: '🚗' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute left-0 bottom-0 w-full">
          <svg viewBox="0 0 1200 300" className="w-full h-auto" fill="currentColor">
            <path d="M0,250 L50,180 L80,200 L100,160 L130,190 L150,140 L180,170 L200,120 L230,150 L250,100 L280,140 L300,80 L330,120 L350,70 L380,110 L400,60 L0,60 Z" className="text-white" />
            <circle cx="120" cy="100" r="25" className="text-white" />
            <path d="M500,250 L550,180 L580,200 L620,160 L650,190 L680,150 L710,180 L740,130 L770,170 L800,120 L500,120 Z" className="text-white" />
            <rect x="900" y="200" width="40" height="50" className="text-white" />
            <path d="M920,200 L950,170 L980,200 Z" className="text-white" />
          </svg>
        </div>
        <div className="absolute right-20 top-10 text-white text-8xl">⛩️</div>
        <div className="absolute right-80 top-32 text-white text-6xl">🛕</div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 rounded-full transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 rounded-full transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative z-10 max-w-8xl mx-auto px-6 pt-12 pb-8">
        {/* Hero Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            From Nepal to the World – <span className="text-red-500">Easy</span>
          </h1>
          <p className="text-xl text-white/95">Book cheap flights other sites simply can't</p>
          <div className="inline-block mt-1 text-red-500 text-xl font-bold">Ticket</div>
        </div>

        {/* Tabs Row */}
        <div className="flex gap-3 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? 'bg-white text-gray-700 shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Search Card */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6">
          {/* Flight Forms (Round Trip & One Way) */}
          {(activeTab === 'round-trip' || activeTab === 'one-way') && (
            <>
              {/* Passenger Type */}
              <div className="flex gap-3 mb-5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setPassengerType('regular')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
                    passengerType === 'regular'
                      ? 'bg-pink-100 text-pink-600 border border-pink-400'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    passengerType === 'regular' ? 'border-pink-500' : 'border-gray-400'
                  }`}>
                    {passengerType === 'regular' && <div className="w-2 h-2 rounded-full bg-pink-500"></div>}
                  </div>
                  Regular
                </button>
                <button
                  type="button"
                  onClick={() => setPassengerType('student')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
                    passengerType === 'student'
                      ? 'bg-pink-100 text-pink-600 border border-pink-400'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    passengerType === 'student' ? 'border-pink-500' : 'border-gray-400'
                  }`}>
                    {passengerType === 'student' && <div className="w-2 h-2 rounded-full bg-pink-500"></div>}
                  </div>
                  Student Fare
                </button>
              </div>

              {/* Flight Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
                <div className="md:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    From
                  </label>
                  <input
                    type="text"
                    value={formData.from}
                    onChange={(e) => updateFormData('from', e.target.value)}
                    placeholder="Kathmandu"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    To
                  </label>
                  <input
                    type="text"
                    value={formData.to}
                    onChange={(e) => updateFormData('to', e.target.value)}
                    placeholder="London"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Depart
                  </label>
                  <input
                    type="date"
                    value={formData.departDate}
                    onChange={(e) => updateFormData('departDate', e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                    required
                  />
                </div>
                {activeTab === 'round-trip' && (
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Return
                    </label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => updateFormData('returnDate', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                )}
                <div className={activeTab === 'one-way' ? 'md:col-span-4' : 'md:col-span-2'}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    <Users className="inline w-4 h-4 mr-1" />
                    Travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => updateFormData('travelers', e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4+ Adults</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Hotel Form */}
          {activeTab === 'hotel' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Hotel className="inline w-4 h-4 mr-1" />
                  Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => updateFormData('destination', e.target.value)}
                  placeholder="Enter city or hotel name"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Check In
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => updateFormData('checkIn', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Check Out
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => updateFormData('checkOut', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Rooms</label>
                <select
                  value={formData.rooms}
                  onChange={(e) => updateFormData('rooms', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Users className="inline w-4 h-4 mr-1" />
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => updateFormData('guests', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>
          )}

          {/* Holiday Packages Form */}
          {activeTab === 'packages' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Package className="inline w-4 h-4 mr-1" />
                  Destination
                </label>
                <select
                  value={formData.packageDestination}
                  onChange={(e) => updateFormData('packageDestination', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="kathmandu">Kathmandu Valley</option>
                  <option value="pokhara">Pokhara Adventure</option>
                  <option value="chitwan">Chitwan Safari</option>
                  <option value="lumbini">Lumbini Tour</option>
                  <option value="everest">Everest Base Camp</option>
                </select>
              </div>
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.packageDate}
                  onChange={(e) => updateFormData('packageDate', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Duration</label>
                <select
                  value={formData.packageDuration}
                  onChange={(e) => updateFormData('packageDuration', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                >
                  <option value="3">3 Days</option>
                  <option value="5">5 Days</option>
                  <option value="7">7 Days</option>
                  <option value="10">10 Days</option>
                  <option value="14">14 Days</option>
                </select>
              </div>
            </div>
          )}

          {/* Visa Form */}
          {activeTab === 'visa' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  🌍 Country
                </label>
                <select
                  value={formData.visaCountry}
                  onChange={(e) => updateFormData('visaCountry', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="usa">🇺🇸 United States</option>
                  <option value="uk">🇬🇧 United Kingdom</option>
                  <option value="canada">🇨🇦 Canada</option>
                  <option value="australia">🇦🇺 Australia</option>
                  <option value="schengen">🇪🇺 Schengen Countries</option>
                  <option value="japan">🇯🇵 Japan</option>
                  <option value="korea">🇰🇷 South Korea</option>
                </select>
              </div>
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Visa Type</label>
                <select
                  value={formData.visaType}
                  onChange={(e) => updateFormData('visaType', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                >
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => updateFormData('travelDate', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
            </div>
          )}

          {/* Car Hire Form */}
          {activeTab === 'car-hire' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  🚗 Pickup Location
                </label>
                <input
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => updateFormData('pickupLocation', e.target.value)}
                  placeholder="Enter location"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
                  required
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  📍 Dropoff Location
                </label>
                <input
                  type="text"
                  value={formData.dropoffLocation}
                  onChange={(e) => updateFormData('dropoffLocation', e.target.value)}
                  placeholder="Enter location"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-medium"
                  required
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => updateFormData('pickupDate', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Dropoff Date
                </label>
                <input
                  type="date"
                  value={formData.dropoffDate}
                  onChange={(e) => updateFormData('dropoffDate', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                  required
                />
              </div>
            </div>
          )}

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition shadow-lg"
          >
            <Search size={20} />
            {activeTab === 'round-trip' || activeTab === 'one-way' ? 'Search Flight' : 
             activeTab === 'hotel' ? 'Search Hotel' :
             activeTab === 'packages' ? 'Browse Packages' :
             activeTab === 'visa' ? 'Apply for Visa' :
             'Find Car'}
          </button>
        </form>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};