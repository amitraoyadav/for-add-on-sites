import React, { useState, useEffect } from 'react';
import {
  SP_JAIN_CONFIG,
  SpJainProgram,
  SpJainCampus,
  SpJainNews,
  SpJainTestimonial,
  SpJainFaq
} from './sp-jain.config';
import {
  GraduationCap,
  Award,
  Globe2,
  BookOpen,
  Building,
  Users,
  Compass,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ExternalLink,
  ShieldCheck,
  FileText,
  MessageSquare,
  HelpCircle,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Download,
  Send,
  Video,
  Monitor,
  Check,
  Laptop
} from 'lucide-react';

export default function SpJain() {
  const {
    brand,
    logos,
    rankings,
    heroSlides,
    pillars,
    campuses,
    programs,
    news,
    testimonials,
    faqs
  } = SP_JAIN_CONFIG;

  // Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Mobile Navigation Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Program Filter & Detail Modal States
  const [selectedProgramFilter, setSelectedProgramFilter] = useState<string>('all');
  const [activeProgramModal, setActiveProgramModal] = useState<SpJainProgram | null>(null);

  // Campus Tab State & Modal
  const [selectedCampusId, setSelectedCampusId] = useState<string>('dubai');
  const [activeCampusModal, setActiveCampusModal] = useState<SpJainCampus | null>(null);

  // News Modal State
  const [activeNewsModal, setActiveNewsModal] = useState<SpJainNews | null>(null);

  // Site-wide Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Brochure Download Modal State
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);

  // Important Dates Modal State
  const [isDatesModalOpen, setIsDatesModalOpen] = useState(false);

  // Interactive Admissions Form State
  const [admissionsForm, setAdmissionsForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'bba',
    qualification: 'High School 12th / Diploma',
    country: 'India',
    preferredCampus: 'Dubai & Singapore',
    query: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Quick Counselor Callback State
  const [isCounselorModalOpen, setIsCounselorModalOpen] = useState(false);
  const [counselorSubmitted, setCounselorSubmitted] = useState(false);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Auto-play Hero Carousel
  useEffect(() => {
    if (!isHeroPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHeroPlaying, heroSlides.length]);

  // Handle Admissions Form Submission
  const handleAdmissionsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!admissionsForm.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!admissionsForm.email.trim() || !admissionsForm.email.includes('@')) {
      errors.email = 'Valid Email Address is required';
    }
    if (!admissionsForm.phone.trim() || admissionsForm.phone.length < 7) {
      errors.phone = 'Valid Phone / Mobile number is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  // Filtered Programs
  const filteredPrograms = programs.filter((prog) => {
    if (selectedProgramFilter === 'all') return true;
    if (selectedProgramFilter === 'undergraduate') return prog.level === 'Undergraduate';
    if (selectedProgramFilter === 'postgraduate') return prog.level === 'Postgraduate';
    if (selectedProgramFilter === 'executive') return prog.level === 'Executive';
    if (selectedProgramFilter === 'data-science') return prog.category === 'data-science';
    return true;
  });

  // Current selected campus
  const activeCampus = campuses.find((c) => c.id === selectedCampusId) || campuses[0];

  return (
    <div className="sp-jain-demo min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#8B1D24] selection:text-white">
      {/* 1. TOP GLOBAL ACCREDITATION & UTILITY BAR */}
      <div className="bg-[#580C11] text-white text-[11px] py-1.5 px-4 border-b border-[#731218]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4AF37] text-[#580C11] font-bold text-[10px] px-2 py-0.5 rounded font-mono">
              TEQSA ACCREDITED
            </span>
            <span className="text-slate-200 hidden sm:inline">
              Australian Business School · CRICOS Provider Code: {brand.cricosProviderCode}
            </span>
            <span className="text-slate-300 font-medium hidden lg:inline">
              Campuses: Dubai · Mumbai · Singapore · Sydney
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <a href="tel:18002000827" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-300" />
              <span>Toll-Free: {brand.tollFreeIndia}</span>
            </a>
            <span className="text-amber-400/40">|</span>
            <button
              onClick={() => setIsDatesModalOpen(true)}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-amber-300" />
              <span>Intake Dates</span>
            </button>
            <span className="text-amber-400/40">|</span>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Search className="w-3 h-3 text-amber-300" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logos.color}
              alt="S P Jain School of Global Management"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-700">
            <a href="#rankings" className="hover:text-[#8B1D24] transition-colors">
              Rankings
            </a>
            <a href="#programs" className="hover:text-[#8B1D24] transition-colors">
              Programs
            </a>
            <a href="#campuses" className="hover:text-[#8B1D24] transition-colors">
              Campuses
            </a>
            <a href="#why-spjain" className="hover:text-[#8B1D24] transition-colors">
              Why SP Jain
            </a>
            <a href="#elo-tech" className="hover:text-[#8B1D24] transition-colors flex items-center gap-1 text-[#8B1D24] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>AI-Tutor &amp; ELO</span>
            </a>
            <a href="#news" className="hover:text-[#8B1D24] transition-colors">
              News &amp; Events
            </a>
            <a href="#placements" className="hover:text-[#8B1D24] transition-colors">
              Placements
            </a>
            <a href="#faqs" className="hover:text-[#8B1D24] transition-colors">
              FAQs
            </a>
            <a href="#admissions" className="hover:text-[#8B1D24] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#8B1D24] border border-slate-300 rounded-lg hover:border-[#8B1D24] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>
            <a
              href="#admissions"
              className="px-4 py-2 text-xs font-semibold bg-[#8B1D24] hover:bg-[#6f141a] text-white rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#8B1D24] focus:outline-hidden cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-3 text-xs font-medium text-slate-800">
              <a
                href="#rankings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#8B1D24]" />
                <span>Rankings</span>
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#8B1D24]" />
                <span>Programs</span>
              </a>
              <a
                href="#campuses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-[#8B1D24]" />
                <span>Campuses</span>
              </a>
              <a
                href="#why-spjain"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <Globe2 className="w-4 h-4 text-[#8B1D24]" />
                <span>Why SP Jain</span>
              </a>
              <a
                href="#elo-tech"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2 col-span-2 text-[#8B1D24] font-semibold"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Engaged Learning Online (ELO) &amp; AI-Tutor</span>
              </a>
              <a
                href="#news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#8B1D24]" />
                <span>News</span>
              </a>
              <a
                href="#placements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-[#8B1D24]" />
                <span>Careers</span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-[#8B1D24] text-white font-semibold rounded-lg text-xs"
              >
                Apply Online 2026–27
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBrochureModalOpen(true);
                }}
                className="w-full text-center py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg text-xs"
              >
                Download Global Brochure
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SLIDER BANNER */}
      <section id="home" className="relative overflow-hidden bg-[#140608] min-h-[460px] md:min-h-[540px] flex items-center text-white">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            {/* Background SVG / Graphic */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-xs border border-[#D4AF37]/40 text-[#F5D061]">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5D061]" />
                  <span>{slide.badge}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-base sm:text-lg font-serif tracking-widest text-slate-200 uppercase font-semibold">
                    {slide.title}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
                    {slide.headline}
                  </h1>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#admissions"
                    className="px-5 py-2.5 bg-[#8B1D24] hover:bg-[#a8252d] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md transition-all flex items-center gap-2 group"
                  >
                    <span>{slide.ctaSecondary}</span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#programs"
                    className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold rounded-lg border border-white/30 backdrop-blur-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>{slide.ctaPrimary}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Slide Indicators & Arrows */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
          <button
            onClick={() =>
              setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
            }
            className="text-white/80 hover:text-white cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlideIndex(dotIdx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentSlideIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)
            }
            className="text-white/80 hover:text-white cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. KEY RANKING & CREDENTIALS STRIP */}
      <section id="rankings" className="bg-[#8B1D24] text-white py-8 border-y-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#a62a32]">
            {rankings.map((rk, idx) => (
              <div key={idx} className={`p-3 space-y-1 ${idx > 1 ? 'pt-4 md:pt-3' : ''}`}>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F5D061] tracking-tight">
                  {rk.rank}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  {rk.publication}
                </div>
                <div className="text-[11px] text-slate-200 font-light">
                  {rk.category} ({rk.year})
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIX INSTITUTIONAL PILLARS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1D24] uppercase font-mono bg-[#8B1D24]/10 px-3 py-1 rounded-full">
              CRAFTING WORLD READY LEADERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              Why Leaders Worldwide Choose SP Jain
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We prepare students to thrive across continents through multi-campus global immersion,
              practical case methodologies, and high-impact international corporate networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="bg-slate-50 border border-slate-200 hover:border-[#8B1D24]/40 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 space-y-3 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <img src={pillar.icon} alt={pillar.title} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#8B1D24] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                    {pillar.subtitle}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEGREE PROGRAMMES CATALOGUE */}
      <section id="programs" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
                TEQSA AUSTRALIAN ACCREDITED PROGRAMMES
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900">
                Explore Undergraduate, Postgraduate &amp; Executive Degrees
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Choose a globally recognised degree course. Study across Sydney, Singapore, and Dubai with leading faculty mentors.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-300 text-xs shadow-xs">
              {[
                { id: 'all', label: 'All Degrees' },
                { id: 'undergraduate', label: 'Undergraduate (BBA/BDS)' },
                { id: 'postgraduate', label: 'Postgraduate (GMBA/MGB)' },
                { id: 'executive', label: 'Executive MBA' },
                { id: 'data-science', label: 'AI & Data Science' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedProgramFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedProgramFilter === tab.id
                      ? 'bg-[#8B1D24] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#8B1D24]/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {prog.level}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {prog.duration}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#8B1D24] transition-colors line-clamp-2">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-amber-700 font-medium">
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8B1D24]" />
                      <span>Campuses:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {prog.campuses.map((camp, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                        >
                          {camp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProgramModal(prog)}
                    className="text-xs font-bold text-[#8B1D24] hover:text-[#6a1016] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Curriculum</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#admissions"
                    className="px-3 py-1.5 text-xs font-semibold bg-[#8B1D24] hover:bg-[#6f141a] text-white rounded-lg transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOUR GLOBAL CAMPUSES SHOWCASE */}
      <section id="campuses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              INTERNATIONAL METROPOLISES
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              Four World-Class Global Campuses
            </h2>
            <p className="text-sm text-slate-600">
              Each campus provides a dynamic gateway to regional business hubs, cultural heritage, and corporate headquarters.
            </p>
          </div>

          {/* Campus Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {campuses.map((camp) => (
              <button
                key={camp.id}
                onClick={() => setSelectedCampusId(camp.id)}
                className={`px-5 py-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  selectedCampusId === camp.id
                    ? 'bg-[#8B1D24] text-white border-[#8B1D24] shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${selectedCampusId === camp.id ? 'bg-[#F5D061]' : 'bg-slate-300'}`} />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">{camp.city}</div>
                  <div className={`text-[11px] ${selectedCampusId === camp.id ? 'text-amber-200' : 'text-slate-500'}`}>
                    {camp.country}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Campus Detail Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
              <img
                src={activeCampus.image}
                alt={activeCampus.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/20">
                {activeCampus.badge}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                    {activeCampus.city}, {activeCampus.country}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-slate-900">
                    {activeCampus.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeCampus.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Key Facilities &amp; Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {activeCampus.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1D24] shrink-0 mt-0.5" />
                    <span>{activeCampus.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#8B1D24] shrink-0" />
                    <span>{activeCampus.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#8B1D24] shrink-0" />
                    <span>{activeCampus.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveCampusModal(activeCampus)}
                  className="px-4 py-2 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Campus Virtual Tour
                </button>
                <a
                  href="#admissions"
                  className="px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                >
                  Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENGAGED LEARNING ONLINE (ELO) & AI-TUTOR SPOTLIGHT */}
      <section id="elo-tech" className="py-16 bg-[#031926] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROPRIETARY EDTECH INNOVATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              Engaged Learning Online (ELO) &amp; The AI-Tutor Ecosystem
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              SP Jain’s custom-engineered virtual classroom delivers a classroom experience superior to standard webinars.
              Equipped with over 20 robotic HD cameras, interactive board screens, and real-time student engagement analytics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-1.5">
                <div className="font-bold text-cyan-400 text-sm flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span>Interactive ELO Studio</span>
                </div>
                <p className="text-slate-400">
                  Professors look each student in the eye. Real-time emotion heatmaps alert faculty to clarify complex theories.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 space-y-1.5">
                <div className="font-bold text-amber-400 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>24/7 AI-Tutor Mentor</span>
                </div>
                <p className="text-slate-400">
                  Trained on thousands of case studies. Evaluates financial modeling, strategy decks, and answers student questions instantly.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setIsCounselorModalOpen(true)}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold rounded-lg shadow-md transition-colors cursor-pointer"
              >
                Request ELO Demonstration
              </button>
              <a
                href="#programs"
                className="text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4 font-semibold"
              >
                View Online Executive MBA
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative bg-slate-900">
              <img
                src="/assets/sp-jain/elo-studio.jpg"
                alt="Engaged Learning Online ELO Studio"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Live Broadcast Studio
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Broadcasting simultaneously to students across 25+ countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY SP JAIN & TRI-CITY ADVANTAGE */}
      <section id="why-spjain" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <img
                src="/assets/sp-jain/why-spjain.jpg"
                alt="Why SP Jain Global"
                className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#8B1D24] text-white p-5 rounded-2xl shadow-xl max-w-xs space-y-1">
                <div className="text-2xl font-bold font-serif text-[#F5D061]">100%</div>
                <div className="text-xs font-semibold uppercase tracking-wider">Australian Accreditation</div>
                <div className="text-[11px] text-slate-200">
                  Degrees awarded under Australian Higher Education Standards Framework (TEQSA).
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono bg-[#8B1D24]/10 px-3 py-1 rounded-full">
                GLOBAL EDGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
                Transforming Ambitious Scholars into Multi-Cultural Executives
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern business does not happen inside borders. SP Jain was founded on the conviction that
                future leaders must be steeped in the nuances of multiple global economies before entering the workforce.
              </p>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Post-Study Work Authorization:</strong> Graduates completing the required study duration in Sydney are eligible to apply for Australian Post-Study Work Visas.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Global Corporate Consulting:</strong> Complete live strategy capstones for firms like Siemens, Unilever, Grab, and DBS Bank during term study.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Lifelong Alumni Privileges:</strong> Access our career advisory offices in London, Singapore, Sydney, and Dubai throughout your entire career.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#admissions"
                  className="px-5 py-2.5 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
                >
                  Start Your Global Journey
                </a>
                <button
                  onClick={() => setIsCounselorModalOpen(true)}
                  className="text-xs font-bold text-slate-700 hover:text-[#8B1D24] flex items-center gap-1 cursor-pointer"
                >
                  <span>Talk with Admissions Team</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWS, ACCOLADES & GLOBAL EVENTS */}
      <section id="news" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
                CAMPUS HIGHLIGHTS &amp; ACADEMIA
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900">
                Latest News &amp; Student Achievements
              </h2>
            </div>
            <a
              href="#admissions"
              className="text-xs font-bold text-[#8B1D24] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore Newsroom Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveNewsModal(item)}
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#8B1D24] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#8B1D24]" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-serif text-sm font-bold text-slate-900 group-hover:text-[#8B1D24] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="text-xs font-bold text-[#8B1D24] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Read Full Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. STUDENT & ALUMNI VOICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
              ALUMNI CAREER OUTCOMES
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              Where Our Graduates Lead Today
            </h2>
            <p className="text-sm text-slate-600">
              12,000+ alumni accelerating executive careers across Fortune 500 multinationals and tech unicorns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test, tIdx) => (
              <div
                key={tIdx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#8B1D24]/30 hover:shadow-md transition-all"
              >
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{test.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-[#8B1D24] text-white flex items-center justify-center font-bold text-xs font-serif shrink-0">
                    {test.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{test.name}</div>
                    <div className="text-[11px] font-semibold text-[#8B1D24] truncate">{test.company}</div>
                    <div className="text-[10px] text-slate-500 truncate">{test.role} · {test.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ADMISSIONS 2026–27 APPLICATION DESK */}
      <section id="admissions" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Guidelines & Steps */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono bg-[#8B1D24]/10 px-3 py-1 rounded-full">
                  ADMISSIONS OPEN 2026–27
                </span>
                <h2 className="text-3xl font-bold font-serif text-slate-900">
                  Begin Your Global Application
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Join scholars from over 35 nationalities. Submit your profile for evaluation by the Global Admissions Committee.
                </p>
              </div>

              {/* 4 Steps */}
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Submit Online Profile', desc: 'Complete basic academic credentials and select your chosen program.' },
                  { step: '02', title: 'Entrance Evaluation', desc: 'Appear for SPJAT aptitude exam or submit valid GMAT / GRE / SAT scores.' },
                  { step: '03', title: 'Executive Faculty Interview', desc: 'Participate in an evaluative personal interview with senior academic directors.' },
                  { step: '04', title: 'Offer & Multi-City Visas', desc: 'Receive your admission letter and international visa assistance documentation.' }
                ].map((st, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold w-7 h-7 rounded-lg bg-[#8B1D24] text-white flex items-center justify-center shrink-0">
                      {st.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{st.title}</div>
                      <div className="text-[11px] text-slate-500 leading-normal">{st.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Merit Scholarship Review</span>
                </div>
                <p className="text-[11px] text-amber-800">
                  High-achieving applicants are automatically assessed for tuition fee scholarship awards up to 100%.
                </p>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-serif text-slate-900">
                      Application Dossier Submitted!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{admissionsForm.fullName}</strong>.
                      Your application tracking reference is:
                    </p>
                    <div className="font-mono text-sm font-bold text-[#8B1D24] bg-white border border-[#8B1D24]/30 px-4 py-1.5 rounded-lg inline-block my-2">
                      SPJ-2026-{Math.floor(1000 + Math.random() * 9000)}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Our international admissions desk will review your credentials and contact you at {admissionsForm.email} within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setAdmissionsForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        program: 'bba',
                        qualification: 'High School 12th / Diploma',
                        country: 'India',
                        preferredCampus: 'Dubai & Singapore',
                        query: ''
                      });
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAdmissionsSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
                    Admissions Inquiry Desk (Intake 2026–27)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Mehta"
                        value={admissionsForm.fullName}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, fullName: e.target.value })}
                        className={`w-full bg-white border ${
                          formErrors.fullName ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[10px] text-red-500 mt-0.5">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={admissionsForm.email}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, email: e.target.value })}
                        className={`w-full bg-white border ${
                          formErrors.email ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-red-500 mt-0.5">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98200 XXXXX"
                        value={admissionsForm.phone}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, phone: e.target.value })}
                        className={`w-full bg-white border ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]`}
                      />
                      {formErrors.phone && (
                        <p className="text-[10px] text-red-500 mt-0.5">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Program of Interest *
                      </label>
                      <select
                        value={admissionsForm.program}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, program: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]"
                      >
                        <option value="bba">Bachelor of Business Administration (BBA - 4 Years)</option>
                        <option value="bds">Bachelor of Data Science (BDS - 3 Years)</option>
                        <option value="gmba">Global MBA (GMBA - 12 Months Tri-City)</option>
                        <option value="mgb">Master of Global Business (MGB - 16 Months)</option>
                        <option value="maib">Master of AI in Business (MAIB - 2 Years)</option>
                        <option value="emba">Executive MBA (EMBA - 18 Months Online/Weekend)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. India, UAE, Singapore, Australia"
                        value={admissionsForm.country}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, country: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                        Highest Qualification
                      </label>
                      <select
                        value={admissionsForm.qualification}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, qualification: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]"
                      >
                        <option value="12th">10+2 / High School Diploma</option>
                        <option value="bachelor">Bachelor's Degree (Completed/Final Year)</option>
                        <option value="master">Master's Degree</option>
                        <option value="working">Working Professional (3+ Years Experience)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Questions / Special Interests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about multi-campus visas, Australian post-study work rights, or merit scholarships..."
                      value={admissionsForm.query}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, query: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Application for Review</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2">
                      By submitting, you agree to receive communications from SP Jain admissions regarding course eligibility and deadlines.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section id="faqs" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
              ADMISSIONS &amp; MULTI-CAMPUS CLARITY
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about the tri-city curriculum, Australian accreditation, and visas.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isExpanded = expandedFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isExpanded ? 'rotate-180 text-[#8B1D24]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. INSTITUTIONAL FOOTER */}
      <footer className="bg-[#120406] text-slate-400 text-xs pt-16 pb-12 border-t-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Col 1: Brand & Crest */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={logos.white}
                alt={brand.fullName}
                className="h-14 w-auto object-contain"
              />
              <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
                S P Jain School of Global Management is an Australian business school with campuses in
                Dubai, Mumbai, Singapore, and Sydney. Registered by TEQSA as an Australian Institute of Higher Education.
              </p>
              <div className="text-[11px] text-amber-400 font-mono space-y-0.5">
                <div>CRICOS Provider Code: {brand.cricosProviderCode}</div>
                <div>TEQSA Provider ID: PRV12041</div>
              </div>
            </div>

            {/* Col 2: Programs */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Degree Programs
              </h4>
              <ul className="space-y-2 text-[12px]">
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Bachelor of Business Admin (BBA)</a></li>
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Bachelor of Data Science (BDS)</a></li>
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Global MBA (GMBA)</a></li>
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Master of Global Business (MGB)</a></li>
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Master of AI in Business (MAIB)</a></li>
                <li><a href="#programs" className="hover:text-amber-300 transition-colors">Executive MBA (EMBA)</a></li>
              </ul>
            </div>

            {/* Col 3: Global Campuses */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Global Campuses
              </h4>
              <ul className="space-y-2 text-[12px]">
                <li><span className="text-white font-medium">Dubai:</span> DIAC Block 5, UAE</li>
                <li><span className="text-white font-medium">Singapore:</span> 10 Hyderabad Road</li>
                <li><span className="text-white font-medium">Sydney:</span> 5 Figtree Drive, NSW</li>
                <li><span className="text-white font-medium">Mumbai:</span> Kohinoor City, Kurla West</li>
              </ul>
            </div>

            {/* Col 4: Quick Action Desk */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Connect With Us
              </h4>
              <div className="space-y-2 text-[12px]">
                <div>Toll-Free (India): <span className="text-white">{brand.tollFreeIndia}</span></div>
                <div>Intl Admissions: <span className="text-white">{brand.intlPhone}</span></div>
                <div>Email: <a href="mailto:admissions@spjain.org" className="text-amber-300 hover:underline">admissions@spjain.org</a></div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold border border-white/20 transition-colors cursor-pointer"
                >
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div>
              © 2026 S P Jain School of Global Management. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#admissions" className="hover:text-white">Privacy Policy</a>
              <span>·</span>
              <a href="#admissions" className="hover:text-white">Terms of Enrolment</a>
              <span>·</span>
              <a href="#admissions" className="hover:text-white">TEQSA Disclosures</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: PROGRAM CURRICULUM DETAILS */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">
                {activeProgramModal.level} · {activeProgramModal.duration}
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                {activeProgramModal.name}
              </h3>
              <p className="text-xs text-amber-700 font-medium">
                {activeProgramModal.tagline}
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {activeProgramModal.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#8B1D24]" />
                <span>Multi-Campus Pathway:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {activeProgramModal.campuses.map((camp, idx) => (
                  <span key={idx} className="bg-white border border-slate-300 text-slate-800 px-2.5 py-1 rounded font-medium">
                    {camp}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Key Curriculum Highlights:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activeProgramModal.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1 text-xs text-amber-900">
              <div className="font-bold">Eligibility &amp; Prerequisites:</div>
              <p className="text-[11px] leading-relaxed text-amber-800">
                {activeProgramModal.eligibility}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveProgramModal(null);
                  setIsBrochureModalOpen(true);
                }}
                className="px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Download Syllabus PDF
              </button>
              <a
                href="#admissions"
                onClick={() => setActiveProgramModal(null)}
                className="px-5 py-2 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Apply for this Degree
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: BROCHURE DOWNLOAD */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 relative text-slate-800 shadow-2xl">
            <button
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {brochureSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Global Brochure Sent!
                </h3>
                <p className="text-xs text-slate-600">
                  The S P Jain Global Prospectus &amp; Fee Schedule has been dispatched to{' '}
                  <strong className="text-slate-900">{brochureEmail}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsBrochureModalOpen(false);
                    setBrochureSubmitted(false);
                  }}
                  className="px-4 py-2 bg-[#8B1D24] text-white text-xs font-semibold rounded-lg mt-2 cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
                    PROSPECTUS DOWNLOAD
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Get the SP Jain Global Brochure
                  </h3>
                  <p className="text-xs text-slate-600">
                    Includes full syllabus modules, Dubai-Singapore-Sydney pathways, scholarship matrix, and alumni salary report.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]"
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (brochureEmail.includes('@')) setBrochureSubmitted(true);
                    }}
                    className="w-full py-2.5 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-300" />
                    <span>Download Official PDF</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: INTAKE DATES */}
      {isDatesModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative text-slate-800 shadow-2xl">
            <button
              onClick={() => setIsDatesModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
                ACADEMIC CALENDAR
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Key Admissions &amp; Intake Deadlines
              </h3>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">September 2026 Undergraduate Intake</div>
                  <div className="text-[11px] text-slate-500">BBA &amp; BDS (Singapore, Dubai &amp; Sydney)</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  Application Round 2 Open
                </span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">May 2026 Postgraduate Intake</div>
                  <div className="text-[11px] text-slate-500">Global MBA &amp; Master of Global Business</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                  Priority Deadline Approaching
                </span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">SPJAT Entrance Exam Window</div>
                  <div className="text-[11px] text-slate-500">Online proctored computer test worldwide</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                  Bi-Weekly Sittings
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <a
                href="#admissions"
                onClick={() => setIsDatesModalOpen(false)}
                className="w-full block text-center py-2.5 bg-[#8B1D24] text-white text-xs font-bold rounded-lg"
              >
                Apply for Next Available Intake
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: COUNSELOR CALL / INQUIRY */}
      {isCounselorModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 relative text-slate-800 shadow-2xl">
            <button
              onClick={() => {
                setIsCounselorModalOpen(false);
                setCounselorSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {counselorSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Counselor Scheduled!
                </h3>
                <p className="text-xs text-slate-600">
                  An international admissions advisor will reach out to you within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsCounselorModalOpen(false);
                    setCounselorSubmitted(false);
                  }}
                  className="px-4 py-2 bg-[#8B1D24] text-white text-xs font-semibold rounded-lg mt-2 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#8B1D24] uppercase tracking-wider font-mono">
                    DIRECT ADVISORY
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Schedule an Academic Consultation
                  </h3>
                  <p className="text-xs text-slate-600">
                    Connect directly with an international admissions counselor regarding your profile, GMAT/SPJAT evaluation, and scholarships.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Your Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 XXXXX"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#8B1D24]"
                    />
                  </div>

                  <button
                    onClick={() => setCounselorSubmitted(true)}
                    className="w-full py-2.5 bg-[#8B1D24] hover:bg-[#6f141a] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>Request Callback</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 5: NEWS READER */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto text-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveNewsModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-6">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#8B1D24]/10 text-[#8B1D24] uppercase tracking-wider font-mono">
                {activeNewsModal.category} · {activeNewsModal.date}
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900 leading-snug">
                {activeNewsModal.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden h-60 bg-slate-100">
              <img
                src={activeNewsModal.image}
                alt={activeNewsModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              {activeNewsModal.summary}
            </p>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {activeNewsModal.fullStory}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveNewsModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: SITE SEARCH */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search programs (BBA, MBA, Data Science), campuses, rankings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm text-slate-900 outline-none"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {searchQuery && (
              <div className="space-y-2 max-h-60 overflow-y-auto divide-y divide-slate-100 text-xs">
                {programs
                  .filter((p) =>
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveProgramModal(p);
                      }}
                      className="py-2 hover:bg-slate-50 cursor-pointer px-2 rounded"
                    >
                      <div className="font-bold text-slate-900">{p.name}</div>
                      <div className="text-[11px] text-[#8B1D24]">{p.level} · {p.duration}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
