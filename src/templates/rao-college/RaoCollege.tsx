import React, { useState, useEffect } from 'react';
import {
  RAO_COLLEGE_CONFIG,
  CollegeProgram,
  CollegeFacility,
  CollegeEvent,
  TestimonialItem,
  FacultyMember
} from './rao-college.config';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Building2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Menu,
  X,
  CheckCircle2,
  ArrowRight,
  Compass,
  Briefcase,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  FileText,
  HelpCircle,
  Laptop,
  Trophy,
  ChevronDown
} from 'lucide-react';

export default function RaoCollege() {
  const {
    brand,
    logos,
    heroSlides,
    statistics,
    about,
    programs,
    facilities,
    events,
    testimonials,
    facultyMembers,
    placements,
    admissionSteps,
    faqs
  } = RAO_COLLEGE_CONFIG;

  // Hero Slider State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Mobile Navigation Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Course Filter State
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('all');
  const [activeProgramModal, setActiveProgramModal] = useState<CollegeProgram | null>(null);

  // Facility & Event Modal States
  const [activeFacilityModal, setActiveFacilityModal] = useState<CollegeFacility | null>(null);
  const [activeEventModal, setActiveEventModal] = useState<CollegeEvent | null>(null);

  // Site-wide Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Admissions Form State
  const [admissionsForm, setAdmissionsForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'bca',
    qualification: '12th Appearing/Passed',
    city: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Recruiter Enquiry Modal State
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Auto-play hero carousel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  // Filtered Programs
  const filteredPrograms = programs.filter((p) => {
    if (selectedCourseFilter === 'all') return true;
    if (selectedCourseFilter === 'it') return p.department.includes('Computer');
    if (selectedCourseFilter === 'management') return p.department.includes('Management') || p.code === 'MBA';
    if (selectedCourseFilter === 'commerce') return p.department.includes('Commerce');
    if (selectedCourseFilter === 'media-science') return p.department.includes('Media') || p.department.includes('Applied');
    return true;
  });

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
    if (!admissionsForm.city.trim()) errors.city = 'Please enter your current city';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  // Search Results
  const searchResults = searchQuery.trim()
    ? [
        ...programs.filter(
          (p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.code.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((p) => ({
          type: 'Academic Programme',
          title: `${p.code} — ${p.title}`,
          desc: p.description,
          action: () => setActiveProgramModal(p)
        })),
        ...facilities.filter(
          (f) =>
            f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((f) => ({
          type: 'Campus Facility',
          title: f.title,
          desc: f.description,
          action: () => setActiveFacilityModal(f)
        })),
        ...events.filter(
          (e) =>
            e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.summary.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((e) => ({
          type: 'News & Event',
          title: e.title,
          desc: e.summary,
          action: () => setActiveEventModal(e)
        }))
      ]
    : [];

  return (
    <div className="rao-college-demo min-h-screen font-sans bg-[#FFFFFF] text-[#1E293B] antialiased selection:bg-[#002244] selection:text-[#F59E0B]">
      {/* =========================================================================
          TOP UTILITY & HELPLINE BAR
          ========================================================================= */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Sparkles size={13} />
              <span>Admissions Open for Batch 2026–27</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Phone size={12} className="text-amber-400" />
              <span>Helpline: {brand.helplinePhone}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <span>Toll-Free: {brand.tollFree}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Search size={13} />
              <span>Search Programmes</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="#contact"
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Campus Visit
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setIsRecruiterModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
            >
              For Recruiters
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN NAVIGATION HEADER
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-hidden">
              <img
                src={logos.main}
                alt="RAO COLLEGE Emblem & Brand"
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-101"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
              <a href="#home" className="hover:text-[#002244] transition-colors py-2">
                Home
              </a>
              <a href="#about" className="hover:text-[#002244] transition-colors py-2">
                About Us
              </a>
              <a href="#programs" className="hover:text-[#002244] transition-colors py-2">
                Programmes
              </a>
              <a href="#admissions" className="hover:text-[#002244] transition-colors py-2">
                Admissions
              </a>
              <a href="#facilities" className="hover:text-[#002244] transition-colors py-2">
                Campus Life
              </a>
              <a href="#placements" className="hover:text-[#002244] transition-colors py-2">
                Placements
              </a>
              <a href="#events" className="hover:text-[#002244] transition-colors py-2">
                Events
              </a>
              <a href="#contact" className="hover:text-[#002244] transition-colors py-2">
                Contact
              </a>
            </nav>

            {/* Action Buttons & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <a
                href="#admissions"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider rounded-xs border-b-2 border-amber-500 shadow-sm transition-all"
              >
                <GraduationCap size={15} className="text-amber-400" />
                <span>Apply Online</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#0A192F] focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A192F] text-white px-4 pt-3 pb-6 border-t border-slate-800 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                About Us
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Programmes
              </a>
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Admissions
              </a>
              <a
                href="#facilities"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Campus Life
              </a>
              <a
                href="#placements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Placements
              </a>
              <a
                href="#events"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                News & Events
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                Contact Us
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-bold text-xs uppercase tracking-wider rounded-xs"
              >
                Apply Online 2026–27
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full py-2 bg-slate-800 text-slate-200 text-xs text-center rounded flex items-center justify-center gap-1.5"
              >
                <Search size={14} /> Search Programmes & Topics
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO BANNER CAROUSEL
          ========================================================================= */}
      <section id="home" className="relative bg-[#0A192F] text-white overflow-hidden">
        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Photo */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-transparent" />
                <div className="absolute inset-0 bg-radial from-transparent to-[#0A192F]/60" />
              </div>

              {/* Overlay Content */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-24">
                <div className="max-w-2xl space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-widest uppercase rounded-xs backdrop-blur-xs">
                    <Sparkles size={14} />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md font-serif">
                    {slide.headline}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-xs">
                    {slide.subheadline}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <a
                      href="#programs"
                      className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xs shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <span>{slide.primaryCta}</span>
                      <ArrowRight size={16} />
                    </a>
                    <a
                      href="#admissions"
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xs border border-white/20 backdrop-blur-xs transition-colors flex items-center gap-2"
                    >
                      <GraduationCap size={16} />
                      <span>{slide.secondaryCta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
              }
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              title="Previous slide"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2 transition-all rounded-full ${
                  i === currentSlideIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                title={`Go to slide ${i + 1}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS / INSTITUTIONAL METRICS
          ========================================================================= */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {statistics.map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT RAO COLLEGE
          ========================================================================= */}
      <section id="about" className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story & Vision */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-xs">
                <Building2 size={14} className="text-amber-600" />
                <span>Institutional Profile</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif">
                {about.subtitle}
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {about.description}
              </p>

              <div className="p-4 bg-white rounded-xs border-l-4 border-amber-500 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900">
                  Illustrative Institutional Showcase
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {brand.affiliationNote}. Program catalogues, regulatory endorsements, and fee disclosures can be updated seamlessly for production deployment.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#programs"
                  className="px-6 py-3 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  <span>Explore Academic Catalog</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xs border border-slate-300 transition-colors"
                >
                  Contact Admissions Office
                </a>
              </div>
            </div>

            {/* Right Column: 4 Core Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-xs border border-slate-200 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0A192F] font-bold text-sm mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#003366]">
                    <span>Learn More</span>
                    <ChevronRight size={12} className="ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACADEMIC PROGRAMMES (COURSES)
          ========================================================================= */}
      <section id="programs" className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider rounded-xs">
                <BookOpen size={14} className="text-blue-700" />
                <span>Curriculum & Degrees</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif mt-2">
                Academic Programmes
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Industry-crafted undergraduate and postgraduate qualifications designed for real-world impact.
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {[
                { id: 'all', label: 'All Courses' },
                { id: 'it', label: 'Computer & IT' },
                { id: 'management', label: 'Management' },
                { id: 'commerce', label: 'Commerce' },
                { id: 'media-science', label: 'Media & Science' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCourseFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xs font-semibold transition-colors cursor-pointer ${
                    selectedCourseFilter === tab.id
                      ? 'bg-[#0A192F] text-amber-400 shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-slate-50 hover:bg-white rounded-xs border border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                    <span className="font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {prog.code}
                    </span>
                    <span className="text-slate-500 font-medium">{prog.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#002244] transition-colors mt-3 mb-1">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">{prog.department}</div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Curriculum Highlights:
                    </div>
                    {prog.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Eligibility: </span>
                    {prog.eligibility}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setActiveProgramModal(prog)}
                      className="flex-1 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xs text-xs font-bold transition-colors"
                    >
                      View Syllabus & Career
                    </button>
                    <a
                      href="#admissions"
                      onClick={() => setAdmissionsForm((prev) => ({ ...prev, program: prog.id }))}
                      className="py-2 px-3 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold rounded-xs transition-colors"
                      title="Apply for this course"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSIONS & ONLINE ENQUIRY FORM
          ========================================================================= */}
      <section id="admissions" className="py-16 md:py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xs">
              <GraduationCap size={15} />
              <span>Session 2026–27</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif mt-2">
              Admissions Process & Application Desk
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Follow our straightforward four-step roadmap to start your higher education journey at RAO COLLEGE.
            </p>
          </div>

          {/* 4 Step Roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {admissionSteps.map((st) => (
              <div
                key={st.step}
                className="p-5 bg-white/5 rounded-xs border border-white/10 hover:border-amber-400/50 transition-colors space-y-2"
              >
                <div className="text-2xl font-extrabold font-mono text-amber-400">{st.step}</div>
                <h3 className="text-sm font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Application Form Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-xs text-slate-900 shadow-2xl p-6 sm:p-10 border border-slate-200">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#0A192F] font-serif">
                Direct Admission Enquiry Form
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your credentials to receive the complete course prospectus, fee schedule, and scholarship eligibility guidance.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  Application Enquiry Submitted Successfully!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{admissionsForm.fullName}</strong>. Your enquiry for <strong>{admissionsForm.program.toUpperCase()}</strong> has been recorded under Application Ref: <strong>RAO-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our admissions counselor will contact you at <strong>{admissionsForm.phone}</strong> shortly.
                </p>
                <div className="text-[11px] text-slate-500 pt-2">
                  *This is a demonstration interaction. No personal data was transferred externally.
                </div>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setAdmissionsForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      program: 'bca',
                      qualification: '12th Appearing/Passed',
                      city: '',
                      message: ''
                    });
                  }}
                  className="mt-3 px-5 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleAdmissionsSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      value={admissionsForm.fullName}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, fullName: e.target.value })}
                      placeholder="e.g. Siddharth Rao"
                      className={`w-full px-3 py-2 text-xs border rounded focus:outline-hidden focus:border-[#0A192F] ${
                        formErrors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[10px] text-red-600 mt-0.5">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={admissionsForm.email}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, email: e.target.value })}
                      placeholder="siddharth@example.com"
                      className={`w-full px-3 py-2 text-xs border rounded focus:outline-hidden focus:border-[#0A192F] ${
                        formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-600 mt-0.5">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      value={admissionsForm.phone}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3 py-2 text-xs border rounded focus:outline-hidden focus:border-[#0A192F] ${
                        formErrors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-600 mt-0.5">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Program of Choice *
                    </label>
                    <select
                      value={admissionsForm.program}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, program: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-hidden focus:border-[#0A192F] bg-white"
                    >
                      <option value="bca">BCA — Computer Applications (3 Yrs)</option>
                      <option value="bba">BBA — Business Administration (3 Yrs)</option>
                      <option value="bcom">B.Com (Hons) — Finance & FinTech (3 Yrs)</option>
                      <option value="ba-jmc">BA (JMC) — Media & Journalism (3 Yrs)</option>
                      <option value="bsc-ds">B.Sc. — Data Science & AI (3 Yrs)</option>
                      <option value="mba">MBA — Master of Business Administration (2 Yrs)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Academic Level
                    </label>
                    <select
                      value={admissionsForm.qualification}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, qualification: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-hidden focus:border-[#0A192F] bg-white"
                    >
                      <option value="12th Appearing/Passed">10+2 / High School (Appearing or Passed)</option>
                      <option value="Graduate">Graduation / Bachelor Degree Holder</option>
                      <option value="Diploma">Polytechnic / Vocational Diploma</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City & State *
                    </label>
                    <input
                      type="text"
                      value={admissionsForm.city}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, city: e.target.value })}
                      placeholder="e.g. Noida / New Delhi"
                      className={`w-full px-3 py-2 text-xs border rounded focus:outline-hidden focus:border-[#0A192F] ${
                        formErrors.city ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.city && (
                      <p className="text-[10px] text-red-600 mt-0.5">{formErrors.city}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Career Goals or Query (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={admissionsForm.message}
                    onChange={(e) => setAdmissionsForm({ ...admissionsForm, message: e.target.value })}
                    placeholder="Ask about scholarship brackets, hostel availability, or syllabus modules..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-hidden focus:border-[#0A192F]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    *Admissions Helpline: 1800 102 8800 (Toll Free)
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider rounded-xs border-b-2 border-amber-500 transition-colors"
                  >
                    Submit Application Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES & INFRASTRUCTURE
          ========================================================================= */}
      <section id="facilities" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-xs">
              <Building2 size={14} className="text-amber-600" />
              <span>Campus Life & Amenities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif mt-2">
              World-Class Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Designed to stimulate creative collaboration, research experimentation, and healthy campus living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setActiveFacilityModal(fac)}
                className="bg-slate-50 rounded-xs border border-slate-200 hover:border-amber-500 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider rounded-xs">
                      {fac.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#002244] transition-colors mb-2">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {fac.description}
                    </p>

                    <div className="space-y-1">
                      {fac.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 size={12} className="text-amber-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#002244]">
                  <span>Facility Highlights</span>
                  <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAREER ADVANCEMENT & PLACEMENTS
          ========================================================================= */}
      <section id="placements" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Placement Overview */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-xs">
                <Briefcase size={14} className="text-emerald-700" />
                <span>Corporate Resource Cell</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif">
                Career Guidance, Internships & Corporate Placements
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {placements.overview}
              </p>

              <div className="space-y-2 pt-2">
                {placements.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => setIsRecruiterModalOpen(true)}
                  className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Invite College for Recruitment
                </button>
                <a
                  href="#programs"
                  className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-xs hover:bg-slate-50 transition-colors"
                >
                  View Skill Curriculum
                </a>
              </div>
            </div>

            {/* Right: Sector Partnerships */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-200 flex items-center justify-between">
                <span>Leading Sectors & Recruiter Presence</span>
                <span className="text-xs font-normal text-slate-500">Illustrative Campus Drives</span>
              </h3>

              <div className="space-y-4">
                {placements.recruitersCategories.map((cat, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <div className="text-xs font-bold text-[#0A192F]">{cat.sector}</div>
                    <div className="text-xs text-slate-600 mt-1 font-mono">{cat.partners}</div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                *Representative list of past corporate recruiters. All trademarks and brand names belong to their respective corporate owners.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDENT VOICES & TESTIMONIALS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-xs">
              <Users size={14} className="text-amber-600" />
              <span>Student & Alumni Voices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif mt-2">
              Inspiring Stories of Growth
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Hear from graduates who transformed their ambition into professional achievement at RAO COLLEGE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-slate-50 rounded-xs border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <div className="text-xs text-slate-500 font-medium">{item.program}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-[#003366]">
                  {item.currentRole}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEWS, EVENTS & ACHIEVEMENTS
          ========================================================================= */}
      <section id="events" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-xs">
                <Calendar size={14} className="text-amber-600" />
                <span>Happenings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-serif mt-2">
                News, Conclaves & Campus Events
              </h2>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-[#003366] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Subscribe to College Newsletter</span>
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((ev) => (
              <div
                key={ev.id}
                onClick={() => setActiveEventModal(ev)}
                className="bg-white rounded-xs border border-slate-200 hover:border-amber-500 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/65 text-white text-[10px] font-bold uppercase rounded-xs">
                      {ev.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="text-[11px] font-semibold text-amber-600 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{ev.date}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#002244] line-clamp-2 leading-snug">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {ev.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#003366] font-semibold">
                  <span>View Details</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Student Achievements Banner */}
          <div className="mt-10 p-6 bg-white rounded-xs border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6">
            {RAO_COLLEGE_CONFIG.studentAchievements.map((ach, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="w-20 h-20 rounded object-cover shrink-0 border border-slate-200"
                />
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1">
                    <Trophy size={13} />
                    <span>{ach.category}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{ach.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACULTY & ACADEMIC LEADERSHIP
          ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif">
              Faculty & Academic Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Sample profiles illustrating our accomplished pedagogical mentors and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((fac) => (
              <div
                key={fac.id}
                className="p-5 bg-slate-50 rounded-xs border border-slate-200 space-y-2 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0A192F] text-amber-400 font-serif font-bold text-lg flex items-center justify-center mx-auto shadow-xs">
                  {fac.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{fac.name}</h3>
                <div className="text-xs text-slate-600 font-medium">{fac.designation}</div>
                <div className="text-[11px] text-slate-500 font-mono">{fac.qualification}</div>
                <div className="text-[11px] text-slate-600 pt-2 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Expertise: </span>
                  {fac.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Common queries regarding eligibility, scholarship assistance, and student life.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left text-sm font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform text-slate-500 ${
                      expandedFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaqIndex === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT & CAMPUS DIRECTORY
          ========================================================================= */}
      <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-xs">
                <MapPin size={14} className="text-amber-600" />
                <span>Visit & Connect</span>
              </div>

              <h2 className="text-3xl font-extrabold text-[#0A192F] font-serif">
                Campus Location & Admissions Directory
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                We invite students, parents, and academic counselors to visit our sprawling knowledge campus, experience our laboratories, and meet faculty mentors.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-3">
                  <MapPin size={18} className="text-[#002244] shrink-0 mt-0.5" />
                  <div>
                    <strong>Campus Address:</strong>
                    <div className="text-slate-600 mt-0.5">{brand.campusAddress}</div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-3">
                  <Phone size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Admissions Tele-Helpdesk:</strong>
                    <div className="text-slate-600 mt-0.5">
                      {brand.helplinePhone} · Toll-Free: {brand.tollFree}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-3">
                  <Mail size={18} className="text-[#002244] shrink-0 mt-0.5" />
                  <div>
                    <strong>Official Emails:</strong>
                    <div className="text-slate-600 mt-0.5">
                      {brand.admissionsEmail} · {brand.generalEmail}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-3">
                  <Clock size={18} className="text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Campus Visiting Hours:</strong>
                    <div className="text-slate-600 mt-0.5">{brand.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form & Campus Map Placeholder */}
            <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-xs border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                Send a Message to College Administration
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1">Subject / Query Topic</label>
                <input
                  type="text"
                  placeholder="e.g. Schedule weekend campus tour / Hostel inquiry"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded"
                />
              </div>

              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Provide your specific query..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">
                  Direct counseling inquiries: admissions@raocollege.edu.in
                </span>
                <button
                  onClick={() => alert('Thank you for contacting RAO COLLEGE. Our admissions team will respond shortly.')}
                  className="px-6 py-2.5 bg-[#0A192F] hover:bg-[#002244] text-white font-bold text-xs rounded uppercase tracking-wider transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTITUTIONAL FOOTER
          ========================================================================= */}
      <footer className="bg-[#0A192F] text-slate-300 pt-14 pb-8 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
            {/* Col 1: Brand Wordmark */}
            <div className="lg:col-span-4 space-y-4">
              <img
                src={logos.light}
                alt="RAO COLLEGE Logo"
                className="h-12 w-auto object-contain"
              />
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Empowering scholars with comprehensive education, analytical rigor, and ethical leadership to build resilient careers and create lasting societal value.
              </p>
              <div className="text-xs text-amber-400 font-semibold font-serif">
                "{brand.tagline}"
              </div>
            </div>

            {/* Col 2: Academic Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                Degree Programmes
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {programs.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => setActiveProgramModal(p)}
                      className="hover:text-amber-400 transition-colors text-left"
                    >
                      {p.code} — {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-white">About College</a></li>
                <li><a href="#admissions" className="hover:text-white">Admissions 2026</a></li>
                <li><a href="#facilities" className="hover:text-white">Campus Facilities</a></li>
                <li><a href="#placements" className="hover:text-white">Placement Cell</a></li>
                <li><a href="#events" className="hover:text-white">Events Calendar</a></li>
                <li><a href="#contact" className="hover:text-white">Contact & Map</a></li>
              </ul>
            </div>

            {/* Col 4: Admissions Helpline */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                Admissions Cell
              </h4>
              <div className="text-xs text-slate-400 space-y-2">
                <div>Phone: {brand.helplinePhone}</div>
                <div>Toll-Free: {brand.tollFree}</div>
                <div>Email: {brand.admissionsEmail}</div>
                <div>Hours: {brand.workingHours}</div>
              </div>
              <div className="pt-2">
                <a
                  href="#admissions"
                  className="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xs"
                >
                  Apply Online
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Notice */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>
              © {new Date().getFullYear()} {brand.name}. Learn Today. Lead Tomorrow. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Admission</span>
              <span>AI Studio Demo Showcase</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          PROGRAMME DETAILS MODAL
          ========================================================================= */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  {activeProgramModal.code}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {activeProgramModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProgramModal(null)}
                className="p-1 text-slate-400 hover:text-black"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Department:</span>
                <span>{activeProgramModal.department}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Duration:</span>
                <span>{activeProgramModal.duration}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Degree Level:</span>
                <span>{activeProgramModal.degree}</span>
              </div>
              <div className="py-1.5 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Eligibility Criteria:</span>
                <p className="mt-0.5 text-slate-600">{activeProgramModal.eligibility}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Key Curriculum Modules:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeProgramModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 bg-slate-50 rounded border border-slate-200">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Career Pathways & Typical Roles:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeProgramModal.careerRoles.map((role, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-blue-50 text-[#002244] border border-blue-200 rounded font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 font-medium">
                {activeProgramModal.annualFeeNote}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveProgramModal(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded"
                >
                  Close
                </button>
                <a
                  href="#admissions"
                  onClick={() => {
                    setActiveProgramModal(null);
                    setAdmissionsForm((prev) => ({ ...prev, program: activeProgramModal.id }));
                  }}
                  className="px-5 py-2 bg-[#0A192F] hover:bg-[#002244] text-white text-xs font-bold rounded uppercase tracking-wider"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          FACILITY DETAILS MODAL
          ========================================================================= */}
      {activeFacilityModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-xl w-full max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={activeFacilityModal.image}
                alt={activeFacilityModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveFacilityModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black"
                title="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase rounded-xs">
                {activeFacilityModal.category}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#0A192F] font-serif">
                {activeFacilityModal.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeFacilityModal.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Specifications:
                </h4>
                {activeFacilityModal.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveFacilityModal(null)}
                  className="px-5 py-2 bg-[#0A192F] text-white text-xs font-bold rounded"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EVENT DETAILS MODAL
          ========================================================================= */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-xl w-full max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={activeEventModal.image}
                alt={activeEventModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveEventModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black"
                title="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase rounded-xs">
                {activeEventModal.category}
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="text-xs font-semibold text-amber-600 flex items-center gap-1.5">
                <Calendar size={13} />
                <span>{activeEventModal.date}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{activeEventModal.venue}</span>
              </div>

              <h3 className="text-lg font-bold text-[#0A192F] font-serif leading-snug">
                {activeEventModal.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeEventModal.summary}
              </p>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveEventModal(null)}
                  className="px-5 py-2 bg-[#0A192F] text-white text-xs font-bold rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          RECRUITER ENQUIRY MODAL
          ========================================================================= */}
      {isRecruiterModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-lg w-full text-slate-900 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Briefcase size={20} className="text-[#0A192F]" />
                <h3 className="text-lg font-bold text-[#0A192F] font-serif">
                  Corporate Recruiter Engagement
                </h3>
              </div>
              <button
                onClick={() => setIsRecruiterModalOpen(false)}
                className="text-slate-400 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Partner with the Corporate Resource Cell at RAO COLLEGE to recruit job-ready graduates across computer science, business management, commerce, and media.
            </p>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-800">Placement Office Contact:</div>
              <div>Head of Corporate Relations: Dr. P. K. Singhal</div>
              <div>Direct Desk: +91 11 4050 8820</div>
              <div>Corporate Email: {brand.placementEmail}</div>
            </div>

            <div className="pt-2 flex justify-end gap-2 text-xs">
              <button
                onClick={() => setIsRecruiterModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Thank you for your interest. Please send the recruitment invite to ${brand.placementEmail}`);
                  setIsRecruiterModalOpen(false);
                }}
                className="px-4 py-2 bg-[#0A192F] hover:bg-[#002244] text-white font-bold rounded"
              >
                Send Placement Drive Invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIVE SITE-WIDE SEARCH MODAL
          ========================================================================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-20 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-2xl w-full text-slate-900 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-700">
                <Search size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Search RAO COLLEGE</span>
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="text-slate-400 hover:text-black">
                <X size={18} />
              </button>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes (BCA, MBA, BBA), laboratories, admissions, or placements..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-sm focus:outline-hidden focus:border-[#0A192F]"
              autoFocus
            />

            <div className="max-h-72 overflow-y-auto space-y-2 pt-2">
              {searchQuery.trim() === '' ? (
                <div className="text-xs text-slate-500 py-4 text-center">
                  Try searching: <span className="font-semibold text-amber-600">BCA</span>, <span className="font-semibold text-amber-600">MBA</span>, <span className="font-semibold text-amber-600">Hostel</span>, or <span className="font-semibold text-amber-600">Convocation</span>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-xs text-slate-500 py-6 text-center">
                  No matching items found for "{searchQuery}".
                </div>
              ) : (
                searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setIsSearchOpen(false);
                      res.action();
                    }}
                    className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase text-amber-600">
                      <span>{res.type}</span>
                      <ArrowRight size={12} />
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">{res.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{res.desc}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
