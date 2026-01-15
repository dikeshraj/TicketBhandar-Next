import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PARTNERS } from '@/lib/constants';

export const ClientSection: React.FC = () => {
  return (
    <section className="pt-12">
      <div className="container">
        <h2 className="text-xl font-bold text-gray-900 mb-8">Visit us online</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-4 lg:gap-10 items-center">
          {PARTNERS.map((partner, idx) => (
            <div key={partner.id} className="text-center">
              {/* <Link href={partner.url} passHref legacyBehavior> */}
              <a className="block transition hover:scale-110 cursor-pointer">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  sizes="(max-width: 640px) 80px,
                  (max-width: 768px) 100px,120px"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain transition"
                />
              </a>
              {/*  </Link> */}
              {/* <div
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
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
