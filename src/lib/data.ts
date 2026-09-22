import { Service, PortfolioItem, ProcessStep, Feature } from './types';

export const services: Service[] = [
  {
    icon: 'Contact',
    title: 'Visiting Cards',
    description: 'Premium business cards with foil, embossing, and specialty finishes that make a lasting first impression.',
    image: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'BookOpen',
    title: 'Brochures',
    description: 'Tri-fold, bi-fold, and multi-page brochures designed to communicate your story with clarity.',
    image: 'https://images.pexels.com/photos/36682054/pexels-photo-36682054.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'FileText',
    title: 'Flyers',
    description: 'Eye-catching flyers for promotions, events, and announcements — printed on quality stock.',
    image: 'https://images.pexels.com/photos/6114589/pexels-photo-6114589.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'Image',
    title: 'Posters',
    description: 'Vibrant large-format posters with rich color reproduction for retail, events, and exhibitions.',
    image: 'https://images.pexels.com/photos/3964758/pexels-photo-3964758.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'Flag',
    title: 'Banners',
    description: 'Durable indoor and outdoor banners built to stand out at any scale or venue.',
    image: 'https://images.pexels.com/photos/3964819/pexels-photo-3964819.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'Mail',
    title: 'Invitations',
    description: 'Elegant wedding and event invitations with custom paper, printing, and finishing options.',
    image: 'https://images.pexels.com/photos/35005581/pexels-photo-35005581.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'Package',
    title: 'Packaging',
    description: 'Custom boxes, labels, and packaging that elevate your product presentation and brand.',
    image: 'https://images.pexels.com/photos/26611769/pexels-photo-26611769.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    icon: 'Building2',
    title: 'Corporate Printing',
    description: 'Letterheads, envelopes, folders, and complete corporate identity print packages.',
    image: 'https://images.pexels.com/photos/5420990/pexels-photo-5420990.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Brand Identity Cards',
    category: 'Business',
    image: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Folded Marketing Brochure',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/36682054/pexels-photo-36682054.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Product Packaging Design',
    category: 'Packaging',
    image: 'https://images.pexels.com/photos/26611769/pexels-photo-26611769.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Wedding Invitation Suite',
    category: 'Events',
    image: 'https://images.pexels.com/photos/35005581/pexels-photo-35005581.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Retail Poster Series',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/3964758/pexels-photo-3964758.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Promotional Event Banner',
    category: 'Events',
    image: 'https://images.pexels.com/photos/3964819/pexels-photo-3964819.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Minimalist Card Stack',
    category: 'Business',
    image: 'https://images.pexels.com/photos/9878725/pexels-photo-9878725.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Cosmetic Packaging Set',
    category: 'Packaging',
    image: 'https://images.pexels.com/photos/11525197/pexels-photo-11525197.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    title: 'Corporate Stationery Suite',
    category: 'Business',
    image: 'https://images.pexels.com/photos/5420990/pexels-photo-5420990.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Share Your Requirement',
    description: 'Tell us what you need — quantity, material, timeline, and design preferences.',
  },
  {
    number: '02',
    title: 'Design & Review',
    description: 'Our team prepares and reviews artwork, sending proofs for your approval before printing.',
  },
  {
    number: '03',
    title: 'Print With Precision',
    description: 'We print using modern equipment and quality materials, ensuring accurate color and finish.',
  },
  {
    number: '04',
    title: 'Ready to Deliver',
    description: 'Finished products are inspected, packed, and delivered to your doorstep on time.',
  },
];

export const features: Feature[] = [
  {
    icon: 'Layers',
    title: 'Quality Materials',
    description: 'We source premium papers, inks, and finishes to ensure every print feels substantial.',
  },
  {
    icon: 'Sparkles',
    title: 'Professional Finishing',
    description: 'Lamination, foil stamping, embossing, and binding — handled with expert precision.',
  },
  {
    icon: 'Ruler',
    title: 'Attention to Detail',
    description: 'Every project goes through proofing and quality checks before it leaves our press.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Customer-Focused Service',
    description: 'We work closely with you from concept to delivery, keeping you informed at every step.',
  },
];

export const portfolioCategories = ['All', 'Business', 'Marketing', 'Events', 'Packaging'] as const;

export const serviceOptions = [
  'Visiting Cards',
  'Brochures',
  'Flyers',
  'Posters',
  'Banners',
  'Invitations',
  'Packaging',
  'Corporate Printing',
  'Other',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];
