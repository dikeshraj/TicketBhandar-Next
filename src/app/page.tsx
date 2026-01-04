import { HeroSection } from '@/components/home/HeroSection';
import { SpecialOffers } from '@/components/home/SpecialOffers';
import { AdsBanner } from '@/components/home/AdsBanner';
import { BestFromNepal } from '@/components/home/BestFromNepal';
import { OtherServices } from '@/components/home/OtherServices';
import { ClientSection } from '@/components/home/ClientSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialOffers />
      <AdsBanner type="kathmandu" />
      <BestFromNepal />
      <AdsBanner type="fare" />
      <OtherServices />
      <ClientSection />
    </>
  );
}