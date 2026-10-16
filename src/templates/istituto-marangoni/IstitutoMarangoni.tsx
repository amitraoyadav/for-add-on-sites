import React, { useState, useEffect, useMemo } from 'react';
import {
  MARANGONI_CONFIG,
  MarangoniCourse,
  MarangoniCampus,
  MarangoniMentor,
  MarangoniNewsItem,
  MarangoniFaq
} from './istituto-marangoni.config';
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
  DollarSign,
  Palette,
  Scissors,
  Sparkle,
  Compass as CompassIcon,
  Play,
  Pause
} from 'lucide-react';

export default function IstitutoMarangoni() {
  const {
    brand,
    logos,
    heroSlides,
    macroAreas,
    courses,
    campuses,
    superMentors,
    recruiters,
    news,
    faqs
  } = MARANGONI_CONFIG;

  // Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Macro Area Active State
  const [selectedMacroArea, setSelectedMacroArea] = useState<'fashion' | 'design' | 'art' | 'fragrances'>('fashion');

  // Course Filter & Search
  const [selectedCourseLevel, setSelectedCourseLevel] = useState<string>('all');
  const [selectedCourseMacro, setSelectedCourseMacro] = useState<string>('all');
  const [selectedCourseCampus, setSelectedCourseCampus] = useState<string>('all');
  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState<MarangoniCourse | null>(null);

  // Campus Explorer Active State
  const [selectedCampusId, setSelectedCampusId] = useState<string>('milano-fashion');
  const activeCampus = useMemo(() => {
    return campuses.find(c => c.id === selectedCampusId) || campuses[0];
  }, [selectedCampusId, campuses]);

  // Super Mentor Modal
  const [activeMentorModal, setActiveMentorModal] = useState<MarangoniMentor | null>(null);

  // News Modal
  const [activeNewsModal, setActiveNewsModal] = useState<MarangoniNewsItem | null>(null);

  // Global Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Brochure Modal State
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  // Scholarship Calculator State
  const [calcLevel, setCalcLevel] = useState<'undergraduate' | 'postgraduate'>('undergraduate');
  const [calcScoreTier, setCalcScoreTier] = useState<number>(3); // 1 = 15%, 2 = 30%, 3 = 50%

  // Admissions Application Form State
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: 'Milano Fashion',
    programLevel: 'Postgraduate Master (1-Year)',
    macroArea: 'Fashion Design',
    intake: 'October 2026',
    portfolioUrl: '',
    statement: '',
    citizenship: 'International / Non-EU'
  });
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [appReferenceNumber, setAppReferenceNumber] = useState('');
  const [appErrors, setAppErrors] = useState<{ [key: string]: string }>({});

  // Recruiter Sector Filter
  const [recruiterFilter, setRecruiterFilter] = useState<string>('all');

  // FAQ Active Category
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Hero Autoplay Effect
  useEffect(() => {
    if (!isHeroPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHeroPlaying, heroSlides.length]);

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchLevel = selectedCourseLevel === 'all' || course.level === selectedCourseLevel;
      const matchMacro = selectedCourseMacro === 'all' || course.macroArea === selectedCourseMacro;
      const matchCampus = selectedCourseCampus === 'all' || course.campuses.some(c => c.toLowerCase().includes(selectedCourseCampus.toLowerCase()));
      const matchQuery =
        !courseSearchQuery.trim() ||
        course.title.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.campuses.some(c => c.toLowerCase().includes(courseSearchQuery.toLowerCase()));
      return matchLevel && matchMacro && matchCampus && matchQuery;
    });
  }, [courses, selectedCourseLevel, selectedCourseMacro, selectedCourseCampus, courseSearchQuery]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (activeFaqCategory === 'all') return faqs;
    return faqs.filter(f => f.category === activeFaqCategory);
  }, [faqs, activeFaqCategory]);

  // Filtered Recruiters
  const filteredRecruiters = useMemo(() => {
    if (recruiterFilter === 'all') return recruiters;
    return recruiters.filter(r => r.category.toLowerCase().includes(recruiterFilter.toLowerCase()));
  }, [recruiters, recruiterFilter]);

  // Global Search Results
  const globalSearchResults = useMemo(() => {
    if (!globalSearchQuery.trim()) return { courses: [] as MarangoniCourse[], campuses: [] as MarangoniCampus[], mentors: [] as MarangoniMentor[], news: [] as MarangoniNewsItem[] };
    const q = globalSearchQuery.toLowerCase();
    const courseMatches = courses.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    const campusMatches = campuses.filter(c => c.title.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) || c.specialization.toLowerCase().includes(q));
    const mentorMatches = superMentors.filter(m => m.name.toLowerCase().includes(q) || m.house.toLowerCase().includes(q) || m.role.toLowerCase().includes(q));
    const newsMatches = news.filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q));
    return {
      courses: courseMatches,
      campuses: campusMatches,
      mentors: mentorMatches,
      news: newsMatches
    };
  }, [globalSearchQuery, courses, campuses, superMentors, news]);

  // Handle Application Submit
  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!appForm.fullName.trim()) errors.fullName = 'Please enter your full legal name';
    if (!appForm.email.trim() || !appForm.email.includes('@')) errors.email = 'Valid email is required';
    if (!appForm.phone.trim()) errors.phone = 'Phone number with country code is required';

    if (Object.keys(errors).length > 0) {
      setAppErrors(errors);
      return;
    }

    setAppErrors({});
    const randomRef = 'IM-2026-' + Math.floor(100000 + Math.random() * 900000);
    setAppReferenceNumber(randomRef);
    setAppSubmitted(true);
  };

  // Scholarship calculation
  const scholarshipAmount = useMemo(() => {
    const baseFee = calcLevel === 'undergraduate' ? 26500 : 33000;
    const percentage = calcScoreTier === 3 ? 0.5 : calcScoreTier === 2 ? 0.3 : 0.15;
    const discount = Math.round(baseFee * percentage);
    const finalFee = baseFee - discount;
    return { baseFee, percentage: percentage * 100, discount, finalFee };
  }, [calcLevel, calcScoreTier]);

  return (
    <div className="min-h-screen bg-[#070709] text-[#E5E5E5] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* 1. TOP UTILITY BAR (Global Campuses & Institutional Accreditations) */}
      <div className="bg-[#030304] border-b border-[#1A1A1E] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[#8E8E93]">
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium tracking-wide">
              <Globe2 className="w-3.5 h-3.5" />
              GLOBAL CAMPUSES:
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('milano-fashion')}>Milano</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('firenze')}>Firenze</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('paris')}>Paris</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('london')}>London</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('dubai')}>Dubai</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('miami')}>Miami</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedCampusId('mumbai')}>Mumbai</span>
          </div>

          <div className="flex items-center gap-4 text-[#A1A1AA]">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#A1A1AA]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              MUR / AFAM State Accredited (Italy)
            </span>
            <span>|</span>
            <span className="text-[11px] font-mono text-[#D4AF37]">
              Admissions: {brand.admissionsPhone}
            </span>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#070709]/95 backdrop-blur-md border-b border-[#1C1C22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#141418] flex items-center justify-center text-[#D4AF37] font-serif font-black text-xl group-hover:border-[#D4AF37] transition-all">
              M
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white block leading-tight">
                ISTITUTO MARANGONI
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] block font-semibold">
                THE SCHOOL OF FASHION, ART &amp; DESIGN · MILANO 1935
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-[#A1A1AA]">
            <a href="#courses" className="hover:text-[#D4AF37] transition-colors py-1">Courses</a>
            <a href="#macro-areas" className="hover:text-[#D4AF37] transition-colors py-1">Disciplines</a>
            <a href="#campuses" className="hover:text-[#D4AF37] transition-colors py-1">Campuses</a>
            <a href="#mentors" className="hover:text-[#D4AF37] transition-colors py-1">Super Mentors</a>
            <a href="#alumni" className="hover:text-[#D4AF37] transition-colors py-1">Alumni</a>
            <a href="#scholarships" className="hover:text-[#D4AF37] transition-colors py-1">Scholarships</a>
            <a href="#news" className="hover:text-[#D4AF37] transition-colors py-1">Magazine</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 rounded-full border border-[#27272A] bg-[#121216] flex items-center justify-center text-[#A1A1AA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
              title="Search Courses and Campuses"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20 cursor-pointer"
            >
              Apply 2026
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded border border-[#27272A] bg-[#121216] flex items-center justify-center text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0E] border-b border-[#27272A] px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wider font-semibold text-[#D4D4D8]">
              <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Degree Courses</a>
              <a href="#macro-areas" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Disciplines</a>
              <a href="#campuses" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Global Campuses</a>
              <a href="#mentors" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Super Mentors</a>
              <a href="#alumni" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Alumni Network</a>
              <a href="#scholarships" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Scholarships</a>
              <a href="#news" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">Maze 35</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#13131A] rounded border border-[#1E1E26]">FAQs &amp; AFAM</a>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs"
              >
                Apply Online for 2026 Intakes
              </a>
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsBrochureModalOpen(true); }}
                className="w-full text-center py-2.5 border border-[#3F3F46] text-[#E4E4E7] text-xs font-semibold uppercase tracking-wider"
              >
                Download Course Prospectus (PDF)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER CAROUSEL */}
      <section id="home" className="relative min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden border-b border-[#1F1F28]">
        {/* Active Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[currentSlideIndex].image}
            alt={heroSlides[currentSlideIndex].title}
            className="w-full h-full object-cover transition-opacity duration-1000 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/40"></div>
        </div>

        {/* Hero Slide Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D4AF37]/60 bg-black/60 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {heroSlides[currentSlideIndex].tag}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {heroSlides[currentSlideIndex].title}
            </h1>

            <p className="text-sm sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl font-light">
              {heroSlides[currentSlideIndex].subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={heroSlides[currentSlideIndex].ctaLink}
                className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#D4AF37]/20 inline-flex items-center gap-2"
              >
                {heroSlides[currentSlideIndex].ctaText}
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={heroSlides[currentSlideIndex].secondaryLink}
                className="px-6 py-3.5 border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 text-white font-semibold text-xs uppercase tracking-widest transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                {heroSlides[currentSlideIndex].secondaryCta}
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-black/70 border border-[#27272A] px-3.5 py-2 backdrop-blur-md">
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentSlideIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-[#4B5563]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
            className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <span className="text-[#4B5563]">|</span>

          <button
            onClick={() => setIsHeroPlaying(!isHeroPlaying)}
            className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
            title={isHeroPlaying ? 'Pause carousel' : 'Resume carousel'}
          >
            {isHeroPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </section>

      {/* 4. KEY INSTITUTIONAL ACCREDITATIONS & STATS STRIP */}
      <section className="bg-[#0A0A0E] border-b border-[#1C1C24] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-[#1C1C24] last:border-0 p-3">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] block mb-1">
              {brand.placementRate}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
              Career Placement within 6 Months
            </span>
          </div>

          <div className="border-r border-[#1C1C24] last:border-0 p-3">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-white block mb-1">
              {brand.globalCampusesCount}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
              Campuses in Milan, Paris, London, Dubai &amp; Mumbai
            </span>
          </div>

          <div className="border-r border-[#1C1C24] last:border-0 p-3">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] block mb-1">
              {brand.recruiterHouses}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
              Recruiting Fashion &amp; Luxury Houses
            </span>
          </div>

          <div className="p-3">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-white block mb-1">
              Top 100
            </span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
              QS World Art &amp; Design Ranking
            </span>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR CREATIVE PILLARS (MACRO-AREAS) */}
      <section id="macro-areas" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
            THE ACADEMIC ECOSYSTEM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Four Creative Pillars. Endless Future Horizons.
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Istituto Marangoni organizes its higher education into four distinct macro-areas, each rooted in Italian heritage and forward-looking international industry requirements.
          </p>
        </div>

        {/* Macro Area Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {macroAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => {
                setSelectedMacroArea(area.id as any);
                setSelectedCourseMacro(area.id);
              }}
              className={`p-6 border text-left transition-all cursor-pointer relative overflow-hidden group ${
                selectedMacroArea === area.id
                  ? 'border-[#D4AF37] bg-[#14141A]'
                  : 'border-[#1E1E26] bg-[#0C0C10] hover:border-[#383844]'
              }`}
            >
              <div className="w-10 h-10 mb-4 rounded-full border flex items-center justify-center" style={{ borderColor: area.accent }}>
                {area.id === 'fashion' && <Scissors className="w-5 h-5" style={{ color: area.accent }} />}
                {area.id === 'design' && <CompassIcon className="w-5 h-5" style={{ color: area.accent }} />}
                {area.id === 'art' && <Palette className="w-5 h-5" style={{ color: area.accent }} />}
                {area.id === 'fragrances' && <Sparkle className="w-5 h-5" style={{ color: area.accent }} />}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                {area.title}
              </h3>
              <p className="text-xs text-[#8E8E93] line-clamp-1">{area.tagline}</p>
              <div className="mt-4 text-[11px] font-mono font-semibold" style={{ color: area.accent }}>
                {area.coursesCount} Programs Available →
              </div>
            </button>
          ))}
        </div>

        {/* Active Macro Area Deep Dive Banner */}
        {(() => {
          const area = macroAreas.find(m => m.id === selectedMacroArea) || macroAreas[0];
          return (
            <div className="border border-[#1E1E26] bg-[#0E0E14] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
              <div className="lg:col-span-5 relative min-h-[340px] bg-black">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-black/80 border border-white/20 text-[#D4AF37] font-mono">
                    Macro Area Focus
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white mt-2">
                    {area.title}
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: area.accent }}>
                    {area.tagline}
                  </span>
                  <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                    {area.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-bold block mb-3">
                      Key Disciplines &amp; Academic Specializations:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {area.keyDisciplines.map((disc, idx) => (
                        <span key={idx} className="text-xs px-3 py-1.5 bg-[#171720] border border-[#272733] text-[#E4E4E7]">
                          ✓ {disc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1C24] flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="#courses"
                    onClick={() => setSelectedCourseMacro(area.id)}
                    className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#E5C158] transition-all cursor-pointer"
                  >
                    View All {area.title} Courses ({area.coursesCount})
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="text-xs text-[#A1A1AA] hover:text-white underline tracking-wider cursor-pointer"
                  >
                    Download {area.title} Syllabus Deck (PDF)
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 6. INTERACTIVE DEGREE PROGRAMS & COURSE FINDER */}
      <section id="courses" className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-b border-[#1A1A22]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">
                ACADEMIC CATALOGUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Find Your Course &amp; Degree Program
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
                Undergraduate BA Degrees (180 ECTS), Master’s Programs, Intensive Semesters, and Summer Academies.
              </p>
            </div>

            {/* Quick Live Search Field */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Search by course, discipline, campus..."
                value={courseSearchQuery}
                onChange={(e) => setCourseSearchQuery(e.target.value)}
                className="w-full bg-[#0D0D12] border border-[#272733] text-xs text-white px-4 py-3 pl-10 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <Search className="w-4 h-4 text-[#71717A] absolute left-3.5 top-3.5" />
              {courseSearchQuery && (
                <button
                  onClick={() => setCourseSearchQuery('')}
                  className="absolute right-3 top-3 text-[#71717A] hover:text-white text-xs cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filter Bar Controls */}
          <div className="bg-[#0C0C12] border border-[#1E1E28] p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
            {/* Level Filter */}
            <div className="flex items-center flex-wrap gap-2 text-xs">
              <span className="text-[#71717A] uppercase tracking-wider font-semibold mr-1">Study Level:</span>
              {[
                { id: 'all', label: 'All Levels' },
                { id: 'undergraduate', label: 'Undergraduate (3-Yr BA / AFAM)' },
                { id: 'postgraduate', label: "Postgraduate (Master's)" },
                { id: 'short', label: 'Short & Summer' }
              ].map(lvl => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedCourseLevel(lvl.id)}
                  className={`px-3 py-1.5 transition-colors cursor-pointer ${
                    selectedCourseLevel === lvl.id
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'bg-[#14141C] text-[#A1A1AA] hover:text-white border border-[#232330]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* Macro Area Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#71717A] uppercase tracking-wider font-semibold">Area:</span>
              <select
                value={selectedCourseMacro}
                onChange={(e) => setSelectedCourseMacro(e.target.value)}
                className="bg-[#14141C] border border-[#232330] text-xs text-white px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">All Disciplines</option>
                <option value="fashion">Fashion</option>
                <option value="design">Design</option>
                <option value="art">Art</option>
                <option value="fragrances">Fragrances &amp; Cosmetics</option>
              </select>
            </div>

            {/* Campus Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#71717A] uppercase tracking-wider font-semibold">Campus:</span>
              <select
                value={selectedCourseCampus}
                onChange={(e) => setSelectedCourseCampus(e.target.value)}
                className="bg-[#14141C] border border-[#232330] text-xs text-white px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">All Global Campuses</option>
                <option value="Milano">Milan</option>
                <option value="Paris">Paris</option>
                <option value="London">London</option>
                <option value="Firenze">Florence</option>
                <option value="Dubai">Dubai</option>
                <option value="Miami">Miami</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border border-[#1E1E28] bg-[#0A0A0E] hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group p-6 relative"
              >
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37]">
                    {course.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#A1A1AA]">
                    <span className="px-2 py-0.5 bg-[#14141C] border border-[#262632] text-[#D4AF37]">
                      {course.macroArea.toUpperCase()}
                    </span>
                    <span>·</span>
                    <span>{course.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-2 text-[11px] border-t border-[#181822] text-[#A1A1AA]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.campuses.join(' · ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span className="line-clamp-1">{course.qualification}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span>Intakes: {course.intake}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#181822] flex items-center justify-between">
                  <div className="text-xs font-semibold text-white">
                    {course.tuitionFeeEuro}
                  </div>

                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="px-4 py-2 bg-[#171720] hover:bg-[#D4AF37] text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all border border-[#2E2E3C] cursor-pointer"
                  >
                    Course Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16 border border-[#272733] bg-[#0E0E14] space-y-3">
              <BookOpen className="w-8 h-8 text-[#71717A] mx-auto" />
              <p className="text-base text-white font-medium">No courses found matching your criteria</p>
              <p className="text-xs text-[#71717A]">Try clearing search filters to see all available degree programs.</p>
              <button
                onClick={() => {
                  setSelectedCourseLevel('all');
                  setSelectedCourseMacro('all');
                  setSelectedCourseCampus('all');
                  setCourseSearchQuery('');
                }}
                className="mt-2 px-4 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. SUPER MENTORS & ALUMNI SPOTLIGHT */}
      <section id="mentors" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
            THE MENTORSHIP CIRCLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mentorship by Haute Couture Leaders
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            At Istituto Marangoni, learning happens through direct dialogue with the visionary creative directors leading the world’s most prestigious luxury fashion houses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {superMentors.slice(0, 3).map((mentor, index) => (
            <div
              key={index}
              className="border border-[#1E1E26] bg-[#0B0B10] flex flex-col justify-between overflow-hidden group hover:border-[#D4AF37] transition-all"
            >
              <div className="relative h-64 bg-black overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-black/80 border border-[#D4AF37]/50 text-[#D4AF37]">
                    {mentor.type === 'supermentor' ? 'Super Mentor' : 'Distinguished Alumnus'}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                    {mentor.role} · {mentor.house}
                  </p>
                </div>

                <blockquote className="text-xs text-[#D1D5DB] italic leading-relaxed border-l-2 border-[#D4AF37] pl-3 py-1">
                  "{mentor.quote}"
                </blockquote>

                <p className="text-xs text-[#71717A] line-clamp-3 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="pt-3">
                  <button
                    onClick={() => setActiveMentorModal(mentor)}
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    View Masterclass Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GLOBAL CAMPUSES EXPLORER */}
      <section id="campuses" className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-b border-[#1A1A22]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
              INTERNATIONAL HUBS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Study Across the Capitals of Fashion &amp; Design
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Transfer between Milan, Paris, London, Florence, Dubai, Miami, and Mumbai as part of our signature Cross-School Mobility and Exchange Program.
            </p>
          </div>

          {/* Campus Selector Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {campuses.map((campus) => (
              <button
                key={campus.id}
                onClick={() => setSelectedCampusId(campus.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCampusId === campus.id
                    ? 'bg-[#D4AF37] text-black font-bold'
                    : 'bg-[#0E0E14] border border-[#22222E] text-[#9CA3AF] hover:text-white hover:border-[#3F3F4E]'
                }`}
              >
                {campus.city}
              </button>
            ))}
          </div>

          {/* Selected Campus Feature Card */}
          <div className="border border-[#1E1E28] bg-[#0A0A0E] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
            <div className="lg:col-span-6 relative min-h-[380px] bg-black">
              <img
                src={activeCampus.image}
                alt={activeCampus.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#D4AF37] text-black font-bold">
                  {activeCampus.city} Hub
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-2">
                  {activeCampus.title}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    Specialization
                  </span>
                  <p className="text-sm font-medium text-white">{activeCampus.specialization}</p>
                </div>

                <div className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{activeCampus.address}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {activeCampus.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                    Campus Labs &amp; Facilities:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                    {activeCampus.facilities.map((fac, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1C24] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#9CA3AF] space-y-0.5">
                  <p>Inquiries: <span className="text-white font-mono">{activeCampus.phone}</span></p>
                  <p>Email: <span className="text-[#D4AF37] font-mono">{activeCampus.email}</span></p>
                </div>

                <a
                  href="#admissions"
                  onClick={() => setAppForm(prev => ({ ...prev, campus: activeCampus.title }))}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Apply to {activeCampus.city} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CAREER SERVICE & LUXURY HOUSE RECRUITERS */}
      <section id="alumni" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
            CAREER OUTCOMES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connecting Talent to 400+ International Luxury Houses
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            From Dolce &amp; Gabbana and Moschino to Balmain and Cartier, Istituto Marangoni graduates hold influential design and executive roles at the pinnacle of international fashion and luxury.
          </p>
        </div>

        {/* Recruiter Category Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Luxury Houses' },
            { id: 'fashion', label: 'Couture & Fashion' },
            { id: 'jewelry', label: 'High Jewelry' },
            { id: 'fragrance', label: 'Fragrance & Beauty' },
            { id: 'furniture', label: 'Interior & Design' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setRecruiterFilter(f.id)}
              className={`px-3.5 py-1 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                recruiterFilter === f.id
                  ? 'bg-white text-black font-bold'
                  : 'bg-[#121218] border border-[#22222E] text-[#9CA3AF] hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Recruiters Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {filteredRecruiters.map((recruiter, index) => (
            <div
              key={index}
              className="p-4 border border-[#1E1E28] bg-[#0A0A0E] hover:border-[#D4AF37] transition-colors text-center flex flex-col items-center justify-center min-h-[90px] group"
            >
              <span className="font-serif text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors block">
                {recruiter.name}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#71717A] mt-1 block">
                {recruiter.category}
              </span>
            </div>
          ))}
        </div>

        {/* Placement Metrics Banner */}
        <div className="mt-12 p-8 bg-[#0F0F16] border border-[#222230] rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
              Dedicated Career Service &amp; Talent Portals
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Personalized Career Coaching, Portfolio Clinics &amp; Milan Fashion Week Internships
            </h4>
            <p className="text-xs text-[#9CA3AF] max-w-2xl">
              Students receive exclusive access to the Marangoni I-Talent recruitment portal, connecting directly with HR talent scouts from LVMH, Kering, Richemont, and OTB Group.
            </p>
          </div>

          <a
            href="#admissions"
            className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-md shadow-[#D4AF37]/20"
          >
            Start Your Application →
          </a>
        </div>
      </section>

      {/* 10. SCHOLARSHIP CALCULATOR & MERIT AWARDS */}
      <section id="scholarships" className="py-20 px-4 sm:px-8 bg-[#050508] border-t border-b border-[#1A1A22]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
              MERIT SCHOLARSHIPS 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Invest in Exceptional Creative Talent
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Istituto Marangoni awards competitive scholarships up to 50% of the tuition fee to support the most promising future designers, stylists, and luxury managers across the globe.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#D1D5DB]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Evaluated on Portfolio Creativity &amp; Design Originality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Dedicated Women in Fashion Tech &amp; Sustainability Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Applicable across Milan, Paris, London, Dubai &amp; Florence</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Widget */}
          <div className="lg:col-span-7 bg-[#0D0D14] border border-[#232332] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1F1F2B] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Interactive Tuition &amp; Scholarship Estimator
              </span>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase">Academic Year 2026/27</span>
            </div>

            {/* Select Program Level */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-2 font-semibold">
                1. Select Program Level:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcLevel('undergraduate')}
                  className={`py-2.5 px-4 text-xs font-semibold text-center border transition-all cursor-pointer ${
                    calcLevel === 'undergraduate'
                      ? 'border-[#D4AF37] bg-[#1A1A24] text-[#D4AF37]'
                      : 'border-[#22222E] bg-[#111116] text-[#A1A1AA]'
                  }`}
                >
                  Undergraduate (3-Yr BA)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcLevel('postgraduate')}
                  className={`py-2.5 px-4 text-xs font-semibold text-center border transition-all cursor-pointer ${
                    calcLevel === 'postgraduate'
                      ? 'border-[#D4AF37] bg-[#1A1A24] text-[#D4AF37]'
                      : 'border-[#22222E] bg-[#111116] text-[#A1A1AA]'
                  }`}
                >
                  Postgraduate Master (1-Yr)
                </button>
              </div>
            </div>

            {/* Select Portfolio Score Tier */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-2 font-semibold">
                2. Portfolio Merit Review Tier:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { tier: 1, label: 'Honorable Merit (15% Award)' },
                  { tier: 2, label: 'High Distinction (30% Award)' },
                  { tier: 3, label: 'Master Excellence (50% Award)' }
                ].map(t => (
                  <button
                    key={t.tier}
                    type="button"
                    onClick={() => setCalcScoreTier(t.tier)}
                    className={`p-2.5 text-center border text-[11px] font-medium transition-all cursor-pointer ${
                      calcScoreTier === t.tier
                        ? 'border-[#D4AF37] bg-[#1A1A24] text-white font-bold'
                        : 'border-[#22222E] bg-[#111116] text-[#71717A]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Calculation Results */}
            <div className="p-4 bg-[#14141E] border border-[#272736] space-y-2 text-xs">
              <div className="flex justify-between text-[#A1A1AA]">
                <span>Standard Tuition:</span>
                <span className="font-mono text-white">€{scholarshipAmount.baseFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#D4AF37]">
                <span>Estimated Scholarship Deduction ({scholarshipAmount.percentage}%):</span>
                <span className="font-mono font-bold">- €{scholarshipAmount.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#232330] text-sm font-bold text-white">
                <span>Net Tuition Payable:</span>
                <span className="font-mono text-[#D4AF37]">€{scholarshipAmount.finalFee.toLocaleString()}</span>
              </div>
            </div>

            <a
              href="#admissions"
              className="w-full block text-center py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              Submit Portfolio for Scholarship Evaluation →
            </a>
          </div>
        </div>
      </section>

      {/* 11. ONLINE ADMISSIONS APPLICATION DESK */}
      <section id="admissions" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="border border-[#262634] bg-[#0A0A0E] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
              OFFICIAL ADMISSIONS DESK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Begin Your Application for 2026 Intakes
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Complete the preliminary admission form below to receive dedicated portfolio review guidance, academic counseling, and your unique application reference ID.
            </p>
          </div>

          {appSubmitted ? (
            <div className="p-8 bg-[#12141A] border border-[#D4AF37]/80 text-center space-y-4 max-w-xl mx-auto">
              <div className="w-14 h-14 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Application Initiated Successfully!
              </h3>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Thank you, <span className="font-semibold text-white">{appForm.fullName}</span>. Your preliminary application dossier has been logged with the Istituto Marangoni Admissions Office.
              </p>
              <div className="p-3 bg-black/60 border border-[#272733] font-mono text-xs text-[#D4AF37] font-bold">
                Application Reference: {appReferenceNumber}
              </div>
              <p className="text-[11px] text-[#A1A1AA]">
                An Admissions Counselor from the <span className="text-white font-medium">{appForm.campus}</span> campus will contact you at <span className="text-white font-medium">{appForm.email}</span> within 24 business hours to schedule your formal portfolio review.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setAppSubmitted(false)}
                  className="px-6 py-2.5 border border-[#3F3F46] hover:border-white text-white text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sofia Rossi"
                  value={appForm.fullName}
                  onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                  className={`w-full bg-[#111117] border text-xs text-white px-4 py-3 focus:outline-none transition-colors ${
                    appErrors.fullName ? 'border-rose-500' : 'border-[#262633] focus:border-[#D4AF37]'
                  }`}
                />
                {appErrors.fullName && <p className="text-[11px] text-rose-400 mt-1">{appErrors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. sofia.rossi@example.com"
                  value={appForm.email}
                  onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                  className={`w-full bg-[#111117] border text-xs text-white px-4 py-3 focus:outline-none transition-colors ${
                    appErrors.email ? 'border-rose-500' : 'border-[#262633] focus:border-[#D4AF37]'
                  }`}
                />
                {appErrors.email && <p className="text-[11px] text-rose-400 mt-1">{appErrors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Phone (with Country Code) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +39 340 1234567"
                  value={appForm.phone}
                  onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                  className={`w-full bg-[#111117] border text-xs text-white px-4 py-3 focus:outline-none transition-colors ${
                    appErrors.phone ? 'border-rose-500' : 'border-[#262633] focus:border-[#D4AF37]'
                  }`}
                />
                {appErrors.phone && <p className="text-[11px] text-rose-400 mt-1">{appErrors.phone}</p>}
              </div>

              {/* Preferred Campus */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Preferred Campus Location
                </label>
                <select
                  value={appForm.campus}
                  onChange={(e) => setAppForm({ ...appForm, campus: e.target.value })}
                  className="w-full bg-[#111117] border border-[#262633] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Milano Fashion">Milano Fashion (Via Verri 4)</option>
                  <option value="Milano Design">Milano Design (Via Cerva 24)</option>
                  <option value="Firenze Art & Fashion">Firenze (Via de' Tornabuoni 17)</option>
                  <option value="Paris">Paris (48 Avenue Montaigne)</option>
                  <option value="London">London (Shoreditch)</option>
                  <option value="Dubai">Dubai (DIFC Gate Building)</option>
                  <option value="Miami">Miami (Design District)</option>
                  <option value="Mumbai">Mumbai (Ceejay House, Worli)</option>
                </select>
              </div>

              {/* Program Level */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Study Level
                </label>
                <select
                  value={appForm.programLevel}
                  onChange={(e) => setAppForm({ ...appForm, programLevel: e.target.value })}
                  className="w-full bg-[#111117] border border-[#262633] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Undergraduate 3-Year BA (AFAM)">Undergraduate 3-Year BA (AFAM 180 ECTS)</option>
                  <option value="Postgraduate Master (1-Year)">Postgraduate Master (1-Year / 60 ECTS)</option>
                  <option value="Intensive 1-Year Course">Intensive 1-Year Professional Course</option>
                  <option value="Short Summer Course">Short Summer Course (2-4 Weeks)</option>
                </select>
              </div>

              {/* Macro Area & Intake */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Intake Session
                </label>
                <select
                  value={appForm.intake}
                  onChange={(e) => setAppForm({ ...appForm, intake: e.target.value })}
                  className="w-full bg-[#111117] border border-[#262633] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="October 2026">October 2026 (Fall Semester)</option>
                  <option value="February 2027">February 2027 (Spring Semester)</option>
                  <option value="June/July 2026">Summer Intensive 2026</option>
                </select>
              </div>

              {/* Portfolio Link / Behance / Drive */}
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Portfolio Link or Creative Drive (Behance / Google Drive / Instagram / Website)
                </label>
                <input
                  type="text"
                  placeholder="https://behance.net/yourprofile or Google Drive folder link"
                  value={appForm.portfolioUrl}
                  onChange={(e) => setAppForm({ ...appForm, portfolioUrl: e.target.value })}
                  className="w-full bg-[#111117] border border-[#262633] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
                <span className="text-[10px] text-[#71717A] mt-1 block">
                  Optional for initial inquiry. Undergraduates may submit initial sketches or moodboards.
                </span>
              </div>

              {/* Statement of Motivation */}
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-1.5 font-semibold">
                  Creative Statement &amp; Aspirations
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your design aspirations, preferred mentors, and why you wish to study at Istituto Marangoni..."
                  value={appForm.statement}
                  onChange={(e) => setAppForm({ ...appForm, statement: e.target.value })}
                  className="w-full bg-[#111117] border border-[#262633] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-[#71717A]">
                  By submitting, you agree to Istituto Marangoni’s privacy policy and AFAM admissions regulations.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#D4AF37]/20 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Official Dossier
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 12. MAZE 35 & RESEARCH DISPATCHES */}
      <section id="news" className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-[#1C1C24]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">
                MAZE 35 EDITORIAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Insights, Runways &amp; Academic News
              </h2>
            </div>
            <span className="text-xs text-[#9CA3AF]">
              Curated by Istituto Marangoni Research &amp; Fashion Forecasting Lab
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="border border-[#1E1E28] bg-[#0A0A0E] p-6 flex flex-col justify-between hover:border-[#D4AF37] transition-all group cursor-pointer"
                onClick={() => setActiveNewsModal(item)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
                    <span className="text-[#D4AF37] font-semibold">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#181822] flex items-center justify-between text-xs text-[#71717A]">
                  <span>{item.readTime}</span>
                  <span className="text-white group-hover:text-[#D4AF37] font-semibold">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (AFAM & MOBILITY ACCORDION) */}
      <section id="faq" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
            ADMISSIONS GUIDANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#9CA3AF]">
            Key information regarding Italian MUR accreditation, campus transfers, and scholarships.
          </p>
        </div>

        {/* FAQ Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'accreditation', label: 'Accreditation & AFAM' },
            { id: 'campuses', label: 'Campus Mobility' },
            { id: 'admissions', label: 'Portfolio & Requirements' },
            { id: 'scholarships', label: 'Scholarships' },
            { id: 'careers', label: 'Careers & Internships' }
          ].map(c => (
            <button
              key={c.id}
              onClick={() => setActiveFaqCategory(c.id)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeFaqCategory === c.id
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'bg-[#121218] border border-[#22222E] text-[#9CA3AF] hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#1E1E28] bg-[#0A0A0E] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#111118]"
              >
                <span className="font-serif text-base font-bold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                    expandedFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedFaqIndex === index && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed border-t border-[#181822]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 14. COMPREHENSIVE FOOTER & COMPLIANCE DISCLOSURES */}
      <footer className="bg-[#030305] border-t border-[#1C1C24] text-xs text-[#9CA3AF] pt-16 pb-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#141418] flex items-center justify-center text-[#D4AF37] font-serif font-black">
                M
              </div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">
                ISTITUTO MARANGONI
              </span>
            </div>
            <p className="text-xs text-[#8E8E93] leading-relaxed max-w-sm">
              Founded in Milan in 1935, Istituto Marangoni is an international institution for higher education in Fashion, Design, Art, Fragrances &amp; Cosmetics.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <img src={logos.afamBadge} alt="AFAM Accreditation" className="h-9 w-auto" />
              <img src={logos.qsBadge} alt="QS World Ranking" className="h-9 w-auto" />
            </div>
          </div>

          {/* Col 2: Global Campuses Directory */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Italian &amp; European Campuses
            </span>
            <ul className="space-y-2 text-[11px] text-[#A1A1AA]">
              <li><strong className="text-white">Milano Fashion:</strong> Via Verri 4</li>
              <li><strong className="text-white">Milano Design:</strong> Via Cerva 24</li>
              <li><strong className="text-white">Firenze:</strong> Via de' Tornabuoni 17</li>
              <li><strong className="text-white">Paris:</strong> 48 Avenue Montaigne</li>
              <li><strong className="text-white">London:</strong> 30 Fashion St, Shoreditch</li>
            </ul>
          </div>

          {/* Col 3: International Hubs */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              International Campuses
            </span>
            <ul className="space-y-2 text-[11px] text-[#A1A1AA]">
              <li><strong className="text-white">Dubai:</strong> DIFC Gate Building 8</li>
              <li><strong className="text-white">Miami:</strong> 3704 NE 2nd Ave</li>
              <li><strong className="text-white">Mumbai:</strong> Ceejay House, Worli</li>
              <li><strong className="text-white">Shanghai:</strong> Plaza 66, Tower 2</li>
              <li><strong className="text-white">Shenzhen:</strong> OCT-LOFT Creative Park</li>
            </ul>
          </div>

          {/* Col 4: Quick Action Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Admissions &amp; Prospectus
            </span>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#admissions" className="hover:text-[#D4AF37] transition-colors">Apply Online 2026</a></li>
              <li><button onClick={() => setIsBrochureModalOpen(true)} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">Download 2026 Prospectus</button></li>
              <li><a href="#scholarships" className="hover:text-[#D4AF37] transition-colors">Merit Scholarships</a></li>
              <li><a href="#courses" className="hover:text-[#D4AF37] transition-colors">Course Finder</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">AFAM &amp; ECTS Disclosures</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & statutory accreditation disclaimer */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#1C1C24] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <p>© 1935–2026 Istituto Marangoni S.r.l. All rights reserved. Registered in Italy. P.IVA 09257600157.</p>
          <p className="text-center md:text-right">
            Legally recognized by the Italian Ministry of University and Research (MUR) under the AFAM system.
          </p>
        </div>
      </footer>

      {/* MODAL 1: COURSE DETAILS BREAKDOWN */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0E0E14] border border-[#2B2B3C] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-left shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#20202E] pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {activeCourseModal.macroArea.toUpperCase()} · {activeCourseModal.level.toUpperCase()}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {activeCourseModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="text-[#9CA3AF] hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#14141E] border border-[#222230] text-xs">
              <div>
                <span className="text-[#71717A] block">Duration:</span>
                <span className="font-semibold text-white">{activeCourseModal.duration}</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Language:</span>
                <span className="font-semibold text-white">{activeCourseModal.language}</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Intake:</span>
                <span className="font-semibold text-white">{activeCourseModal.intake}</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Tuition:</span>
                <span className="font-semibold text-[#D4AF37]">{activeCourseModal.tuitionFeeEuro}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-white font-bold block">
                Academic Description
              </span>
              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                {activeCourseModal.description}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-white font-bold block">
                Curriculum Highlights &amp; Modules
              </span>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {activeCourseModal.curriculumHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-white font-bold block">
                Career Pathways &amp; Outcomes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeCourseModal.careerOpportunities.map((op, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#1A1A24] border border-[#2D2D3E] text-xs text-[#E4E4E7]">
                    {op}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#20202E] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#71717A]">
                Campuses: {activeCourseModal.campuses.join(', ')}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setAppForm(prev => ({
                      ...prev,
                      programLevel: activeCourseModal.title,
                      macroArea: activeCourseModal.macroArea
                    }));
                    setActiveCourseModal(null);
                    window.location.hash = '#admissions';
                  }}
                  className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Apply for this Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SUPER MENTOR PROFILE */}
      {activeMentorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0E0E14] border border-[#2B2B3C] max-w-lg w-full p-6 sm:p-8 space-y-5 text-left shadow-2xl relative">
            <button
              onClick={() => setActiveMentorModal(null)}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]">
                <img src={activeMentorModal.image} alt={activeMentorModal.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">{activeMentorModal.name}</h3>
                <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">{activeMentorModal.role} · {activeMentorModal.house}</p>
              </div>
            </div>

            <blockquote className="text-xs text-[#E4E4E7] italic p-3 bg-[#151520] border-l-2 border-[#D4AF37] leading-relaxed">
              "{activeMentorModal.quote}"
            </blockquote>

            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {activeMentorModal.bio}
            </p>

            <div className="pt-2 border-t border-[#1F1F2B] flex justify-end">
              <button
                onClick={() => setActiveMentorModal(null)}
                className="px-5 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: NEWS ARTICLE READER */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0E0E14] border border-[#2B2B3C] max-w-xl w-full p-6 sm:p-8 space-y-4 text-left shadow-2xl relative">
            <button
              onClick={() => setActiveNewsModal(null)}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
              {activeNewsModal.category} · {activeNewsModal.date}
            </span>

            <h3 className="font-serif text-2xl font-bold text-white leading-tight">
              {activeNewsModal.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              {activeNewsModal.summary}
            </p>

            <div className="p-4 bg-[#14141E] border border-[#242434] text-xs text-[#9CA3AF] leading-relaxed">
              Published in partnership with the Maze 35 editorial editorial desk and Istituto Marangoni international academic council.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveNewsModal(null)}
                className="px-5 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: GLOBAL SEARCH */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0E0E14] border border-[#2B2B3C] max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#20202E] pb-3">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-4 h-4 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Search courses, campuses, mentors, news..."
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-white focus:outline-none"
                />
              </div>
              <button
                onClick={() => { setIsSearchOpen(false); setGlobalSearchQuery(''); }}
                className="text-[#9CA3AF] hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-4 text-left">
              {globalSearchQuery.trim() ? (
                <>
                  {/* Matching Courses */}
                  {Array.isArray(globalSearchResults.courses) && globalSearchResults.courses.length > 0 && (
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block mb-2">
                        Courses ({globalSearchResults.courses.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.courses.map((c: MarangoniCourse) => (
                          <div
                            key={c.id}
                            onClick={() => {
                              setActiveCourseModal(c);
                              setIsSearchOpen(false);
                            }}
                            className="p-2.5 bg-[#14141E] hover:bg-[#1E1E2C] border border-[#242432] cursor-pointer flex items-center justify-between text-xs"
                          >
                            <span className="font-serif font-bold text-white">{c.title}</span>
                            <span className="text-[#A1A1AA]">{c.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Campuses */}
                  {Array.isArray(globalSearchResults.campuses) && globalSearchResults.campuses.length > 0 && (
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#38BDF8] block mb-2">
                        Campuses ({globalSearchResults.campuses.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.campuses.map((cp: MarangoniCampus) => (
                          <div
                            key={cp.id}
                            onClick={() => {
                              setSelectedCampusId(cp.id);
                              setIsSearchOpen(false);
                              window.location.hash = '#campuses';
                            }}
                            className="p-2.5 bg-[#14141E] hover:bg-[#1E1E2C] border border-[#242432] cursor-pointer flex items-center justify-between text-xs"
                          >
                            <span className="font-serif font-bold text-white">{cp.title}</span>
                            <span className="text-[#A1A1AA]">{cp.city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Mentors */}
                  {Array.isArray(globalSearchResults.mentors) && globalSearchResults.mentors.length > 0 && (
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#F472B6] block mb-2">
                        Mentors ({globalSearchResults.mentors.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.mentors.map((m: MarangoniMentor, i: number) => (
                          <div
                            key={i}
                            onClick={() => {
                              setActiveMentorModal(m);
                              setIsSearchOpen(false);
                            }}
                            className="p-2.5 bg-[#14141E] hover:bg-[#1E1E2C] border border-[#242432] cursor-pointer flex items-center justify-between text-xs"
                          >
                            <span className="font-serif font-bold text-white">{m.name}</span>
                            <span className="text-[#A1A1AA]">{m.house}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8 text-xs text-[#71717A]">
                  Type to search through courses, campuses, mentors, and news.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: DOWNLOAD BROCHURE / PROSPECTUS */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0E0E14] border border-[#2B2B3C] max-w-md w-full p-6 sm:p-8 space-y-4 text-left shadow-2xl relative">
            <button
              onClick={() => { setIsBrochureModalOpen(false); setBrochureSuccess(false); }}
              className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
              ISTITUTO MARANGONI OFFICIAL CATALOGUE
            </span>

            <h3 className="font-serif text-2xl font-bold text-white">
              Download 2026/27 Academic Prospectus
            </h3>

            {brochureSuccess ? (
              <div className="p-4 bg-[#12141C] border border-[#D4AF37] text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mx-auto" />
                <p className="text-xs text-white font-semibold">Prospectus Download Started</p>
                <p className="text-[11px] text-[#A1A1AA]">
                  The complete course brochure and admissions guide has also been dispatched to {brochureEmail}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (brochureEmail.includes('@')) {
                    setBrochureSuccess(true);
                  }
                }}
                className="space-y-3"
              >
                <p className="text-xs text-[#A1A1AA]">
                  Enter your email address to receive the official high-resolution brochure covering curriculum structures, tuition schedules, and campus tour dates.
                </p>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={brochureEmail}
                  onChange={(e) => setBrochureEmail(e.target.value)}
                  className="w-full bg-[#14141E] border border-[#282838] text-xs text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Download Prospectus PDF
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
