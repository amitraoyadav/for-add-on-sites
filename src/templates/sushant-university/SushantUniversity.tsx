import React, { useState, useEffect, useId } from 'react';
import {
  SUSHANT_UNIVERSITY_CONFIG,
  SUProgram,
  SUHeroSlide,
  SURecruiter,
  SUSchool,
  SUFacility,
  SUTestimonial,
  SUFaq
} from './sushant-university.config';
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
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
  FileText,
  DollarSign,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';

export default function SushantUniversity() {
  const cfg = SUSHANT_UNIVERSITY_CONFIG;

  // Navigation & UI States
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  // Search & Filters for Academic Programs
  const [programSearch, setProgramSearch] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<'All' | 'Undergraduate' | 'Postgraduate' | 'Doctoral'>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<SUProgram | null>(null);

  // Recruiter Sector Filter
  const [selectedRecruiterSector, setSelectedRecruiterSector] = useState<string>('All');

  // School Active Tab in Schools Explorer
  const [activeSchoolId, setActiveSchoolId] = useState<string>(cfg.schools[0].id);

  // Campus Facility Active Tab
  const [activeFacilityId, setActiveFacilityId] = useState<string>(cfg.campusFacilities[0].id);

  // Scholarship Calculator State
  const [scoreInput, setScoreInput] = useState<number>(92);
  const [calculatedStream, setCalculatedStream] = useState<string>('architecture');
  const [isHaryanaResident, setIsHaryanaResident] = useState<boolean>(false);

  // Admissions Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantCity, setApplicantCity] = useState('');
  const [applicantSchool, setApplicantSchool] = useState('Sushant School of Art & Architecture (SSAA)');
  const [applicantProgram, setApplicantProgram] = useState('Bachelor of Architecture (B.Arch)');
  const [applicantDomicile, setApplicantDomicile] = useState('All India Candidate');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    refId: string;
    name: string;
    school: string;
    program: string;
    email: string;
    domicile: string;
    scholarshipEstimate: string;
    date: string;
  } | null>(null);

  // Application Tracking Lookup
  const [lookupRefId, setLookupRefId] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  // FAQ Active Category
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Lightbox Modal for Facility Image
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  // Unique IDs for form controls
  const programSearchId = useId();
  const scoreInputId = useId();
  const applicantNameId = useId();
  const applicantEmailId = useId();
  const applicantPhoneId = useId();
  const applicantCityId = useId();
  const applicantSchoolId = useId();
  const applicantProgramId = useId();
  const applicantDomicileId = useId();
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
      prog.school.toLowerCase().includes(programSearch.toLowerCase()) ||
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

  // Calculate scholarship percentage based on score and domicile
  const getScholarshipResult = (score: number, isDomicile: boolean) => {
    if (isDomicile) {
      return {
        tier: 'Haryana Domicile Statutory Concession',
        waiver: '25% Tuition Fee Concession',
        discountPercent: 25,
        badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/50',
        note: 'Statutory 25% fee concession granted pursuant to the Haryana Private Universities Act.'
      };
    }

    if (score >= 95.0) {
      return {
        tier: 'Tier 1: 100% Scholarship (Full Ride)',
        waiver: '100% Tuition Fee Waiver',
        discountPercent: 100,
        badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/50',
        note: 'Exceptional academic merit! Full tuition fee waiver for academic year 2026-27.'
      };
    } else if (score >= 90.0) {
      return {
        tier: 'Tier 2: 50% Scholarship',
        waiver: '50% Tuition Fee Waiver',
        discountPercent: 50,
        badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-500/50',
        note: 'Outstanding achievement. 50% tuition fee waiver applied.'
      };
    } else if (score >= 80.0) {
      return {
        tier: 'Tier 3: 25% Scholarship',
        waiver: '25% Tuition Fee Waiver',
        discountPercent: 25,
        badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/50',
        note: 'High merit performer. 25% tuition fee concession applied.'
      };
    } else {
      return {
        tier: 'General Merit Admission',
        waiver: 'Standard Fee Schedule',
        discountPercent: 0,
        badgeColor: 'text-slate-400 bg-slate-900 border-slate-700',
        note: 'Standard fee schedule applicable. Early-bird registration benefits available.'
      };
    }
  };

  const currentScholarship = getScholarshipResult(scoreInput, isHaryanaResident);

  // Validate and submit Admissions form
  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!applicantName.trim()) errors.name = 'Full name is required';
    if (!applicantEmail.trim() || !applicantEmail.includes('@')) errors.email = 'Valid email is required';
    if (!applicantPhone.trim() || applicantPhone.length < 10) errors.phone = '10-digit mobile number is required';
    if (!applicantCity.trim()) errors.city = 'Please enter your city/state';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `SU-2026-${randomSuffix}`;

    const receipt = {
      refId: trackingId,
      name: applicantName.trim(),
      school: applicantSchool,
      program: applicantProgram,
      email: applicantEmail.trim(),
      domicile: applicantDomicile,
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
    if (clean.startsWith('SU-2026-')) {
      setLookupResult(
        `STATUS VERIFIED: Application ${clean} is ACTIVE for Sushant University Admissions 2026. Document verification pending with Central Admissions Desk. Counselor assigned.`
      );
    } else {
      setLookupResult(
        `Reference ${clean} not found. Please verify your reference format (e.g. SU-2026-XXXXXX) or register online as a new candidate.`
      );
    }
  };

  // Filtered FAQs
  const filteredFaqs = cfg.faqs.filter((faq) => {
    if (activeFaqCategory === 'All') return true;
    return faq.category === activeFaqCategory;
  });

  return (
    <div className="sushant-university-demo bg-[#071321] text-[#F1F5F9] font-sans min-h-screen selection:bg-[#E65100] selection:text-white">
      {/* 1. TOP UTILITY ANNOUNCEMENT BAR */}
      <div className="bg-[#040C15] border-b border-[#132B45] text-xs py-2 px-4 sm:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#E65100]/20 text-[#FF7043] font-semibold border border-[#E65100]/30">
              <Sparkles className="w-3.5 h-3.5" />
              ADMISSIONS 2026 OPEN
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-300 font-medium">
              Sushant University, Gurugram (formerly Ansal University) · Sector 55, Golf Course Road
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a
              href="tel:18002705520"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#FF7043]" />
              Toll-Free: {cfg.brand.admissionsHelpline}
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="#scholarships" className="hover:text-white transition-colors hidden sm:inline">
              Scholarship Calculator
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="#admissions" className="text-[#FF7043] hover:text-[#FFA726] font-bold tracking-wide">
              APPLY NOW ↗
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#071321]/95 backdrop-blur-md border-b border-[#132B45] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#040C15] border border-orange-500/40 flex items-center justify-center p-1.5 shadow-md group-hover:border-orange-400 transition-all">
              <img
                src="/assets/sushant-university/logo-white.svg"
                alt="Sushant University Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="font-serif font-black text-lg sm:text-xl tracking-wider text-white leading-none">
                SUSHANT
              </div>
              <div className="text-[11px] font-serif font-bold text-[#FF7043] tracking-[0.25em] leading-tight">
                UNIVERSITY
              </div>
              <div className="text-[9px] text-slate-400 tracking-tight font-medium hidden sm:block">
                GURUGRAM · SSAA LEGACY SINCE 1989
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {[
              { id: 'home', label: 'Home' },
              { id: 'rankings', label: 'Accreditations' },
              { id: 'schools', label: 'Schools' },
              { id: 'programs', label: 'Programs' },
              { id: 'placements', label: 'Placements' },
              { id: 'collaborations', label: 'Global Ties' },
              { id: 'campus-life', label: 'Campus Life' },
              { id: 'scholarships', label: 'Scholarships' },
              { id: 'faqs', label: 'FAQs' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveNav(item.id)}
                className={`py-1 relative transition-colors ${
                  activeNav === item.id
                    ? 'text-[#FF7043] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FF7043]'
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
              className="px-4 py-2 bg-gradient-to-r from-[#E65100] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-orange-950/30 transition-all flex items-center gap-1.5"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0F2338] border border-[#1E3A5F] text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#050E1A] border-b border-[#1E3A5F] px-6 py-4 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'rankings', label: 'Accreditations & Honors' },
              { id: 'schools', label: '8 Constituent Schools (SSAA, SSD, SET, SOB, SOL)' },
              { id: 'programs', label: 'Degree Programs & Admissions' },
              { id: 'placements', label: 'Placement Powerhouse (₹50 LPA)' },
              { id: 'collaborations', label: 'Global Collaborations (Vatel France, Warwick)' },
              { id: 'campus-life', label: 'Golf Course Road Campus Life' },
              { id: 'scholarships', label: 'Merit Scholarships & Concessions' },
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
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-[#FF7043] border-b border-[#132B45]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 text-xs text-slate-400">
              <p>Admissions Toll-Free: 1800 270 5520</p>
              <p>Email: admissions@sushantuniversity.edu.in</p>
            </div>
          </div>
        )}
      </header>

      {/* 3. STATUTORY ACCREDITATIONS & RANKINGS RIBBON */}
      <section id="rankings" className="bg-[#050D17] border-b border-[#132B45] py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7043]">
            <Trophy className="w-4 h-4 text-[#FF7043]" />
            <span>Institutional Honors &amp; Pedigree:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs">
            {cfg.rankings.map((rnk) => (
              <div
                key={rnk.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1A2E] border border-[#183659] hover:border-orange-500/50 transition-all cursor-pointer group"
                onClick={() =>
                  setLightboxImage({
                    src: rnk.badge,
                    title: rnk.title,
                    desc: rnk.description
                  })
                }
              >
                <div className="w-2 h-2 rounded-full bg-[#FF7043] group-hover:scale-125 transition-transform" />
                <span className="font-bold text-white group-hover:text-orange-300 transition-colors">
                  {rnk.rank}
                </span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">({rnk.authority})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED DYNAMIC HERO CAROUSEL */}
      <section
        id="home"
        className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-[#132B45]"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/sushant-university/campus-hero-1.jpg';
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-orange-500/40 text-xs font-bold uppercase tracking-wider text-[#FF7043] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#FF7043] animate-pulse" />
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
                      className="p-3 rounded-xl bg-[#0C1E33]/85 border border-[#183659] backdrop-blur-md shadow-inner"
                    >
                      <div className="font-extrabold text-lg sm:text-2xl text-[#FF7043]">{st.value}</div>
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
                    className="px-6 py-3.5 bg-gradient-to-r from-[#E65100] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-950/30 transition-all flex items-center gap-2"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#programs"
                    className="px-6 py-3.5 bg-[#0B2038]/80 hover:bg-[#132F52] border border-[#1A3D66] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Explore 8 Schools</span>
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#050E1A]/70 hover:bg-[#0A2540] text-white border border-[#183659] transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % cfg.heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#050E1A]/70 hover:bg-[#0A2540] text-white border border-[#183659] transition-all cursor-pointer"
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
                i === currentSlideIndex ? 'w-8 bg-[#FF7043]' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5. FAST NUMBERS TICKER STRIP */}
      <section className="bg-[#050E1A] border-b border-[#132B45] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-[#081729] border border-[#183659]">
            <div className="text-2xl sm:text-3xl font-black text-[#FF7043] font-serif">#1 Architecture</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              In Delhi-NCR (SSAA Legacy)
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">35+ Years of Design Eminence (1989)</div>
          </div>

          <div className="p-4 rounded-xl bg-[#081729] border border-[#183659]">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">₹50 LPA</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Highest Placement Package
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">₹7.2 LPA Average CTC · 850+ Recruiter Partners</div>
          </div>

          <div className="p-4 rounded-xl bg-[#081729] border border-[#183659]">
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-serif">Vatel France</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Global Hospitality Dual Degree
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Marco Polo European Exchange Scheme</div>
          </div>

          <div className="p-4 rounded-xl bg-[#081729] border border-[#183659]">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">8 Schools</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              100+ Flagship Degree Courses
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">UGC Recognized · BCI · PCI · COA Approved</div>
          </div>
        </div>
      </section>

      {/* 6. CONSTITUENT SCHOOLS EXPLORER */}
      <section id="schools" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF7043] text-xs font-bold uppercase tracking-wider border border-orange-500/20">
            <Building2 className="w-3.5 h-3.5" />
            ACADEMIC FACULTIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            8 Specialized Constituent Schools
          </h2>
          <p className="text-slate-400 text-sm">
            Each school at Sushant University is an autonomous centre of innovation with specialized drafting studios, moot courts, clinical labs, and design workshops.
          </p>
        </div>

        {/* Schools Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {cfg.schools.map((sch) => (
            <button
              key={sch.id}
              onClick={() => setActiveSchoolId(sch.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeSchoolId === sch.id
                  ? 'bg-gradient-to-br from-[#122A47] to-[#0A1A2E] border-orange-500 text-white shadow-xl shadow-orange-950/20'
                  : 'bg-[#0A1829] border-[#183659] text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 block mb-1">
                  {sch.shortName}
                </span>
                <span className="font-serif font-bold text-sm text-white line-clamp-2">
                  {sch.name}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 mt-3 block">Estd. {sch.established}</span>
            </button>
          ))}
        </div>

        {/* Active School Deep-Dive Detail Card */}
        {(() => {
          const currentSchool = cfg.schools.find((s) => s.id === activeSchoolId) || cfg.schools[0];
          return (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#091A2E] border border-[#1E3A5F] shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#183659]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF7043] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    CONSTITUENT INSTITUTE · ESTD. {currentSchool.established}
                  </span>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-white mt-2">
                    {currentSchool.name}
                  </h3>
                  <p className="text-xs text-amber-400 mt-1 font-semibold">{currentSchool.keyHonors}</p>
                </div>
                <div className="text-left md:text-right text-xs">
                  <span className="text-slate-400 block">Dean / Academic Head:</span>
                  <span className="font-bold text-white text-sm">{currentSchool.dean}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                {currentSchool.description}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Flagship Degree Courses Offered:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {currentSchool.flagshipPrograms.map((progName) => (
                    <span
                      key={progName}
                      className="px-3.5 py-1.5 rounded-xl bg-[#050D17] border border-[#1E3A5F] text-xs font-semibold text-cyan-300"
                    >
                      {progName}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#programs"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#E65100] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  View All School Courses
                </a>
                <a
                  href="#admissions"
                  onClick={() => setApplicantSchool(currentSchool.name)}
                  className="px-5 py-2.5 bg-[#0A2540] hover:bg-[#123659] border border-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Apply to {currentSchool.shortName}
                </a>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 7. ACADEMIC PROGRAMS & DEGREE FINDER */}
      <section id="programs" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            FIND YOUR DEGREE
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Undergraduate &amp; Postgraduate Courses
          </h2>
          <p className="text-slate-400 text-sm">
            Search across architecture, product design, AI engineering, corporate law, clinical health sciences, and international hospitality.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#091A2E] border border-[#1E3A5F] rounded-2xl p-4 sm:p-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <label htmlFor={programSearchId} className="sr-only">Search courses, schools, or careers</label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id={programSearchId}
                type="text"
                value={programSearch}
                onChange={(e) => setProgramSearch(e.target.value)}
                placeholder="Search courses, schools, or careers..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#050D17] border border-[#1E3A5F] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043] transition-colors"
              />
              {programSearch && (
                <button
                  onClick={() => setProgramSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                  aria-label="Clear search"
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
                      ? 'bg-[#E65100] text-white font-bold'
                      : 'bg-[#050D17] text-slate-400 hover:text-white border border-[#183659]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Discipline Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#183659] text-xs">
            <span className="text-slate-400 font-medium shrink-0">Discipline:</span>
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'architecture', label: 'Architecture (SSAA)' },
              { id: 'design', label: 'Design (SSD)' },
              { id: 'engineering', label: 'Engineering (SET)' },
              { id: 'management', label: 'Business (SOB)' },
              { id: 'law', label: 'Law (SOL)' },
              { id: 'health-sciences', label: 'Health Sciences (SHS)' },
              { id: 'hospitality', label: 'Vatel Hospitality' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryFilter === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-[#050D17] text-slate-400 hover:text-white'
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
              className="bg-[#091A2E] border border-[#1E3A5F] rounded-2xl p-6 hover:border-orange-500/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-xl hover:shadow-black/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#050D17] text-cyan-400 font-mono font-semibold">
                    {prog.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-orange-500/10 text-[#FF7043] font-medium">
                    {prog.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-orange-300 transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{prog.school}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-[#183659]">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#183659] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProgramDetail(prog)}
                  className="px-3.5 py-2 rounded-lg bg-[#050D17] hover:bg-[#132B45] border border-[#183659] text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Curriculum Details
                </button>
                <a
                  href="#admissions"
                  onClick={() => {
                    setApplicantSchool(prog.school);
                    setApplicantProgram(prog.name);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#E65100] hover:bg-[#D84315] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12 bg-[#091A2E] border border-[#1E3A5F] rounded-2xl p-8">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No Programs Matched Your Search</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Please adjust your keyword or reset filters to explore all 100+ degree courses across our 8 schools.
            </p>
            <button
              onClick={() => {
                setProgramSearch('');
                setSelectedLevelFilter('All');
                setSelectedCategoryFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-[#E65100] text-white font-bold text-xs rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 8. PLACEMENTS POWERHOUSE & RECRUITERS */}
      <section id="placements" className="py-16 px-4 sm:px-8 bg-[#050E1A] border-t border-b border-[#132B45]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              CORPORATE RESOURCE CENTRE (CRC)
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              Proven Placement Record &amp; Corporate Eminence
            </h2>
            <p className="text-slate-400 text-sm">
              ₹50 LPA highest compensation package with 850+ top global organizations hiring across Architecture, Technology, Design, Legal, and Business faculties.
            </p>
          </div>

          {/* Placement Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062C22] to-[#021A14] border border-emerald-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-serif">₹50 LPA</div>
              <div className="font-bold text-white text-sm">Highest Compensation Package (Amazon)</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Offered by Amazon to our School of Engineering &amp; Technology graduates for core cloud and software development roles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1408] to-[#0F0A02] border border-amber-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">850+ Partners</div>
              <div className="font-bold text-white text-sm">Corporate Recruiting Network</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprising Fortune 500 tech leaders, top-tier design studios (Gensler, HOK), Big 4 auditors, and luxury international hotel chains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1F1612] to-[#0F0804] border border-orange-500/40 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-[#FF7043]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#FF7043] font-serif">₹7.2 LPA</div>
              <div className="font-bold text-white text-sm">Average Placement Package</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sustained high median packages driven by rigorous technical training, portfolio reviews, and mandatory summer corporate internships.
              </p>
            </div>
          </div>

          {/* Sector Filterable Recruiter Directory */}
          <div className="bg-[#091A2E] border border-[#1E3A5F] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-lg text-white">850+ Marquee Recruiting Partners</h3>
                <p className="text-xs text-slate-400">Filter recruiters by sector and compensation offers</p>
              </div>

              {/* Sector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
                {(['All', 'Architecture & Design', 'Tech Giants', 'Consulting & BFSI', 'Hospitality & Healthcare'] as const).map(
                  (sec) => (
                    <button
                      key={sec}
                      onClick={() => setSelectedRecruiterSector(sec)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                        selectedRecruiterSector === sec
                          ? 'bg-[#E65100] text-white font-bold'
                          : 'bg-[#050D17] text-slate-400 hover:text-white'
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
                  className="p-4 rounded-xl bg-[#050D17] border border-[#183659] hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white bg-[#0A2540] px-2 py-0.5 rounded">
                      {rec.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{rec.sector}</span>
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-[#FF7043]">{rec.packageOffered}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{rec.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Success Voices */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Student Voices &amp; Placements</h3>
                <p className="text-xs text-slate-400">Real stories from Sushant University alumni heading global teams</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cfg.testimonials.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="p-6 rounded-2xl bg-[#091A2E] border border-[#1E3A5F] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FF7043]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/sushant-university/testimonial-1.jpg';
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white">{t.name}</h4>
                        <p className="text-[11px] text-[#FF7043] font-semibold">{t.company} · {t.packageOffered}</p>
                        <p className="text-[10px] text-slate-400">{t.school}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium pt-3 border-t border-[#183659]">
                    Role: <span className="text-slate-200 font-semibold">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. GLOBAL COLLABORATIONS & MOBILITY */}
      <section id="collaborations" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            <Globe className="w-3.5 h-3.5" />
            INTERNATIONAL ALLIANCES
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Global Academic Collaborations
          </h2>
          <p className="text-slate-400 text-sm">
            Empowering students with international dual-degrees, semester exchange programs, and summer research mobility across France, the United Kingdom, and the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#091A2E] border border-[#1E3A5F] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-lg">
              FR
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Vatel Group (France)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Global hospitality management dual degree through Vatel Hotel &amp; Tourism Business School. Access to Marco Polo exchange schemes across 50+ Vatel campuses worldwide.
            </p>
            <div className="text-xs text-amber-400 font-medium">BBA &amp; MBA International Hotel Management</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#091A2E] border border-[#1E3A5F] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-serif font-bold text-lg">
              UK
            </div>
            <h3 className="font-serif font-bold text-lg text-white">University of Warwick</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Academic collaboration fostering curriculum benchmark reviews, faculty development workshops, and research exchange in management, engineering, and manufacturing.
            </p>
            <div className="text-xs text-sky-400 font-medium">Academic Quality &amp; Curriculum Exchange</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#091A2E] border border-[#1E3A5F] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-serif font-bold text-lg">
              USA
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Eastern Michigan University</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Progression agreements and credit transfer options allowing students to complete undergraduate degrees in Michigan, USA with post-study work visa opportunities.
            </p>
            <div className="text-xs text-purple-400 font-medium">Credit Transfer &amp; Study Abroad Route</div>
          </div>
        </div>
      </section>

      {/* 10. GURUGRAM CAMPUS LIFE & INFRASTRUCTURE */}
      <section id="campus-life" className="py-16 px-4 sm:px-8 bg-[#050E1A] border-t border-b border-[#132B45]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF7043] text-xs font-bold uppercase tracking-wider border border-orange-500/20">
              <MapPin className="w-3.5 h-3.5" />
              SECTOR 55, GOLF COURSE ROAD
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              Campus Infrastructure &amp; Student Life
            </h2>
            <p className="text-slate-400 text-sm">
              Discover our drafting studios, digital libraries, amphitheater, sports facilities, and air-conditioned hostels in Gurugram’s prime corporate district.
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
                    ? 'bg-[#E65100] text-white font-bold shadow-lg shadow-orange-950/20'
                    : 'bg-[#091A2E] text-slate-400 hover:text-white border border-[#183659]'
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#091A2E] border border-[#1E3A5F] rounded-3xl p-6 sm:p-10 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden border border-[#183659] group aspect-video">
                  <img
                    src={currentFac.image}
                    alt={currentFac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/sushant-university/campus-main.jpg';
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
                      <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                      <span>View Fullscreen</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#FF7043] uppercase tracking-widest">
                      {currentFac.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
                      {currentFac.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#050D17] border border-[#183659] text-xs font-bold text-cyan-400">
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
                      className="px-5 py-2.5 bg-gradient-to-r from-[#E65100] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                    >
                      Schedule Campus Visit
                    </a>
                    <a
                      href={`tel:${cfg.brand.directPhone}`}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      <span>{cfg.brand.directPhone}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 11. MERIT SCHOLARSHIP CALCULATOR */}
      <section id="scholarships" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
            <DollarSign className="w-3.5 h-3.5" />
            FINANCIAL AID &amp; SCHOLARSHIPS
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Merit Scholarship &amp; Domicile Fee Calculator
          </h2>
          <p className="text-slate-400 text-sm">
            Estimate your tuition fee waiver based on Class 12 board scores and Haryana state domicile provisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Calculator Box */}
          <div className="lg:col-span-6 bg-[#091A2E] border border-[#1E3A5F] rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-serif font-bold text-xl text-white">Calculate Your Waiver</h3>

            {/* Score Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={scoreInputId} className="text-xs font-semibold text-slate-300">
                  10+2 / Qualifying Score (%):
                </label>
                <span className="font-black text-2xl text-[#FF7043] font-mono">{scoreInput}%</span>
              </div>
              <input
                id={scoreInputId}
                type="range"
                min="50"
                max="100"
                step="0.5"
                value={scoreInput}
                onChange={(e) => setScoreInput(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#050D17] rounded-lg appearance-none cursor-pointer accent-[#E65100]"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>50%</span>
                <span>80% (Tier 3)</span>
                <span>90% (Tier 2)</span>
                <span>95%+ (Tier 1 Full)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Haryana Domicile Checkbox */}
            <div className="p-3.5 rounded-xl bg-[#050D17] border border-[#183659] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Haryana State Domicile</span>
                <span className="text-[11px] text-slate-400">Bonafide resident certificate holder</span>
              </div>
              <input
                type="checkbox"
                checked={isHaryanaResident}
                onChange={(e) => setIsHaryanaResident(e.target.checked)}
                className="w-4 h-4 accent-[#E65100] cursor-pointer"
              />
            </div>

            {/* Stream Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">Select Preferred School / Program:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'architecture', label: 'B.Arch (SSAA)', baseFee: 195000 },
                  { id: 'design', label: 'B.Des (SSD)', baseFee: 150000 },
                  { id: 'engineering', label: 'B.Tech CSE (SET)', baseFee: 110000 },
                  { id: 'management', label: 'MBA (SOB)', baseFee: 145000 },
                  { id: 'law', label: 'B.A. LL.B (SOL)', baseFee: 115000 },
                  { id: 'hospitality', label: 'Vatel BBA (France)', baseFee: 135000 }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCalculatedStream(st.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      calculatedStream === st.id
                        ? 'bg-orange-500/10 border-orange-500 text-orange-300 font-bold'
                        : 'bg-[#050D17] border-[#183659] text-slate-400 hover:text-white'
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
                architecture: 195000,
                design: 150000,
                engineering: 110000,
                management: 145000,
                law: 115000,
                hospitality: 135000
              };
              const base = baseFeesMap[calculatedStream] || 120000;
              const waiverAmt = (base * currentScholarship.discountPercent) / 100;
              const netFee = base - waiverAmt;

              return (
                <div className="p-5 rounded-2xl bg-[#050D17] border border-[#183659] space-y-4">
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

                  <div className="grid grid-cols-2 gap-4 text-xs pt-2 border-t border-[#183659]">
                    <div>
                      <span className="text-slate-500 block">Semester Base Fee:</span>
                      <span className="text-sm font-bold text-slate-300">₹{base.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Tuition Concession:</span>
                      <span className="text-sm font-bold text-emerald-400">
                        -₹{waiverAmt.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#183659] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Estimated Net Fee / Sem:</span>
                      <span className="text-xl font-black text-[#FF7043] font-serif">
                        ₹{netFee.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <a
                      href="#admissions"
                      className="px-4 py-2 bg-[#E65100] hover:bg-[#D84315] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Apply With Waiver
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 italic">{currentScholarship.note}</p>
                </div>
              );
            })()}
          </div>

          {/* Scholarship Tiers Matrix */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif font-bold text-xl text-white">Sushant University Scholarship Policy</h3>
            <p className="text-xs text-slate-400">
              Merit scholarships are renewable annually subject to academic consistency and conduct.
            </p>

            <div className="space-y-3">
              {cfg.scholarshipTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="p-4 rounded-2xl bg-[#091A2E] border border-[#1E3A5F] hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
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
                    <div className="text-xs text-[#FF7043] font-medium">{tier.range}</div>
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

      {/* 12. ONLINE ADMISSIONS APPLICATION DESK 2026 */}
      <section id="admissions" className="py-16 px-4 sm:px-8 bg-[#050E1A] border-t border-b border-[#132B45]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF7043] text-xs font-bold uppercase tracking-wider border border-orange-500/20">
              <FileText className="w-3.5 h-3.5" />
              ONLINE ADMISSIONS 2026-27
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              Central Admissions Application Desk
            </h2>
            <p className="text-slate-400 text-sm">
              Submit your candidate profile below to generate an official registration reference ID and receive admission guidance from our university counselors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Admissions Form */}
            <div className="lg:col-span-8 bg-[#091A2E] border border-[#1E3A5F] rounded-3xl p-6 sm:p-10 shadow-2xl">
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
                      placeholder="e.g. Aryan Sehgal"
                      className={`w-full px-4 py-2.5 bg-[#050D17] border ${
                        formErrors.name ? 'border-rose-500' : 'border-[#183659]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043]`}
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
                      placeholder="e.g. aryan@example.com"
                      className={`w-full px-4 py-2.5 bg-[#050D17] border ${
                        formErrors.email ? 'border-rose-500' : 'border-[#183659]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043]`}
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
                      <span className="inline-flex items-center px-3 rounded-l-xl bg-[#050D17] border border-r-0 border-[#183659] text-slate-400 text-xs">
                        +91
                      </span>
                      <input
                        id={applicantPhoneId}
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="9812345678"
                        className={`w-full px-4 py-2.5 bg-[#050D17] border ${
                          formErrors.phone ? 'border-rose-500' : 'border-[#183659]'
                        } rounded-r-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043]`}
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor={applicantCityId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      City / State *
                    </label>
                    <input
                      id={applicantCityId}
                      type="text"
                      value={applicantCity}
                      onChange={(e) => setApplicantCity(e.target.value)}
                      placeholder="e.g. Gurugram, Delhi NCR, Chandigarh"
                      className={`w-full px-4 py-2.5 bg-[#050D17] border ${
                        formErrors.city ? 'border-rose-500' : 'border-[#183659]'
                      } rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043]`}
                    />
                    {formErrors.city && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.city}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={applicantSchoolId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Target School
                    </label>
                    <select
                      id={applicantSchoolId}
                      value={applicantSchool}
                      onChange={(e) => setApplicantSchool(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#050D17] border border-[#183659] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF7043]"
                    >
                      {cfg.schools.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={applicantProgramId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Preferred Degree Course
                    </label>
                    <select
                      id={applicantProgramId}
                      value={applicantProgram}
                      onChange={(e) => setApplicantProgram(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#050D17] border border-[#183659] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF7043]"
                    >
                      {cfg.programs.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.schoolShort})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={applicantDomicileId} className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Candidate Domicile Status
                  </label>
                  <select
                    id={applicantDomicileId}
                    value={applicantDomicile}
                    onChange={(e) => setApplicantDomicile(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#050D17] border border-[#183659] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF7043]"
                  >
                    <option value="All India Candidate">All India Open Category</option>
                    <option value="Haryana Domicile (25% Concession Eligible)">
                      Haryana State Domicile (25% Statutory Fee Concession Eligible)
                    </option>
                    <option value="International / NRI Candidate">International / NRI Candidate</option>
                  </select>
                </div>

                <div className="p-4 rounded-xl bg-[#050D17] border border-[#183659] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 font-medium">Estimated Scholarship Entitlement:</span>
                  </div>
                  <span className="font-extrabold text-[#FF7043]">{currentScholarship.waiver}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#E65100] via-orange-600 to-[#D84315] hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-950/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application &amp; Generate Registration ID</span>
                </button>
              </form>
            </div>

            {/* Tracking Status Box & Campus Address */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#091A2E] border border-[#1E3A5F] rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="font-serif font-bold text-lg text-white">Track Application Status</h3>
                <p className="text-xs text-slate-400">
                  Enter your assigned registration reference number to verify counseling schedule and merit status.
                </p>

                <div className="space-y-3">
                  <label htmlFor={lookupRefInputId} className="sr-only">Reference ID (e.g. SU-2026-XXXXXX)</label>
                  <input
                    id={lookupRefInputId}
                    type="text"
                    value={lookupRefId}
                    onChange={(e) => setLookupRefId(e.target.value)}
                    placeholder="Reference ID (e.g. SU-2026-XXXXXX)"
                    className="w-full px-4 py-2.5 bg-[#050D17] border border-[#183659] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7043]"
                  />
                  <button
                    onClick={handleLookup}
                    className="w-full py-2.5 bg-[#0A2540] hover:bg-[#123659] border border-[#1E3A5F] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Verify Status
                  </button>
                </div>

                {lookupResult && (
                  <div className="p-3.5 rounded-xl bg-[#050D17] border border-[#183659] text-xs text-slate-300 leading-relaxed">
                    {lookupResult}
                  </div>
                )}
              </div>

              {/* Admissions Support Office */}
              <div className="bg-[#091A2E] border border-[#1E3A5F] rounded-3xl p-6 space-y-4">
                <h4 className="font-bold text-sm text-white">Admissions Support Desk</h4>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#FF7043] shrink-0" />
                    <span>Toll Free: 1800 270 5520</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct: +91 124 4750400</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>admissions@sushantuniversity.edu.in</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Sector 55, Golf Course Road, Gurugram, Haryana 122003</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section id="faqs" className="py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-700">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
            Answers to Common Queries
          </h2>
          <p className="text-slate-400 text-sm">
            Learn more about the SSAA architecture legacy, Vatel France dual degrees, scholarships, and campus facilities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 text-xs">
          {(['All', 'Admissions & Scholarships', 'SSAA Architecture', 'Placements', 'Global Partnerships', 'Campus Life & Hostels'] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-[#E65100] text-white font-bold'
                    : 'bg-[#091A2E] text-slate-400 hover:text-white border border-[#183659]'
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
                className="bg-[#091A2E] border border-[#1E3A5F] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF7043] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-[#183659]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. COMPREHENSIVE INSTITUTIONAL FOOTER */}
      <footer className="bg-[#030810] border-t border-[#132B45] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A2540] border border-orange-500/40 p-1 flex items-center justify-center">
                <img
                  src="/assets/sushant-university/logo-white.svg"
                  alt="Sushant University"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-black text-base text-white tracking-wide">SUSHANT</div>
                <div className="text-[10px] font-serif font-bold text-[#FF7043] tracking-[0.2em]">UNIVERSITY</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Established under the Haryana Private Universities Act 2012 (formerly Ansal University). Home to the legendary Sushant School of Art &amp; Architecture (SSAA since 1989), ranked #1 in Delhi-NCR.
            </p>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>UGC Recognized University under Section 2(f)</div>
              <div>COA, BCI, PCI &amp; AICTE Approved</div>
              <div>International Partner of Vatel Group France</div>
            </div>
          </div>

          {/* Column 2: 8 Constituent Schools */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Constituent Schools
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  Sushant School of Art &amp; Architecture (SSAA)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  Sushant School of Design (SSD)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  School of Engineering &amp; Technology (SET)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  School of Business (SOB)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  School of Law (SOL)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  School of Health Sciences (SHS)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  Vatel Hotel &amp; Tourism Business School
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-[#FF7043] transition-colors">
                  School of Planning &amp; Development (SPD)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a href="#rankings" className="hover:text-[#FF7043] transition-colors">
                  Rankings &amp; Accreditations
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-[#FF7043] transition-colors">
                  ₹50 LPA Placements Report
                </a>
              </li>
              <li>
                <a href="#collaborations" className="hover:text-[#FF7043] transition-colors">
                  Vatel France &amp; Warwick Ties
                </a>
              </li>
              <li>
                <a href="#scholarships" className="hover:text-[#FF7043] transition-colors">
                  Haryana Domicile &amp; Merit Scholarships
                </a>
              </li>
              <li>
                <a href="#campus-life" className="hover:text-[#FF7043] transition-colors">
                  Golf Course Road Campus Life
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#FF7043] transition-colors">
                  Admissions Portal 2026
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FF7043] transition-colors">
                  Admissions FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Directory & Directions */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Campus &amp; Admissions
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{cfg.brand.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span>Toll-Free: {cfg.brand.admissionsHelpline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct: {cfg.brand.directPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{cfg.brand.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#admissions"
                className="w-full py-2 bg-[#091A2E] hover:bg-[#122A47] border border-[#1E3A5F] text-[#FF7043] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Prospectus 2026</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclosures */}
        <div className="border-t border-[#132B45] py-5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <div>
              © 2026 {cfg.brand.legalName}. All Rights Reserved. Institutional website demo.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-300 transition-colors">UGC Statutory Disclosures</span>
              <span>·</span>
              <span className="hover:text-slate-300 transition-colors">COA Approvals</span>
              <span>·</span>
              <span className="hover:text-slate-300 transition-colors">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 15. FLOATING CONCIERGE QUICK ACTIONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/911244750400?text=Hello%20Sushant%20University,%20I%20would%20like%20to%20inquire%20about%20Admissions%20and%20Scholarships%202026."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat with Admissions on WhatsApp"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* 16. PROGRAM CURRICULUM DETAIL MODAL */}
      {selectedProgramDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#091A2E] border border-[#1E3A5F] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-[#050D17] px-2.5 py-1 rounded">
                  {selectedProgramDetail.code}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-2">
                  {selectedProgramDetail.name}
                </h3>
                <p className="text-xs text-[#FF7043] font-medium">{selectedProgramDetail.school}</p>
              </div>
              <button
                onClick={() => setSelectedProgramDetail(null)}
                className="p-2 rounded-full bg-[#050D17] text-slate-400 hover:text-white"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs p-4 rounded-2xl bg-[#050D17] border border-[#183659]">
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
              <p className="text-slate-400 leading-relaxed bg-[#050D17] p-3 rounded-xl border border-[#183659]">
                {selectedProgramDetail.eligibility}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-300 block uppercase tracking-wider">
                Curriculum &amp; Pedagogical Highlights:
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
                Career Pathways &amp; Recruitment Roles:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProgramDetail.careerRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full bg-[#050D17] border border-[#183659] text-cyan-300 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#183659] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProgramDetail(null)}
                className="px-4 py-2 bg-[#050D17] hover:bg-[#132B45] text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => {
                  setApplicantSchool(selectedProgramDetail.school);
                  setApplicantProgram(selectedProgramDetail.name);
                  setSelectedProgramDetail(null);
                }}
                className="px-6 py-2.5 bg-[#E65100] hover:bg-[#D84315] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>Apply for this Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 17. SUBMISSION CONFIRMATION RECEIPT MODAL */}
      {submittedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#091A2E] border border-orange-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-black text-2xl text-white">Application Received</h3>
              <p className="text-xs text-slate-400">
                Your admission registration has been recorded at Sushant University Central Admissions Office.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#050D17] border border-[#183659] space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#183659]">
                <span className="text-slate-500 font-medium">Tracking Reference:</span>
                <span className="font-mono font-black text-[#FF7043] text-sm">{submittedReceipt.refId}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-semibold text-white">{submittedReceipt.name}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">School:</span>
                <span className="font-semibold text-white text-right">{submittedReceipt.school}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Program:</span>
                <span className="font-semibold text-amber-400 text-right">{submittedReceipt.program}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Candidate Category:</span>
                <span className="font-semibold text-cyan-400">{submittedReceipt.domicile}</span>
              </div>
              <div className="flex justify-between py-1 pt-2 border-t border-[#183659]">
                <span className="text-slate-500">Scholarship Benefit:</span>
                <span className="font-bold text-emerald-400">{submittedReceipt.scholarshipEstimate}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              Please preserve your reference number <strong className="text-white">{submittedReceipt.refId}</strong> for counseling and document verification at the Gurugram campus.
            </p>

            <button
              onClick={() => {
                setSubmittedReceipt(null);
                setApplicantName('');
                setApplicantEmail('');
                setApplicantPhone('');
                setApplicantCity('');
              }}
              className="w-full py-3 bg-[#E65100] hover:bg-[#D84315] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
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
                  (e.target as HTMLImageElement).src = '/assets/sushant-university/campus-main.jpg';
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
