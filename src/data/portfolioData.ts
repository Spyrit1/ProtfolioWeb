import { Project, ServiceItem, WhyReason } from '../types';

export const PERSONAL_INFO = {
  name: 'Aditya',
  title: 'Website Designer & Developer',
  brandName: 'Better Designs',
  logo: '/assets/aistudio/836547535_18124075228861145_1498941887262841621_n_53d0893c.jpg',
  email: 'iamspyrit@gmail.com',
  instagramHandle: '@betterdesings_',
  instagramUrl: 'https://www.instagram.com/betterdesings_/',
  heroHeadline: 'I design, build and launch websites that make businesses look professional online.',
  heroSubheadline:
    'I design and build modern, high-quality websites that make brands look professional and stand out online. From the first concept to development, hosting, and launch — I handle everything to turn your vision into a polished digital experience.',
  heroQuote: 'Your idea. My design. A website built to make an impact.',
  portfolioQuote: 'Good design gets attention. A great website turns that attention into action.',
  aboutBio:
    'I design and build modern, high-quality websites that make brands look professional and stand out online. From the first concept to development, hosting, and launch — I handle everything to turn your vision into a polished digital experience.',
  aboutExtended:
    'Whether you are an ambitious business, independent creator, or growing brand, I craft websites that convey credibility, convert visitors, and reflect your unique identity. Every line of code and every pixel is crafted with care, speed, and precision.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Website Design',
    shortDescription:
      'Clean, modern, and high-converting visual layouts tailored to your brand identity, aesthetics, and user journey.',
    deliverables: ['Custom UI/UX Wireframes', 'Modern Typography & Color Palette', 'High-Converting Layouts'],
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Website Development',
    shortDescription:
      'Pixel-perfect, lightning-fast code built using modern web standards for smooth performance and zero bloat.',
    deliverables: ['Clean Semantic Code', 'Fast Performance Optimization', 'Interactive Components'],
  },
  {
    id: 'responsive-design',
    number: '03',
    title: 'Responsive Design',
    shortDescription:
      'Seamless layout adaptation across every screen size — from mobile smartphones and tablets to ultra-wide desktop monitors.',
    deliverables: ['Mobile-First Optimization', 'Fluid Tablet Adapters', 'High-Resolution Retina Ready'],
  },
  {
    id: 'domain-setup',
    number: '04',
    title: 'Domain Setup',
    shortDescription:
      'Complete DNS management, custom email forwarding, and hassle-free domain connection to your live website.',
    deliverables: ['Custom Domain Linking', 'DNS Records & Routing', 'SSL / HTTPS Security Certificates'],
  },
  {
    id: 'website-hosting',
    number: '05',
    title: 'Website Hosting',
    shortDescription:
      'Ultra-fast cloud infrastructure setup guaranteeing 99.9% uptime, global CDN distribution, and enterprise-grade reliability.',
    deliverables: ['Cloud Server Provisioning', 'Global Content Delivery Network', 'Automated Backups & Uptime'],
  },
  {
    id: 'website-deployment',
    number: '06',
    title: 'Website Deployment',
    shortDescription:
      'Comprehensive pre-launch testing, search engine indexing readiness, and turning your website live for the world.',
    deliverables: ['Live Production Launch', 'SEO Best Practices & Indexing', 'Continuous Maintenance Support'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'spyrit-india',
    title: 'Spyrit India',
    tagline: 'Luxury Watches & Timepieces',
    category: 'E-Commerce / Watch Brand',
    url: 'https://spyrit-india.vercel.app/',
    description:
      'A premium watch website designed with a clean and elegant visual style, focused on presenting luxury watches in an affordable and attractive way.',
    image: '/assets/images/project_spyrit_india_1793958585843.jpg',
    highlights: [
      'Minimalist luxury aesthetic with curated typography',
      'High-impact hero imagery showcasing craftsmanship',
      'Smooth e-commerce product catalog with intuitive purchasing flow',
      'Optimized image delivery for lightning-fast browsing',
    ],
    servicesDelivered: ['UI/UX Design', 'Full-Stack Development', 'Responsive Layouts', 'Hosting & Deployment'],
  },
  {
    id: 'the-iron-gym',
    title: 'The Iron Gym',
    tagline: 'Elite Strength & Conditioning Facility',
    category: 'Fitness / Athletic Brand',
    url: 'https://irongymweb.vercel.app/',
    description:
      'A modern gym website designed to present the gym, its services, facilities and overall brand in a strong and professional way.',
    image: '/assets/images/project_iron_gym_1793958586417.jpg',
    highlights: [
      'Bold, athletic visual identity with dark contrast styling',
      'Interactive class schedules and training discipline sections',
      'Clear membership tier breakdown driving direct signups',
      'Mobile-first responsive design for members on the go',
    ],
    servicesDelivered: ['Brand Styling', 'Web Development', 'Class Schedule Engine', 'Live Deployment'],
  },
  {
    id: 'horizon',
    title: 'Horizon',
    tagline: 'Luxury Real Estate & Property Showcase',
    category: 'Real Estate / Property Firm',
    url: 'https://horizon.adixweb.site/',
    description:
      'A modern real estate website designed to showcase luxury residential properties, architectural developments, prime listings, and client inquiries with a clean, trustworthy, and elegant aesthetic.',
    image: '/assets/images/project_horizon_realestate_1794122030328.jpg',
    highlights: [
      'Clean property showcase architecture with high-resolution visual tours',
      'Intuitive property filter controls for locations, bed/bath specs, and pricing',
      'Fast lead generation inquiry system connecting buyers directly with agents',
      'Custom domain configuration and cloud edge hosting on horizon.adixweb.site',
    ],
    servicesDelivered: ['UI/UX Design', 'Full-Stack Development', 'Domain & Hosting Setup', 'Live Production Launch'],
  },
];

