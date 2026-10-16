import React, { useState, useEffect, useMemo } from 'react';
import {
  GILGIT_CONFIG,
  GilgitProgram,
  GilgitRanking,
  GilgitHeroSlide,
  GilgitRecruiter,
  GilgitCoE,
  GilgitFacility,
  GilgitTestimonial,
  GilgitFaq
} from './gilgit.config';
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
  Trophy,
  Star,
  Layers,
  Cpu,
  BookmarkCheck,
  School,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function Gilgit() {
  const {
    brand,
    logos,
    rankings,
    heroSlides,
    programs,
    recruiters,
    centersOfExcellence,
    facilities,
    testimonials,
    faqs
  } = GILGIT_CONFIG;

  // Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Program Filter & Search
  const [selectedProgramCategory, setSelectedProgramCategory] = useState<string>('all');
  const [programSearchQuery, setProgramSearchQuery] = useState('');
  const [activeProgramModal, setActiveProgramModal] = useState<GilgitProgram | null>(null);

  // Recruiter Sector Filter
  const [selectedRecruiterSector, setSelectedRecruiterSector] = useState<string>('all');

  // CoE Lab Modal
  const [activeCoEModal, setActiveCoEModal] = useState<GilgitCoE | null>(null);

  // Facility Modal
  const [activeFacilityModal, setActiveFacilityModal] = useState<GilgitFacility | null>(null);

  // Ranking Detail Modal
  const [activeRankingModal, setActiveRankingModal] = useState<GilgitRanking | null>(null);

  // Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Brochure Modal State
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);

  // Admissions Application Form State
  const [admissionsForm, setAdmissionsForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    programId: 'btech-cse',
    pcmPercentage: '85',
    category: 'General',
    hostelRequired: true,
    agreeTerms: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [generatedAppNumber, setGeneratedAppNumber] = useState<string>('');

  // Scholarship Estimator State
  const [calcPcm, setCalcPcm] = useState<number>(85);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

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

    if (!admissionsForm.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!admissionsForm.email.trim() || !admissionsForm.email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!admissionsForm.phone.trim() || admissionsForm.phone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const appNo = `GILGIT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedAppNumber(appNo);
    setFormErrors({});
    setFormSubmitted(true);
  };

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchesCategory =
        selectedProgramCategory === 'all' || p.category === selectedProgramCategory;
      const matchesSearch =
        programSearchQuery === '' ||
        p.name.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(programSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [programs, selectedProgramCategory, programSearchQuery]);

  // Filtered Recruiters
  const filteredRecruiters = useMemo(() => {
    if (selectedRecruiterSector === 'all') return recruiters;
    return recruiters.filter((r) =>
      r.sector.toLowerCase().includes(selectedRecruiterSector.toLowerCase())
    );
  }, [recruiters, selectedRecruiterSector]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (selectedFaqCategory === 'all') return faqs;
    return faqs.filter((f) => f.category === selectedFaqCategory);
  }, [faqs, selectedFaqCategory]);

  // Global Search
  const searchResults = useMemo(() => {
    if (!globalSearchQuery.trim()) return [];
    const q = globalSearchQuery.toLowerCase();
    const results: { type: string; title: string; subtitle: string; link: string }[] = [];

    programs.forEach((prog) => {
      if (
        prog.name.toLowerCase().includes(q) ||
        prog.code.toLowerCase().includes(q) ||
        prog.department.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Academic Program',
          title: prog.name,
          subtitle: `${prog.department} · ${prog.duration}`,
          link: '#programs'
        });
      }
    });

    centersOfExcellence.forEach((coe) => {
      if (coe.title.toLowerCase().includes(q) || coe.partner.toLowerCase().includes(q)) {
        results.push({
          type: 'Center of Excellence',
          title: coe.title,
          subtitle: coe.partner,
          link: '#innovation'
        });
      }
    });

    rankings.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
        results.push({
          type: 'Accreditation & Ranking',
          title: `${r.authority} — ${r.rank}`,
          subtitle: r.title,
          link: '#rankings'
        });
      }
    });

    return results;
  }, [globalSearchQuery, programs, centersOfExcellence, rankings]);

  return (
    <div className="gilgit-demo min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#002147] selection:text-white">
      {/* 1. TOP STATUTORY ACCREDITATION & HELPLINE BAR */}
      <div className="bg-[#002147] text-slate-200 text-xs py-2 px-4 border-b border-[#0B2545]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Statutory Highlights */}
          <div className="flex items-center gap-3 overflow-x-auto text-[11.5px] whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#DA251C] text-white font-bold text-[10px] tracking-wider uppercase">
              AICTE APPROVED
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-amber-400 font-semibold">AKTU Affiliated (Code: 192)</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-sky-300 font-semibold">NBA &amp; NAAC A Accredited</span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-emerald-400 font-bold">Highest Package ₹58 LPA</span>
          </div>

          {/* Right: Direct Admissions Helpline & Links */}
          <div className="flex items-center gap-4 text-[11.5px] whitespace-nowrap">
            <a
              href={`tel:${brand.helpline}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions: {brand.helpline}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${brand.email}`}
              className="hover:text-white text-slate-300 transition-colors flex items-center gap-1 hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{brand.email}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="hover:text-white text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & INSTITUTIONAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Branding */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logos.color}
              alt="Gilgit Institute of Technology & Management"
              className="h-13 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-semibold text-slate-700">
            <a href="#home" className="hover:text-[#002147] transition-colors py-2">
              Home
            </a>
            <a href="#rankings" className="hover:text-[#002147] transition-colors py-2 flex items-center gap-1">
              Accreditations
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">NBA</span>
            </a>
            <a href="#programs" className="hover:text-[#002147] transition-colors py-2">
              Programs
            </a>
            <a href="#placements" className="hover:text-[#002147] transition-colors py-2 flex items-center gap-1">
              Placements
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">₹58 LPA</span>
            </a>
            <a href="#innovation" className="hover:text-[#002147] transition-colors py-2">
              CoE Labs
            </a>
            <a href="#facilities" className="hover:text-[#002147] transition-colors py-2">
              Campus Life
            </a>
            <a href="#admissions" className="hover:text-[#002147] transition-colors py-2">
              Admissions 2026
            </a>
            <a href="#contact" className="hover:text-[#002147] transition-colors py-2">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search Programs & Cutoffs"
            >
              <Search className="w-5 h-5" />
            </button>

            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#002147] to-[#0B2545] hover:from-[#0B2545] hover:to-[#002147] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Apply Online 2026</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3 font-semibold text-slate-700">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Home
              </a>
              <a
                href="#rankings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147] flex justify-between items-center"
              >
                <span>Accreditations &amp; Rankings</span>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">NBA &amp; NAAC A</span>
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Degree Programs (B.Tech &amp; MBA)
              </a>
              <a
                href="#placements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147] flex justify-between items-center"
              >
                <span>Placements 2026</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">₹58 LPA</span>
              </a>
              <a
                href="#innovation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Centers of Excellence &amp; MSME Incubator
              </a>
              <a
                href="#facilities"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Campus Infrastructure &amp; Hostels
              </a>
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Admissions &amp; Scholarships
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100 hover:text-[#002147]"
              >
                Contact &amp; Location
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="#admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#002147] text-white text-center font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Apply Online for 2026 Batch
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SLIDER SECTION (4 FULL-BLEED SLIDES) */}
      <section id="home" className="relative bg-slate-950 text-white overflow-hidden">
        <div className="relative min-h-[560px] sm:min-h-[620px] flex items-center">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
                idx === currentSlideIndex
                  ? 'opacity-100 pointer-events-auto z-10'
                  : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              {/* Background Graphic */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover object-center filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent"></div>
              </div>

              {/* Text Overlays */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-5 text-amber-300">
                    <span className="w-2 h-2 rounded-full bg-[#DA251C] animate-pulse"></span>
                    {slide.badge}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold tracking-widest text-amber-400 uppercase mb-2">
                    {slide.title}
                  </h3>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
                    {slide.headline}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed font-normal">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                    <a
                      href="#admissions"
                      className="px-6 py-3.5 rounded-lg bg-[#DA251C] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all flex items-center gap-2"
                    >
                      <span>Apply for Admissions 2026</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={slide.ctaLink}
                      className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      {slide.ctaText}
                    </a>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/15 max-w-lg">
                    {slide.stats.map((st, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-black text-amber-400">
                          {st.value}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 leading-tight">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Nav Controls */}
          <button
            onClick={() => {
              setIsHeroPlaying(false);
              setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              setIsHeroPlaying(false);
              setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsHeroPlaying(false);
                  setCurrentSlideIndex(dotIdx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentSlideIndex
                    ? 'w-8 bg-[#DA251C]'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Jump to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATUTORY ACCREDITATIONS & RANKING RIBBON */}
      <section id="rankings" className="bg-[#002147] text-white py-12 px-4 border-b border-[#0B2545]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest inline-block mb-1">
              PROVEN ACADEMIC CREDIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Approved by AICTE, NBA &amp; NAAC Accredited
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Validating quality teaching, research funding, top-tier laboratory setups, and verified placement outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {rankings.map((rk) => (
              <div
                key={rk.id}
                onClick={() => setActiveRankingModal(rk)}
                className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {rk.authority}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{ backgroundColor: `${rk.color}25`, color: rk.color }}
                    >
                      {rk.year}
                    </span>
                  </div>
                  <div
                    className="text-2xl font-black mb-1.5 transition-transform group-hover:translate-x-1"
                    style={{ color: rk.color }}
                  >
                    {rk.rank}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                    {rk.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {rk.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-white">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC PROGRAMS & DEPARTMENTS */}
      <section id="programs" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#DA251C] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              INDUSTRY-ALIGNED CURRICULA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Degree Programs &amp; Courses
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Equipped with NBA-accredited B.Tech degrees, advanced AI/ML and Data Science specializations, and AICTE-approved MBA &amp; MCA programs.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={programSearchQuery}
              onChange={(e) => setProgramSearchQuery(e.target.value)}
              placeholder="Search CSE, AI, MBA, IT..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-transparent"
            />
            {programSearchQuery && (
              <button
                onClick={() => setProgramSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'cse-it', label: 'B.Tech Computer Science & IT' },
            { id: 'ai-ds', label: 'B.Tech AI & Data Science' },
            { id: 'ece-me', label: 'Electronics & Mechanical' },
            { id: 'postgraduate', label: 'Postgraduate (MBA / MCA)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedProgramCategory(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedProgramCategory === tab.id
                  ? 'bg-[#002147] text-white shadow-sm'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                    {prog.level}
                  </span>
                  {prog.featured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current text-amber-500" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#002147] transition-colors leading-snug mb-2">
                  {prog.name}
                </h3>

                <p className="text-xs text-slate-500 font-medium mb-4">
                  {prog.department}
                </p>

                <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-slate-700 border border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold text-slate-800">{prog.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Approved Intake:</span>
                    <span className="font-semibold text-slate-800">{prog.intake} Seats</span>
                  </div>
                  <div className="flex justify-between items-center text-sky-700 font-semibold">
                    <span>Accreditation:</span>
                    <span className="text-[10.5px] font-bold">{prog.accreditation.split('·')[0]}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4 text-[11.5px] text-slate-600">
                  {prog.highlights.slice(0, 2).map((h, hi) => (
                    <li key={hi} className="flex items-start gap-1.5 line-clamp-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA251C] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProgramModal(prog)}
                  className="text-xs font-bold text-slate-700 hover:text-[#002147] transition-colors cursor-pointer"
                >
                  View Curriculum
                </button>
                <a
                  href="#admissions"
                  className="px-3.5 py-1.5 rounded-lg bg-[#002147] hover:bg-[#0B2545] text-white text-xs font-bold transition-colors"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PLACEMENT EXCELLENCE & CORPORATE RECRUITERS */}
      <section id="placements" className="bg-[#002147] text-white py-16 sm:py-20 px-4 border-y border-[#0B2545]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest inline-block mb-1">
                TOP-TIER PLACEMENT POWERHOUSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Corporate Resource Center &amp; Placements
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl">
                Highest package of ₹58 LPA, average of ₹7.12 LPA, and over 3,000+ job offers extended by top product and consulting multinationals.
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto text-xs font-semibold">
              {[
                { id: 'all', label: 'All Sectors' },
                { id: 'Cyber', label: 'Cyber Security' },
                { id: 'Cloud', label: 'Cloud & Tech' },
                { id: 'CAD', label: 'CAD / Software' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedRecruiterSector(s.id)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRecruiterSector === s.id
                      ? 'bg-amber-400 text-slate-900 font-bold'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights 4-box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900/90 border border-amber-500/30 p-6 rounded-2xl">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">HIGHEST CTC</span>
              <div className="text-4xl font-black text-white mt-2 mb-1">₹58 LPA</div>
              <div className="text-xs font-semibold text-slate-300">Palo Alto Networks</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Secured by Gilgit Computer Science student Abhinav Tyagi in competitive international selection rounds.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-sky-500/30 p-6 rounded-2xl">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">AVERAGE CTC</span>
              <div className="text-4xl font-black text-white mt-2 mb-1">₹7.12 LPA</div>
              <div className="text-xs font-semibold text-slate-300">Comprehensive Class Average</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Strong career growth across software engineering, business analytics, and product operations.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-emerald-500/30 p-6 rounded-2xl">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">TOTAL OFFERS</span>
              <div className="text-4xl font-black text-white mt-2 mb-1">3,000+</div>
              <div className="text-xs font-semibold text-slate-300">Extended in 2024–2026</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Hundreds of students with multiple job offers from Tier-1 product firms and MNC consultancies.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-purple-500/30 p-6 rounded-2xl">
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest">RECRUITERS</span>
              <div className="text-4xl font-black text-white mt-2 mb-1">300+</div>
              <div className="text-xs font-semibold text-slate-300">Fortune 500 Multinationals</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Including Amazon, Cisco, Intuit, Autodesk, Morgan Stanley, Adobe, Capgemini, TCS, and Infosys.
              </p>
            </div>
          </div>

          {/* Recruiter Marquee Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredRecruiters.map((rec, ri) => (
              <div
                key={ri}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-400 p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-sm mb-2 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                  {rec.name.substring(0, 2)}
                </div>
                <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                  {rec.name}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                  Upto {rec.packageOffered}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {rec.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CENTERS OF EXCELLENCE & R&D LABS */}
      <section id="innovation" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#DA251C] text-xs font-bold uppercase tracking-widest inline-block mb-1">
            INDUSTRY 4.0 COLLABORATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Centers of Excellence &amp; MSME Incubator
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Equipping scholars with industry-certified technologies directly from Apple, Dassault Systèmes, Intel, and Ministry of MSME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centersOfExcellence.map((coe) => (
            <div
              key={coe.id}
              onClick={() => setActiveCoEModal(coe)}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all cursor-pointer group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#002147] mb-4 group-hover:bg-[#002147] group-hover:text-amber-400 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-bold text-[#DA251C] uppercase tracking-wider mb-1">
                  Partner: {coe.partner}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {coe.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {coe.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#002147]">
                <span>Explore Lab Setup</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CAMPUS INFRASTRUCTURE & FACILITIES */}
      <section id="facilities" className="bg-slate-100 py-16 sm:py-20 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#DA251C] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              KNOWLEDGE PARK II, GREATER NOIDA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              15+ Acres Modern Campus Life
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From an acoustically treated 1,000-seater central auditorium to 3-storey digital libraries and on-campus residential hostels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setActiveFacilityModal(fac)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-200">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10.5px] font-bold text-[#DA251C] uppercase tracking-wider block mb-1">
                      {fac.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#002147] transition-colors mb-2">
                      {fac.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-700 mb-2">
                      {fac.metrics}
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#002147]">
                  <span>Facility Highlights</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ADMISSIONS 2026 & APPLICATION DESK */}
      <section id="admissions" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-[#002147] rounded-3xl text-white p-8 sm:p-12 shadow-2xl border border-[#0B2545]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest inline-block mb-2">
                OFFICIAL ADMISSIONS DESK 2026–27
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                Begin Your Engineering &amp; Management Journey
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Admissions open for B.Tech (CSE, AI &amp; ML, Data Science, IT, ECE, ME) and MBA/MCA programs. Submit your application inquiry below to connect with senior admissions counselors.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fill Registration Inquiry</h4>
                    <p className="text-xs text-slate-300">Submit your academic background and desired branch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Eligibility &amp; Merit Counseling</h4>
                    <p className="text-xs text-slate-300">Counselor evaluation against AKTU / JEE Main cutoff criteria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Confirm Seat &amp; Hostel Room</h4>
                    <p className="text-xs text-slate-300">Complete verification and receive your student enrolment packet.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DA251C] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Admissions Helpline:</div>
                  <div className="text-lg font-black text-white">{brand.helpline}</div>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl">
              {formSubmitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Application Inquiry Registered!</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono text-[#002147] font-bold my-3">
                    Application ID: {generatedAppNumber}
                  </div>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-bold text-slate-900">{admissionsForm.fullName}</span>. Your inquiry for <span className="font-bold text-[#002147]">{programs.find(p => p.id === admissionsForm.programId)?.name}</span> has been received. Our senior counselor will call you on <span className="font-semibold text-slate-900">{admissionsForm.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setAdmissionsForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        programId: 'btech-cse',
                        pcmPercentage: '85',
                        category: 'General',
                        hostelRequired: true,
                        agreeTerms: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#002147] hover:bg-[#0B2545] text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAdmissionsSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-xl font-black text-[#002147]">Admissions 2026 Application</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Approved by AICTE · Affiliated to AKTU (Code: 192)</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      value={admissionsForm.fullName}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, fullName: e.target.value })}
                      placeholder="e.g. Abhinav Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002147] ${
                        formErrors.fullName ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-[11px] mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={admissionsForm.email}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002147] ${
                          formErrors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-[11px] mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={admissionsForm.phone}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002147] ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[11px] mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Choose Desired Program
                    </label>
                    <select
                      value={admissionsForm.programId}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, programId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002147]"
                    >
                      {programs.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Percentage & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        10+2 / Degree % (PCM)
                      </label>
                      <input
                        type="number"
                        min="40"
                        max="100"
                        value={admissionsForm.pcmPercentage}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, pcmPercentage: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002147]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Admission Category
                      </label>
                      <select
                        value={admissionsForm.category}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002147]"
                      >
                        <option value="General">General / Open Merit</option>
                        <option value="UPCET">AKTU / UPCET Counseling</option>
                        <option value="JEE">JEE Main Rank Holder</option>
                        <option value="Direct">Direct Management Quota</option>
                      </select>
                    </div>
                  </div>

                  {/* Agreement checkbox */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={admissionsForm.agreeTerms}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, agreeTerms: e.target.checked })}
                      className="mt-0.5 accent-[#002147]"
                    />
                    <label htmlFor="agreeTerms" className="text-[11px] text-slate-500">
                      I agree to receive admission updates, cutoff alerts, and counseling schedules via Phone, SMS, and WhatsApp from Gilgit.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#002147] to-[#0B2545] hover:from-[#0B2545] hover:to-[#002147] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Submit &amp; Generate Application ID</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. VERIFIED ALUMNI TESTIMONIALS */}
      <section className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#DA251C] text-xs font-bold uppercase tracking-widest inline-block mb-1">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hear From Gilgit Alumni
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Engineers and business leaders working at Palo Alto Networks, Amazon, Morgan Stanley, and Cisco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                    <p className="text-[11px] font-semibold text-[#002147]">{test.company}</p>
                    <p className="text-[10px] text-slate-500">{test.batch}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3 inline-block">
                  Package: {test.packageOffered}
                </div>

                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                {test.program}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="bg-slate-100 py-16 sm:py-20 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#DA251C] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              ADMISSIONS &amp; COUNSELING ASSISTANCE
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Everything you need to know about AKTU counseling, NBA branches, highest packages, and hostels.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 text-xs font-semibold">
            {['all', 'Admissions', 'Placements', 'Accreditation', 'Hostels & Campus'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFaqCategory === cat
                    ? 'bg-[#002147] text-white'
                    : 'bg-white hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, fIndex) => (
              <div
                key={fIndex}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === fIndex ? null : fIndex)}
                  className="w-full py-4 px-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#002147]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedFaqIndex === fIndex ? 'rotate-180 text-[#002147]' : ''
                    }`}
                  />
                </button>
                {expandedFaqIndex === fIndex && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INSTITUTIONAL FOOTER */}
      <footer id="contact" className="bg-[#001733] text-slate-300 text-xs py-16 px-4 border-t border-[#0B2545]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={logos.white}
                alt="Gilgit"
                className="h-12 w-auto object-contain"
              />
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Gilgit Institute of Technology &amp; Management is approved by AICTE, Ministry of Education, Govt. of India, affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU Code: 192), and accredited by NBA and NAAC.
              </p>
              <div className="space-y-2 text-[11.5px] text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{brand.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Helpline: {brand.helpline} / {brand.tollFreePhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{brand.email}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Academic Programs */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Degree Programs
              </h4>
              <ul className="space-y-2 text-[11.5px]">
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech Computer Science</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech AI &amp; Machine Learning</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech Data Science</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech Information Technology</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech Electronics &amp; Comm.</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">B.Tech Mechanical Engg</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Master of Business Admin (MBA)</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Master of Computer Apps (MCA)</a></li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-[11.5px]">
                <li><a href="#admissions" className="hover:text-white transition-colors">Apply Online 2026</a></li>
                <li><a href="#placements" className="hover:text-white transition-colors">Placement Records (₹58 LPA)</a></li>
                <li><a href="#rankings" className="hover:text-white transition-colors">NBA &amp; NAAC Accreditations</a></li>
                <li><a href="#innovation" className="hover:text-white transition-colors">Centers of Excellence</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Auditorium &amp; Digital Library</a></li>
                <li><button onClick={() => setIsBrochureModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">Download Prospectus</button></li>
              </ul>
            </div>

            {/* Col 4: Statutory Affiliation */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Approval &amp; Affiliation
              </h4>
              <div className="space-y-2 text-[11px] text-slate-400">
                <p>• All India Council for Technical Education (AICTE), New Delhi</p>
                <p>• National Board of Accreditation (NBA) - Tier-1 for B.Tech</p>
                <p>• NAAC Grade 'A' Accredited Institution</p>
                <p>• Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
                <p>• AKTU College Code: 192</p>
                <p>• Ministry of MSME Approved Business Incubator</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Gilgit Institute of Technology &amp; Management. All Rights Reserved. Rebranded Website Demo for Raoz Website Maker.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Privacy Policy</span>
              <span>·</span>
              <span className="text-slate-400">Terms of Use</span>
              <span>·</span>
              <span className="text-slate-400">Mandatory Disclosures</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODAL 1: PROGRAM DETAILS & CURRICULUM --- */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
            <button
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-[#002147] uppercase tracking-wider">
                {activeProgramModal.level}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Code: {activeProgramModal.code}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-1">
              {activeProgramModal.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 mb-6">
              {activeProgramModal.department}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl mb-6 text-xs border border-slate-100">
              <div>
                <span className="text-slate-500 block">Duration:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Intake:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.intake} Seats</span>
              </div>
              <div>
                <span className="text-slate-500 block">Status:</span>
                <span className="font-bold text-sky-700">{activeProgramModal.accreditation}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Eligibility Criteria
              </h4>
              <p className="text-xs text-slate-700 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
                {activeProgramModal.eligibility}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Program Highlights &amp; Industry Curriculum
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeProgramModal.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DA251C] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Career Pathways
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProgramModal.careerRoles.map((role, ri) => (
                  <span
                    key={ri}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveProgramModal(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => {
                  setAdmissionsForm((prev) => ({ ...prev, programId: activeProgramModal.id }));
                  setActiveProgramModal(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#002147] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Apply for this Program
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: RANKING DETAIL MODAL --- */}
      {activeRankingModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#002147] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setActiveRankingModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              {activeRankingModal.authority}
            </span>
            <div className="text-3xl font-black mb-2" style={{ color: activeRankingModal.color }}>
              {activeRankingModal.rank}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {activeRankingModal.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {activeRankingModal.description}
            </p>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Assessment Status:</span>
                <span className="font-semibold text-white">{activeRankingModal.year}</span>
              </div>
              <div className="flex justify-between">
                <span>Accreditation Type:</span>
                <span className="font-semibold text-white">Government &amp; Statutory Affiliation</span>
              </div>
            </div>

            <button
              onClick={() => setActiveRankingModal(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 3: CENTER OF EXCELLENCE MODAL --- */}
      {activeCoEModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setActiveCoEModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#DA251C] uppercase tracking-wider block mb-1">
              Industry Partner: {activeCoEModal.partner}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              {activeCoEModal.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {activeCoEModal.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 mb-6 text-xs">
              <div>
                <span className="font-bold text-slate-800 block">Equipment &amp; Technology Stack:</span>
                <span className="text-slate-600">{activeCoEModal.equipment}</span>
              </div>
              <div className="pt-2 border-t border-slate-200/60">
                <span className="font-bold text-emerald-800 block">Student Research Impact:</span>
                <span className="text-slate-600">{activeCoEModal.impact}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveCoEModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#002147] hover:bg-[#0B2545] text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 4: FACILITY DETAIL MODAL --- */}
      {activeFacilityModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setActiveFacilityModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#DA251C] uppercase tracking-wider block mb-1">
              {activeFacilityModal.category}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-1">
              {activeFacilityModal.title}
            </h3>
            <p className="text-xs font-bold text-emerald-700 mb-4">
              {activeFacilityModal.metrics}
            </p>

            <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-slate-100">
              <img
                src={activeFacilityModal.image}
                alt={activeFacilityModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {activeFacilityModal.description}
            </p>

            <ul className="space-y-2 mb-6 text-xs text-slate-700">
              {activeFacilityModal.highlights.map((pt, pti) => (
                <li key={pti} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DA251C] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setActiveFacilityModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#002147] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 5: SEARCH MODAL --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900 mb-3">
              Search Gilgit Directory
            </h3>

            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="Type course, NBA accreditation, lab or facility..."
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002147] focus:bg-white"
              />
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2">
              {searchResults.map((res, ri) => (
                <a
                  key={ri}
                  href={res.link}
                  onClick={() => setIsSearchOpen(false)}
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors"
                >
                  <div className="text-[10px] font-bold text-[#002147] uppercase tracking-wider mb-0.5">
                    {res.type}
                  </div>
                  <div className="text-xs font-bold text-slate-900">{res.title}</div>
                  <div className="text-[11px] text-slate-500">{res.subtitle}</div>
                </a>
              ))}

              {globalSearchQuery && searchResults.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-500">
                  No results found matching "{globalSearchQuery}".
                </div>
              )}

              {!globalSearchQuery && (
                <div className="text-center py-6 text-xs text-slate-400">
                  Popular searches: B.Tech CSE, MBA, Apple iOS Lab, ₹58 LPA, NBA, AKTU Code 192.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 6: BROCHURE DOWNLOAD MODAL --- */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {brochureSubmitted ? (
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-1">Brochure Sent!</h4>
                <p className="text-xs text-slate-600 mb-4">
                  The Gilgit Official Information Brochure &amp; Fee Matrix has been dispatched to <span className="font-semibold text-slate-900">{brochureEmail}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsBrochureModalOpen(false);
                    setBrochureSubmitted(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#002147] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#002147]">
                  <Download className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider">OFFICIAL DOSSIER</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Download Gilgit Brochure</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Get the comprehensive information brochure with placement statistics, fee structures, and campus life guide.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (brochureEmail.trim() && brochureEmail.includes('@')) {
                      setBrochureSubmitted(true);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002147]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#002147] hover:bg-[#0B2545] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                  >
                    Download Information PDF
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
