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
  Download,
  ExternalLink,
  GraduationCap,
  Heart,
  HelpCircle,
  Laptop,
  Layers,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Cpu,
  Microscope,
  Palette,
  BriefcaseBusiness,
} from 'lucide-react';
import { SNU_CONFIG, SchoolItem, ProgramItem } from './shiv-nadar-university.config';

export const ShivNadarUniversity: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<
    'home' | 'about' | 'academics' | 'admissions' | 'research' | 'campus' | 'placements' | 'contact'
  >('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      id: 0,
      tag: 'INSTITUTION OF EMINENCE',
      title: 'Education for Life',
      subtitle: '286-Acre Residential Multidisciplinary Research University in Delhi-NCR',
      desc: 'Awarded IoE status by the Govt. of India. Rank #57 in NIRF India Rankings. Global dual-degree tie-ups with Arizona State University.',
      badgeImg: '/assets/shiv-nadar-university/badge-ioe.svg',
      heroGraphic: '/assets/shiv-nadar-university/hero-ioe-campus.svg',
      primaryBtn: 'Explore Programs',
      primaryAction: () => setActiveTab('academics'),
      secondaryBtn: 'Campus Virtual Tour',
      secondaryAction: () => setActiveTab('campus'),
    },
    {
      id: 1,
      tag: 'RESEARCH & INNOVATION',
      title: 'Opportunities for Undergraduate Research',
      subtitle: 'OUR Program — Direct Research Grants for Bachelor Scholars',
      desc: 'Over ₹350+ Crores in extramural research funding. 30+ deep-tech startups incubated at Atal Incubation Centre (AIC-SNU).',
      badgeImg: '/assets/shiv-nadar-university/badge-aic.svg',
      heroGraphic: '/assets/shiv-nadar-university/hero-research-our.svg',
      primaryBtn: 'Discover Research & OUR',
      primaryAction: () => setActiveTab('research'),
      secondaryBtn: 'Incubation Center',
      secondaryAction: () => setActiveTab('research'),
    },
    {
      id: 2,
      tag: 'CAREER MILESTONES',
      title: '₹58.09 LPA Highest CTC',
      subtitle: '93% Placement Success Across 170+ Global Recruiter Partners',
      desc: 'Top recruiters include Google, Microsoft, DE Shaw, Amazon, Goldman Sachs, Bain, McKinsey, and Adobe with ₹11.35 LPA average.',
      badgeImg: '/assets/shiv-nadar-university/badge-nirf.svg',
      heroGraphic: '/assets/shiv-nadar-university/hero-placements.svg',
      primaryBtn: 'View Placement Report',
      primaryAction: () => setActiveTab('placements'),
      secondaryBtn: 'Top Recruiters',
      secondaryAction: () => setActiveTab('placements'),
    },
    {
      id: 3,
      tag: 'ADMISSIONS 2026-27',
      title: 'SNUSAT & APT Open',
      subtitle: 'Undergraduate, Master’s & Doctoral Admissions Now Live',
      desc: 'Merit-based scholarships up to 100% tuition waiver. Pathways via SNUSAT, JEE Main, CUET-UG, and College Board SAT/ACT.',
      badgeImg: '/assets/shiv-nadar-university/badge-snusat.svg',
      heroGraphic: '/assets/shiv-nadar-university/hero-snusat-admissions.svg',
      primaryBtn: 'Apply Online for 2026',
      primaryAction: () => setActiveTab('admissions'),
      secondaryBtn: 'Eligibility Checker',
      secondaryAction: () => setActiveTab('admissions'),
    },
    {
      id: 4,
      tag: 'STUDENT LIFE & CULTURE',
      title: 'Breeze Techno-Cultural Fest',
      subtitle: '400,000 Sq. Ft. Indoor Sports Complex & 50+ Vibrant Student Clubs',
      desc: 'Experience North India’s premier techno-cultural extravaganza alongside olympic-grade athletic arenas, equestrian club, and wetlands.',
      badgeImg: '/assets/shiv-nadar-university/badge-ioe.svg',
      heroGraphic: '/assets/shiv-nadar-university/hero-breeze-fest.svg',
      primaryBtn: 'Experience Campus Life',
      primaryAction: () => setActiveTab('campus'),
      secondaryBtn: 'Clubs & Societies',
      secondaryAction: () => setActiveTab('campus'),
    },
  ];

  // Academics Filtering
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<ProgramItem | null>(null);

  const filteredPrograms = useMemo(() => {
    return SNU_CONFIG.programs.filter((prog) => {
      const matchSchool = selectedSchool === 'all' || prog.schoolId === selectedSchool;
      const matchLevel = selectedLevel === 'all' || prog.degreeLevel === selectedLevel;
      const matchSearch =
        !searchQuery ||
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.careerRoles.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchSchool && matchLevel && matchSearch;
    });
  }, [selectedSchool, selectedLevel, searchQuery]);

  // Admissions Application / Query State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryProgram, setInquiryProgram] = useState('B.Tech in Computer Science and Engineering');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Scholarship Estimator State
  const [twelfthPercentage, setTwelfthPercentage] = useState<number>(92);
  const [jeePercentile, setJeePercentile] = useState<number>(94);
  const estimatedScholarship = useMemo(() => {
    if (twelfthPercentage >= 95 || jeePercentile >= 95) {
      return { percentage: '100% Tuition Waiver', tier: 'Top Tier Merit Scholarship (Category A)' };
    }
    if (twelfthPercentage >= 90 || jeePercentile >= 90) {
      return { percentage: '75% Tuition Waiver', tier: 'High Academic Merit Scholarship (Category B)' };
    }
    if (twelfthPercentage >= 85 || jeePercentile >= 82) {
      return { percentage: '50% Tuition Waiver', tier: 'Merit Academic Scholarship (Category C)' };
    }
    if (twelfthPercentage >= 75) {
      return { percentage: '25% Tuition Waiver', tier: 'Dean’s Commendation Scholarship' };
    }
    return { percentage: 'Standard Fee Structure', tier: 'General Merit Admission Eligible' };
  }, [twelfthPercentage, jeePercentile]);

  // Campus facility active view
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryPhone) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#071322] text-slate-100 font-sans selection:bg-[#BE123C] selection:text-white">
      {/* 1. TOP TICKER & ANNOUNCEMENT BAR */}
      <div className="bg-[#040C16] border-b border-slate-800/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-[#BE123C] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> IoE Eminence
            </span>
            <span className="text-slate-300 hidden md:inline">
              Admissions 2026-27 Open for B.Tech, B.Sc (Research), BMS &amp; MBA via SNUSAT / JEE Main
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('admissions');
              }}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" /> SNUSAT Schedule
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('contact');
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> 1800-102-1768
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setActiveTab('admissions')}
              className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 font-bold px-3 py-1 rounded text-xs transition-all shadow-sm flex items-center gap-1"
            >
              Apply Online <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & BRAND NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#071322]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <img
              src="/assets/shiv-nadar-university/logo-white.svg"
              alt="Shiv Nadar University"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About SNU' },
              { id: 'academics', label: 'Academics & Schools' },
              { id: 'admissions', label: 'Admissions 2026' },
              { id: 'research', label: 'OUR & Research' },
              { id: 'campus', label: 'Campus Life' },
              { id: 'placements', label: 'Placements' },
              { id: 'contact', label: 'Contact' },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id as any)}
                className={`px-3 py-2 rounded-lg transition-all ${
                  activeTab === nav.id
                    ? 'text-white bg-slate-800/90 font-semibold shadow-inner border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('admissions');
              }}
              className="bg-gradient-to-r from-[#BE123C] to-[#9F1239] hover:from-[#E11D48] hover:to-[#BE123C] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md shadow-rose-950/40 flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4" /> Apply SNUSAT 2026
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1B2F] border-b border-slate-800 px-4 py-4 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Shiv Nadar University' },
              { id: 'academics', label: 'Academics & Programs' },
              { id: 'admissions', label: 'Admissions 2026-27 (SNUSAT)' },
              { id: 'research', label: 'OUR Program & AIC-SNU' },
              { id: 'campus', label: 'Campus Life & Sports Complex' },
              { id: 'placements', label: 'Placements & CDC' },
              { id: 'contact', label: 'Contact & Travel Guide' },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveTab(nav.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                  activeTab === nav.id
                    ? 'bg-rose-900/40 text-rose-300 font-bold border border-rose-800/40'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {nav.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setActiveTab('admissions');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center bg-rose-700 text-white py-2 rounded-lg font-bold text-sm"
              >
                Apply Online 2026
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (HOME TAB) */}
      {activeTab === 'home' && (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#071322] via-[#0B2545] to-[#071322] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline, Highlights & Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5 text-rose-400" />
                  {heroSlides[currentSlide].tag}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-amber-400/90 leading-snug">
                  {heroSlides[currentSlide].subtitle}
                </p>

                <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].desc}
                </p>

                {/* Call to Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={heroSlides[currentSlide].primaryAction}
                    className="bg-gradient-to-r from-[#BE123C] to-[#E11D48] hover:from-[#9F1239] hover:to-[#BE123C] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-rose-950/50 flex items-center gap-2 group"
                  >
                    <span>{heroSlides[currentSlide].primaryBtn}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={heroSlides[currentSlide].secondaryAction}
                    className="bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-semibold px-5 py-3.5 rounded-xl transition-all flex items-center gap-2"
                  >
                    <span>{heroSlides[currentSlide].secondaryBtn}</span>
                  </button>
                </div>

                {/* Quick Slide Badges / Dots */}
                <div className="flex items-center gap-3 pt-4">
                  <span className="text-xs text-slate-400 font-medium">Explore Highlights:</span>
                  <div className="flex gap-2">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                          currentSlide === idx
                            ? 'bg-amber-500 text-slate-950 shadow'
                            : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        {slide.tag.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Graphic Canvas & Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900/80 group">
                  <img
                    src={heroSlides[currentSlide].heroGraphic}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-transparent opacity-80" />

                  {/* Floating Recognition Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0B2545]/90 backdrop-blur-md p-3 rounded-xl border border-blue-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Ministry of Education, GoI</div>
                        <div className="text-[11px] text-amber-400">Institution of Eminence Deemed University</div>
                      </div>
                    </div>
                    <img
                      src="/assets/shiv-nadar-university/badge-ioe.svg"
                      alt="IoE Badge"
                      className="h-10 w-auto object-contain hidden sm:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Facts Counter Strip */}
          <div className="bg-[#040C16] border-t border-slate-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {SNU_CONFIG.stats.map((stat, i) => (
                  <div key={i} className="text-center p-2 rounded-lg hover:bg-slate-900/60 transition-colors">
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-1">{stat.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. OVERVIEW / ABOUT SECTION */}
      {(activeTab === 'home' || activeTab === 'about') && (
        <section className="py-16 bg-[#071322] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5" /> Institutional Legacy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                An Institution of Eminence in the Heart of Delhi-NCR
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Founded in 2011 by the <strong>Shiv Nadar Foundation</strong> (established by Mr. Shiv Nadar,
                Founder of HCL), Shiv Nadar University was designed from the ground up as a premier research-intensive,
                multidisciplinary university empowering students to solve real-world problems.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0B2545]/60 border border-slate-700/80 rounded-2xl p-6 hover:border-rose-500/50 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Institution of Eminence (IoE)</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Recognized by the Ministry of Education, Government of India, granting global autonomy to design
                  agile curricula, build world-class research facilities, and recruit top international faculty.
                </p>
                <div className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Top 60 NIRF University for 8 Years
                </div>
              </div>

              <div className="bg-[#0B2545]/60 border border-slate-700/80 rounded-2xl p-6 hover:border-cyan-500/50 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Undergraduate Research (OUR)</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  The flagship <strong>OUR</strong> program enables undergraduate students to receive direct funded
                  grants, publish in peer-reviewed Scopus journals, and file patents alongside faculty mentors.
                </p>
                <div className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 1,200+ Funded Grants &amp; 38+ Patents
                </div>
              </div>

              <div className="bg-[#0B2545]/60 border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/50 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">286-Acre Residential Sanctuary</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A 100% residential campus in Greater Noida featuring an Olympic-grade 400,000 sq ft Indoor Sports Complex,
                  natural wetlands, air-conditioned single/twin rooms, and 50+ student clubs.
                </p>
                <div className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Olympic Sports, Squash &amp; Equestrian Club
                </div>
              </div>
            </div>

            {/* Leadership Overview (Active when on About tab) */}
            {activeTab === 'about' && (
              <div className="pt-8 border-t border-slate-800 space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-white">University Leadership &amp; Governance</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Guided by visionary leaders dedicated to nation-building through higher education excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-600 flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg">
                      SM
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{SNU_CONFIG.institution.chancellor}</div>
                      <div className="text-amber-400 text-xs font-semibold mb-2">Chancellor, Shiv Nadar University</div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Trustee of the Shiv Nadar Foundation and CEO of HCL Corporation, steering Shiv Nadar University's
                        strategic trajectory toward global leadership in research and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg">
                      AM
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{SNU_CONFIG.institution.viceChancellor}</div>
                      <div className="text-blue-400 text-xs font-semibold mb-2">Vice-Chancellor, Shiv Nadar University</div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Distinguished academic leader, former Provost &amp; Vice-President Academic at UBC Okanagan,
                        championing interdisciplinary scholarship, equity, and global research consortia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accreditations & Rankings Grid */}
                <div className="bg-[#0B2545]/40 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <h4 className="text-lg font-bold text-white text-center">Accreditations &amp; Global Recognitions</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-800">
                      <div className="text-rose-400 font-extrabold text-lg">IoE Tag</div>
                      <div className="text-xs text-slate-300 font-medium">Institution of Eminence</div>
                      <div className="text-[11px] text-slate-500 mt-1">Govt. of India</div>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-800">
                      <div className="text-amber-400 font-extrabold text-lg">#57</div>
                      <div className="text-xs text-slate-300 font-medium">NIRF Universities</div>
                      <div className="text-[11px] text-slate-500 mt-1">8 Yrs in Top 100</div>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-800">
                      <div className="text-cyan-400 font-extrabold text-lg">#336</div>
                      <div className="text-xs text-slate-300 font-medium">QS Asia Ranking</div>
                      <div className="text-[11px] text-slate-500 mt-1">Top 100 in S. Asia</div>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-800">
                      <div className="text-emerald-400 font-extrabold text-lg">NITI Aayog</div>
                      <div className="text-xs text-slate-300 font-medium">AIC-SNU Hub</div>
                      <div className="text-[11px] text-slate-500 mt-1">30+ Deep-Tech Startups</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. ACADEMICS & SCHOOLS SHOWCASE (HOME & ACADEMICS TABS) */}
      {(activeTab === 'home' || activeTab === 'academics') && (
        <section className="py-16 bg-[#040C16] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-2">
                  <BookOpen className="w-3.5 h-3.5" /> Schools &amp; Disciplines
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Academic Schools of Shiv Nadar University
                </h2>
                <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                  Five distinguished academic schools offering research-led undergraduate, postgraduate, and doctoral
                  degrees with flexible majors and minors.
                </p>
              </div>

              {activeTab === 'home' && (
                <button
                  onClick={() => setActiveTab('academics')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  View All Programs &amp; Curricula <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* School Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SNU_CONFIG.schools.map((school) => (
                <div
                  key={school.id}
                  className="bg-[#0B2545]/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                        {school.shortCode}
                      </span>
                      <span className="text-xs text-slate-400">{school.keyStats.programsCount} Programs</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {school.name}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {school.description}
                    </p>

                    {/* Departments Pill List */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Departments:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {school.departments.map((dept, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs">
                    <div className="text-slate-400">
                      Dean: <span className="text-slate-200 font-semibold">{school.dean}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSchool(school.id);
                        setActiveTab('academics');
                      }}
                      className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                    >
                      Browse <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* PROGRAM FINDER & INTERACTIVE DIRECTORY */}
            <div className="bg-[#071322] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Search className="w-5 h-5 text-amber-400" /> Interactive Program Finder
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Explore undergraduate, master’s, and research programs by discipline and eligibility.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-amber-400"
                  >
                    <option value="all">All Schools</option>
                    {SNU_CONFIG.schools.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-amber-400"
                  >
                    <option value="all">All Degree Levels</option>
                    <option value="Undergraduate">Undergraduate (B.Tech / B.Sc / B.A / BMS)</option>
                    <option value="Postgraduate">Postgraduate (MBA / M.Tech / M.Sc)</option>
                  </select>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search program or skill..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-2 outline-none focus:border-amber-400 w-48 sm:w-64"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                  </div>
                </div>
              </div>

              {/* Programs List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPrograms.map((prog) => (
                  <div
                    key={prog.id}
                    className="bg-[#0A1B2F]/80 border border-slate-800 hover:border-blue-500/50 rounded-xl p-5 flex flex-col justify-between transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                          {prog.degreeLevel}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {prog.duration}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white">{prog.title}</h4>

                      <div className="text-xs text-slate-300">
                        <span className="text-slate-500">Department:</span> {prog.department}
                      </div>

                      <div className="text-xs text-slate-300">
                        <span className="text-slate-500">Eligibility:</span> {prog.eligibility}
                      </div>

                      {/* Pathways Badge */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {prog.admissionRoutes.map((route, rIdx) => (
                          <span
                            key={rIdx}
                            className="text-[10px] font-medium bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-slate-700"
                          >
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                      <div className="text-xs font-bold text-emerald-400">
                        Annual Tuition: {prog.annualFeeINR}
                      </div>
                      <button
                        onClick={() => setSelectedProgramDetail(prog)}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        Curriculum Details <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPrograms.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No academic programs matched your current filter criteria.
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 6. ADMISSIONS 2026-27 PORTAL (HOME & ADMISSIONS TABS) */}
      {(activeTab === 'home' || activeTab === 'admissions') && (
        <section className="py-16 bg-[#071322] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Admissions 2026-27 Window
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Shiv Nadar University Admissions &amp; SNUSAT
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Admissions to all undergraduate programs are conducted on the basis of candidates’ performance in the
                <strong> SNUSAT (Shiv Nadar University Scholastic Aptitude Test)</strong> and subject Academic
                Proficiency Test (APT), or valid national entrance examinations like JEE Main, CUET, and SAT.
              </p>
            </div>

            {/* Step-by-Step Admission Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SNU_CONFIG.admissions.steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#0B2545]/40 border border-slate-800 rounded-xl p-5 relative flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shadow">
                      {step.step}
                    </div>
                    <h4 className="text-base font-bold text-white">{step.title}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Application Form & Scholarship Estimator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Scholarship Calculator */}
              <div className="lg:col-span-6 bg-[#040C16] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Trophy className="w-4 h-4" /> Merit Scholarship Estimator
                  </div>
                  <h3 className="text-2xl font-bold text-white">Check Your Tuition Waiver Eligibility</h3>
                  <p className="text-slate-400 text-xs">
                    Shiv Nadar University offers generous merit-based scholarships up to 100% tuition waiver to meritorious scholars.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>10+2 / CBSE / ISC Board Percentage:</span>
                      <span className="text-amber-400 font-bold">{twelfthPercentage}%</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={100}
                      value={twelfthPercentage}
                      onChange={(e) => setTwelfthPercentage(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>JEE Main Percentile (if applicable):</span>
                      <span className="text-cyan-400 font-bold">{jeePercentile} Percentile</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      value={jeePercentile}
                      onChange={(e) => setJeePercentile(Number(e.target.value))}
                      className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Estimated Output Card */}
                  <div className="bg-gradient-to-r from-[#0B2545] to-[#143A6A] p-5 rounded-xl border border-blue-500/40 text-center space-y-2 shadow-inner">
                    <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                      Estimated Scholarship Waiver:
                    </div>
                    <div className="text-3xl font-black text-amber-300 tracking-tight">
                      {estimatedScholarship.percentage}
                    </div>
                    <div className="text-xs text-cyan-300 font-medium">{estimatedScholarship.tier}</div>
                  </div>

                  {/* Scholarship Categories List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Scholarship Categories at SNU:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {SNU_CONFIG.admissions.scholarships.map((sch, i) => (
                        <div key={i} className="bg-slate-900 p-2.5 rounded border border-slate-800">
                          <div className="font-bold text-amber-400">{sch.type}</div>
                          <div className="text-slate-300 font-semibold">{sch.benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Admission Inquiry & Fast-Track Registration */}
              <div className="lg:col-span-6 bg-[#040C16] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                    <Send className="w-4 h-4" /> Fast-Track Application Portal
                  </div>
                  <h3 className="text-2xl font-bold text-white">Apply for SNUSAT 2026-27</h3>
                  <p className="text-slate-400 text-xs">
                    Submit your academic profile to receive your SNUSAT application link and scholarship assessment guide.
                  </p>
                </div>

                {inquirySubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-600/50 p-6 rounded-xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Application Profile Registered!</h4>
                    <p className="text-emerald-200 text-xs leading-relaxed">
                      Thank you, <strong>{inquiryName}</strong>. Your SNUSAT 2026 inquiry profile has been registered for{' '}
                      <strong>{inquiryProgram}</strong>. An email with test syllabus and instructions has been dispatched to{' '}
                      <strong>{inquiryEmail}</strong>.
                    </p>
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="text-xs text-amber-400 underline font-semibold mt-2"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Candidate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="aarav@example.com"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Select Academic Program of Interest *
                      </label>
                      <select
                        value={inquiryProgram}
                        onChange={(e) => setInquiryProgram(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-rose-500"
                      >
                        {SNU_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.degreeLevel})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-rose-950/40 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Submit Application &amp; Download Syllabus
                    </button>

                    <div className="text-[11px] text-slate-500 text-center">
                      Authorized by Shiv Nadar Foundation · Privacy Guaranteed · Direct Admissions Team
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. RESEARCH & OUR PROGRAM (RESEARCH TAB) */}
      {(activeTab === 'home' || activeTab === 'research') && (
        <section className="py-16 bg-[#040C16] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                <Microscope className="w-3.5 h-3.5" /> Discovery &amp; Deep-Tech
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {SNU_CONFIG.researchOUR.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {SNU_CONFIG.researchOUR.overview}
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SNU_CONFIG.researchOUR.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B2545]/40 border border-slate-800 rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-black text-cyan-400">{m.value}</div>
                  <div className="text-xs font-semibold text-slate-300 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Research Centers of Excellence & Atal Incubation Centre */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SNU_CONFIG.researchOUR.centersOfExcellence.map((center, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1B2F]/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-400/10 px-2 py-0.5 rounded">
                      Centre of Excellence
                    </span>
                    <span className="text-xs text-slate-400">{center.supportedBy}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{center.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{center.focus}</p>
                </div>
              ))}
            </div>

            {/* Global University Partnerships */}
            <div className="bg-[#071322] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">Global Academic &amp; Research Alliances</h3>
              <p className="text-slate-400 text-xs text-center max-w-2xl mx-auto">
                Shiv Nadar University collaborates with world-renowned universities for joint degrees, faculty exchange,
                and international laboratory research.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 text-center space-y-2">
                  <div className="text-amber-400 font-extrabold text-lg">Arizona State University (ASU)</div>
                  <div className="text-xs text-slate-300">Dual Degree B.S. in Computer Science</div>
                  <p className="text-[11px] text-slate-400">
                    2 years at SNU Delhi-NCR + 2 years at ASU Ira A. Fulton Schools of Engineering in Tempe, Arizona.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 text-center space-y-2">
                  <div className="text-cyan-400 font-extrabold text-lg">Carnegie Mellon University</div>
                  <div className="text-xs text-slate-300">Research &amp; Materials Sciences</div>
                  <p className="text-[11px] text-slate-400">
                    Collaborative structural chemistry investigations and high-energy physics exchange fellowships.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 text-center space-y-2">
                  <div className="text-rose-400 font-extrabold text-lg">Duke University &amp; Penn</div>
                  <div className="text-xs text-slate-300">Biomedical Sciences &amp; Global Health</div>
                  <p className="text-[11px] text-slate-400">
                    Global health initiatives, infectious disease epidemiology, and computational biology labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. CAMPUS LIFE, 400K SQ FT SPORTS COMPLEX & BREEZE FEST (CAMPUS TAB) */}
      {(activeTab === 'home' || activeTab === 'campus') && (
        <section className="py-16 bg-[#071322] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wider uppercase mb-2">
                  <Building2 className="w-3.5 h-3.5" /> 286-Acre Residential Oasis
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Campus Facilities &amp; Student Life
                </h2>
                <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                  {SNU_CONFIG.campusLife.overview}
                </p>
              </div>

              {activeTab === 'home' && (
                <button
                  onClick={() => setActiveTab('campus')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-400 hover:text-rose-300"
                >
                  Explore Full Campus Tour <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SNU_CONFIG.campusLife.facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B2545]/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                      {fac.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-white">{fac.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Breeze Techno-Cultural Fest Feature Spotlight */}
            <div className="bg-gradient-to-r from-rose-950/70 via-[#1C0F22] to-amber-950/60 border border-rose-800/40 rounded-2xl p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5" /> Flagship Fest
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">
                    Breeze: Annual Techno-Cultural &amp; Sports Fest
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Over 15,000 students gather annually for three electrifying days of hackathons, battle of the bands,
                    classical and western dance, national literary debates, and celebrity pro-nights. Past performers
                    include Ritviz, Neha Kakkar, and Kanan Gill.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs pt-2">
                    <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200">
                      🗓 Held Every February
                    </span>
                    <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200">
                      🎸 50+ Inter-College Events
                    </span>
                    <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200">
                      🏆 Cash Prizes ₹15+ Lakhs
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src="/assets/shiv-nadar-university/hero-breeze-fest.svg"
                    alt="Breeze Fest"
                    className="w-full h-56 object-cover rounded-xl border border-rose-700/40 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. PLACEMENTS & CAREERS (HOME & PLACEMENTS TABS) */}
      {(activeTab === 'home' || activeTab === 'placements') && (
        <section className="py-16 bg-[#040C16] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                <Briefcase className="w-3.5 h-3.5" /> Career Development Centre
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Industry Placements &amp; Career Trajectories
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Career Development Centre (CDC) at Shiv Nadar University partners with top global tech, finance,
                consulting, and core engineering corporations, consistently delivering outstanding career launches.
              </p>
            </div>

            {/* Placement Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#0B2545]/50 border border-amber-500/40 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-amber-400">
                  {SNU_CONFIG.placements.topPackage}
                </div>
                <div className="text-xs font-bold text-white mt-1">Highest CTC Offered</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Top tech &amp; quantitative roles</div>
              </div>

              <div className="bg-[#0B2545]/50 border border-blue-500/40 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-blue-400">
                  {SNU_CONFIG.placements.averagePackage}
                </div>
                <div className="text-xs font-bold text-white mt-1">Overall Average CTC</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Engineering Avg: {SNU_CONFIG.placements.engineeringAverage}</div>
              </div>

              <div className="bg-[#0B2545]/50 border border-rose-500/40 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-rose-400">
                  {SNU_CONFIG.placements.top20PercentAverage}
                </div>
                <div className="text-xs font-bold text-white mt-1">Top 20% Average CTC</div>
                <div className="text-[11px] text-slate-400 mt-0.5">High-impact engineering &amp; analytics</div>
              </div>

              <div className="bg-[#0B2545]/50 border border-emerald-500/40 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                  {SNU_CONFIG.placements.placementPercentage}
                </div>
                <div className="text-xs font-bold text-white mt-1">Placement Success Rate</div>
                <div className="text-[11px] text-slate-400 mt-0.5">170+ Recruiting Companies</div>
              </div>
            </div>

            {/* Recruiters by Industry Sector */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">Top Recruiters by Industry Sector</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SNU_CONFIG.placements.recruitersByCategory.map((sec, idx) => (
                  <div
                    key={idx}
                    className="bg-[#071322] border border-slate-800 rounded-xl p-5 space-y-3"
                  >
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {sec.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sec.companies.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs bg-slate-900 text-slate-200 px-2.5 py-1 rounded border border-slate-800 font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CDC Support Features */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {SNU_CONFIG.placements.cdcServices.map((srv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ ACCORDION SECTION */}
      <section className="py-16 bg-[#071322] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold tracking-wider uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold text-white">Common Inquiries Regarding Shiv Nadar University</h2>
          </div>

          <div className="space-y-3">
            {SNU_CONFIG.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#040C16] border border-slate-800 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & TRANSPORT GUIDE (CONTACT TAB) */}
      {(activeTab === 'home' || activeTab === 'contact') && (
        <section className="py-16 bg-[#040C16] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" /> Campus Location &amp; Inquiries
              </div>
              <h2 className="text-3xl font-extrabold text-white">Visit Our Greater Noida Campus</h2>
              <p className="text-slate-400 text-xs">
                Conveniently situated in Delhi-NCR with dedicated university shuttle transportation to major metro stations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Postal Address */}
              <div className="bg-[#071322] border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Campus Postal Address</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {SNU_CONFIG.institution.headquarters}
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Landmark: Near Dadri Railway Station &amp; Eastern Peripheral Expressway
                </div>
              </div>

              {/* Card 2: Admissions Helpdesk */}
              <div className="bg-[#071322] border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Admissions Helpline</h3>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div>Toll-Free: <strong className="text-white">1800-102-1768</strong></div>
                  <div>Direct Desk: <strong className="text-white">+91 120 7170100</strong></div>
                  <div>Email: <strong className="text-amber-400">admissions@snu.edu.in</strong></div>
                </div>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Hours: Mon–Sat, 9:00 AM – 6:00 PM IST
                </div>
              </div>

              {/* Card 3: Metro Shuttle Connectivity */}
              <div className="bg-[#071322] border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">University Metro Shuttles</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Regular air-conditioned shuttle services connect the campus with Botanical Garden Metro Station (Noida)
                  and Pari Chowk Metro Station (Aqua Line).
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Frequency: Every 30-45 mins during peak hours
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 12. PROGRAM DETAIL MODAL */}
      {selectedProgramDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#071322] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded">
                  {selectedProgramDetail.degreeLevel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProgramDetail.title}</h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Department of {selectedProgramDetail.department} · {selectedProgramDetail.duration}
                </div>
              </div>
              <button
                onClick={() => setSelectedProgramDetail(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-1">Eligibility Criteria</h5>
                <p className="text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                  {selectedProgramDetail.eligibility}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-1">Admission Routes</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProgramDetail.admissionRoutes.map((r, i) => (
                    <span key={i} className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-1">Core Curriculum Highlights</h5>
                <ul className="space-y-1.5 text-slate-300">
                  {selectedProgramDetail.curriculumHighlights.map((curr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span>{curr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProgramDetail.specializations && (
                <div>
                  <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-1">
                    Available Specializations
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProgramDetail.specializations.map((spec, sIdx) => (
                      <span key={sIdx} className="bg-rose-950/60 text-rose-300 px-2.5 py-1 rounded border border-rose-800/40">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-1">Career Pathways</h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProgramDetail.careerRoles.map((role, rIdx) => (
                    <span key={rIdx} className="bg-slate-800 text-emerald-300 px-2 py-0.5 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Annual Tuition Fee:</div>
                  <div className="text-lg font-bold text-emerald-400">{selectedProgramDetail.annualFeeINR}</div>
                </div>
                <button
                  onClick={() => {
                    setSelectedProgramDetail(null);
                    setInquiryProgram(selectedProgramDetail.title);
                    setActiveTab('admissions');
                  }}
                  className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2 rounded-lg text-xs"
                >
                  Apply for this Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 13. FOOTER */}
      <footer className="bg-[#02070E] border-t border-slate-900 text-slate-400 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="space-y-3">
              <img
                src="/assets/shiv-nadar-university/logo-white.svg"
                alt="Shiv Nadar University"
                className="h-12 w-auto object-contain"
              />
              <p className="text-[11px] leading-relaxed text-slate-400">
                Shiv Nadar University is an Institution of Eminence Deemed to be University founded by the Shiv Nadar
                Foundation. Committed to multidisciplinary education, world-class scientific research, and human development.
              </p>
              <div className="text-amber-400 text-[11px] font-bold">
                Motto: "Education for Life"
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <div className="text-white font-bold text-sm">Schools &amp; Faculties</div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>School of Engineering (SoE)</li>
                <li>School of Natural Sciences (SNS)</li>
                <li>School of Humanities &amp; Social Sciences</li>
                <li>School of Management &amp; Entrepreneurship</li>
                <li>Academy of Continuing Education (ACE)</li>
              </ul>
            </div>

            {/* Research & Campus */}
            <div className="space-y-2">
              <div className="text-white font-bold text-sm">Research &amp; Campus</div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>OUR Undergraduate Research Grants</li>
                <li>Atal Incubation Centre (AIC-SNU)</li>
                <li>400,000 Sq. Ft. Indoor Sports Complex</li>
                <li>Breeze Annual Techno-Cultural Fest</li>
                <li>286-Acre Green Residential Sanctuary</li>
              </ul>
            </div>

            {/* Admissions & Contact */}
            <div className="space-y-2">
              <div className="text-white font-bold text-sm">Admissions &amp; Contact</div>
              <div className="text-xs space-y-1 text-slate-300">
                <div>NH91, Greater Noida, UP 201314</div>
                <div>Toll-Free: 1800-102-1768</div>
                <div>Email: admissions@snu.edu.in</div>
                <div>Official Site: https://snu.edu.in/home/</div>
              </div>
              <button
                onClick={() => setActiveTab('admissions')}
                className="mt-3 w-full bg-gradient-to-r from-rose-700 to-amber-700 text-white font-bold py-2 rounded text-xs"
              >
                Apply Online 2026-27
              </button>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>
              © 2026 Shiv Nadar University (Delhi NCR). All rights reserved. Recreated faithfully for Raoz Website Maker.
            </div>
            <div className="flex items-center gap-4">
              <span>Institution of Eminence</span>
              <span>•</span>
              <span>NIRF Top 60</span>
              <span>•</span>
              <span>IoE Deemed University</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShivNadarUniversity;
