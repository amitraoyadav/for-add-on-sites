import React, { useState, useMemo } from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Download,
  ExternalLink,
  FileText,
  Filter,
  GraduationCap,
  Globe,
  Heart,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  Menu,
  Music,
  Phone,
  Play,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  X
} from 'lucide-react';
import { CHRIST_CONFIG, ProgramItem, SchoolItem, CampusItem } from './christ-university.config';

type TabView = 'home' | 'academics' | 'admissions' | 'campuses' | 'placements' | 'life' | 'research' | 'contact';

export const CHRISTUniversity: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<TabView>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCampusId, setActiveCampusId] = useState<string>('bangalore-central');

  // Hero Slider
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: 'Excellence and Service',
      subtitle: 'NAAC Grade A+ Accredited · Ranked Among Top 60 Universities in India',
      highlight: '55+ Years of Educational Eminence by CMI Fathers',
      cta: 'Explore Programs',
      ctaTab: 'academics' as TabView,
      image: '/assets/christ-university/hero-excellence-service.svg',
      fallbackJpg: '/assets/christ-university/campus-main.jpg'
    },
    {
      title: 'Pan-India Multi-Campus Ecosystem',
      subtitle: '6 Modern Campuses Across Bengaluru, Delhi NCR, and Pune Lavasa',
      highlight: 'World-Class Infrastructure & Vibrant Collegiate Traditions',
      cta: 'Tour Campuses',
      ctaTab: 'campuses' as TabView,
      image: '/assets/christ-university/hero-campuses-network.svg',
      fallbackJpg: '/assets/christ-university/campus-hero-1.jpg'
    },
    {
      title: 'Christ University Entrance Test (CUET) 2026',
      subtitle: 'Online Applications Open for Undergraduate, Postgraduate & Law Programs',
      highlight: 'Merit-Based Selection · Skill Assessment & Micro Presentation',
      cta: 'Apply for CUET 2026',
      ctaTab: 'admissions' as TabView,
      image: '/assets/christ-university/hero-cuet-admissions.svg',
      fallbackJpg: '/assets/christ-university/campus-auditorium.jpg'
    },
    {
      title: 'Global Career Placements & Fortune 500 Network',
      subtitle: 'Highest CTC ₹21.46 LPA · Average CTC ₹10.50 LPA · 450+ Annual Recruiters',
      highlight: 'Deloitte, Goldman Sachs, Amazon, EY, BCG, Cisco & Bain',
      cta: 'Placement Report',
      ctaTab: 'placements' as TabView,
      image: '/assets/christ-university/hero-placements-global.svg',
      fallbackJpg: '/assets/christ-university/campus-labs.jpg'
    },
    {
      title: 'Vibrant Campus Life: In-Bloom & Bhasha Utsav',
      subtitle: '38,000+ Students · 70+ Nationalities · 100+ Clubs & Cultural Societies',
      highlight: 'Home to the Renowned Christ University Choir & Symphony Orchestra',
      cta: 'Discover Culture',
      ctaTab: 'life' as TabView,
      image: '/assets/christ-university/hero-cultural-inbloom.svg',
      fallbackJpg: '/assets/christ-university/event-cultural.jpg'
    }
  ];

  // Academics Filtering
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState<string>('all');
  const [programSearch, setProgramSearch] = useState<string>('');
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramItem | null>(null);

  // Admissions Application Simulator State
  const [appStep, setAppStep] = useState(1);
  const [appForm, setAppForm] = useState({
    candidateName: '',
    email: '',
    phone: '',
    campusPreference: 'bangalore-central',
    programId: 'bba-honours',
    previousScore: '88',
    category: 'General',
    statement: ''
  });
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  // Status Lookup Simulator
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<any | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    return CHRIST_CONFIG.programs.filter((p) => {
      const matchSchool = selectedSchool === 'all' || p.schoolId === selectedSchool;
      const matchLevel = selectedDegreeLevel === 'all' || p.degreeLevel === selectedDegreeLevel;
      const matchSearch =
        programSearch.trim() === '' ||
        p.title.toLowerCase().includes(programSearch.toLowerCase()) ||
        p.careerRoles.some((r) => r.toLowerCase().includes(programSearch.toLowerCase())) ||
        p.curriculumOverview.some((c) => c.toLowerCase().includes(programSearch.toLowerCase()));
      return matchSchool && matchLevel && matchSearch;
    });
  }, [selectedSchool, selectedDegreeLevel, programSearch]);

  const activeCampus = useMemo(() => {
    return CHRIST_CONFIG.campuses.find((c) => c.id === activeCampusId) || CHRIST_CONFIG.campuses[0];
  }, [activeCampusId]);

  // Handle Application Submit
  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.candidateName || !appForm.email || !appForm.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }
    const randNum = Math.floor(10000 + Math.random() * 90000);
    const generatedId = `CU-2026-${randNum}`;
    setSubmittedAppId(generatedId);
    setAppStep(3);
  };

  // Handle Application Lookup
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;
    setLookupResult({
      appId: lookupQuery.toUpperCase().startsWith('CU-') ? lookupQuery.toUpperCase() : `CU-2026-78412`,
      applicantName: 'Applicant Candidate',
      program: 'Bachelor of Business Administration (BBA Honours)',
      campus: 'Bangalore Central Campus',
      stage: 'CUET Entrance Test Scheduled',
      examDate: 'March 28, 2026 (10:00 AM - 12:00 PM)',
      admitCardStatus: 'Generated & Ready for Download',
      venue: 'Online Proctored Mode (Slot 02)'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 1. TOP NOTIFICATION TICKER & QUICK LINKS */}
      <div className="bg-[#05172C] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Urgent Admissions Ticker */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Notice
            </span>
            <span className="text-slate-300 truncate">
              Christ University Entrance Test (CUET) 2026 Session I & II Registrations Open · NAAC Grade 'A+' (4th Cycle)
            </span>
          </div>

          {/* Quick Campuses Switcher & Portal links */}
          <div className="flex items-center gap-3 text-slate-300 text-[11px] shrink-0">
            <span className="hidden lg:inline text-slate-400">Campuses:</span>
            <div className="hidden sm:flex items-center gap-2">
              {['Bengaluru', 'Delhi NCR', 'Pune Lavasa'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setActiveTab('campuses');
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {loc}
                </button>
              ))}
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <button
              onClick={() => setActiveTab('admissions')}
              className="text-amber-400 font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> CUET Portal 2026
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="https://www.christuniversity.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              Official Web <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & BRAND IDENTITY */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Official University Seal & Typography */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group transition-transform active:scale-[0.99]"
          >
            <img
              src="/assets/christ-university/logo.svg"
              alt="CHRIST (Deemed to be University)"
              className="h-12 md:h-14 w-auto object-contain"
              onError={(e) => {
                // Fallback text banner if SVG fails
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl md:text-2xl tracking-widest text-[#082142] group-hover:text-blue-900 transition-colors">
                  CHRIST
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded">
                  Deemed to be University
                </span>
              </div>
              <p className="text-[11px] font-serif font-semibold text-amber-700 tracking-wider">
                Excellence and Service · Estd. 1969 · Bengaluru
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'academics', label: 'Academics & Schools' },
              { id: 'admissions', label: 'Admissions (CUET)' },
              { id: 'campuses', label: 'Campuses' },
              { id: 'placements', label: 'Placements' },
              { id: 'life', label: 'Campus Life' },
              { id: 'research', label: 'Research' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabView)}
                className={`px-3 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#082142] text-amber-400 shadow-sm'
                    : 'text-slate-700 hover:text-[#082142] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Apply Now & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('admissions')}
              className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs tracking-wide shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <span className="bg-slate-950 text-white text-[9px] px-1 py-0.2 rounded font-mono">CUET</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl">
            {[
              { id: 'home', label: 'Home' },
              { id: 'academics', label: 'Academics & Schools' },
              { id: 'admissions', label: 'Admissions & CUET 2026' },
              { id: 'campuses', label: 'Campuses & Infrastructure' },
              { id: 'placements', label: 'Career & Placements' },
              { id: 'life', label: 'Campus Life & In-Bloom' },
              { id: 'research', label: 'Research & Publications' },
              { id: 'contact', label: 'Contact & Campuses' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as TabView);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id ? 'bg-[#082142] text-amber-400 font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 3. BODY VIEW CONTENT */}
      <main>
        {/* ========================================================================= */}
        {/* VIEW 1: HOME PAGE */}
        {/* ========================================================================= */}
        {activeTab === 'home' && (
          <div>
            {/* HERO CAROUSEL */}
            <div className="relative bg-[#05172C] text-white overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center">
              {/* Background Slide Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroSlides[heroSlide].image}
                  alt={heroSlides[heroSlide].title}
                  className="w-full h-full object-cover opacity-85 transition-opacity duration-700"
                  onError={(e) => {
                    // Fallback to photo if SVG load problem
                    (e.currentTarget as HTMLImageElement).src = heroSlides[heroSlide].fallbackJpg;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05172C] via-[#05172C]/70 to-transparent" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
                <div className="max-w-2xl space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{heroSlides[heroSlide].highlight}</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    {heroSlides[heroSlide].title}
                  </h1>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {heroSlides[heroSlide].subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveTab(heroSlides[heroSlide].ctaTab)}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>{heroSlides[heroSlide].cta}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('admissions')}
                      className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-sm border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                    >
                      CUET Eligibility 2026
                    </button>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-[#05172C]/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-700">
                <button
                  onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-1 hover:text-amber-400 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        heroSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-500'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                  className="p-1 hover:text-amber-400 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* KEY ACCREDITATION & STATS BAR */}
            <div className="bg-white border-y border-slate-200 shadow-sm py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                  <div className="border-r border-slate-100 last:border-none px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-[#082142]">NAAC 'A+'</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">4th Consecutive Cycle</p>
                  </div>
                  <div className="border-r border-slate-100 last:border-none px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-[#082142]">TOP 60</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">NIRF Ranked University</p>
                  </div>
                  <div className="border-r border-slate-100 last:border-none px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-amber-600">38,000+</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Active Students</p>
                  </div>
                  <div className="border-r border-slate-100 last:border-none px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-[#082142]">250+</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Degree Programs</p>
                  </div>
                  <div className="border-r border-slate-100 last:border-none px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-emerald-600">₹21.46 LPA</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Highest Placement CTC</p>
                  </div>
                  <div className="px-2">
                    <p className="font-serif font-black text-2xl md:text-3xl text-[#082142]">6 Campuses</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Pan-India Footprint</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOUNDATIONAL HERITAGE SPOTLIGHT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
              <div className="bg-gradient-to-br from-slate-900 to-[#082142] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-3xl space-y-4">
                  <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
                    Institutional Heritage · Founded 1969
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                    Nurturing Holistic Minds with "Excellence and Service"
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Established in 1969 as Christ College by the Carmelites of Mary Immaculate (CMI)—founded by Saint
                    Kuriakose Elias Chavara—CHRIST was declared a Deemed to be University in 2008 by the Ministry of
                    Human Resource Development, Government of India. Over 55+ years, it has transformed into a global
                    educational benchmark that combines academic excellence, values-driven leadership, and profound
                    community impact.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>UGC Recognized Section 3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>Bar Council of India Approved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span>120,000+ Global Alumni</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACADEMIC SCHOOLS PREVIEW */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Academics</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#082142] mt-1">
                    Nine Distinguished Academic Schools
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Multidisciplinary centers of learning providing comprehensive undergraduate, postgraduate, and
                    doctoral degrees.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('academics')}
                  className="text-xs font-bold text-[#082142] hover:text-amber-600 flex items-center gap-1 transition-colors self-start md:self-auto cursor-pointer"
                >
                  View All Schools & Programs <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CHRIST_CONFIG.schools.slice(0, 6).map((school) => (
                  <div
                    key={school.id}
                    onClick={() => {
                      setSelectedSchool(school.id);
                      setActiveTab('academics');
                    }}
                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold bg-slate-100 text-[#082142] px-2.5 py-1 rounded">
                          {school.shortCode}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {school.keyStats.programsCount} Programs
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors">
                        {school.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {school.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{school.campuses.length} Campuses</span>
                      <span className="text-[#082142] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ADMISSIONS 2026 ROADMAP (CUET) */}
            <div className="bg-slate-100 border-y border-slate-200 py-14 mt-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Admissions 2026-2027</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#082142] mt-1">
                    Your Step-by-Step CUET Admission Journey
                  </h2>
                  <p className="text-slate-600 text-sm mt-2">
                    A transparent, merit-driven evaluation ensuring comprehensive academic and personality assessment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {CHRIST_CONFIG.cuetAdmissions.steps.map((st) => (
                    <div
                      key={st.step}
                      className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#082142] text-amber-400 font-black text-sm flex items-center justify-center mb-3">
                          {st.step}
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 mb-1.5">{st.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="bg-[#082142] hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition-all shadow cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Launch CUET Application Desk</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* CAMPUSES PANORAMA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Campuses Network</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#082142] mt-1">
                  Six Distinctive Campus Environments
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  From heritage gardens in Bengaluru to scenic mountain retreats in Lavasa and modern urban hubs in
                  Delhi NCR.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CHRIST_CONFIG.campuses.map((camp) => (
                  <div
                    key={camp.id}
                    onClick={() => {
                      setActiveCampusId(camp.id);
                      setActiveTab('campuses');
                    }}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src={camp.image}
                        alt={camp.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Estd. {camp.establishedYear}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs font-medium text-amber-300">{camp.city}</p>
                        <h4 className="font-serif font-bold text-base leading-snug">{camp.name}</h4>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-xs text-slate-600 line-clamp-2">{camp.tagline}</p>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{camp.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CULTURAL FESTIVALS SPOTLIGHT (IN-BLOOM, BHASHA UTSAV) */}
            <div className="bg-[#05172C] text-white py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Collegiate Culture</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mt-1 text-white">
                      Celebrated Traditions: In-Bloom, Bhasha Utsav &amp; Natyarpana
                    </h2>
                    <p className="text-slate-300 text-sm mt-1">
                      Where artistic brilliance, linguistic diversity, and national dance heritage unite 38,000+ students.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('life')}
                    className="text-xs font-bold text-amber-400 hover:text-white flex items-center gap-1 transition-colors self-start md:self-auto cursor-pointer"
                  >
                    Explore Campus Life <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {CHRIST_CONFIG.culturalTraditions.map((trad) => (
                    <div
                      key={trad.name}
                      className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 backdrop-blur space-y-3 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                          {trad.badge}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-white mt-2">{trad.name}</h4>
                        <p className="text-xs text-amber-200/80 font-medium">{trad.season}</p>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">{trad.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TESTIMONIALS SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Student Voice</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#082142] mt-1">
                  Alumni &amp; Student Journeys
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Discover how CHRIST prepared graduates to excel at Goldman Sachs, Shardul Amarchand, Amazon AWS, and
                  beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CHRIST_CONFIG.testimonials.map((testi, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-3">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-700 italic leading-relaxed mb-4">"{testi.quote}"</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#082142] text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {testi.name[0]}
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-bold text-xs text-slate-900 truncate">{testi.name}</p>
                        <p className="text-[10px] text-amber-700 font-semibold truncate">{testi.role}</p>
                        <p className="text-[10px] text-slate-500 truncate">{testi.program}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ACADEMICS & SCHOOLS */}
        {/* ========================================================================= */}
        {activeTab === 'academics' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Academic Excellence</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Academic Programs &amp; Schools</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                Over 250 undergraduate, postgraduate, and doctoral programs across nine faculties. Equipped with
                Bloomberg trading labs, moot court chambers, AI robotics hubs, and ACCA accredited finance curricula.
              </p>
            </div>

            {/* School Selector Tabs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-lg text-[#082142]">Browse by School</h3>
                <span className="text-xs text-slate-500">
                  Showing {filteredPrograms.length} of {CHRIST_CONFIG.programs.length} programs
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSchool('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedSchool === 'all'
                      ? 'bg-[#082142] text-amber-400'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  All Schools ({CHRIST_CONFIG.schools.length})
                </button>
                {CHRIST_CONFIG.schools.map((sch) => (
                  <button
                    key={sch.id}
                    onClick={() => setSelectedSchool(sch.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      selectedSchool === sch.id
                        ? 'bg-[#082142] text-amber-400'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {sch.shortCode} — {sch.name.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Program Filters & Search */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={programSearch}
                  onChange={(e) => setProgramSearch(e.target.value)}
                  placeholder="Search program, specialization, or role..."
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                />
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto w-full md:w-auto">
                <span className="text-xs text-slate-500 font-medium">Level:</span>
                {['all', 'Undergraduate', 'Postgraduate'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedDegreeLevel(lvl)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      selectedDegreeLevel === lvl
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {lvl === 'all' ? 'All Levels' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((prog) => {
                const school = CHRIST_CONFIG.schools.find((s) => s.id === prog.schoolId);
                return (
                  <div
                    key={prog.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          {prog.degreeLevel}
                        </span>
                        <span className="text-slate-500 font-medium">{prog.duration}</span>
                      </div>

                      <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">
                        {prog.title}
                      </h3>

                      <p className="text-xs text-slate-500 font-medium">{school?.name}</p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                        <div className="flex items-start gap-1.5 text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{prog.campuses.join(', ')}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">Mode: {prog.selectionMode}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-slate-600">
                          <Award className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Annual Fee: {prog.annualFeeINR}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProgramModal(prog)}
                        className="text-xs font-semibold text-[#082142] hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" /> Syllabus &amp; Details
                      </button>
                      <button
                        onClick={() => {
                          setAppForm((prev) => ({
                            ...prev,
                            programId: prog.id
                          }));
                          setActiveTab('admissions');
                        }}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded text-xs transition-colors cursor-pointer"
                      >
                        Apply (CUET)
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* School Profile Deep Dives */}
            <div className="pt-8 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#082142]">Detailed Schools Directory</h2>
              <div className="space-y-4">
                {CHRIST_CONFIG.schools.map((sch) => (
                  <div key={sch.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          {sch.shortCode}
                        </span>
                        <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">{sch.name}</h3>
                        <p className="text-xs text-slate-500">Dean / Head: {sch.dean}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                        <span>{sch.keyStats.programsCount} Programs</span>
                        <span>·</span>
                        <span>{sch.keyStats.facultyCount} Faculty Members</span>
                        <span>·</span>
                        <span>{sch.keyStats.studentsEnrolled.toLocaleString()} Students</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{sch.description}</p>

                    <div>
                      <p className="text-xs font-bold text-slate-900 mb-2">Key Distinctions &amp; Highlights:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sch.highlightFeatures.map((hf, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hf}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: ADMISSIONS & CUET 2026 */}
        {/* ========================================================================= */}
        {activeTab === 'admissions' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">
                Admissions Portal 2026-2027
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">
                Christ University Entrance Test (CUET)
              </h1>
              <p className="text-slate-300 text-sm max-w-2xl mt-2 leading-relaxed">
                Admissions to Undergraduate, Postgraduate, Law, and Management programs across all six campuses are
                conducted through CUET, Micro Presentation (MP), Skill Assessment (SA), and Personal Interview (PI).
              </p>
            </div>

            {/* Two-Column Layout: Live Application Desk vs Status Lookup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Application Form Simulator (8 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#082142]">CUET Online Application Desk</h3>
                    <p className="text-xs text-slate-500">Official candidate registration simulator</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                          appStep >= step ? 'bg-[#082142] text-amber-400' : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {appStep === 1 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setAppStep(2);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Full Legal Name (as in Class 10)</label>
                      <input
                        type="text"
                        required
                        value={appForm.candidateName}
                        onChange={(e) => setAppForm({ ...appForm, candidateName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={appForm.email}
                          onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                          placeholder="candidate@example.com"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          value={appForm.phone}
                          onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Preferred Campus</label>
                        <select
                          value={appForm.campusPreference}
                          onChange={(e) => setAppForm({ ...appForm, campusPreference: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        >
                          {CHRIST_CONFIG.campuses.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name} ({c.city})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Select Program</label>
                        <select
                          value={appForm.programId}
                          onChange={(e) => setAppForm({ ...appForm, programId: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        >
                          {CHRIST_CONFIG.programs.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Class 10/12 Percentage / CGPA</label>
                        <input
                          type="text"
                          value={appForm.previousScore}
                          onChange={(e) => setAppForm({ ...appForm, previousScore: e.target.value })}
                          placeholder="e.g. 89%"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Reservation Category</label>
                        <select
                          value={appForm.category}
                          onChange={(e) => setAppForm({ ...appForm, category: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                        >
                          <option>General</option>
                          <option>Christian Minority (CMI / Catholic)</option>
                          <option>OBC / SC / ST</option>
                          <option>International / NRI</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="bg-[#082142] hover:bg-slate-900 text-amber-400 font-bold px-6 py-2.5 rounded-lg text-xs transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <span>Proceed to Statement &amp; Review</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {appStep === 2 && (
                  <form onSubmit={handleAppSubmit} className="space-y-4 text-xs">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Application Summary:</p>
                      <p className="text-slate-600">Applicant: {appForm.candidateName || 'N/A'}</p>
                      <p className="text-slate-600">Email: {appForm.email}</p>
                      <p className="text-slate-600">
                        Program: {CHRIST_CONFIG.programs.find((p) => p.id === appForm.programId)?.title}
                      </p>
                      <p className="text-slate-600">
                        Campus Choice: {CHRIST_CONFIG.campuses.find((c) => c.id === appForm.campusPreference)?.name}
                      </p>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Brief Statement of Purpose / Why CHRIST University? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={appForm.statement}
                        onChange={(e) => setAppForm({ ...appForm, statement: e.target.value })}
                        placeholder="Share your academic passion, leadership pursuits, and why you aspire to join CHRIST..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <input type="checkbox" id="terms" required defaultChecked className="rounded text-[#082142]" />
                      <label htmlFor="terms" className="text-[11px]">
                        I confirm that all entered educational credentials are authentic and comply with CUET guidelines.
                      </label>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setAppStep(1)}
                        className="text-slate-600 hover:text-slate-900 font-medium px-4 py-2"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Submit Application &amp; Generate ID</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {appStep === 3 && (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-slate-900">Application Submitted Successfully!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Your online application for the Christ University Entrance Test (CUET) has been registered. Keep
                      your Application Number safe for admit card download and interview scheduling.
                    </p>

                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 inline-block text-left max-w-sm w-full">
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Application ID</p>
                      <p className="text-xl font-mono font-black text-[#082142]">{submittedAppId}</p>
                      <p className="text-xs text-emerald-700 font-semibold mt-1">Status: Verification In-Progress</p>
                    </div>

                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setLookupQuery(submittedAppId || '');
                          setAppStep(1);
                        }}
                        className="text-xs font-semibold text-[#082142] hover:underline"
                      >
                        Track Status in Lookup Portal
                      </button>
                      <span className="text-slate-300">·</span>
                      <button
                        onClick={() => {
                          setAppStep(1);
                          setSubmittedAppId(null);
                        }}
                        className="text-xs font-semibold text-slate-600 hover:underline"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Lookup & Key Dates (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Status Lookup Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#082142]">CUET Application Status Tracker</h3>
                    <p className="text-xs text-slate-500">Track admit card, exam slot &amp; interview status</p>
                  </div>

                  <form onSubmit={handleLookup} className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={lookupQuery}
                        onChange={(e) => setLookupQuery(e.target.value)}
                        placeholder="Enter Application ID (e.g. CU-2026-89421)"
                        className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#082142]"
                      />
                      <button
                        type="submit"
                        className="bg-[#082142] hover:bg-slate-900 text-amber-400 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                      >
                        Track
                      </button>
                    </div>
                  </form>

                  {lookupResult && (
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <span className="font-mono font-bold text-[#082142]">{lookupResult.appId}</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          {lookupResult.stage}
                        </span>
                      </div>
                      <p className="text-slate-700">
                        <strong>Program:</strong> {lookupResult.program}
                      </p>
                      <p className="text-slate-700">
                        <strong>Campus:</strong> {lookupResult.campus}
                      </p>
                      <p className="text-slate-700">
                        <strong>Test Date:</strong> {lookupResult.examDate}
                      </p>
                      <p className="text-slate-700">
                        <strong>Admit Card:</strong> {lookupResult.admitCardStatus}
                      </p>
                      <button
                        onClick={() => alert(`Downloading Admit Card for ${lookupResult.appId}...`)}
                        className="mt-2 w-full bg-[#082142] text-white py-1.5 rounded text-xs font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Admit Card PDF
                      </button>
                    </div>
                  )}
                </div>

                {/* Important Dates Calendar */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h3 className="font-serif font-bold text-base text-[#082142]">Important Admission Dates (2026)</h3>
                  <div className="space-y-3">
                    {CHRIST_CONFIG.cuetAdmissions.importantDates.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-none">
                        <span className="text-slate-700 font-medium">{item.event}</span>
                        <span className="font-bold text-amber-700">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CUET Evaluation Components (MP, PI, SA) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#082142]">Understanding the CUET Selection Rounds</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">CUET Written Exam</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 90-120 minute objective test covering English language, numerical ability, general knowledge,
                    reasoning, and domain fundamentals. Marking scheme: +1 for correct, -0.25 for incorrect answers.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Micro Presentation (MP)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Candidate speaks extempore for 90 seconds on a randomly allotted topic before the interview panel.
                    Tests logical structuring, clarity of expression, composure, and communication fluency.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Personal Interview &amp; SA</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In-depth interview exploring academic subject comprehension, general awareness, values, and a
                    brief written Skill Assessment evaluating analytical problem solving.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#082142] mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {CHRIST_CONFIG.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left font-semibold text-xs text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          openFaqIndex === idx ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-4 pb-3 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: CAMPUSES NETWORK */}
        {/* ========================================================================= */}
        {activeTab === 'campuses' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Multi-Campus Presence</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Six World-Class Campuses</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                Experience world-class collegiate living across four campuses in Bengaluru, our capital gateway in
                Delhi NCR (Ghaziabad), and the scenic Analytics sanctuary in Lavasa, Pune.
              </p>
            </div>

            {/* Campus Selector Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {CHRIST_CONFIG.campuses.map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => setActiveCampusId(camp.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeCampusId === camp.id
                      ? 'bg-[#082142] text-white border-[#082142] shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-slate-50'
                  }`}
                >
                  <p className="text-[10px] text-amber-400 font-semibold">{camp.city.split(',')[0]}</p>
                  <p className="font-bold text-xs mt-0.5 line-clamp-1">{camp.name.replace('Bangalore ', '')}</p>
                </button>
              ))}
            </div>

            {/* Active Campus Spotlight Detailed Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
              {/* Photo & Tagline (5 cols) */}
              <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px]">
                <img
                  src={activeCampus.image}
                  alt={activeCampus.name}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded self-start uppercase">
                    Estd. {activeCampus.establishedYear} · {activeCampus.areaAcres}
                  </span>
                  <h2 className="font-serif font-bold text-2xl mt-2">{activeCampus.name}</h2>
                  <p className="text-xs text-amber-300 font-medium">{activeCampus.city}</p>
                </div>
              </div>

              {/* Details, Address & Facilities (7 cols) */}
              <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#082142]">{activeCampus.tagline}</h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{activeCampus.address}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">
                    Academic Schools Housed:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCampus.schoolsHoused.map((s, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">
                    Key Facilities &amp; Campus Infrastructure:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCampus.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="bg-[#082142] hover:bg-slate-900 text-amber-400 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Apply for this Campus (CUET)
                  </button>
                  <button
                    onClick={() => alert(`Location: ${activeCampus.address}\nCampus Phone: +91 80 4012 9100`)}
                    className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Get Campus Directions &amp; Contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: CAREER & PLACEMENTS */}
        {/* ========================================================================= */}
        {activeTab === 'placements' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">
                Career Guidance &amp; Placement Cell
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Placements &amp; Corporate Partnerships</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                CHRIST has one of India's most prestigious corporate networks, with over 450 companies conducting
                campus recruitments every year across consulting, investment banking, enterprise software, and FMCG.
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Highest CTC</p>
                <p className="font-serif font-black text-3xl text-emerald-600 mt-1">
                  {CHRIST_CONFIG.placements.highestCTC}
                </p>
                <p className="text-xs text-slate-500 mt-1">Global Consulting Track</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average CTC</p>
                <p className="font-serif font-black text-3xl text-amber-600 mt-1">
                  {CHRIST_CONFIG.placements.averageCTC}
                </p>
                <p className="text-xs text-slate-500 mt-1">Management &amp; Tech Wings</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Annual Recruiters</p>
                <p className="font-serif font-black text-3xl text-[#082142] mt-1">
                  {CHRIST_CONFIG.placements.totalRecruiters}
                </p>
                <p className="text-xs text-slate-500 mt-1">Fortune 500 &amp; Big 4</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Job Offers</p>
                <p className="font-serif font-black text-3xl text-blue-600 mt-1">
                  {CHRIST_CONFIG.placements.totalOffers}
                </p>
                <p className="text-xs text-slate-500 mt-1">Across 6 Campuses</p>
              </div>
            </div>

            {/* Recruiters by Sector */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#082142]">Recruiting Partners by Sector</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CHRIST_CONFIG.placements.topRecruitersBySector.map((sec, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-5 space-y-3">
                    <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-amber-600" />
                      <span>{sec.sector}</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.companies.map((comp, cIdx) => (
                        <span key={cIdx} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 6: CAMPUS LIFE & CULTURE */}
        {/* ========================================================================= */}
        {activeTab === 'life' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Life @ CHRIST</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Culture, Arts &amp; Student Societies</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                Campus life at CHRIST is celebrated for its vibrancy. From national cultural fest In-Bloom and the
                spectacular Bhasha Utsav to the internationally acclaimed Christ University Choir and over 100 student
                clubs.
              </p>
            </div>

            {/* Cultural Traditions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHRIST_CONFIG.culturalTraditions.map((trad, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {trad.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{trad.season}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900">{trad.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold">{trad.tagline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{trad.description}</p>
                </div>
              ))}
            </div>

            {/* Student Clubs & Activities */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#082142]">Active Student Clubs &amp; Societies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                {[
                  { name: 'Centre for Social Action (CSA)', desc: 'Grassroots community outreach and child sponsorship' },
                  { name: 'Christ University Choir', desc: '100+ member sacred, classical, and choral ensemble' },
                  { name: 'Literary & Debating Society (LDS)', desc: 'Parliamentary debating and national rhetoric tournaments' },
                  { name: 'Christ University Student Council', desc: 'Authoritative student representation and peer support' },
                  { name: 'Rotaract Club of Bangalore Central', desc: 'Youth leadership, tree plantation, and civic engagement' },
                  { name: 'Sports & Athletics Wing', desc: 'Basketball, football, badminton, swimming, and chess teams' }
                ].map((club, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-slate-900">{club.name}</h4>
                    <p className="text-slate-600 leading-relaxed">{club.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 7: RESEARCH & HERITAGE */}
        {/* ========================================================================= */}
        {activeTab === 'research' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Intellectual Inquiry</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Research &amp; CMI Heritage</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                Discover the academic rigor driving Christ Publications, peer-reviewed international journals,
                government-funded research grants, and our founding lineage by the Carmelites of Mary Immaculate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Centre for Research</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordinates over 120+ ongoing funded research projects with DST, DBT, ICSSR, and international
                  consortiums, fostering interdisciplinary scholarly publications.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Christ Publications</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Publishes 12 peer-reviewed UGC-CARE and Scopus indexed journals covering management, social sciences,
                  law, and computational sciences.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Innovation &amp; Incubation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Incubating student and alumni tech ventures in AI, FinTech, clean energy, and sustainable design with
                  seed funding and industry mentorship.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 8: CONTACT & HELPDESK */}
        {/* ========================================================================= */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header Banner */}
            <div className="bg-[#082142] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Get in Touch</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">Contact &amp; Admissions Helpdesk</h1>
              <p className="text-slate-300 text-sm max-w-3xl mt-2 leading-relaxed">
                Connect with our campus offices across Bengaluru, Delhi NCR, and Pune Lavasa for admissions,
                academics, and institutional inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHRIST_CONFIG.campuses.map((camp) => (
                <div key={camp.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
                  <h3 className="font-serif font-bold text-base text-[#082142]">{camp.name}</h3>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{camp.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Admissions: +91 80 4012 9100 / 9600</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Email: admissions@{camp.id.replace('bangalore-', '')}.christuniversity.in</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 4. PROGRAM DETAILS MODAL */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase">
                  {selectedProgramModal.degreeLevel} · {selectedProgramModal.duration}
                </span>
                <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">{selectedProgramModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Offered At Campuses:</h4>
                <p className="text-slate-600">{selectedProgramModal.campuses.join(', ')}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Eligibility Criteria:</h4>
                <p className="text-slate-600 leading-relaxed">{selectedProgramModal.eligibility}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Selection Mode:</h4>
                <p className="text-amber-700 font-semibold">{selectedProgramModal.selectionMode}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Curriculum Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedProgramModal.curriculumOverview.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Career Opportunities:</h4>
                <p className="text-slate-600">{selectedProgramModal.careerRoles.join(' · ')}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Estimated Annual Tuition</p>
                  <p className="font-serif font-black text-xl text-[#082142]">{selectedProgramModal.annualFeeINR}</p>
                </div>
                <button
                  onClick={() => {
                    setAppForm((prev) => ({ ...prev, programId: selectedProgramModal.id }));
                    setSelectedProgramModal(null);
                    setActiveTab('admissions');
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Apply in CUET 2026
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. FOOTER */}
      <footer className="bg-[#05172C] text-slate-400 text-xs border-t border-slate-800 pt-12 pb-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-xl text-white tracking-widest">CHRIST</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                DEEMED TO BE UNIVERSITY
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Declared under Section 3 of the UGC Act 1956. Governed by Carmelites of Mary Immaculate (CMI).
              Dedicated to "Excellence and Service" since 1969.
            </p>
            <p className="text-[11px] text-amber-400 font-medium">
              Accredited NAAC Grade 'A+' · Top 60 NIRF
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Campuses</p>
            <ul className="space-y-1.5 text-[11px]">
              <li>Bangalore Central Campus (Hosur Rd)</li>
              <li>Bangalore Kengeri Campus (Tech &amp; Arch)</li>
              <li>Bangalore Bannerghatta Road Campus</li>
              <li>Bangalore Yeshwanthpur Campus</li>
              <li>Delhi NCR Campus (Ghaziabad)</li>
              <li>Pune Lavasa Campus (Analytics Hub)</li>
            </ul>
          </div>

          {/* Academics & CUET */}
          <div className="space-y-2">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Admissions 2026</p>
            <ul className="space-y-1.5 text-[11px]">
              <li>CUET Entrance Test Guidelines</li>
              <li>Micro Presentation (MP) Instructions</li>
              <li>Undergraduate Programs Directory</li>
              <li>Postgraduate &amp; MBA Selection</li>
              <li>Doctor of Philosophy (PhD)</li>
              <li>Merit &amp; Minority Scholarships</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Headquarters</p>
            <p className="text-[11px] leading-relaxed">
              Hosur Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka, India - 560029
            </p>
            <p className="text-[11px]">General Inquiries: mail@christuniversity.in</p>
            <p className="text-[11px] text-amber-400">Admissions Helpline: +91 80 4012 9100 / 9600</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-slate-800 text-[11px] flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500">
          <p>© 2026 CHRIST (Deemed to be University). Faithfully recreated demo for Raoz Website Maker.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">UGC Disclosures</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CHRISTUniversity;
