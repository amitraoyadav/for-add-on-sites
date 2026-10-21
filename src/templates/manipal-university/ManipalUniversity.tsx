import React, { useState, useMemo, useEffect } from 'react';
import {
  MANIPAL_CONFIG,
  SchoolItem,
  ProgramItem,
  CampusItem,
  AlumniVoice
} from './manipal-university.config';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Shield,
  Sparkles,
  Trophy,
  Users,
  X,
  Building,
  HeartHandshake,
  Activity,
  Flame,
  ArrowRight,
  Filter,
  Check,
  Percent,
  Calculator,
  Compass as Globe2,
  FileCheck2,
  ChevronLeft
} from 'lucide-react';

export default function ManipalUniversity() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'about' | 'campuses' | 'programs' | 'admissions' | 'scholarships' | 'research' | 'campus-life' | 'placements' | 'faqs'
  >('overview');

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero carousel
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: '600+ Acres Flagship University Town & 6 Global Campuses',
      subtitle: 'Institution of Eminence Deemed to be University · NAAC Grade A++ · Top 4 NIRF Ranked',
      badge: 'Institution of Eminence · Govt. of India',
      badgeImg: '/assets/manipal-university/badge-ioe.svg',
      heroGraphic: '/assets/manipal-university/hero-campuses-600acres.svg',
      ctaText: 'Explore Campuses',
      ctaAction: 'campuses',
      bgImg: '/assets/manipal-university/campus-main.jpg'
    },
    {
      title: '₹54.75 LPA Highest Placements Milestone with 350+ Global MNCs',
      subtitle: 'Alma Mater of Microsoft CEO Satya Nadella & Michelin Star Chef Vikas Khanna',
      badge: '₹54.75 LPA Highest CTC',
      badgeImg: '/assets/manipal-university/badge-nirf-top6.svg',
      heroGraphic: '/assets/manipal-university/hero-placements-54lpa.svg',
      ctaText: 'View Placement Report',
      ctaAction: 'placements',
      bgImg: '/assets/manipal-university/campus-hero-1.jpg'
    },
    {
      title: 'MET 2026 Admissions Live — Online Entrance Examination',
      subtitle: 'Apply for B.Tech, MBBS, BBA, B.Arch, B.Pharm across 80+ Cities in India & Gulf',
      badge: 'MET 2026 Portal Open',
      badgeImg: '/assets/manipal-university/badge-met-2026.svg',
      heroGraphic: '/assets/manipal-university/hero-met-admissions.svg',
      ctaText: 'Apply for MET 2026',
      ctaAction: 'admissions',
      bgImg: '/assets/manipal-university/campus-hero-2.jpg'
    },
    {
      title: 'Marena 6-Level Sports Arena & 1.5 Lakh Sq. Ft. Central Library',
      subtitle: 'World-Class Olympic Gym, Synthetic Badminton Courts & 2,500+ Bed Teaching Hospital',
      badge: 'World-Class Student Facilities',
      badgeImg: '/assets/manipal-university/badge-qs-world.svg',
      heroGraphic: '/assets/manipal-university/hero-marena-sports.svg',
      ctaText: 'Tour Campus Life',
      ctaAction: 'campus-life',
      bgImg: '/assets/manipal-university/campus-library.jpg'
    },
    {
      title: 'Revels & TechTatva — National Collegiate Techno-Cultural Conclaves',
      subtitle: 'Formula Manipal, Project MANAS Autonomous AI, SolarMobil & 80+ Active Student Guilds',
      badge: 'Student Innovation & Leadership',
      badgeImg: '/assets/manipal-university/badge-naac-a-plus.svg',
      heroGraphic: '/assets/manipal-university/hero-revels-fest.svg',
      ctaText: 'Discover Innovation',
      ctaAction: 'research',
      bgImg: '/assets/manipal-university/campus-labs.jpg'
    }
  ];

  // Auto advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Program filters & search
  const [searchProgramQuery, setSearchProgramQuery] = useState('');
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState<string>('All');
  const [selectedSchoolFilter, setSelectedSchoolFilter] = useState<string>('All');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<ProgramItem | null>(null);

  const filteredPrograms = useMemo(() => {
    return MANIPAL_CONFIG.programs.filter((p) => {
      const matchesQuery =
        !searchProgramQuery ||
        p.title.toLowerCase().includes(searchProgramQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchProgramQuery.toLowerCase()) ||
        p.careerRoles.some((r) => r.toLowerCase().includes(searchProgramQuery.toLowerCase())) ||
        (p.specializations && p.specializations.some((s) => s.toLowerCase().includes(searchProgramQuery.toLowerCase())));

      const matchesLevel =
        selectedDegreeLevel === 'All' || p.degreeLevel === selectedDegreeLevel;

      const matchesSchool =
        selectedSchoolFilter === 'All' || p.schoolId === selectedSchoolFilter;

      return matchesQuery && matchesLevel && matchesSchool;
    });
  }, [searchProgramQuery, selectedDegreeLevel, selectedSchoolFilter]);

  // Campus selector
  const [selectedCampusId, setSelectedCampusId] = useState<string>('campus-manipal');
  const activeCampus = useMemo(() => {
    return MANIPAL_CONFIG.campuses.find((c) => c.id === selectedCampusId) || MANIPAL_CONFIG.campuses[0];
  }, [selectedCampusId]);

  // Scholarship calculator state
  const [calcMetRank, setCalcMetRank] = useState<number>(350);
  const [calcGender, setCalcGender] = useState<'Male' | 'Female'>('Male');
  const [calcIncomeLakhs, setCalcIncomeLakhs] = useState<number>(10);
  const [calcTargetCourse, setCalcTargetCourse] = useState<string>('prog-btech-cse');

  const calculatedScholarship = useMemo(() => {
    let waiverPct = 0;
    let schemeName = 'Standard Tuition Rate';

    if (calcMetRank <= 100) {
      waiverPct = 100;
      schemeName = 'Dr. T.M.A. Pai 100% Freeship Scholarship (Full Tuition Waiver)';
    } else if (calcMetRank <= 500) {
      waiverPct = 50;
      schemeName = 'MAHE Scholar Scholarship (50% Tuition Fee Concession)';
    } else if (calcMetRank <= 1500 && calcIncomeLakhs <= 12) {
      waiverPct = 25;
      schemeName = 'Merit-cum-Means Financial Assistance (25% Tuition Waiver)';
    }

    if (calcGender === 'Female' && waiverPct < 15) {
      waiverPct = 15;
      schemeName = 'Manipal Shakti Empowerment Grant for Female Tech Aspirants (15% Waiver)';
    }

    const courseObj = MANIPAL_CONFIG.programs.find((p) => p.id === calcTargetCourse);
    let baseTuition = 436000;
    if (courseObj) {
      const match = courseObj.annualFeeINR.match(/₹([0-9,]+)/);
      if (match) {
        baseTuition = parseInt(match[1].replace(/,/g, ''), 10);
      }
    }

    const annualSavings = (baseTuition * waiverPct) / 100;
    const finalFee = baseTuition - annualSavings;

    return {
      waiverPct,
      schemeName,
      baseTuition,
      annualSavings,
      finalFee
    };
  }, [calcMetRank, calcGender, calcIncomeLakhs, calcTargetCourse]);

  // Admissions Application Form Simulator
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    programId: 'prog-btech-cse',
    campusId: 'campus-manipal',
    twelfthScore: '',
    testCity: 'Bengaluru',
    category: 'General Category'
  });
  const [appSubmittedTracking, setAppSubmittedTracking] = useState<string | null>(null);
  const [appFormError, setAppFormError] = useState<string>('');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.fullName.trim() || !appForm.email.trim() || !appForm.phone.trim()) {
      setAppFormError('Please complete all personal and contact details.');
      return;
    }
    setAppFormError('');
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingId = `MAHE-2026-${randomSuffix}`;
    setAppSubmittedTracking(trackingId);
  };

  // Tracking lookup tool
  const [searchTrackingInput, setSearchTrackingInput] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  const handleLookup = () => {
    if (!searchTrackingInput.trim()) {
      setLookupResult('Please enter your Application Reference Number (e.g. MAHE-2026-XXXXX)');
      return;
    }
    setLookupResult(
      `✓ Application Record Found: Reference ${searchTrackingInput.trim().toUpperCase()} is verified under MET 2026 Admissions Desk. Status: Shortlisted for Slot Booking.`
    );
  };

  // FAQ accordion
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-orange-600 selection:text-white">
      {/* Top Utility & Notification Ribbon */}
      <div className="bg-gradient-to-r from-orange-950 via-slate-900 to-amber-950 border-b border-orange-500/20 text-xs px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-600/30 text-orange-300 font-semibold border border-orange-500/40 animate-pulse">
              <Sparkles className="w-3 h-3 text-orange-400" /> MET 2026 Applications Live
            </span>
            <span className="hidden md:inline text-slate-300">
              Institution of Eminence Deemed to be University · NAAC Grade A++ (3.65 CGPA)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{MANIPAL_CONFIG.institution.officialHelpline}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 hover:text-orange-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>{MANIPAL_CONFIG.institution.admissionsEmail}</span>
            </span>
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-2.5 py-0.5 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition-colors"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('overview')}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center p-1">
                <Flame className="w-7 h-7 text-orange-500 group-hover:text-amber-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-black tracking-wider text-white group-hover:text-orange-400 transition-colors">
                  MANIPAL
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  IoE · UGC
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-400 tracking-wide">
                ACADEMY OF HIGHER EDUCATION
              </p>
              <p className="text-[9px] text-amber-500 font-medium tracking-wider">
                ★ INSPIRED BY LIFE · ESTD. 1953
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
            {[
              { id: 'overview', label: 'Home' },
              { id: 'about', label: 'About MAHE' },
              { id: 'campuses', label: 'Campuses (6)' },
              { id: 'programs', label: 'Programs (300+)' },
              { id: 'admissions', label: 'MET 2026' },
              { id: 'scholarships', label: 'Scholarships' },
              { id: 'research', label: 'Research' },
              { id: 'campus-life', label: 'Campus Life' },
              { id: 'placements', label: 'Placements' },
              { id: 'faqs', label: 'FAQs' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id as any)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === nav.id
                    ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-600/30'
                    : 'hover:text-white hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <GraduationCap className="w-4 h-4" /> Admissions 2026
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-2">
            {[
              { id: 'overview', label: 'Home / Overview' },
              { id: 'about', label: 'About MAHE (Estd. 1953)' },
              { id: 'campuses', label: '6 Global Campuses Explorer' },
              { id: 'programs', label: 'Academic Programs (300+ Degrees)' },
              { id: 'admissions', label: 'MET 2026 Admissions Portal' },
              { id: 'scholarships', label: 'Merit Scholarship Calculator' },
              { id: 'research', label: 'Research & MUTBI Incubation' },
              { id: 'campus-life', label: 'Campus Life & Marena Sports' },
              { id: 'placements', label: 'Placements (₹54.75 LPA Highest)' },
              { id: 'faqs', label: 'Institutional FAQs' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveTab(nav.id as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeTab === nav.id
                    ? 'bg-orange-600 text-white'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{nav.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="relative min-h-[500px] md:min-h-[560px] flex items-center">
          {/* Background Image with Deep Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroSlides[heroSlide].bgImg}
              alt={heroSlides[heroSlide].title}
              className="w-full h-full object-cover opacity-25 filter blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {heroSlides[heroSlide].badge}
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white font-serif leading-tight">
                {heroSlides[heroSlide].title}
              </h1>

              <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {heroSlides[heroSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab(heroSlides[heroSlide].ctaAction as any)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-orange-600/30 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>{heroSlides[heroSlide].ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('programs')}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:border-slate-500"
                >
                  Explore 300+ Programs
                </button>
              </div>

              {/* Quick Institutional Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-slate-300">
                <div>
                  <div className="text-2xl font-black text-amber-400">#4</div>
                  <div className="text-xs text-slate-400 font-medium">NIRF Universities India</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">₹54.75 L</div>
                  <div className="text-xs text-slate-400 font-medium">Highest CTC Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">600+</div>
                  <div className="text-xs text-slate-400 font-medium">Acres Green Campus</div>
                </div>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative group">
                <img
                  src={heroSlides[heroSlide].heroGraphic}
                  alt={heroSlides[heroSlide].title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-orange-400">
                    MAHE Official Showcase
                  </span>
                  <span className="text-slate-400">Slide {heroSlide + 1} of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Navigation */}
        <div className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    heroSlide === idx
                      ? 'w-8 bg-orange-500 shadow-md shadow-orange-500/50'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Badges Strip */}
      <section className="bg-slate-900/60 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {
              title: 'Institution of Eminence',
              subtitle: 'Govt. of India IoE',
              icon: Shield,
              color: 'text-orange-400',
              badgeSrc: '/assets/manipal-university/badge-ioe.svg'
            },
            {
              title: 'NIRF Rank #4',
              subtitle: 'Top 4 Universities in India',
              icon: Trophy,
              color: 'text-amber-400',
              badgeSrc: '/assets/manipal-university/badge-nirf-top6.svg'
            },
            {
              title: 'NAAC Grade A++',
              subtitle: '3.65+ CGPA Highest Grade',
              icon: Award,
              color: 'text-emerald-400',
              badgeSrc: '/assets/manipal-university/badge-naac-a-plus.svg'
            },
            {
              title: 'QS Asia Top 175',
              subtitle: 'Global Top 750 Ranked',
              icon: Globe2,
              color: 'text-purple-400',
              badgeSrc: '/assets/manipal-university/badge-qs-world.svg'
            },
            {
              title: 'MET 2026 Admissions',
              subtitle: '80+ Test Hubs Nationwide',
              icon: Calendar,
              color: 'text-blue-400',
              badgeSrc: '/assets/manipal-university/badge-met-2026.svg'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-xl flex items-center gap-3 hover:border-slate-700 transition-colors"
            >
              <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
              <div>
                <div className="text-xs font-bold text-white leading-tight">{item.title}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Dynamic View Area */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* OVERVIEW / HOME TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* 1. Dean / Leadership Welcome & Heritage Banner */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30">
                    <Flame className="w-3.5 h-3.5" /> 70+ Years of Academic Heritage (1953–2026)
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif font-black text-white">
                    Pioneering Higher Education Across Health, Technology, Management &amp; Design
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Founded in 1953 by visionary physician, educator, and banker{' '}
                    <strong className="text-orange-400">Dr. T. M. A. Pai</strong>, Manipal Academy of
                    Higher Education has grown from India’s first private medical college (KMC) to an
                    internationally acclaimed Institution of Eminence. Today, MAHE is home to over 35,000
                    students from 60+ countries and has nurtured global leaders including Microsoft CEO
                    Satya Nadella.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-orange-400">300+</div>
                      <div className="text-xs text-slate-400">Degree Programs</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-amber-400">3,200+</div>
                      <div className="text-xs text-slate-400">Esteemed Faculty</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-emerald-400">₹420+ Cr</div>
                      <div className="text-xs text-slate-400">Sponsored Research</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-blue-400">150,000+</div>
                      <div className="text-xs text-slate-400">Alumni in 60+ Nations</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
                    <img
                      src="/assets/manipal-university/academic-excellence.jpg"
                      alt="Academic Excellence"
                      className="w-full h-48 object-cover rounded-lg border border-slate-700"
                    />
                    <div className="text-center space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Inspiration Behind MAHE
                      </div>
                      <div className="text-sm font-black text-white">Dr. Tonse Madhav Ananth Pai</div>
                      <div className="text-xs text-slate-400">Founder &amp; Visionary (1898–1979)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Key Academic Schools Showcase */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Academic Pillars
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                    Prestigious Institutes &amp; Faculties
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('programs')}
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5"
                >
                  <span>View All 300+ Programs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MANIPAL_CONFIG.schools.map((school) => (
                  <div
                    key={school.id}
                    className="bg-slate-950 border border-slate-800 hover:border-orange-500/50 rounded-xl p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-orange-600/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                          {school.shortCode}
                        </span>
                        <span className="text-[11px] font-semibold text-amber-400">
                          Estd. {school.established}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white leading-snug">{school.name}</h4>
                      {school.nirfRank && (
                        <div className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                          ★ {school.nirfRank}
                        </div>
                      )}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {school.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Highest Package:</span>
                        <span className="font-bold text-orange-400">
                          ₹{school.keyStats.highestPlacementLPA.toFixed(2)} LPA
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedSchoolFilter(school.id);
                          setActiveTab('programs');
                        }}
                        className="w-full py-2 bg-slate-900 hover:bg-orange-600 text-slate-200 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Explore {school.shortCode} Programs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Global Campuses Grid Highlight */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Multi-Campus Ecosystem
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                    6 Campuses in India, Middle East &amp; Southeast Asia
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('campuses')}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Interactive Campus Tour
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {MANIPAL_CONFIG.campuses.map((camp) => (
                  <div
                    key={camp.id}
                    onClick={() => {
                      setSelectedCampusId(camp.id);
                      setActiveTab('campuses');
                    }}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 cursor-pointer transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-orange-400">{camp.areaAcres}</span>
                      <span className="text-slate-400">Estd. {camp.established}</span>
                    </div>
                    <div className="font-bold text-white group-hover:text-orange-300 transition-colors">
                      {camp.name}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span className="truncate">{camp.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Distinguished Alumni Spotlight */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Global Leadership Footprint
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                  Distinguished Manipal Alumni
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MANIPAL_CONFIG.alumniVoices.map((alumni, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow">
                        {alumni.name.charAt(0)}
                      </div>
                      <h4 className="text-base font-bold text-white">{alumni.name}</h4>
                      <p className="text-xs font-semibold text-orange-400">
                        {alumni.role} · {alumni.company}
                      </p>
                      <p className="text-[11px] text-slate-400">{alumni.degree} ({alumni.batch})</p>
                      <p className="text-xs text-slate-300 italic pt-2">"{alumni.quote}"</p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] font-medium text-emerald-400">
                      ★ {alumni.achievement}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Placements & Recruiters Banner */}
            <div className="bg-gradient-to-r from-orange-950/80 via-slate-950 to-amber-950/80 border border-orange-500/30 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <span className="px-3 py-1 rounded bg-orange-600/30 text-orange-300 text-xs font-bold border border-orange-500/40">
                    Corporate Placements Cell
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black font-serif text-white">
                    ₹54.75 LPA Highest Package with 350+ Global Recruiters
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Manipal's dedicated Career Development and Placement Cell ensures high-impact
                    campus hiring across Fortune 500 tech firms, consulting giants, leading hospitals,
                    and research labs. Average engineering packages stand at ₹12.60 LPA.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 pt-2">
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Microsoft</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Google</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Amazon</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Cisco</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Goldman Sachs</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Deloitte</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Novartis</span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700">Marriott</span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => setActiveTab('placements')}
                    className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all text-center"
                  >
                    View Complete Placement Statistics
                  </button>
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition-all text-center"
                  >
                    Apply for Admissions 2026
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT MAHE TAB */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Institutional Profile
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                About Manipal Academy of Higher Education (MAHE)
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Manipal Academy of Higher Education is synonymous with excellence in higher
                  education. Over 35,000 students from 60 different nations live, learn and play in
                  the sprawling university town, nestled on a plateau in Karnataka’s Udupi district.
                  It also has nearly 3,200 faculty and almost 10,000 other support and service staff,
                  who cater to the various professional institutions in health sciences, engineering,
                  management, communication and humanities.
                </p>
                <p>
                  The university was conferred the prestigious{' '}
                  <strong className="text-white">Institution of Eminence (IoE)</strong> status by the
                  Ministry of Education, Government of India in 2020. This places MAHE among an elite
                  cohort of institutions in India recognized for their potential to achieve global
                  prominence and research excellence.
                </p>
                <p>
                  MAHE has off-campuses in Mangaluru and Bengaluru, and off-shore campuses in Dubai
                  (UAE) and Melaka (Malaysia). The Mangaluru campus offers medical and dental
                  programmes; the Bengaluru campus offers programmes in engineering, management,
                  regenerative medicine, art, design and technology; the Dubai campus offers
                  programmes in engineering, management and architecture, and the Melaka campus
                  offers programmes in medicine and dentistry.
                </p>
              </div>

              {/* Leadership Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-orange-400 uppercase">Pro Chancellor</div>
                  <div className="text-lg font-bold text-white">{MANIPAL_CONFIG.institution.proChancellor}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Senior healthcare administrator and educationist guiding the strategic expansion
                    and global academic alliances of MAHE.
                  </p>
                </div>
                <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-orange-400 uppercase">Vice Chancellor</div>
                  <div className="text-lg font-bold text-white">{MANIPAL_CONFIG.institution.viceChancellor}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Distinguished military healthcare leader, former Director General Armed Forces
                    Medical Services, steering research and institutional quality.
                  </p>
                </div>
              </div>
            </div>

            {/* National & International Rankings Card */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-black text-white">
                Official Rankings &amp; Accreditations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {MANIPAL_CONFIG.rankings.map((rnk, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2"
                  >
                    <div className="text-xs font-semibold text-orange-400">{rnk.category}</div>
                    <div className="text-xl font-black text-white">{rnk.rank}</div>
                    <div className="text-xs font-bold text-amber-300">{rnk.body}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{rnk.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CAMPUSES TAB */}
        {activeTab === 'campuses' && (
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Network of Campuses
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                6 Dynamic Campuses Worldwide
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Explore MAHE's flagship 600-acre hilltop university campus in Manipal, alongside
                modern coastal, technology, and international centers in India, UAE, and Malaysia.
              </p>
            </div>

            {/* Campus Selector Pills */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              {MANIPAL_CONFIG.campuses.map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => setSelectedCampusId(camp.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCampusId === camp.id
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {camp.name}
                </button>
              ))}
            </div>

            {/* Selected Campus Detail Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-orange-600/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                      {activeCampus.areaAcres}
                    </span>
                    <span className="text-xs text-amber-400 font-semibold">
                      Established in {activeCampus.established}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-black text-white">{activeCampus.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>{activeCampus.location}</span>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {activeCampus.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Prominent Schools &amp; Institutions:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeCampus.keyInstitutions.map((inst, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200 font-medium"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Campus Infrastructure &amp; Amenities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {activeCampus.amenities.map((amen, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{amen}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4 text-xs">
                    <span className="text-slate-400">Official Contact Desk:</span>
                    <a
                      href={`mailto:${activeCampus.contactEmail}`}
                      className="text-orange-400 font-bold hover:underline"
                    >
                      {activeCampus.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img
                      src={
                        activeCampus.id === 'campus-manipal'
                          ? '/assets/manipal-university/campus-main.jpg'
                          : activeCampus.id === 'campus-mangeluru' || activeCampus.id === 'campus-mangaluru'
                          ? '/assets/manipal-university/campus-medical.png'
                          : activeCampus.id === 'campus-bengaluru'
                          ? '/assets/manipal-university/campus-labs.jpg'
                          : activeCampus.id === 'campus-jamshedpur'
                          ? '/assets/manipal-university/campus-auditorium.png'
                          : '/assets/manipal-university/campus-hero-1.jpg'
                      }
                      alt={activeCampus.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-3 bg-slate-900 text-center text-xs text-slate-400">
                      Verified Campus Snapshot · {activeCampus.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACADEMIC PROGRAMS TAB */}
        {activeTab === 'programs' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Curriculum Directory
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                300+ Career-Focused Degree Programs
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Explore engineering, medical, dental, pharmaceutical, architecture, management, and
                hotel management programs at MAHE.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Search Input */}
                <div className="md:col-span-6 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchProgramQuery}
                    onChange={(e) => setSearchProgramQuery(e.target.value)}
                    placeholder="Search courses (e.g. CSE, MBBS, BBA, AI, Architecture)..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                  {searchProgramQuery && (
                    <button
                      onClick={() => setSearchProgramQuery('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Level Filter */}
                <div className="md:col-span-3">
                  <select
                    value={selectedDegreeLevel}
                    onChange={(e) => setSelectedDegreeLevel(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="All">All Degree Levels</option>
                    <option value="Undergraduate">Undergraduate (UG)</option>
                    <option value="Postgraduate">Postgraduate (PG)</option>
                    <option value="Doctoral">Doctoral (Ph.D.)</option>
                  </select>
                </div>

                {/* School Filter */}
                <div className="md:col-span-3">
                  <select
                    value={selectedSchoolFilter}
                    onChange={(e) => setSelectedSchoolFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="All">All Academic Schools</option>
                    {MANIPAL_CONFIG.schools.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.shortCode} — {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Showing {filteredPrograms.length} of {MANIPAL_CONFIG.programs.length} programs</span>
                {(searchProgramQuery || selectedDegreeLevel !== 'All' || selectedSchoolFilter !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchProgramQuery('');
                      setSelectedDegreeLevel('All');
                      setSelectedSchoolFilter('All');
                    }}
                    className="text-orange-400 hover:underline"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Programs Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrograms.map((prog) => {
                const school = MANIPAL_CONFIG.schools.find((s) => s.id === prog.schoolId);
                return (
                  <div
                    key={prog.id}
                    className="bg-slate-950 border border-slate-800 hover:border-orange-500/50 rounded-xl p-5 space-y-4 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded bg-orange-600/20 text-orange-400 font-bold border border-orange-500/30">
                          {prog.degreeLevel}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          {prog.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug">{prog.title}</h3>
                      <div className="text-xs font-semibold text-amber-400">
                        {school ? school.name : prog.department}
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                        <div>
                          <span className="text-slate-400">Eligibility: </span>
                          <span>{prog.eligibility}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Annual Tuition: </span>
                          <span className="font-bold text-emerald-400">{prog.annualFeeINR}</span>
                        </div>
                      </div>

                      {prog.specializations && prog.specializations.length > 0 && (
                        <div className="space-y-1 pt-1">
                          <div className="text-[11px] font-semibold text-slate-400">Specializations:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {prog.specializations.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-300"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProgramDetail(prog)}
                        className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                        <span>View Curriculum &amp; Syllabus</span>
                      </button>
                      <button
                        onClick={() => {
                          setAppForm((prev) => ({ ...prev, programId: prog.id }));
                          setActiveTab('admissions');
                        }}
                        className="py-2 px-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                <Search className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-slate-300 font-medium text-sm">
                  No programs found matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchProgramQuery('');
                    setSelectedDegreeLevel('All');
                    setSelectedSchoolFilter('All');
                  }}
                  className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-bold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* PROGRAM DETAIL MODAL */}
        {selectedProgramDetail && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-orange-600/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                    {selectedProgramDetail.degreeLevel} · {selectedProgramDetail.duration}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5">
                    {selectedProgramDetail.title}
                  </h3>
                  <p className="text-xs text-amber-400">{selectedProgramDetail.department}</p>
                </div>
                <button
                  onClick={() => setSelectedProgramDetail(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Eligibility &amp; Admission Channel:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProgramDetail.eligibility}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProgramDetail.admissionRoutes.map((rt, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 text-[11px] font-semibold border border-orange-800"
                      >
                        ✓ {rt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Curriculum Highlights &amp; Core Coursework:
                  </div>
                  <ul className="space-y-2 text-xs">
                    {selectedProgramDetail.curriculumHighlights.map((hl, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Career Pathways &amp; Roles:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgramDetail.careerRoles.map((role, k) => (
                      <span
                        key={k}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Estimated Annual Tuition:</div>
                    <div className="text-lg font-black text-emerald-400">
                      {selectedProgramDetail.annualFeeINR}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setAppForm((prev) => ({ ...prev, programId: selectedProgramDetail.id }));
                      setSelectedProgramDetail(null);
                      setActiveTab('admissions');
                    }}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    Apply with MET 2026
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADMISSIONS & MET 2026 TAB */}
        {activeTab === 'admissions' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Official Entrance Test &amp; Registration
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Manipal Entrance Test (MET 2026) Admissions
              </h2>
              <p className="text-slate-300 text-sm max-w-3xl">
                Online registration for Undergraduate and Postgraduate programs is now open. Submit
                your fast-track application below to receive an authentic MAHE tracking ID and slot
                booking confirmation.
              </p>
            </div>

            {/* Test Format Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
                  <Clock className="w-4 h-4" />
                  <span>MET 2026 Examination Schedule</span>
                </div>
                <div className="space-y-3">
                  {MANIPAL_CONFIG.metAdmissions.phases.map((ph, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1 text-xs"
                    >
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{ph.phase}</span>
                        <span className="text-amber-400">{ph.dates}</span>
                      </div>
                      <div className="text-slate-400">Online Slot Booking: {ph.slotBooking}</div>
                      <div className="text-slate-400">Results Declared: {ph.resultsDate}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <Laptop className="w-4 h-4" />
                  <span>Computer-Based Test Pattern (60 Questions)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {MANIPAL_CONFIG.metAdmissions.examFormat.sections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-center space-y-0.5"
                    >
                      <div className="font-bold text-white">{sec.subject}</div>
                      <div className="text-slate-400">
                        {sec.questions} Qs · {sec.marks} Marks
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
                  Duration: 120 Minutes. {MANIPAL_CONFIG.metAdmissions.examFormat.markingScheme}.
                </p>
              </div>
            </div>

            {/* Fast-Track Application Form Simulator */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-orange-500/30 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400">
                  <FileCheck2 className="w-4 h-4" /> Fast-Track Online Registration Simulator
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Begin Your Application to MAHE (Batch 2026-27)
                </h3>
              </div>

              {appSubmittedTracking ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Application Successfully Submitted!
                      </h4>
                      <p className="text-xs text-emerald-300">
                        Your application for {appForm.fullName} has been registered with the Manipal
                        Admissions Office.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Application Reference Tracking ID:</div>
                      <div className="text-xl font-mono font-black text-amber-400">
                        {appSubmittedTracking}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSearchTrackingInput(appSubmittedTracking);
                        handleLookup();
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold"
                    >
                      Verify Status
                    </button>
                  </div>

                  <p className="text-xs text-slate-400">
                    A confirmation packet and MET 2026 slot booking schedule will be communicated to{' '}
                    <span className="text-white font-medium">{appForm.email}</span>.
                  </p>

                  <button
                    onClick={() => setAppSubmittedTracking(null)}
                    className="text-xs text-orange-400 hover:underline"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  {appFormError && (
                    <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-lg text-xs text-red-300">
                      {appFormError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Candidate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={appForm.fullName}
                        onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Phone (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                        placeholder="9876543210"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Academic Program
                      </label>
                      <select
                        value={appForm.programId}
                        onChange={(e) => setAppForm({ ...appForm, programId: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        {MANIPAL_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Campus
                      </label>
                      <select
                        value={appForm.campusId}
                        onChange={(e) => setAppForm({ ...appForm, campusId: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        {MANIPAL_CONFIG.campuses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred MET 2026 Test City
                      </label>
                      <select
                        value={appForm.testCity}
                        onChange={(e) => setAppForm({ ...appForm, testCity: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        {MANIPAL_CONFIG.metAdmissions.testHubs.map((hub, idx) => (
                          <option key={idx} value={hub}>
                            {hub}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-slate-400">
                      Standard Application Fee: ₹800 (General) + ₹1,200 Entrance Test Fee.
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
                    >
                      Generate Application &amp; Tracking ID
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Application Status Lookup Desk */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-orange-400" />
                <span>Application Status &amp; MET Slot Verification Desk</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                <input
                  type="text"
                  value={searchTrackingInput}
                  onChange={(e) => setSearchTrackingInput(e.target.value)}
                  placeholder="Enter tracking ID (e.g. MAHE-2026-XXXXX)..."
                  className="flex-1 min-w-[240px] px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleLookup}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  Lookup Application
                </button>
              </div>
              {lookupResult && (
                <div className="p-3 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200">
                  {lookupResult}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SCHOLARSHIPS TAB */}
        {activeTab === 'scholarships' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Financial Aid &amp; Meritorious Awards
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                ₹100+ Crores Annual Merit Scholarships
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                MAHE believes that no meritorious student should be denied higher education due to
                financial constraints. Estimate your tuition fee concession below.
              </p>
            </div>

            {/* Interactive Scholarship Calculator */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Calculator className="w-5 h-5" />
                <span>Live Merit Scholarship Concession Calculator</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Expected MET 2026 Rank: <span className="text-orange-400 font-bold">{calcMetRank}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="2000"
                    step="10"
                    value={calcMetRank}
                    onChange={(e) => setCalcMetRank(parseInt(e.target.value, 10))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Rank 1 (100% Freeship)</span>
                    <span>Rank 2000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Candidate Gender
                  </label>
                  <select
                    value={calcGender}
                    onChange={(e) => setCalcGender(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female (Shakti 15% Waiver Eligibility)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Family Annual Income: <span className="text-orange-400 font-bold">{calcIncomeLakhs} LPA</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={calcIncomeLakhs}
                    onChange={(e) => setCalcIncomeLakhs(parseInt(e.target.value, 10))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>₹2 LPA</span>
                    <span>₹30 LPA</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Program
                  </label>
                  <select
                    value={calcTargetCourse}
                    onChange={(e) => setCalcTargetCourse(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    {MANIPAL_CONFIG.programs.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculator Outcome Box */}
              <div className="p-5 bg-gradient-to-r from-orange-950/60 to-slate-900 border border-orange-500/40 rounded-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-400">Awarded Scholarship Scheme:</div>
                    <div className="text-base font-black text-amber-400">
                      {calculatedScholarship.schemeName}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Tuition Waiver:</div>
                    <div className="text-3xl font-black text-emerald-400">
                      {calculatedScholarship.waiverPct}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400">Standard Annual Fee: </span>
                    <span className="font-bold text-slate-200">
                      ₹{calculatedScholarship.baseTuition.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Estimated Annual Waiver: </span>
                    <span className="font-bold text-emerald-400">
                      -₹{calculatedScholarship.annualSavings.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Effective Payable Tuition: </span>
                    <span className="font-bold text-orange-400">
                      ₹{calculatedScholarship.finalFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Scholarship Schemes Grid */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-black text-white">
                Official Scholarship Schemes for 2026-27
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {MANIPAL_CONFIG.metAdmissions.scholarshipTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2"
                  >
                    <span className="px-2 py-0.5 rounded bg-orange-600/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                      {tier.waiverPercent}% Waiver
                    </span>
                    <div className="text-base font-bold text-white pt-1">{tier.name}</div>
                    <div className="text-xs font-semibold text-amber-400">{tier.rankRange}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{tier.criteria}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RESEARCH & INNOVATION TAB */}
        {activeTab === 'research' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Pioneering Discoveries
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Research &amp; MUTBI Startup Incubation
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                MAHE researchers hold over 1,450 patents and have secured ₹420+ Crores in sponsored
                scientific research funding from DST, DBT, ICMR, NIH, and the European Commission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="text-2xl font-black text-orange-400">MUTBI Incubation</div>
                <h3 className="text-base font-bold text-white">
                  Manipal Universal Technology Business Incubator
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recognized by the Department of Science &amp; Technology (DST), Govt. of India.
                  Incubating 50+ deep-tech startups across AI, MedTech, clean energy, and robotics.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="text-2xl font-black text-amber-400">Formula Manipal</div>
                <h3 className="text-base font-bold text-white">
                  Student Formula &amp; EV Racing Teams
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered custom combustion and electric formula racing vehicles competing on
                  tracks in Germany, Austria, and Formula Bharat.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="text-2xl font-black text-emerald-400">Project MANAS</div>
                <h3 className="text-base font-bold text-white">
                  Driverless AI Autonomous Vehicle
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recognized by Mahindra Rise Prize for creating an autonomous driverless car
                  capable of navigating complex unstructured Indian road environments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CAMPUS LIFE & MARENA SPORTS TAB */}
        {activeTab === 'campus-life' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Student Life &amp; Amenities
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Vibrant Student Living in Manipal
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Experience world-class living across safe on-campus hostel communities, Marena
                6-level sports arena, multi-cuisine food courts, and iconic collegiate festivals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <img
                  src="/assets/manipal-university/campus-sports.png"
                  alt="Marena Sports"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-bold text-white">Marena 6-Level Sports Complex</h3>
                  <p className="text-xs text-slate-400">
                    140,000 sq ft centralized air-conditioned sports arena with synthetic courts,
                    Olympic gym, squash, futsal, and swimming pools.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <img
                  src="/assets/manipal-university/campus-library.jpg"
                  alt="Central Library"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-bold text-white">1.5 Lakh Sq. Ft. Central Library</h3>
                  <p className="text-xs text-slate-400">
                    5-floor digital library housing 200,000+ print volumes, 50,000+ e-journals, and
                    24/7 quiet study zones.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <img
                  src="/assets/manipal-university/campus-hostel.png"
                  alt="Hostels"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-bold text-white">Modern Residential Hostels</h3>
                  <p className="text-xs text-slate-400">
                    Single and twin-sharing air-conditioned and non-AC rooms with biometric security,
                    high-speed Wi-Fi, and 24/7 medical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PLACEMENTS TAB */}
        {activeTab === 'placements' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Career Track Record
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Career Development &amp; Placements 2024–2026
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Consistently high placement statistics backed by Fortune 500 recruiters and top
                global institutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1">
                <div className="text-3xl font-black text-orange-400">₹54.75 L</div>
                <div className="text-xs text-slate-400 font-semibold">Highest Domestic Package</div>
              </div>
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1">
                <div className="text-3xl font-black text-amber-400">₹12.60 L</div>
                <div className="text-xs text-slate-400 font-semibold">Average Engineering CTC</div>
              </div>
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1">
                <div className="text-3xl font-black text-emerald-400">350+</div>
                <div className="text-xs text-slate-400 font-semibold">Recruiting Companies</div>
              </div>
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1">
                <div className="text-3xl font-black text-blue-400">92%+</div>
                <div className="text-xs text-slate-400 font-semibold">Placement Rate</div>
              </div>
            </div>
          </div>
        )}

        {/* FAQS TAB */}
        {activeTab === 'faqs' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Admissions, Campuses &amp; Life at MAHE
              </h2>
            </div>

            <div className="space-y-3">
              {MANIPAL_CONFIG.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:bg-slate-900/50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-400 transition-transform ${
                        expandedFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaqIndex === idx && (
                    <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-900 bg-slate-950/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-xs text-slate-400 py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-serif text-lg font-black text-white">MANIPAL</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Manipal Academy of Higher Education (MAHE), Deemed to be University under Section 3 of
              the UGC Act, 1956. Conferred Institution of Eminence (IoE) status by the Ministry of
              Education, Government of India.
            </p>
            <p className="text-[10px] text-amber-500 font-medium">★ Inspired by Life</p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Global Campuses
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>Manipal Flagship Campus (Udupi, Karnataka)</li>
              <li>Mangaluru Coastal Healthcare Campus</li>
              <li>Bengaluru Tech &amp; Design Campus (Yelahanka)</li>
              <li>Jamshedpur Campus (MTMC Tata Steel)</li>
              <li>Dubai International Academic City (UAE)</li>
              <li>Melaka Campus (MUCM, Malaysia)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Prominent Institutes
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>Manipal Institute of Technology (MIT)</li>
              <li>Kasturba Medical College (KMC)</li>
              <li>T. A. Pai Management Institute (TAPMI)</li>
              <li>Manipal College of Dental Sciences (MCODS)</li>
              <li>Manipal College of Pharmaceutical Sciences</li>
              <li>Welcomgroup School of Hotel Administration</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Admissions &amp; Contact
            </div>
            <p className="text-[11px]">
              Admissions Office, Director of Admissions, MAHE, Manipal - 576104, Karnataka, India
            </p>
            <p className="text-[11px]">
              Toll-Free Helpline: <span className="text-white font-bold">{MANIPAL_CONFIG.institution.officialHelpline}</span>
            </p>
            <p className="text-[11px]">
              Email: <span className="text-white font-bold">{MANIPAL_CONFIG.institution.admissionsEmail}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Manipal Academy of Higher Education. All Rights Reserved.
          </div>
          <div>
            Raoz Website Maker · Verified Template ID: <span className="font-mono text-slate-400">manipal-university</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
