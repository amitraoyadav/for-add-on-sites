import React, { useState, useEffect, useMemo } from 'react';
import {
  ARSHAD_UNIVERSITY_CONFIG,
  ArshadProgram,
  ArshadRanking,
  ArshadHeroSlide,
  ArshadDignitary,
  ArshadCampusFeature,
  ArshadTestimonial,
  ArshadFaq
} from './arshad-university.config';
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
  Percent,
  Play,
  RotateCcw
} from 'lucide-react';

export default function ArshadUniversity() {
  const {
    brand,
    logos,
    rankings,
    heroSlides,
    programs,
    recruiters,
    dignitaries,
    campusLife,
    testimonials,
    faqs
  } = ARSHAD_UNIVERSITY_CONFIG;

  // Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Mobile Navigation State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Academic Programs Filter & Search State
  const [selectedProgramCategory, setSelectedProgramCategory] = useState<string>('all');
  const [programSearchQuery, setProgramSearchQuery] = useState('');
  const [activeProgramModal, setActiveProgramModal] = useState<ArshadProgram | null>(null);

  // Recruiter Sector Filter
  const [selectedRecruiterSector, setSelectedRecruiterSector] = useState<string>('all');

  // Dignitary Spotlight Filter & Modal
  const [selectedDignitaryType, setSelectedDignitaryType] = useState<string>('all');
  const [activeDignitaryModal, setActiveDignitaryModal] = useState<ArshadDignitary | null>(null);

  // Campus Life Feature Modal
  const [activeCampusFeatureModal, setActiveCampusFeatureModal] = useState<ArshadCampusFeature | null>(null);

  // Ranking Detail Modal
  const [activeRankingModal, setActiveRankingModal] = useState<ArshadRanking | null>(null);

  // 360 Virtual Tour Modal
  const [is360ModalOpen, setIs360ModalOpen] = useState(false);
  const [active360Spot, setActive360Spot] = useState<'campus' | 'library' | 'sports' | 'hostel'>('campus');

  // Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Scholarship Calculator State
  const [calcScore, setCalcScore] = useState<number>(85);
  const [calcLevel, setCalcLevel] = useState<'UG' | 'PG'>('UG');
  const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);

  // Admissions Application Form State
  const [admissionsForm, setAdmissionsForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Punjab',
    programId: 'btech-cse',
    qualification: '10+2 / High School Intermediate',
    marksPercentage: '85',
    agreeTerms: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [generatedAppNumber, setGeneratedAppNumber] = useState<string>('');

  // Prospectus Download State
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [prospectusEmail, setProspectusEmail] = useState('');
  const [prospectusSubmitted, setProspectusSubmitted] = useState(false);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  // Auto-play Hero Slider
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

    const appNo = `AU-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
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
        p.faculty.toLowerCase().includes(programSearchQuery.toLowerCase());
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

  // Filtered Dignitaries
  const filteredDignitaries = useMemo(() => {
    if (selectedDignitaryType === 'all') return dignitaries;
    return dignitaries.filter((d) => d.type === selectedDignitaryType);
  }, [dignitaries, selectedDignitaryType]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (selectedFaqCategory === 'all') return faqs;
    return faqs.filter((f) => f.category === selectedFaqCategory);
  }, [faqs, selectedFaqCategory]);

  // Global Search Results
  const searchResults = useMemo(() => {
    if (!globalSearchQuery.trim()) return [];
    const q = globalSearchQuery.toLowerCase();
    const results: { type: string; title: string; subtitle: string; link: string }[] = [];

    // Search in programs
    programs.forEach((prog) => {
      if (
        prog.name.toLowerCase().includes(q) ||
        prog.faculty.toLowerCase().includes(q) ||
        prog.code.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Academic Program',
          title: prog.name,
          subtitle: `${prog.faculty} · ${prog.duration}`,
          link: '#programs'
        });
      }
    });

    // Search in rankings
    rankings.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
        results.push({
          type: 'Ranking & Accreditation',
          title: `${r.body} — ${r.rank}`,
          subtitle: r.title,
          link: '#rankings'
        });
      }
    });

    // Search in dignitaries
    dignitaries.forEach((d) => {
      if (d.name.toLowerCase().includes(q) || d.title.toLowerCase().includes(q)) {
        results.push({
          type: 'Dignitary & Guest',
          title: d.name,
          subtitle: d.title,
          link: '#dignitaries'
        });
      }
    });

    return results;
  }, [globalSearchQuery, programs, rankings, dignitaries]);

  // Calculate scholarship savings
  const scholarshipEstimate = useMemo(() => {
    if (calcScore >= 95) return { slab: 'Phase I (Highest Category)', waiver: '50% Tuition Fee Waiver', amount: calcLevel === 'UG' ? '₹70,000 / Sem' : '₹1,00,000 / Sem' };
    if (calcScore >= 85) return { slab: 'Phase II (Merit Category)', waiver: '40% Tuition Fee Waiver', amount: calcLevel === 'UG' ? '₹56,000 / Sem' : '₹80,000 / Sem' };
    if (calcScore >= 75) return { slab: 'Phase III (Honours Category)', waiver: '30% Tuition Fee Waiver', amount: calcLevel === 'UG' ? '₹42,000 / Sem' : '₹60,000 / Sem' };
    return { slab: 'Standard Eligibility', waiver: 'Qualifying Admission Slab', amount: 'Merit Assessment Pending' };
  }, [calcScore, calcLevel]);

  return (
    <div className="arshad-university-demo min-h-screen bg-[#FDFCF9] text-zinc-800 font-sans selection:bg-[#F37021] selection:text-white">
      {/* 1. TOP INSTITUTIONAL TICKER & UTILITY BAR */}
      <div className="bg-[#18181B] text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Accreditations Highlights */}
          <div className="flex items-center gap-3 overflow-x-auto text-[11.5px] whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F37021] text-white font-bold text-[10px] tracking-wider uppercase">
              NAAC A++ (3.68/4)
            </span>
            <span className="hidden md:inline text-zinc-400">|</span>
            <span className="text-zinc-200 font-medium">NIRF #27 In All Universities</span>
            <span className="hidden md:inline text-zinc-400">|</span>
            <span className="text-amber-400 font-medium">MAKA Sports Trophy Winners</span>
            <span className="hidden lg:inline text-zinc-400">|</span>
            <span className="hidden lg:inline text-zinc-300">₹3 Crore Highest Package</span>
          </div>

          {/* Right: Quick Links & Helpline */}
          <div className="flex items-center gap-4 text-[11.5px] whitespace-nowrap">
            <a
              href="#360-tour"
              onClick={(e) => {
                e.preventDefault();
                setIs360ModalOpen(true);
              }}
              className="hover:text-[#F37021] transition-colors flex items-center gap-1 text-zinc-300 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#F37021]" />
              <span className="font-semibold text-white">360° Virtual Tour</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${brand.admissionHelpline}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#F37021]" />
              <span>{brand.admissionHelpline}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setIsProspectusModalOpen(true)}
              className="hover:text-white text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Prospectus</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & BRAND NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Branding */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logos.color}
              alt="Arshad University"
              className="h-13 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-semibold text-zinc-700">
            <a href="#home" className="hover:text-[#F37021] transition-colors py-2">
              Home
            </a>
            <a href="#rankings" className="hover:text-[#F37021] transition-colors py-2 flex items-center gap-1">
              Rankings &amp; NAAC
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">A++</span>
            </a>
            <a href="#programs" className="hover:text-[#F37021] transition-colors py-2">
              Programs
            </a>
            <a href="#placements" className="hover:text-[#F37021] transition-colors py-2 flex items-center gap-1">
              Placements
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">₹3 Cr</span>
            </a>
            <a href="#dignitaries" className="hover:text-[#F37021] transition-colors py-2">
              Dignitaries
            </a>
            <a href="#campus-life" className="hover:text-[#F37021] transition-colors py-2">
              Campus Life
            </a>
            <a href="#scholarships" className="hover:text-[#F37021] transition-colors py-2">
              AUNEST &amp; Aid
            </a>
            <a href="#contact" className="hover:text-[#F37021] transition-colors py-2">
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
              title="Search Programs & Rankings"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* AUNEST Entrance Desk */}
            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#F37021] text-[#F37021] hover:bg-orange-50 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AUNEST 2026
            </a>

            {/* Apply Now Primary Button */}
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#F37021] to-[#E05A0C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-zinc-200 px-6 py-5 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3 font-semibold text-zinc-700">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                Home
              </a>
              <a
                href="#rankings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021] flex justify-between items-center"
              >
                <span>Rankings &amp; NAAC A++</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">3.68/4</span>
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                Academic Programs &amp; Courses
              </a>
              <a
                href="#placements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021] flex justify-between items-center"
              >
                <span>Placement Records</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">₹3 Crore</span>
              </a>
              <a
                href="#dignitaries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                World Leaders &amp; Nobel Laureates
              </a>
              <a
                href="#campus-life"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                600-Acre Campus &amp; Culture
              </a>
              <a
                href="#scholarships"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                Scholarship Calculator &amp; AUNEST
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-zinc-100 hover:text-[#F37021]"
              >
                Contact &amp; Admissions Desk
              </a>

              <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIs360ModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#F37021]" />
                  Launch 360° Virtual Tour
                </button>
                <a
                  href="#admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#F37021] text-white text-center font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Apply Online for 2026 Batch
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION WITH 5 FULL-BLEED ROTATING SHOWCASES */}
      <section id="home" className="relative bg-zinc-950 text-white overflow-hidden">
        {/* Slider Frame */}
        <div className="relative min-h-[580px] sm:min-h-[640px] flex items-center">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
                idx === currentSlideIndex
                  ? 'opacity-100 pointer-events-auto z-10'
                  : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              {/* Background Vector Art */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover object-center filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
              </div>

              {/* Slide Content Overlays */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-5 text-amber-300">
                    <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse"></span>
                    {slide.badge}
                  </div>

                  {/* Eyebrow and Headline */}
                  <h3 className="text-sm sm:text-base font-bold tracking-widest text-[#F97316] uppercase mb-2">
                    {slide.title}
                  </h3>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
                    {slide.headline}
                  </h1>
                  <p className="text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed font-normal">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                    <a
                      href="#admissions"
                      className="px-6 py-3.5 rounded-lg bg-[#F37021] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
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

                  {/* Highlights Stats Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/15 max-w-lg">
                    {slide.stats.map((st, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-black text-[#F37021]">
                          {st.value}
                        </span>
                        <span className="text-[11px] font-medium text-zinc-400 leading-tight">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
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

          {/* Slide Indicator Dots */}
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
                    ? 'w-8 bg-[#F37021]'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Jump to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY RANKINGS & STATUTORY ACCREDITATION RIBBON */}
      <section id="rankings" className="bg-[#18181B] text-white py-12 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              BENCHMARKING GLOBAL STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Recognised Among India's &amp; The World's Top Institutions
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Government and statutory recognitions that validate Arshad University's leadership in teaching, research, and placements.
            </p>
          </div>

          {/* Ranking Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {rankings.map((rk) => (
              <div
                key={rk.id}
                onClick={() => setActiveRankingModal(rk)}
                className="bg-zinc-900/90 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {rk.body}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-bold"
                      style={{ backgroundColor: `${rk.color}20`, color: rk.color }}
                    >
                      {rk.year}
                    </span>
                  </div>
                  <div
                    className="text-3xl font-black mb-1.5 transition-transform group-hover:translate-x-1"
                    style={{ color: rk.color }}
                  >
                    {rk.rank}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                    {rk.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {rk.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-medium text-zinc-400 group-hover:text-white">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC PROGRAMS & COURSES CATALOG */}
      <section id="programs" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              ACADEMIC EXCELLENCE ACROSS 150+ DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Degree Programmes &amp; Faculties
            </h2>
            <p className="text-zinc-600 text-sm mt-2 max-w-2xl">
              Industry-vetted curriculum co-designed with Google, Microsoft, and AWS. Choose from cutting-edge undergraduate, postgraduate, and integrated honours degrees.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={programSearchQuery}
              onChange={(e) => setProgramSearchQuery(e.target.value)}
              placeholder="Search CSE, MBA, Law..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-xs font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
            />
            {programSearchQuery && (
              <button
                onClick={() => setProgramSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'engineering', label: 'Engineering & Tech (B.Tech)' },
            { id: 'management', label: 'Management (MBA / BBA)' },
            { id: 'computer-apps', label: 'Computer Applications (BCA)' },
            { id: 'law', label: 'Law (B.A. LL.B)' },
            { id: 'pharmacy', label: 'Pharmacy (B.Pharm)' },
            { id: 'applied-sciences', label: 'Agriculture (ICAR)' },
            { id: 'design', label: 'Design & Fashion' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedProgramCategory(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedProgramCategory === tab.id
                  ? 'bg-[#F37021] text-white shadow-sm'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-orange-300 transition-all group"
            >
              <div>
                {/* Header badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 uppercase tracking-wider">
                    {prog.level}
                  </span>
                  {prog.featured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-[#F37021] flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      Premier Track
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#F37021] transition-colors leading-snug mb-2">
                  {prog.name}
                </h3>

                <p className="text-xs text-zinc-500 font-medium mb-4">
                  {prog.faculty}
                </p>

                {/* Program Details Grid */}
                <div className="bg-zinc-50 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-zinc-700 border border-zinc-100">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Duration:</span>
                    <span className="font-semibold text-zinc-800">{prog.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Tuition Fee:</span>
                    <span className="font-semibold text-zinc-800">{prog.feesPerSemester}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-700 font-medium">
                    <span>Scholarship:</span>
                    <span className="text-[11px] font-bold">{prog.scholarshipUpTo.split('via')[0]}</span>
                  </div>
                </div>

                {/* Highlights Summary */}
                <ul className="space-y-1 mb-4 text-[11.5px] text-zinc-600">
                  {prog.curriculumHighlights.slice(0, 2).map((h, hi) => (
                    <li key={hi} className="flex items-start gap-1.5 line-clamp-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F37021] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProgramModal(prog)}
                  className="text-xs font-bold text-zinc-700 hover:text-[#F37021] transition-colors cursor-pointer"
                >
                  View Details &amp; Syllabus
                </button>
                <a
                  href="#admissions"
                  className="px-3.5 py-1.5 rounded-lg bg-[#F37021] hover:bg-[#EA580C] text-white text-xs font-bold transition-colors"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200">
            <BookOpen className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-zinc-700">No programs found</h4>
            <p className="text-xs text-zinc-500 mt-1">Try adjusting your category or search query.</p>
          </div>
        )}
      </section>

      {/* 6. PLACEMENT POWERHOUSE & RECRUITER DIRECTORY */}
      <section id="placements" className="bg-[#090A0F] text-white py-16 sm:py-20 px-4 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
                INDIA'S LEADING PLACEMENT DESTINATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Fortune 500 Recruitment Drives
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
                With a historic ₹3 Crore international offer and ₹64 Lakh domestic offer, Arshad University scholars lead engineering and leadership ranks globally.
              </p>
            </div>

            {/* Recruiter Sector Filter */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-semibold">
              {[
                { id: 'all', label: 'All Recruiters' },
                { id: 'Software', label: 'Software & Tech' },
                { id: 'Cloud', label: 'Cloud & AI' },
                { id: 'Consulting', label: 'Consulting' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedRecruiterSector(s.id)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRecruiterSector === s.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Highlight Placement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-950 to-zinc-900 border border-emerald-800/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                  GLOBAL HIGHEST
                </span>
                <div className="text-4xl font-black text-white mt-2 mb-1">₹3 Crore</div>
                <div className="text-xs font-semibold text-emerald-300">International Placement Package</div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Offered by a leading European enterprise in Germany to an Arshad University Computer Science graduate.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/50 text-[11px] text-zinc-400">
                Alumnus: Yasir Khan (Munich)
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950 to-zinc-900 border border-blue-800/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                  DOMESTIC HIGHEST
                </span>
                <div className="text-4xl font-black text-white mt-2 mb-1">₹64 Lakh</div>
                <div className="text-xs font-semibold text-sky-300">All-India Technology Offer</div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Selected by Google India for high-performance software engineering and cloud systems division.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-900/50 text-[11px] text-zinc-400">
                Direct On-Campus Drive
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-950 to-zinc-900 border border-purple-800/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest">
                  RECRUITER VOLUME
                </span>
                <div className="text-4xl font-black text-white mt-2 mb-1">1,000+</div>
                <div className="text-xs font-semibold text-purple-300">Companies Hiring on Campus</div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Including 2,000+ Fortune 500 campus drives conducted annually across engineering, business, and law.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-900/50 text-[11px] text-zinc-400">
                500+ Multi-Offer Candidates
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-950 to-zinc-900 border border-orange-800/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  ALUMNI NETWORK
                </span>
                <div className="text-4xl font-black text-white mt-2 mb-1">50,000+</div>
                <div className="text-xs font-semibold text-amber-300">Worldwide Alumni in 60+ Countries</div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Leaders in Microsoft, Apple, Amazon, Tesla, NASA, Goldman Sachs, and the Indian Civil Services.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-900/50 text-[11px] text-zinc-400">
                Alumni Mentorship Cells
              </div>
            </div>
          </div>

          {/* Recruiter Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredRecruiters.map((rec, ri) => (
              <div
                key={ri}
                className="bg-zinc-900/80 border border-zinc-800 hover:border-[#F37021] p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-zinc-300 text-sm mb-2 group-hover:bg-[#F37021] group-hover:text-white transition-colors">
                  {rec.name.substring(0, 2)}
                </div>
                <div className="text-xs font-bold text-white group-hover:text-[#F37021] transition-colors">
                  {rec.name}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                  Upto {rec.package}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">
                  {rec.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 360° VIRTUAL CAMPUS & INFRASTRUCTURE */}
      <section id="campus-life" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        {/* Banner with 360 CTA */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white p-8 sm:p-14 mb-16 border border-zinc-800 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-2">
              INDIA'S LARGEST RESIDENTIAL CAMPUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              A 600-Acre City Within A Campus
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              From Olympic standard indoor stadiums and an on-campus multi-storey shopping mall (Uni-Mall) to 24/7 hospitals, banks, and self-contained residential suites accommodating 25,000+ scholars.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIs360ModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Launch Interactive 360° Tour</span>
              </button>
              <button
                onClick={() => setIsProspectusModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Download Campus Guide
              </button>
            </div>
          </div>

          {/* Ambient Background Art */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none hidden md:block">
            <img
              src="/assets/arshad-university/campus-360.svg"
              alt="360 View"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Core Pillars of Campus Life */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusLife.map((feat) => (
            <div
              key={feat.id}
              onClick={() => setActiveCampusFeatureModal(feat)}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-zinc-100">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {feat.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#F37021] transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#F37021] mb-2">
                    {feat.metrics}
                  </div>
                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-zinc-700 group-hover:text-[#F37021]">
                <span>Explore Highlights</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. DIGNITARIES & WORLD LEADERS AT ARSHAD UNIVERSITY */}
      <section id="dignitaries" className="bg-[#18181B] text-white py-16 sm:py-20 px-4 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
                DISTINGUISHED GLOBAL VOICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Heads of State &amp; Nobel Laureates
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
                Arshad University regularly hosts Prime Ministers, Presidents, Nobel prize winners, and industry stalwarts to inspire students on world affairs and frontier science.
              </p>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-semibold">
              {[
                { id: 'all', label: 'All Dignitaries' },
                { id: 'head-of-state', label: 'Heads of State' },
                { id: 'nobel-laureate', label: 'Nobel Laureates' },
                { id: 'industry-leader', label: 'Industry & Shark Tank' },
                { id: 'sports-icon', label: 'Olympic Champions' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedDignitaryType(t.id)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    selectedDignitaryType === t.id
                      ? 'bg-[#F37021] text-white'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dignitaries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDignitaries.map((dig) => (
              <div
                key={dig.id}
                onClick={() => setActiveDignitaryModal(dig)}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-[#F37021] transition-colors">
                        {dig.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#F97316] mt-0.5">
                        {dig.title}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 uppercase tracking-wider shrink-0">
                      {dig.type.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="text-[11.5px] font-medium text-zinc-400 mb-3 bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800">
                    <span className="text-zinc-500">Occasion:</span> {dig.occasion}
                  </div>

                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    {dig.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white">
                  <span>Read Official Address</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE AUNEST SCHOLARSHIP CALCULATOR */}
      <section id="scholarships" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl border border-orange-200 p-8 sm:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              FINANCIAL AID &amp; MERIT REWARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              AUNEST 2026 Scholarship Calculator
            </h2>
            <p className="text-zinc-600 text-sm mt-2">
              Over ₹100 Crore in scholarships disbursed each year. Calculate your expected tuition fee waiver based on academic performance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-md">
            {/* Qualification Level Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                Degree Level
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcLevel('UG')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    calcLevel === 'UG'
                      ? 'bg-[#F37021] text-white shadow-sm'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                  }`}
                >
                  Undergraduate (After 12th)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcLevel('PG')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    calcLevel === 'PG'
                      ? 'bg-[#F37021] text-white shadow-sm'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                  }`}
                >
                  Postgraduate (After Graduation)
                </button>
              </div>
            </div>

            {/* Slider for Percentage */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                  Expected 12th / Degree Aggregate
                </label>
                <span className="text-lg font-black text-[#F37021]">{calcScore}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="99"
                value={calcScore}
                onChange={(e) => setCalcScore(parseInt(e.target.value))}
                className="w-full accent-[#F37021] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                <span>50% (Eligibility)</span>
                <span>75% (Phase III)</span>
                <span>85% (Phase II)</span>
                <span>95%+ (Phase I)</span>
              </div>
            </div>

            {/* Calculated Reward Output Box */}
            <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-6 mb-6 text-center">
              <span className="text-[11px] font-bold text-[#F37021] uppercase tracking-wider">
                {scholarshipEstimate.slab}
              </span>
              <div className="text-3xl font-black text-zinc-900 mt-1.5 mb-1">
                {scholarshipEstimate.waiver}
              </div>
              <div className="text-sm font-semibold text-emerald-700">
                Estimated Savings: {scholarshipEstimate.amount}
              </div>
              <p className="text-[11.5px] text-zinc-500 mt-2">
                *Subject to performance in AUNEST online entrance examination or national exams (JEE, NEET, CAT, CLAT).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#admissions"
                className="flex-1 py-3 px-4 rounded-xl bg-[#F37021] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
              >
                Claim This Scholarship Now
              </a>
              <button
                onClick={() => setIsProspectusModalOpen(true)}
                className="py-3 px-4 rounded-xl border border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Download Fee Matrix
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADMISSIONS APPLICATION DESK */}
      <section id="admissions" className="bg-[#18181B] text-white py-16 sm:py-20 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-2">
                OFFICIAL ADMISSIONS PORTAL 2026–27
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                Take The First Step Toward Global Leadership
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                Admissions are open across Engineering, MBA, Law, Pharmacy, Agriculture, and Design. Complete the inquiry below to connect with an authorized academic counselor and book your AUNEST slot.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#F37021] flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fill Registration Inquiry</h4>
                    <p className="text-xs text-zinc-400">Receive instant application login and eligibility evaluation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#F37021] flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Appear in Online AUNEST</h4>
                    <p className="text-xs text-zinc-400">Take test from home on convenient date and unlock upto 50% scholarship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#F37021] flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Confirm Seat &amp; Hostel Suite</h4>
                    <p className="text-xs text-zinc-400">Lock your preferred discipline and residential accommodation.</p>
                  </div>
                </div>
              </div>

              {/* Direct Toll-Free Helpline */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F37021] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Toll-Free National Admissions Desk:</div>
                  <div className="text-lg font-black text-white">{brand.admissionHelpline}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Admissions Form */}
            <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Application Inquiry Registered!</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-mono text-amber-400 my-3">
                    Reference ID: {generatedAppNumber}
                  </div>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-bold text-white">{admissionsForm.fullName}</span>. An Arshad University senior counselor has been assigned to your profile and will contact you via phone ({admissionsForm.phone}) and email ({admissionsForm.email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setAdmissionsForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        state: 'Punjab',
                        programId: 'btech-cse',
                        qualification: '10+2 / High School Intermediate',
                        marksPercentage: '85',
                        agreeTerms: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAdmissionsSubmit} className="space-y-4">
                  <div className="border-b border-zinc-800 pb-3 mb-4">
                    <h3 className="text-lg font-black text-white">Apply for Admissions 2026</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">Please provide authentic details for AUNEST admit card issuance.</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      value={admissionsForm.fullName}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F37021] ${
                        formErrors.fullName ? 'border-red-500' : 'border-zinc-700'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-400 text-[11px] mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={admissionsForm.email}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F37021] ${
                          formErrors.email ? 'border-red-500' : 'border-zinc-700'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-[11px] mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={admissionsForm.phone}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F37021] ${
                          formErrors.phone ? 'border-red-500' : 'border-zinc-700'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-[11px] mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Program & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        Select Programme
                      </label>
                      <select
                        value={admissionsForm.programId}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, programId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                      >
                        {programs.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        Home State / UT
                      </label>
                      <select
                        value={admissionsForm.state}
                        onChange={(e) => setAdmissionsForm({ ...admissionsForm, state: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                      >
                        {[
                          'Punjab', 'Delhi NCR', 'Haryana', 'Uttar Pradesh', 'Rajasthan',
                          'Maharashtra', 'Karnataka', 'West Bengal', 'Bihar', 'Madhya Pradesh',
                          'Gujarat', 'Andhra Pradesh', 'Tamil Nadu', 'Jammu & Kashmir', 'International'
                        ].map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Checkbox agreement */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={admissionsForm.agreeTerms}
                      onChange={(e) => setAdmissionsForm({ ...admissionsForm, agreeTerms: e.target.checked })}
                      className="mt-0.5 accent-[#F37021]"
                    />
                    <label htmlFor="agree" className="text-[11px] text-zinc-400">
                      I authorize Arshad University to contact me via Call, SMS, WhatsApp, and Email regarding AUNEST schedule and admissions.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F37021] to-[#E05A0C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Generate AUNEST Hall Ticket</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. STUDENT & ALUMNI VOICES */}
      <section className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
            TESTIMONIALS &amp; CAREER OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Hear From Our Global Scholars
          </h2>
          <p className="text-zinc-600 text-sm mt-2">
            Graduates thriving in Switzerland, USA, and top law firms across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 shrink-0">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{test.name}</h4>
                    <p className="text-[11px] font-semibold text-[#F37021]">{test.company}</p>
                    <p className="text-[10px] text-zinc-500">{test.batch}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3 inline-block">
                  {test.packageOffered}
                </div>

                <p className="text-xs text-zinc-600 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-[11px] text-zinc-500 font-medium">
                {test.program}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="bg-zinc-100 py-16 sm:py-20 px-4 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#F37021] text-xs font-bold uppercase tracking-widest inline-block mb-1">
              ADMISSIONS &amp; POLICIES
            </span>
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-sm mt-1">
              Everything you need to know about AUNEST, scholarships, hostel living, and admissions eligibility.
            </p>
          </div>

          {/* Category Filter for FAQs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 text-xs font-semibold">
            {['all', 'Admissions', 'AUNEST', 'Scholarships', 'Placements', 'Campus & Hostels'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFaqCategory === cat
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                {cat === 'all' ? 'All FAQs' : cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, fIndex) => (
              <div
                key={fIndex}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === fIndex ? null : fIndex)}
                  className="w-full py-4 px-5 text-left font-bold text-sm text-zinc-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#F37021]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      expandedFaqIndex === fIndex ? 'rotate-180 text-[#F37021]' : ''
                    }`}
                  />
                </button>
                {expandedFaqIndex === fIndex && (
                  <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. COMPREHENSIVE INSTITUTIONAL FOOTER */}
      <footer id="contact" className="bg-[#111215] text-zinc-400 text-xs py-16 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={logos.white}
                alt="Arshad University"
                className="h-12 w-auto object-contain"
              />
              <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
                Arshad University is India's largest single-campus residential university, accredited with NAAC Grade A++ and ranked among the Top 50 Indian universities by NIRF (Ministry of Education, Govt. of India).
              </p>
              <div className="space-y-1.5 text-[11.5px] text-zinc-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F37021] shrink-0" />
                  <span>{brand.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F37021] shrink-0" />
                  <span>Toll-Free Helpline: {brand.admissionHelpline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F37021] shrink-0" />
                  <span>{brand.email}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Academic Faculties */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Academic Faculties
              </h4>
              <ul className="space-y-2 text-[11.5px]">
                <li><a href="#programs" className="hover:text-white transition-colors">Computer Science &amp; AI</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">School of Business (MBA)</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">School of Law (BCI Approved)</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Pharmaceutical Sciences</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">ICAR Agriculture School</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Design &amp; Fashion Tech</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Applied Medical Sciences</a></li>
              </ul>
            </div>

            {/* Col 3: Admissions & AUNEST */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Admissions 2026
              </h4>
              <ul className="space-y-2 text-[11.5px]">
                <li><a href="#admissions" className="hover:text-white transition-colors">Apply Online (AUNEST)</a></li>
                <li><a href="#scholarships" className="hover:text-white transition-colors">Scholarship Matrix</a></li>
                <li><a href="#placements" className="hover:text-white transition-colors">Placement Records</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Fee Structure &amp; Hostels</a></li>
                <li><a href="#dignitaries" className="hover:text-white transition-colors">International Admissions</a></li>
                <li><button onClick={() => setIsProspectusModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">Download Prospectus</button></li>
                <li><button onClick={() => setIs360ModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">Book Campus Visit</button></li>
              </ul>
            </div>

            {/* Col 4: Statutory Disclosures */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Accreditation &amp; Trust
              </h4>
              <div className="space-y-2 text-[11px] text-zinc-400">
                <p>• University Grants Commission (UGC) Act 1956 Section 2(f)</p>
                <p>• NAAC A++ Accredited with 3.68 Score</p>
                <p>• Member of Association of Indian Universities (AIU)</p>
                <p>• Pharmacy Council of India (PCI) Approved</p>
                <p>• Bar Council of India (BCI) Recognized</p>
                <p>• Council of Architecture (COA) Approved</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <p>
              © {new Date().getFullYear()} Arshad University. All Rights Reserved. Rebranded Website Demo for Raoz Website Maker.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400">Privacy Policy</span>
              <span>·</span>
              <span className="text-zinc-400">Terms of Service</span>
              <span>·</span>
              <span className="text-zinc-400">RTI Statutory Disclosures</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODAL 1: PROGRAM DETAILS & CURRICULUM BREAKDOWN --- */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative my-8">
            <button
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-orange-100 text-[#F37021] uppercase tracking-wider">
                {activeProgramModal.level}
              </span>
              <span className="text-xs font-semibold text-zinc-500">
                Code: {activeProgramModal.code}
              </span>
            </div>

            <h3 className="text-2xl font-black text-zinc-900 mb-1">
              {activeProgramModal.name}
            </h3>
            <p className="text-xs font-medium text-zinc-500 mb-6">
              {activeProgramModal.faculty}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-zinc-50 rounded-2xl mb-6 text-xs border border-zinc-100">
              <div>
                <span className="text-zinc-500 block">Duration:</span>
                <span className="font-bold text-zinc-900">{activeProgramModal.duration}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Tuition Fee:</span>
                <span className="font-bold text-zinc-900">{activeProgramModal.feesPerSemester}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Scholarship:</span>
                <span className="font-bold text-emerald-700">{activeProgramModal.scholarshipUpTo}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                Eligibility Criteria
              </h4>
              <p className="text-xs text-zinc-700 bg-amber-50/60 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
                {activeProgramModal.eligibility}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                Curriculum Highlights &amp; Industry Modules
              </h4>
              <ul className="space-y-2 text-xs text-zinc-700">
                {activeProgramModal.curriculumHighlights.map((ch, chi) => (
                  <li key={chi} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F37021] shrink-0 mt-0.5" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                Career Pathways &amp; Global Roles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProgramModal.careerRoles.map((role, ri) => (
                  <span
                    key={ri}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveProgramModal(null)}
                className="px-5 py-2.5 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-xs font-bold text-zinc-700 uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => {
                  setAdmissionsForm((prev) => ({ ...prev, programId: activeProgramModal.id }));
                  setActiveProgramModal(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#F37021] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Apply for this Degree
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: RANKING DETAIL MODAL --- */}
      {activeRankingModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#18181B] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-zinc-700 shadow-2xl relative">
            <button
              onClick={() => setActiveRankingModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#F37021] block mb-1">
              {activeRankingModal.body}
            </span>
            <div className="text-4xl font-black mb-2" style={{ color: activeRankingModal.color }}>
              {activeRankingModal.rank}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {activeRankingModal.title}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-6">
              {activeRankingModal.description}
            </p>

            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-xs text-zinc-400 space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Assessment Year:</span>
                <span className="font-semibold text-white">{activeRankingModal.year}</span>
              </div>
              <div className="flex justify-between">
                <span>Verification Authority:</span>
                <span className="font-semibold text-white">Statutory Audit Committee</span>
              </div>
            </div>

            <button
              onClick={() => setActiveRankingModal(null)}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 3: DIGNITARY VOICE MODAL --- */}
      {activeDignitaryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#18181B] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-zinc-700 shadow-2xl relative">
            <button
              onClick={() => setActiveDignitaryModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 uppercase tracking-wider inline-block mb-3">
              {activeDignitaryModal.type.replace('-', ' ')}
            </span>
            <h3 className="text-2xl font-black text-white mb-1">
              {activeDignitaryModal.name}
            </h3>
            <p className="text-xs font-semibold text-[#F37021] mb-4">
              {activeDignitaryModal.title}
            </p>

            <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 text-xs text-zinc-400 mb-5">
              <span className="text-zinc-500 font-semibold">Address Occasion:</span>
              <div className="text-zinc-200 font-medium mt-0.5">{activeDignitaryModal.occasion}</div>
            </div>

            <div className="bg-orange-500/10 border-l-4 border-[#F37021] p-4 rounded-r-xl mb-6">
              <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                {activeDignitaryModal.quote}
              </p>
            </div>

            <button
              onClick={() => setActiveDignitaryModal(null)}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 4: 360 DEGREE VIRTUAL TOUR SIMULATOR --- */}
      {is360ModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#18181B] text-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 border border-zinc-700 shadow-2xl relative">
            <button
              onClick={() => setIs360ModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <RotateCcw className="w-5 h-5 text-[#F37021] animate-spin" />
              <h3 className="text-xl font-black text-white">
                360° Interactive Campus Experience
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Explore the 600-acre smart green campus of Arshad University in full panoramic perspective.
            </p>

            {/* Simulated 360 Viewport */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center mb-6 group">
              <img
                src={
                  active360Spot === 'campus'
                    ? '/assets/arshad-university/campus-main.jpg'
                    : active360Spot === 'library'
                    ? '/assets/arshad-university/campus-library.jpg'
                    : active360Spot === 'sports'
                    ? '/assets/arshad-university/campus-sports.jpg'
                    : '/assets/arshad-university/campus-hostel.jpg'
                }
                alt="Campus View"
                className="w-full h-full object-cover filter brightness-[0.85] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

              {/* 360 Compass Center Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-[#F37021] flex items-center justify-center text-white mb-2">
                  <RotateCcw className="w-8 h-8 text-[#F37021]" />
                </div>
                <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                  Drag / Pan Simulation Active
                </span>
              </div>

              {/* Hotspot Location Legend */}
              <div className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-zinc-700">
                Viewing: {active360Spot.toUpperCase()} SECTOR
              </div>
            </div>

            {/* Spot Selector Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'campus', label: 'Main Quad & Boulevard' },
                { id: 'library', label: 'Central 9-Storey Library' },
                { id: 'sports', label: 'Olympic Sports Arena' },
                { id: 'hostel', label: 'Residential Hostels & Uni-Mall' }
              ].map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActive360Spot(spot.id as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center ${
                    active360Spot === spot.id
                      ? 'bg-[#F37021] text-white shadow-md'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                  }`}
                >
                  {spot.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 5: SITE-WIDE SEARCH MODAL --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-zinc-200 relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-zinc-900 mb-3">
              Search Arshad University Portal
            </h3>

            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="Type course, NIRF rank, dignitary or facility..."
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:bg-white"
              />
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2">
              {searchResults.map((res, ri) => (
                <a
                  key={ri}
                  href={res.link}
                  onClick={() => setIsSearchOpen(false)}
                  className="block p-3 rounded-xl bg-zinc-50 hover:bg-orange-50 border border-zinc-100 hover:border-orange-200 transition-colors"
                >
                  <div className="text-[10px] font-bold text-[#F37021] uppercase tracking-wider mb-0.5">
                    {res.type}
                  </div>
                  <div className="text-xs font-bold text-zinc-900">{res.title}</div>
                  <div className="text-[11px] text-zinc-500">{res.subtitle}</div>
                </a>
              ))}

              {globalSearchQuery && searchResults.length === 0 && (
                <div className="text-center py-8 text-xs text-zinc-500">
                  No direct results matching "{globalSearchQuery}".
                </div>
              )}

              {!globalSearchQuery && (
                <div className="text-center py-6 text-xs text-zinc-400">
                  Popular searches: B.Tech CSE, MBA, NAAC A++, Neeraj Chopra, Highest Package, AUNEST.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 6: PROSPECTUS DOWNLOAD MODAL --- */}
      {isProspectusModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative">
            <button
              onClick={() => {
                setIsProspectusModalOpen(false);
                setProspectusSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {prospectusSubmitted ? (
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-zinc-900 mb-1">Prospectus Sent!</h4>
                <p className="text-xs text-zinc-600 mb-4">
                  The Arshad University Academic Brochure &amp; Fee Dossier has been sent to <span className="font-semibold text-zinc-900">{prospectusEmail}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsProspectusModalOpen(false);
                    setProspectusSubmitted(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#F37021]">
                  <Download className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">OFFICIAL BROCHURE</span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-1">Download Prospectus 2026</h3>
                <p className="text-xs text-zinc-500 mb-6">
                  Get the comprehensive 120-page guide with faculty curricula, fees, scholarship matrices, and hostel packages.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (prospectusEmail.trim() && prospectusEmail.includes('@')) {
                      setProspectusSubmitted(true);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={prospectusEmail}
                      onChange={(e) => setProspectusEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#F37021] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                  >
                    Send PDF to My Inbox
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MODAL 7: CAMPUS FEATURE DETAIL MODAL --- */}
      {activeCampusFeatureModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative">
            <button
              onClick={() => setActiveCampusFeatureModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#F37021] uppercase tracking-wider block mb-1">
              {activeCampusFeatureModal.category}
            </span>
            <h3 className="text-2xl font-black text-zinc-900 mb-1">
              {activeCampusFeatureModal.title}
            </h3>
            <p className="text-xs font-bold text-emerald-700 mb-4">
              {activeCampusFeatureModal.metrics}
            </p>

            <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-zinc-100">
              <img
                src={activeCampusFeatureModal.image}
                alt={activeCampusFeatureModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed mb-4">
              {activeCampusFeatureModal.description}
            </p>

            <ul className="space-y-2 mb-6 text-xs text-zinc-700">
              {activeCampusFeatureModal.points.map((pt, pti) => (
                <li key={pti} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F37021] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setActiveCampusFeatureModal(null)}
              className="w-full py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
