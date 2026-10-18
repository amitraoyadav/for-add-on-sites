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
  Cpu,
  Dna,
  Download,
  ExternalLink,
  FileText,
  Filter,
  GraduationCap,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Palette,
  Phone,
  Scale,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
  ArrowRight
} from 'lucide-react';

import {
  NIRMA_UNIVERSITY_CONFIG,
  NUProgram,
  NUInstitute,
  NUHeroSlide,
  NUFacility
} from './nirma-university.config';

export default function NirmaUniversity() {
  const config = NIRMA_UNIVERSITY_CONFIG;

  // Navigation & Drawer states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Programs Explorer states
  const [programLevelFilter, setProgramLevelFilter] = useState<string>('All');
  const [programCategoryFilter, setProgramCategoryFilter] = useState<string>('All');
  const [programSearchInput, setProgramSearchInput] = useState<string>('');
  const [selectedProgramModal, setSelectedProgramModal] = useState<NUProgram | null>(null);

  // Institute Modal state
  const [selectedInstituteModal, setSelectedInstituteModal] = useState<NUInstitute | null>(null);

  // Campus Facility modal / viewer
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  // Scholarship Calculator state
  const [calcScoreType, setCalcScoreType] = useState<'12th' | 'jee' | 'cat' | 'clat'>('12th');
  const [calcScoreValue, setCalcScoreValue] = useState<number>(92);
  const [calcDomicile, setCalcDomicile] = useState<boolean>(true);

  // Admissions Form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantInstitute, setApplicantInstitute] = useState('it-nu');
  const [applicantProgram, setApplicantProgram] = useState('btech-cse');
  const [applicantScore, setApplicantScore] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedAppId, setGeneratedAppId] = useState('');

  // Application Reference Lookup state
  const [lookupAppId, setLookupAppId] = useState('');
  const [lookupResult, setLookupResult] = useState<{ id: string; name: string; status: string; program: string; date: string } | null>(null);
  const [lookupError, setLookupError] = useState('');

  // FAQ Category Filter & Expand
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Dynamic Scholarship Calculation
  const scholarshipEstimate = useMemo(() => {
    let waiverPct = 0;
    let description = '';

    if (calcScoreType === '12th') {
      if (calcScoreValue >= 95) {
        waiverPct = 100;
        description = 'Presidential Merit Scholarship: 100% Tuition Fee Waiver for 1st Year';
      } else if (calcScoreValue >= 90) {
        waiverPct = 75;
        description = 'Merit Gold Award: 75% Tuition Fee Waiver for Academic Excellence';
      } else if (calcScoreValue >= 85) {
        waiverPct = 50;
        description = 'Merit Silver Award: 50% Tuition Fee Waiver';
      } else if (calcScoreValue >= 80) {
        waiverPct = 25;
        description = 'Dean’s Honor Scholarship: 25% Tuition Fee Waiver';
      } else {
        waiverPct = 0;
        description = 'Standard tuition applies; eligible for Government MYSY / Digital Gujarat schemes.';
      }
    } else if (calcScoreType === 'jee') {
      if (calcScoreValue >= 98) {
        waiverPct = 100;
        description = 'Top JEE Ranker Super Fellowship: 100% Full Tuition Waiver';
      } else if (calcScoreValue >= 94) {
        waiverPct = 75;
        description = 'Institute of Technology Merit Scholarship: 75% Tuition Waiver';
      } else if (calcScoreValue >= 88) {
        waiverPct = 50;
        description = 'Engineering Excellence Award: 50% Tuition Waiver';
      } else {
        waiverPct = 20;
        description = 'ACPC / All-India Merit Grant: 20% Tuition Waiver';
      }
    } else if (calcScoreType === 'cat') {
      if (calcScoreValue >= 95) {
        waiverPct = 80;
        description = 'IM-NU National CAT Achiever Award: 80% Tuition Waiver';
      } else if (calcScoreValue >= 88) {
        waiverPct = 50;
        description = 'Management Merit Fellowship: 50% Tuition Waiver';
      } else {
        waiverPct = 25;
        description = 'Corporate Leadership Grant: 25% Tuition Waiver';
      }
    } else {
      // CLAT
      if (calcScoreValue >= 90) {
        waiverPct = 75;
        description = 'Institute of Law Juris Merit Fellowship: 75% Tuition Waiver';
      } else {
        waiverPct = 35;
        description = 'Legal Scholars Grant: 35% Tuition Waiver';
      }
    }

    if (calcDomicile && waiverPct > 0 && waiverPct < 100) {
      waiverPct = Math.min(100, waiverPct + 10);
    }

    return { waiverPct, description };
  }, [calcScoreType, calcScoreValue, calcDomicile]);

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    return config.programs.filter((p) => {
      const matchesLevel = programLevelFilter === 'All' || p.level === programLevelFilter;
      const matchesCategory = programCategoryFilter === 'All' || p.category === programCategoryFilter;
      const query = programSearchInput.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.institute.toLowerCase().includes(query) ||
        p.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesLevel && matchesCategory && matchesSearch;
    });
  }, [config.programs, programLevelFilter, programCategoryFilter, programSearchInput]);

  // Global Search results
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: { title: string; category: string; link: string; snippet: string }[] = [];

    // Search programs
    config.programs.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.institute.toLowerCase().includes(q)) {
        results.push({
          title: p.name,
          category: `Program · ${p.level}`,
          link: '#programs',
          snippet: `${p.institute} — Duration: ${p.duration}, Fees: ${p.feesPerYear}`
        });
      }
    });

    // Search institutes
    config.institutes.forEach((inst) => {
      if (inst.name.toLowerCase().includes(q) || inst.description.toLowerCase().includes(q)) {
        results.push({
          title: inst.name,
          category: 'Institute / Faculty',
          link: '#institutes',
          snippet: inst.description
        });
      }
    });

    // Search rankings
    config.rankings.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.authority.toLowerCase().includes(q)) {
        results.push({
          title: r.title,
          category: 'Rankings & Accreditations',
          link: '#rankings',
          snippet: r.description
        });
      }
    });

    return results.slice(0, 8);
  }, [searchQuery, config]);

  // Handle Application Submit
  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const appId = `NU-2026-${randomSuffix}`;
    setGeneratedAppId(appId);
    setFormSubmitted(true);
  };

  // Handle Application Lookup
  const handleApplicationLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const query = lookupAppId.trim().toUpperCase();
    if (!query) {
      setLookupError('Please enter a valid Application ID (e.g. NU-2026-104928).');
      return;
    }

    if (query === generatedAppId) {
      setLookupResult({
        id: query,
        name: applicantName,
        status: 'Application Under Document Verification',
        program: applicantProgram.toUpperCase(),
        date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
      });
      setLookupError('');
    } else if (query.startsWith('NU-2026-')) {
      setLookupResult({
        id: query,
        name: 'Verified Applicant',
        status: 'Shortlisted for Entrance Verification / Interview Stage',
        program: 'B.Tech / MBA Flagship Admission',
        date: 'Oct 15, 2026'
      });
      setLookupError('');
    } else {
      setLookupError(`No application record found for reference "${query}". Try NU-2026-104928 or submit a new form above.`);
      setLookupResult(null);
    }
  };

  const currentHero = config.heroSlides[activeHeroIndex];

  return (
    <div className="min-h-screen bg-[#081426] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-gradient-to-r from-[#0A2548] via-[#0E386E] to-[#0A2548] border-b border-[#1E3A5F] py-2 px-4 text-xs font-medium text-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold tracking-wider text-[10px] uppercase border border-amber-400/40 animate-pulse">
              ADMISSIONS 2026
            </span>
            <span className="text-slate-300 hidden sm:inline">
              JEE Main / GUJCET / CAT / CLAT / IPMAT / NATA applications are now invited across all 8 Institutes.
            </span>
            <span className="text-slate-300 sm:hidden">
              Admissions 2026 Open for B.Tech, MBA, Law &amp; Arch.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <a href="#scholarships" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Scholarship Portal</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a href="#placements" className="hover:text-amber-400 transition-colors hidden md:flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              <span>₹72.04 LPA Highest Placement</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="text-amber-300/90 font-mono hidden lg:inline">
              Toll-Free: 1800 233 6143
            </span>
          </div>
        </div>
      </div>

      {/* 2. INSTITUTIONAL HEADER & BRAND IDENTIFIER */}
      <header className="sticky top-0 z-40 bg-[#081426]/95 backdrop-blur-md border-b border-[#1E355B] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="/assets/nirma-university/logo-white.svg"
                alt="Nirma University Ahmedabad"
                className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#rankings" className="hover:text-amber-400 transition-colors">Accreditations</a>
              <a href="#institutes" className="hover:text-amber-400 transition-colors">8 Institutes</a>
              <a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a>
              <a href="#placements" className="hover:text-amber-400 transition-colors">Placements</a>
              <a href="#campus-life" className="hover:text-amber-400 transition-colors">115-Acre Campus</a>
              <a href="#scholarships" className="hover:text-amber-400 transition-colors">Scholarships</a>
              <a href="#faqs" className="hover:text-amber-400 transition-colors">FAQs</a>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGlobalSearchOpen(true)}
                className="p-2 rounded-lg bg-[#0C1E38] hover:bg-[#132A4D] border border-[#1E355B] text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Search Programs and Institutes"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="#admissions"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Apply 2026</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#0C1E38] border border-[#1E355B] text-slate-300 hover:text-white cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1A33] border-b border-[#1E355B] px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#home"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Home</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#rankings"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Accreditations</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#institutes"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>8 Institutes</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#programs"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Programs</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#placements"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>₹72 LPA Placements</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#campus-life"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>115-Acre Campus</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#scholarships"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Scholarships</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#faqs"
                className="p-2.5 rounded-lg bg-[#081426] text-slate-200 hover:text-amber-400 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>FAQs</span>
              </a>
            </div>

            <div className="pt-2 border-t border-[#1E355B] flex flex-col gap-2">
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#admissions"
                className="w-full py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-center uppercase tracking-wider text-xs"
              >
                Apply Online 2026 Desk
              </a>
              <div className="text-center text-xs text-slate-400 pt-1">
                Admissions Helpline: +91-79-71652000
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SLIDER SECTION */}
      <section id="home" className="relative min-h-[560px] sm:min-h-[620px] flex items-center overflow-hidden border-b border-[#1E355B]">
        {/* Background Image / SVG */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentHero.image}
            alt={currentHero.title}
            className="w-full h-full object-cover object-center opacity-40 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081426] via-[#081426]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C2340] border border-amber-500/40 text-xs font-bold text-amber-300 tracking-wider uppercase mb-4 shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentHero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none mb-4 font-serif">
              {currentHero.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
              {currentHero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={currentHero.ctaLink}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{currentHero.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#institutes"
                className="px-6 py-3.5 rounded-xl bg-[#0C1E38]/80 hover:bg-[#132A4D] border border-[#1E355B] text-white font-bold text-sm tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Explore 8 Institutes</span>
              </a>
            </div>

            {/* Hero Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#1E355B]/80 max-w-xl">
              {currentHero.stats.map((st, i) => (
                <div key={i} className="bg-[#0C1E38]/60 backdrop-blur-sm border border-[#1E355B] p-3 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">
                    {st.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators & Arrows */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setActiveHeroIndex((prev) => (prev === 0 ? config.heroSlides.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full bg-[#0C1E38]/90 hover:bg-amber-500 hover:text-slate-950 border border-[#1E355B] flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081426]/80 backdrop-blur-sm border border-[#1E355B]">
            {config.heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHeroIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeHeroIndex === i ? 'w-6 bg-amber-400' : 'bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveHeroIndex((prev) => (prev === config.heroSlides.length - 1 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full bg-[#0C1E38]/90 hover:bg-amber-500 hover:text-slate-950 border border-[#1E355B] flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 4. STATUTORY ACCREDITATIONS & RANKINGS SECTION */}
      <section id="rankings" className="py-16 sm:py-20 bg-[#06101E] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Institutional Benchmark
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
              Accreditations, State Recognition &amp; NIRF Standings
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Recognized under UGC Section 2(f), accredited with NAAC Grade A+ (3.65 CGPA), and declared a Centre of Excellence by the Government of Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.rankings.map((rk) => (
              <div
                key={rk.id}
                className="bg-[#0C1E38] border border-[#1E355B] hover:border-amber-500/60 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      {rk.authority}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {rk.title}
                    </h3>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border"
                    style={{
                      backgroundColor: `${rk.color}20`,
                      borderColor: `${rk.color}50`,
                      color: rk.color
                    }}
                  >
                    {rk.rank}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {rk.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Facts Bar */}
          <div className="mt-12 bg-gradient-to-r from-[#0A2548] via-[#0E386E] to-[#0A2548] border border-[#1E3A5F] rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">115</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Acres Green Campus</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3.65</div>
                <div className="text-xs text-slate-300 font-medium mt-1">NAAC A+ CGPA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">₹72.04</div>
                <div className="text-xs text-slate-300 font-medium mt-1">LPA Highest Package</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">8</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Flagship Institutes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-pink-400 font-mono">300+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Annual Recruiters</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">2003</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Estd. Under NERF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EIGHT SPECIALIZED INSTITUTES SECTION */}
      <section id="institutes" className="py-16 sm:py-24 bg-[#081426] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-xs font-bold text-blue-300 uppercase tracking-widest mb-3">
                <Layers className="w-4 h-4 text-blue-400" />
                Multidisciplinary Centers
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
                The 8 Specialized Institutes of Nirma University
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Each institute operates with dedicated academic councils, distinguished deans, state-of-the-art laboratory infrastructure, and specialized corporate immersion.
              </p>
            </div>
            <a
              href="#programs"
              className="px-5 py-2.5 rounded-xl bg-[#0C1E38] hover:bg-[#132A4D] border border-[#1E355B] text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.institutes.map((inst) => (
              <div
                key={inst.id}
                className="bg-[#0C1E38] border border-[#1E355B] hover:border-amber-500/60 p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono border"
                      style={{
                        backgroundColor: `${inst.color}15`,
                        borderColor: `${inst.color}50`,
                        color: inst.color
                      }}
                    >
                      {inst.shortName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Estd. {inst.established}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {inst.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    Dean: {inst.dean}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {inst.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1E355B]">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Flagship Degrees:
                    </span>
                    <ul className="space-y-1">
                      {inst.flagshipPrograms.slice(0, 3).map((fp, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{fp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E355B] flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {inst.flagshipPrograms.length} Programs
                  </span>
                  <button
                    onClick={() => setSelectedInstituteModal(inst)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Institute</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEGREE PROGRAMS CATALOG & EXPLORER */}
      <section id="programs" className="py-16 sm:py-24 bg-[#06101E] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/50 text-xs font-bold text-purple-300 uppercase tracking-widest mb-3">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Academic Programs Finder
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
              Discover Undergraduate, Postgraduate &amp; Integrated Degrees
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Filter by degree level, discipline, entrance exams (JEE/CAT/CLAT/NATA), and explore curriculum roadmaps.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-[#0C1E38] border border-[#1E355B] p-4 sm:p-6 rounded-2xl shadow-xl mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search program, code, or specializations..."
                  value={programSearchInput}
                  onChange={(e) => setProgramSearchInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                {programSearchInput && (
                  <button
                    onClick={() => setProgramSearchInput('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Level Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {['All', 'Undergraduate', 'Postgraduate', 'Integrated'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setProgramLevelFilter(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      programLevelFilter === lvl
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-[#081426] text-slate-400 hover:text-white border border-[#1E355B]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Category / Discipline Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1E355B]">
              <span className="text-xs font-medium text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Discipline:
              </span>
              {[
                { id: 'All', label: 'All Disciplines' },
                { id: 'technology', label: 'Technology & AI' },
                { id: 'management', label: 'Management' },
                { id: 'pharmacy', label: 'Pharmacy' },
                { id: 'law', label: 'Law' },
                { id: 'architecture', label: 'Architecture' },
                { id: 'science', label: 'Science' },
                { id: 'commerce', label: 'Commerce' },
                { id: 'design', label: 'Design' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setProgramCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    programCategoryFilter === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#081426]/70 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#0C1E38] border border-[#1E355B] hover:border-amber-500/60 p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#081426] border border-[#1E355B] text-[11px] font-mono font-bold text-amber-400">
                      {prog.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[10px] font-bold text-blue-300 uppercase">
                      {prog.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {prog.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{prog.institute}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-[#081426] border border-[#1E355B] text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">Duration</span>
                      <span className="text-slate-200 font-medium">{prog.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">Tuition / Year</span>
                      <span className="text-amber-400 font-bold font-mono">{prog.feesPerYear}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1 mb-4">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      Entrance Exam:
                    </div>
                    <div className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{prog.entranceExam}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E355B] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProgramModal(prog)}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Curriculum</span>
                  </button>

                  <a
                    href="#admissions"
                    onClick={() => {
                      setApplicantProgram(prog.id);
                      if (prog.instituteShort === 'IT-NU') setApplicantInstitute('it-nu');
                      else if (prog.instituteShort === 'IM-NU') setApplicantInstitute('im-nu');
                      else if (prog.instituteShort === 'IL-NU') setApplicantInstitute('il-nu');
                      else if (prog.instituteShort === 'IP-NU') setApplicantInstitute('ip-nu');
                      else if (prog.instituteShort === 'IAP-NU') setApplicantInstitute('iap-nu');
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 border border-amber-400/50 text-amber-300 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 bg-[#0C1E38] rounded-2xl border border-[#1E355B] p-8">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <div className="text-base font-bold text-white">No degree programs matched your filter criteria</div>
              <p className="text-xs text-slate-400 mt-1 mb-4">Try clearing the search box or selecting "All Disciplines".</p>
              <button
                onClick={() => {
                  setProgramSearchInput('');
                  setProgramLevelFilter('All');
                  setProgramCategoryFilter('All');
                }}
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. PLACEMENTS & RECRUITERS SHOWCASE */}
      <section id="placements" className="py-16 sm:py-24 bg-[#081426] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-3">
                <Trophy className="w-4 h-4 text-emerald-400" />
                Unsurpassed Career Milestones
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
                Corporate Placements &amp; ₹72.04 LPA Highest Package
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                Nirma University's Industry Liaison and Placement Cell interfaces with over 300 marquee corporate conglomerates every year. With 100% placement records in Cyber Security and flagship Engineering &amp; Management batches, our graduates lead across top multinational enterprises.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#0C1E38] border border-amber-500/50 p-5 rounded-2xl shadow-xl">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Highest Offer</div>
                <div className="text-3xl font-black text-white font-mono mt-1">₹72.04 LPA</div>
                <div className="text-xs text-slate-400 mt-1">B.Tech Electronics &amp; Comm.</div>
              </div>
              <div className="bg-[#0C1E38] border border-emerald-500/50 p-5 rounded-2xl shadow-xl">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Highest MBA</div>
                <div className="text-3xl font-black text-white font-mono mt-1">₹70.00 LPA</div>
                <div className="text-xs text-slate-400 mt-1">Institute of Management</div>
              </div>
              <div className="bg-[#0C1E38] border border-[#1E355B] p-5 rounded-2xl shadow-xl">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Top 50 MBA Avg</div>
                <div className="text-2xl font-black text-white font-mono mt-1">₹15.93 LPA</div>
                <div className="text-xs text-slate-400 mt-1">Class of 2026 Batch</div>
              </div>
              <div className="bg-[#0C1E38] border border-[#1E355B] p-5 rounded-2xl shadow-xl">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">Corporate Ties</div>
                <div className="text-2xl font-black text-white font-mono mt-1">300+ MNCs</div>
                <div className="text-xs text-slate-400 mt-1">Annual Campus Recruiters</div>
              </div>
            </div>
          </div>

          {/* Marquee Recruiters Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {config.recruiters.map((rec, i) => (
              <div
                key={i}
                className="bg-[#0C1E38] border border-[#1E355B] hover:border-amber-500/50 p-4 rounded-xl text-center shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#081426] border border-[#1E355B] flex items-center justify-center font-black text-amber-400 font-mono text-sm mx-auto mb-2 group-hover:scale-105 transition-transform">
                  {rec.logoText}
                </div>
                <div className="text-xs font-bold text-white truncate">{rec.name}</div>
                <div className="text-[11px] font-mono text-emerald-400 font-semibold mt-0.5">{rec.packageOffered}</div>
                <div className="text-[10px] text-slate-400 truncate mt-1">{rec.role}</div>
              </div>
            ))}
          </div>

          {/* Student Success Stories */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span>Student Placement Voices</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.testimonials.map((test) => (
                <div
                  key={test.id}
                  className="bg-[#0C1E38] border border-[#1E355B] p-5 rounded-2xl shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/60"
                      />
                      <div>
                        <div className="text-sm font-bold text-white">{test.name}</div>
                        <div className="text-[11px] text-amber-400 font-medium">{test.company} · {test.packageOffered}</div>
                        <div className="text-[10px] text-slate-400">{test.institute}</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#1E355B] text-[10px] text-slate-400 font-mono">
                    {test.role} · {test.batch}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 115-ACRE SMART CAMPUS & VIRTUAL TOUR SIMULATOR */}
      <section id="campus-life" className="py-16 sm:py-24 bg-[#06101E] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4 text-emerald-400" />
              World-Class Infrastructure
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
              115-Acre Lush Green Campus in Ahmedabad
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Explore the Central Digital Library, AICTE IDEA Labs, amphitheaters, sports complex, and student residential halls.
            </p>
          </div>

          {/* Interactive Facility Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0C1E38] border border-[#1E355B] rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl">
            {/* Facility Image & Viewer */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[#1E355B] aspect-[16/10] bg-black">
              <img
                src={config.campusFacilities[activeFacilityIndex].image}
                alt={config.campusFacilities[activeFacilityIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1 inline-block">
                  {config.campusFacilities[activeFacilityIndex].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif">
                  {config.campusFacilities[activeFacilityIndex].title}
                </h3>
                <div className="text-xs text-amber-300 font-mono mt-0.5">
                  {config.campusFacilities[activeFacilityIndex].metrics}
                </div>
              </div>
            </div>

            {/* Facility Details & Selection */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {config.campusFacilities[activeFacilityIndex].description}
                </p>

                <div className="space-y-2 mb-6">
                  {config.campusFacilities[activeFacilityIndex].points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selector Tabs */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Select Campus Facility:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {config.campusFacilities.map((fac, idx) => (
                    <button
                      key={fac.id}
                      onClick={() => setActiveFacilityIndex(idx)}
                      className={`p-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer truncate ${
                        activeFacilityIndex === idx
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'bg-[#081426] text-slate-300 hover:text-white border border-[#1E355B]'
                      }`}
                    >
                      {fac.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE MERIT SCHOLARSHIP CALCULATOR */}
      <section id="scholarships" className="py-16 sm:py-24 bg-[#081426] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0C1E38] to-[#0A1A33] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Tuition Fee Relief Estimator
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-serif">
                Nirma Merit Scholarship Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Calculate estimated merit tuition waivers (up to 100%) based on your 10+2 scores or competitive entrance exam percentiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    1. Select Qualifying Score Benchmark
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: '12th', label: '10+2 Board' },
                      { id: 'jee', label: 'JEE Main' },
                      { id: 'cat', label: 'CAT' },
                      { id: 'clat', label: 'CLAT' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setCalcScoreType(t.id as any);
                          if (t.id === '12th') setCalcScoreValue(92);
                          else if (t.id === 'jee') setCalcScoreValue(95);
                          else if (t.id === 'cat') setCalcScoreValue(90);
                          else setCalcScoreValue(88);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          calcScoreType === t.id
                            ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                            : 'bg-[#081426] text-slate-300 hover:text-white border border-[#1E355B]'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      2. Score / Percentile Value
                    </label>
                    <span className="text-lg font-mono font-black text-amber-400">
                      {calcScoreValue}% / Rank
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={calcScoreValue}
                    onChange={(e) => setCalcScoreValue(Number(e.target.value))}
                    className="w-full accent-amber-500 h-2 bg-[#081426] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>50%</span>
                    <span>75%</span>
                    <span>90%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#081426] border border-[#1E355B]">
                  <div>
                    <div className="text-xs font-bold text-white">Gujarat Domicile / ACPC Candidate?</div>
                    <div className="text-[11px] text-slate-400">Additional state-level merit incentives may apply</div>
                  </div>
                  <button
                    onClick={() => setCalcDomicile(!calcDomicile)}
                    className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                      calcDomicile ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        calcDomicile ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Output Display */}
              <div className="bg-[#081426] border border-amber-500/40 p-6 sm:p-8 rounded-2xl text-center shadow-xl flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                    Estimated Tuition Waiver
                  </span>
                  <div className="text-5xl sm:text-6xl font-black text-amber-400 font-mono my-3">
                    {scholarshipEstimate.waiverPct}%
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg inline-block mb-3">
                    {scholarshipEstimate.description}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Final award is subject to verification of qualifying marksheets and NIRMA University NERF Foundation merit committee guidelines at the time of admission.
                  </p>
                </div>

                <a
                  href="#admissions"
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply with this Scholarship</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL-TIME ADMISSIONS 2026 APPLICATION DESK */}
      <section id="admissions" className="py-16 sm:py-24 bg-[#06101E] border-b border-[#1E355B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Guidelines & Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
                  <Send className="w-4 h-4 text-amber-400" />
                  Official Admissions Desk 2026
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
                  Begin Your Academic Journey at Nirma University
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                  Submit your admissions intent for the 2026-27 academic session. Your application will be routed directly to the concerned Institute's Admission Cell.
                </p>
              </div>

              {/* Roadmap steps */}
              <div className="space-y-3 bg-[#0C1E38] border border-[#1E355B] p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Online Application &amp; Choice Filling</div>
                    <div className="text-[11px] text-slate-400">Select program, institute, and enter qualifying entrance exam details.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Document Verification &amp; Merit List</div>
                    <div className="text-[11px] text-slate-400">Merit rank declaration based on JEE Main / GUJCET / CAT / CLAT / NATA scores.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Counseling &amp; Seat Allotment</div>
                    <div className="text-[11px] text-slate-400">Seat confirmation, scholarship grant, and campus hostel room booking.</div>
                  </div>
                </div>
              </div>

              {/* Admissions Helpline */}
              <div className="p-5 rounded-2xl bg-[#081426] border border-[#1E355B] space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Admissions Helpline (Toll-Free)
                </div>
                <div className="text-lg font-mono font-bold text-white">
                  1800 233 6143 / +91-79-71652000
                </div>
                <div className="text-xs text-slate-400">
                  Email: admissions@nirmauni.ac.in · Working Hours: Mon-Sat, 9:00 AM - 5:30 PM
                </div>
              </div>

              {/* Track Application Quick Card */}
              <div className="p-5 rounded-2xl bg-[#0C1E38] border border-[#1E355B]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-blue-400" />
                  <span>Check Existing Application Status</span>
                </h3>
                <form onSubmit={handleApplicationLookup} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. NU-2026-104928"
                    value={lookupAppId}
                    onChange={(e) => setLookupAppId(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer"
                  >
                    Track
                  </button>
                </form>

                {lookupError && (
                  <div className="text-[11px] text-rose-400 mt-2">
                    {lookupError}
                  </div>
                )}

                {lookupResult && (
                  <div className="mt-3 p-3 rounded-xl bg-[#081426] border border-emerald-500/40 text-xs space-y-1">
                    <div className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{lookupResult.status}</span>
                    </div>
                    <div className="text-slate-300">Reference: <span className="font-mono text-white">{lookupResult.id}</span></div>
                    <div className="text-slate-400 text-[11px]">Program: {lookupResult.program} · Updated: {lookupResult.date}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[#0C1E38] border border-[#1E355B] p-6 sm:p-8 rounded-3xl shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-serif">
                    Application Registered Successfully!
                  </h3>
                  <div className="p-4 rounded-xl bg-[#081426] border border-[#1E355B] max-w-sm mx-auto">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Your Tracking Reference:</div>
                    <div className="text-2xl font-black text-amber-400 font-mono mt-1">{generatedAppId}</div>
                    <div className="text-xs text-slate-300 mt-1">Applicant: {applicantName}</div>
                  </div>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    A confirmation acknowledgment has been registered. The Admissions Dean's office will notify you on {applicantEmail} and {applicantPhone} regarding document counseling dates.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setApplicantName('');
                      setApplicantEmail('');
                      setApplicantPhone('');
                      setApplicantScore('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-5">
                  <div className="border-b border-[#1E355B] pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white font-serif">
                      Admissions Application Form (2026-27)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out your details accurately. All fields marked with * are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Full Name of Applicant *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav K. Patel"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="aarav.patel@example.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Entrance Exam Score / Board %
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. JEE 97.4%tile / 12th 94%"
                        value={applicantScore}
                        onChange={(e) => setApplicantScore(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Target Institute *
                      </label>
                      <select
                        value={applicantInstitute}
                        onChange={(e) => setApplicantInstitute(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs focus:outline-none focus:border-amber-500"
                      >
                        {config.institutes.map((inst) => (
                          <option key={inst.id} value={inst.id} className="bg-[#081426]">
                            {inst.name} ({inst.shortName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Preferred Degree Program *
                      </label>
                      <select
                        value={applicantProgram}
                        onChange={(e) => setApplicantProgram(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs focus:outline-none focus:border-amber-500"
                      >
                        {config.programs.map((p) => (
                          <option key={p.id} value={p.id} className="bg-[#081426]">
                            {p.name} ({p.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#081426] border border-[#1E355B] text-[11px] text-slate-400 leading-relaxed">
                    By submitting this application, you declare that the submitted academic records are accurate. Seat allotment is governed by official ACPC and Nirma University Admission Regulations 2026.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Generate Application ID &amp; Register</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. EXPANDABLE FAQ ACCORDION */}
      <section id="faqs" className="py-16 sm:py-24 bg-[#081426] border-b border-[#1E355B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-xs font-bold text-blue-300 uppercase tracking-widest mb-3">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
              Admissions, Placements &amp; Campus Queries
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Find instant answers regarding eligibility, ACPC quotas, CAT exams, hostel facilities, and scholarships.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {['All', 'Admissions 2026', 'Engineering & Technology', 'Management (MBA & BBA)', 'Placements & Internships', 'Hostels & Campus Life'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-[#0C1E38] text-slate-400 hover:text-white border border-[#1E355B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {config.faqs
              .filter((f) => activeFaqCategory === 'All' || f.category === activeFaqCategory)
              .map((faq, index) => {
                const isExpanded = expandedFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-[#0C1E38] border border-[#1E355B] rounded-2xl overflow-hidden shadow-lg transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaqIndex(isExpanded ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#102444] transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#1E355B]/60 bg-[#081426]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* 12. COMPREHENSIVE INSTITUTIONAL FOOTER */}
      <footer className="bg-[#040C17] text-slate-400 text-xs border-t border-[#1E355B] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Brand & Foundation */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src="/assets/nirma-university/logo-white.svg"
                alt="Nirma University"
                className="h-12 w-auto"
              />
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Nirma University was established in 2003 under the aegis of the Nirma Education &amp; Research Foundation (NERF) by visionary industrialist Dr. Karsanbhai K. Patel. Conferred the status of "Centre of Excellence" by the Government of Gujarat and accredited with NAAC Grade 'A+' (3.65 CGPA).
              </p>
              <div className="text-[11px] text-slate-400 space-y-1">
                <div>Campus: Sarkhej-Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481, India</div>
                <div>Helpline: +91-79-71652000 / 1800 233 6143</div>
                <div>Email: admissions@nirmauni.ac.in</div>
              </div>
            </div>

            {/* Column 2: 8 Specialized Institutes */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Institutes of NU
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {config.institutes.map((inst) => (
                  <li key={inst.id}>
                    <button
                      onClick={() => setSelectedInstituteModal(inst)}
                      className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                    >
                      {inst.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Flagship Programs */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Flagship Degrees
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">B.Tech Computer Science</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">B.Tech AI &amp; Machine Learning</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">MBA (Master of Business Admin)</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Integrated BBA-MBA (5 Years)</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">BA LL.B / B.Com LL.B (Hons)</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Bachelor of Architecture (B.Arch)</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Bachelor of Pharmacy (B.Pharm)</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">M.Sc Biotechnology &amp; PhD</a></li>
              </ul>
            </div>

            {/* Column 4: Statutory Disclosures */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Statutory Approvals
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>UGC Recognized Section 2(f)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NAAC Grade 'A+' (3.65 CGPA)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Centre of Excellence (Gujarat)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AICTE Approved Programs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bar Council of India (BCI)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pharmacy Council of India (PCI)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Council of Architecture (COA)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E355B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} Nirma University, Ahmedabad. All Rights Reserved. Recreated faithfully for Raoz Website Maker Catalog.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#home" className="hover:text-amber-400 transition-colors">Back to Top ↑</a>
              <span>·</span>
              <a href="https://nirmauni.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>Official nirmauni.ac.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* PROGRAM DETAIL MODAL */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0C1E38] border border-amber-500/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#081426] text-slate-400 hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold text-xs uppercase border border-amber-400/40">
                {selectedProgramModal.code}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {selectedProgramModal.institute}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-serif mb-4">
              {selectedProgramModal.name}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-[#081426] border border-[#1E355B] text-xs mb-6">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Level</span>
                <span className="text-white font-bold">{selectedProgramModal.level}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Duration</span>
                <span className="text-white font-bold">{selectedProgramModal.duration}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Annual Fees</span>
                <span className="text-amber-400 font-mono font-bold">{selectedProgramModal.feesPerYear}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Approved By</span>
                <span className="text-emerald-400 font-bold">{selectedProgramModal.accreditation}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Eligibility Criteria
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#081426] p-3 rounded-xl border border-[#1E355B]">
                  {selectedProgramModal.eligibility}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Entrance Exam Requirement
                </h4>
                <p className="text-xs text-emerald-300 font-semibold bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-xl">
                  {selectedProgramModal.entranceExam}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Program Highlights &amp; Laboratories
                </h4>
                <ul className="space-y-1.5">
                  {selectedProgramModal.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Target Career Roles
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProgramModal.careerRoles.map((role, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#081426] border border-[#1E355B] text-xs text-slate-200">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#admissions"
                onClick={() => {
                  setApplicantProgram(selectedProgramModal.id);
                  setSelectedProgramModal(null);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider text-center shadow-lg cursor-pointer"
              >
                Apply for this Degree
              </a>
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="px-5 py-3 rounded-xl bg-[#081426] hover:bg-[#132A4D] border border-[#1E355B] text-white text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INSTITUTE DETAIL MODAL */}
      {selectedInstituteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0C1E38] border border-blue-500/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInstituteModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#081426] text-slate-400 hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold border inline-block mb-2"
              style={{
                backgroundColor: `${selectedInstituteModal.color}15`,
                borderColor: `${selectedInstituteModal.color}50`,
                color: selectedInstituteModal.color
              }}
            >
              {selectedInstituteModal.shortName} · Established {selectedInstituteModal.established}
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-white font-serif mb-1">
              {selectedInstituteModal.name}
            </h3>
            <div className="text-xs text-amber-400 font-semibold mb-4">
              Dean: {selectedInstituteModal.dean}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedInstituteModal.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#081426] border border-[#1E355B] mb-6">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                Accreditations &amp; Institutional Honors
              </span>
              <div className="text-xs text-emerald-400 font-medium">
                {selectedInstituteModal.keyHonors}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Flagship Academic Offerings
              </h4>
              <div className="space-y-1.5">
                {selectedInstituteModal.flagshipPrograms.map((pr, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#081426] border border-[#1E355B] text-xs text-white flex items-center justify-between">
                    <span>{pr}</span>
                    <a
                      href="#programs"
                      onClick={() => {
                        setProgramSearchInput(pr);
                        setSelectedInstituteModal(null);
                      }}
                      className="text-amber-400 hover:underline text-[11px]"
                    >
                      View Details →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#admissions"
                onClick={() => {
                  setApplicantInstitute(selectedInstituteModal.id);
                  setSelectedInstituteModal(null);
                }}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg"
              >
                Apply to this Institute
              </a>
              <button
                onClick={() => setSelectedInstituteModal(null)}
                className="px-5 py-3 rounded-xl bg-[#081426] hover:bg-[#132A4D] border border-[#1E355B] text-white text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL SEARCH MODAL */}
      {globalSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0C1E38] border border-amber-500/60 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search Nirma University Catalog</span>
              </div>
              <button
                onClick={() => setGlobalSearchOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Type course, institute, ranking, or fee details..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#081426] border border-[#1E355B] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2">
              {globalSearchResults.map((res, i) => (
                <a
                  key={i}
                  href={res.link}
                  onClick={() => setGlobalSearchOpen(false)}
                  className="p-3 rounded-xl bg-[#081426] hover:bg-[#132A4D] border border-[#1E355B] block transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{res.title}</span>
                    <span className="text-[10px] text-amber-400 font-mono">{res.category}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{res.snippet}</p>
                </a>
              ))}

              {searchQuery && globalSearchResults.length === 0 && (
                <div className="text-center py-6 text-xs text-slate-400">
                  No matches found for "{searchQuery}". Try "B.Tech", "MBA", "Law", "Pharmacy", or "NAAC".
                </div>
              )}

              {!searchQuery && (
                <div className="text-center py-6 text-xs text-slate-500">
                  Popular queries: B.Tech CSE, MBA, Integrated BBA-MBA, CLAT Law, NAAC A+, ₹72 LPA Placements
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
