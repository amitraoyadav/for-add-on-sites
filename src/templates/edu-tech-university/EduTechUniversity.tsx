import React, { useState, useEffect, useId } from 'react';
import {
  EDU_TECH_UNIVERSITY_CONFIG,
  ETUProgram,
  ETUFaculty,
  ETUHeroSlide,
  ETUCampus,
  ETUResearchInstitute,
  ETUTestimonial,
  ETUFaq
} from './edu-tech-university.config';
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
  Layers,
  HeartPulse,
  Pill,
  Scale,
  Microscope,
  Palette,
  Globe,
  Clock,
  Check
} from 'lucide-react';

export default function EduTechUniversity() {
  const cfg = EDU_TECH_UNIVERSITY_CONFIG;

  // Navigation & UI States
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Course Finder States
  const [courseSearch, setCourseSearch] = useState('');
  const [selectedFacultyFilter, setSelectedFacultyFilter] = useState('all');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('All');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<ETUProgram | null>(null);

  // Faculty Detail Modal
  const [selectedFacultyModal, setSelectedFacultyModal] = useState<ETUFaculty | null>(null);

  // Campus Life / Campuses active tab
  const [activeCampusId, setActiveCampusId] = useState<string>(cfg.campuses[0].id);

  // Research institute active tab
  const [activeInstituteId, setActiveInstituteId] = useState<string>(cfg.researchInstitutes[0].id);

  // Scholarship Calculator state
  const [calcCitizenship, setCalcCitizenship] = useState<'domestic' | 'international'>('international');
  const [calcScore, setCalcScore] = useState<number>(85);
  const [calcStudyLevel, setCalcStudyLevel] = useState<'undergraduate' | 'postgraduate'>('undergraduate');

  // Admissions Application Form
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantCitizenship, setApplicantCitizenship] = useState('International');
  const [applicantCountry, setApplicantCountry] = useState('India');
  const [applicantProgram, setApplicantProgram] = useState('Bachelor of Computer Science (Advanced Computer Science)');
  const [applicantIntake, setApplicantIntake] = useState('Semester 1 (February 2026)');
  const [applicantAcademicScore, setApplicantAcademicScore] = useState('88% / ATAR 88.00');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [applicationSubmitted, setApplicationSubmitted] = useState<{
    referenceId: string;
    name: string;
    degree: string;
    intake: string;
    scholarshipEstimate: string;
    date: string;
  } | null>(null);

  // Application Tracking Lookup
  const [trackRefId, setTrackRefId] = useState('');
  const [trackStatusResult, setTrackStatusResult] = useState<string | null>(null);

  // Virtual Tour Modal State
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [tourLocation, setTourLocation] = useState('Clayton Learning Precinct');

  // FAQ Category Filter
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Auto-rotate hero slides every 7 seconds when not paused
  useEffect(() => {
    if (isSlidePaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % cfg.heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isSlidePaused, cfg.heroSlides.length]);

  // Filtered Programs
  const filteredPrograms = cfg.programs.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
      p.code.toLowerCase().includes(courseSearch.toLowerCase()) ||
      p.faculty.toLowerCase().includes(courseSearch.toLowerCase()) ||
      p.overview.toLowerCase().includes(courseSearch.toLowerCase());

    const matchesFaculty =
      selectedFacultyFilter === 'all' ||
      p.faculty.toLowerCase().includes(selectedFacultyFilter.toLowerCase());

    const matchesLevel =
      selectedLevelFilter === 'All' ||
      p.level === selectedLevelFilter ||
      (selectedLevelFilter === 'Undergraduate' && p.level === 'Double Degree');

    return matchesSearch && matchesFaculty && matchesLevel;
  });

  // Filtered FAQs
  const filteredFaqs = cfg.faqs.filter((faq) => {
    return faqCategory === 'All' || faq.category === faqCategory;
  });

  // Calculate Estimated Scholarship
  const calculateScholarshipEstimate = () => {
    if (calcCitizenship === 'international') {
      if (calcScore >= 95) return '100% Full Tuition Waiver (International Leadership Scholarship)';
      if (calcScore >= 85) return '$10,000 AUD / Year ($40,000 Total Value)';
      if (calcScore >= 75) return '$5,000 AUD / Year Commencing Study Grant';
      return 'Standard International Tuition (Standard Entry)';
    } else {
      if (calcScore >= 98) return '$10,000 AUD / Year + Priority Residential College Hall Place';
      if (calcScore >= 90) return '$6,000 AUD / Year (Sir John Monash Excellence Award)';
      if (calcScore >= 80) return 'Commonwealth Supported Place (CSP Band 1-4)';
      return 'Standard Domestic Commonwealth Supported Place (CSP)';
    }
  };

  // Handle Application Submit
  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!applicantName.trim()) errors.name = 'Full name is required';
    if (!applicantEmail.trim() || !applicantEmail.includes('@')) errors.email = 'Valid email is required';
    if (!applicantPhone.trim()) errors.phone = 'Contact phone number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const ref = `ETU-2026-${randomHex}`;

    let estimatedAward = '$10,000 AUD / Year Merit Award';
    if (applicantCitizenship === 'International') {
      estimatedAward = '$10,000 AUD / Year International Study Excellence Scholarship';
    } else {
      estimatedAward = 'Commonwealth Supported Place (CSP) + $6,000 Merit Award';
    }

    setApplicationSubmitted({
      referenceId: ref,
      name: applicantName,
      degree: applicantProgram,
      intake: applicantIntake,
      scholarshipEstimate: estimatedAward,
      date: new Date().toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    });
  };

  // Handle Lookup Application
  const handleLookup = () => {
    if (!trackRefId.trim()) {
      setTrackStatusResult('Please enter your reference ID (e.g. ETU-2026-XXXXXX).');
      return;
    }
    const cleanId = trackRefId.trim().toUpperCase();
    if (cleanId.startsWith('ETU-2026-') || cleanId.startsWith('ETU-')) {
      setTrackStatusResult(
        `Application ${cleanId}: Status: CONDITIONAL OFFER ISSUED. Documents verified by Edu Tech Global Admissions. Please upload certified passport copy and official academic transcripts.`
      );
    } else {
      setTrackStatusResult(
        `Reference ${cleanId}: Record retrieved. Status: UNDER ACADEMIC FACULTY REVIEW. A decision will be communicated within 5 business days.`
      );
    }
  };

  const selectedCampus =
    cfg.campuses.find((c) => c.id === activeCampusId) || cfg.campuses[0];
  const selectedInstitute =
    cfg.researchInstitutes.find((r) => r.id === activeInstituteId) || cfg.researchInstitutes[0];

  return (
    <div className="edu-tech-university-root bg-white text-[#1e293b] font-sans antialiased min-h-screen flex flex-col selection:bg-[#00A3E0] selection:text-white">
      {/* ----------------- 1. TOP GLOBAL UTILITY BAR ----------------- */}
      <div className="bg-[#001829] text-xs text-[#94a3b8] border-b border-[#0f3456] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left Audience Links */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[11px] font-medium overflow-x-auto">
            <span className="text-[#38bdf8] font-bold tracking-wider uppercase">Audiences:</span>
            <a href="#study" className="hover:text-white transition-colors">Current students</a>
            <a href="#faculties" className="hover:text-white transition-colors">Staff</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Alumni & donors</a>
            <a href="#campuses" className="hover:text-white transition-colors">Campuses & maps</a>
            <a href="#research" className="hover:text-white transition-colors">Library</a>
          </div>

          {/* Right Global Links & Portal Access */}
          <div className="flex items-center space-x-3 text-[11px]">
            <div className="hidden md:flex items-center gap-1.5 text-white/90 bg-[#002b49] px-2 py-0.5 rounded border border-[#006dae]/40">
              <Globe className="w-3 h-3 text-[#38bdf8]" />
              <span className="font-semibold text-[10px]">Global: Australia · Malaysia · Indonesia · Italy · India</span>
            </div>
            <button
              onClick={() => setGlobalSearchOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3 text-[#38bdf8]" />
              <span>Search</span>
            </button>
            <span className="text-[#334155]">|</span>
            <a
              href="#admissions"
              className="text-[#f59e0b] font-semibold hover:text-[#fbbf24] transition-colors flex items-center gap-1"
            >
              <span>my.EduTech Portal</span>
            </a>
          </div>
        </div>
      </div>

      {/* ----------------- 2. MAIN INSTITUTIONAL HEADER & NAV ----------------- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & Heraldic Crest */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/edu-tech-university/logo.svg"
              alt="EDU TECH UNIVERSITY"
              className="h-11 sm:h-13 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-medium text-[13px] text-[#002b49]">
            <a
              href="#home"
              onClick={() => setActiveNav('home')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'home'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Home
            </a>
            <a
              href="#courses"
              onClick={() => setActiveNav('courses')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'courses'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Find a Course
            </a>
            <a
              href="#faculties"
              onClick={() => setActiveNav('faculties')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'faculties'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Faculties (10)
            </a>
            <a
              href="#campuses"
              onClick={() => setActiveNav('campuses')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'campuses'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Campuses
            </a>
            <a
              href="#research"
              onClick={() => setActiveNav('research')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'research'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Research & Impact
            </a>
            <a
              href="#scholarships"
              onClick={() => setActiveNav('scholarships')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'scholarships'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Scholarships
            </a>
            <a
              href="#admissions"
              onClick={() => setActiveNav('admissions')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeNav === 'admissions'
                  ? 'text-[#006dae] font-bold bg-sky-50'
                  : 'hover:text-[#006dae] hover:bg-slate-50'
              }`}
            >
              Admissions 2026
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <button
              onClick={() => setVirtualTourOpen(true)}
              className="px-3 py-2 text-xs font-semibold text-[#002b49] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#006dae]" />
              <span>360° Tour</span>
            </button>
            <a
              href="#admissions"
              className="px-4 py-2 text-xs font-bold text-white bg-[#006dae] hover:bg-[#002b49] rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setGlobalSearchOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-[#006dae]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 bg-slate-50 rounded-lg text-xs font-semibold text-[#002b49] flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#006dae]" />
                <span>Find a Course</span>
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 bg-sky-50 rounded-lg text-xs font-bold text-[#006dae] flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#006dae]" />
                <span>Apply 2026</span>
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Home</a>
              <a href="#faculties" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Ten Academic Faculties</a>
              <a href="#campuses" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Global Campuses (8 Cities)</a>
              <a href="#research" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Research & World Challenges</a>
              <a href="#scholarships" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Scholarship Calculator</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Student Experience & Clubs</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-[#006dae]">Admissions FAQs</a>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- 3. GLOBAL SEARCH MODAL ----------------- */}
      {globalSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-[#002b49] font-bold">
                <Search className="w-5 h-5 text-[#006dae]" />
                <span>Search Edu Tech University</span>
              </div>
              <button
                onClick={() => setGlobalSearchOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  placeholder="Search courses, faculties, campus maps, scholarships, staff..."
                  className="w-full px-4 py-3 pl-11 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#006dae] focus:ring-2 focus:ring-[#006dae]/20 text-sm outline-none transition-all"
                  autoFocus
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-400 py-1">Popular:</span>
                {['Computer Science', 'Medicine MD', 'Software Engineering', 'Commerce Finance', 'Pharmacy Master', 'Scholarships 2026', 'Clayton Campus'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setGlobalSearchQuery(term);
                        setCourseSearch(term);
                        setGlobalSearchOpen(false);
                        const el = document.getElementById('courses');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-sky-50 hover:text-[#006dae] rounded-md text-slate-600 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- 4. FULL-BLEED HERO CAROUSEL ----------------- */}
      <section id="home" className="relative bg-[#001829] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#002b49] text-[#38bdf8] border border-[#006dae]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>{cfg.heroSlides[currentSlideIndex].badge}</span>
              </div>

              {/* High-Impact Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                {cfg.heroSlides[currentSlideIndex].headline}
              </h1>

              {/* Subheadline description */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {cfg.heroSlides[currentSlideIndex].subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={cfg.heroSlides[currentSlideIndex].ctaPrimaryLink}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#006dae] hover:bg-[#005182] shadow-lg shadow-[#006dae]/25 hover:shadow-[#006dae]/40 transition-all flex items-center gap-2"
                >
                  <span>{cfg.heroSlides[currentSlideIndex].ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={cfg.heroSlides[currentSlideIndex].ctaSecondaryLink}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>{cfg.heroSlides[currentSlideIndex].ctaSecondaryText}</span>
                </a>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
                {cfg.heroSlides[currentSlideIndex].stats.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg sm:text-xl font-black text-[#38bdf8]">{st.value}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic Banner Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
                <img
                  src={cfg.heroSlides[currentSlideIndex].graphicSvg}
                  alt={cfg.heroSlides[currentSlideIndex].headline}
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Ranking Ribbon */}
                <div className="absolute top-4 right-4 bg-[#002b49]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#38bdf8]/40 shadow-lg flex items-center gap-2 text-xs font-bold text-white">
                  <Trophy className="w-4 h-4 text-[#f59e0b]" />
                  <span>QS #37 GLOBAL</span>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex items-center justify-between mt-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {cfg.heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentSlideIndex === idx ? 'w-8 bg-[#38bdf8]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next / Prev Buttons & Pause */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsSlidePaused(!isSlidePaused)}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 transition-colors"
                  >
                    {isSlidePaused ? 'Resume' : 'Pause'}
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) => (prev === 0 ? cfg.heroSlides.length - 1 : prev - 1))
                    }
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) => (prev + 1) % cfg.heroSlides.length)
                    }
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- EMBEDDED QUICK COURSE FINDER WIDGET ----------------- */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 w-full relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  What do you want to study?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    placeholder="Search by degree name, keyword, or career (e.g. AI, Medicine, Engineering, MBA)..."
                    className="w-full px-4 py-2.5 pl-10 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:bg-white focus:border-[#006dae] focus:ring-2 focus:ring-[#006dae]/20 outline-none"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <div className="w-full md:w-56">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Study Level
                </label>
                <select
                  value={selectedLevelFilter}
                  onChange={(e) => setSelectedLevelFilter(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:bg-white focus:border-[#006dae] outline-none cursor-pointer"
                >
                  <option value="All">All Study Levels</option>
                  <option value="Undergraduate">Undergraduate (Bachelor)</option>
                  <option value="Postgraduate">Postgraduate (Master)</option>
                  <option value="Double Degree">Double Degrees (5 Yrs)</option>
                </select>
              </div>

              <div className="w-full md:w-auto pt-0 md:pt-5">
                <a
                  href="#courses"
                  className="w-full md:w-auto px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-[#006dae] hover:bg-[#002b49] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Search Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick faculty pills */}
            <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-semibold text-slate-500 mr-1 text-[11px]">Popular Fields:</span>
              {[
                { label: 'Engineering', val: 'engineering' },
                { label: 'Computer Science & AI', val: 'it' },
                { label: 'Medicine & Health', val: 'medicine' },
                { label: 'Pharmacy (#2 World)', val: 'pharmacy' },
                { label: 'Business & Commerce', val: 'business' },
                { label: 'Law', val: 'law' },
                { label: 'Science & Biotech', val: 'science' }
              ].map((pill) => (
                <button
                  key={pill.val}
                  onClick={() => {
                    setSelectedFacultyFilter(pill.val);
                    const el = document.getElementById('courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedFacultyFilter === pill.val
                      ? 'bg-[#006dae] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-[#006dae]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. INSTITUTIONAL ACCREDITATION & RANKINGS BAR ----------------- */}
      <section className="bg-slate-50 border-y border-slate-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#002b49] rounded-xl text-white">
              <Award className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#006dae]">
                Global Distinction & Statutory Accreditations
              </div>
              <div className="text-sm font-semibold text-slate-800">
                CRICOS Provider: {cfg.institution.cricosProviderCode} · TEQSA Provider: {cfg.institution.teqsaProviderId}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <img src="/assets/edu-tech-university/badge-qs-world.svg" alt="QS World #37" className="h-10 w-auto" />
            <img src="/assets/edu-tech-university/badge-go8.svg" alt="Group of Eight" className="h-10 w-auto" />
            <img src="/assets/edu-tech-university/badge-triple-crown.svg" alt="Triple Crown" className="h-10 w-auto" />
            <img src="/assets/edu-tech-university/badge-engineering-rank.svg" alt="#1 Australia Engineering" className="h-10 w-auto" />
            <img src="/assets/edu-tech-university/badge-pharmacy-rank.svg" alt="#2 World Pharmacy" className="h-10 w-auto" />
          </div>
        </div>
      </section>

      {/* ----------------- 6. SIGNATURE FEATURE BOXES FROM THE ARCHIVE ----------------- */}
      <section className="py-14 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
              Explore Edu Tech University
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1.5">
              Empowering Minds to Make a World of Difference
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Discover dedicated resources, hands-on maker spaces, global admissions desks, and industry integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cfg.featureBoxes.map((box, i) => (
              <div
                key={box.id}
                className="group rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#006dae] hover:shadow-xl transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-[#006dae]">
                      {box.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">{box.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#002b49] group-hover:text-[#006dae] transition-colors leading-snug">
                    {box.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 mt-2">
                    {box.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {box.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <a
                    href={box.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006dae] group-hover:text-[#002b49] transition-colors"
                  >
                    <span>{box.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. TEN ACADEMIC FACULTIES & DISCIPLINES ----------------- */}
      <section id="faculties" className="py-14 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
                Academic Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1">
                Ten World-Leading Faculties
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Explore undergraduate, graduate research, and micro-credential qualifications across every discipline.
              </p>
            </div>
            <a
              href="#courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006dae] hover:text-[#002b49]"
            >
              <span>View all degrees across faculties</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {cfg.faculties.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#006dae] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white" style={{ backgroundColor: fac.color }}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#002b49] group-hover:text-[#006dae] transition-colors leading-snug">
                    {fac.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#f59e0b] mt-1">
                    {fac.globalRank}
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">
                    {fac.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedFacultyModal(fac)}
                    className="text-xs font-bold text-[#006dae] hover:text-[#002b49] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Faculty details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. INTERACTIVE COURSE FINDER & CURRICULUM EXPLORER ----------------- */}
      <section id="courses" className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
                Study Finder
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1">
                Explore Courses & Degrees
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Discover accredited Bachelor, Honours, Master, and double degrees with guaranteed industry work placements.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="font-bold text-[#006dae]">{filteredPrograms.length}</span> programs matching filters
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8 flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[200px] relative">
              <input
                type="text"
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                placeholder="Filter courses by name, code or career..."
                className="w-full px-3 py-2 pl-9 rounded-lg bg-white border border-slate-200 text-xs focus:border-[#006dae] outline-none"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Level:</span>
              <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 text-xs">
                {['All', 'Undergraduate', 'Postgraduate', 'Double Degree'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevelFilter(lvl)}
                    className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                      selectedLevelFilter === lvl
                        ? 'bg-[#002b49] text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Faculty:</span>
              <select
                value={selectedFacultyFilter}
                onChange={(e) => setSelectedFacultyFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium focus:border-[#006dae] outline-none cursor-pointer"
              >
                <option value="all">All Faculties</option>
                <option value="engineering">Engineering</option>
                <option value="information technology">Information Technology</option>
                <option value="business">Business & Economics</option>
                <option value="medicine">Medicine & Health</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="law">Law</option>
                <option value="science">Science</option>
              </select>
            </div>

            {(courseSearch || selectedFacultyFilter !== 'all' || selectedLevelFilter !== 'All') && (
              <button
                onClick={() => {
                  setCourseSearch('');
                  setSelectedFacultyFilter('all');
                  setSelectedLevelFilter('All');
                }}
                className="text-xs text-red-600 hover:underline font-semibold"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#006dae] hover:shadow-xl transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-[#006dae]">
                      {prog.code} · {prog.level}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {prog.atarEntry}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#002b49] group-hover:text-[#006dae] transition-colors leading-snug">
                    {prog.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    {prog.faculty}
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {prog.overview}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-semibold text-slate-700">{prog.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Intake:</span>
                      <span className="font-semibold text-slate-700">{prog.intake.join(', ')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Intl Fee:</span>
                      <span className="font-bold text-[#006dae]">{prog.annualFeeInternational} / yr</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCourseDetail(prog)}
                    className="text-xs font-bold text-[#006dae] hover:text-[#002b49] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#admissions"
                    onClick={() => setApplicantProgram(prog.name)}
                    className="px-3 py-1.5 bg-[#002b49] hover:bg-[#006dae] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 9. COURSE DETAIL MODAL ----------------- */}
      {selectedCourseDetail && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-[#006dae]">
                  {selectedCourseDetail.code} · {selectedCourseDetail.level}
                </span>
                <h3 className="text-xl font-bold text-[#002b49] mt-2">
                  {selectedCourseDetail.name}
                </h3>
                <p className="text-xs text-slate-500">{selectedCourseDetail.faculty} · CRICOS: {selectedCourseDetail.cricosCode}</p>
              </div>
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1">Degree Overview</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCourseDetail.overview}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl">
                <div>
                  <span className="text-slate-400 block">Duration</span>
                  <span className="font-bold text-slate-800">{selectedCourseDetail.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Campus</span>
                  <span className="font-bold text-slate-800">{selectedCourseDetail.campus}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">ATAR Entry</span>
                  <span className="font-bold text-emerald-700">{selectedCourseDetail.atarEntry}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Domestic Fee (CSP)</span>
                  <span className="font-bold text-slate-800">{selectedCourseDetail.annualFeeDomestic}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">International Fee</span>
                  <span className="font-bold text-[#006dae]">{selectedCourseDetail.annualFeeInternational}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Accreditation</span>
                  <span className="font-bold text-slate-800">{selectedCourseDetail.accreditation}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">Key Core Units & Curriculum</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCourseDetail.keyUnits.map((u, i) => (
                    <span key={i} className="px-2.5 py-1 bg-sky-50 border border-sky-100 rounded-md text-slate-700 font-medium">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">Career Opportunities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCourseDetail.careerOutcomes.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => {
                  setApplicantProgram(selectedCourseDetail.name);
                  setSelectedCourseDetail(null);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#006dae] hover:bg-[#002b49] rounded-xl transition-colors"
              >
                Apply for this Degree
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- 10. GLOBAL CAMPUSES EXPLORER (8 CITIES) ----------------- */}
      <section id="campuses" className="py-16 px-4 sm:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                International Presence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Campuses Across 4 Continents
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Study in Australia, Southeast Asia, Europe, and India with seamless transfer credits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {cfg.campuses.map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => setActiveCampusId(camp.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                    activeCampusId === camp.id
                      ? 'bg-[#002b49] border-[#38bdf8] shadow-lg'
                      : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-white">{camp.name}</div>
                    <div className="text-xs text-[#38bdf8] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{camp.city}, {camp.country}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{camp.studentsCount}</span>
                </button>
              ))}
            </div>

            {/* Right Campus Showcase Card */}
            <div className="lg:col-span-7 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#006dae] text-white">
                  {selectedCampus.country} · {selectedCampus.city}
                </span>
                <span className="text-xs text-slate-400">{selectedCampus.studentsCount}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedCampus.name}
              </h3>
              <p className="text-xs text-slate-300 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{selectedCampus.address}</span>
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedCampus.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">Campus Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCampus.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700">
                <button
                  onClick={() => setVirtualTourOpen(true)}
                  className="px-4 py-2 bg-[#38bdf8] hover:bg-[#00a3e0] text-[#001829] font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>360° Virtual Walkthrough</span>
                </button>
                <a
                  href="#admissions"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  Campus Admissions Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 11. RESEARCH POWERHOUSE & WORLD CHALLENGES ----------------- */}
      <section id="research" className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
              Frontier Discovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1.5">
              Research with Global Impact
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              With $480M+ in annual research investment, our interdisciplinary teams solve humanity’s grandest challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cfg.researchInstitutes.map((inst) => (
              <div
                key={inst.id}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#10b981] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#10b981] uppercase tracking-wider mb-2">
                    {inst.focusArea}
                  </div>
                  <h3 className="font-bold text-base text-[#002b49] mb-2">
                    {inst.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    Director: {inst.director}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {inst.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-500">Major Breakthrough:</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{inst.breakthrough}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 12. SCHOLARSHIPS & FINANCIAL CALCULATOR ----------------- */}
      <section id="scholarships" className="py-16 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Calculator Tool */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006dae]">
                Merit & Equity Evaluation
              </span>
              <h3 className="text-2xl font-extrabold text-[#002b49] mt-1">
                Scholarship Assessment Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Estimate your eligible tuition waivers and grants for 2026 academic intakes.
              </p>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Citizenship Status</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcCitizenship('international')}
                      className={`py-2 px-3 rounded-lg font-bold border transition-all cursor-pointer ${
                        calcCitizenship === 'international'
                          ? 'bg-[#002b49] text-white border-[#002b49]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      International Student
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcCitizenship('domestic')}
                      className={`py-2 px-3 rounded-lg font-bold border transition-all cursor-pointer ${
                        calcCitizenship === 'domestic'
                          ? 'bg-[#002b49] text-white border-[#002b49]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Australian Citizen / PR
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Degree Level</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcStudyLevel('undergraduate')}
                      className={`py-2 px-3 rounded-lg font-semibold border transition-all cursor-pointer ${
                        calcStudyLevel === 'undergraduate'
                          ? 'bg-sky-50 text-[#006dae] border-[#006dae]'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Undergraduate (Bachelor)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcStudyLevel('postgraduate')}
                      className={`py-2 px-3 rounded-lg font-semibold border transition-all cursor-pointer ${
                        calcStudyLevel === 'postgraduate'
                          ? 'bg-sky-50 text-[#006dae] border-[#006dae]'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Postgraduate (Master/PhD)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-bold text-slate-700">
                      Academic Score: {calcCitizenship === 'domestic' ? `ATAR ${calcScore}` : `${calcScore}% Aggregate`}
                    </label>
                    <span className="font-mono font-bold text-[#006dae] text-sm">{calcScore}</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="99"
                    value={calcScore}
                    onChange={(e) => setCalcScore(Number(e.target.value))}
                    className="w-full accent-[#006dae] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>60% / Minimum</span>
                    <span>80% / Dist.</span>
                    <span>90% / High Dist.</span>
                    <span>99+ / Elite</span>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl mt-4">
                  <div className="text-[11px] font-bold text-[#006dae] uppercase tracking-wider">
                    Estimated Scholarship Match:
                  </div>
                  <div className="text-sm font-extrabold text-[#002b49] mt-1">
                    {calculateScholarshipEstimate()}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1.5">
                    Official scholarship award letters are issued along with your offer package upon verification of certified academic transcripts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Scholarships List */}
            <div className="lg:col-span-6 space-y-3.5">
              <h3 className="text-xl font-bold text-[#002b49] mb-4">
                Premier Scholarship Opportunities
              </h3>
              {cfg.scholarships.map((sch) => (
                <div
                  key={sch.id}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#006dae] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-[#002b49]">{sch.name}</h4>
                    <span className="text-xs font-mono font-bold text-[#f59e0b] shrink-0">{sch.value}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sch.eligibility}</p>
                  <div className="mt-2 text-[11px] text-slate-400 font-medium">
                    Application: <span className="text-slate-600">{sch.applications}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 13. ADMISSIONS APPLICATION DESK & TRACKING PORTAL ----------------- */}
      <section id="admissions" className="py-16 px-4 sm:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Application Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#002b49] text-white">
                  INTAKE 2026
                </span>
                <span className="text-xs font-semibold text-[#006dae]">Official Direct Admissions Desk</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#002b49]">
                Apply for Course Admission
              </h2>
              <p className="text-xs text-slate-600 mt-1 mb-6">
                Fast-track admissions for February and July 2026 intakes. Zero application fees when submitting directly.
              </p>

              {applicationSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-emerald-900">Application Submitted Successfully!</h4>
                      <p className="text-xs text-emerald-700">Official tracking reference generated below.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-emerald-100 font-mono text-xs space-y-1.5">
                    <div>Reference ID: <span className="font-bold text-emerald-800 text-sm">{applicationSubmitted.referenceId}</span></div>
                    <div>Applicant Name: <span className="font-semibold text-slate-800">{applicationSubmitted.name}</span></div>
                    <div>Applied Program: <span className="font-semibold text-slate-800">{applicationSubmitted.degree}</span></div>
                    <div>Requested Intake: <span className="font-semibold text-slate-800">{applicationSubmitted.intake}</span></div>
                    <div>Indicative Scholarship: <span className="font-bold text-[#006dae]">{applicationSubmitted.scholarshipEstimate}</span></div>
                    <div>Submission Date: <span className="text-slate-600">{applicationSubmitted.date}</span></div>
                  </div>

                  <p className="text-xs text-emerald-800">
                    Your application package has been logged with Edu Tech University Central Admissions. You can use your Reference ID in the tracking desk on the right to monitor your offer status.
                  </p>

                  <button
                    onClick={() => {
                      setApplicationSubmitted(null);
                      setApplicantName('');
                      setApplicantEmail('');
                      setApplicantPhone('');
                    }}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Liam Smith / Ananya Sharma"
                        className={`w-full px-3 py-2 rounded-lg bg-white border ${
                          formErrors.name ? 'border-red-500' : 'border-slate-200'
                        } outline-none focus:border-[#006dae]`}
                      />
                      {formErrors.name && <span className="text-[10px] text-red-600">{formErrors.name}</span>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="applicant@example.com"
                        className={`w-full px-3 py-2 rounded-lg bg-white border ${
                          formErrors.email ? 'border-red-500' : 'border-slate-200'
                        } outline-none focus:border-[#006dae]`}
                      />
                      {formErrors.email && <span className="text-[10px] text-red-600">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+61 400 000 000"
                        className={`w-full px-3 py-2 rounded-lg bg-white border ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-200'
                        } outline-none focus:border-[#006dae]`}
                      />
                      {formErrors.phone && <span className="text-[10px] text-red-600">{formErrors.phone}</span>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Citizenship</label>
                      <select
                        value={applicantCitizenship}
                        onChange={(e) => setApplicantCitizenship(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 outline-none focus:border-[#006dae]"
                      >
                        <option value="International">International Student</option>
                        <option value="Australian Citizen">Australian Citizen</option>
                        <option value="Australian PR / NZ">Australian PR / NZ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nationality / Country</label>
                      <input
                        type="text"
                        value={applicantCountry}
                        onChange={(e) => setApplicantCountry(e.target.value)}
                        placeholder="Country of passport"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 outline-none focus:border-[#006dae]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Select Program of Choice *</label>
                    <select
                      value={applicantProgram}
                      onChange={(e) => setApplicantProgram(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 outline-none focus:border-[#006dae] font-medium"
                    >
                      {cfg.programs.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.code} - {p.name} ({p.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Intended Intake *</label>
                      <select
                        value={applicantIntake}
                        onChange={(e) => setApplicantIntake(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 outline-none focus:border-[#006dae]"
                      >
                        <option value="Semester 1 (February 2026)">Semester 1 (February 2026 Intake)</option>
                        <option value="Semester 2 (July 2026)">Semester 2 (July 2026 Intake)</option>
                        <option value="Summer Term (November 2026)">Summer Term (November 2026)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Previous Academic Score (ATAR / %)</label>
                      <input
                        type="text"
                        value={applicantAcademicScore}
                        onChange={(e) => setApplicantAcademicScore(e.target.value)}
                        placeholder="e.g. 88% in Year 12 / GPA 3.7"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 outline-none focus:border-[#006dae]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#006dae] hover:bg-[#002b49] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Application for 2026</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Zero fee for direct online applications · Processed in 10-15 business days · CRICOS 00008C
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Application Status Tracking & International Concierge */}
            <div className="lg:col-span-5 space-y-6">
              {/* Application Tracking Lookup Card */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md">
                <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                  Track Your Admission
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Application Status Lookup
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Enter your reference ID to view real-time assessment status.
                </p>

                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={trackRefId}
                      onChange={(e) => setTrackRefId(e.target.value)}
                      placeholder="e.g. ETU-2026-847291"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 outline-none focus:border-[#38bdf8]"
                    />
                    <button
                      onClick={handleLookup}
                      className="px-4 py-2 bg-[#006dae] hover:bg-[#38bdf8] hover:text-[#001829] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Check
                    </button>
                  </div>

                  {trackStatusResult && (
                    <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700 text-xs text-slate-200 leading-relaxed font-mono animate-in fade-in">
                      {trackStatusResult}
                    </div>
                  )}
                </div>
              </div>

              {/* International Student Concierge Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-[#006dae]" />
                  <h4 className="font-bold text-sm text-[#002b49]">International Student Concierge</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Need help choosing a degree, understanding student visa (Subclass 500) compliance, or booking airport arrival reception? Our multilingual advisors are available.
                </p>

                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#006dae]" />
                    <span>Intl Line: {cfg.institution.phoneAdmissionsInternational}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#006dae]" />
                    <span>Domestic Toll-Free: {cfg.institution.phoneAdmissionsDomestic}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#006dae]" />
                    <span>{cfg.institution.emailContact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 14. VERIFIED ALUMNI & STUDENT STORIES ----------------- */}
      <section id="testimonials" className="py-16 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
              Global Career Voices
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1.5">
              Where Our Graduates Lead
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Over 440,000 alumni worldwide transforming healthcare, tech, law, science, and public policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfg.testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#f59e0b] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#002b49]">{test.name}</div>
                    <div className="text-[11px] font-semibold text-[#006dae]">{test.currentRole}</div>
                    <div className="text-[10px] text-slate-400">{test.company} · {test.degree}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 15. EXPANDABLE FAQS ACCORDION ----------------- */}
      <section id="faqs" className="py-16 px-4 sm:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006dae]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-1">
              Admissions, Visas & Academic Guidance
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs">
            {['All', 'Admissions', 'International', 'Scholarships', 'Campus Life', 'Research'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  faqCategory === cat
                    ? 'bg-[#002b49] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#002b49] hover:text-[#006dae] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      expandedFaqIndex === idx ? 'rotate-180 text-[#006dae]' : ''
                    }`}
                  />
                </button>
                {expandedFaqIndex === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 16. VIRTUAL TOUR 360° SIMULATOR MODAL ----------------- */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#38bdf8]" />
                <h3 className="font-bold text-base text-white">360° Virtual Campus Experience</h3>
              </div>
              <button
                onClick={() => setVirtualTourOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-slate-800">
                <img
                  src="/assets/edu-tech-university/campus-hero-1.jpg"
                  alt="Virtual Campus Walkthrough"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase">Now Viewing</span>
                  <h4 className="text-xl font-bold text-white">{tourLocation}</h4>
                  <p className="text-xs text-slate-300 max-w-lg mt-1">
                    Equipped with advanced spatial acoustics, interactive presentation screens, and collaborative design clusters.
                  </p>
                </div>
              </div>

              {/* Location tabs */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  'Clayton Learning Precinct',
                  'MADA 3D Maker Space',
                  'Parkville Chemistry Labs',
                  'Robert Blackwood Hall',
                  'Olympic Sports Pavilion',
                  'Sunway Malaysia Campus'
                ].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setTourLocation(loc)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                      tourLocation === loc
                        ? 'bg-[#006dae] text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- 17. COMPREHENSIVE INSTITUTIONAL FOOTER ----------------- */}
      <footer className="bg-[#001829] text-white pt-14 pb-8 px-4 sm:px-8 border-t border-[#0f3456]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1: Institutional Identity */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src="/assets/edu-tech-university/logo-white.svg"
                alt="EDU TECH UNIVERSITY"
                className="h-12 w-auto object-contain"
              />
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Edu Tech University is a member of Australia's prestigious Group of Eight (Go8), ranked among the top 40 universities in the world. Committed to advancing education, research, and global innovation.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <div>CRICOS Provider Code: <span className="text-[#38bdf8] font-mono">{cfg.institution.cricosProviderCode}</span></div>
                <div>TEQSA Provider ID: <span className="text-[#38bdf8] font-mono">{cfg.institution.teqsaProviderId}</span></div>
                <div>ABN: <span className="text-slate-300 font-mono">{cfg.institution.australianBusinessNumber}</span></div>
              </div>
            </div>

            {/* Column 2: Quick Study Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">Study at ETU</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#courses" className="hover:text-white transition-colors">Find a Course</a></li>
                <li><a href="#admissions" className="hover:text-white transition-colors">How to Apply (2026)</a></li>
                <li><a href="#scholarships" className="hover:text-white transition-colors">Scholarship Calculator</a></li>
                <li><a href="#admissions" className="hover:text-white transition-colors">International Students</a></li>
                <li><a href="#campuses" className="hover:text-white transition-colors">Campus Accommodation</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Double Degrees</a></li>
              </ul>
            </div>

            {/* Column 3: Academic Faculties */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">Faculties</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#faculties" className="hover:text-white transition-colors">Engineering</a></li>
                <li><a href="#faculties" className="hover:text-white transition-colors">Information Technology</a></li>
                <li><a href="#faculties" className="hover:text-white transition-colors">Monash Business School</a></li>
                <li><a href="#faculties" className="hover:text-white transition-colors">Medicine, Nursing & Health</a></li>
                <li><a href="#faculties" className="hover:text-white transition-colors">Pharmacy & Pharma Science</a></li>
                <li><a href="#faculties" className="hover:text-white transition-colors">Faculty of Law</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Emergency */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">Contact & Locations</h4>
              <div className="text-xs text-slate-300 space-y-2">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <span>Wellington Rd, Clayton VIC 3800, Australia</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Domestic: {cfg.institution.phoneAdmissionsDomestic}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Intl: {cfg.institution.phoneAdmissionsInternational}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>{cfg.institution.emailContact}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgement of Country & Copyright */}
          <div className="pt-8 border-t border-[#0f3456] space-y-3 text-[11px] text-slate-400">
            <p className="leading-relaxed">
              <strong className="text-slate-300">Acknowledgement of Country:</strong> Edu Tech University acknowledges the Traditional Custodians of the lands on which our campuses and properties reside, and we pay our respects to their Elders past, present and emerging.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <div>
                © 2026 EDU TECH UNIVERSITY. All rights reserved. Authorised by Chief Marketing Officer.
              </div>
              <div className="flex gap-4">
                <a href="#home" className="hover:text-white">Privacy</a>
                <a href="#home" className="hover:text-white">Terms of Use</a>
                <a href="#home" className="hover:text-white">Accessibility</a>
                <a href="#home" className="hover:text-white">Safety & Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
