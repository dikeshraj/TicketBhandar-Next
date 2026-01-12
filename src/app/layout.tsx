import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeaderUser } from '@/types/user';
import { AuthProvider } from '@/lib/authContext';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticket Bhandar - Book Cheap Flights from Nepal',
  description: "Book cheap flights other sites simply can't. Travel from Nepal to the World - Easy",
  keywords: 'flights, Nepal, Kathmandu, cheap flights, travel, booking, international flights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 🔐 Later this will come from auth (NextAuth / API)
  const user: HeaderUser | null = null;

  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen bg-[#F7F7F7]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}