import React, { useState, useMemo, useEffect } from 'react';
import {
  JNU_CONFIG,
  SchoolItem,
  ProgramItem,
  HostelItem,
  FacultyBookItem,
  AlumniVoice
} from './jawaharlal-nehru-university.config';
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
  ChevronLeft,
  BookMarked,
  Microscope,
  Home,
  Sliders,
  Scale
} from 'lucide-react';

export default function JawaharlalNehruUniversity() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'about' | 'schools' | 'programs' | 'admissions' | 'deprivation' | 'research' | 'hostels' | 'books' | 'faqs'
  >('overview');

  // Accessibility font sizing and language
  const [fontSizeScale, setFontSizeScale] = useState<'normal' | 'large' | 'small'>('normal');
  const [currentLang, setCurrentLang] = useState<'en' | 'hi'>('en');

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero carousel
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: '1,020 Acres Aravalli Ridge Campus & 9-Storey Central Library',
      subtitle: 'Central University by Act of Parliament · NAAC Grade "A++" (3.77 CGPA) · NIRF Rank #2 in India',
      badge: 'Premier Central University · Estd. 1969',
      badgeImg: '/assets/jawaharlal-nehru-university/badge-aravali-campus.svg',
      heroGraphic: '/assets/jawaharlal-nehru-university/hero-aravali-campus.svg',
      ctaText: 'Explore 13 Schools & Centres',
      ctaAction: 'schools',
      bgImg: '/assets/jawaharlal-nehru-university/WzCN11Qnd2bS.jpg'
    },
    {
      title: 'Ranked #2 Among All Indian Universities in NIRF 2024',
      subtitle: 'Alma Mater of Nobel Laureate Abhijit Banerjee, Finance Minister Nirmala Sitharaman & EAM Dr. S. Jaishankar',
      badge: 'NIRF Rank #2 in India',
      badgeImg: '/assets/jawaharlal-nehru-university/badge-nirf-rank2.svg',
      heroGraphic: '/assets/jawaharlal-nehru-university/hero-nirf-rank2.svg',
      ctaText: 'View Institutional Accolades',
      ctaAction: 'about',
      bgImg: '/assets/jawaharlal-nehru-university/KL183IVHgvzL.jpg'
    },
    {
      title: 'CUET 2026 Admissions Open — B.A. (Hons), M.A., M.Sc., MCA & Ph.D.',
      subtitle: 'NTA Common University Entrance Test · Exclusive Deprivation Points Affirmative Action Policy',
      badge: 'CUET 2026 Admissions Desk',
      badgeImg: '/assets/jawaharlal-nehru-university/badge-cuet-2026.svg',
      heroGraphic: '/assets/jawaharlal-nehru-university/hero-cuet-admissions.svg',
      ctaText: 'Apply via CUET 2026',
      ctaAction: 'admissions',
      bgImg: '/assets/jawaharlal-nehru-university/dGANatOatqcH.jpg'
    },
    {
      title: 'Advanced Instrumentation Research Facility (AIRF) & Global Impact',
      subtitle: 'World-Class Transmission Electron Microscopes, 500 MHz NMR & DBT-Supported Centers of Excellence',
      badge: 'Advanced Scientific Research',
      badgeImg: '/assets/jawaharlal-nehru-university/badge-ioe-central.svg',
      heroGraphic: '/assets/jawaharlal-nehru-university/hero-research-impact.svg',
      ctaText: 'Discover AIRF Labs',
      ctaAction: 'research',
      bgImg: '/assets/jawaharlal-nehru-university/Xr1ItkIO5Ulf.jpg'
    },
    {
      title: 'Intellectual Student Living — 18 River Hostels & Parthasarathy Rocks',
      subtitle: 'Rich Democratic Campus Culture, Ganga Dhaba Discussions, 24/7 Library & Subsidized Higher Education',
      badge: '18 Hostels Community Living',
      badgeImg: '/assets/jawaharlal-nehru-university/badge-naac-a-plus.svg',
      heroGraphic: '/assets/jawaharlal-nehru-university/hero-student-life.svg',
      ctaText: 'Tour Campus & Hostels',
      ctaAction: 'hostels',
      bgImg: '/assets/jawaharlal-nehru-university/Hoq0maHd8b0J.jpg'
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
    return JNU_CONFIG.programs.filter((p) => {
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

  // Deprivation Points Calculator state
  const [calcDistrictQuartile, setCalcDistrictQuartile] = useState<'Q1' | 'Q2' | 'None'>('Q1');
  const [calcGender, setCalcGender] = useState<'Male' | 'Female' | 'Transgender'>('Female');
  const [calcLevel, setCalcLevel] = useState<'UG' | 'PG'>('UG');
  const [calcKashmiriMigrant, setCalcKashmiriMigrant] = useState(false);

  const calculatedDeprivation = useMemo(() => {
    let regionalPts = 0;
    if (calcDistrictQuartile === 'Q1') {
      regionalPts = calcLevel === 'UG' ? 5 : 3;
    } else if (calcDistrictQuartile === 'Q2') {
      regionalPts = calcLevel === 'UG' ? 3 : 2;
    }

    let genderPts = 0;
    if (calcGender === 'Female' || calcGender === 'Transgender') {
      genderPts = calcLevel === 'UG' ? 7 : 5;
    }

    const totalPoints = Math.min(12, regionalPts + genderPts);

    return {
      regionalPts,
      genderPts,
      totalPoints,
      explanation: `Awarded ${regionalPts} regional points (${calcDistrictQuartile}) + ${genderPts} gender affirmative points. Final addition to CUET Score: ${totalPoints} Points (Max Capped at 12).`
    };
  }, [calcDistrictQuartile, calcGender, calcLevel]);

  // Admissions Application Form Simulator
  const [appForm, setAppForm] = useState({
    candidateName: '',
    email: '',
    phone: '',
    cuetRoll: '',
    schoolId: 'school-sss',
    programId: 'jnu-prog-ma-economics',
    districtQuartile: 'Q1',
    category: 'General'
  });
  const [appSubmittedTracking, setAppSubmittedTracking] = useState<string | null>(null);
  const [appFormError, setAppFormError] = useState<string>('');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.candidateName.trim() || !appForm.email.trim() || !appForm.phone.trim()) {
      setAppFormError('Please enter candidate full name, email, and mobile contact.');
      return;
    }
    setAppFormError('');
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingId = `JNU-2026-${randomSuffix}`;
    setAppSubmittedTracking(trackingId);
  };

  // Tracking lookup tool
  const [searchTrackingInput, setSearchTrackingInput] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  const handleLookup = () => {
    if (!searchTrackingInput.trim()) {
      setLookupResult('Please enter your Application Reference Number (e.g. JNU-2026-XXXXX)');
      return;
    }
    setLookupResult(
      `✓ Application Record Found: Reference ${searchTrackingInput.trim().toUpperCase()} is verified under JNU CUET 2026 Admissions Desk. Status: Candidate Dossier Under Merit Verification with Deprivation Points Approved.`
    );
  };

  // FAQ accordion
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  return (
    <div
      className={`min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white ${
        fontSizeScale === 'large' ? 'text-lg' : fontSizeScale === 'small' ? 'text-xs' : 'text-sm'
      }`}
    >
      {/* Top Utility Ribbon (JNU Standard Header) */}
      <div className="bg-[#0b1b2d] border-b border-blue-900/40 text-xs px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-200 font-semibold border border-blue-500/40 animate-pulse">
              <Sparkles className="w-3 h-3 text-amber-400" /> CUET 2026 Admissions Portal Live
            </span>
            <span className="hidden md:inline text-slate-300">
              National Institutional Ranking Framework (NIRF) Rank #2 in India · NAAC Grade "A++"
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            {/* Accessibility text resize */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <button
                onClick={() => setFontSizeScale('small')}
                className={`px-1 font-bold ${fontSizeScale === 'small' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSizeScale('normal')}
                className={`px-1 font-bold ${fontSizeScale === 'normal' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Default font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeScale('large')}
                className={`px-1 font-bold ${fontSizeScale === 'large' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setCurrentLang(currentLang === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 font-semibold border border-blue-700 transition-colors"
            >
              {currentLang === 'en' ? 'हिंदी रूपांतरण' : 'English View'}
            </button>

            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+91 11 2674 2575</span>
            </span>

            <button
              onClick={() => setActiveTab('admissions')}
              className="px-2.5 py-0.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold transition-colors"
            >
              CUET Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Header with Logo & Crest */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('overview')}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-950 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0F2847] rounded-[7px] flex items-center justify-center p-1">
                <Flame className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-wide text-white group-hover:text-blue-300 transition-colors">
                  JAWAHARLAL NEHRU UNIVERSITY
                </span>
                <span className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  NIRF #2
                </span>
              </div>
              <p className="text-[11px] font-semibold text-rose-400 tracking-wide">
                जवाहरलाल नेहरू विश्वविद्यालय, नई दिल्ली
              </p>
              <p className="text-[9px] text-amber-400 font-medium tracking-wider">
                ★ A CENTRAL UNIVERSITY ACCREDITED NAAC GRADE "A++" (3.77 CGPA)
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-300">
            {[
              { id: 'overview', label: 'Home' },
              { id: 'about', label: 'About JNU' },
              { id: 'schools', label: '13 Schools' },
              { id: 'programs', label: 'Programs' },
              { id: 'admissions', label: 'Admissions 2026' },
              { id: 'deprivation', label: 'Deprivation Points' },
              { id: 'research', label: 'AIRF & Research' },
              { id: 'hostels', label: '18 Hostels & Life' },
              { id: 'books', label: 'Faculty Books' },
              { id: 'faqs', label: 'FAQs' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id as any)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === nav.id
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'hover:text-white hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/30 transition-all hover:scale-105"
            >
              <GraduationCap className="w-4 h-4" /> CUET 2026
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
              { id: 'about', label: 'About JNU (Estd. 1969 Parliament Act)' },
              { id: 'schools', label: '13 Schools & 8 Special Centres' },
              { id: 'programs', label: 'Degree Programs (B.A., M.A., Ph.D.)' },
              { id: 'admissions', label: 'CUET 2026 Admissions Portal' },
              { id: 'deprivation', label: 'Deprivation Points Calculator' },
              { id: 'research', label: 'AIRF Facility & Sponsored Research' },
              { id: 'hostels', label: '18 River Hostels & Student Life' },
              { id: 'books', label: 'Recent Faculty Publications' },
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
                    ? 'bg-blue-600 text-white'
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
          {/* Background Image with Dark Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroSlides[heroSlide].bgImg}
              alt={heroSlides[heroSlide].title}
              className="w-full h-full object-cover opacity-25 filter blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0F2847]/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
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
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-700/30 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>{heroSlides[heroSlide].ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('programs')}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:border-slate-500"
                >
                  Browse Degree Programs
                </button>
              </div>

              {/* Institutional Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-slate-300">
                <div>
                  <div className="text-2xl font-black text-amber-400">#2</div>
                  <div className="text-xs text-slate-400 font-medium">NIRF Universities India</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">3.77</div>
                  <div className="text-xs text-slate-400 font-medium">NAAC Grade "A++" CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400">1,020</div>
                  <div className="text-xs text-slate-400 font-medium">Acres Aravalli Campus</div>
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
                  <span className="font-semibold text-blue-400">JNU Official Showcase</span>
                  <span className="text-slate-400">Slide {heroSlide + 1} of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination */}
        <div className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    heroSlide === idx
                      ? 'w-8 bg-blue-500 shadow-md shadow-blue-500/50'
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
              title: 'NIRF Rank #2 in India',
              subtitle: 'Top Central University',
              icon: Trophy,
              color: 'text-amber-400'
            },
            {
              title: 'NAAC Grade A++',
              subtitle: '3.77 / 4.0 CGPA Highest Tier',
              icon: Award,
              color: 'text-emerald-400'
            },
            {
              title: 'Central University',
              subtitle: 'Parliament Act of 1966',
              icon: Shield,
              color: 'text-blue-400'
            },
            {
              title: '1,020 Acres Campus',
              subtitle: 'Aravalli Ridge Biodiversity',
              icon: MapPin,
              color: 'text-green-400'
            },
            {
              title: 'CUET 2026 Admissions',
              subtitle: 'Deprivation Points System',
              icon: Calendar,
              color: 'text-rose-400'
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
            {/* 1. University Heritage & Institutional Welcome */}
            <div className="bg-gradient-to-br from-slate-950 via-[#0a1829] to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/30">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Established in 1969 by an Act of Parliament
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif font-black text-white">
                    India’s Foremost Centre of Critical Thought, Interdisciplinary Research &amp; Inclusive Higher Education
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Jawaharlal Nehru University was established under the leadership of Prime Minister
                    Indira Gandhi and foreign minister M.C. Chagla through the JNU Act of 1966.
                    Occupying a serene, biodiverse 1,020-acre enclave in the Aravalli hills of South
                    Delhi, JNU is globally recognized for its egalitarian academic structure,
                    pioneering foreign language schools, and profound influence on international
                    relations, public economics, and historical sciences.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-amber-400">13 Schools</div>
                      <div className="text-xs text-slate-400">&amp; 8 Special Centres</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-blue-400">5,000+</div>
                      <div className="text-xs text-slate-400">Ph.D. Scholars Enrolled</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-emerald-400">18 Hostels</div>
                      <div className="text-xs text-slate-400">Residential Community</div>
                    </div>
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-xl font-black text-rose-400">65%+</div>
                      <div className="text-xs text-slate-400">Postgrad &amp; Research Students</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
                    <img
                      src="/assets/jawaharlal-nehru-university/MYZWv86gx2eK.jpeg"
                      alt="JNU Campus Architecture"
                      className="w-full h-48 object-cover rounded-lg border border-slate-700"
                    />
                    <div className="text-center space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Leadership of JNU
                      </div>
                      <div className="text-sm font-black text-white">Prof. Santishree Dhulipudi Pandit</div>
                      <div className="text-xs text-slate-400">Vice Chancellor · JNU New Delhi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 13 Academic Schools & 8 Centres Preview */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Academic Faculties
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                    13 Schools &amp; 8 Interdisciplinary Centres
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('schools')}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                >
                  <span>Explore All Schools &amp; Deans</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {JNU_CONFIG.schools.slice(0, 6).map((school) => (
                  <div
                    key={school.id}
                    className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-xl p-5 space-y-4 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                          {school.shortCode}
                        </span>
                        <span className="text-[11px] font-semibold text-amber-400">
                          Estd. {school.established}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white leading-snug">{school.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {school.description}
                      </p>
                      <div className="text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-300">Dean: </span>
                        <span>{school.dean}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        {school.keyStats.phdScholars} Ph.D. Scholars
                      </span>
                      <button
                        onClick={() => {
                          setSelectedSchoolFilter(school.id);
                          setActiveTab('programs');
                        }}
                        className="font-bold text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <span>View Programs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Deprivation Points System Highlight */}
            <div className="bg-gradient-to-r from-rose-950/70 via-slate-950 to-blue-950/70 border border-rose-500/30 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-600/30 text-rose-300 text-xs font-bold border border-rose-500/40">
                    <Scale className="w-4 h-4 text-rose-400" /> Groundbreaking Social Affirmative Action
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                    Unique JNU Deprivation Points Policy (Up to 12 Points)
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Unlike standard admissions, JNU awards up to 12 extra merit points to candidates
                    from backward district quartiles and all female/transgender applicants. This
                    ensures students from remote villages in Bihar, Odisha, Northeast India, and the
                    Himalayas compete equitably with metropolitan aspirants.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs">
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700 text-slate-200">
                      Quartile 1: +5 Points (UG) / +3 Points (PG)
                    </span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700 text-slate-200">
                      Female &amp; Transgender: Up to +7 Points
                    </span>
                    <span className="bg-slate-900 px-3 py-1 rounded border border-slate-700 text-slate-200">
                      Kashmiri Migrants Concession
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => setActiveTab('deprivation')}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 transition-all text-center"
                  >
                    Calculate Your Deprivation Points
                  </button>
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition-all text-center"
                  >
                    CUET 2026 Admissions Desk
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Nobel Laureates & National Leadership Alumni Spotlight */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Global Statesmanship &amp; Laureates
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
                  Distinguished JNU Alumni &amp; Scholars
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {JNU_CONFIG.alumniVoices.map((alumni, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
                        {alumni.name.charAt(0)}
                      </div>
                      <h4 className="text-base font-bold text-white">{alumni.name}</h4>
                      <p className="text-xs font-semibold text-blue-400">
                        {alumni.role} · {alumni.organization}
                      </p>
                      <p className="text-[11px] text-slate-400">{alumni.degree} ({alumni.batch})</p>
                      <p className="text-xs text-slate-300 italic pt-2">"{alumni.quote}"</p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] font-medium text-amber-400">
                      ★ {alumni.achievement}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Faculty Books & Publications Strip */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Scholarly Output
                  </span>
                  <h3 className="text-2xl font-serif font-black text-white">
                    Recent Books by JNU Faculty
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('books')}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>View All Publications</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {JNU_CONFIG.facultyBooks.map((book) => (
                  <div
                    key={book.id}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex gap-4 items-center"
                  >
                    <img
                      src={book.coverImg}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded shadow border border-slate-700 flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white leading-tight">{book.title}</h4>
                      <p className="text-xs font-semibold text-blue-400">{book.author}</p>
                      <p className="text-[11px] text-slate-400">{book.school}</p>
                      <p className="text-[10px] text-amber-400/90">{book.publisher}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT JNU TAB */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Institutional Mandate
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
                About Jawaharlal Nehru University
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Jawaharlal Nehru University was founded in 1969 through an Act of the Indian Parliament.
                  It was named after Jawaharlal Nehru, independent India's first Prime Minister. Prof.
                  G. Parthasarathi was the first Vice-Chancellor. The university’s founding ethos was
                  shaped by the objective to make education an instrument of social justice, national
                  integration, and critical humanism.
                </p>
                <p>
                  JNU was accorded the <strong className="text-white">highest rating of 3.77 out of 4.0 (A++ Grade)</strong>{' '}
                  by the National Assessment and Accreditation Council (NAAC) in its 4th Cycle review.
                  In the National Institutional Ranking Framework (NIRF) conducted by the Ministry of
                  Education, JNU has held the <strong className="text-white">Rank #2 position among all Universities in India</strong>{' '}
                  for consecutive years.
                </p>
                <p>
                  JNU is renowned for its interdisciplinary approach. Rather than conventional departments,
                  it is organized into specialized <em>Schools</em> composed of <em>Centres</em>, fostering
                  cross-pollination between humanities, sciences, languages, and technical disciplines. Over
                  65% of students are enrolled in research degrees (M.Phil/Ph.D.).
                </p>
              </div>

              {/* Statutory Leadership Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-blue-400 uppercase">The Visitor</div>
                  <div className="text-sm font-bold text-white">{JNU_CONFIG.institution.visitor}</div>
                  <div className="text-xs text-slate-400">Head of the Republic of India</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-blue-400 uppercase">The Chancellor</div>
                  <div className="text-sm font-bold text-white">{JNU_CONFIG.institution.chancellor}</div>
                  <div className="text-xs text-slate-400">Former Foreign Secretary of India</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-blue-400 uppercase">The Vice Chancellor</div>
                  <div className="text-sm font-bold text-white">{JNU_CONFIG.institution.viceChancellor}</div>
                  <div className="text-xs text-slate-400">Academic &amp; Administrative Head</div>
                </div>
              </div>
            </div>

            {/* Official Accreditations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-black text-white">
                Official Rankings &amp; Accreditations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {JNU_CONFIG.rankings.map((rnk, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2"
                  >
                    <div className="text-xs font-semibold text-blue-400">{rnk.category}</div>
                    <div className="text-xl font-black text-white">{rnk.rank}</div>
                    <div className="text-xs font-bold text-amber-300">{rnk.body}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{rnk.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 13 SCHOOLS TAB */}
        {activeTab === 'schools' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Academic Schools &amp; Special Centres
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                13 Specialized Schools of JNU
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                JNU's academic governance is structured into Schools consisting of interdisciplinary
                Centres, ensuring collaborative research across social sciences, sciences, and languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {JNU_CONFIG.schools.map((school) => (
                <div
                  key={school.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30">
                        {school.shortCode}
                      </span>
                      <span className="text-slate-400">Estd. {school.established}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{school.name}</h3>
                    <div className="text-xs text-amber-400 font-medium">
                      Dean: {school.dean}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {school.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Constituent Centres:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {school.centres.map((centre, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-400">•</span>
                            <span>{centre}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="text-slate-400">
                      <span className="text-white font-bold">{school.keyStats.phdScholars}</span> Ph.D. Researchers
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSchoolFilter(school.id);
                        setActiveTab('programs');
                      }}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white rounded-lg font-bold transition-colors"
                    >
                      View Programs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROGRAMS TAB */}
        {activeTab === 'programs' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Academic Offerings
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Undergraduate, Postgraduate &amp; Research Degrees
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Explore foreign languages, international studies, social sciences, biotechnology,
                engineering, and management programs at JNU.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchProgramQuery}
                    onChange={(e) => setSearchProgramQuery(e.target.value)}
                    placeholder="Search programs (e.g. Economics, Korean, Biotechnology, IR, B.Tech)..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
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

                <div className="md:col-span-3">
                  <select
                    value={selectedDegreeLevel}
                    onChange={(e) => setSelectedDegreeLevel(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="All">All Degree Levels</option>
                    <option value="Undergraduate">Undergraduate (B.A./B.Tech)</option>
                    <option value="Postgraduate">Postgraduate (M.A./M.Sc./MCA)</option>
                    <option value="Doctoral">Doctoral (Ph.D.)</option>
                  </select>
                </div>

                <div className="md:col-span-3">
                  <select
                    value={selectedSchoolFilter}
                    onChange={(e) => setSelectedSchoolFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="All">All Schools</option>
                    {JNU_CONFIG.schools.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.shortCode} — {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Showing {filteredPrograms.length} of {JNU_CONFIG.programs.length} programs</span>
                {(searchProgramQuery || selectedDegreeLevel !== 'All' || selectedSchoolFilter !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchProgramQuery('');
                      setSelectedDegreeLevel('All');
                      setSelectedSchoolFilter('All');
                    }}
                    className="text-blue-400 hover:underline"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Program Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrograms.map((prog) => {
                const school = JNU_CONFIG.schools.find((s) => s.id === prog.schoolId);
                return (
                  <div
                    key={prog.id}
                    className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-xl p-5 space-y-4 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30">
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
                          <span className="text-slate-400">Subsidized Tuition: </span>
                          <span className="font-bold text-emerald-400">{prog.annualFeeINR}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProgramDetail(prog)}
                        className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                        <span>Syllabus &amp; Details</span>
                      </button>
                      <button
                        onClick={() => {
                          setAppForm((prev) => ({ ...prev, programId: prog.id }));
                          setActiveTab('admissions');
                        }}
                        className="py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PROGRAM DETAIL MODAL */}
        {selectedProgramDetail && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-blue-600/20 text-blue-400 text-xs font-bold border border-blue-500/30">
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
                    Admission Channels &amp; Eligibility:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProgramDetail.eligibility}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProgramDetail.admissionRoutes.map((rt, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-[11px] font-semibold border border-blue-800"
                      >
                        ✓ {rt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Curriculum Highlights:
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
                    Career Roles:
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

                <div className="p-4 bg-blue-950/40 border border-blue-500/30 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Annual Academic Fee:</div>
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
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    Apply for CUET 2026
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADMISSIONS TAB */}
        {activeTab === 'admissions' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Central Admission Channels
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                JNU Admissions 2026-27 Portal
              </h2>
              <p className="text-slate-300 text-sm max-w-3xl">
                Admissions to B.A. (Hons.) and Post-Graduate degrees are conducted through CUET (UG
                &amp; PG) administered by the National Testing Agency (NTA). Ph.D. admissions are
                conducted through the national entrance examination and UGC/CSIR-JRF channels.
              </p>
            </div>

            {/* Fast-Track Application Form Simulator */}
            <div className="bg-gradient-to-br from-slate-950 to-[#0a1829] border border-blue-500/30 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400">
                  <FileCheck2 className="w-4 h-4" /> Fast-Track Online Registration Simulator
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Begin Your Application to JNU (Academic Session 2026-27)
                </h3>
              </div>

              {appSubmittedTracking ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Application Successfully Registered!
                      </h4>
                      <p className="text-xs text-emerald-300">
                        Candidate record for {appForm.candidateName} has been recorded in the JNU
                        Admissions System.
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
                    A confirmation email has been dispatched to{' '}
                    <span className="text-white font-medium">{appForm.email}</span>.
                  </p>

                  <button
                    onClick={() => setAppSubmittedTracking(null)}
                    className="text-xs text-blue-400 hover:underline"
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
                        value={appForm.candidateName}
                        onChange={(e) => setAppForm({ ...appForm, candidateName: e.target.value })}
                        placeholder="e.g. Siddharth Mukherjee"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
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
                        placeholder="siddharth@example.com"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
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
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Academic School
                      </label>
                      <select
                        value={appForm.schoolId}
                        onChange={(e) => setAppForm({ ...appForm, schoolId: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        {JNU_CONFIG.schools.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.shortCode} — {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Degree Program
                      </label>
                      <select
                        value={appForm.programId}
                        onChange={(e) => setAppForm({ ...appForm, programId: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        {JNU_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Deprivation Quartile Category
                      </label>
                      <select
                        value={appForm.districtQuartile}
                        onChange={(e) => setAppForm({ ...appForm, districtQuartile: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Q1">Quartile 1 (High Deprivation District)</option>
                        <option value="Q2">Quartile 2 (Medium Deprivation)</option>
                        <option value="None">Non-Deprived District</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-slate-400">
                      Central Application Fee: Highly subsidized per Govt. of India rules.
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-blue-700/30 transition-all hover:scale-105"
                    >
                      Generate JNU Application Reference
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Application Lookup Tool */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-400" />
                <span>Application Reference Verification Desk</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                <input
                  type="text"
                  value={searchTrackingInput}
                  onChange={(e) => setSearchTrackingInput(e.target.value)}
                  placeholder="Enter tracking reference (e.g. JNU-2026-XXXXX)..."
                  className="flex-1 min-w-[240px] px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
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

        {/* DEPRIVATION POINTS CALCULATOR TAB */}
        {activeTab === 'deprivation' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Pioneering Affirmative Action Policy
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                JNU Deprivation Points Policy &amp; Calculator
              </h2>
              <p className="text-slate-300 text-sm max-w-3xl">
                JNU awards up to 12 Deprivation Points added to entrance examination scores to
                candidates from educationally and economically backward districts, as well as female
                and transgender aspirants.
              </p>
            </div>

            {/* Calculator Simulator */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Calculator className="w-5 h-5" />
                <span>Calculate Your Eligible Deprivation Points</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    District Deprivation Quartile
                  </label>
                  <select
                    value={calcDistrictQuartile}
                    onChange={(e) => setCalcDistrictQuartile(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Q1">Quartile 1 (High Deprivation District)</option>
                    <option value="Q2">Quartile 2 (Medium Deprivation District)</option>
                    <option value="None">None / Non-Deprived District</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Candidate Gender
                  </label>
                  <select
                    value={calcGender}
                    onChange={(e) => setCalcGender(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Female">Female (+7 UG / +5 PG)</option>
                    <option value="Transgender">Transgender (+7 UG / +5 PG)</option>
                    <option value="Male">Male</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Degree Level Applied For
                  </label>
                  <select
                    value={calcLevel}
                    onChange={(e) => setCalcLevel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="UG">Undergraduate (B.A. Hons)</option>
                    <option value="PG">Postgraduate (M.A. / M.Sc. / Ph.D.)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Special Category
                  </label>
                  <label className="flex items-center gap-2 mt-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcKashmiriMigrant}
                      onChange={(e) => setCalcKashmiriMigrant(e.target.checked)}
                      className="accent-blue-500 w-4 h-4"
                    />
                    <span>Kashmiri Migrant / Defense Ward</span>
                  </label>
                </div>
              </div>

              {/* Calculator Outcome */}
              <div className="p-5 bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/40 rounded-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-400">Total Deprivation Points Awarded:</div>
                    <div className="text-3xl font-black text-amber-400">
                      +{calculatedDeprivation.totalPoints} Points
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Breakdown:</div>
                    <div className="text-xs font-semibold text-slate-200">
                      Regional: +{calculatedDeprivation.regionalPts} | Gender: +{calculatedDeprivation.genderPts}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 border-t border-slate-800 pt-2">
                  {calculatedDeprivation.explanation}
                </p>
              </div>
            </div>

            {/* Quartile Explanation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {JNU_CONFIG.deprivationPoints.quartiles.map((q, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2"
                >
                  <div className="text-xs font-bold text-amber-400 uppercase">{q.points}</div>
                  <div className="text-base font-bold text-white">{q.category}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{q.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESEARCH & AIRF TAB */}
        {activeTab === 'research' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Pioneering Research Hubs
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Advanced Instrumentation Research Facility (AIRF)
              </h2>
              <p className="text-slate-300 text-sm max-w-3xl">
                AIRF was created to provide central analytical instrumentation to all science schools
                of JNU and external universities. Housing high-end electron microscopy, mass
                spectrometry, and circular dichroism equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <Microscope className="w-8 h-8 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Advanced Electron Microscopy</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Houses High-Resolution Transmission Electron Microscope (HR-TEM) and Field Emission
                  Scanning Electron Microscope (FE-SEM) supporting nanotechnology and cell biology.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <Laptop className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Bioinformatics &amp; Supercomputing</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  DBT-funded high-performance computational clusters analyzing whole-genome
                  sequencing, molecular dynamics simulations, and structural drug screening.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <Trophy className="w-8 h-8 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Interdisciplinary Special Centres</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Special Centre for Molecular Medicine (SCMM), Special Centre for Nanosciences, and
                  Special Centre for Disaster Research addressing national socio-technological challenges.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 18 HOSTELS & STUDENT LIFE TAB */}
        {activeTab === 'hostels' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Residential Campus Life
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                18 Hostels Named After Sacred Indian Rivers
              </h2>
              <p className="text-slate-300 text-sm max-w-3xl">
                JNU is a residential university where over 80% of students live on campus in 18
                hostels, each named after an Indian river representing unity in diversity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {JNU_CONFIG.hostels.map((hostel) => (
                <div
                  key={hostel.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30">
                      {hostel.type}
                    </span>
                    <span className="text-slate-400">{hostel.capacity} Residents</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{hostel.name}</h3>
                  <div className="text-xs text-amber-400">{hostel.riverOrigin}</div>
                  <ul className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
                    {hostel.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Landmarks: PSR Rocks & Ganga Dhaba */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">Parthasarathy Rocks (PSR)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The highest natural elevation in the university, named after founding Vice
                  Chancellor G. Parthasarathi. A sanctuary of rocky outcrops and peacocks in the
                  Aravalli ridge, famous for serene sunsets and scholarly contemplation.
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">Ganga Dhaba &amp; Debating Tradition</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Legendary open-air tea stalls where students, professors, and visiting scholars
                  congregate late into the night for passionate political debates, poetry readings,
                  and philosophical discussions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FACULTY BOOKS TAB */}
        {activeTab === 'books' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Faculty Monographs &amp; Research
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Recent Books by JNU Faculty
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                JNU professors author foundational texts across social sciences, philosophy, border
                studies, and economic development published by leading global presses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {JNU_CONFIG.facultyBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4"
                >
                  <img
                    src={book.coverImg}
                    alt={book.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg border border-slate-700"
                  />
                  <div className="space-y-1">
                    <span className="text-xs text-amber-400 font-semibold">{book.publisher}</span>
                    <h3 className="text-lg font-bold text-white">{book.title}</h3>
                    <div className="text-xs font-semibold text-blue-400">{book.author}</div>
                    <div className="text-[11px] text-slate-400">{book.designation}</div>
                    <div className="text-[11px] text-slate-500">{book.school}</div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQS TAB */}
        {activeTab === 'faqs' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Admissions, Deprivation Points &amp; Life at JNU
              </h2>
            </div>

            <div className="space-y-3">
              {JNU_CONFIG.faqs.map((faq, idx) => (
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
                      className={`w-4 h-4 text-blue-400 transition-transform ${
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
              <Flame className="w-5 h-5 text-blue-400" />
              <span className="font-serif text-base font-black text-white">JAWAHARLAL NEHRU UNIVERSITY</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Jawaharlal Nehru University, New Delhi. A Central University established by an Act of
              Parliament (1966). Conferred NAAC Grade "A++" (3.77 CGPA) and NIRF Rank #2 in India.
            </p>
            <p className="text-[10px] text-amber-400 font-medium">
              ★ {JNU_CONFIG.institution.motto}
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Academic Schools
            </div>
            <ul className="space-y-1 text-[11px]">
              <li>School of International Studies (SIS)</li>
              <li>School of Social Sciences (SSS)</li>
              <li>School of Language, Literature &amp; Culture Studies</li>
              <li>School of Life Sciences (SLS)</li>
              <li>School of Physical Sciences (SPS)</li>
              <li>School of Engineering (SOE)</li>
              <li>ABV School of Management &amp; Entrepreneurship</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Special Centres &amp; Facilities
            </div>
            <ul className="space-y-1 text-[11px]">
              <li>Advanced Instrumentation Research Facility (AIRF)</li>
              <li>Dr. B.R. Ambedkar Central Library (9-Storey)</li>
              <li>Centre for Molecular Medicine (SCMM)</li>
              <li>Centre for Disaster Research (SCDR)</li>
              <li>Centre for the Study of Law &amp; Governance</li>
              <li>18 Hostels (Ganga, Yamuna, Jhelum, Sutlej)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Admissions &amp; Contact Desk
            </div>
            <p className="text-[11px]">
              Admissions Branch, Room No. 28, Administrative Block, JNU, New Delhi - 110067, India
            </p>
            <p className="text-[11px]">
              Helpline: <span className="text-white font-bold">{JNU_CONFIG.institution.officialHelpline}</span>
            </p>
            <p className="text-[11px]">
              Email: <span className="text-white font-bold">{JNU_CONFIG.institution.admissionsEmail}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Jawaharlal Nehru University, New Delhi. All Rights Reserved.
          </div>
          <div>
            Raoz Website Maker · Verified Template ID: <span className="font-mono text-slate-400">jawaharlal-nehru-university</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
