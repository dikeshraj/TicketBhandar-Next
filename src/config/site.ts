export const siteConfig = {
  name: 'Ticket Bhandar',
  description: 'Book cheap flights from Nepal to the World - Easy',
  phone: '+977-01-5437 980/5435948',
  email: 'info@ticketbhandar.com',
  address: 'Kathmandu, Nepal',
  logo: {
    src: '/images/brands/tb-logo.png', 
    alt: 'Ticket Bhandar',
    width: 100,
    height: 36,
  },
  social: {
    facebook: 'https://facebook.com/ticketbhandar',
    instagram: 'https://instagram.com/ticketbhandar',
    twitter: 'https://twitter.com/ticketbhandar',
    tiktok: 'https://tiktok.com/@ticketbhandar',
    youtube: 'https://youtube.com/@ticketbhandar',
  },
  topHeader: {
    showAgencyId: true,
    showFareInquiry: true,
    showAuth: true,
    currency: 'NRs',
  },

  secondaryNav: [
    {
      name: 'International Flight',
      href: '/international-flight',
      image: '/images/icons/international.png',
    },
    {
      name: 'Domestic Flight',
      href: '/domestic-flight',
      image: '/images/icons/domestic.png',
    },
    {
      name: 'Insurance',
      href: '/insurance',
      image: '/images/icons/insurance.png',
    },
    {
      name: 'Holiday Packages',
      href: '/holiday-packages',
      image: '/images/icons/holiday.png',
    },
    {
      name: 'Heli',
      href: '/heli',
      image: '/images/icons/heli.png',
    },
    {
      name: 'Visa',
      href: '/visa',
      image: '/images/icons/visa.png',
    },
  ],
  
  // social links for secondary header
  socialLinks: [
    { href: '#', icon: '/images/icons/tbfacebook.png' },
    { href: '#', icon: '/images/icons/tbinsta.png' },
    { href: '#', icon: '/images/icons/tbtwitter.png' },
  ],
  navigation: [
    /* { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Book now', href: '/flights', icon: '📅' },
    { name: 'Destination', href: '/destinations', icon: '🗺️' },
    { name: 'Domestic Flight', href: '/flights/domestic', icon: '✈️' },
    { name: 'Group Tours', href: '/group-tours', icon: '👥' },
    { name: 'Holiday Packages', href: '/packages', icon: '🎄' },
    { name: 'Visa', href: '/visa', icon: '📄' },
    { name: 'Hajj', href: '/hajj', icon: '🕌' }, */
  ],
};
