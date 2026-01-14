'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Calendar, CalendarDays, Package } from 'lucide-react';
import Image from 'next/image';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import RoundCheckbox from '@/components/ui/RoundCheckbox';
import { AutocompleteInput } from '@/components/ui/AutocompleteInput';
import 'react-day-picker/dist/style.css';
// import WrappedDayButton from '@/components/customDaypicker/CustomDay';
import { DayPicker } from 'react-day-picker';

// Tab types for top-level navigation
type TabType =
  | 'international-flight'
  | 'domestic-flight'
  | 'insurance'
  | 'holiday-packages'
  | 'heli'
  | 'visa'
  | 'car-hire'
  | 'hotel';

// Flight sub-type
type FlightType = 'one-way' | 'round-trip' | 'multi-city';
type PassengerType = 'regular' | 'student';

const cityOptions = [
  'Kathmandu',
  'Pokhara',
  'Lalitpur',
  'Bhaktapur',
  'London',
  'Paris',
  'New York',
  'Tokyo',
];

interface FormData {
  departDate: string;
  returnDate: string;
  travelers: string;
  adults: number; // Number of adults (over 12)
  children: number; // Number of children (2–11)
  infants: number; // Number of infants (under 3)
  nationality: string; // Selected nationality
  travelClass: string;
  destination: string;
  checkIn: string;
  checkOut: string;
  rooms: string;
  guests: string;
  packageDestination: string;
  packageDate: string;
  packageDuration: string;
  visaCountry: string;
  visaType: string;
  travelDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
}

interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
  isFlight?: boolean;
}

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('international-flight');
  const [flightType, setFlightType] = useState<FlightType>('round-trip');
  const [passengerType, setPassengerType] = useState<PassengerType>('regular');
  const [departCalendarOpen, setDepartCalendarOpen] = useState(false);
  const [returnCalendarOpen, setReturnCalendarOpen] = useState(false);
  // Only track selected dates. no formData sync during interaction
  const [selectedDepartDate, setSelectedDepartDate] = useState<Date | undefined>();
  const [selectedReturnDate, setSelectedReturnDate] = useState<Date | undefined>();
  const dateWrapperRef = useRef<HTMLDivElement | null>(null);
  const [showTravelers, setShowTravelers] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    departDate: '',
    returnDate: '',
    travelers: '01',
    adults: 1,
    children: 0,
    infants: 0,
    nationality: 'NP',
    travelClass: 'Economy',
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
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDepartSelect = (date: Date | undefined) => {
    setSelectedDepartDate(date);
    setDepartCalendarOpen(false);
    /* if (flightType !== 'one-way') {
      setTimeout(() => setReturnCalendarOpen(true), 50);
    } */
    if (flightType !== 'one-way') {
      setReturnCalendarOpen(true);
    }
  };

  const handleReturnSelect = (date: Date | undefined) => {
    setSelectedReturnDate(date);
    setReturnCalendarOpen(false);
  };

  /* useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.rdp') && !target.closest('[placeholder*="date"]')) {
        setDepartCalendarOpen(false);
        setReturnCalendarOpen(false);
      }
    };

    if (departCalendarOpen || returnCalendarOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [departCalendarOpen, returnCalendarOpen]); */
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (dateWrapperRef.current && !dateWrapperRef.current.contains(e.target as Node)) {
        setDepartCalendarOpen(false);
        setReturnCalendarOpen(false);
      }
    };

    if (departCalendarOpen || returnCalendarOpen) {
      document.addEventListener('pointerdown', handlePointerDown);
      return () => document.removeEventListener('pointerdown', handlePointerDown);
    }
  }, [departCalendarOpen, returnCalendarOpen]);

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
    { id: 'holiday-packages', label: 'Holiday Packages', icon: '/images/icons/holiday.png' },
    { id: 'heli', label: 'Heli', icon: '/images/icons/heli.png' },
    { id: 'visa', label: 'Visa', icon: '/images/icons/visa.png' },
  ];

  const formatDate = (date: Date | undefined) => {
    return date ? date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : '';
  };

  return (
    <div
      className="relative bg-cover bg-bottom bg-no-repeat h-[85vh] max-h-[90vh] pb-44"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="container">
        <div className="z-10 mx-auto pt-10 pb-4 px-10">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-medium text-black leading-relaxed">
              From Nepal to the World – <span className="text-secondary-dark">Easy Ticket</span>
            </h1>
            <p className="text-lg text-black">
              Book cheap flights other sites simply can't
              <br />
              find.
            </p>
            {/* <div className="block mt-[-2rem] text-secondary-default text-3xl tracking-wide font-semibold">
              Ticket
            </div> */}
          </div>
        </div>

        <div className="absolute h-full w-full max-w-[1300px] px-4 sm:px-6 md:px-8 lg:px-10 left-1/2 -translate-x-1/2 top-[60%]">
          {/* Tabs Row */}
          <div className="bg-white shadow-custom rounded-[16px] p-6 absolute top-[-11%] left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-row gap-2 items-center justify-between w-full h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-2 py-2 text-sm font-normal text-text-default transition ${
                    activeTab === tab.id
                      ? 'bg-background-default'
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
            className="relative bg-white rounded-[20px] shadow-custom px-8 pb-4 pt-20"
          >
            {/* Flight Type Toggle */}
            {tabs.find((t) => t.id === activeTab)?.isFlight && (
              <div className="flex flex-row items-center gap-3 mt-4 mb-6 lg:ml-10">
                {(['one-way', 'round-trip', 'multi-city'] as FlightType[]).map((type) => {
                  const label =
                    type === 'one-way'
                      ? 'One Way'
                      : type === 'round-trip'
                      ? 'Round Trip'
                      : 'Multi City';

                  return (
                    <RoundCheckbox
                      key={type}
                      checked={flightType === type}
                      onChange={() => setFlightType(type)}
                      label={label}
                    />
                  );
                })}
              </div>
            )}

            {/* FLIGHT FORM */}
            {(activeTab === 'international-flight' || activeTab === 'domestic-flight') && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-1 border border-border-blue-50 rounded-[10px] p-4">
                    <label className="block text-xs font-medium text-text-default mb-1.5">
                      From
                    </label>
                    <AutocompleteInput field="from" options={cityOptions} placeholder="Kathmandu" />
                  </div>
                  {/* direction icon */}
                  <div className="w-10 h-10 bg-white top-[50%] left-[24%] border border-border-blue-25 rounded-full flex items-centet justify-center text-center absolute">
                    <Image
                      alt="direction"
                      src="/images/icons/square-direction.png"
                      width={18}
                      height={18}
                      className="object-contain aspect-square text-center"
                    />
                  </div>
                  {/* direction icon ends */}
                  <div className="md:col-span-1 border border-border-blue-50 rounded-[10px] p-4">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">To</label>
                    <AutocompleteInput field="to" options={cityOptions} placeholder="London" />
                  </div>

                  <div
                    ref={dateWrapperRef}
                    className="md:col-span-1 flex flex-row flex-nowrap border border-border-blue-50 rounded-[10px] px-3 py-4 relative"
                  >
                    <div className="flex-1 pr-4 relative ">
                      <label className="block text-xs font-medium text-text-grey mb-1.5">
                        DEPARTURE
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={formatDate(selectedDepartDate)}
                        placeholder="31 Aug"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDepartCalendarOpen(true);
                        }}
                        className="w-full bg-transparent cursor-pointer focus:outline-none text-sm font-semibold placeholder-black"
                        required
                      />
                      <CalendarDays
                        size={16}
                        className="absolute top-6 right-4 stroke-secondary-default"
                      />
                      {/*  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg> */}
                      {departCalendarOpen && (
                        <div className="absolute z-30 mt-1 bg-white shadow-xl rounded-lg p-3 border border-gray-200">
                          <DayPicker
                            mode="single"
                            selected={selectedDepartDate}
                            onSelect={handleDepartSelect}
                            /* components={{ DayButton: WrappedDayButton }} */
                          />
                        </div>
                      )}
                    </div>

                    {/*  <div className="absolute"></div> */}

                    {flightType === 'round-trip' && (
                      <div className="flex-1 pl-4 border-l border-dashed border-secondary-default relative">
                        <label className="block text-xs font-medium text-text-grey mb-1.5">
                          RETURN
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={formatDate(selectedReturnDate)}
                          placeholder="31 Aug"
                          onClick={(e) => {
                            e.stopPropagation();
                            setReturnCalendarOpen(true);
                          }}
                          className="w-full bg-transparent cursor-pointer focus:outline-none text-sm font-semibold placeholder-black"
                          required
                        />
                        <CalendarDays
                          size={16}
                          className="absolute right-4 top-6 stroke-secondary-default"
                        />
                        {returnCalendarOpen && (
                          <div className="absolute z-30 mt-1 bg-white shadow-xl rounded-lg p-3 border border-gray-200 ml-2">
                            <DayPicker
                              mode="single"
                              selected={selectedReturnDate}
                              onSelect={handleReturnSelect}
                              /* components={{ DayButton: WrappedDayButton }} */
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* <div className="md:col-span-1 border border-border-blue-50 rounded-[10px] p-4">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Travelers & class
                    </label>
                    <div className="flex flex-row flex-nowrap justify-start items-start">
                      <select
                        value={formData.travelers}
                        onChange={(e) => updateFormData('travelers', e.target.value)}
                        className="w-full py-2.5 border-none focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                      >
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4+ Adults</option>
                      </select>
                      <select
                        value={formData.travelers}
                        onChange={(e) => updateFormData('travelers', e.target.value)}
                        className="w-full py-2.5 border-none focus:border-blue-500 focus:outline-none text-sm appearance-none bg-white"
                      >
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4+ Adults</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="md:col-span-1 border border-border-blue-50 rounded-[10px] p-4 relative">
                    <label className="block text-xs font-medium text-text-grey mb-1.5 uppercase">
                      TRAVELLERS & CLASS
                    </label>

                    {/* Dropdown trigger */}
                    <button
                      type="button"
                      onClick={() => setShowTravelers(!showTravelers)}
                      className="w-full flex items-center justify-between gap-4 border-none bg-white text-sm focus:outline-none"
                    >
                      <div className="block text-base">
                        <span className="font-semibold pr-1">
                          {(formData.adults || 1) +
                            (formData.children || 0) +
                            (formData.infants || 0)}
                        </span>
                        <span className="font-normal text-sm text-text-grey">
                          {' Traveler' +
                            ((formData.adults || 1) +
                              (formData.children || 0) +
                              (formData.infants || 0) >1
                              ? 's'
                              : '')}
                        </span>
                      </div>
                      
                      {/* Nationality short */}
                      {/*  {formData.nationality && ( */}
                      <div className=" flex gap-2">
                        <span className="text-sm uppercase font-semibold">({formData.nationality})</span>
                        <Image
                          src="/images/icons/flagOfnepal.svg"
                          width={14}
                          height={14}
                          alt="Nationality"
                          className="object-contain"
                        />
                      </div>

                      {/*  )} */}

                      {/* Class */}
                      {/*  {formData.travelClass && ( */}
                      <div className="">
                        <Image
                          src="/images/icons/class.png"
                          width={20}
                          height={20}
                          alt="Nationality"
                          className="object-cover"
                        /> 
                      </div>
                      
                      
                      {/*  )} */}

                     {/*  <svg
                        className={`w-4 h-4 ml-2 transition-transform ${
                          showTravelers ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg> */}
                    </button>
                    {/* selected class data */}
                    <span className="uppercase font-medium text-xs text-gray-400 pl-0.5">{formData.travelClass}</span>
                    {/* selected class data ends*/}

                    {/* Dropdown panel */}
                    {showTravelers && (
                      <div className="absolute z-50 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 p-4">
                        {/* Adults */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-sm font-medium text-gray-700">Adult</div>
                            <div className="text-xs text-gray-400">Over 12</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  adults: Math.max(1, (prev.adults || 1) - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{formData.adults || 1}</span>
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  adults: (prev.adults || 1) + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-sm font-medium text-gray-700">Children</div>
                            <div className="text-xs text-gray-400">2–11</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  children: Math.max(0, (prev.children || 0) - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{formData.children || 0}</span>
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  children: (prev.children || 0) + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Infants */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-sm font-medium text-gray-700">Infants</div>
                            <div className="text-xs text-gray-400">Under 3</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  infants: Math.max(0, (prev.infants || 0) - 1),
                                }))
                              }
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{formData.infants || 0}</span>
                            <button
                              type="button"
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  infants: (prev.infants || 0) + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Nationality */}
                        <div className="mb-3">
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Nationality
                          </label>
                          <select
                            value={formData.nationality || ''}
                            onChange={(e) => updateFormData('nationality', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-white"
                          >
                            <option value="">Select Nationality</option>
                            <option value="np">Nepal (NP)</option>
                            <option value="us">United States (US)</option>
                            <option value="uk">United Kingdom (UK)</option>
                            <option value="in">India (IN)</option>
                            {/* Add more as needed */}
                          </select>
                        </div>

                        {/* Class */}
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Select Class
                          </label>
                          <select
                            value={formData.travelClass || ''}
                            onChange={(e) => updateFormData('travelClass', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-white"
                          >
                            <option value="">Any Class</option>
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mb-5 mt-6 flex-wrap">
                  <RoundCheckbox
                    checked={passengerType === 'regular'}
                    onChange={() => setPassengerType('regular')}
                    label="Regular"
                    subLabel="Regular"
                    uncheckedLabelClassName="bg-background-default border border-border-blue-50 rounded-[4px] text-text-default px-4"
                    checkedLabelClassName="bg-background-grey-light text-text-default border border-border-blue-50 rounded-[4px] px-4"
                    uncheckedCircleColor="bg-background-grey-light mr-2"
                    checkedCircleColor="bg-secondary-default mr-2"
                  />

                  <RoundCheckbox
                    checked={passengerType === 'student'}
                    onChange={() => setPassengerType('student')}
                    label="Student Fare"
                    subLabel="Extra discount/baggage"
                    uncheckedLabelClassName="bg-background-default border border-border-blue-50 rounded-[4px] text-text-default px-4"
                    checkedLabelClassName="bg-background-grey-light text-text-default border border-border-blue-50 rounded-[4px] px-4"
                    uncheckedCircleColor="bg-background-grey-light mr-2"
                    checkedCircleColor="bg-secondary-default mr-2"
                  />
                </div>
              </>
            )}

            {/* HOLIDAY PACKAGES */}
            {activeTab === 'holiday-packages' && (
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

            {/* VISA FORM */}
            {activeTab === 'visa' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-5">
                <div className="md:col-span-5">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Country
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

            {/* SEARCH BUTTON */}
            <button
              type="submit"
              className="absolute right-8 -bottom-6 w-max bg-primary-default hover:bg-secondary-dark text-white py-4 px-8 rounded-[12px] text-base font-medium flex items-center justify-center transition shadow-custom"
            >
              {activeTab === 'international-flight' || activeTab === 'domestic-flight'
                ? 'Search Flight'
                : activeTab === 'holiday-packages'
                ? 'Browse Packages'
                : activeTab === 'visa'
                ? 'Apply for Visa'
                : 'Search'}
              <Search size={20} className="ml-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
