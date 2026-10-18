import React, { useState, useEffect, useMemo } from 'react';
import { TEMPLATE_MANIFEST } from '../registry/template-manifest';
import { BUSINESS_CATEGORIES } from '../categories/categories.data';
import { TemplateManifestItem, ReferenceType } from '../types/template.types';
import { TemplateLoader } from '../registry/template-loader';
import { TemplateCard } from './components/TemplateCard';
import { TemplateDetailModal } from './components/TemplateDetailModal';
import { ReferenceIntakeModal } from './components/ReferenceIntakeModal';
import { CategoryExplorer } from './components/CategoryExplorer';
import { IntegrationBridge } from './components/IntegrationBridge';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Minimize2,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  PlusCircle,
  FolderSync,
  BookOpen,
  ArrowRight,
  Database,
  Terminal,
  Grid3X3,
  List
} from 'lucide-react';

export default function RaozDemoFactoryApp() {
  const [templates, setTemplates] = useState<TemplateManifestItem[]>(TEMPLATE_MANIFEST);
  const [activeTab, setActiveTab] = useState<'catalog' | 'preview' | 'categories' | 'intake' | 'integration' | 'rules'>('catalog');
  const snuItem = templates.find((t) => t.id === 'shiv-nadar-university');
  const christItem = templates.find((t) => t.id === 'christ-university');
  const nirmaItem = templates.find((t) => t.id === 'nirma-university');
  const sushantItem = templates.find((t) => t.id === 'sushant-university');
  const eduTechItem = templates.find((t) => t.id === 'edu-tech-university');
  const crRamansItem = templates.find((t) => t.id === 'cr-ramans-university');
  const marangoniItem = templates.find((t) => t.id === 'istituto-marangoni');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateManifestItem>(snuItem || christItem || nirmaItem || sushantItem || eduTechItem || crRamansItem || marangoniItem || templates[0]);
  const [detailModalTemplate, setDetailModalTemplate] = useState<TemplateManifestItem | null>(null);
  const [intakeModalTemplate, setIntakeModalTemplate] = useState<TemplateManifestItem | null>(null);
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [selectedBatchFilter, setSelectedBatchFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Previewer device viewport
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullScreenPreview, setIsFullScreenPreview] = useState(false);

  // Reference Queue state
  const [referenceQueue, setReferenceQueue] = useState<Array<{
    id: string;
    templateId: string;
    refType: ReferenceType;
    urlOrTitle: string;
    notes: string;
    clientNeeds: string;
    submittedAt: string;
  }>>([
    {
      id: 'ref-snu-28',
      templateId: 'shiv-nadar-university',
      refType: 'zip',
      urlOrTitle: 'Shiv Nadar University (saveweb2zip-com-snu-edu-in.zip / https://snu.edu.in/home/)',
      notes: 'Prestigious Institution of Eminence (IoE) Deemed to be University recognized by the Govt. of India and NIRF Top 60 ranked institution for 8 consecutive years. Founded in 2011 by the Shiv Nadar Foundation. Features a 286-acre residential campus in Greater Noida, 5 Academic Schools, flagship OUR (Opportunities for Undergraduate Research) grant program, Atal Incubation Centre (AIC-SNU), Olympic-standard 400,000 sq ft Indoor Sports Complex, ₹58.09 LPA highest placements (Google, DE Shaw, Amazon), and full admissions 2026-27 portal with SNUSAT & APT guidelines. Added as Template #28 under Universities category.',
      clientNeeds: 'Complete faithful website recreation of Shiv Nadar University from uploaded archive: IoE recognition branding, official university crest with "Education for Life", 5-slide hero carousel (IoE Campus, OUR Undergraduate Research, ₹58.09 LPA Placements, SNUSAT Admissions 2026, Breeze Techno-Cultural Fest), interactive Program Finder with curriculum details across all 5 schools (Engineering with ASU Dual Degree, Natural Sciences, Humanities, Management, ACE), Admissions 2026 portal with live merit scholarship waiver calculator up to 100%, fast-track application profile desk, OUR research metrics with ₹350+ Cr funding, 400k sq ft sports complex highlights, Breeze festival showcase, CDC career placement directory, interactive FAQ accordion, transport shuttle guide, and live catalog counter displaying 28 websites.',
      submittedAt: '2026-10-17'
    },
    {
      id: 'ref-christ-27',
      templateId: 'christ-university',
      refType: 'zip',
      urlOrTitle: 'CHRIST University (saveweb2zip-com-www-christuniversity-in.zip / https://www.christuniversity.in/)',
      notes: 'Premier NAAC Grade "A+" Accredited Deemed to be University and Top 60 NIRF Ranked Institution founded in 1969 by the Carmelites of Mary Immaculate (CMI). Features 6 modern campuses across Bangalore, Delhi NCR, and Pune Lavasa, 9 academic schools, CUET entrance test simulator, ₹21.46 LPA highest placement, and vibrant collegiate festivals In-Bloom and Bhasha Utsav. Added as Template #27 under Universities category.',
      clientNeeds: 'Complete website recreation from the uploaded CHRIST University archive: official heraldic shield branding with Latin cross and motto "Excellence and Service", statutory recognition disclosures (Section 3 UGC Act 1956, NAAC Grade A+ 4th Cycle, NIRF Top 60, BCI, COA), 5-slide full-bleed hero carousel (Excellence & Service, 6 Campuses Network, CUET Admissions 2026, Global Placements ₹21.46 LPA, In-Bloom Cultural Extravaganza), 9 specialized academic schools directory, comprehensive degree courses finder (BBA Honours, MBA, BA LLB Hons, BCom Finance & Accountancy, BTech CSE AI/ML, BSc Data Science, MSc Clinical Psychology, BArch) with live search and curriculum modal, placement powerhouse showcasing ₹21.46 LPA highest package with 450+ recruiters, multi-campus explorer across all 6 locations, online admissions application desk with real-time field validation and generated CU-2026-XXXXX tracking reference, application status lookup tool, verified alumni career voices, expandable FAQ accordion, and comprehensive institutional footer.',
      submittedAt: '2026-10-17'
    },
    {
      id: 'ref-nirma-26',
      templateId: 'nirma-university',
      refType: 'zip',
      urlOrTitle: 'Nirma University (saveweb2zip-com-nirmauni-ac-in.zip / https://nirmauni.ac.in/)',
      notes: 'Premier Multidisciplinary University & Centre of Excellence on S.G. Highway, Ahmedabad. Established in 2003 under NERF by Dr. Karsanbhai K. Patel. Accredited NAAC Grade "A+" (3.65 CGPA) and conferred "Centre of Excellence" status by the Government of Gujarat. Top NIRF standings across Architecture (#29), Pharmacy (#32), Law (#33), Management (#53), and Engineering. Added as Template #26 under Universities category.',
      clientNeeds: 'Complete website recreation from the uploaded Nirma University archive: authentic heraldic flame crest branding with Sanskrit motto "तमसो मा ज्योतिर्गमय", statutory recognition disclosures (UGC 2(f), NAAC A+ 3.65 CGPA, Centre of Excellence Govt. of Gujarat, AICTE, BCI, PCI, COA), 5-slide full-bleed hero carousel (Centre of Excellence, ₹72.04 LPA placements milestone, AICTE IDEA & Tech Labs, 115-acre smart campus, Admissions 2026), 8 specialized institutes directory (IT-NU, IM-NU, IP-NU, IL-NU, IAP-NU, IS-NU, IC-NU, ID-NU), comprehensive degree courses finder (B.Tech CSE/ECE/AIML, MBA, Integrated BBA-MBA, BA LL.B Hons, B.Arch, B.Pharm, M.Sc Biotech) with live search and curriculum modal, placement powerhouse showcasing ₹72.04 LPA highest package with 300+ recruiters, 115-acre smart green campus tour simulator, interactive Merit Scholarship Calculator estimating up to 100% tuition waivers, direct online admissions application desk with real-time field validation and generated NU-2026-XXXXXX tracking reference, application status lookup tool, verified student placement voices, expandable FAQ accordion, and comprehensive institutional footer.',
      submittedAt: '2026-10-17'
    },
    {
      id: 'ref-sushant-25',
      templateId: 'sushant-university',
      refType: 'zip',
      urlOrTitle: 'Sushant University (saveweb2zip-com-sushantuniversity-edu-in(1).zip / https://sushantuniversity.edu.in/)',
      notes: 'Premier Multidisciplinary University on Golf Course Road, Gurugram. Renowned for Sushant School of Art & Architecture (SSAA, Ranked #1 in Delhi-NCR since 1989), Vatel Hotel & Tourism Business School France, ₹50 LPA highest placement package, and Haryana Domicile merit scholarships. Added as Template #25 under Universities category.',
      clientNeeds: 'Complete website recreation from the uploaded Sushant University archive: authentic institutional emerald navy & gold heraldic branding, statutory recognition disclosures (Haryana Private Universities Act 2012, UGC, COA, BCI, PCI), 5-slide full-bleed hero carousel (SSAA 35-year architecture legacy, ₹50 LPA placements milestone, international collaborations with Warwick & Vatel, 15-acre lush Gurugram campus, 2026 admissions desk), 8 specialized schools directory (SSAA, SSD, SET, SOB, SOL, SHS, Vatel, SPD), comprehensive degree courses finder (B.Arch, B.Des, B.Tech CSE, MBA, BBA, B.A. LL.B, B.Pharm) with live search and curriculum modal, placement powerhouse showcasing ₹50 LPA highest package with 850+ recruiters, 15-acre smart campus tour, interactive Haryana Domicile & Merit Scholarship Calculator estimating up to 100% tuition waivers, direct online admissions application desk with real-time field validation and generated SU-2026-XXXXXX tracking reference, application status lookup tool, verified alumni career voices, 360° virtual campus tour simulator, expandable FAQ accordion, and comprehensive institutional footer.',
      submittedAt: '2026-10-17'
    },
    {
      id: 'ref-edu-tech-24',
      templateId: 'edu-tech-university',
      refType: 'zip',
      urlOrTitle: 'EDU TECH UNIVERSITY (Recreated from saveweb2zip-com-www-monash-edu.zip / https://www.monash.edu/)',
      notes: 'Premier Australian Global Research Intensive University & Member of Group of Eight (Go8). Ranked #37 in the World by QS and US News, #2 in the World for Pharmacy & Pharmacology, #1 in Australia for Engineering & Technology, and Triple Crown Accredited Business School. Recreated as Template #24 under Universities subcategory.',
      clientNeeds: 'Complete website recreation from the uploaded Monash University archive, official heraldic crest branding with open book, sword, and southern cross stars, statutory Group of Eight and CRICOS 00008C disclosures, 5-slide full-bleed hero carousel ("If you don\'t like the way the world is, Change It", Global Campuses across 4 continents, Research Impact with $480M+ funding, Campus Life with 100+ clubs, and Admissions 2026), four archive feature boxes (International Student Applications, Campus Experience, Design Studio Maker Space, Industry Work-Integrated Learning), ten academic faculties directory (Engineering, IT, Business, Medicine, Pharmacy, Law, Science, Art & Design MADA, Arts, Education), interactive degree courses finder with live search, level/faculty filters and curriculum detail modal, global campuses explorer across 8 locations (Clayton, Caulfield, Parkville, Peninsula, Malaysia, Indonesia, Italy, India), interactive scholarship assessment calculator with merit tiers, direct online admissions application desk with real-time field validation and generated ETU-2026-XXXXXX tracking reference, application status lookup tool, verified alumni career voices, expandable FAQ accordion, 360° virtual campus tour simulator, and comprehensive institutional footer with Acknowledgement of Country.',
      submittedAt: '2026-10-17'
    },
    {
      id: 'ref-cr-ramans-23',
      templateId: 'cr-ramans-university',
      refType: 'zip',
      urlOrTitle: 'CR RAMANS UNIVERSITY (Rebranded from saveweb2zip-com-www-cuchd-in.zip / https://www.cuchd.in/)',
      notes: 'Premier NAAC Grade A+ Accredited University & QS World Ranked #1 Private University in India. Featuring ABET USA accreditation, ₹1.7 Crore highest international placement package, ₹54.75 LPA domestic highest package, 9,124+ offers from 904+ MNCs, 12,000+ patents, and CRUCET 2026 ₹170 Cr merit scholarship portal. Recreated as Template #23 under Universities category.',
      clientNeeds: 'Complete website recreation from the uploaded ZIP archive, official heraldic crest branding, statutory accreditation highlights (NAAC Grade A+ Accredited, QS World Ranked #1 Private in India, NIRF Ranked, ABET USA Engineering Accreditation), 5-slide full-bleed hero carousel (₹1.7 Crore highest package, NAAC A+ & QS rankings, CRUCET 2026 ₹170 Cr scholarships, 12,000+ patents, 200+ acre smart campus), academic programs catalog (B.E. CSE, AI & ML, ECE, ME, MBA, BBA FinTech, BCA, MCA, B.A. LL.B, B.Pharm, B.Sc Biotech, B.Des) with live search and curriculum modal, placement powerhouse showcasing ₹1.7 Crore international package with 904+ Fortune 500 recruiters, 30+ industry Centers of Excellence (IBM Software Lab, Microsoft Innovation Center, Hyundai Powertrain, Intel IoT, Cisco Academy), 200+ acre campus facilities with 2,000+ seater convention auditorium and automated digital library, online admissions application desk with real-time field validation and generated CRU-2026-XXXXXX tracking reference, verified alumni career voices at Microsoft and AWS, and comprehensive institutional footer with UGC compliance disclosures.',
      submittedAt: '2026-10-16'
    },
    {
      id: 'ref-marangoni-22',
      templateId: 'istituto-marangoni',
      refType: 'zip',
      urlOrTitle: 'Istituto Marangoni (saveweb2zip-com-www-istitutomarangoni-com.zip / https://www.istitutomarangoni.com/en)',
      notes: 'Premier International Fashion, Art & Design Higher Education Academy (Founded in Milan 1935). Accredited by Italian Ministry of University and Research (MUR - AFAM, 180 ECTS First Level Academic Diplomas), Manchester Metropolitan University, and French RNCP Level 7. Ranked in QS World Top 100 Art & Design. Integrated as Template #22 under Universities category.',
      clientNeeds: 'Faithful website recreation from uploaded ZIP archive: official luxury black, white & gold wordmark crest branding ("ISTITUTO MARANGONI MILANO 1935"), statutory MUR/AFAM accreditation highlights, 5-slide full-bleed hero carousel (90 Years of Italian Luxury Creativity 1935-2025, Open Days 2026, L\'Oréal Professionnel partnership, Metaverso & AI Fashion Atelier, Maze 35 editorial magazine), Four Creative Pillars (Fashion, Design, Art, Fragrances & Cosmetics), interactive degree courses finder (BA Hons, Master\'s, Intensive, Summer) with live search and curriculum detail modal, Super Mentors & Alumni spotlight (Olivier Rousteing from Balmain, Giambattista Valli, Alessandro Sartori from Zegna, Domenico Dolce, Moschino), Global Campuses explorer across 8 cities (Milan Fashion & Design, Florence, Paris, London, Dubai, Miami, Mumbai), interactive Merit Scholarship Calculator estimating up to 50% tuition reduction, online admissions application desk with real-time field validation and generated IM-2026-XXXXXX tracking reference, 89% placement rate with 400+ luxury recruiters (Gucci, Prada, Dior, Balmain, Cartier, LVMH), Maze 35 article reader modal, and comprehensive institutional footer with campus directories.',
      submittedAt: '2026-10-16'
    },
    {
      id: 'ref-gilgit-21',
      templateId: 'gilgit',
      refType: 'zip',
      urlOrTitle: 'Gilgit (Rebranded from saveweb2zip-com-www-glbitm-org.zip / https://www.glbitm.org/)',
      notes: 'Premier Technical Institute & Engineering University Campus (GLBITM Rebranded). Approved by AICTE, Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU Code: 192), NBA & NAAC Accredited. Recreated as Template #21 under Universities category.',
      clientNeeds: 'Complete website recreation from the uploaded ZIP archive, official royal navy blue and gold crest branding, statutory accreditation highlights (AICTE Approved, AKTU Code 192, NBA Accredited B.Tech programs, NAAC Grade A, NIRF ranked engineering band), 4-slide full-bleed hero carousel (₹58 LPA highest placement package, NBA/NAAC accreditations, Centers of Excellence, 15+ acre Knowledge Park campus), academic programs catalog (B.Tech CSE, AI & ML, Data Science, IT, ECE, ME, MBA, MCA) with live search and curriculum breakdown modal, placement powerhouse showcasing ₹58 LPA highest package with 300+ recruiters, industry Centers of Excellence (Apple Authorized iOS Lab, Dassault Systèmes 3DEXPERIENCE, MSME Incubator, Intel IoT), 15+ acre campus facilities with 1,000+ seater central AC auditorium and automated digital library, online admissions application desk with real-time field validation and generated tracking reference, verified alumni career voices, and comprehensive institutional footer with AICTE compliance disclosures.',
      submittedAt: '2026-10-16'
    },
    {
      id: 'ref-arshad-univ-20',
      templateId: 'arshad-university',
      refType: 'zip',
      urlOrTitle: 'Arshad University (Rebranded from saveweb2zip-com-www-lpu-in.zip / https://www.lpu.in/)',
      notes: 'Major Comprehensive Multi-Disciplinary University with NAAC A++ (3.68/4) & NIRF #27 in all Indian Universities. Rebranded from the uploaded LPU archive as Template #20 under Universities & Research Institutes category.',
      clientNeeds: 'Complete website recreation from the uploaded ZIP archive, authentic saffron and dark charcoal crest branding, government accreditation highlights (NAAC A++ with 3.68 score, NIRF #27 Overall, THE World Top 100 Impact, WURI #1 in India for Innovation, MAKA National Sports Trophy), 5-slide full-bleed hero carousel (PM Narendra Modi Science Congress address, NAAC A++, NIRF #27, ₹3 Crore Placements, MAKA Trophy), 150+ academic programs catalog (B.Tech CSE, AI & Data Science, MBA, BCA, B.A. LL.B Hons, B.Pharm, B.Sc. Agriculture, B.Des Fashion) with live search and curriculum breakdown modal, record ₹3 Crore international highest placement showcase, 360° virtual campus tour simulator, world leaders and Nobel laureates archive (PM Narendra Modi, Dalai Lama, Liz Truss, Tony Abbott, Hamid Karzai, Thomas Südhof, Avram Hershko, Neeraj Chopra), AUNEST 2026 interactive scholarship calculator with merit tiers, online admissions application form with field validation and reference tracking generator, student/alumni voices at Google and Amazon, and comprehensive institutional footer with UGC compliance disclosures.',
      submittedAt: '2026-10-15'
    },
    {
      id: 'ref-sp-jain-19',
      templateId: 'sp-jain',
      refType: 'zip',
      urlOrTitle: 'S P Jain School of Global Management (saveweb2zip-com-www-spjain-org.zip / https://www.spjain.org/)',
      notes: 'Premier Australian Global Business School with campuses in Dubai, Mumbai, Singapore, and Sydney. Ranked #7 in Asia-Pacific by Bloomberg Businessweek. Recreated as Template #19 under the Jr College category.',
      clientNeeds: 'Complete website recreation from the uploaded ZIP archive, authentic maroon and gold heraldic crest branding, top ranking accolade ribbon (Bloomberg #7, Forbes Top 15), 3-slide hero carousel (Rankings, Tri-City Immersion, ELO AI-Tutor), 6 core institutional pillars with custom vector icons, 4 global campuses interactive explorer (Dubai, Singapore, Sydney, Mumbai), degree programmes catalog (BBA, BDS, Global MBA, MGB, MAIB, EMBA) with interactive curriculum modals, ELO virtual classroom and AI-Tutor technology showcase, admissions application form with field validation and reference tracking generator, verified news and student achievements (Gauri Menaria PRME leader), alumni testimonials, and comprehensive institutional footer with TEQSA and CRICOS disclosures.',
      submittedAt: '2026-10-15'
    },
    {
      id: 'ref-rao-college-18',
      templateId: 'rao-college',
      refType: 'zip',
      urlOrTitle: 'RAO COLLEGE (Rebranded from https://www.amity.edu/ archive)',
      notes: 'Premier Higher Education College & Academic Institution with the motto "Learn Today. Lead Tomorrow." Recreated as Template #18 (rao-college / rao-college-demo).',
      clientNeeds: 'Complete website transformation and institutional rebranding into RAO COLLEGE, original heraldic crest logo in navy & gold, responsive mobile navigation, 3-slide hero gallery carousel with campus architecture, 6-program degree catalogue (BCA, BBA, B.Com Hons, BA JMC, B.Sc. Data Science, MBA) with curriculum details modals, interactive admissions application form with field validation & demo tracking reference generation, campus life facilities with high-res photography, corporate placement cell with recruiter directory, student testimonials, events & conclaves calendar, expandable FAQ accordion, and full contact directory.',
      submittedAt: '2026-10-13'
    },
    {
      id: 'ref-iiser-pune-17',
      templateId: 'iiser-pune',
      refType: 'zip',
      urlOrTitle: 'IISER Pune — Indian Institute of Science Education and Research Pune (https://www.iiserpune.ac.in/)',
      notes: 'Premier Institute of National Importance dedicated to research and teaching in basic sciences. Recreated as Template #17 (iiser-pune-homepage-demo).',
      clientNeeds: 'Complete website recreation, institutional bilingual branding, working Search modal with live query filtering, dual English/Hindi language toggle, accessibility contrast mode and A-/A/A+ text sizing, full-bleed 5-slide hero gallery carousel with NASI/CNR Rao/IBRO/CRS awards, horizontal scrolling 8-item news cards carousel with story reader modal, 6 institutional focus tiles with interactive detail modals, 8 interdisciplinary departments explorer, BS-MS/MSc/PhD admissions roadmap, interactive mega-menu drawer, and comprehensive footer with verified social media and official address.',
      submittedAt: '2026-10-13'
    },
    {
      id: 'ref-nikhil-kapur-16',
      templateId: 'nikhil-kapur-photography',
      refType: 'zip',
      urlOrTitle: 'Nikhil Kapur Photography (https://www.nikhilkapur.com/)',
      notes: 'Candid Photographer. Filmmaker. Storyteller. Lover of dark chocolate with a side of good stories. Currently residing in Mumbai, India. Recreated as Template #16.',
      clientNeeds: 'Complete website recreation, original Squarespace Brine design system, full-bleed 9-slide hero gallery carousel with authentic Udaipur palace and luxury hotel architecture, verbatim artist statement, 9-item Curated Chronicles real wedding showcase, 4 core editorial photography genres (Product with Food & Jewelry, Wedding, Kids, and Architecture with Heritage, Homes, and Hotels), filterable portfolio with Lightbox, working navigation modals, and verified direct contact details (+91 98200 26166).',
      submittedAt: '2026-10-11'
    },
    {
      id: 'ref-ollar-studios-15',
      templateId: 'ollar-studios',
      refType: 'zip',
      urlOrTitle: 'Ollar Studios (https://ollarstudios.com/)',
      notes: 'Premium Photography & Studio Rentals in Mumbai — 1,800 sq. ft. photo bays, podcast suites & creative productions. Recreated as Template #15.',
      clientNeeds: 'Complete website recreation, hero section with "Premium Photography & Studio Rentals in Mumbai", 1800 sq. ft. Photography Studio rental and soundproof Podcast Studio with multi-mics and 4K cameras, 4 core photography services (Weddings, Pre-wedding, Product, Fashion), Why Chooes Us section, 8-filter work portfolio with Lightbox, verified client testimonials (Priyanka Kanani, Bhavik Devdhar, Tania Shripad, Pranav Pujari), latest blogs, Mulund West studio location, and booking consultation modal.',
      submittedAt: '2026-10-11'
    },
    {
      id: 'ref-shoot-express-14',
      templateId: 'shoot-express',
      refType: 'zip',
      urlOrTitle: 'Shoot Express Photography (https://shootexpress.com/)',
      notes: 'Best Photographer In Mumbai — Professional photography and videography for weddings, events, maternity, family, newborn, food, product, jewellery, interior, fashion, and events. Recreated as Template #14.',
      clientNeeds: 'Complete website recreation, hero section with "Best Photographer In Mumbai", 7,120 functions milestone statistics, all 9 Occasions Covered By Us, 6 Why Choose Us pillars with Powai indoor studio, photography portfolio with high-res Lightbox, 4.9★ Justdial customer reviews, FAQs accordion, 16 Mumbai locations served, and direct contact with working phone (+91 7738111094), email, and WhatsApp.',
      submittedAt: '2026-10-11'
    },
    {
      id: 'ref-snapstories-13',
      templateId: 'snapstories',
      refType: 'zip',
      urlOrTitle: 'SnapStories Photography (https://www.snapstories.in/)',
      notes: 'Wedding Photography, Engagement Photography, Wedding Films and Cinematic Videos — A team with over 15 years of experience preserving emotions, relationships and memories. Led by Aniket Pawar. Recreated as Template #13.',
      clientNeeds: 'Complete website recreation, full-bleed hero banner with signature EB Garamond/Raleway typography, 6 recent wedding work showcases (Janhavi & Kishen, Ankitha & Pranav, Srija & Saiesh, Ruth & Geoffrey, Sanika & Jasdeep, Sneha & Nikhil) with story modals and image lightbox, verbatim About SnapStories narrative, contact section with working phone link (+91 9137698195), Instagram and Cinematic Videos links, disclaimer modal, and WhatsApp concierge.',
      submittedAt: '2026-10-11'
    },
    {
      id: 'ref-true-shades-12',
      templateId: 'true-shades-photography',
      refType: 'zip',
      urlOrTitle: 'True Shades Photography (https://trueshadesphotography.com/)',
      notes: 'One Of The Best Wedding Photographers In Mumbai — Wedding Photography, Candid Photography, Wedding Films, Pre-Wedding Photography and Pre-Wedding Films. Recreated as Template #12.',
      clientNeeds: 'Complete website recreation, original cream aesthetic (#fdfcf7), hero photography slider, intro section with red paint graphic backdrop and decorative lights, featured publication marquee (Times of India, WeddingSutra, Hindustan Times, Mid-Day, Big Fat Indian Wedding), candid photography philosophy, 6 client review cards with lightbox viewer, footer blog guides, contact info, and WhatsApp direct float (+919920144211).',
      submittedAt: '2026-10-11'
    },
    {
      id: 'ref-pk-11',
      templateId: 'pk-photography',
      refType: 'zip',
      urlOrTitle: 'PK Photography (https://pkphotography.in/)',
      notes: 'Wedding Photography & Films in Mumbai & Goa — A studio built around your story. Led by Prabhakar Kumar. Recreated as Template #11.',
      clientNeeds: 'Complete website recreation, dark luxury editorial aesthetic, hero section with 4K video reel playback modal and 4-step workflow, 6 core service disciplines, 32 verified client logos with sector filters, 8-frame curated visual folio with high-res lightbox, transparent studio packages (₹6,00,0 to ₹2,00,000), 5.0★ Google reviews, FAQ accordion, booking consultation modal, and direct WhatsApp float (+91 8888766739).',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-portrait-10',
      templateId: 'the-portrait-company',
      refType: 'zip',
      urlOrTitle: 'The Portrait Company (https://theportraitcompany.in/)',
      notes: 'Professional Photography Studio in Mumbai — Family, Celebrity, Corporate, Couple, Kids, Fashion, Maternity, Boudoir, and Matrimonial Portraits. Recreated as Template #10.',
      clientNeeds: 'Complete website recreation, fullwidth hero slider with Kareena Kapoor Khan celebrity banner, all 9 photography categories with verbatim headings and descriptions, View Portfolio modals, Cherish Your Precious Moments section, Our Partners showcase (Chitraksh, Home Photography, Fashion Folio), Studio Packages, verified client testimonials, click-to-call, mailto, and direct WhatsApp float.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-knots-09',
      templateId: 'knotsbyamp',
      refType: 'zip',
      urlOrTitle: 'KnotsbyAMP (https://www.knotsbyamp.com/)',
      notes: 'Best Wedding Photographers in Mumbai — Beautiful Weddings, Breathtaking Films. Recreated as Template #9.',
      clientNeeds: 'Complete website recreation, dark luxury editorial aesthetic, WeddingSutra 2024 Winners and GIWA awards showcase, Real Wedding Stories filterable by culture & destination, Cinematic Wedding Films with YouTube playback modals, Couple Shoot portfolios, 6 Core Pillars & Team Showcase, Verbatim 5.0★ client reviews, FAQ accordion, Date Availability checker & WhatsApp direct chat.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-gajare-08',
      templateId: 'gajare-photography',
      refType: 'zip',
      urlOrTitle: 'Gajare Photography (https://gajarephotography.com/)',
      notes: 'Best Wedding & Event Photographer in Mumbai — Stories Worth Remembering. Moments Worth Reliving. Recreated as Template #8.',
      clientNeeds: 'Complete website recreation, crossfade hero slider, Google 4.9★ rating badge (500+ reviews), Six Real Wedding stories with deep-dive galleries, filterable portfolio with Lightbox, Instant Photo Booth service showcase (8s prints, QR mobile downloads), "From a Smartphone to Gajare Photography" origin story, FAQ & Pricing guidance, Date availability checker & direct WhatsApp float.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-tell-07',
      templateId: 'tell-a-tale',
      refType: 'zip',
      urlOrTitle: 'Tell-a-Tale Studios (https://tell-a-tale.in/)',
      notes: 'Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage. Recreated as Template #7.',
      clientNeeds: 'Complete website recreation, Corporate & Celebrations portfolios, Food & Product styling, Films, Founders story (Nikhil & Mamta), 4 Core Pillars, Shoot inquiry modal & WhatsApp float.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-photo-06',
      templateId: 'photo-phactory',
      refType: 'zip',
      urlOrTitle: 'Photo Phactory (https://photophactory.in/)',
      notes: 'Crafting Treasures for Life — Real Weddings, Pre-Wedding Romance & Fine Art Cinematography. Recreated as Template #6.',
      clientNeeds: 'Complete website recreation, Revolution Slider 6, 24-item portfolio with filter tabs, Real Wedding stories, Cinematic Video Showcase, Testimonials slider, Milestones, Blog, Contact form & WhatsApp float.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-wedding-05',
      templateId: 'wedding-photo-planet',
      refType: 'zip',
      urlOrTitle: 'Wedding Photo Planet (https://www.weddingphotoplanet.com/)',
      notes: 'Best wedding photographer in Delhi NCR — candid wedding photography, cinematic films, pre-wedding shoots across India.',
      clientNeeds: 'Complete website recreation, 8-slide hero carousel, 52 gallery items with lightbox, 15 client reviews, Why Choose Us, Glimpses, Cinematography, Blog, Contact enquiry form & WhatsApp float.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-colombe-04',
      templateId: 'la-colombe',
      refType: 'zip',
      urlOrTitle: 'La Colombe Coffee Roasters (https://www.lacolombe.com/)',
      notes: "America's premier specialty craft coffee roaster and pioneer of the Draft Latte. Recreated faithfully as Template #4.",
      clientNeeds: 'Complete storefront, signature Corsica/Nizza/Monaco/Fall blends, RTD canned draft lattes, Coffee Club subscription (save 15%), 32+ cafes directory, cart drawer with $40 free shipping meter.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-pho-03',
      templateId: 'pho-cafe',
      refType: 'zip',
      urlOrTitle: 'Pho Cafe UK (saveweb2zip-com-www-phocafe-co-uk.zip / https://www.phocafe.co.uk/)',
      notes: 'Fresh & Healthy Vietnamese street food chain. 98% gluten free, Coeliac UK accredited, 12-hour bone broths.',
      clientNeeds: 'Black rounded pill nav, 45+ UK locations search, Something Pho Everyone food slider, student offers, table booking modal.',
      submittedAt: '2026-10-10'
    },
    {
      id: 'ref-social-02',
      templateId: 'social-offline',
      refType: 'zip',
      urlOrTitle: 'Social Offline (saveweb2zip-com-socialoffline-in.zip / https://socialoffline.in)',
      notes: "India's favourite neighbourhood cafe, high-energy bar & collaborative workspace. Recreated as SOCIAL OFFLINE.",
      clientNeeds: '14 Outlets across 8 cities, Khaana & Peena menu with diet filters, Social Wrks passes, Social Club loyalty tiers, table reservations.',
      submittedAt: '2026-10-09'
    },
    {
      id: 'ref-sazy-01',
      templateId: 'sazy-cafe',
      refType: 'zip',
      urlOrTitle: 'Adachi Restaurant (saveweb2zip-com-adachirestaurant-com.zip)',
      notes: 'Elevated Japanese-inspired cuisine & coffee culture in historic Victorian setting. Recreated as SAZY CAFE.',
      clientNeeds: 'Table reservation modal, curbside takeout bento, private dining buyout, happy hour, editable business placeholders.',
      submittedAt: '2026-10-09'
    }
  ]);

  // 1. Authoritative active unique website counting logic across all categories
  const uniqueActiveWebsites = useMemo(() => {
    const seenIds = new Set<string>();
    return templates.filter((tpl) => {
      if (!tpl || !tpl.id || seenIds.has(tpl.id)) return false;
      seenIds.add(tpl.id);
      return tpl.status === 'completed' || tpl.status === 'verified';
    });
  }, [templates]);

  const totalWebsitesCount = uniqueActiveWebsites.length;

  // Breakdown by key categories (verified dynamically from the same catalog dataset)
  const universitiesList = useMemo(() => {
    return uniqueActiveWebsites.filter(
      (t) =>
        t.subcategory.toLowerCase().includes('universit') ||
        t.name.toLowerCase().includes('universit') ||
        t.id.toLowerCase().includes('universit') ||
        t.id === 'istituto-marangoni'
    );
  }, [uniqueActiveWebsites]);
  const universitiesCount = universitiesList.length;

  const collegesList = useMemo(() => {
    return uniqueActiveWebsites.filter(
      (t) =>
        t.categoryCode === 'cat-education-coaching' &&
        !universitiesList.some((u) => u.id === t.id)
    );
  }, [uniqueActiveWebsites, universitiesList]);
  const collegesCount = collegesList.length;

  const photographyList = useMemo(() => {
    return uniqueActiveWebsites.filter((t) => t.categoryCode === 'cat-photography');
  }, [uniqueActiveWebsites]);
  const photographyCount = photographyList.length;

  const foodList = useMemo(() => {
    return uniqueActiveWebsites.filter((t) => t.categoryCode === 'cat-food-hospitality');
  }, [uniqueActiveWebsites]);
  const foodCount = foodList.length;

  const educationCategoryTotal = universitiesCount + collegesCount;

  // Filtered Templates
  const filteredTemplates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return templates.filter((t) => {
      // 1. Search Query Filter (supports name, id, slug, tagline, business type, category, subcategory, marangoni aliases)
      const matchesSearch =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.businessType.toLowerCase().includes(query) ||
        t.id.toLowerCase().includes(query) ||
        (t.slug ? t.slug.toLowerCase().includes(query) : false) ||
        t.tagline.toLowerCase().includes(query) ||
        t.targetClients.toLowerCase().includes(query) ||
        t.categoryName.toLowerCase().includes(query) ||
        t.subcategory.toLowerCase().includes(query) ||
        (query.includes('marangoni') && (t.id.includes('marangoni') || t.name.toLowerCase().includes('marangoni'))) ||
        (query.includes('istituto') && (t.id.includes('marangoni') || t.name.toLowerCase().includes('istituto'))) ||
        (query === 'snu' && (t.id === 'shiv-nadar-university' || t.name.toLowerCase().includes('shiv nadar'))) ||
        (query === 'universities' && (t.subcategory.toLowerCase().includes('universit') || t.id === 'istituto-marangoni'));

      // 2. Category & Subcategory Filter
      let matchesCategory = false;
      if (selectedCategoryFilter === 'all') {
        matchesCategory = true;
      } else if (selectedCategoryFilter === 'universities' || selectedCategoryFilter === 'Universities') {
        matchesCategory =
          t.subcategory.toLowerCase().includes('universit') ||
          t.name.toLowerCase().includes('universit') ||
          t.id.toLowerCase().includes('universit') ||
          t.id === 'istituto-marangoni' ||
          t.businessType.toLowerCase().includes('universit') ||
          t.targetClients.toLowerCase().includes('universit');
      } else if (selectedCategoryFilter === 'colleges') {
        matchesCategory =
          t.categoryCode === 'cat-education-coaching' &&
          !t.subcategory.toLowerCase().includes('universit') &&
          t.id !== 'istituto-marangoni';
      } else {
        matchesCategory =
          t.categoryCode === selectedCategoryFilter ||
          t.subcategory.toLowerCase() === selectedCategoryFilter.toLowerCase();
      }

      // 3. Status Filter
      const matchesStatus =
        selectedStatusFilter === 'all' ||
        (selectedStatusFilter === 'completed' && (t.status === 'completed' || t.status === 'verified')) ||
        (selectedStatusFilter === 'planned' && t.status === 'planned');

      // 4. Batch Filter
      const templateBatch = t.batch || (
        t.numericId <= 3 ? 1 :
        t.numericId <= 6 ? 2 :
        t.numericId <= 9 ? 3 :
        t.numericId <= 12 ? 4 :
        t.numericId <= 15 ? 5 :
        t.numericId <= 18 ? 6 :
        t.numericId <= 24 ? 7 : 8
      );
      const matchesBatch = selectedBatchFilter === 'all' || templateBatch.toString() === selectedBatchFilter;

      return matchesSearch && matchesCategory && matchesStatus && matchesBatch;
    });
  }, [templates, searchQuery, selectedCategoryFilter, selectedStatusFilter, selectedBatchFilter]);

  // Support direct route access (e.g. /website/tell-a-tale-studios) and browser navigation
  useEffect(() => {
    const handleUrlRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const match = path.match(/\/website\/([a-z0-9-]+)/);
      if (match) {
        let slug = match[1];
        if (slug === 'tell-a-tale-studios') slug = 'tell-a-tale';
        const found = templates.find(
          (t) => t.id === slug || t.id.replace(/-/g, '') === slug.replace(/-/g, '')
        );
        if (found) {
          setSelectedTemplate(found);
          const searchParams = new URLSearchParams(window.location.search);
          if (searchParams.get('action') === 'specs') {
            setDetailModalTemplate(found);
          } else {
            setActiveTab('preview');
          }
        }
      }
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    return () => window.removeEventListener('popstate', handleUrlRoute);
  }, [templates]);

  const handleLaunchPreview = (tpl: TemplateManifestItem) => {
    setSelectedTemplate(tpl);
    setActiveTab('preview');
    const slug = tpl.id === 'tell-a-tale' ? 'tell-a-tale-studios' : tpl.id;
    window.history.pushState(null, '', `/website/${slug}`);
  };

  const handleInspect = (tpl: TemplateManifestItem) => {
    setDetailModalTemplate(tpl);
    const slug = tpl.id === 'tell-a-tale' ? 'tell-a-tale-studios' : tpl.id;
    window.history.pushState(null, '', `/website/${slug}?action=specs`);
  };

  const handleOpenIntake = (tpl: TemplateManifestItem) => {
    setIntakeModalTemplate(tpl);
    setIsIntakeModalOpen(true);
  };

  const handleReferenceSubmit = (data: {
    templateId: string;
    refType: ReferenceType;
    urlOrTitle: string;
    notes: string;
    clientNeeds: string;
  }) => {
    setReferenceQueue((prev) => [
      {
        id: `ref-${Date.now()}`,
        ...data,
        submittedAt: new Date().toISOString().split('T')[0]
      },
      ...prev
    ]);

    // Update template manifest item reference in memory
    setTemplates((prev) =>
      prev.map((item) => {
        if (item.id === data.templateId) {
          return {
            ...item,
            status: item.status === 'completed' ? 'completed' : 'in-progress',
            referenceSource: {
              type: data.refType,
              title: data.urlOrTitle,
              notes: data.notes,
              receivedAt: new Date().toISOString().split('T')[0]
            }
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f1f3f7] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Protocol Banner */}
      <div className="bg-[#10131c] border-b border-[#1f2536] px-4 sm:px-6 py-2.5 text-xs text-[#94a3b8] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Independent Architecture
          </span>
          <span className="text-[#333f56]">|</span>
          <span className="hidden sm:inline text-[#cbd5e1]">
            Raoz Website Maker Target Bridge (82+ Existing Templates Unaltered)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800 text-amber-300 font-mono text-[11px]">
            Fresh Collection Active · SAZY CAFE (#1) · SOCIAL OFFLINE (#2) · PHO CAFE (#3) · LA COLOMBE (#4) · WEDDING PHOTO PLANET (#5)
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1e2330] border border-[#2d374d] text-[#cbd5e1] text-[11px]">
            Auto-Deploy Disabled
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-[#1f2536] bg-[#0c0e15]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('catalog')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">RAOZ DEMO FACTORY</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 uppercase">
                  v1.0
                </span>
              </div>
              <p className="text-xs text-[#8a98b0]">
                Website Template Factory for Popular Business Categories
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141824] p-1 rounded-xl border border-[#222a3d] text-xs font-medium">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'catalog' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Demo Collection ({totalWebsitesCount})
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'preview' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Live Demo Frame
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'categories' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              {BUSINESS_CATEGORIES.length} Business Categories
            </button>
            <button
              onClick={() => setActiveTab('intake')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'intake' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Reference Intake ({referenceQueue.length})
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'integration' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Integration Bridge
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'rules' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Architecture Rules
            </button>
          </nav>

          {/* Quick Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const nextPlanned = templates.find((t) => t.status === 'planned');
                if (nextPlanned) {
                  handleOpenIntake(nextPlanned);
                } else {
                  handleOpenIntake(templates[0]);
                }
              }}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Queue Next Reference</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden px-4 py-2 border-t border-[#1f2536] flex items-center overflow-x-auto gap-2 text-xs">
          {[
            { id: 'catalog', label: `Manifest (${totalWebsitesCount})` },
            { id: 'preview', label: 'Demo Preview' },
            { id: 'categories', label: `Categories (${BUSINESS_CATEGORIES.length})` },
            { id: 'intake', label: `Intake (${referenceQueue.length})` },
            { id: 'integration', label: 'Integration' },
            { id: 'rules', label: 'Rules' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1 rounded-lg shrink-0 ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-[#94a3b8] bg-[#141824]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* TAB 1: TEMPLATE MANIFEST & CATALOG */}
        {activeTab === 'catalog' && (
          <div className="space-y-6">
            {/* PROMINENT LIVE TOTAL WEBSITE COUNTER SECTION */}
            <div className="bg-gradient-to-r from-[#111728] via-[#151d33] to-[#101626] border-2 border-blue-500/50 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-blue-950/50 relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/25 border border-blue-400/50 flex items-center justify-center text-blue-400 shrink-0 shadow-lg shadow-blue-900/40">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-950/90 border border-blue-600/50 text-[11px] font-mono font-semibold text-blue-300 tracking-wider uppercase mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Authoritative Live Catalog
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-3">
                      <span>TOTAL WEBSITES:</span>
                      <span className="text-blue-400 font-mono underline decoration-blue-500/70 decoration-2 underline-offset-4">
                        {totalWebsitesCount}
                      </span>
                    </div>
                    <p className="text-xs text-[#94a3b8] mt-1.5 max-w-2xl leading-relaxed">
                      Counting all {totalWebsitesCount} registered, unique active website demos across all business categories — dynamically synced with the template manifest and verified live in the Raoz Website Maker catalog (including Nirma University under Universities).
                    </p>
                  </div>
                </div>

                {/* Live Category Breakdown Badges */}
                <div className="flex flex-wrap items-center gap-2 bg-[#0c101a]/90 border border-[#1e273c] p-3 rounded-xl">
                  <button
                    onClick={() => setSelectedCategoryFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategoryFilter === 'all'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#151c2a] text-[#94a3b8] hover:text-white border border-[#222e44]'
                    }`}
                  >
                    All Categories: {totalWebsitesCount}
                  </button>

                  <button
                    onClick={() => setSelectedCategoryFilter('universities')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedCategoryFilter === 'universities'
                        ? 'bg-[#d4af37] text-black shadow-md font-bold'
                        : 'bg-[#151c2a] text-[#d4af37] hover:text-white border border-[#4a3d1b]'
                    }`}
                  >
                    <span>★ Universities: {universitiesCount}</span>
                  </button>

                  <button
                    onClick={() => setSelectedCategoryFilter('cat-photography')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategoryFilter === 'cat-photography'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#151c2a] text-[#94a3b8] hover:text-white border border-[#222e44]'
                    }`}
                  >
                    Photography: {photographyCount}
                  </button>

                  <button
                    onClick={() => setSelectedCategoryFilter('cat-food-hospitality')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategoryFilter === 'cat-food-hospitality'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#151c2a] text-[#94a3b8] hover:text-white border border-[#222e44]'
                    }`}
                  >
                    Restaurant &amp; Cafe: {foodCount}
                  </button>

                  <button
                    onClick={() => setSelectedCategoryFilter('colleges')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategoryFilter === 'colleges'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#151c2a] text-[#94a3b8] hover:text-white border border-[#222e44]'
                    }`}
                  >
                    Colleges &amp; Research: {collegesCount}
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Factory Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Website Gallery
                </div>
                <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                  <span>{totalWebsitesCount} Demos</span>
                  <span className="text-xs text-emerald-400 font-normal font-mono">
                    {totalWebsitesCount} Live
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Category Spectrum
                </div>
                <div className="text-2xl font-bold text-blue-400 flex items-baseline gap-2">
                  <span>{BUSINESS_CATEGORIES.length} Categories</span>
                  <span className="text-xs text-[#94a3b8] font-normal">Active &amp; Ready</span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Featured University
                </div>
                <div className="text-2xl font-bold text-[#d4af37] flex items-baseline gap-2">
                  <span className="truncate">ISTITUTO MARANGONI</span>
                  <span className="text-xs text-amber-300 font-normal shrink-0">#22</span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Universities Total
                </div>
                <div className="text-2xl font-bold text-indigo-400 flex items-baseline gap-2">
                  <span>{universitiesCount} Universities</span>
                  <span className="text-xs text-[#94a3b8] font-normal">Accredited</span>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by template name (e.g. Istituto Marangoni, Sushant), ID, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#171b24] border border-[#222938] focus:border-blue-500 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#64748b] outline-none transition-colors"
                  />
                </div>

                {/* View Switcher */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#171b24] border border-[#222938] rounded-xl p-1 text-xs">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-lg cursor-pointer ${
                        viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-[#64748b] hover:text-white'
                      }`}
                      title="Grid View"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-lg cursor-pointer ${
                        viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-[#64748b] hover:text-white'
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pill Filters */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1c2230] text-xs">
                {/* Category Dropdown Filter */}
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none font-medium"
                >
                  <option value="all">All Categories ({totalWebsitesCount} Websites)</option>
                  <option value="universities">★ Universities ({universitiesCount} Demos — Marangoni, CR Ramans, Edu Tech, Sushant, Gilgit, Arshad)</option>
                  <option value="cat-photography">Category 21: Photography &amp; Studios ({photographyCount} Demos)</option>
                  <option value="cat-education-coaching">Category 2: Universities, Colleges &amp; Education ({educationCategoryTotal} Demos)</option>
                  <option value="cat-food-hospitality">Category 1: Restaurant, Cafe &amp; Food Business ({foodCount} Demos)</option>
                  {BUSINESS_CATEGORIES.filter(cat => cat.code !== 'cat-photography' && cat.code !== 'cat-education-coaching' && cat.code !== 'cat-food-hospitality').map((cat) => (
                    <option key={cat.code} value={cat.code}>
                      Category {cat.letter}: {cat.title} ({templates.filter((t) => t.categoryCode === cat.code).length} Demos)
                    </option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed & Live Demo</option>
                  <option value="planned">Planned (Awaiting Reference)</option>
                </select>

                {/* Batch Filter */}
                <select
                  value={selectedBatchFilter}
                  onChange={(e) => setSelectedBatchFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none"
                >
                  <option value="all">All Batches (1–8)</option>
                  <option value="1">Batch 1 (Templates 1-3)</option>
                  <option value="2">Batch 2 (Templates 4-6)</option>
                  <option value="3">Batch 3 (Templates 7-9)</option>
                  <option value="4">Batch 4 (Templates 10-12)</option>
                  <option value="5">Batch 5 (Templates 13-15)</option>
                  <option value="6">Batch 6 (Templates 16-18)</option>
                  <option value="7">Batch 7 (Templates 19-24)</option>
                  <option value="8">Batch 8 (Templates 25-30)</option>
                </select>

                {(searchQuery || selectedCategoryFilter !== 'all' || selectedStatusFilter !== 'all' || selectedBatchFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategoryFilter('all');
                      setSelectedStatusFilter('all');
                      setSelectedBatchFilter('all');
                    }}
                    className="text-xs text-blue-400 hover:underline px-2 py-1 cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}

                <span className="ml-auto text-[11px] text-[#64748b]">
                  Showing {filteredTemplates.length} of {templates.length} templates
                </span>
              </div>
            </div>

            {/* Template Grid or List View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((tpl) => (
                  <TemplateCard
                    key={tpl.id}
                    template={tpl}
                    onPreview={handleLaunchPreview}
                    onInspect={handleInspect}
                    onIntake={handleOpenIntake}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#12141a] border border-[#232733] rounded-2xl overflow-hidden divide-y divide-[#1f2533]">
                {filteredTemplates.map((tpl) => (
                  <div
                    key={tpl.id}
                    className="p-4 hover:bg-[#161a22] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#1e2330] text-blue-400">
                          {tpl.id.toUpperCase()}
                        </span>
                        <span className="font-semibold text-white text-sm">{tpl.name}</span>
                        <span className="text-[#64748b]">·</span>
                        <span className="text-[#94a3b8]">
                          Cat {tpl.categoryLetter} ({tpl.categoryName.split('&')[0].trim()})
                        </span>
                      </div>
                      <p className="text-[#94a3b8] text-xs max-w-2xl">{tpl.tagline}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          tpl.status === 'completed'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-amber-950 text-amber-300 border border-amber-800'
                        }`}
                      >
                        {tpl.status === 'completed' ? 'Live Demo' : `Planned (B${tpl.batch})`}
                      </span>

                      <button
                        onClick={() => handleInspect(tpl)}
                        className="px-3 py-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
                      >
                        Specs
                      </button>

                      {tpl.status === 'completed' ? (
                        <button
                          onClick={() => handleLaunchPreview(tpl)}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
                        >
                          Launch
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenIntake(tpl)}
                          className="px-3 py-1.5 bg-amber-950/40 hover:bg-amber-900/40 text-amber-300 border border-amber-800/40 rounded-lg transition-colors cursor-pointer"
                        >
                          Queue Reference
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LIVE INTERACTIVE PREVIEW FRAME */}
        {activeTab === 'preview' && (
          <div className="space-y-4">
            {/* Preview Toolbar */}
            <div className="bg-[#12141a] border border-[#232733] rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <select
                  value={selectedTemplate.id}
                  onChange={(e) => {
                    const found = templates.find((t) => t.id === e.target.value);
                    if (found) setSelectedTemplate(found);
                  }}
                  className="bg-[#181d28] border border-[#262c3a] text-white text-xs rounded-lg px-3 py-1.5 outline-none font-medium"
                >
                  {templates.map((tpl) => (
                    <option key={tpl.id} value={tpl.id}>
                      {tpl.id.toUpperCase()} — {tpl.name} ({tpl.status === 'completed' ? 'Live' : 'Planned'})
                    </option>
                  ))}
                </select>

                <span className="text-xs text-[#94a3b8] hidden sm:inline">
                  Cat {selectedTemplate.categoryLetter}: {selectedTemplate.categoryName}
                </span>
              </div>

              {/* Viewport Width Controls */}
              <div className="flex items-center gap-1 bg-[#181d28] border border-[#262c3a] rounded-lg p-1 text-xs">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Desktop (100% width)"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'tablet' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Tablet (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Mobile (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Mobile</span>
                </button>
              </div>

              {/* Full-screen & Inspect */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleInspect(selectedTemplate)}
                  className="px-3 py-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Specs
                </button>
                <button
                  onClick={() => setIsFullScreenPreview(!isFullScreenPreview)}
                  className="p-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
                  title={isFullScreenPreview ? 'Exit Full Screen' : 'Full Screen'}
                >
                  {isFullScreenPreview ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Simulated Device Frame Container */}
            <div
              className={`flex justify-center transition-all duration-300 ${
                isFullScreenPreview ? 'fixed inset-0 z-50 bg-black p-4' : 'w-full'
              }`}
            >
              <div
                className={`transition-all duration-300 overflow-hidden rounded-xl border border-[#2d374d] shadow-2xl bg-black ${
                  previewDevice === 'desktop'
                    ? 'w-full'
                    : previewDevice === 'tablet'
                    ? 'w-[768px] max-w-full'
                    : 'w-[375px] max-w-full'
                }`}
                style={{ maxHeight: isFullScreenPreview ? '100vh' : '82vh', overflowY: 'auto' }}
              >
                {/* Device browser bar simulation */}
                <div className="bg-[#181a20] border-b border-[#2a2e38] px-4 py-2 flex items-center justify-between text-xs text-[#8a98b0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-[#101217] px-4 py-0.5 rounded text-[11px] font-mono text-[#cbd5e1] max-w-xs truncate">
                    raoz-factory.local/{selectedTemplate.id}
                  </div>
                  <div className="text-[10px] uppercase font-mono text-[#64748b]">
                    {previewDevice.toUpperCase()}
                  </div>
                </div>

                {/* Actual lazy loaded template */}
                <TemplateLoader
                  template={selectedTemplate}
                  onOpenIntakeModal={() => handleOpenIntake(selectedTemplate)}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORIES A–L */}
        {activeTab === 'categories' && (
          <CategoryExplorer
            templates={templates}
            onSelectCategory={(code) => {
              setSelectedCategoryFilter(code);
              setActiveTab('catalog');
            }}
            onPreviewTemplate={handleLaunchPreview}
            onInspectTemplate={handleInspect}
          />
        )}

        {/* TAB 4: REFERENCE INTAKE & QUEUE */}
        {activeTab === 'intake' && (
          <div className="space-y-6">
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    Reference Ingestion Intake & Queue
                  </h2>
                  <p className="text-xs text-[#94a3b8]">
                    Supply reference website URLs, PDFs, ZIP files, or screenshots. The factory will build high-quality responsive templates in batches of 3–5.
                  </p>
                </div>

                <button
                  onClick={() => {
                    const nextPlanned = templates.find((t) => t.status === 'planned') || templates[0];
                    handleOpenIntake(nextPlanned);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Submit New Reference</span>
                </button>
              </div>

              {/* Reference Workflow Protocol steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs mb-8">
                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-blue-400 mb-1">1. Inspect Reference</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Analyze page structure, visual hierarchy, typography, color palette, navigation & conversion hooks.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-amber-400 mb-1">2. Build Isolated Template</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Develop dedicated component in <code>src/templates/template-XXX/</code> with local assets and sub-routes.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-purple-400 mb-1">3. Responsive & Spec Audit</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Verify 1440px desktop, 768px tablet, 375px mobile, TypeScript compilation, and accessibility.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-emerald-400 mb-1">4. Ready for Raoz Maker</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Register in central manifest with migration spec. Prepared for branch-based integration.
                  </p>
                </div>
              </div>

              {/* Live Intake Queue Table */}
              <div className="border border-[#232733] rounded-xl overflow-hidden">
                <div className="bg-[#171b24] px-4 py-2.5 text-[11px] uppercase tracking-wider text-[#64748b] font-semibold flex items-center justify-between">
                  <span>Logged Reference Jobs ({referenceQueue.length})</span>
                  <span>Batch Intake Status</span>
                </div>
                <div className="divide-y divide-[#1f2533]">
                  {referenceQueue.map((job) => {
                    const targetTemplate = templates.find((t) => t.id === job.templateId);
                    return (
                      <div key={job.id} className="p-4 hover:bg-[#161a22] transition-colors space-y-2 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                              {job.templateId.toUpperCase()}
                            </span>
                            <span className="font-semibold text-white">
                              {targetTemplate ? targetTemplate.name : 'Reserved Slot'}
                            </span>
                            <span className="text-[#64748b]">·</span>
                            <span className="text-[#94a3b8] uppercase font-mono text-[10px]">
                              Format: {job.refType}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#64748b]">Logged: {job.submittedAt}</span>
                        </div>

                        <div className="text-white font-medium pl-1">
                          Source: {job.urlOrTitle}
                        </div>

                        {job.clientNeeds && (
                          <div className="text-[11px] text-[#cbd5e1] pl-1">
                            <span className="text-[#64748b]">Priorities: </span>
                            {job.clientNeeds}
                          </div>
                        )}

                        {job.notes && (
                          <div className="text-[11px] text-[#94a3b8] italic pl-1">
                            "{job.notes}"
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INTEGRATION BRIDGE */}
        {activeTab === 'integration' && (
          <IntegrationBridge templates={templates} />
        )}

        {/* TAB 6: ARCHITECTURE RULES & PROTOCOL */}
        {activeTab === 'rules' && (
          <div className="space-y-6">
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8 space-y-6 text-xs text-[#cbd5e1]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                  Governing Directives
                </span>
                <h2 className="text-2xl font-bold text-white font-serif mt-1">
                  Raoz Demo Factory — 10 Master Architecture Rules
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Enforcing strict separation, batch cadence, and seamless integration with Raoz Website Maker (82+ existing templates).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: '1',
                    title: 'Completely Independent Project',
                    desc: 'Zero import, edit, overwrite or dependency on the existing Raoz Website Maker live codebase. All files stay isolated in this repository.'
                  },
                  {
                    num: '2',
                    title: 'No Auto-Deploy',
                    desc: 'Never deploy automatically to live hosting. All integration work is staged on separate development branches upon manual authorization.'
                  },
                  {
                    num: '3',
                    title: '12 Popular Business Categories',
                    desc: 'Balanced 30-template distribution across Food (3), Real Estate (3), Health (3), Education (3), Legal/Professional (3), Retail (3), Auto (2), Weddings (2), Home Services (2), Beauty (2), Travel (2), Industrial (2).'
                  },
                  {
                    num: '4',
                    title: 'Batch Development Workflow',
                    desc: 'Build and verify templates in structured batches of 3–5. Complete TypeScript, build, responsive, and routing audits before starting the next batch.'
                  },
                  {
                    num: '5',
                    title: 'Isolated File System Architecture',
                    desc: 'Each template maintains its own folder in src/templates/template-XXX/, local assets, isolated sub-routing, and zero global CSS overrides.'
                  },
                  {
                    num: '6',
                    title: 'Lazy-Loaded Central Manifest',
                    desc: 'Templates are loaded asynchronously via React.lazy so bundle sizes stay featherlight and templates never pollute host bundle startup.'
                  },
                  {
                    num: '7',
                    title: 'Domain-Native Anti-AI Slop Aesthetic',
                    desc: 'No generic purple pills or fake testimonials. High-taste typography, realistic commercial copy, and domain-authentic conversion flows.'
                  },
                  {
                    num: '8',
                    title: 'High-Converting Action Hooks',
                    desc: 'Prioritize click-to-call, WhatsApp inquiries, RFQ forms, appointment bookings, and table reservations tailored to real paying clients.'
                  },
                  {
                    num: '9',
                    title: 'Accurate Professional & Legal Claims',
                    desc: 'Zero fabricated medical qualifications, clinical guarantees, legal outcomes, or false payment gateway claims.'
                  },
                  {
                    num: '10',
                    title: 'Migration Bridge Ready',
                    desc: 'Self-generating markdown integration specifications and JSON manifest exports make future transfer into Raoz Website Maker effortless.'
                  }
                ].map((rule) => (
                  <div key={rule.num} className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-700 text-blue-400 font-mono text-[10px] font-bold flex items-center justify-center">
                        {rule.num}
                      </span>
                      <h3 className="font-semibold text-white">{rule.title}</h3>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] leading-relaxed pl-7">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f2536] bg-[#0c0e15] py-8 text-xs text-[#64748b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Raoz Demo Factory</span>
            <span>·</span>
            <span>Independent Template Studio for Raoz Website Maker</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>30 Planned Slots</span>
            <span>12 Business Categories</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Isolated Environment
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TemplateDetailModal
        template={detailModalTemplate}
        onClose={() => {
          setDetailModalTemplate(null);
          if (activeTab === 'catalog') {
            window.history.pushState(null, '', '/');
          }
        }}
        onPreview={handleLaunchPreview}
      />

      <ReferenceIntakeModal
        template={intakeModalTemplate}
        isOpen={isIntakeModalOpen}
        onClose={() => {
          setIsIntakeModalOpen(false);
          setIntakeModalTemplate(null);
        }}
        onSubmitReference={handleReferenceSubmit}
      />
    </div>
  );
}
