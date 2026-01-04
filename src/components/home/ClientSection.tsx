import React from 'react';
import { PARTNERS } from '@/lib/constants';

export const ClientSection: React.FC = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Visit us online</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
          {PARTNERS.map((partner, idx) => (
            <div key={partner.id} className="text-center">
              <div
                className={`text-xl font-bold transition hover:scale-110 cursor-pointer ${
                  idx === 0
                    ? 'text-blue-600'
                    : idx === 1
                    ? 'text-blue-700'
                    : idx === 2
                    ? 'text-orange-500'
                    : idx === 3
                    ? 'text-blue-800'
                    : 'text-blue-600'
                }`}
              >
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};