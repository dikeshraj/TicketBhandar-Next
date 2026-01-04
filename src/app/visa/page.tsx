import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function VisaPage() {
  const visaServices = [
    {
      id: 1,
      country: 'USA',
      flag: '🇺🇸',
      processingTime: '15-20 days',
      fee: 25000,
      requirements: ['Valid Passport', 'Photos', 'Bank Statement', 'Travel Insurance'],
    },
    {
      id: 2,
      country: 'UK',
      flag: '🇬🇧',
      processingTime: '10-15 days',
      fee: 22000,
      requirements: ['Valid Passport', 'Photos', 'Proof of Funds', 'Hotel Booking'],
    },
    {
      id: 3,
      country: 'Australia',
      flag: '🇦🇺',
      processingTime: '20-25 days',
      fee: 28000,
      requirements: ['Valid Passport', 'Photos', 'Financial Proof', 'Health Insurance'],
    },
    {
      id: 4,
      country: 'Schengen',
      flag: '🇪🇺',
      processingTime: '10-15 days',
      fee: 20000,
      requirements: ['Valid Passport', 'Photos', 'Travel Itinerary', 'Travel Insurance'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-8xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Visa Assistance</h1>
          <p className="text-xl">We help you get your visa quickly and hassle-free</p>
        </div>
      </div>

      {/* Visa Services */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Visa Services</h2>
          <p className="text-lg text-gray-600">
            Professional visa assistance for multiple countries with high success rate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visaServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{service.flag}</div>
                <div>
                  <h3 className="text-2xl font-bold">{service.country} Visa</h3>
                  <p className="text-gray-600">Processing: {service.processingTime}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  NPR {service.fee.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm">Service fee (excluding embassy charges)</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Required Documents:</h4>
                <ul className="space-y-2">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-bold transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-bold mb-2">High Success Rate</h3>
              <p className="text-gray-600 text-sm">98% visa approval rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast Processing</h3>
              <p className="text-gray-600 text-sm">Quick turnaround time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated visa consultants</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">📄</div>
              <h3 className="font-bold mb-2">Document Help</h3>
              <p className="text-gray-600 text-sm">Complete documentation support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}