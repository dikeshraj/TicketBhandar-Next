import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticket Bhandar - Book Cheap Flights from Nepal',
  description: "Book cheap flights other sites simply can't. Travel from Nepal to the World - Easy",
  keywords: 'flights, Nepal, Kathmandu, cheap flights, travel, booking, international flights',
  authors: [{ name: 'Ticket Bhandar' }],
  openGraph: {
    title: 'Ticket Bhandar - Book Cheap Flights from Nepal',
    description: "Book cheap flights other sites simply can't",
    url: 'https://ticketbhandar.com',
    siteName: 'Ticket Bhandar',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
