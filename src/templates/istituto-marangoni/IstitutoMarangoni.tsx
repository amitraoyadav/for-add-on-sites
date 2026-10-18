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
  Pause,
  ArrowUpRight,
  RotateCcw,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

export type MarangoniPage =
  | 'home'
  | 'about'
  | 'courses'
  | 'schools'
  | 'campuses'
  | 'mentors'
  | 'admissions'
  | 'magazine'
  | 'contact';

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

  // Active Multi-Page Router State
  const [currentPage, setCurrentPage] = useState<MarangoniPage>('home');

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

  // Virtual Tour Modal
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [tourCity, setTourCity] = useState<string>('Milano Fashion');

  // Super Mentor Modal
  const [activeMentorModal, setActiveMentorModal] = useState<MarangoniMentor | null>(null);

  // News / Magazine Modal
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

  // Application Tracker lookup
  const [lookupRef, setLookupRef] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    found: boolean;
    ref: string;
    name: string;
    program: string;
    campus: string;
    status: string;
    nextStep: string;
  } | null>(null);

  // Recruiter Sector Filter
  const [recruiterFilter, setRecruiterFilter] = useState<string>('all');

  // FAQ Active Category
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Contact Page Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    campus: 'Milano Fashion',
    topic: 'Admissions & Portfolio Evaluation',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Language state
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'IT'>('EN');

  // Scroll to top on page change
  const navigateTo = (page: MarangoniPage) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hero Autoplay Effect
  useEffect(() => {
    if (!isHeroPlaying || currentPage !== 'home') return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHeroPlaying, heroSlides.length, currentPage]);

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

  // Handle Application Lookup
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = lookupRef.trim().toUpperCase();
    if (!clean) return;

    if (clean === appReferenceNumber && appSubmitted) {
      setLookupResult({
        found: true,
        ref: clean,
        name: appForm.fullName,
        program: appForm.macroArea + ' (' + appForm.programLevel + ')',
        campus: appForm.campus,
        status: 'Academic Portfolio Assessment In Progress',
        nextStep: 'Admissions Committee review scheduled within 2 business days. Check your email for interview instructions.'
      });
    } else {
      setLookupResult({
        found: true,
        ref: clean.startsWith('IM-') ? clean : `IM-2026-${clean}`,
        name: 'Verified Applicant Record',
        program: 'Master in Fashion & Luxury Brand Management',
        campus: 'Milano Fashion (Via Verri)',
        status: 'Preliminary Dossier Verified — Portfolio Review Stage',
        nextStep: 'Please submit your creative portfolio PDF or URL link to admissions.milano@istitutomarangoni.com.'
      });
    }
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
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('milano-fashion'); navigateTo('campuses'); }}>Milano</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('firenze'); navigateTo('campuses'); }}>Firenze</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('paris'); navigateTo('campuses'); }}>Paris</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('london'); navigateTo('campuses'); }}>London</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('dubai'); navigateTo('campuses'); }}>Dubai</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('miami'); navigateTo('campuses'); }}>Miami</button>
            <span>·</span>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => { setSelectedCampusId('mumbai'); navigateTo('campuses'); }}>Mumbai</button>
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
            <span>|</span>
            <div className="flex items-center gap-1 text-[11px]">
              <button
                onClick={() => setSelectedLanguage('EN')}
                className={`px-1.5 py-0.5 rounded ${selectedLanguage === 'EN' ? 'bg-[#D4AF37] text-black font-bold' : 'text-[#8E8E93] hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setSelectedLanguage('IT')}
                className={`px-1.5 py-0.5 rounded ${selectedLanguage === 'IT' ? 'bg-[#D4AF37] text-black font-bold' : 'text-[#8E8E93] hover:text-white'}`}
              >
                IT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#070709]/95 backdrop-blur-md border-b border-[#1C1C22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
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
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-[#A1A1AA]">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'home' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'about' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              About
            </button>
            <button
              onClick={() => navigateTo('courses')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'courses' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Courses
            </button>
            <button
              onClick={() => navigateTo('schools')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'schools' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Schools
            </button>
            <button
              onClick={() => navigateTo('campuses')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'campuses' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Campuses
            </button>
            <button
              onClick={() => navigateTo('mentors')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'mentors' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Mentors &amp; Alumni
            </button>
            <button
              onClick={() => navigateTo('admissions')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'admissions' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Admissions
            </button>
            <button
              onClick={() => navigateTo('magazine')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'magazine' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Maze 35
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`transition-colors py-2 border-b-2 cursor-pointer ${currentPage === 'contact' ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-transparent hover:text-white'}`}
            >
              Contact
            </button>
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

            <button
              onClick={() => navigateTo('admissions')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20 cursor-pointer"
            >
              Apply 2026
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded border border-[#27272A] bg-[#121216] flex items-center justify-center text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0A0E] border-b border-[#27272A] px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wider font-semibold text-[#D4D4D8]">
              <button
                onClick={() => navigateTo('home')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'home' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'about' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                About &amp; Heritage
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'courses' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Degree Courses
              </button>
              <button
                onClick={() => navigateTo('schools')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'schools' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                4 Creative Schools
              </button>
              <button
                onClick={() => navigateTo('campuses')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'campuses' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Global Campuses
              </button>
              <button
                onClick={() => navigateTo('mentors')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'mentors' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Mentors &amp; Alumni
              </button>
              <button
                onClick={() => navigateTo('admissions')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'admissions' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Admissions 2026
              </button>
              <button
                onClick={() => navigateTo('magazine')}
                className={`p-3 rounded border text-left cursor-pointer ${currentPage === 'magazine' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Maze 35
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`p-3 rounded border text-left cursor-pointer col-span-2 ${currentPage === 'contact' ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#13131A] border-[#1E1E26]'}`}
              >
                Contact &amp; Open Days
              </button>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => navigateTo('admissions')}
                className="w-full text-center py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs cursor-pointer"
              >
                Apply Online for 2026 Intakes
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsBrochureModalOpen(true); }}
                className="w-full text-center py-2.5 border border-[#3F3F46] text-[#E4E4E7] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Download Course Prospectus (PDF)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb Bar (Shown on all subpages except home) */}
      {currentPage !== 'home' && (
        <div className="bg-[#0B0B0F] border-b border-[#1C1C24] py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#8E8E93]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1"
              >
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-[#555]" />
              <span className="text-white capitalize font-medium tracking-wider">
                {currentPage === 'about' && 'About & Institutional Heritage'}
                {currentPage === 'courses' && 'Academic Courses & Degree Directory'}
                {currentPage === 'schools' && 'Schools & Creative Macro-Areas'}
                {currentPage === 'campuses' && 'Global Campuses & Student Life'}
                {currentPage === 'mentors' && 'Super Mentors & Notable Alumni'}
                {currentPage === 'admissions' && 'Admissions & Scholarships 2026'}
                {currentPage === 'magazine' && 'Maze 35 Editorial Magazine'}
                {currentPage === 'contact' && 'Contact & Open Days'}
              </span>
            </div>
            <button
              onClick={() => navigateTo('home')}
              className="text-[#D4AF37] hover:underline flex items-center gap-1 text-[11px] font-mono cursor-pointer"
            >
              ← Back to Main Showcase
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PAGE 1: HOME (Comprehensive Original Layout) */}
      {/* ========================================================================= */}
      {currentPage === 'home' && (
        <>
          {/* 3. HERO BANNER CAROUSEL */}
          <section className="relative min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden border-b border-[#1F1F28]">
            {/* Active Hero Background */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroSlides[currentSlideIndex].image}
                alt={heroSlides[currentSlideIndex].title}
                className="w-full h-full object-cover object-center transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A22]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3" />
                  {heroSlides[currentSlideIndex].tag}
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                  {heroSlides[currentSlideIndex].title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-[#D4D4D8] leading-relaxed mb-8 max-w-xl">
                  {heroSlides[currentSlideIndex].subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      if (heroSlides[currentSlideIndex].ctaLink.includes('courses')) navigateTo('courses');
                      else if (heroSlides[currentSlideIndex].ctaLink.includes('admissions')) navigateTo('admissions');
                      else if (heroSlides[currentSlideIndex].ctaLink.includes('opendays')) navigateTo('contact');
                      else if (heroSlides[currentSlideIndex].ctaLink.includes('magazine')) navigateTo('magazine');
                      else navigateTo('courses');
                    }}
                    className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold uppercase tracking-wider text-xs transition-all shadow-lg shadow-[#D4AF37]/25 flex items-center gap-2 cursor-pointer"
                  >
                    {heroSlides[currentSlideIndex].ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      if (heroSlides[currentSlideIndex].secondaryLink.includes('admissions')) navigateTo('admissions');
                      else if (heroSlides[currentSlideIndex].secondaryLink.includes('scholarships')) navigateTo('admissions');
                      else if (heroSlides[currentSlideIndex].secondaryLink.includes('alumni')) navigateTo('mentors');
                      else navigateTo('admissions');
                    }}
                    className="px-6 py-3.5 border border-[#3F3F46] bg-black/40 backdrop-blur-sm text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold uppercase tracking-wider text-xs transition-all cursor-pointer"
                  >
                    {heroSlides[currentSlideIndex].secondaryCta}
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Navigation Controls & Indicators */}
            <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-[#27272A]">
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsHeroPlaying(!isHeroPlaying)}
                className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors cursor-pointer"
                aria-label={isHeroPlaying ? "Pause carousel" : "Play carousel"}
              >
                {isHeroPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`h-1.5 transition-all cursor-pointer ${i === currentSlideIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-[#3F3F46]'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                className="text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* 4. STATUTORY ACCREDITATION & GLOBAL STANDING RIBBON */}
          <section className="bg-[#0A0A0E] border-b border-[#1C1C24] py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="flex items-center gap-4 border-r border-[#1C1C24] pr-4">
                <div className="w-12 h-12 rounded bg-[#121218] border border-[#27272A] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1AA] block">Italian State Accreditation</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">MUR / AFAM (180 ECTS)</span>
                  <span className="text-[11px] text-[#71717A]">First Level Academic Diplomas</span>
                </div>
              </div>

              <div className="flex items-center gap-4 border-r border-[#1C1C24] pr-4">
                <div className="w-12 h-12 rounded bg-[#121218] border border-[#27272A] flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1AA] block">Global QS Standing</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">Top 100 Art &amp; Design</span>
                  <span className="text-[11px] text-[#71717A]">QS World University Rankings</span>
                </div>
              </div>

              <div className="flex items-center gap-4 border-r border-[#1C1C24] pr-4">
                <div className="w-12 h-12 rounded bg-[#121218] border border-[#27272A] flex items-center justify-center text-[#C084FC] shrink-0">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1AA] block">Global Network</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">9 World Campuses</span>
                  <span className="text-[11px] text-[#71717A]">Milan, Paris, London, Dubai...</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#121218] border border-[#27272A] flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1AA] block">Career Placement</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block">89% Employment Rate</span>
                  <span className="text-[11px] text-[#71717A]">400+ Luxury Recruiter Houses</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. FOUR CREATIVE PILLARS (MACRO-AREAS) */}
          <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                  Academic Macro-Areas
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Four Creative Disciplines
                </h2>
              </div>
              <p className="text-[#A1A1AA] text-sm max-w-md">
                Blending Italian artisanal heritage with visionary digital thinking across fashion, spatial design, contemporary art, and sensory beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {macroAreas.map((area) => (
                <div
                  key={area.id}
                  className="group relative bg-[#0D0D12] border border-[#1E1E26] hover:border-[#D4AF37] transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
                  
                  <div>
                    <div className="w-14 h-14 mb-6 rounded-none bg-[#15151D] border border-[#2A2A36] p-2 flex items-center justify-center">
                      <img src={area.image} alt={area.title} className="w-full h-full object-contain" />
                    </div>

                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-1">
                      {area.coursesCount} Programs Available
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-xs text-[#8E8E93] font-medium tracking-wide uppercase mb-4">
                      {area.tagline}
                    </p>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {area.keyDisciplines.slice(0, 3).map((disc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                          <span>{disc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedMacroArea(area.id);
                      navigateTo('schools');
                    }}
                    className="pt-4 border-t border-[#1C1C24] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37] group-hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <span>Explore School</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 6. FEATURED DEGREE COURSES PREVIEW */}
          <section className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-b border-[#1A1A22]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                    Official Curricula
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    Degree Courses &amp; Diplomas
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigateTo('courses')}
                    className="px-5 py-2.5 bg-[#141418] border border-[#27272A] hover:border-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    View All {courses.length} Courses
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.slice(0, 6).map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#0A0A0E] border border-[#1A1A22] hover:border-[#D4AF37]/80 transition-all p-6 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#14141C] text-[#D4AF37] border border-[#2A2A36]">
                          {course.level === 'undergraduate' ? 'BA Hons / AFAM 180 ECTS' : course.level === 'postgraduate' ? 'Master (1-Year)' : 'Intensive'}
                        </span>
                        {course.badge && (
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                            {course.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                        {course.title}
                      </h3>

                      <p className="text-xs text-[#8E8E93] line-clamp-3 mb-4 leading-relaxed">
                        {course.description}
                      </p>

                      <div className="border-t border-[#16161E] pt-3 mb-4 space-y-1.5 text-xs text-[#A1A1AA]">
                        <div className="flex items-center justify-between">
                          <span className="text-[#71717A]">Duration:</span>
                          <span className="text-white font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#71717A]">Campuses:</span>
                          <span className="text-[#D4AF37] font-medium">{course.campuses.slice(0, 3).join(', ')}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#71717A]">Tuition Fee:</span>
                          <span className="text-white font-mono">{course.tuitionFeeEuro}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => setActiveCourseModal(course)}
                        className="flex-1 py-2.5 bg-[#15151D] hover:bg-[#1C1C26] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors border border-[#272733] cursor-pointer"
                      >
                        Syllabus &amp; Details
                      </button>
                      <button
                        onClick={() => {
                          setAppForm(prev => ({
                            ...prev,
                            macroArea: course.title,
                            campus: course.campuses[0] || 'Milano Fashion'
                          }));
                          navigateTo('admissions');
                        }}
                        className="px-3 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        title="Apply directly for this course"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. SUPER MENTORS SPOTLIGHT */}
          <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                  Industry Visionaries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Super Mentors &amp; Notable Alumni
                </h2>
              </div>
              <button
                onClick={() => navigateTo('mentors')}
                className="text-xs uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                Meet All Mentors &amp; Alumni Network
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {superMentors.slice(0, 3).map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-[#0C0C10] border border-[#1C1C24] p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all group"
                >
                  <div>
                    <div className="w-full h-48 bg-[#14141B] border border-[#22222E] mb-6 flex items-center justify-center overflow-hidden">
                      <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-1">
                      {mentor.role} · {mentor.house}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {mentor.name}
                    </h3>

                    <blockquote className="text-xs text-[#A1A1AA] italic leading-relaxed mb-4 border-l-2 border-[#D4AF37] pl-3">
                      "{mentor.quote}"
                    </blockquote>
                  </div>

                  <button
                    onClick={() => setActiveMentorModal(mentor)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:text-white flex items-center gap-1 pt-2 cursor-pointer"
                  >
                    Read Profile &amp; Mentorship Bio
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 8. GLOBAL CAMPUSES SHOWCASE */}
          <section className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-b border-[#1A1A22]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                    International Footprint
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    Study Across 9 World Fashion Capitals
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('campuses')}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  Explore All Campuses
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Campus Selector Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
                {campuses.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCampusId(c.id)}
                    className={`px-4 py-2 text-xs uppercase font-bold tracking-wider shrink-0 transition-all cursor-pointer ${
                      selectedCampusId === c.id
                        ? 'bg-[#D4AF37] text-black shadow-md'
                        : 'bg-[#101016] text-[#A1A1AA] hover:text-white hover:bg-[#181822] border border-[#20202A]'
                    }`}
                  >
                    {c.city}
                  </button>
                ))}
              </div>

              {/* Active Campus Card Preview */}
              <div className="bg-[#0A0A0E] border border-[#1F1F2A] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-64 sm:h-80 bg-[#121218] border border-[#272733] overflow-hidden relative">
                  <img src={activeCampus.image} alt={activeCampus.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 text-[10px] font-mono text-[#D4AF37] uppercase">
                    {activeCampus.city} Campus
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                      {activeCampus.title}
                    </h3>
                    <p className="text-xs uppercase font-mono text-[#D4AF37] tracking-wider mb-4">
                      Specialization: {activeCampus.specialization}
                    </p>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                      {activeCampus.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {activeCampus.facilities.map((fac, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#1C1C24] pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E8E93]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{activeCampus.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[#D4AF37]">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{activeCampus.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setTourCity(activeCampus.title);
                        setVirtualTourOpen(true);
                      }}
                      className="px-4 py-2.5 bg-[#15151D] hover:bg-[#1C1C28] border border-[#2A2A38] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Launch 360° Studio Tour
                    </button>
                    <button
                      onClick={() => {
                        setAppForm(prev => ({ ...prev, campus: activeCampus.title }));
                        navigateTo('admissions');
                      }}
                      className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      Apply for {activeCampus.city}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. QUICK MERIT SCHOLARSHIP CALCULATOR */}
          <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="bg-[#09090D] border border-[#1E1E28] p-8 sm:p-12 relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                  Financial Aid &amp; Excellence
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                  Interactive Merit Scholarship Calculator
                </h2>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8">
                  Istituto Marangoni awards tuition fee waivers up to 50% for exceptional creative portfolios, academic merit, and video motivation submissions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      1. Study Level:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setCalcLevel('undergraduate')}
                        className={`py-3 text-xs uppercase font-bold tracking-wider border cursor-pointer ${
                          calcLevel === 'undergraduate'
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                            : 'bg-[#121218] text-white border-[#272733] hover:border-[#D4AF37]'
                        }`}
                      >
                        Undergraduate BA (3-Yr)
                      </button>
                      <button
                        onClick={() => setCalcLevel('postgraduate')}
                        className={`py-3 text-xs uppercase font-bold tracking-wider border cursor-pointer ${
                          calcLevel === 'postgraduate'
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                            : 'bg-[#121218] text-white border-[#272733] hover:border-[#D4AF37]'
                        }`}
                      >
                        Postgraduate Master (1-Yr)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      2. Portfolio Merit Review Tier:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setCalcScoreTier(1)}
                        className={`py-3 text-xs uppercase font-bold tracking-wider border cursor-pointer ${
                          calcScoreTier === 1
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                            : 'bg-[#121218] text-white border-[#272733]'
                        }`}
                      >
                        Merit (15%)
                      </button>
                      <button
                        onClick={() => setCalcScoreTier(2)}
                        className={`py-3 text-xs uppercase font-bold tracking-wider border cursor-pointer ${
                          calcScoreTier === 2
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                            : 'bg-[#121218] text-white border-[#272733]'
                        }`}
                      >
                        Distinction (30%)
                      </button>
                      <button
                        onClick={() => setCalcScoreTier(3)}
                        className={`py-3 text-xs uppercase font-bold tracking-wider border cursor-pointer ${
                          calcScoreTier === 3
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                            : 'bg-[#121218] text-white border-[#272733]'
                        }`}
                      >
                        Exemplary (50%)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculation Output Box */}
                <div className="bg-[#12121A] border border-[#2A2A38] p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A] block">Published Base Fee</span>
                    <span className="font-mono text-lg font-bold text-[#A1A1AA]">€{scholarshipAmount.baseFee.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block">Estimated Scholarship Deduction</span>
                    <span className="font-mono text-xl font-bold text-[#4ADE80]">-€{scholarshipAmount.discount.toLocaleString()} ({scholarshipAmount.percentage}%)</span>
                  </div>
                  <div className="sm:border-l sm:border-[#22222E] sm:pl-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white block">Net Payable Annual Fee</span>
                    <span className="font-mono text-2xl font-bold text-white">€{scholarshipAmount.finalFee.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateTo('admissions')}
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Submit Portfolio for Scholarship Review
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="px-6 py-3 border border-[#3F3F46] hover:border-[#D4AF37] text-white font-semibold uppercase tracking-wider text-xs transition-all cursor-pointer"
                  >
                    Download 2026 Scholarship Booklet (PDF)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 10. MAZE 35 EDITORIAL HIGHLIGHTS */}
          <section className="py-20 px-4 sm:px-8 bg-[#040406] border-t border-b border-[#1A1A22]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                    Editorial Dispatch
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    Maze 35: The Voices of Global Fashion
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('magazine')}
                  className="text-xs uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  Explore All Magazine Issues
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0A0A0E] border border-[#1A1A22] hover:border-[#D4AF37]/70 transition-all p-6 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37] mb-3">
                        <span>{item.category}</span>
                        <span className="text-[#71717A]">{item.readTime}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8E8E93] line-clamp-3 mb-4 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveNewsModal(item)}
                      className="pt-3 border-t border-[#181822] text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center justify-between group-hover:text-white transition-colors cursor-pointer w-full text-left"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. FAQ ACCORDION */}
          <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
                Student Inquiries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#A1A1AA]">
                Essential answers regarding AFAM state recognition, portfolio reviews, transfer semesters, and scholarships.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
              {['all', 'accreditation', 'campuses', 'admissions', 'scholarships', 'careers'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFaqCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer ${
                    activeFaqCategory === cat
                      ? 'bg-[#D4AF37] text-black'
                      : 'bg-[#121218] text-[#8E8E93] hover:text-white border border-[#22222E]'
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
                  className="bg-[#0A0A0E] border border-[#1A1A22] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${expandedFaqIndex === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedFaqIndex === idx && (
                    <div className="px-5 pb-5 text-xs text-[#A1A1AA] leading-relaxed border-t border-[#14141C] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* PAGE 2: ABOUT & INSTITUTIONAL HERITAGE */}
      {/* ========================================================================= */}
      {currentPage === 'about' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              1935 — 2025 · 90 Years of Italian Luxury
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
              Shaping the Global Creative Vanguard
            </h1>
            <p className="text-base text-[#D4D4D8] leading-relaxed">
              Founded in Milan in 1935 by Giulio Marangoni as the *Istituto Artistico dell'Abbigliamento Marangoni*, the institution has trained four generations of visionary designers, creative directors, and luxury executives across the fashion capitals of the world.
            </p>
          </div>

          {/* Heritage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-center">
            <div className="lg:col-span-6 bg-[#0E0E14] border border-[#1F1F2C] p-8">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                The Founder’s Vision
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                In 1935, master tailor Giulio Marangoni recognized that the burgeoning Italian fashion houses required a new kind of creative professional: not merely dressmakers, but creators steeped in art history, fabric technology, and the exacting geometry of cutting and draping.
              </p>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Over nine decades, that single Milanese atelier has grown into a world-renowned network of nine international campuses spanning Europe, the Americas, the Middle East, and Asia — consistently ranked in the QS World Top 100 for Art &amp; Design.
              </p>
              <div className="border-l-2 border-[#D4AF37] pl-4 py-1 italic text-xs text-[#D4AF37]">
                "Fashion is the living synthesis of Italian craftsmanship, cultural semiotics, and boundless courage." — Giulio Marangoni
              </div>
            </div>

            <div className="lg:col-span-6 h-80 bg-[#12121A] border border-[#272736] relative overflow-hidden flex items-center justify-center p-6">
              <img
                src="/assets/istituto-marangoni/hero-90years.svg"
                alt="Celebrating 90 Years of Italian Creative Excellence"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Statutory Recognition & Accreditations in Detail */}
          <div className="bg-[#09090D] border border-[#1D1D28] p-8 sm:p-10 mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#D4AF37] block mb-2 font-bold">
                Quality Assurance &amp; Legal Recognition
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Statutory Accreditations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#101016] border border-[#22222E] p-6">
                <div className="w-10 h-10 mb-4 bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">Italian State AFAM System</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-3">
                  Legally recognized by the Italian Ministry of University and Research (MUR) under the AFAM system (Alta Formazione Artistica, Musicale e Coreutica). Three-Year courses award First Level Academic Diplomas (180 ECTS), fully aligned with the European Bologna Process.
                </p>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase">Decree MUR n. 759</span>
              </div>

              <div className="bg-[#101016] border border-[#22222E] p-6">
                <div className="w-10 h-10 mb-4 bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">Manchester Metropolitan (UK)</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-3">
                  International validation partner. Undergraduate and postgraduate degrees delivered at London and European campuses are validated by Manchester Metropolitan University, granting dual UK and European academic recognition.
                </p>
                <span className="text-[10px] font-mono text-[#38BDF8] uppercase">Validated Honours Degrees</span>
              </div>

              <div className="bg-[#101016] border border-[#22222E] p-6">
                <div className="w-10 h-10 mb-4 bg-[#C084FC]/10 text-[#C084FC] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">French RNCP &amp; Global Licenses</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-3">
                  Paris campus Master's programs are certified by France Compétences at RNCP Niveau 7. Dubai campus is authorized by the Knowledge and Human Development Authority (KHDA), and Miami is licensed by Florida DOE.
                </p>
                <span className="text-[10px] font-mono text-[#C084FC] uppercase">RNCP Level 7 · KHDA Dubai</span>
              </div>
            </div>
          </div>

          {/* Academic Philosophy: The Italian Method */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0B0B10] border border-[#1A1A22] p-6">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block mb-2">01</span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Artisanal Mastery</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Hands-on manual draping, pattern making, luxury leather goods prototyping, and live tactile workshops under master Italian craftsmen.
              </p>
            </div>

            <div className="bg-[#0B0B10] border border-[#1A1A22] p-6">
              <span className="font-serif text-3xl font-bold text-[#38BDF8] block mb-2">02</span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Phygital Innovation</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Early adoption of 3D virtual garment modeling with CLO3D, digital avatars, generative AI conceptualization, and virtual showroom creation.
              </p>
            </div>

            <div className="bg-[#0B0B10] border border-[#1A1A22] p-6">
              <span className="font-serif text-3xl font-bold text-[#F472B6] block mb-2">03</span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Live Industry Briefs</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Direct collaborative projects with luxury conglomerates: Kering, LVMH, Dolce &amp; Gabbana, Cartier, and Balmain — presented to creative directors.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-[#121218] border border-[#272733] p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Join the Next Generation of Visionaries
            </h3>
            <p className="text-xs text-[#A1A1AA] mb-6">
              Admissions for the 2026 Academic Year are currently accepting applications across all nine global campuses.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigateTo('courses')}
                className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Browse Degree Courses
              </button>
              <button
                onClick={() => navigateTo('admissions')}
                className="px-5 py-2.5 border border-[#3F3F46] text-white hover:border-[#D4AF37] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Admissions Portal
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 3: COURSES (Complete Academic Course Directory) */}
      {/* ========================================================================= */}
      {currentPage === 'courses' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Undergraduate &amp; Postgraduate Programmes
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Degree Courses &amp; Diplomas
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Explore state-accredited Bachelor's (AFAM 180 ECTS / BA Hons), Master Universitario (1-Year), and specialized Intensive programs across Fashion, Design, Art, and Fragrances.
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="bg-[#0B0B10] border border-[#1A1A22] p-5 mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search course title or topic..."
                  value={courseSearchQuery}
                  onChange={(e) => setCourseSearchQuery(e.target.value)}
                  className="w-full bg-[#14141C] border border-[#272733] text-white text-xs pl-9 pr-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Study Level Filter */}
              <div>
                <select
                  value={selectedCourseLevel}
                  onChange={(e) => setSelectedCourseLevel(e.target.value)}
                  className="w-full bg-[#14141C] border border-[#272733] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="all">All Study Levels</option>
                  <option value="undergraduate">Undergraduate BA (3 Years)</option>
                  <option value="postgraduate">Postgraduate Master (1 Year)</option>
                  <option value="intensive">Intensive 1-Year</option>
                  <option value="short">Short &amp; Summer Courses</option>
                </select>
              </div>

              {/* Macro Area Filter */}
              <div>
                <select
                  value={selectedCourseMacro}
                  onChange={(e) => setSelectedCourseMacro(e.target.value)}
                  className="w-full bg-[#14141C] border border-[#272733] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="all">All Creative Disciplines</option>
                  <option value="fashion">Fashion</option>
                  <option value="design">Design</option>
                  <option value="art">Art</option>
                  <option value="fragrances">Fragrances &amp; Cosmetics</option>
                </select>
              </div>

              {/* Campus Filter */}
              <div>
                <select
                  value={selectedCourseCampus}
                  onChange={(e) => setSelectedCourseCampus(e.target.value)}
                  className="w-full bg-[#14141C] border border-[#272733] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="all">All Global Campuses</option>
                  <option value="milano">Milano</option>
                  <option value="firenze">Firenze</option>
                  <option value="paris">Paris</option>
                  <option value="london">London</option>
                  <option value="dubai">Dubai</option>
                  <option value="miami">Miami</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#8E8E93] pt-2 border-t border-[#161620]">
              <span>Showing <strong className="text-white">{filteredCourses.length}</strong> available courses</span>
              {(selectedCourseLevel !== 'all' || selectedCourseMacro !== 'all' || selectedCourseCampus !== 'all' || courseSearchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCourseLevel('all');
                    setSelectedCourseMacro('all');
                    setSelectedCourseCampus('all');
                    setCourseSearchQuery('');
                  }}
                  className="text-[#D4AF37] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#0A0A0E] border border-[#1A1A22] hover:border-[#D4AF37]/80 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#14141C] text-[#D4AF37] border border-[#2A2A36]">
                      {course.level === 'undergraduate' ? 'BA Hons / AFAM 180 ECTS' : course.level === 'postgraduate' ? 'Master (1-Year)' : 'Intensive'}
                    </span>
                    {course.badge && (
                      <span className="text-[9px] uppercase font-bold px-2 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#8E8E93] line-clamp-3 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="border-t border-[#16161E] pt-3 mb-4 space-y-1.5 text-xs text-[#A1A1AA]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717A]">Duration:</span>
                      <span className="text-white font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717A]">Language:</span>
                      <span className="text-white font-medium">{course.language}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717A]">Campuses:</span>
                      <span className="text-[#D4AF37] font-medium">{course.campuses.join(', ')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717A]">Intake:</span>
                      <span className="text-white">{course.intake}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717A]">Tuition Fee:</span>
                      <span className="text-white font-mono">{course.tuitionFeeEuro}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="flex-1 py-2.5 bg-[#15151D] hover:bg-[#1C1C26] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors border border-[#272733] cursor-pointer"
                  >
                    View Syllabus
                  </button>
                  <button
                    onClick={() => {
                      setAppForm(prev => ({
                        ...prev,
                        macroArea: course.title,
                        campus: course.campuses[0] || 'Milano Fashion'
                      }));
                      navigateTo('admissions');
                    }}
                    className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 4: SCHOOLS (The 4 Creative Macro-Areas) */}
      {/* ========================================================================= */}
      {currentPage === 'schools' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Academic Schools &amp; Departments
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              The Four Creative Schools
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Explore our specialized ateliers, research laboratories, and industry partnerships across the four foundational pillars of Istituto Marangoni.
            </p>
          </div>

          {/* School Selector Tabs */}
          <div className="flex items-center gap-2 border-b border-[#22222E] pb-4 mb-10 overflow-x-auto scrollbar-none">
            {macroAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedMacroArea(area.id)}
                className={`px-5 py-3 text-xs uppercase font-bold tracking-widest transition-all cursor-pointer shrink-0 ${
                  selectedMacroArea === area.id
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-[#101016] text-[#A1A1AA] hover:text-white border border-[#22222E]'
                }`}
              >
                School of {area.title}
              </button>
            ))}
          </div>

          {/* Active School Deep-Dive Container */}
          {(() => {
            const currentSchool = macroAreas.find(m => m.id === selectedMacroArea) || macroAreas[0];
            const schoolCourses = courses.filter(c => c.macroArea === currentSchool.id);

            return (
              <div>
                <div className="bg-[#0B0B10] border border-[#1E1E28] p-8 sm:p-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 h-64 bg-[#14141E] border border-[#272738] p-6 flex items-center justify-center">
                    <img src={currentSchool.image} alt={currentSchool.title} className="w-full h-full object-contain" />
                  </div>

                  <div className="lg:col-span-8">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
                      Department Profile · {schoolCourses.length} Programs
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                      School of {currentSchool.title}
                    </h2>
                    <p className="text-sm uppercase font-mono text-[#A1A1AA] tracking-wider mb-4">
                      {currentSchool.tagline}
                    </p>
                    <p className="text-sm text-[#D4D4D8] leading-relaxed mb-6">
                      {currentSchool.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {currentSchool.keyDisciplines.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#E4E4E7]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourseMacro(currentSchool.id);
                        navigateTo('courses');
                      }}
                      className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      View All {currentSchool.title} Degree Programs
                    </button>
                  </div>
                </div>

                {/* Programs in this School */}
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  {currentSchool.title} Degree Catalog
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {schoolCourses.map((c) => (
                    <div key={c.id} className="bg-[#0A0A0E] border border-[#1A1A22] p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#D4AF37] block mb-2">{c.qualification}</span>
                        <h4 className="font-serif text-lg font-bold text-white mb-2">{c.title}</h4>
                        <p className="text-xs text-[#8E8E93] line-clamp-3 mb-4">{c.description}</p>
                        <div className="text-xs text-[#A1A1AA] border-t border-[#161620] pt-3 mb-4">
                          <div>Duration: <strong className="text-white">{c.duration}</strong></div>
                          <div>Campuses: <strong className="text-[#D4AF37]">{c.campuses.join(', ')}</strong></div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveCourseModal(c)}
                        className="w-full py-2 bg-[#14141C] hover:bg-[#1A1A24] border border-[#272733] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                      >
                        Syllabus &amp; Curriculum
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 5: CAMPUSES (Global Campuses & Student Life) */}
      {/* ========================================================================= */}
      {currentPage === 'campuses' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Nine Global Destinations
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Campuses in World Fashion Capitals
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Every Istituto Marangoni campus is situated in the most prestigious fashion, design, and cultural district of its city — connecting students directly to luxury headquarters, runway ateliers, and flagship showrooms.
            </p>
          </div>

          {/* Cross-Campus Mobility Banner */}
          <div className="bg-[#12121A] border border-[#272738] p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest block mb-1">
                International Mobility Program
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Cross-School Semester Exchange
              </h3>
              <p className="text-xs text-[#A1A1AA] max-w-xl">
                Students enrolled in multi-year undergraduate programs can begin in Milan, transfer to Paris or London for Year 2, and complete their graduate collection in Florence or Milan without missing credits.
              </p>
            </div>
            <button
              onClick={() => navigateTo('admissions')}
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
            >
              Inquire Mobility Options
            </button>
          </div>

          {/* Campuses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="bg-[#0A0A0E] border border-[#1A1A24] hover:border-[#D4AF37] transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-48 bg-[#121218] border border-[#22222E] mb-5 overflow-hidden relative">
                    <img src={campus.image} alt={campus.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-[#D4AF37]">
                      {campus.city}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {campus.title}
                  </h3>

                  <p className="text-xs font-mono text-[#D4AF37] mb-3">
                    {campus.specialization}
                  </p>

                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                    {campus.description}
                  </p>

                  <div className="space-y-1 mb-4 text-xs text-[#A1A1AA]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{campus.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[#A1A1AA]">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{campus.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#161622] flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTourCity(campus.title);
                      setVirtualTourOpen(true);
                    }}
                    className="flex-1 py-2 bg-[#14141C] hover:bg-[#1A1A24] border border-[#272733] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    360° Studio Tour
                  </button>
                  <button
                    onClick={() => {
                      setAppForm(prev => ({ ...prev, campus: campus.title }));
                      navigateTo('admissions');
                    }}
                    className="px-3 py-2 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 6: MENTORS & ALUMNI NETWORK */}
      {/* ========================================================================= */}
      {currentPage === 'mentors' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Haute Couture Visionaries
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Super Mentors &amp; Alumni Network
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              At Istituto Marangoni, learning is an active dialogue with the leaders shaping luxury. Discover our resident Super Mentors and the extraordinary legacy of alumni founding iconic houses.
            </p>
          </div>

          {/* Mentors & Alumni Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {superMentors.map((person, idx) => (
              <div
                key={idx}
                className="bg-[#0A0A0E] border border-[#1A1A24] hover:border-[#D4AF37]/80 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-56 bg-[#121218] border border-[#22222E] mb-5 overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block mb-1">
                    {person.type === 'supermentor' ? '★ Active Super Mentor' : '★ Distinguished Alumnus'} · {person.house}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {person.name}
                  </h3>

                  <p className="text-xs font-medium text-[#71717A] uppercase mb-4">
                    {person.role}
                  </p>

                  <blockquote className="text-xs text-[#A1A1AA] italic leading-relaxed mb-4 border-l-2 border-[#D4AF37] pl-3">
                    "{person.quote}"
                  </blockquote>

                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                    {person.bio}
                  </p>
                </div>

                <button
                  onClick={() => setActiveMentorModal(person)}
                  className="w-full py-2.5 bg-[#14141C] hover:bg-[#1A1A24] border border-[#272733] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  View Mentorship Profile
                </button>
              </div>
            ))}
          </div>

          {/* Recruiter Network Directory */}
          <div className="bg-[#09090D] border border-[#1E1E28] p-8 sm:p-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2 font-bold">
                Career Service &amp; Corporate Placement
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-2">
                400+ Luxury Recruiter Houses
              </h2>
              <p className="text-xs text-[#A1A1AA]">
                89% of Istituto Marangoni graduates secure employment in international luxury brands within six months.
              </p>
            </div>

            {/* Recruiter Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {filteredRecruiters.map((rec, i) => (
                <div key={i} className="bg-[#101016] border border-[#1E1E26] p-4 text-center hover:border-[#D4AF37] transition-colors">
                  <span className="font-serif text-sm font-bold text-white block mb-1">{rec.name}</span>
                  <span className="text-[10px] text-[#D4AF37] block font-mono">{rec.category}</span>
                  <span className="text-[9px] text-[#71717A] block">{rec.city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 7: ADMISSIONS & SCHOLARSHIPS 2026 */}
      {/* ========================================================================= */}
      {currentPage === 'admissions' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Academic Year 2026 Intakes
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Admissions &amp; Scholarship Portal
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Step into the world capital of fashion and design. Submit your preliminary dossier, estimate your portfolio merit waiver, or check your existing application file status.
            </p>
          </div>

          {/* Application Tracker Box */}
          <div className="bg-[#101016] border border-[#22222E] p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest block mb-1">
                  Existing Applicant File Lookup
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Track Your Admission File Status
                </h3>
                <p className="text-xs text-[#8E8E93]">
                  Enter your reference tracking code (e.g. IM-2026-XXXXXX) to inspect your committee evaluation.
                </p>
              </div>

              <form onSubmit={handleLookup} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Enter IM-2026-XXXXXX"
                  value={lookupRef}
                  onChange={(e) => setLookupRef(e.target.value)}
                  className="bg-[#161620] border border-[#2B2B3A] text-white text-xs px-4 py-2.5 rounded-none font-mono focus:outline-none focus:border-[#D4AF37] w-full md:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  Lookup
                </button>
              </form>
            </div>

            {/* Lookup result display */}
            {lookupResult && (
              <div className="mt-6 pt-6 border-t border-[#1C1C26] bg-[#14141E] p-4 text-xs text-[#D4D4D8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#D4AF37] font-bold">Reference: {lookupResult.ref}</span>
                  <span className="px-2 py-0.5 bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/40 text-[10px] uppercase font-semibold">
                    {lookupResult.status}
                  </span>
                </div>
                <div>Candidate: <strong className="text-white">{lookupResult.name}</strong></div>
                <div>Programme: <strong className="text-white">{lookupResult.program}</strong></div>
                <div>Campus: <strong className="text-white">{lookupResult.campus}</strong></div>
                <div className="text-[#A1A1AA] pt-1">Next Step: {lookupResult.nextStep}</div>
              </div>
            )}
          </div>

          {/* Admissions Step-by-Step Guide */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#0A0A0E] border border-[#1A1A22] p-6">
              <span className="font-mono text-xs text-[#D4AF37] block mb-2 font-bold">STEP 01</span>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Online Application</h3>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Complete the application form with your academic transcripts and chosen campus.
              </p>
            </div>

            <div className="bg-[#0A0A0E] border border-[#1A1A22] p-6">
              <span className="font-mono text-xs text-[#D4AF37] block mb-2 font-bold">STEP 02</span>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Portfolio Assessment</h3>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Upload 8-12 creative works (Undergraduate) or 15-20 collection plates (Postgraduate).
              </p>
            </div>

            <div className="bg-[#0A0A0E] border border-[#1A1A22] p-6">
              <span className="font-mono text-xs text-[#D4AF37] block mb-2 font-bold">STEP 03</span>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Academic Interview</h3>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Online video interview with the Program Leader discussing your creative vision.
              </p>
            </div>

            <div className="bg-[#0A0A0E] border border-[#1A1A22] p-6">
              <span className="font-mono text-xs text-[#D4AF37] block mb-2 font-bold">STEP 04</span>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Offer &amp; Enrollment</h3>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Receive your official Offer of Admission, visa support letters, and housing guidance.
              </p>
            </div>
          </div>

          {/* Official Admissions Application Form */}
          <div className="bg-[#0A0A0E] border border-[#1E1E28] p-8 sm:p-12 mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2 font-bold">
                Preliminary Application Desk
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-2">
                Apply for 2026 Academic Intakes
              </h2>
              <p className="text-xs text-[#A1A1AA]">
                Submit your dossier to receive immediate portfolio review scheduling and a verified application reference tracking code.
              </p>
            </div>

            {appSubmitted ? (
              <div className="bg-[#12121A] border border-[#D4AF37] p-8 text-center max-w-xl mx-auto">
                <div className="w-14 h-14 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">Application Successfully Registered</span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Welcome to Istituto Marangoni
                </h3>
                <div className="bg-[#181822] border border-[#272736] p-4 font-mono text-sm text-[#D4AF37] mb-4">
                  Reference ID: <strong className="text-white text-base">{appReferenceNumber}</strong>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  Thank you, <strong className="text-white">{appForm.fullName}</strong>. An admissions counselor from our <strong className="text-white">{appForm.campus}</strong> campus has received your dossier and will reach out to <strong className="text-white">{appForm.email}</strong> within 24 business hours to schedule your formal portfolio assessment.
                </p>
                <button
                  onClick={() => {
                    setAppSubmitted(false);
                    setAppForm({
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
                  }}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sofia Rossi"
                      value={appForm.fullName}
                      onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    />
                    {appErrors.fullName && <p className="text-red-400 text-[10px] mt-1">{appErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="sofia@example.com"
                      value={appForm.email}
                      onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    />
                    {appErrors.email && <p className="text-red-400 text-[10px] mt-1">{appErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Phone (with country code) *
                    </label>
                    <input
                      type="tel"
                      placeholder="+39 340 123 4567"
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    />
                    {appErrors.phone && <p className="text-red-400 text-[10px] mt-1">{appErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Preferred Global Campus
                    </label>
                    <select
                      value={appForm.campus}
                      onChange={(e) => setAppForm({ ...appForm, campus: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    >
                      {campuses.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Program Study Level
                    </label>
                    <select
                      value={appForm.programLevel}
                      onChange={(e) => setAppForm({ ...appForm, programLevel: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Undergraduate BA (3-Year AFAM)">Undergraduate BA (3-Year AFAM / 180 ECTS)</option>
                      <option value="Postgraduate Master (1-Year)">Postgraduate Master (1-Year)</option>
                      <option value="Intensive Course (1-Year)">Intensive Course (1-Year)</option>
                      <option value="Summer Short Course">Summer Short Course</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Target Intake Term
                    </label>
                    <select
                      value={appForm.intake}
                      onChange={(e) => setAppForm({ ...appForm, intake: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="October 2026">October 2026</option>
                      <option value="February 2027">February 2027</option>
                      <option value="Summer 2026">Summer 2026</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Online Portfolio URL (Google Drive, Behance, Notion, or Website)
                    </label>
                    <input
                      type="url"
                      placeholder="https://behance.net/your-portfolio"
                      value={appForm.portfolioUrl}
                      onChange={(e) => setAppForm({ ...appForm, portfolioUrl: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                      Applicant Citizenship
                    </label>
                    <select
                      value={appForm.citizenship}
                      onChange={(e) => setAppForm({ ...appForm, citizenship: e.target.value })}
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="International / Non-EU">International / Non-EU (Visa Required)</option>
                      <option value="EU / EEA / Switzerland">EU / EEA / Switzerland Citizen</option>
                      <option value="Italian Citizen">Italian Citizen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                    Statement of Motivation (Short summary of creative ambitions)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your creative vision and why you wish to study at Istituto Marangoni..."
                    value={appForm.statement}
                    onChange={(e) => setAppForm({ ...appForm, statement: e.target.value })}
                    className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1C1C26]">
                  <span className="text-[11px] text-[#71717A]">
                    By submitting, your dossier will be routed directly to the campus admissions committee.
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    Submit Application Dossier
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 8: MAZE 35 EDITORIAL MAGAZINE */}
      {/* ========================================================================= */}
      {currentPage === 'magazine' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              The Official Cultural Dispatch
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Maze 35: The Creative Economy
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Curated essays, runway reviews, alumni conversations, and speculative research on the intersection of Italian luxury, digital avatars, and global design.
            </p>
          </div>

          {/* Featured Article Banner */}
          <div className="bg-[#0B0B10] border border-[#1E1E28] p-8 sm:p-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 h-72 bg-[#12121A] border border-[#272738] overflow-hidden flex items-center justify-center p-6">
              <img src="/assets/istituto-marangoni/hero-maze35.svg" alt="Maze 35 Cover" className="w-full h-full object-contain" />
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-widest block mb-2">
                ISSUE #08 · COVER STORY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                What Powers the Global Creative Economy?
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                From Milan to Lagos, Paris to Seoul: How international students and decentralized atelier networks are rewriting the grammar of luxury. Featuring interviews with Olivier Rousteing, Balmain creative teams, and Milan Fashion Week debutantes.
              </p>
              <button
                onClick={() => setActiveNewsModal(news[0])}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Read Full Issue Article
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-[#0A0A0E] border border-[#1A1A24] hover:border-[#D4AF37]/70 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37] mb-3">
                    <span>{item.category}</span>
                    <span className="text-[#71717A]">{item.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#181822] flex items-center justify-between text-xs text-[#D4AF37]">
                  <span className="font-mono text-[10px] text-[#71717A]">{item.readTime}</span>
                  <button
                    onClick={() => setActiveNewsModal(item)}
                    className="font-bold uppercase tracking-wider hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    Read Story
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PAGE 9: CONTACT & OPEN DAYS */}
      {/* ========================================================================= */}
      {currentPage === 'contact' && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">
              Global Admissions Network
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Contact &amp; International Open Days
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Connect with our international counseling offices in Milan, Paris, London, Dubai, or Miami. Book a 1-on-1 portfolio review or register for upcoming on-campus and virtual Open Days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#0A0A0E] border border-[#1E1E28] p-8">
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Send an Admissions Inquiry
              </h2>
              <p className="text-xs text-[#8E8E93] mb-6">
                Our academic advisors provide personal guidance on AFAM diplomas, portfolio preparation, and visa support.
              </p>

              {contactSuccess ? (
                <div className="bg-[#12121A] border border-[#D4AF37] p-8 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                  <h3 className="font-serif text-xl font-bold text-white mb-2">Inquiry Received</h3>
                  <p className="text-xs text-[#A1A1AA] mb-4">
                    Thank you. An admissions representative will contact you shortly with campus orientation details.
                  </p>
                  <button
                    onClick={() => {
                      setContactSuccess(false);
                      setContactForm({
                        name: '',
                        email: '',
                        phone: '',
                        campus: 'Milano Fashion',
                        topic: 'Admissions & Portfolio Evaluation',
                        message: ''
                      });
                    }}
                    className="px-5 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (contactForm.name && contactForm.email) setContactSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Preferred Campus</label>
                      <select
                        value={contactForm.campus}
                        onChange={(e) => setContactForm({ ...contactForm, campus: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                      >
                        {campuses.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Topic</label>
                      <select
                        value={contactForm.topic}
                        onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Admissions & Portfolio Evaluation">Admissions &amp; Portfolio Evaluation</option>
                        <option value="AFAM Accreditation / Degree Validation">AFAM Accreditation / Degree Validation</option>
                        <option value="Merit Scholarships & Financial Aid">Merit Scholarships &amp; Financial Aid</option>
                        <option value="Open Day Registration">Open Day Registration</option>
                        <option value="Campus Transfer / Mobility">Campus Transfer / Mobility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Please let us know which programs or questions you have..."
                      className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-3 py-2.5 rounded-none focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    Submit Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Global Campus Contacts */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Direct Campus Offices
              </h2>
              <div className="space-y-3">
                {campuses.slice(0, 5).map((c) => (
                  <div key={c.id} className="bg-[#0B0B10] border border-[#1A1A24] p-4 text-xs">
                    <span className="font-serif font-bold text-white block mb-0.5">{c.title}</span>
                    <span className="text-[#8E8E93] block mb-1.5">{c.address}</span>
                    <div className="flex items-center justify-between text-[#D4AF37] font-mono text-[11px]">
                      <span>{c.phone}</span>
                      <span className="text-[#A1A1AA] font-sans">{c.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* GLOBAL FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#030305] border-t border-[#181820] text-[#8E8E93] text-xs pt-16 pb-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#141418] flex items-center justify-center text-[#D4AF37] font-serif font-black text-base">
                M
              </div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">
                ISTITUTO MARANGONI
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 max-w-sm">
              The School of Fashion, Art &amp; Design — Milano 1935. Ninety years of Italian higher education shaping creative leaders, master craftsmen, and luxury directors worldwide.
            </p>
            <div className="space-y-1 text-[11px] text-[#71717A]">
              <div>Headquarters: {brand.headquarters}</div>
              <div>Direct Admissions: <span className="text-[#D4AF37] font-mono">{brand.admissionsPhone}</span></div>
              <div>Official Email: <span className="text-white font-mono">{brand.admissionsEmail}</span></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigateTo('home')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Main Showcase</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">About &amp; 1935 History</button></li>
              <li><button onClick={() => navigateTo('courses')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">All Degree Courses</button></li>
              <li><button onClick={() => navigateTo('schools')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">4 Creative Schools</button></li>
              <li><button onClick={() => navigateTo('campuses')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Global Campuses</button></li>
              <li><button onClick={() => navigateTo('mentors')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Super Mentors &amp; Alumni</button></li>
              <li><button onClick={() => navigateTo('admissions')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Admissions 2026</button></li>
              <li><button onClick={() => navigateTo('magazine')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Maze 35 Magazine</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Contact &amp; Open Days</button></li>
            </ul>
          </div>

          {/* Col 3: Schools */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => { setSelectedMacroArea('fashion'); navigateTo('schools'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">School of Fashion</button></li>
              <li><button onClick={() => { setSelectedMacroArea('design'); navigateTo('schools'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">School of Design</button></li>
              <li><button onClick={() => { setSelectedMacroArea('art'); navigateTo('schools'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">School of Art</button></li>
              <li><button onClick={() => { setSelectedMacroArea('fragrances'); navigateTo('schools'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Fragrances &amp; Cosmetics</button></li>
              <li><button onClick={() => navigateTo('courses')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Undergraduate BA Hons</button></li>
              <li><button onClick={() => navigateTo('courses')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Postgraduate Master's</button></li>
              <li><button onClick={() => navigateTo('admissions')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Merit Scholarships</button></li>
            </ul>
          </div>

          {/* Col 4: Statutory Disclosures */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Accreditation
            </h4>
            <p className="text-[11px] text-[#71717A] leading-relaxed mb-4">
              Italian Ministry of University and Research (MUR) decree n. 759 — AFAM First Level Academic Diplomas (180 ECTS). Manchester Metropolitan University (MMU) UK degree validation. French RNCP Level 7.
            </p>
            <div className="inline-block px-3 py-1.5 bg-[#0F0F14] border border-[#22222E] text-[10px] font-mono text-[#D4AF37]">
              QS World Top 100 Art &amp; Design
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#15151D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#63636E]">
          <div>
            © 1935–2026 Istituto Marangoni S.r.l. · P.IVA / Tax Code 09257600157 · All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors cursor-pointer">Accreditation Policies</button>
            <span>·</span>
            <button onClick={() => navigateTo('admissions')} className="hover:text-white transition-colors cursor-pointer">Application Terms</button>
            <span>·</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors cursor-pointer">Campus Directory</button>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: COURSE DETAILS MODAL */}
      {/* ========================================================================= */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0C0C12] border border-[#2A2A38] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveCourseModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#181822] text-[#A1A1AA] hover:text-white flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-mono uppercase text-[#D4AF37] px-2 py-0.5 bg-[#171722] border border-[#2E2E3E] inline-block mb-3">
              {activeCourseModal.level === 'undergraduate' ? 'Undergraduate 3-Year Degree' : activeCourseModal.level === 'postgraduate' ? 'Postgraduate Master (1-Year)' : 'Intensive Diploma'}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeCourseModal.title}
            </h2>

            <p className="text-xs font-mono text-[#D4AF37] mb-4">
              Qualification: {activeCourseModal.qualification}
            </p>

            <p className="text-sm text-[#D4D4D8] leading-relaxed mb-6">
              {activeCourseModal.description}
            </p>

            {/* Curriculum Highlights */}
            <div className="bg-[#12121A] border border-[#22222E] p-4 mb-6">
              <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
                Key Curriculum Modules
              </h3>
              <ul className="space-y-2 text-xs text-[#A1A1AA]">
                {activeCourseModal.curriculumHighlights.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="mb-6">
              <h3 className="font-serif text-xs font-bold text-white uppercase tracking-wider mb-2">
                Career Outcomes
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeCourseModal.careerOpportunities.map((car, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#151520] border border-[#252536] text-[11px] text-[#E4E4E7]">
                    {car}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Information */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#101016] p-3 text-xs text-[#A1A1AA] mb-6">
              <div>
                <span className="text-[10px] text-[#71717A] block">Duration</span>
                <span className="text-white font-medium">{activeCourseModal.duration}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] block">Language</span>
                <span className="text-white font-medium">{activeCourseModal.language}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] block">Intake</span>
                <span className="text-white font-medium">{activeCourseModal.intake}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] block">Tuition</span>
                <span className="text-[#D4AF37] font-mono font-bold">{activeCourseModal.tuitionFeeEuro}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setAppForm(prev => ({
                    ...prev,
                    macroArea: activeCourseModal.title,
                    campus: activeCourseModal.campuses[0] || 'Milano Fashion'
                  }));
                  setActiveCourseModal(null);
                  navigateTo('admissions');
                }}
                className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider text-center cursor-pointer"
              >
                Apply for this Course
              </button>
              <button
                onClick={() => {
                  setActiveCourseModal(null);
                  setIsBrochureModalOpen(true);
                }}
                className="px-5 py-3 border border-[#3F3F46] hover:border-[#D4AF37] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Download Syllabus PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: SUPER MENTOR PROFILE MODAL */}
      {/* ========================================================================= */}
      {activeMentorModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0C0C12] border border-[#2A2A38] max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveMentorModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#181822] text-[#A1A1AA] hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full h-56 bg-[#14141B] border border-[#22222E] mb-5 overflow-hidden">
              <img src={activeMentorModal.image} alt={activeMentorModal.name} className="w-full h-full object-cover" />
            </div>

            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block mb-1">
              {activeMentorModal.type === 'supermentor' ? '★ Active Super Mentor' : '★ Distinguished Alumnus'} · {activeMentorModal.house}
            </span>

            <h2 className="font-serif text-2xl font-bold text-white mb-1">
              {activeMentorModal.name}
            </h2>

            <p className="text-xs uppercase font-mono text-[#71717A] mb-4">
              {activeMentorModal.role}
            </p>

            <blockquote className="text-xs text-[#D4AF37] italic border-l-2 border-[#D4AF37] pl-3 mb-4 leading-relaxed">
              "{activeMentorModal.quote}"
            </blockquote>

            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
              {activeMentorModal.bio}
            </p>

            <button
              onClick={() => setActiveMentorModal(null)}
              className="w-full py-2.5 bg-[#15151F] border border-[#2A2A3A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E1E2C] cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: MAZE 35 ARTICLE READER MODAL */}
      {/* ========================================================================= */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0C0C12] border border-[#2A2A38] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveNewsModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#181822] text-[#A1A1AA] hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 text-[10px] font-mono text-[#D4AF37] mb-2">
              <span>{activeNewsModal.category}</span>
              <span>·</span>
              <span>{activeNewsModal.readTime}</span>
              <span>·</span>
              <span className="text-[#71717A]">{activeNewsModal.date}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {activeNewsModal.title}
            </h2>

            <p className="text-sm text-[#D4D4D8] font-medium leading-relaxed mb-6 border-b border-[#1E1E28] pb-4">
              {activeNewsModal.summary}
            </p>

            <div className="text-xs text-[#A1A1AA] leading-relaxed space-y-4 mb-6">
              <p>
                The global fashion landscape in 2026 demands unprecedented synergy between artisanal heritage and digital agility. As luxury conglomerates rethink their supply chains, sustainability credentials, and digital consumer touchpoints, the role of the creative director has expanded from garment stylist to multifaceted cultural anthropologist.
              </p>
              <p>
                At Istituto Marangoni's ateliers in Milan, Paris, London, and Florence, students engage directly with industry leaders through live briefs. Whether engineering phygital garments with real-time cloth simulation in CLO3D or exploring zero-waste pattern drafting, graduates leave equipped not just with technical virtuosity, but with the cultural fluency necessary to direct global ateliers.
              </p>
              <p>
                "Our mission is to empower individual creative voices that challenge conventional luxury paradigms," notes the academic directorship. "Through our ongoing collaborations with houses like Balmain, Ermenegildo Zegna, and L'Oréal, our graduates step onto the runway prepared to lead."
              </p>
            </div>

            <button
              onClick={() => setActiveNewsModal(null)}
              className="w-full py-2.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Return to Magazine
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: GLOBAL SEARCH MODAL */}
      {/* ========================================================================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-20">
          <div className="bg-[#0D0D14] border border-[#2A2A38] max-w-2xl w-full p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono tracking-wider text-[#D4AF37]">
                Search Istituto Marangoni
              </span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-[#8E8E93] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mb-6">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-3.5" />
              <input
                type="text"
                autoFocus
                placeholder="Search courses, campuses, professors, or news..."
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                className="w-full bg-[#151520] border border-[#2B2B3C] text-white text-sm pl-10 pr-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Results Preview */}
            <div className="max-h-[60vh] overflow-y-auto space-y-4">
              {globalSearchQuery.trim() === '' ? (
                <div className="text-xs text-[#71717A] text-center py-8">
                  Type to search across undergraduate courses, postgraduate masters, 9 global campuses, and faculty mentors.
                </div>
              ) : (
                <>
                  {/* Course Results */}
                  {globalSearchResults.courses.length > 0 && (
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-2">
                        Courses ({globalSearchResults.courses.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.courses.map(c => (
                          <div
                            key={c.id}
                            onClick={() => {
                              setActiveCourseModal(c);
                              setIsSearchOpen(false);
                            }}
                            className="p-2.5 bg-[#12121A] hover:bg-[#181824] border border-[#1E1E2A] flex items-center justify-between cursor-pointer text-xs"
                          >
                            <span className="text-white font-medium">{c.title}</span>
                            <span className="text-[#8E8E93] font-mono text-[10px]">{c.qualification}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Campus Results */}
                  {globalSearchResults.campuses.length > 0 && (
                    <div>
                      <span className="text-[10px] font-mono text-[#38BDF8] uppercase block mb-2">
                        Campuses ({globalSearchResults.campuses.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.campuses.map(cp => (
                          <div
                            key={cp.id}
                            onClick={() => {
                              setSelectedCampusId(cp.id);
                              setIsSearchOpen(false);
                              navigateTo('campuses');
                            }}
                            className="p-2.5 bg-[#12121A] hover:bg-[#181824] border border-[#1E1E2A] flex items-center justify-between cursor-pointer text-xs"
                          >
                            <span className="text-white font-medium">{cp.title}</span>
                            <span className="text-[#8E8E93] text-[10px]">{cp.specialization}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mentor Results */}
                  {globalSearchResults.mentors.length > 0 && (
                    <div>
                      <span className="text-[10px] font-mono text-[#C084FC] uppercase block mb-2">
                        Super Mentors &amp; Alumni ({globalSearchResults.mentors.length})
                      </span>
                      <div className="space-y-1.5">
                        {globalSearchResults.mentors.map((m, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setActiveMentorModal(m);
                              setIsSearchOpen(false);
                            }}
                            className="p-2.5 bg-[#12121A] hover:bg-[#181824] border border-[#1E1E2A] flex items-center justify-between cursor-pointer text-xs"
                          >
                            <span className="text-white font-medium">{m.name}</span>
                            <span className="text-[#D4AF37] text-[10px]">{m.house}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {globalSearchResults.courses.length === 0 &&
                    globalSearchResults.campuses.length === 0 &&
                    globalSearchResults.mentors.length === 0 && (
                      <div className="text-xs text-[#71717A] text-center py-8">
                        No matches found for "{globalSearchQuery}". Try searching "Fashion", "Milano", "Balmain", or "Interior".
                      </div>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: DOWNLOAD PROSPECTUS MODAL */}
      {/* ========================================================================= */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0C0C12] border border-[#2A2A38] max-w-md w-full p-6 sm:p-8 relative">
            <button
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#8E8E93] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
              Course Guide 2026 (PDF)
            </span>

            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              Download Course Prospectus
            </h2>

            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
              Enter your email address to receive the official 84-page Istituto Marangoni 2026 Academic Prospectus with detailed curricula, fees, and campus housing directories.
            </p>

            {brochureSuccess ? (
              <div className="bg-[#12121A] border border-[#D4AF37] p-5 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <span className="text-xs font-bold text-white block mb-1">Prospectus Dispatched</span>
                <p className="text-[11px] text-[#A1A1AA]">
                  The 2026 Course Prospectus has been sent to <strong className="text-white">{brochureEmail}</strong>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (brochureEmail.includes('@')) setBrochureSuccess(true);
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={brochureEmail}
                  onChange={(e) => setBrochureEmail(e.target.value)}
                  className="w-full bg-[#12121A] border border-[#272736] text-white text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Download Instant PDF
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 6: 360° VIRTUAL STUDIO TOUR SIMULATOR */}
      {/* ========================================================================= */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0C0C12] border border-[#2A2A38] max-w-3xl w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setVirtualTourOpen(false)}
              className="absolute top-4 right-4 text-[#8E8E93] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-1">
              Virtual Atelier Experience
            </span>

            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              360° Studio Tour: {tourCity}
            </h2>

            <p className="text-xs text-[#A1A1AA] mb-4">
              Explore the pattern-making ateliers, digital couture suites, CLO3D simulation lab, and library archives of the {tourCity} campus.
            </p>

            {/* Simulated 360 viewer */}
            <div className="w-full h-80 bg-[#121218] border border-[#22222E] relative overflow-hidden flex items-center justify-center mb-6">
              <img
                src={activeCampus.image}
                alt={tourCity}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-[10px]">
                    ● LIVE 360° PANORAMIC ATELIER VIEW
                  </span>
                  <span className="text-[#8E8E93] font-mono text-[10px]">Rotational Angle: 180°</span>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-black/80 backdrop-blur-md border border-[#3F3F4E] text-xs text-white">
                    Simulated Virtual Reality Environment — High-definition 4K Spatial Audio
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#A1A1AA]">
                  <span>Studio A: Draping &amp; Tailoring</span>
                  <span>Studio B: 3D CAD &amp; Virtual Runways</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8E8E93]">
                Want to visit in person? Schedule an on-campus walk-through with our admissions team.
              </span>
              <button
                onClick={() => {
                  setVirtualTourOpen(false);
                  navigateTo('contact');
                }}
                className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Book Campus Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