export const WHY_WORK_WITH_ME: WhyReason[] = [
  {
    id: 'clean-modern',
    title: 'Clean & modern designs',
    description:
      'No messy templates or outdated clutter. Every website is built with timeless typography, intentional spacing, and a polished contemporary aesthetic that inspires trust.',
  },
  {
    id: 'mobile-friendly',
    title: 'Mobile-friendly websites',
    description:
      'Over 60% of web traffic comes from smartphones. Your site will look stunning, load fast, and feel natural on iOS, Android, tablets, and desktops.',
  },
  {
    id: 'complete-setup',
    title: 'Complete website setup',
    description:
      'You do not have to piece together designers, coders, and system administrators. I take full responsibility for the entire project from start to finish.',
  },
  {
    id: 'fast-responsive',
    title: 'Fast and responsive development',
    description:
      'Optimized performance with minimal code footprint. Your pages load in milliseconds, delivering superior search engine rankings and lower bounce rates.',
  },
  {
    id: 'domain-hosting',
    title: 'Domain & hosting assistance',
    description:
      'DNS records, nameservers, SSL certificates, and hosting settings can be daunting. I set up all of it smoothly so you never have to worry about the technical details.',
  },
  {
    id: 'idea-to-live',
    title: 'From idea to live website',
    description:
      'Bring your vision or raw notes. I translate your objectives into an engaging live website ready to welcome your customers and elevate your brand.',
  },
];

export const WORKFLOW_STEPS = [
  { step: '01', title: 'Design & Wireframing', desc: 'Crafting clean visual layouts that match your vision.' },
  { step: '02', title: 'Coding & Optimization', desc: 'Building responsive, fast, and accessible web pages.' },
  { step: '03', title: 'Domain & SSL Setup', desc: 'Configuring custom DNS and security certificates.' },
  { step: '04', title: 'Hosting & Going Live', desc: 'Publishing to global cloud servers for the world to see.' },
];
