import React, { useState, useEffect, useId } from 'react';
import {
  CR_RAMANS_UNIVERSITY_CONFIG,
  CRUProgram,
  CRUHeroSlide,
  CRURecruiter,
  CRUCoE,
  CRUFacility,
  CRUTestimonial,
  CRUFaq
} from './cr-ramans-university.config';
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Laptop,
  Lightbulb,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Phone,
  Search,
  Send,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
  Video,
  X,
  Building2,
  FileText,
  DollarSign,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';

export default function CrRamansUniversity() {
  const cfg = CR_RAMANS_UNIVERSITY_CONFIG;

  // Navigation & UI States
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  // Search & Filters for Academic Programs
  const [programSearch, setProgramSearch] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<'All' | 'Undergraduate' | 'Postgraduate' | 'Doctoral'>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<CRUProgram | null>(null);

  // Recruiter Sector Filter
  const [selectedRecruiterSector, setSelectedRecruiterSector] = useState<string>('All');

  // Centers of Excellence Detail Modal
  const [selectedCoE, setSelectedCoE] = useState<CRUCoE | null>(null);

  // Campus Facility Active Tab
  const [activeFacilityId, setActiveFacilityId] = useState<string>(cfg.campusFacilities[0].id);

  // Scholarship Calculator State
  const [scoreInput, setScoreInput] = useState<number>(85);
  const [calculatedStream, setCalculatedStream] = useState<string>('engineering');

  // Admissions Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantState, setApplicantState] = useState('');
  const [applicantLevel, setApplicantLevel] = useState('Undergraduate');
  const [applicantProgram, setApplicantProgram] = useState('B.E. Computer Science & Engineering (CSE)');
  const [applicantCrucetPhase, setApplicantCrucetPhase] = useState('CRUCET Phase-1 (Jan - May 2026)');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    refId: string;
    name: string;
    program: string;
    email: string;
    phase: string;
    scholarshipEstimate: string;
    date: string;
  } | null>(null);

  // Application Tracking Lookup
  const [lookupRefId, setLookupRefId] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  // FAQ Active Category
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Lightbox Modal for Facility or Gallery Image
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  // Unique IDs for form controls
  const programSearchId = useId();
  const scoreInputId = useId();
  const applicantNameId = useId();
  const applicantEmailId = useId();
  const applicantPhoneId = useId();
  const applicantStateId = useId();
  const applicantLevelId = useId();
  const applicantProgramId = useId();
  const applicantCrucetPhaseId = useId();
  const lookupRefInputId = useId();

  // Hero carousel auto-timer
  useEffect(() => {
    if (isSlidePaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % cfg.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isSlidePaused, cfg.heroSlides.length]);

  // Filtered Programs logic
  const filteredPrograms = cfg.programs.filter((prog) => {
    const matchesSearch =
      prog.name.toLowerCase().includes(programSearch.toLowerCase()) ||
      prog.code.toLowerCase().includes(programSearch.toLowerCase()) ||
      prog.faculty.toLowerCase().includes(programSearch.toLowerCase()) ||
      prog.careerRoles.some((r) => r.toLowerCase().includes(programSearch.toLowerCase()));

    const matchesLevel = selectedLevelFilter === 'All' || prog.level === selectedLevelFilter;
    const matchesCategory = selectedCategoryFilter === 'all' || prog.category === selectedCategoryFilter;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  // Filtered Recruiters
  const filteredRecruiters = cfg.recruiters.filter((rec) => {
    if (selectedRecruiterSector === 'All') return true;
    return rec.sector === selectedRecruiterSector;
  });

  // Calculate scholarship percentage based on score
  const getScholarshipResult = (score: number) => {
    if (score >= 90.01) {
      return {
        tier: 'Tier 1: 100% Scholarship (Full Ride)',
        waiver: '100% Tuition Fee Waiver',
        discountPercent: 100,
        badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/50',
        note: 'Exceptional merit performance. Tuition fee completely waived for academic year!'
      };
    } else if (score >= 80.0) {
      return {
        tier: 'Tier 2: 50% Scholarship',
        waiver: '50% Tuition Fee Waiver',
        discountPercent: 50,
        badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-500/50',
        note: 'Outstanding achievement! Half of total tuition fee waived.'
      };
    } else if (score >= 70.0) {
      return {
        tier: 'Tier 3: 40% Scholarship',
        waiver: '40% Tuition Fee Waiver',
        discountPercent: 40,
        badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/50',
        note: 'High merit eligibility. 40% reduction applied to semester fees.'
      };
    } else if (score >= 60.0) {
      return {
        tier: 'Tier 4: 30% Scholarship',
        waiver: '30% Tuition Fee Waiver',
        discountPercent: 30,
        badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/50',
        note: 'Merit scholarship awarded. 30% reduction applied across degree.'
      };
    } else {
      return {
        tier: 'Standard Admission',
        waiver: 'General Merit Category',
        discountPercent: 0,
        badgeColor: 'text-slate-400 bg-slate-900 border-slate-700',
        note: 'Score below 60%. Retake CRUCET 2026 Phase-2 to qualify for merit scholarships.'
      };
    }
  };

  const currentScholarship = getScholarshipResult(scoreInput);

  // Validate and submit Admissions form
  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!applicantName.trim()) errors.name = 'Full name is required';
    if (!applicantEmail.trim() || !applicantEmail.includes('@')) errors.email = 'Valid email is required';
    if (!applicantPhone.trim() || applicantPhone.length < 10) errors.phone = '10-digit mobile number is required';
    if (!applicantState.trim()) errors.state = 'Please select or enter your state';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `CRU-2026-${randomSuffix}`;

    const receipt = {
      refId: trackingId,
      name: applicantName.trim(),
      program: applicantProgram,
      email: applicantEmail.trim(),
      phase: applicantCrucetPhase,
      scholarshipEstimate: currentScholarship.waiver,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    setSubmittedReceipt(receipt);
  };

  // Lookup reference tracking status
  const handleLookup = () => {
    if (!lookupRefId.trim()) return;
    const clean = lookupRefId.trim().toUpperCase();
    if (clean.startsWith('CRU-2026-')) {
      setLookupResult(
        `STATUS VERIFIED: Application ${clean} is ACTIVE for CRUCET 2026 Admissions. Online examination slot confirmed. Verification link sent to candidate email.`
      );
    } else {
      setLookupResult(
        `Reference ${clean} not found. Please verify your reference format (e.g. CRU-2026-XXXXXX) or register as a fresh applicant.`
      );
    }
  };

  // Filtered FAQs
  const filteredFaqs = cfg.faqs.filter((faq) => {
    if (activeFaqCategory === 'All') return true;
    return faq.category === activeFaqCategory;
  });

  return (
    <div className="cr-ramans-demo bg-[#070D18] text-[#F1F5F9] font-sans min-h-screen selection:bg-[#E11D48] selection:text-white">
      {/* 1. TOP UTILITY ANNOUNCEMENT BAR */}
      <div className="bg-[#050A14] border-b border-[#1E293B] text-xs py-2 px-4 sm:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#E11D48]/20 text-[#FB7185] font-semibold border border-[#E11D48]/30">
              <Sparkles className="w-3.5 h-3.5" />
              ADMISSIONS 2026 OPEN
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-300 font-medium">
              CRUCET 2026: National Entrance &amp; ₹170 Cr Merit Scholarship Exam
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a
              href="tel:1800121288800"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              Toll-Free: {cfg.brand.admissionsHelpline}
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="#scholarships" className="hover:text-white transition-colors hidden sm:inline">
              Scholarship Calculator
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="#admissions" className="text-amber-400 hover:text-amber-300 font-bold tracking-wide">
              APPLY NOW ↗
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#070D18]/95 backdrop-blur-md border-b border-[#1E293B] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F274A] to-[#0A192F] border border-amber-500/40 flex items-center justify-center p-1.5 shadow-md group-hover:border-amber-400 transition-all">
              <img
                src="/assets/cr-ramans-university/logo-white.svg"
                alt="CR Ramans University Crest"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="font-serif font-black text-lg sm:text-xl tracking-wider text-white leading-none">
                CR RAMANS
              </div>
              <div className="text-[11px] font-serif font-bold text-[#E11D48] tracking-[0.25em] leading-tight">
                UNIVERSITY
              </div>
              <div className="text-[9px] text-slate-400 tracking-tight font-medium hidden sm:block">
                NAAC A+ ACCREDITED · QS WORLD TOP 1%
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {[
              { id: 'home', label: 'Home' },
              { id: 'rankings', label: 'Accreditations' },
              { id: 'programs', label: 'Programs' },
              { id: 'placements', label: 'Placements' },
              { id: 'innovation', label: 'Research & CoE' },
              { id: 'campus-life', label: 'Campus Life' },
              { id: 'scholarships', label: 'CRUCET' },
              { id: 'faqs', label: 'FAQs' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveNav(item.id)}
                className={`py-1 relative transition-colors ${
                  activeNav === item.id
                    ? 'text-amber-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400'
                    : 'hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="px-4 py-2 bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-rose-900/30 transition-all flex items-center gap-1.5"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#111C30] border border-[#1E293B] text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1424] border-b border-[#1E293B] px-6 py-4 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'rankings', label: 'Accreditations & Rankings' },
              { id: 'programs', label: 'Academic Programs' },
              { id: 'placements', label: 'Placement Records' },
              { id: 'innovation', label: 'Research & Innovation CoE' },
              { id: 'campus-life', label: 'Campus Life & 360° Tour' },
              { id: 'scholarships', label: 'CRUCET 2026 Scholarships' },
              { id: 'faqs', label: 'Frequently Asked Questions' },
              { id: 'admissions', label: 'Admissions Desk 2026' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 border-b border-[#1E293B]/60"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 text-xs text-slate-400">
              <p>Admissions Helpline: 1800 1212 88800</p>
              <p>Email: admissions@crramans.edu.in</p>
            </div>
          </div>
        )}
      </header>

      {/* 3. STATUTORY ACCREDITATION RIBBON */}
      <section id="rankings" className="bg-[#050A14] border-b border-[#1E293B] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Statutory Honors &amp; Recognitions:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs">
            {cfg.accreditations.map((acc) => (
              <div
                key={acc.code}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C172A] border border-[#1E293B] hover:border-amber-500/40 transition-all cursor-pointer group"
                onClick={() =>
                  setLightboxImage({
                    src: acc.badge,
                    title: acc.title,
                    desc: acc.detail
                  })
                }
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                <span className="font-bold text-white group-hover:text-amber-300 transition-colors">
                  {acc.code}
                </span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">({acc.authority})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED DYNAMIC HERO CAROUSEL */}
      <section
        id="home"
        className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-[#1E293B]"
        onMouseEnter={() => setIsSlidePaused(true)}
        onMouseLeave={() => setIsSlidePaused(false)}
      >
        {/* Background Visual Graphics with Overlays */}
        {cfg.heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
              onError={(e) => {
                // Fallback to campus main image if svg fails
                (e.target as HTMLImageElement).src = '/assets/cr-ramans-university/campus-hero-1.jpg';
              }}
            />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
          {cfg.heroSlides.map((slide, idx) => {
            if (idx !== currentSlideIndex) return null;
            return (
              <div key={slide.id} className="max-w-2xl space-y-6 animate-fadeIn">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/40 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  {slide.badge}
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                  {slide.headline}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  {slide.subtitle}
                </p>

                {/* Key Metrics Pill Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {slide.stats.map((st) => (
                    <div
                      key={st.label}
                      className="p-3 rounded-xl bg-[#0B1528]/80 border border-[#1E293B] backdrop-blur-md shadow-inner"
                    >
                      <div className="font-extrabold text-lg sm:text-2xl text-amber-400">{st.value}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={slide.ctaLink}
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#programs"
                    className="px-6 py-3.5 bg-[#0F223D]/80 hover:bg-[#152E52] border border-[#1E3A63] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Degree Programs</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={() =>
            setCurrentSlideIndex((prev) => (prev - 1 + cfg.heroSlides.length) % cfg.heroSlides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#050A14]/70 hover:bg-[#0A192F] text-white border border-[#1E293B] transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % cfg.heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#050A14]/70 hover:bg-[#0A192F] text-white border border-[#1E293B] transition-all cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-6 z-30 flex items-center gap-2">
          {cfg.heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlideIndex ? 'w-8 bg-amber-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5. FAST METRICS TICKER STRIP */}
      <section className="bg-[#0A1424] border-b border-[#1E293B] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B]">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">₹1.7 Crore</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Highest International Package
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">₹54.75 LPA Highest Domestic</div>
          </div>

          <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B]">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">9,124+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Total Placement Offers
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">By 904+ Multinationals</div>
          </div>

          <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B]">
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-serif">12,000+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Patents Filed
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">30+ Industry CoE Labs</div>
          </div>

          <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B]">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-serif">₹170 Crore</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              CRUCET Scholarship Fund
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Up to 100% Tuition Fee Waiver</div>
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC PROGRAMS & DEGREE FINDER */}
      <section id="programs" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            150+ DEGREE COURSES
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Discover Your Academic Pathway
          </h2>
          <p className="text-slate-400 text-sm">
            Future-ready curricula designed in collaboration with global tech giants, professional councils, and accreditation authorities.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-4 sm:p-6 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <label htmlFor={programSearchId} className="sr-only">Search degrees, subjects, or job roles</label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id={programSearchId}
                type="text"
                value={programSearch}
                onChange={(e) => setProgramSearch(e.target.value)}
                placeholder="Search degrees, subjects, or job roles..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#070D18] border border-[#1E293B] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {programSearch && (
                <button
                  onClick={() => setProgramSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0">
              {(['All', 'Undergraduate', 'Postgraduate', 'Doctoral'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevelFilter(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLevelFilter === lvl
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-[#070D18] text-slate-400 hover:text-white border border-[#1E293B]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Discipline/Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#1E293B]/80 text-xs">
            <span className="text-slate-500 font-medium shrink-0">Discipline:</span>
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'engineering', label: 'Engineering (UIE)' },
              { id: 'management', label: 'Management (USB)' },
              { id: 'computing', label: 'Computing (UIC)' },
              { id: 'law', label: 'Law (UILS)' },
              { id: 'pharmacy', label: 'Pharmacy (UIPS)' },
              { id: 'biotech', label: 'Biotechnology' },
              { id: 'media-design', label: 'Media & Design' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryFilter === cat.id
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-[#070D18] text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#0B1528] border border-[#1E293B] rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-xl hover:shadow-black/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#132238] text-cyan-400 font-mono font-semibold">
                    {prog.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-medium">
                    {prog.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{prog.faculty}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-[#1E293B]">
                  <div>
                    <span className="text-slate-500 block">Duration:</span>
                    <span className="font-semibold text-slate-200">{prog.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Tuition / Sem:</span>
                    <span className="font-semibold text-emerald-400">{prog.feesPerSemester}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 block">Highlights:</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {prog.highlights.slice(0, 2).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#1E293B] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProgramDetail(prog)}
                  className="px-3.5 py-2 rounded-lg bg-[#070D18] hover:bg-[#132238] border border-[#1E293B] text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Curriculum
                </button>
                <a
                  href="#admissions"
                  onClick={() => {
                    setApplicantLevel(prog.level);
                    setApplicantProgram(prog.name);
                  }}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12 bg-[#0B1528] border border-[#1E293B] rounded-2xl p-8">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No Programs Matched Your Criteria</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search keyword or selecting "All Disciplines" and "All Levels".
            </p>
            <button
              onClick={() => {
                setProgramSearch('');
                setSelectedLevelFilter('All');
                setSelectedCategoryFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 7. PLACEMENT POWERHOUSE & RECRUITERS SHOWCASE */}
      <section id="placements" className="py-16 px-4 sm:px-8 bg-[#050A14] border-t border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              CORPORATE RESOURCE CENTRE (CRC)
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              India&apos;s Undisputed Placement Powerhouse
            </h2>
            <p className="text-slate-400 text-sm">
              9,124+ dream placement offers with ₹1.7 Crore highest international compensation and 904+ multinational recruiters on campus.
            </p>
          </div>

          {/* Highlights Showcase Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F274A] to-[#0A192F] border border-amber-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">₹1.7 Crore</div>
              <div className="font-bold text-white text-sm">Highest International Offer (USA)</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Secured by our Computer Science Engineering graduate for a cutting-edge Cloud Security role based in North America.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1917] to-[#0C0A09] border border-rose-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-rose-400 font-serif">₹54.75 LPA</div>
              <div className="font-bold text-white text-sm">Highest Domestic Offer (Microsoft)</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extended by Microsoft India to our software engineering graduates, with multiple offers above ₹40 LPA from Amazon and Adobe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062C22] to-[#021A14] border border-emerald-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-serif">9,124+ Offers</div>
              <div className="font-bold text-white text-sm">By 904+ Multinational Recruiters</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Including over 350+ Fortune 500 multinationals recruiting across Engineering, Management, Pharmacy, Law, and Media.
              </p>
            </div>
          </div>

          {/* Sector Filterable Recruiter Directory */}
          <div className="space-y-6 bg-[#070D18] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Top Fortune 500 Recruiters Roster</h3>
                <p className="text-xs text-slate-400">Showing verified hiring partners and annual packages</p>
              </div>

              {/* Sector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
                {(['All', 'Tech Giants', 'Consulting & BFSI', 'Core Engineering', 'Product & Media'] as const).map(
                  (sec) => (
                    <button
                      key={sec}
                      onClick={() => setSelectedRecruiterSector(sec)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                        selectedRecruiterSector === sec
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-[#0B1528] text-slate-400 hover:text-white'
                      }`}
                    >
                      {sec}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Recruiter Grid Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredRecruiters.map((rec) => (
                <div
                  key={rec.name}
                  className="p-4 rounded-xl bg-[#0B1528] border border-[#1E293B] hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white bg-[#132238] px-2 py-0.5 rounded">
                      {rec.name}
                    </span>
                    <span className="text-[10px] text-slate-500">{rec.sector}</span>
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-amber-400">{rec.packageOffered}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{rec.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Success Voices */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Verified Career Outcomes</h3>
                <p className="text-xs text-slate-400">Real stories from our students placed at global tech &amp; corporate leaders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cfg.testimonials.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="p-6 rounded-2xl bg-[#0B1528] border border-[#1E293B] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/50"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/cr-ramans-university/testimonial-1.jpg';
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white">{t.name}</h4>
                        <p className="text-[11px] text-amber-400 font-semibold">{t.company} · {t.packageOffered}</p>
                        <p className="text-[10px] text-slate-500">{t.program}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-500 font-medium pt-3 border-t border-[#1E293B]">
                    Placed as: <span className="text-slate-300 font-semibold">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. RESEARCH & INDUSTRY CENTERS OF EXCELLENCE (CoE) */}
      <section id="innovation" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            INNOVATION &amp; INCUBATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            30+ Industry-Sponsored Centers of Excellence
          </h2>
          <p className="text-slate-400 text-sm">
            Bridging academic pedagogy with live corporate enterprise testbeds to foster patent filings, research papers, and startup spin-offs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cfg.centersOfExcellence.map((coe) => (
            <div
              key={coe.id}
              className="p-6 rounded-2xl bg-[#0B1528] border border-[#1E293B] hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {coe.partner}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">CoE FACILITY</span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {coe.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{coe.domain}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{coe.description}</p>

                <div className="p-3 rounded-xl bg-[#070D18] border border-[#1E293B] space-y-1 text-xs">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                    Core Setup:
                  </span>
                  <p className="text-slate-300 text-[11px]">{coe.equipment}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium">Active Training &amp; Certifications</span>
                <button
                  onClick={() => setSelectedCoE(coe)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. 360° VIRTUAL CAMPUS TOUR & INFRASTRUCTURE */}
      <section id="campus-life" className="py-16 px-4 sm:px-8 bg-[#050A14] border-t border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
              <Compass className="w-3.5 h-3.5" />
              CAMPUS EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              200+ Acre Smart Eco-Campus
            </h2>
            <p className="text-slate-400 text-sm">
              Explore our world-class educational architecture, high-tech research libraries, Olympic athletic complexes, and residential hostels.
            </p>
          </div>

          {/* Interactive Facility Explorer Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {cfg.campusFacilities.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacilityId(fac.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeFacilityId === fac.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-[#0B1528] text-slate-400 hover:text-white border border-[#1E293B]'
                }`}
              >
                {fac.title}
              </button>
            ))}
          </div>

          {/* Active Facility Showcase */}
          {(() => {
            const currentFac = cfg.campusFacilities.find((f) => f.id === activeFacilityId) || cfg.campusFacilities[0];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#070D18] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] group aspect-video">
                  <img
                    src={currentFac.image}
                    alt={currentFac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/cr-ramans-university/campus-main.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: currentFac.image,
                          title: currentFac.title,
                          desc: currentFac.description
                        })
                      }
                      className="px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-black/90 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Fullscreen</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      {currentFac.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
                      {currentFac.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] border border-[#1E293B] text-xs font-bold text-cyan-400">
                      {currentFac.metrics}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{currentFac.description}</p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Facility Highlights:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-200">
                      {currentFac.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="#admissions"
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                    >
                      Schedule Campus Visit
                    </a>
                    <a
                      href={`tel:${cfg.brand.directPhone}`}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{cfg.brand.directPhone}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 10. CRUCET 2026 SCHOLARSHIP CALCULATOR */}
      <section id="scholarships" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
            <DollarSign className="w-3.5 h-3.5" />
            ₹170 CRORE MERIT SCHOLARSHIP FUND
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            CRUCET 2026 Scholarship Calculator
          </h2>
          <p className="text-slate-400 text-sm">
            Enter your qualifying 12th Board or anticipated CRUCET score to estimate your tuition fee waiver across all academic semesters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Calculator Controls */}
          <div className="lg:col-span-6 bg-[#0B1528] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-serif font-bold text-xl text-white">Estimate Your Scholarship</h3>

            {/* Score Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={scoreInputId} className="text-xs font-semibold text-slate-300">
                  CRUCET / 12th Board Score (%):
                </label>
                <span className="font-black text-2xl text-amber-400 font-mono">{scoreInput}%</span>
              </div>
              <input
                id={scoreInputId}
                type="range"
                min="50"
                max="100"
                step="0.5"
                value={scoreInput}
                onChange={(e) => setScoreInput(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#070D18] rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>50%</span>
                <span>60% (Tier 4)</span>
                <span>70% (Tier 3)</span>
                <span>80% (Tier 2)</span>
                <span>90%+ (Tier 1 Full Ride)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Stream Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">Select Preferred Stream:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'engineering', label: 'B.E. Engineering', baseFee: 115000 },
                  { id: 'management', label: 'MBA / BBA', baseFee: 130000 },
                  { id: 'computing', label: 'BCA / MCA', baseFee: 65000 },
                  { id: 'law', label: 'B.A. LL.B (Hons)', baseFee: 95000 },
                  { id: 'pharmacy', label: 'B.Pharm', baseFee: 105000 },
                  { id: 'biotech', label: 'B.Sc Biotech', baseFee: 60000 }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCalculatedStream(st.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      calculatedStream === st.id
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-bold'
                        : 'bg-[#070D18] border-[#1E293B] text-slate-400 hover:text-white'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculated Output Card */}
            {(() => {
              const baseFeesMap: Record<string, number> = {
                engineering: 115000,
                management: 130000,
                computing: 65000,
                law: 95000,
                pharmacy: 105000,
                biotech: 60000
              };
              const base = baseFeesMap[calculatedStream] || 100000;
              const waiverAmt = (base * currentScholarship.discountPercent) / 100;
              const netFee = base - waiverAmt;

              return (
                <div className="p-5 rounded-2xl bg-[#070D18] border border-[#1E293B] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Scholarship Assessment:
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${currentScholarship.badgeColor}`}
                    >
                      {currentScholarship.waiver}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-2 border-t border-[#1E293B]">
                    <div>
                      <span className="text-slate-500 block">Semester Base Fee:</span>
                      <span className="text-sm font-bold text-slate-300">₹{base.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Scholarship Savings:</span>
                      <span className="text-sm font-bold text-emerald-400">
                        -₹{waiverAmt.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1E293B] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Estimated Net Fee / Sem:</span>
                      <span className="text-xl font-black text-amber-400 font-serif">
                        ₹{netFee.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <a
                      href="#admissions"
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Claim Scholarship
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 italic">{currentScholarship.note}</p>
                </div>
              );
            })()}
          </div>

          {/* Scholarship Tiers Matrix */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif font-bold text-xl text-white">CRUCET Merit Scholarship Tiers</h3>
            <p className="text-xs text-slate-400">
              Scholarships continue for all academic semesters upon maintaining minimum required CGPA.
            </p>

            <div className="space-y-3">
              {cfg.scholarshipTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="p-4 rounded-2xl bg-[#0B1528] border border-[#1E293B] hover:border-amber-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{tier.tier}</span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ color: tier.highlightColor, backgroundColor: `${tier.highlightColor}20` }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                    <div className="text-xs text-amber-400 font-medium">{tier.range}</div>
                    <p className="text-[11px] text-slate-400">{tier.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-extrabold text-sm text-emerald-400 font-mono block">
                      {tier.waiver}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. ONLINE ADMISSIONS APPLICATION DESK 2026 */}
      <section id="admissions" className="py-16 px-4 sm:px-8 bg-[#050A14] border-t border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
              <FileText className="w-3.5 h-3.5" />
              CENTRAL ADMISSIONS DESK 2026
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              Apply Online for Academic Session 2026-27
            </h2>
            <p className="text-slate-400 text-sm">
              Complete the verified online application form below to receive your official registration reference number and examination slot.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Admissions Form */}
            <div className="lg:col-span-8 bg-[#070D18] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleAdmissionSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={applicantNameId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id={applicantNameId}
                      type="text"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Aditya Sharma"
                      className={`w-full px-4 py-2.5 bg-[#0B1528] border ${
                        formErrors.name ? 'border-rose-500' : 'border-[#1E293B]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400`}
                    />
                    {formErrors.name && <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor={applicantEmailId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id={applicantEmailId}
                      type="email"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="e.g. aditya@example.com"
                      className={`w-full px-4 py-2.5 bg-[#0B1528] border ${
                        formErrors.email ? 'border-rose-500' : 'border-[#1E293B]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor={applicantPhoneId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Mobile Number (10 Digits) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl bg-[#132238] border border-r-0 border-[#1E293B] text-slate-400 text-xs">
                        +91
                      </span>
                      <input
                        id={applicantPhoneId}
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="9876543210"
                        className={`w-full px-4 py-2.5 bg-[#0B1528] border ${
                          formErrors.phone ? 'border-rose-500' : 'border-[#1E293B]'
                        } rounded-r-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400`}
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor={applicantStateId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      State / City *
                    </label>
                    <input
                      id={applicantStateId}
                      type="text"
                      value={applicantState}
                      onChange={(e) => setApplicantState(e.target.value)}
                      placeholder="e.g. Punjab, Delhi NCR, Maharashtra"
                      className={`w-full px-4 py-2.5 bg-[#0B1528] border ${
                        formErrors.state ? 'border-rose-500' : 'border-[#1E293B]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400`}
                    />
                    {formErrors.state && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.state}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={applicantLevelId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Program Level
                    </label>
                    <select
                      id={applicantLevelId}
                      value={applicantLevel}
                      onChange={(e) => setApplicantLevel(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0B1528] border border-[#1E293B] rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Undergraduate">Undergraduate (B.E., BBA, BCA, B.Sc, B.A. LL.B)</option>
                      <option value="Postgraduate">Postgraduate (MBA, M.E., MCA, M.Sc, LL.M)</option>
                      <option value="Doctoral">Doctoral (Ph.D. Research)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={applicantProgramId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Degree Course
                    </label>
                    <select
                      id={applicantProgramId}
                      value={applicantProgram}
                      onChange={(e) => setApplicantProgram(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0B1528] border border-[#1E293B] rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      {cfg.programs.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={applicantCrucetPhaseId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                    CRUCET Examination Phase
                  </label>
                  <select
                    id={applicantCrucetPhaseId}
                    value={applicantCrucetPhase}
                    onChange={(e) => setApplicantCrucetPhase(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0B1528] border border-[#1E293B] rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="CRUCET Phase-1 (Jan - May 2026)">
                      CRUCET Phase-1 (Online Test · Highest Scholarship Pool)
                    </option>
                    <option value="CRUCET Phase-2 (June - Aug 2026)">
                      CRUCET Phase-2 (Subsequent Test Phase)
                    </option>
                    <option value="Direct Merit / JEE / CAT / CLAT Score Exemption">
                      Exemption via National Scores (JEE / CAT / CLAT)
                    </option>
                  </select>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1528] border border-[#1E293B] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 font-medium">Eligible Scholarship Benefit:</span>
                  </div>
                  <span className="font-extrabold text-amber-400">{currentScholarship.waiver}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#E11D48] via-rose-600 to-[#BE123C] hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application &amp; Generate Tracking ID</span>
                </button>
              </form>
            </div>

            {/* Application Tracking & Status Desk */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#070D18] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="font-serif font-bold text-lg text-white">Track Application Status</h3>
                <p className="text-xs text-slate-400">
                  Already registered? Check your CRUCET exam schedule, verification status, and scholarship eligibility.
                </p>

                <div className="space-y-3">
                  <label htmlFor={lookupRefInputId} className="sr-only">Reference ID (e.g. CRU-2026-XXXXXX)</label>
                  <input
                    id={lookupRefInputId}
                    type="text"
                    value={lookupRefId}
                    onChange={(e) => setLookupRefId(e.target.value)}
                    placeholder="Enter Reference ID (e.g. CRU-2026-XXXXXX)"
                    className="w-full px-4 py-2.5 bg-[#0B1528] border border-[#1E293B] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={handleLookup}
                    className="w-full py-2.5 bg-[#132238] hover:bg-[#1A3050] border border-[#1E3A63] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Check Status
                  </button>
                </div>

                {lookupResult && (
                  <div className="p-3.5 rounded-xl bg-[#0B1528] border border-[#1E293B] text-xs text-slate-300 leading-relaxed">
                    {lookupResult}
                  </div>
                )}
              </div>

              {/* Admissions Assistance Contacts */}
              <div className="bg-[#070D18] border border-[#1E293B] rounded-3xl p-6 space-y-4">
                <h4 className="font-bold text-sm text-white">Need Assistance?</h4>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Toll Free: 1800 1212 88800</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct: +91 160 3051000</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>admissions@crramans.edu.in</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>NH-05, Chandigarh-Ludhiana Highway, Mohali, Punjab 140413</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section id="faqs" className="py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-700">
            <HelpCircle className="w-3.5 h-3.5" />
            HAVE QUESTIONS?
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about CRUCET 2026, NAAC accreditation, placements, and campus life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 text-xs">
          {(['All', 'Admissions', 'Scholarships & CRUCET', 'Placements', 'Campus & Hostels', 'Accreditation'] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-[#0B1528] text-slate-400 hover:text-white border border-[#1E293B]'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = expandedFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0B1528] border border-[#1E293B] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-[#1E293B]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 13. COMPREHENSIVE INSTITUTIONAL FOOTER */}
      <footer className="bg-[#03070E] border-t border-[#1E293B] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F274A] border border-amber-500/40 p-1 flex items-center justify-center">
                <img
                  src="/assets/cr-ramans-university/logo-white.svg"
                  alt="CR Ramans University"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-black text-base text-white tracking-wide">CR RAMANS</div>
                <div className="text-[10px] font-serif font-bold text-[#E11D48] tracking-[0.2em]">UNIVERSITY</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              A premier institution dedicated to academic excellence, high-impact research, and career outcomes. Accredited with NAAC Grade A+ and ranked among the top universities globally by QS World Rankings.
            </p>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>UGC Recognized University under Section 2(f)</div>
              <div>AICTE, BCI, PCI &amp; COA Approved</div>
              <div>ABET USA Accredited Engineering Degrees</div>
            </div>
          </div>

          {/* Column 2: Academic Faculties */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Institutes &amp; Faculties
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Engineering (UIE)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University School of Business (USB)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Computing (UIC)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Legal Studies (UILS)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Pharma Sciences (UIPS)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Biotechnology (UIB)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  University Institute of Media &amp; Design (UIMD)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a href="#rankings" className="hover:text-amber-400 transition-colors">
                  NAAC Grade A+ &amp; Accreditations
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-amber-400 transition-colors">
                  ₹1.7 Crore Placements Report 2026
                </a>
              </li>
              <li>
                <a href="#scholarships" className="hover:text-amber-400 transition-colors">
                  CRUCET 2026 Scholarship Exam
                </a>
              </li>
              <li>
                <a href="#innovation" className="hover:text-amber-400 transition-colors">
                  12,000+ Patents &amp; Industry CoEs
                </a>
              </li>
              <li>
                <a href="#campus-life" className="hover:text-amber-400 transition-colors">
                  360° Virtual Campus Tour
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors">
                  Admissions Application Desk
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition-colors">
                  Admissions FAQs &amp; Help Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Directory & Directions */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Contact &amp; Campus
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{cfg.brand.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Toll-Free: {cfg.brand.admissionsHelpline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct: {cfg.brand.directPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{cfg.brand.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#admissions"
                className="w-full py-2 bg-[#0B1528] hover:bg-[#132238] border border-[#1E293B] text-amber-400 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Prospectus 2026</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-[#1E293B]/60 py-5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <div>
              © 2026 {cfg.brand.legalName}. All Rights Reserved. Rebranded institutional website demo.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-300 transition-colors">UGC Compliance</span>
              <span>·</span>
              <span className="hover:text-slate-300 transition-colors">AICTE Disclosures</span>
              <span>·</span>
              <span className="hover:text-slate-300 transition-colors">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING CONCIERGE QUICK ACTIONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/911603051000?text=Hello%20CR%20Ramans%20University,%20I%20would%20like%20to%20inquire%20about%20Admissions%20and%20CRUCET%202026%20Scholarships."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* 15. PROGRAM CURRICULUM DETAIL MODAL */}
      {selectedProgramDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A1424] border border-[#1E293B] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-[#070D18] px-2.5 py-1 rounded">
                  {selectedProgramDetail.code}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-2">
                  {selectedProgramDetail.name}
                </h3>
                <p className="text-xs text-slate-400">{selectedProgramDetail.faculty}</p>
              </div>
              <button
                onClick={() => setSelectedProgramDetail(null)}
                className="p-2 rounded-full bg-[#111C30] text-slate-400 hover:text-white"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs p-4 rounded-2xl bg-[#070D18] border border-[#1E293B]">
              <div>
                <span className="text-slate-500 block">Duration</span>
                <span className="font-bold text-white">{selectedProgramDetail.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Accreditation</span>
                <span className="font-bold text-amber-400">{selectedProgramDetail.accreditation}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Tuition / Sem</span>
                <span className="font-bold text-emerald-400">{selectedProgramDetail.feesPerSemester}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Intake</span>
                <span className="font-bold text-white">{selectedProgramDetail.intake} Seats</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-300 block uppercase tracking-wider">
                Eligibility Criteria:
              </span>
              <p className="text-slate-400 leading-relaxed bg-[#070D18] p-3 rounded-xl border border-[#1E293B]">
                {selectedProgramDetail.eligibility}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-300 block uppercase tracking-wider">
                Curriculum &amp; Training Highlights:
              </span>
              <ul className="space-y-2 text-slate-300">
                {selectedProgramDetail.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-300 block uppercase tracking-wider">
                Top Career Recruitment Roles:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProgramDetail.careerRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full bg-[#132238] border border-[#1E293B] text-cyan-300 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProgramDetail(null)}
                className="px-4 py-2 bg-[#070D18] hover:bg-[#132238] text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => {
                  setApplicantLevel(selectedProgramDetail.level);
                  setApplicantProgram(selectedProgramDetail.name);
                  setSelectedProgramDetail(null);
                }}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>Apply for this Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 16. COE DETAIL MODAL */}
      {selectedCoE && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A1424] border border-[#1E293B] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                  {selectedCoE.partner}
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-2">{selectedCoE.title}</h3>
                <p className="text-xs text-cyan-400 mt-0.5">{selectedCoE.domain}</p>
              </div>
              <button
                onClick={() => setSelectedCoE(null)}
                className="p-2 rounded-full bg-[#111C30] text-slate-400 hover:text-white"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedCoE.description}</p>

            <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B] space-y-2 text-xs">
              <span className="text-slate-400 font-bold block uppercase tracking-wider">
                Hardware &amp; Software Infrastructure:
              </span>
              <p className="text-slate-300">{selectedCoE.equipment}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#070D18] border border-[#1E293B] space-y-2 text-xs">
              <span className="text-slate-400 font-bold block uppercase tracking-wider">
                Student Outcomes &amp; Industrial Certifications:
              </span>
              <p className="text-slate-300">{selectedCoE.outcomes}</p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedCoE(null)}
                className="px-5 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 17. SUBMISSION CONFIRMATION RECEIPT MODAL */}
      {submittedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0A1424] border border-amber-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-black text-2xl text-white">Application Registered</h3>
              <p className="text-xs text-slate-400">
                Your admission application has been registered with CR Ramans University Admissions Desk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070D18] border border-[#1E293B] space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#1E293B]">
                <span className="text-slate-500 font-medium">Tracking Reference:</span>
                <span className="font-mono font-black text-amber-400 text-sm">{submittedReceipt.refId}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-semibold text-white">{submittedReceipt.name}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Program:</span>
                <span className="font-semibold text-white text-right">{submittedReceipt.program}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Registered Email:</span>
                <span className="font-semibold text-slate-300">{submittedReceipt.email}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">CRUCET Phase:</span>
                <span className="font-semibold text-cyan-400">{submittedReceipt.phase}</span>
              </div>
              <div className="flex justify-between py-1 pt-2 border-t border-[#1E293B]">
                <span className="text-slate-500">Scholarship Benefit:</span>
                <span className="font-bold text-emerald-400">{submittedReceipt.scholarshipEstimate}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              Please save your reference ID <strong className="text-white">{submittedReceipt.refId}</strong> for online entrance examination slot confirmation and counseling rounds.
            </p>

            <button
              onClick={() => {
                setSubmittedReceipt(null);
                setApplicantName('');
                setApplicantEmail('');
                setApplicantPhone('');
                setApplicantState('');
              }}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Done &amp; Close Receipt
            </button>
          </div>
        </div>
      )}

      {/* 18. LIGHTBOX PREVIEW MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="max-w-3xl w-full space-y-4">
            <div className="flex justify-between items-center text-white">
              <h4 className="font-serif font-bold text-base">{lightboxImage.title}</h4>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-black aspect-video flex items-center justify-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/cr-ramans-university/campus-main.jpg';
                }}
              />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed text-center">{lightboxImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
