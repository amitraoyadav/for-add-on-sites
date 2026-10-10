/**
 * Raoz Demo Factory — Authoritative Business Categories & Subcategories Registry
 */

import { CategoryDefinition } from '../types/category.types';

export const BUSINESS_CATEGORIES: CategoryDefinition[] = [
  {
    code: 'cat-food-hospitality',
    letter: '1',
    title: 'Restaurant, Cafe & Food Business',
    shortTitle: 'Restaurant & Cafe',
    subcategories: [
      'Cafes and Coffee Shops',
      'Fine-Dining Restaurants',
      'Sushi Bars & Asian Lounges',
      'Artisan Bakeries & Patisseries',
      'Cloud Kitchens & Delivery',
      'Boutique Hospitality & Dining',
      'Cocktail Bars & Lounges'
    ],
    clientProfiles: [
      'Cafe & specialty coffee shop owners',
      'Fine-dining & sushi lounge operators',
      'Boutique restaurant proprietors',
      'Cloud kitchen & food delivery operators',
      'Artisanal patisserie & dessert bars'
    ],
    conversionFocus: [
      'Table Reservation Booking',
      'Online Ordering & Delivery Links',
      'Digital Interactive Menu',
      'Private Events & Dining Inquiry',
      'Click-to-Call & Location Direction'
    ],
    industryGuidelines: 'Ensure appetizing visual presentation, clear dietary labels, accessible pricing, accurate service hours, and responsive reservation/order triggers.',
    badgeColor: 'amber',
    accentColor: '#D97706'
  },
  {
    code: 'cat-education-coaching',
    letter: '2',
    title: 'Coaching Institute & Education',
    shortTitle: 'Education & Coaching',
    subcategories: [
      'Competitive Exam Institutes',
      'Schools & Preschools',
      'Coding & Tech Bootcamps',
      'Vocational Training Centers',
      'Language Academies'
    ],
    clientProfiles: ['Coaching directors', 'School administrators', 'Tutors', 'Bootcamp founders'],
    conversionFocus: ['Free Demo Class', 'Download Syllabus', 'Counselor WhatsApp'],
    industryGuidelines: 'Transparent fee and duration structures, accurate course curricula.',
    badgeColor: 'indigo',
    accentColor: '#4F46E5'
  },
  {
    code: 'cat-healthcare-wellness',
    letter: '3',
    title: 'Healthcare, Clinics & Doctors',
    shortTitle: 'Healthcare & Doctors',
    subcategories: [
      'Medical Clinics & Doctors',
      'Dental Studios',
      'Diagnostic Pathology Labs',
      'Physiotherapy & Rehab',
      'Holistic Wellness Clinics'
    ],
    clientProfiles: ['Physicians', 'Dentists', 'Clinic owners', 'Therapists'],
    conversionFocus: ['Book Consultation', 'Emergency Call', 'Lab Tests Booking'],
    industryGuidelines: 'Responsible medical information; no unsubstantiated claims or fake outcomes.',
    badgeColor: 'cyan',
    accentColor: '#0891B2'
  },
  {
    code: 'cat-real-estate',
    letter: '4',
    title: 'Real Estate & Property',
    shortTitle: 'Real Estate & Property',
    subcategories: [
      'Property Brokerages',
      'Luxury Residential Launches',
      'Commercial Leasing',
      'Villa & Estate Portfolios'
    ],
    clientProfiles: ['Realtors', 'Developers', 'Property consultants'],
    conversionFocus: ['Schedule Site Visit', 'Brochure Download', 'WhatsApp Agent'],
    industryGuidelines: 'High-resolution architectural photography and verified regulatory disclosures.',
    badgeColor: 'emerald',
    accentColor: '#059669'
  },
  {
    code: 'cat-fashion-clothing',
    letter: '5',
    title: 'Fashion, Boutique & Clothing',
    shortTitle: 'Fashion & Boutique',
    subcategories: [
      'Designer Boutiques',
      'Minimalist Apparel',
      'Bridal Couture',
      'Streetwear & Casuals'
    ],
    clientProfiles: ['Fashion designers', 'Boutique owners', 'Apparel brands'],
    conversionFocus: ['Shop Lookbook', 'Size Guide', 'WhatsApp Tailoring'],
    industryGuidelines: 'Visual editorial aesthetic, size selectors, clean checkout UI.',
    badgeColor: 'rose',
    accentColor: '#E11D48'
  },
  {
    code: 'cat-beauty-spa',
    letter: '6',
    title: 'Salon, Beauty & Spa',
    shortTitle: 'Salon & Spa',
    subcategories: [
      'Hair Salons & Barbers',
      'Luxury Day Spas',
      'Nail Art Studios',
      'Bridal Makeup Studios'
    ],
    clientProfiles: ['Salon owners', 'Spa directors', 'Stylists', 'Estheticians'],
    conversionFocus: ['Book Chair / Stylist', 'Treatment Menu', 'Gift Vouchers'],
    industryGuidelines: 'Soothing palettes, transparent service durations and pricing.',
    badgeColor: 'pink',
    accentColor: '#DB2777'
  },
  {
    code: 'cat-wedding-events',
    letter: '7',
    title: 'Wedding & Event Services',
    shortTitle: 'Weddings & Events',
    subcategories: [
      'Wedding Planners',
      'Cinematography & Photography',
      'Banquet Halls & Venues',
      'Floral & Event Decor'
    ],
    clientProfiles: ['Wedding curators', 'Photographers', 'Banquet managers'],
    conversionFocus: ['Check Date Availability', 'Download Wedding Deck', 'Inquire Quote'],
    industryGuidelines: 'High-emotion visual storytelling and clear package deliverables.',
    badgeColor: 'fuchsia',
    accentColor: '#C026D3'
  },
  {
    code: 'cat-interior-design',
    letter: '8',
    title: 'Interior Design & Architecture',
    shortTitle: 'Interior & Architecture',
    subcategories: [
      'Residential Interior Design',
      'Architectural Studios',
      'Commercial Workplace Design',
      'Modular Kitchens & Living'
    ],
    clientProfiles: ['Architects', 'Interior designers', 'Turnkey fit-out contractors'],
    conversionFocus: ['Book Design Consultation', 'Explore Portfolio', 'Estimate Cost'],
    industryGuidelines: 'Architectural portfolio focus, before/after showcases.',
    badgeColor: 'stone',
    accentColor: '#78716C'
  },
  {
    code: 'cat-construction',
    letter: '9',
    title: 'Construction, Contractors & Building Materials',
    shortTitle: 'Construction & Materials',
    subcategories: [
      'General Civil Contractors',
      'Building Material Suppliers',
      'Structural Engineering',
      'Roofing & Waterproofing'
    ],
    clientProfiles: ['Contractors', 'Builders', 'Building material suppliers'],
    conversionFocus: ['Request Tender Quote', 'Download Capabilities Dossier'],
    industryGuidelines: 'Safety records, project tonnage, verified certifications.',
    badgeColor: 'orange',
    accentColor: '#EA580C'
  },
  {
    code: 'cat-retail-showrooms',
    letter: '10',
    title: 'Retail Shops & Product Showrooms',
    shortTitle: 'Retail & Showrooms',
    subcategories: [
      'Home Appliances & Electronics',
      'Hardware & Sanitaryware',
      'Eyewear & Optical Studios',
      'Luxury Furniture Showrooms'
    ],
    clientProfiles: ['Showroom owners', 'Retail store managers', 'Distributors'],
    conversionFocus: ['Locate Store', 'Check In-Stock Inventory', 'WhatsApp Inquiries'],
    industryGuidelines: 'Showroom virtual tour, brand warranty information.',
    badgeColor: 'yellow',
    accentColor: '#CA8A04'
  },
  {
    code: 'cat-fitness-sports',
    letter: '11',
    title: 'Gym, Fitness & Sports',
    shortTitle: 'Gym & Fitness',
    subcategories: [
      'CrossFit & Strength Gyms',
      'Yoga & Pilates Studios',
      'Martial Arts & Boxing Academies',
      'Personal Training Studios'
    ],
    clientProfiles: ['Gym owners', 'Fitness coaches', 'Yoga instructors'],
    conversionFocus: ['Book Free Trial Session', 'Membership Plans', 'Trainer Bio'],
    industryGuidelines: 'Equipment breakdown, trainer certifications, class schedules.',
    badgeColor: 'red',
    accentColor: '#DC2626'
  },
  {
    code: 'cat-travel-tourism',
    letter: '12',
    title: 'Travel, Tourism & Hotels',
    shortTitle: 'Travel & Hotels',
    subcategories: [
      'Boutique Hotels & Resorts',
      'Holiday Package Curators',
      'Adventure & Trekking Tours',
      'Experiential Local Tours'
    ],
    clientProfiles: ['Travel operators', 'Hoteliers', 'Tour guides'],
    conversionFocus: ['Request Tailored Itinerary', 'Check Batch Dates', 'WhatsApp Specialist'],
    industryGuidelines: 'Detailed day-by-day itineraries, transparent inclusions/exclusions.',
    badgeColor: 'teal',
    accentColor: '#0D9488'
  },
  {
    code: 'cat-professional-services',
    letter: '13',
    title: 'Professional Services & Consultants',
    shortTitle: 'Professional Services',
    subcategories: [
      'Corporate Legal Advocates',
      'Chartered Accountants & Auditors',
      'Business Strategy Consultants',
      'Financial Wealth Advisors'
    ],
    clientProfiles: ['Lawyers', 'Chartered accountants', 'Management consultants'],
    conversionFocus: ['Confidential Consultation', 'Schedule Strategy Call', 'Tax Calculator'],
    industryGuidelines: 'Strict compliance: No fabricated credentials, licenses, or legal guarantees.',
    badgeColor: 'slate',
    accentColor: '#475569'
  },
  {
    code: 'cat-automotive-garage',
    letter: '14',
    title: 'Automobile, Garage & Vehicle Services',
    shortTitle: 'Automobile & Garage',
    subcategories: [
      'Certified Pre-Owned Dealerships',
      'Multi-Brand Auto Repair Garages',
      'Car Detailing & Ceramic Studios',
      'Towing & Roadside Assistance'
    ],
    clientProfiles: ['Auto garage owners', 'Car dealers', 'Detailing specialists'],
    conversionFocus: ['Book Service Slot', 'Get Repair Estimate', 'Emergency Breakdown Call'],
    industryGuidelines: 'Transparent labor pricing, multi-point inspection disclosure.',
    badgeColor: 'blue',
    accentColor: '#2563EB'
  },
  {
    code: 'cat-manufacturing-b2b',
    letter: '15',
    title: 'Manufacturing, Wholesale & Industrial B2B',
    shortTitle: 'Manufacturing & B2B',
    subcategories: [
      'Precision CNC & Machining',
      'Industrial Machinery & Tools',
      'Export-Import Commodity Houses',
      'Solar & Energy EPC'
    ],
    clientProfiles: ['Factory directors', 'Industrial exporters', 'Machinery suppliers'],
    conversionFocus: ['Submit RFQ for Quote', 'Download CAD/Datasheets', 'ISO Verification'],
    industryGuidelines: 'Comprehensive technical specifications, ISO quality standards.',
    badgeColor: 'violet',
    accentColor: '#7C3AED'
  },
  {
    code: 'cat-digital-it-saas',
    letter: '16',
    title: 'Digital Agencies, IT & SaaS',
    shortTitle: 'Digital & IT',
    subcategories: [
      'Software & App Development',
      'Growth & Performance Marketing',
      'Cloud Architecture & DevOps',
      'UI/UX Design Studios'
    ],
    clientProfiles: ['Agency founders', 'Software houses', 'Product studios'],
    conversionFocus: ['Request Free Audit', 'Calculate Growth ROI', 'Book Discovery Call'],
    industryGuidelines: 'Measurable case studies, tech stack credibility.',
    badgeColor: 'purple',
    accentColor: '#9333EA'
  },
  {
    code: 'cat-recruitment-jobs',
    letter: '17',
    title: 'Recruitment, Jobs & Immigration Consulting',
    shortTitle: 'Recruitment & Jobs',
    subcategories: [
      'Executive Search & Headhunting',
      'Staffing & Manpower Solutions',
      'Overseas Education & Visa Consultants',
      'Immigration Advisors'
    ],
    clientProfiles: ['Recruitment directors', 'Visa advisors', 'HR firms'],
    conversionFocus: ['Submit Resume', 'Post Job Requirement', 'Book Visa Evaluation'],
    industryGuidelines: 'Verified licensing, privacy compliance.',
    badgeColor: 'sky',
    accentColor: '#0284C7'
  },
  {
    code: 'cat-home-services',
    letter: '18',
    title: 'Home Services & Repair',
    shortTitle: 'Home Services & Repair',
    subcategories: [
      'AC & Appliance Repair',
      'Deep House Cleaning',
      'Electrical & Master Plumbing',
      'Packers & Movers'
    ],
    clientProfiles: ['Repair technicians', 'Cleaning services', 'Packers and movers'],
    conversionFocus: ['Click-to-Call Now', 'Book Same-Day Slot', 'WhatsApp Quick Quote'],
    industryGuidelines: 'Prominent click-to-call, service areas, clear guarantees.',
    badgeColor: 'orange',
    accentColor: '#EA580C'
  },
  {
    code: 'cat-jewellery-d2c',
    letter: '19',
    title: 'Jewellery, Gifts & D2C Brands',
    shortTitle: 'Jewellery & D2C',
    subcategories: [
      'Fine Gold & Diamond Jewellery',
      'Silver Artisan Jewellery',
      'Luxury Gift Boxes & Hampers',
      'Handcrafted D2C Accessories'
    ],
    clientProfiles: ['Jewellers', 'Gifting brands', 'Artisans'],
    conversionFocus: ['Virtual Concierge Call', 'Custom Ring Builder', 'WhatsApp Inquiries'],
    industryGuidelines: 'Hallmark authenticity, insured delivery guarantees.',
    badgeColor: 'amber',
    accentColor: '#B45309'
  },
  {
    code: 'cat-ngo-community',
    letter: '20',
    title: 'NGOs, Community & Social Organisations',
    shortTitle: 'NGO & Social Causes',
    subcategories: [
      'Child Education Foundations',
      'Animal Welfare & Shelters',
      'Environmental Conservation',
      'Community Health Initiatives'
    ],
    clientProfiles: ['Trustees', 'Foundation founders', 'Social activists'],
    conversionFocus: ['Donate Now', 'Volunteer Registration', 'Annual Impact Report'],
    industryGuidelines: 'Transparent financial accountability and genuine impact metrics.',
    badgeColor: 'emerald',
    accentColor: '#047857'
  },
  {
    code: 'cat-photography',
    letter: '21',
    title: 'Photography, Studio & Cinematography',
    shortTitle: 'Photography',
    subcategories: [
      'Wedding Photography',
      'Pre-Wedding Photography',
      'Cinematography & Films',
      'Destination Weddings',
      'Candid & Portrait Studios'
    ],
    clientProfiles: ['Wedding photographers', 'Cinematographers', 'Studio owners', 'Visual artists'],
    conversionFocus: ['Check Date Availability', 'Explore Portfolio', 'Inquire Quote', 'Book Shoot'],
    industryGuidelines: 'High-emotion visual storytelling, transparent packages, cinematic image galleries, and responsive booking.',
    badgeColor: 'violet',
    accentColor: '#7C3AED'
  }
];

