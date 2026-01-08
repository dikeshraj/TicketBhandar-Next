'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Users, Hotel, Package } from 'lucide-react';
import Image from 'next/image';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// Tab types for top-level navigation
type TabType =
  | 'international-flight'
  | 'domestic-flight'
  | 'insurance'
  | 'holiday-packages'
  | 'heli'
  | 'visa'
  | 'car-hire'
  | 'hotel'; // include if you plan to show hotel form

// Flight sub-type (for internal use in flight forms)
type FlightType = 'one-way' | 'round-trip' | 'multi-city';

// Original tab types (for backward compatibility in form logic)
type LegacyTabType = 'round-trip' | 'one-way' | 'hotel' | 'packages' | 'visa' | 'car-hire';

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

// Define tab config with icon and label
interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
  isFlight?: boolean;
}

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('international-flight');
  const [flightType, setFlightType] = useState<FlightType>('round-trip');
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
      case 'international-flight':
      case 'domestic-flight':
        router.push('/flights/search');
        break;
      /*  case 'hotel':
        router.push('/hotels/search');
        break; */
      case 'holiday-packages':
        router.push('/packages');
        break;
      case 'insurance':
        router.push('/insurance');
        break;
      case 'heli':
        router.push('/heli');
        break;
      case 'visa':
        router.push('/visa');
        break;
      /* case 'car-hire':
        router.push('/car-hire');
        break; */
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Top-level tabs (visible in UI)
  const tabs: TabConfig[] = [
    {
      id: 'international-flight',
      label: 'International Flight',
      icon: '/images/icons/international.png',
      isFlight: true,
    },
    {
      id: 'domestic-flight',
      label: 'Domestic Flight',
      icon: '/images/icons/domestic.png',
      isFlight: true,
    },
    { id: 'insurance', label: 'Insurance', icon: '/images/icons/insurance.png' },
    /*  { id: 'hotel', label: 'Hotel', icon: '🏨' }, */
    { id: 'holiday-packages', label: 'Holiday Packages', icon: '/images/icons/holiday.png' },
    { id: 'heli', label: 'Heli', icon: '/images/icons/heli.png' },
    { id: 'visa', label: 'Visa', icon: '/images/icons/visa.png' },
    /*   { id: 'car-hire', label: 'Car Hire', icon: '🚗' }, */
  ];

  // Helper: Map new tab to legacy form context (for rendering)
  const getFormContext = (): LegacyTabType => {
    if (activeTab === 'international-flight' || activeTab === 'domestic-flight') {
      return flightType === 'one-way' ? 'one-way' : 'round-trip';
    }
    if (activeTab === 'holiday-packages') return 'packages';
    return activeTab as LegacyTabType;
  };

  const currentForm = getFormContext();

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] pb-48"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="container">
        <div className="z-10 mx-auto pt-8 pb-4">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-medium text-black leading-relaxed">
              From Nepal to the World – <span className="text-secondary-dark">Easy</span>
            </h1>
            <p className="text-lg text-black">
              Book cheap flights other sites simply can't
              <br />
              find.
            </p>
            <div className="block mt-[-2rem] text-secondary-default text-3xl traxking-wide font-semibold">
              Ticket
            </div>
          </div>
        </div>

        {/* booking tab/form starts */}
        <div className="absolute h-full w-max max-w-[1280px] px-4 left-1/2 -translate-x-1/2 top-[60%]">
          {/* Tabs Row */}
          <div className="bg-white shadow-2xl rounded-[16px] p-6 absolute top-[-10%] left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-row gap-2 items-center justify-between w-full h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-2 py-2 text-sm font-normal text-text-default transition ${
                    activeTab === tab.id
                      ? 'bg-background'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={35}
                    height={35}
                    className="aspect-square"
                  />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Wrapper */}
          <form
            onSubmit={handleSearch}
            className="relative bg-white rounded-2xl shadow-2xl p-6 pt-20"
          >
            {/* Flight Type Toggle — only for flight tabs */}

            {tabs.find((t) => t.id === activeTab)?.isFlight && (
              <FormGroup row className="mb-5 gap-3">
                {(['one-way', 'round-trip', 'multi-city'] as FlightType[]).map((type) => {
                  const label =
                    type === 'one-way'
                      ? 'One Way'
                      : type === 'round-trip'
                      ? 'Round Trip'
                      : 'Multi City';

                  return (
                    <FormControlLabel
                      key={type}
                      className={`rounded-full px-3 py-1.5 cursor-pointer transition
            ${
              flightType === type
                ? 'bg-background-light rounded-full text-text-default text-sm'
                : ' text-text-default text-sm hover:bg-gray-100'
            }
          `}
                      control={
                        <Checkbox
                          checked={flightType === type}
                          onChange={() => setFlightType(type)}
                          className="hidden" // hide default checkbox UI
                        />
                      }
                      label={label}
                    />
                  );
                })}
              </FormGroup>
            )}
            {/* {tabs.find((t) => t.id === activeTab)?.isFlight && (
              <div className="flex justify-start gap-3 mb-5 ">
                {(['one-way', 'round-trip', 'multi-city'] as FlightType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFlightType(type)}
                    className={`px-5 py-2 rounded-lg fontnormal text-text-default transition ${
                      flightType === type
                        ? 'bg-pink-100 text-pink-600 border border-pink-400'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {type === 'one-way'
                      ? 'One Way'
                      : type === 'round-trip'
                      ? 'Round Trip'
                      : 'Multi City'}
                  </button>
                ))}
              </div>
            )} */}
            {/* Render forms based on currentForm (legacy mapping) */}
            {(currentForm === 'round-trip' || currentForm === 'one-way') && (
              <>
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
                  {currentForm === 'round-trip' && (
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
                  <div className={currentForm === 'one-way' ? 'md:col-span-4' : 'md:col-span-2'}>
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
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        passengerType === 'regular' ? 'border-pink-500' : 'border-gray-400'
                      }`}
                    >
                      {passengerType === 'regular' && (
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                      )}
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
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        passengerType === 'student' ? 'border-pink-500' : 'border-gray-400'
                      }`}
                    >
                      {passengerType === 'student' && (
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                      )}
                    </div>
                    Student Fare
                  </button>
                </div>
              </>
            )}
            {/*  {currentForm === 'hotel' && (
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
            )} */}
            {currentForm === 'packages' && (
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Duration
                  </label>
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
            {currentForm === 'visa' && (
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Visa Type
                  </label>
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
            {currentForm === 'car-hire' && (
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
              className="absolute right-8 -bottom-6 w-max bg-primary-default hover:bg-secondary-dark text-white py-4 px-8 rounded-[12px] text-base font-medium flex items-center justify-center  transition shadow-lg"
            >
              {currentForm === 'round-trip' || currentForm === 'one-way'
                ? 'Search Flight'
                : currentForm === 'hotel'
                ? 'Search Hotel'
                : currentForm === 'packages'
                ? 'Browse Packages'
                : currentForm === 'visa'
                ? 'Apply for Visa'
                : 'Find Car'}

              <Search size={20} className="ml-4" />
            </button>
          </form>
        </div>
        {/* booking tab/form ends */}
      </div>
    </div>
  );
};
