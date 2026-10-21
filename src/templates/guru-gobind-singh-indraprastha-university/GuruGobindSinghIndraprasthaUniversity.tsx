import React, { useState, useMemo, useEffect } from 'react';
import {
  School,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Download,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  Building2,
  Users,
  Compass,
  FileText,
  AlertCircle,
  HelpCircle,
  Briefcase,
  Layers,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Send,
  CreditCard,
  X,
  Play,
  Pause,
  ArrowRight,
  Eye
} from 'lucide-react';
import {
  IPU_CONFIG,
  SchoolItem,
  ProgramItem,
  AffiliatedCollegeItem,
  NoticeItem
} from './guru-gobind-singh-indraprastha-university.config';

export default function GuruGobindSinghIndraprasthaUniversity() {
  // Navigation active tab
  const [activeNavSection, setActiveNavSection] = useState<'home' | 'about' | 'schools' | 'programs' | 'colleges' | 'admissions' | 'notices' | 'campus' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Hero carousel state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  // School filtering
  const [selectedCampusFilter, setSelectedCampusFilter] = useState<'all' | 'dwarka' | 'east-delhi'>('all');
  const [selectedSchoolModal, setSelectedSchoolModal] = useState<SchoolItem | null>(null);

  // Programs filtering
  const [programSearchQuery, setProgramSearchQuery] = useState('');
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState<string>('all');
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramItem | null>(null);

  // Colleges filtering
  const [collegeSearchQuery, setCollegeSearchQuery] = useState('');

  // Notice board filtering
  const [noticeSearchQuery, setNoticeSearchQuery] = useState('');
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState<string>('all');
  const [selectedNoticeModal, setSelectedNoticeModal] = useState<NoticeItem | null>(null);

  // Interactive Admissions Form
  const [appForm, setAppForm] = useState({
    candidateName: '',
    email: '',
    mobile: '',
    programId: 'prog-btech-cse',
    qualificationMarks: '85',
    category: 'Delhi General (85% Quota)',
    entranceExam: 'JEE Main 2026',
    entranceRank: ''
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [generatedAppId, setGeneratedAppId] = useState('');

  // Result Checker Modal
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [rollNumberInput, setRollNumberInput] = useState('');
  const [resultSearchResult, setResultSearchResult] = useState<any>(null);

  // Fee Portal Modal
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [feeForm, setFeeForm] = useState({
    enrollmentNo: '',
    feeType: 'Annual Academic Fee',
    amount: '1,45,000',
    semester: 'Semester 1'
  });
  const [feePaymentSuccess, setFeePaymentSuccess] = useState(false);

  // Auto carousel timer
  useEffect(() => {
    if (!isCarouselPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % IPU_CONFIG.heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCarouselPlaying]);

  // Filtered Schools
  const filteredSchools = useMemo(() => {
    return IPU_CONFIG.schools.filter((school) => {
      if (selectedCampusFilter === 'dwarka') return school.campus.includes('Dwarka');
      if (selectedCampusFilter === 'east-delhi') return school.campus.includes('East Delhi');
      return true;
    });
  }, [selectedCampusFilter]);

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    return IPU_CONFIG.programs.filter((prog) => {
      const matchesSearch =
        prog.title.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        prog.schoolCode.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        prog.careerRoles.some((c) => c.toLowerCase().includes(programSearchQuery.toLowerCase()));
      const matchesDegree = selectedDegreeLevel === 'all' || prog.degreeLevel === selectedDegreeLevel;
      return matchesSearch && matchesDegree;
    });
  }, [programSearchQuery, selectedDegreeLevel]);

  // Filtered Colleges
  const filteredColleges = useMemo(() => {
    return IPU_CONFIG.affiliatedColleges.filter((c) => {
      const q = collegeSearchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.popularPrograms.some((p) => p.toLowerCase().includes(q))
      );
    });
  }, [collegeSearchQuery]);

  // Filtered Notices
  const filteredNotices = useMemo(() => {
    return IPU_CONFIG.notices.filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(noticeSearchQuery.toLowerCase());
      const matchesCategory = selectedNoticeCategory === 'all' || n.category === selectedNoticeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [noticeSearchQuery, selectedNoticeCategory]);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `IPU-2026-${randomNum}`;
    setGeneratedAppId(trackingId);
    setApplicationSubmitted(true);
  };

  const handleResultSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNumberInput.trim()) return;
    setResultSearchResult({
      rollNumber: rollNumberInput,
      candidateName: 'Aditya Vardhan Sharma',
      fatherName: 'Rajesh Sharma',
      institution: 'University School of Information, Communication & Technology (USICT)',
      programme: 'B.Tech in Computer Science & Engineering (8th Sem)',
      sgpa: '8.92',
      cgpa: '8.76',
      division: 'First Class with Distinction',
      declaredDate: '19-Oct-2026',
      status: 'PASS / PROMOTED'
    });
  };

  const handleFeePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setFeePaymentSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#ffcb04] selection:text-[#041d54]">
      {/* 1. TOP UTILITY HEADER (Govt. NCT & Helpline Bar) */}
      <div className="bg-[#031336] text-slate-200 border-b border-[#0f2d6b] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Govt. of NCT of Delhi · NAAC Grade &quot;A++&quot; (3.56 CGPA)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Motto: <span className="italic font-serif text-amber-200">ज्योतिर्वृणीत तमसो विजानन्</span>
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-slate-300">ISO 9001:2015 Certified</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:01125302167"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Helpline: 011-25302167</span>
            </a>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setIsFeeModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <CreditCard className="w-3 h-3" />
              <span>Online Fees</span>
            </button>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setIsResultModalOpen(true)}
              className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Award className="w-3 h-3" />
              <span>Results Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN LOGO & BRANDING MASTHEAD */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/guru-gobind-singh-indraprastha-university/HzhWxArbZzeb.png"
              alt="GGSIPU Official Seal"
              className="h-16 w-auto object-contain drop-shadow-sm cursor-pointer"
              onError={(e) => {
                // Fallback to SVG logo if PNG is missing
                (e.currentTarget as HTMLImageElement).src = '/assets/guru-gobind-singh-indraprastha-university/logo.svg';
              }}
              onClick={() => setActiveNavSection('home')}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                  State University
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                  NIRF Top 75
                </span>
              </div>
              <h1
                onClick={() => setActiveNavSection('home')}
                className="text-lg sm:text-2xl font-serif font-black text-[#041d54] tracking-tight hover:text-blue-900 cursor-pointer transition-colors"
              >
                GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                गुरु गोबिन्द सिंह इन्द्रप्रस्थ विश्वविद्यालय · Sector 16-C, Dwarka &amp; Surajmal Vihar, East Delhi
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <img
              src="/assets/guru-gobind-singh-indraprastha-university/badge-naac-a-plus.svg"
              alt="NAAC Grade A++"
              className="h-11 w-auto"
            />
            <button
              onClick={() => {
                setActiveNavSection('admissions');
                window.scrollTo({ top: 900, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Apply Online 2026
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-0.5 bg-[#041d54] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#041d54] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#041d54]"></div>
          </button>
        </div>

        {/* 3. PRIMARY NAVIGATION BAR */}
        <nav className="bg-[#041d54] text-white hidden lg:block border-t border-[#092666]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <button
                onClick={() => setActiveNavSection('home')}
                className={`px-4 py-3 font-semibold transition-colors flex items-center gap-1.5 ${
                  activeNavSection === 'home' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => setActiveNavSection('about')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'about' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                About University
              </button>

              <button
                onClick={() => setActiveNavSection('schools')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'schools' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                University Schools (15)
              </button>

              <button
                onClick={() => setActiveNavSection('programs')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'programs' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Programmes
              </button>

              <button
                onClick={() => setActiveNavSection('colleges')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'colleges' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Affiliated Colleges (120+)
              </button>

              <button
                onClick={() => setActiveNavSection('admissions')}
                className={`px-4 py-3 font-semibold transition-colors flex items-center gap-1 ${
                  activeNavSection === 'admissions' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-amber-300'
                }`}
              >
                <span>Admissions 2026</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              </button>

              <button
                onClick={() => setActiveNavSection('notices')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'notices' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Notices &amp; Circulars
              </button>

              <button
                onClick={() => setActiveNavSection('campus')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'campus' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Campuses
              </button>

              <button
                onClick={() => setActiveNavSection('contact')}
                className={`px-4 py-3 font-semibold transition-colors ${
                  activeNavSection === 'contact' ? 'bg-[#ffcb04] text-[#041d54]' : 'hover:bg-[#072a78] text-white'
                }`}
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsResultModalOpen(true)}
                className="text-xs bg-[#0b338e] hover:bg-blue-800 text-white px-3 py-1.5 rounded transition-colors flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Exam Results</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#041d54] text-white px-4 py-3 border-t border-slate-700 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About University' },
              { id: 'schools', label: 'University Schools (15)' },
              { id: 'programs', label: 'Programmes & Degrees' },
              { id: 'colleges', label: 'Affiliated Colleges' },
              { id: 'admissions', label: 'Admissions 2026-27' },
              { id: 'notices', label: 'Notices & Circulars' },
              { id: 'campus', label: 'Dual Campuses' },
              { id: 'contact', label: 'Contact & Helpline' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNavSection(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded text-sm font-medium ${
                  activeNavSection === item.id ? 'bg-[#ffcb04] text-[#041d54] font-bold' : 'text-slate-200 hover:bg-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 4. RUNNING LIVE ALERT TICKER (Extracted from source index HTML) */}
      <div className="bg-[#fff9db] border-b border-[#ffe066] text-[#664d03] text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-red-600 text-white font-black text-[10px] uppercase px-2 py-0.5 rounded tracking-wider animate-pulse">
              LIVE NOTICE
            </span>
          </div>

          <div className="truncate text-slate-800 font-medium text-xs flex-1">
            <span className="font-semibold text-blue-900">
              | Admission in BBA, B.Com, Distance &amp; Online Programmes (CDOE) |
            </span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="font-semibold text-emerald-800">
              SPOT ROUND PARAMEDICAL (B.PT/B.PO/BASLP/BMLS) OFFLINE COUNSELLING FOR SESSION 2026-27
            </span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="text-slate-600">
              Grievance / Helpline: 011-25302167, 011-25302169 · admissiongrievances@ipu.ac.in
            </span>
          </div>

          <button
            onClick={() => setActiveNavSection('notices')}
            className="text-xs font-bold text-blue-900 hover:underline shrink-0 flex items-center gap-0.5"
          >
            <span>All Circulars</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* MAIN VIEWPORT BODY ROUTED BY NAVIGATION */}
      {activeNavSection === 'home' && (
        <>
          {/* 5. HERO PHOTOGRAPHY CAROUSEL (Original Photos 7BvRwNmAo35z, X19YSLXVHTL1, phR2KoRsnEf1, etc.) */}
          <section className="relative w-full bg-slate-900 overflow-hidden">
            <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full">
              {IPU_CONFIG.heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.82]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041d54]/95 via-[#041d54]/50 to-transparent" />

                  {/* Slide text overlay */}
                  <div className="absolute bottom-10 left-4 sm:left-12 max-w-3xl text-white pr-4">
                    <span className="inline-block bg-[#ffcb04] text-[#041d54] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow">
                      {slide.badge}
                    </span>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight mb-2 drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4 max-w-2xl drop-shadow">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveNavSection('admissions')}
                        className="px-5 py-2.5 bg-[#ffcb04] hover:bg-amber-400 text-[#041d54] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        Explore Admissions 2026
                      </button>
                      <button
                        onClick={() => setActiveNavSection('schools')}
                        className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur text-white font-semibold text-xs uppercase tracking-wider rounded-lg border border-white/40 transition-colors cursor-pointer"
                      >
                        View 15 University Schools
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel navigation controls */}
            <button
              onClick={() =>
                setCurrentSlideIndex(
                  (prev) => (prev - 1 + IPU_CONFIG.heroSlides.length) % IPU_CONFIG.heroSlides.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev + 1) % IPU_CONFIG.heroSlides.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide dots and autoplay indicator */}
            <div className="absolute bottom-3 right-6 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
                className="p-1 rounded-full bg-white/20 hover:bg-white/40 text-white text-xs cursor-pointer mr-2"
                title={isCarouselPlaying ? 'Pause autoplay' : 'Resume autoplay'}
              >
                {isCarouselPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              {IPU_CONFIG.heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`h-2 transition-all rounded-full ${
                    i === currentSlideIndex ? 'w-8 bg-[#ffcb04]' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* 6. FOUR URGENT ACTION CARDS (Original UI Icons) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-10 relative z-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Admissions */}
              <div
                onClick={() => setActiveNavSection('admissions')}
                className="bg-[#e8f7fd] border-4 border-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/assets/guru-gobind-singh-indraprastha-university/zXOtYZWF44iW.png"
                    alt="Admission"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                      Session 2026-27
                    </span>
                    <h3 className="font-bold text-[#041d54] text-sm group-hover:text-blue-700 transition-colors">
                      Admissions &amp; CDOE
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Distance &amp; Online BBA, B.Com, and Spot Round counselling notifications.
                </p>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-700">
                  <span>Enter Admission Desk</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 2: Examinations */}
              <div
                onClick={() => setIsResultModalOpen(true)}
                className="bg-[#e8f7fd] border-4 border-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/assets/guru-gobind-singh-indraprastha-university/gEFSWuAusIfv.png"
                    alt="Examinations"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                      Examination Wing
                    </span>
                    <h3 className="font-bold text-[#041d54] text-sm group-hover:text-blue-700 transition-colors">
                      Results &amp; Datesheets
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Online fees of examination, gazetted results, supplementary notifications.
                </p>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-700">
                  <span>Check Student Result</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 3: NAAC Accreditation */}
              <div
                onClick={() => setActiveNavSection('about')}
                className="bg-[#e8f7fd] border-4 border-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/assets/guru-gobind-singh-indraprastha-university/Msgxoai7JWgU.png"
                    alt="Accreditation"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                      Valid for 7 Years
                    </span>
                    <h3 className="font-bold text-[#041d54] text-sm group-hover:text-blue-700 transition-colors">
                      NAAC Grade &quot;A++&quot;
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Accredited with CGPA of 3.56 on seven-point scale w.e.f. 14-02-2023.
                </p>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-700">
                  <span>View Accreditation Report</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 4: Contact & Helpline */}
              <div
                onClick={() => setActiveNavSection('contact')}
                className="bg-[#e8f7fd] border-4 border-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/assets/guru-gobind-singh-indraprastha-university/jw7pRMjBnGsv.png"
                    alt="Contact"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                      Help &amp; Support
                    </span>
                    <h3 className="font-bold text-[#041d54] text-sm group-hover:text-blue-700 transition-colors">
                      Contact &amp; Grievances
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Direct helpline 011-25302167, Samarth ERP helpdesk, Dwarka &amp; East Delhi.
                </p>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-700">
                  <span>View Offices &amp; Locations</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </section>

          {/* 7. FOUR NOTICE PANELS (Faithful reproduction of IPU homepage's 4 columns) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
                  University Notice System
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#041d54]">
                  Official Announcements &amp; Notice Boards
                </h2>
              </div>
              <button
                onClick={() => setActiveNavSection('notices')}
                className="text-xs font-bold text-[#041d54] hover:text-blue-700 flex items-center gap-1 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm"
              >
                <span>View Full Notice Archive</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Box A: Admissions */}
              <div className="bg-[#b9eafc]/40 border-4 border-white rounded-2xl p-5 shadow-md flex flex-col justify-between h-[420px]">
                <div>
                  <h3 className="text-lg font-bold text-[#041d54] border-b pb-2 mb-3 flex items-center justify-between">
                    <span>Admissions 2026-27...</span>
                    <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-mono">LIVE</span>
                  </h3>
                  <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1 text-xs">
                    {IPU_CONFIG.noticeBoxes.admissions.marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveNavSection('admissions')}
                        className="p-2.5 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-start gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveNavSection('admissions')}
                  className="w-full mt-4 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                >
                  Apply Online Portal
                </button>
              </div>

              {/* Box B: Important Links */}
              <div className="bg-[#b9eafc]/40 border-4 border-white rounded-2xl p-5 shadow-md flex flex-col justify-between h-[420px]">
                <div>
                  <h3 className="text-lg font-bold text-[#041d54] border-b pb-2 mb-3">
                    Important Links...
                  </h3>
                  <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1 text-xs">
                    {IPU_CONFIG.noticeBoxes.importantLinks.marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveNavSection('schools')}
                        className="p-2.5 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-start gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveNavSection('schools')}
                  className="w-full mt-4 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                >
                  University Schools
                </button>
              </div>

              {/* Box C: Students Corner */}
              <div className="bg-[#b9eafc]/40 border-4 border-white rounded-2xl p-5 shadow-md flex flex-col justify-between h-[420px]">
                <div>
                  <h3 className="text-lg font-bold text-[#041d54] border-b pb-2 mb-3">
                    Students Corner...
                  </h3>
                  <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1 text-xs">
                    {IPU_CONFIG.noticeBoxes.students.marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setIsFeeModalOpen(true)}
                        className="p-2.5 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-start gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setIsFeeModalOpen(true)}
                  className="w-full mt-4 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                >
                  Online Fee Services
                </button>
              </div>

              {/* Box D: Alerts */}
              <div className="bg-[#b9eafc]/40 border-4 border-white rounded-2xl p-5 shadow-md flex flex-col justify-between h-[420px]">
                <div>
                  <h3 className="text-lg font-bold text-[#041d54] border-b pb-2 mb-3 flex items-center justify-between">
                    <span>Alerts &amp; Circulars...</span>
                    <span className="text-[10px] bg-amber-500 text-[#041d54] font-bold px-2 py-0.5 rounded">RECENT</span>
                  </h3>
                  <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1 text-xs">
                    {IPU_CONFIG.noticeBoxes.alerts.marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveNavSection('notices')}
                        className="p-2.5 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-start gap-2"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveNavSection('notices')}
                  className="w-full mt-4 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                >
                  View All Notices
                </button>
              </div>
            </div>
          </section>

          {/* 8. KEY STATISTICAL HIGHLIGHTS */}
          <section className="bg-gradient-to-r from-[#041d54] via-[#092666] to-[#041d54] text-white py-12 px-4 sm:px-8 border-y border-blue-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Institutional Benchmarks
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1 text-white">
                  GGSIPU at a Glance
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Established in 1998 under Delhi State Act 9 of 1998, empowering professional higher education.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="text-3xl sm:text-4xl font-serif font-black text-amber-400 mb-1">
                    {IPU_CONFIG.university.stats.schoolsCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    University Schools (USS)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Dwarka &amp; East Delhi</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400 mb-1">
                    {IPU_CONFIG.university.stats.affiliatedColleges}+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Affiliated Premier Colleges
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Delhi-NCR Region</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="text-3xl sm:text-4xl font-serif font-black text-cyan-400 mb-1">
                    {IPU_CONFIG.university.stats.totalStudents}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Active Student Body
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">UG, PG &amp; Doctoral</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="text-3xl sm:text-4xl font-serif font-black text-rose-400 mb-1">
                    {IPU_CONFIG.university.stats.highestPackage}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Highest Placement Offer
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Central CCGPC Cell</div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. FEATURED UNIVERSITY SCHOOLS TEASER */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
                  Academic Excellence
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#041d54]">
                  15 Specialized University Schools of Studies
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Autonomous centres of advanced learning spanning Computing, AI, Robotics, Law, Management, and Biotechnology.
                </p>
              </div>

              <button
                onClick={() => setActiveNavSection('schools')}
                className="px-4 py-2 bg-[#041d54] text-white hover:bg-blue-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Explore All 15 Schools</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {IPU_CONFIG.schools.slice(0, 3).map((school) => (
                <div
                  key={school.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black text-[#041d54] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {school.shortCode}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {school.campus.includes('East Delhi') ? 'East Delhi EDC' : 'Dwarka Main'}
                      </span>
                    </div>

                    <h3 className="font-bold text-[#041d54] text-base mb-2 leading-snug">
                      {school.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {school.description}
                    </p>

                    <div className="text-xs space-y-1 mb-4 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div><strong className="text-slate-900">Dean:</strong> {school.dean}</div>
                      <div><strong className="text-slate-900">Highest Package:</strong> ₹{school.keyStats.highestPackageLPA} LPA</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSchoolModal(school);
                    }}
                    className="w-full py-2 bg-slate-100 hover:bg-blue-50 text-blue-900 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Curriculum &amp; Faculty</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 10. LEADERSHIP & VC MESSAGE */}
          <section className="bg-slate-100 py-12 px-4 sm:px-8 border-y border-slate-200">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-300 p-6 sm:p-10 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 text-center">
                  <div className="w-32 h-32 rounded-2xl bg-[#041d54] p-2 flex items-center justify-center text-white shadow-lg mx-auto">
                    <img
                      src="/assets/guru-gobind-singh-indraprastha-university/HzhWxArbZzeb.png"
                      alt="GGSIPU"
                      className="max-h-24 w-auto object-contain filter invert"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      University Leadership
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                    Message from the Vice Chancellor
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#041d54] mt-1 mb-2">
                    Prof. (Dr.) Mahesh Verma
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-medium">
                    Padma Shri Awardee · Dr. B.C. Roy National Awardee · Vice Chancellor, GGSIPU
                  </p>
                  <blockquote className="text-slate-700 text-sm italic leading-relaxed border-l-4 border-[#ffcb04] pl-4 mb-4">
                    &ldquo;GGSIPU stands tall with NAAC A++ accreditation (3.56 CGPA), pioneering research in AI, Robotics, and Biotechnology, state-of-the-art infrastructure across Dwarka and our green East Delhi Campus, and over 120 premier colleges shaping India’s future workforce.&rdquo;
                  </blockquote>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-50 text-blue-800 font-semibold px-2.5 py-1 rounded">
                      Dwarka Main: 60+ Acres
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded">
                      East Delhi: 18.75-Acre Net-Zero Campus
                    </span>
                    <span className="bg-amber-50 text-amber-800 font-semibold px-2.5 py-1 rounded">
                      Samarth ERP Automated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* VIEW: ABOUT UNIVERSITY */}
      {activeNavSection === 'about' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Institutional Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#041d54]">
              About Guru Gobind Singh Indraprastha University
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Established on 28th July 1998 by the Government of NCT of Delhi under the provisions of Guru Gobind Singh Indraprastha University Act, 1998 (Delhi Act No. 09 of 1998).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#041d54] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#041d54] mb-2">NAAC Grade &quot;A++&quot;</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conferred the highest tier NAAC Grade &quot;A++&quot; with a cumulative score of 3.56 CGPA out of 4.00, valid until February 2030 across both campuses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#041d54] mb-2">Dual Smart Campuses</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating a 60-acre flagship administrative &amp; research campus in Dwarka Sector 16-C and an 18.75-acre smart Net-Zero energy campus in Surajmal Vihar, East Delhi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#041d54] mb-2">120+ Premier Colleges</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Affiliating top government and self-financing engineering, management, law, and medical colleges across the Delhi National Capital Region.
              </p>
            </div>
          </div>

          {/* Statutory leadership table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10">
            <h3 className="text-lg font-bold text-[#041d54] mb-4">
              Statutory Officers &amp; Administration
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Office</th>
                    <th className="p-3">Incumbent</th>
                    <th className="p-3">Designation / Role</th>
                    <th className="p-3">Secretariat Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {IPU_CONFIG.leadership.map((leader, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-[#041d54]">{leader.role}</td>
                      <td className="p-3 font-semibold text-slate-900">{leader.name}</td>
                      <td className="p-3">{leader.designation}</td>
                      <td className="p-3 text-slate-500">{leader.office}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* VIEW: UNIVERSITY SCHOOLS (15) */}
      {activeNavSection === 'schools' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
                Academic Divisions
              </span>
              <h2 className="text-3xl font-serif font-black text-[#041d54]">
                15 University Schools of Studies (USS)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Centres of excellence directly situated on university campuses.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setSelectedCampusFilter('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                  selectedCampusFilter === 'all' ? 'bg-[#041d54] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (15)
              </button>
              <button
                onClick={() => setSelectedCampusFilter('dwarka')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                  selectedCampusFilter === 'dwarka' ? 'bg-[#041d54] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dwarka Main
              </button>
              <button
                onClick={() => setSelectedCampusFilter('east-delhi')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                  selectedCampusFilter === 'east-delhi' ? 'bg-[#041d54] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                East Delhi (USAR &amp; USDI)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-black text-[#041d54] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      {school.shortCode}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Est. {school.established}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#041d54] text-base mb-2">
                    {school.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {school.description}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-4 space-y-1">
                    <div><span className="font-bold text-slate-800">Campus:</span> {school.campus}</div>
                    <div><span className="font-bold text-slate-800">Dean:</span> {school.dean}</div>
                    <div><span className="font-bold text-slate-800">Students:</span> {school.keyStats.studentsCount} Enrolled</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Departments &amp; Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {school.departments.map((dep, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSchoolModal(school)}
                  className="w-full py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect School Details</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VIEW: ACADEMIC PROGRAMMES */}
      {activeNavSection === 'programs' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Degree Catalog
            </span>
            <h2 className="text-3xl font-serif font-black text-[#041d54]">
              Academic Programmes &amp; Courses
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Search programs across Engineering, Law, Design, Management, Medicine, and Biotechnology.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by degree title, code, career path..."
                value={programSearchQuery}
                onChange={(e) => setProgramSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {['all', 'Undergraduate', 'Postgraduate', 'Online / Distance'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDegreeLevel(level)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    selectedDegreeLevel === level ? 'bg-[#041d54] text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {level === 'all' ? 'All Degree Levels' : level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      {prog.schoolCode} · {prog.degreeLevel}
                    </span>
                    <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {prog.admissionMode}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#041d54] text-base mb-2">
                    {prog.title}
                  </h3>

                  <div className="text-xs space-y-1.5 text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div><strong className="text-slate-800">Duration:</strong> {prog.duration}</div>
                    <div><strong className="text-slate-800">Campus:</strong> {prog.campus}</div>
                    <div><strong className="text-slate-800">Annual Tuition:</strong> {prog.annualFeeINR}</div>
                    <div><strong className="text-slate-800">Eligibility:</strong> {prog.eligibility}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Curriculum Modules:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.curriculumHighlights.map((curr, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {curr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setAppForm((prev) => ({ ...prev, programId: prog.id }));
                      setActiveNavSection('admissions');
                    }}
                    className="flex-1 py-2 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Apply for this Programme
                  </button>
                  <button
                    onClick={() => setSelectedProgramModal(prog)}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VIEW: AFFILIATED COLLEGES (120+) */}
      {activeNavSection === 'colleges' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Institutional Network
            </span>
            <h2 className="text-3xl font-serif font-black text-[#041d54]">
              Affiliated Premier Colleges &amp; Institutes
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Over 120 recognized colleges across Delhi-NCR affiliated under GGSIPU statutory framework.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search college by name (MAIT, VIPS, MSIT), location, or programs..."
                value={collegeSearchQuery}
                onChange={(e) => setCollegeSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#041d54] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {college.shortName}
                    </span>
                    <span className="text-[11px] text-slate-500">Est. {college.established}</span>
                  </div>

                  <h3 className="font-bold text-[#041d54] text-base mb-1">
                    {college.name}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{college.location}</span>
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-3 space-y-1">
                    <div><strong className="text-slate-800">Type:</strong> {college.type}</div>
                    <div><strong className="text-slate-800">Accreditation:</strong> {college.accreditation}</div>
                    <div><strong className="text-slate-800">Annual Intake:</strong> {college.intakeCapacity} Students</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Affiliated Programs Offered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {college.popularPrograms.map((prog, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Affiliated to GGSIPU</span>
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
                  >
                    <span>Visit College Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VIEW: ADMISSIONS 2026-27 PORTAL */}
      {activeNavSection === 'admissions' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Admissions Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#041d54]">
              IPU CET &amp; Centralized Admissions 2026-27
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Apply online for University Schools &amp; affiliated colleges through JEE Main, CLAT, NEET, CAT, and IPU CET.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Interactive Application Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#041d54] mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Fast-Track Online Application Desk</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Register for academic counselling, generate your verified tracking ID, and download application summary slip.
              </p>

              {applicationSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">
                    Application Successfully Registered!
                  </h4>
                  <p className="text-xs text-emerald-700 mb-4">
                    Your candidate profile has been recorded in the GGSIPU Centralized Admission Repository.
                  </p>

                  <div className="inline-block bg-white border border-emerald-300 rounded-xl px-6 py-3 mb-6 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Generated Registration Tracking ID
                    </div>
                    <div className="text-xl font-mono font-black text-[#041d54] tracking-wider mt-0.5">
                      {generatedAppId}
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 text-left bg-white p-4 rounded-xl border border-slate-200 mb-6 space-y-1.5">
                    <div><strong>Candidate Name:</strong> {appForm.candidateName}</div>
                    <div><strong>Selected Programme:</strong> {IPU_CONFIG.programs.find(p => p.id === appForm.programId)?.title}</div>
                    <div><strong>Admission Quota:</strong> {appForm.category}</div>
                    <div><strong>Contact Mobile:</strong> {appForm.mobile}</div>
                    <div><strong>Official Portal:</strong> ipu.admissions.nic.in</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="px-4 py-2 bg-[#041d54] text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" />
                      <span>Print Summary Slip</span>
                    </button>
                    <button
                      onClick={() => setApplicationSubmitted(false)}
                      className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg cursor-pointer"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Full Name of Candidate *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Aggarwal"
                        value={appForm.candidateName}
                        onChange={(e) => setAppForm({ ...appForm, candidateName: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="candidate@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9811223344"
                        value={appForm.mobile}
                        onChange={(e) => setAppForm({ ...appForm, mobile: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Target Programme / Discipline *
                      </label>
                      <select
                        value={appForm.programId}
                        onChange={(e) => setAppForm({ ...appForm, programId: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                      >
                        {IPU_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title} ({p.schoolCode})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Domicile / Admission Quota
                      </label>
                      <select
                        value={appForm.category}
                        onChange={(e) => setAppForm({ ...appForm, category: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                      >
                        <option value="Delhi General (85% Quota)">Delhi General (85% State Quota)</option>
                        <option value="Outside Delhi General (15% All India)">Outside Delhi (15% All India Quota)</option>
                        <option value="Delhi SC / ST / OBC / EWS">Delhi Reserved (SC/ST/OBC/EWS)</option>
                        <option value="Management Quota">Management Quota (Affiliated Colleges)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Qualifying Examination Percentage (10+2 / UG)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 88.5%"
                        value={appForm.qualificationMarks}
                        onChange={(e) => setAppForm({ ...appForm, qualificationMarks: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-[11px] leading-relaxed">
                    <strong>Statutory Note:</strong> Admissions to B.Tech are governed by JEE Main Paper-1; BA LL.B by CLAT UG; MBA by CAT/CMAT; MBBS by NEET UG; and other programs by IPU CET or CUET as notified by Academic Branch.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Online Application &amp; Generate Slip</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Col: Important Admission Info & Helpline */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-[#041d54] text-sm mb-3 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Admissions Helpdesk &amp; Grievance</span>
                </h4>
                <div className="text-xs space-y-2 text-slate-700">
                  <p>
                    <strong>Email:</strong> admissiongrievances@ipu.ac.in
                  </p>
                  <p>
                    <strong>Phone:</strong> 011-25302167, 011-25302169
                  </p>
                  <p>
                    <strong>Timings:</strong> 10:00 AM to 5:00 PM (Monday to Friday)
                  </p>
                  <p>
                    <strong>Location:</strong> Admissions Branch, Ground Floor, Library Block, Sector 16-C, Dwarka, New Delhi.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-[#041d54] text-sm mb-3">
                  Key Entrance Exam Modes
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-blue-900">JEE Main:</span> B.Tech across USICT, USAR, USCT, and colleges.
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-blue-900">CLAT UG/PG:</span> 5-Year Integrated BA/BBA LL.B (Hons) &amp; LL.M.
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-blue-900">CAT / CMAT:</span> MBA in Financial Analysis, General &amp; Analytics.
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-blue-900">IPU CET:</span> B.Des, B.Tech Biotech, Paramedical, BCA, BBA, MCA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIEW: NOTICES & CIRCULARS ARCHIVE */}
      {activeNavSection === 'notices' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Public Disclosures
            </span>
            <h2 className="text-3xl font-serif font-black text-[#041d54]">
              University Notices &amp; Gazetted Circulars
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Authentic circulars extracted from university repositories and official gazettes.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circulars by keyword (e.g. Paramedical, BHMS, Refund)..."
                value={noticeSearchQuery}
                onChange={(e) => setNoticeSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {['all', 'Admissions', 'Examinations', 'Students', 'Alerts'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedNoticeCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    selectedNoticeCategory === cat ? 'bg-[#041d54] text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Notices' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {filteredNotices.map((nt) => (
                <div
                  key={nt.id}
                  className="p-4 sm:p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {nt.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {nt.date}
                      </span>
                      {nt.isNew && (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.2 rounded animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-800 text-xs sm:text-sm leading-snug">
                      {nt.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedNoticeModal(nt)}
                    className="px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Gazette PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIEW: CAMPUSES */}
      {activeNavSection === 'campus' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Infrastructure
            </span>
            <h2 className="text-3xl font-serif font-black text-[#041d54]">
              Dual Campuses of GGSIPU
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Serving the National Capital Territory with modern research sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {IPU_CONFIG.campuses.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 bg-slate-900 relative">
                    <img
                      src={camp.id === 'dwarka' ? '/assets/guru-gobind-singh-indraprastha-university/X19YSLXVHTL1.jpg' : '/assets/guru-gobind-singh-indraprastha-university/phR2KoRsnEf1.jpg'}
                      alt={camp.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffcb04] text-[#041d54] px-2 py-0.5 rounded">
                        {camp.acres}
                      </span>
                      <h3 className="text-xl font-bold font-serif">{camp.name}</h3>
                      <p className="text-xs text-slate-300">{camp.location}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
                      Campus Facilities &amp; Highlights:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {camp.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600">{camp.tagline}</span>
                  <button
                    onClick={() => setActiveNavSection('schools')}
                    className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1"
                  >
                    <span>View Schools</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Central Library (UIRC) Showcase */}
          <div className="bg-[#041d54] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Knowledge Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black mt-1 mb-3">
                University Information Resource Centre (UIRC)
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                A 4-storey digital knowledge repository equipped with RFID automation, 100,000+ monographs, subscription to IEEE Xplore, ScienceDirect, Scopus, Delnet, and round-the-clock research bays.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  100,000+ Print Volumes
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  15,000+ Online Journals
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  RFID Self-Check Kiosks
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIEW: CONTACT & HELPLINE */}
      {activeNavSection === 'contact' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Directory &amp; Support
            </span>
            <h2 className="text-3xl font-serif font-black text-[#041d54]">
              Contact University Authorities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Reach out to admissions, examinations, grievance redressal, or campus secretariats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#041d54] text-sm mb-1">Dwarka Main Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Guru Gobind Singh Indraprastha University, Sector 16-C, Dwarka, New Delhi - 110078.
              </p>
              <div className="text-xs text-slate-500 font-mono">Metro: Dwarka Sector 14 Station</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#041d54] text-sm mb-1">East Delhi Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Surajmal Vihar, East Delhi, Delhi - 110092 (Near Karkardooma Courts Complex).
              </p>
              <div className="text-xs text-slate-500 font-mono">Metro: Karkardooma / Anand Vihar</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#041d54] text-sm mb-1">Admissions Helpline</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Phone: 011-25302167, 011-25302169<br />
                Email: admissiongrievances@ipu.ac.in
              </p>
              <div className="text-xs text-slate-500 font-mono">Hours: 10:00 AM - 5:00 PM</div>
            </div>
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#041d54] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-700" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="divide-y divide-slate-100">
              {IPU_CONFIG.faqs.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-start gap-2">
                    <span className="text-blue-700 font-black">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. FOOTER (Matching Official IPU Website Architecture) */}
      <footer className="bg-[#041d54] text-white pt-16 pb-8 border-t-4 border-[#ffcb04] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Seal / Crest & Visitor counter */}
          <div className="flex flex-col items-center justify-center -mt-24 mb-10 text-center">
            <img
              src="/assets/guru-gobind-singh-indraprastha-university/GVPbnnmSXef0.png"
              alt="GGSIPU Seal"
              className="w-28 h-28 object-contain drop-shadow-xl mb-3 bg-white p-2 rounded-full border-4 border-[#041d54]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/guru-gobind-singh-indraprastha-university/HzhWxArbZzeb.png';
              }}
            />
            <div className="text-xs text-amber-300 font-mono tracking-widest uppercase">
              Today Date: 21-Oct-2026 · Official Portal
            </div>
            <div className="text-[11px] text-slate-300 font-mono mt-0.5">
              Verified Visitors: <span className="text-white font-bold">14,892,410</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-blue-900/60 text-xs">
            <div>
              <h4 className="font-bold text-amber-400 text-sm mb-3 uppercase tracking-wider">
                GGSIPU Portals
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="https://ipu.samarth.ac.in" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">IPU Samarth ERP Login</a></li>
                <li><button onClick={() => setIsResultModalOpen(true)} className="hover:text-amber-300 text-left">Exam Results Portal</button></li>
                <li><button onClick={() => setIsFeeModalOpen(true)} className="hover:text-amber-300 text-left">Online Fee Payment</button></li>
                <li><a href="https://shodhganga.inflibnet.ac.in/handle/10603/86074" target="_blank" rel="noreferrer" className="hover:text-amber-300">Shodhganga - GGSIPU</a></li>
                <li><a href="https://nptel.ac.in/" target="_blank" rel="noreferrer" className="hover:text-amber-300">NPTEL Swayam Courses</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 text-sm mb-3 uppercase tracking-wider">
                About &amp; Governance
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => setActiveNavSection('about')} className="hover:text-amber-300 text-left">About University</button></li>
                <li><a href="#" className="hover:text-amber-300">GGSIPU Act &amp; Statutes 1998</a></li>
                <li><a href="#" className="hover:text-amber-300">Board of Management</a></li>
                <li><a href="#" className="hover:text-amber-300">Board of Studies (BOS)</a></li>
                <li><a href="#" className="hover:text-amber-300">Internal Complaint Committee (ICC)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 text-sm mb-3 uppercase tracking-wider">
                Students &amp; Academics
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => setActiveNavSection('schools')} className="hover:text-amber-300 text-left">15 University Schools</button></li>
                <li><button onClick={() => setActiveNavSection('colleges')} className="hover:text-amber-300 text-left">120+ Affiliated Colleges</button></li>
                <li><button onClick={() => setActiveNavSection('admissions')} className="hover:text-amber-300 text-left">Admissions 2026-27 Desk</button></li>
                <li><button onClick={() => setActiveNavSection('notices')} className="hover:text-amber-300 text-left">Circulars &amp; Gazettes</button></li>
                <li><a href="#" className="hover:text-amber-300">Central Library (UIRC)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 text-sm mb-3 uppercase tracking-wider">
                Campus Locations
              </h4>
              <p className="text-slate-300 leading-relaxed mb-3">
                <strong>Dwarka Main Campus:</strong><br />
                Sector 16-C, Dwarka, New Delhi - 110078
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                <strong>East Delhi Campus:</strong><br />
                Surajmal Vihar, East Delhi, Delhi - 110092
              </p>
              <p className="text-slate-300">
                <strong>Helpline:</strong> 011-25302167, 011-25302169
              </p>
            </div>
          </div>

          {/* Social icons row from the archive */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div>
              GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY · ALL RIGHTS RESERVED
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-[11px]">Follow Official Handles:</span>
              <a
                href="https://www.facebook.com/GGSIPUofficial"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Facebook"
              >
                <img
                  src="/assets/guru-gobind-singh-indraprastha-university/2nkJm2aYfAbR.png"
                  alt="Facebook"
                  className="h-5 w-auto"
                />
              </a>
              <a
                href="https://twitter.com/GGSIPUindia"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Twitter / X"
              >
                <img
                  src="/assets/guru-gobind-singh-indraprastha-university/7zYmIm7sLpqe.png"
                  alt="Twitter / X"
                  className="h-5 w-auto"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjClomR7ih9UZ5qAoe5UCEA/videos"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="YouTube"
              >
                <img
                  src="/assets/guru-gobind-singh-indraprastha-university/yc4uRXWh2iij.png"
                  alt="YouTube"
                  className="h-5 w-auto"
                />
              </a>
              <a
                href="https://instagram.com/ggsipuindia"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Instagram"
              >
                <img
                  src="/assets/guru-gobind-singh-indraprastha-university/n17yTHVvYJDv.png"
                  alt="Instagram"
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="text-center pt-3 border-t border-blue-900/40 text-[11px] text-slate-400">
            Raoz Website Maker · Verified Template ID:{' '}
            <span className="font-mono text-amber-300 font-semibold">
              guru-gobind-singh-indraprastha-university
            </span>{' '}
            · Route:{' '}
            <span className="font-mono text-amber-300 font-semibold">
              guru-gobind-singh-indraprastha-university
            </span>
          </div>
        </div>
      </footer>

      {/* MODAL: SCHOOL DETAILS MODAL */}
      {selectedSchoolModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedSchoolModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black text-[#041d54] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                {selectedSchoolModal.shortCode}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {selectedSchoolModal.campus}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#041d54] mb-3">
              {selectedSchoolModal.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedSchoolModal.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-lg font-black text-[#041d54]">
                  {selectedSchoolModal.keyStats.programsCount}
                </div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Programs</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-lg font-black text-[#041d54]">
                  {selectedSchoolModal.keyStats.facultyCount}
                </div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Faculty</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-lg font-black text-[#041d54]">
                  {selectedSchoolModal.keyStats.studentsCount}
                </div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Students</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-lg font-black text-emerald-700">
                  ₹{selectedSchoolModal.keyStats.highestPackageLPA} LPA
                </div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Top Package</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Departments:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSchoolModal.departments.map((dept, i) => (
                  <span key={i} className="text-xs bg-blue-50 text-blue-900 font-medium px-3 py-1 rounded-lg">
                    {dept}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Laboratories &amp; Specialized Facilities:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedSchoolModal.highlightFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setSelectedSchoolModal(null);
                  setActiveNavSection('programs');
                }}
                className="flex-1 py-2.5 bg-[#041d54] text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
              >
                View Programmes for this School
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PROGRAM DETAILS MODAL */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {selectedProgramModal.schoolCode} · {selectedProgramModal.degreeLevel}
            </span>

            <h3 className="text-xl font-serif font-black text-[#041d54] mt-2 mb-3">
              {selectedProgramModal.title}
            </h3>

            <div className="text-xs space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 text-slate-700">
              <div><strong>Duration:</strong> {selectedProgramModal.duration}</div>
              <div><strong>Campus:</strong> {selectedProgramModal.campus}</div>
              <div><strong>Admission Mode:</strong> {selectedProgramModal.admissionMode}</div>
              <div><strong>Annual Tuition Fee:</strong> {selectedProgramModal.annualFeeINR}</div>
              <div><strong>Eligibility:</strong> {selectedProgramModal.eligibility}</div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Potential Career Paths:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProgramModal.careerRoles.map((role, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-lg">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setAppForm((prev) => ({ ...prev, programId: selectedProgramModal.id }));
                setSelectedProgramModal(null);
                setActiveNavSection('admissions');
              }}
              className="w-full py-2.5 bg-[#041d54] text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Proceed to Admission Desk
            </button>
          </div>
        </div>
      )}

      {/* MODAL: NOTICE PDF READER */}
      {selectedNoticeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedNoticeModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Official Gazette
              </span>
              <span className="text-xs text-slate-400 font-mono">Date: {selectedNoticeModal.date}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#041d54] mb-4 leading-snug">
              {selectedNoticeModal.title}
            </h3>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6 text-xs text-slate-700 leading-relaxed font-serif">
              <p className="mb-3 text-slate-500 font-sans text-[11px]">
                Archive Ref: {selectedNoticeModal.pdfReference || 'University Gazette Series 2026'}
              </p>
              <p className="mb-2">
                <strong>GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</strong><br />
                Sector 16-C, Dwarka, New Delhi - 110078
              </p>
              <p className="mb-2">
                This is notified for the information of all concerned candidates, affiliated institutes, and university schools. The detailed schedule and operational protocols have been approved by the Competent Authority.
              </p>
              <p className="italic text-slate-600">
                - In-charge / Controller of Admissions, GGSIPU
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedNoticeModal(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Close Viewer
              </button>
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 bg-[#041d54] text-[#ffcb04] text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print Circular</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EXAM RESULTS CHECKER */}
      {isResultModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setIsResultModalOpen(false);
                setResultSearchResult(null);
                setRollNumberInput('');
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-blue-700" />
              <h3 className="text-lg font-bold text-[#041d54]">
                Examination Results Portal
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Enter candidate 11-digit University Enrollment Number to fetch latest gazetted marksheet.
            </p>

            <form onSubmit={handleResultSearch} className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  University Enrollment Number *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 01816403220"
                    value={rollNumberInput}
                    onChange={(e) => setRollNumberInput(e.target.value)}
                    className="flex-1 p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#041d54] text-[#ffcb04] font-bold text-xs rounded-lg hover:bg-blue-900 cursor-pointer"
                  >
                    Fetch Result
                  </button>
                </div>
              </div>
            </form>

            {resultSearchResult && (
              <div className="bg-blue-50/60 border border-blue-200 rounded-2xl p-4 text-xs space-y-2 text-slate-700">
                <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                  <span className="font-bold text-[#041d54]">GGSIPU GAZETTED RESULT</span>
                  <span className="bg-emerald-600 text-white font-black text-[10px] px-2 py-0.5 rounded">
                    {resultSearchResult.status}
                  </span>
                </div>
                <div><strong>Student Name:</strong> {resultSearchResult.candidateName}</div>
                <div><strong>Enrollment:</strong> <span className="font-mono">{resultSearchResult.rollNumber}</span></div>
                <div><strong>School / College:</strong> {resultSearchResult.institution}</div>
                <div><strong>Programme:</strong> {resultSearchResult.programme}</div>
                <div className="flex gap-4 pt-2 border-t border-blue-200">
                  <div><strong>SGPA:</strong> <span className="text-blue-900 font-black">{resultSearchResult.sgpa}</span></div>
                  <div><strong>Cumulative CGPA:</strong> <span className="text-blue-900 font-black">{resultSearchResult.cgpa}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: ONLINE FEE PAYMENT PORTAL */}
      {isFeeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setIsFeeModalOpen(false);
                setFeePaymentSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-[#041d54]">
                Online Fee Payment Gateway
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Official payment portal for Academic Tuitions, Exam Fees, and Re-evaluations.
            </p>

            {feePaymentSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900 mb-1">
                  Payment Receipt Generated!
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Transaction ID: <span className="font-mono font-bold">IPUPAY-2026-9812</span>
                </p>
                <button
                  onClick={() => {
                    setIsFeeModalOpen(false);
                    setFeePaymentSuccess(false);
                  }}
                  className="px-5 py-2 bg-[#041d54] text-[#ffcb04] text-xs font-bold rounded-lg"
                >
                  Close &amp; Download Receipt
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeePayment} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Student Enrollment No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 01816403220"
                    value={feeForm.enrollmentNo}
                    onChange={(e) => setFeeForm({ ...feeForm, enrollmentNo: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Fee Type</label>
                  <select
                    value={feeForm.feeType}
                    onChange={(e) => setFeeForm({ ...feeForm, feeType: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="Annual Academic Fee">Annual Academic Tuition Fee</option>
                    <option value="Semester Examination Fee">Semester Examination Fee (₹2,500)</option>
                    <option value="Hostel & Mess Dues">Hostel &amp; Mess Dues (₹35,000)</option>
                    <option value="Migration / Degree Certificate">Migration / Degree Certificate (₹1,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payable Amount (INR)</label>
                  <input
                    type="text"
                    disabled
                    value={feeForm.feeType === 'Semester Examination Fee' ? '₹2,500' : feeForm.feeType === 'Hostel & Mess Dues' ? '₹35,000' : feeForm.feeType === 'Migration / Degree Certificate' ? '₹1,000' : '₹1,45,000'}
                    className="w-full p-2.5 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#041d54] hover:bg-blue-900 text-[#ffcb04] font-bold text-xs uppercase tracking-wider rounded-xl shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Proceed to Samarth / BillDesk Gateway</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
