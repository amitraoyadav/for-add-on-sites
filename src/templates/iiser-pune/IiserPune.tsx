import React, { useState, useEffect, useRef } from 'react';
import {
  IISER_PUNE_CONFIG,
  GallerySlide,
  NewsItem,
  HomeTile,
  AcademicDepartment,
  AcademicProgram
} from './iiser-pune.config';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Menu,
  X,
  ExternalLink,
  BookOpen,
  Award,
  GraduationCap,
  Microscope,
  Compass,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  Share2,
  HeartHandshake,
  Layers,
  Info
} from 'lucide-react';

export default function IiserPune() {
  // Theme & Accessibility States
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'smaller' | 'larger'>('normal');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Navigation & Mega Menu States
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaTab, setActiveMegaTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Hero Slider States
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // News Scroll & Filter States
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>('All');
  const newsScrollContainerRef = useRef<HTMLDivElement>(null);

  // Departments State
  const [selectedDeptId, setSelectedDeptId] = useState<string>('biology');

  // Modals
  const [activeStoryModal, setActiveStoryModal] = useState<NewsItem | null>(null);
  const [activeSlideModal, setActiveSlideModal] = useState<GallerySlide | null>(null);
  const [activeTileModal, setActiveTileModal] = useState<HomeTile | null>(null);
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const {
    institution,
    logos,
    slides,
    news,
    tiles,
    departments,
    programs,
    statistics,
    megaMenu,
    footerLinks,
    statutoryLinks,
    socialLinks
  } = IISER_PUNE_CONFIG;

  // Auto-play for hero slider
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Horizontal scroll controls for News
  const scrollNews = (direction: 'left' | 'right') => {
    if (newsScrollContainerRef.current) {
      const scrollAmount = 340;
      newsScrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Filtered news
  const filteredNews =
    selectedNewsCategory === 'All'
      ? news
      : news.filter((item) => item.category === selectedNewsCategory);

  // Search results
  const searchResults = searchQuery.trim()
    ? [
        ...news.filter((n) =>
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.summary.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(n => ({ type: 'News', title: n.title, desc: n.summary, action: () => setActiveStoryModal(n) })),
        ...departments.filter((d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(d => ({ type: 'Department', title: d.name, desc: d.description, action: () => setSelectedDeptId(d.id) })),
        ...programs.filter((p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(p => ({ type: 'Programme', title: p.title, desc: p.description, action: () => setIsAdmissionsModalOpen(true) })),
        ...tiles.filter((t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(t => ({ type: 'Institutional', title: t.title, desc: t.description, action: () => setActiveTileModal(t) }))
      ]
    : [];

  const getTextClass = () => {
    if (textSize === 'smaller') return 'text-sm';
    if (textSize === 'larger') return 'text-lg';
    return 'text-base';
  };

  const selectedDept = departments.find((d) => d.id === selectedDeptId) || departments[0];

  return (
    <div
      className={`iiser-pune-demo min-h-screen font-sans transition-colors duration-200 ${
        highContrast ? 'bg-[#121212] text-[#f5f5f5]' : 'bg-[#FAFAFA] text-[#252a2d]'
      } ${getTextClass()}`}
    >
      {/* =========================================================================
          TOP ACCESSIBILITY & UTILITY BAR (Integrated with Header)
          ========================================================================= */}
      <header className={`sticky top-0 z-40 border-b shadow-xs transition-colors duration-200 ${
        highContrast ? 'bg-[#1f1f1f] border-[#333]' : 'bg-white border-[#E5E7EB]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upper Utility Row */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-xs text-gray-600">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-medium text-[#b62126] tracking-wide">
                {language === 'hi'
                  ? 'शिक्षा मंत्रालय, भारत सरकार के अधीन राष्ट्रीय महत्व का संस्थान'
                  : 'Institute of National Importance under Ministry of Education, Govt. of India'}
              </span>
              <span className="sm:hidden font-medium text-[#b62126]">IISER Pune</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quick Search Trigger */}
              <div
                onClick={() => setIsSearchModalOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 cursor-pointer transition-colors"
                title="Search this website"
              >
                <Search size={14} className="text-gray-500" />
                <span className="text-xs">{language === 'hi' ? 'वेबसाइट खोजें...' : 'Search IISER Pune...'}</span>
                <kbd className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-gray-300 text-gray-500">⌘K</kbd>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                    language === 'en'
                      ? 'bg-[#b62126] text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  title="Switch to English"
                >
                  en
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                    language === 'hi'
                      ? 'bg-[#b62126] text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  title="हिंदी में बदलें"
                >
                  हिं
                </button>
              </div>

              {/* High Contrast Mode Toggle */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`p-1.5 rounded transition-colors ${
                  highContrast ? 'bg-amber-400 text-black' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title={highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
              >
                <div className="w-3.5 h-3.5 rounded-full border-2 border-current flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
              </button>

              {/* Text Size Scale Controls */}
              <div className="flex items-center gap-1 text-[11px] font-bold border-l border-gray-200 pl-3">
                <button
                  onClick={() => setTextSize('smaller')}
                  className={`px-1.5 py-0.5 rounded ${textSize === 'smaller' ? 'bg-[#b62126] text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                  title="Make text smaller"
                >
                  A-
                </button>
                <button
                  onClick={() => setTextSize('normal')}
                  className={`px-1.5 py-0.5 rounded ${textSize === 'normal' ? 'bg-[#b62126] text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                  title="Default text size"
                >
                  A
                </button>
                <button
                  onClick={() => setTextSize('larger')}
                  className={`px-1.5 py-0.5 rounded ${textSize === 'larger' ? 'bg-[#b62126] text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                  title="Make text larger"
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* Main Navigation Row */}
          <div className="flex items-center justify-between py-3">
            {/* IISER Pune Official Logo Branding */}
            <div className="flex items-center gap-4">
              <a href="#home" className="flex items-center gap-3 group focus:outline-hidden">
                <img
                  src={highContrast ? logos.white : logos.color}
                  alt="IISER Pune Official Emblem"
                  className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-101"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => {
                  setActiveMegaTab(0);
                  setIsMegaMenuOpen(true);
                }}
                className="text-sm font-semibold tracking-wide text-gray-800 hover:text-[#b62126] transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {language === 'hi' ? 'संस्थान परिचय' : 'About'}
              </button>
              <button
                onClick={() => {
                  setActiveMegaTab(1);
                  setIsMegaMenuOpen(true);
                }}
                className="text-sm font-semibold tracking-wide text-gray-800 hover:text-[#b62126] transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {language === 'hi' ? 'अनुसंधान' : 'Research'}
              </button>
              <button
                onClick={() => {
                  setActiveMegaTab(2);
                  setIsMegaMenuOpen(true);
                }}
                className="text-sm font-semibold tracking-wide text-gray-800 hover:text-[#b62126] transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {language === 'hi' ? 'शिक्षा एवं प्रवेश' : 'Education'}
              </button>
              <button
                onClick={() => {
                  setActiveMegaTab(3);
                  setIsMegaMenuOpen(true);
                }}
                className="text-sm font-semibold tracking-wide text-gray-800 hover:text-[#b62126] transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {language === 'hi' ? 'समाचार व कार्यक्रम' : 'News & Events'}
              </button>
              <button
                onClick={() => {
                  setActiveMegaTab(4);
                  setIsMegaMenuOpen(true);
                }}
                className="text-sm font-semibold tracking-wide text-gray-800 hover:text-[#b62126] transition-colors py-2 flex items-center gap-1 cursor-pointer"
              >
                {language === 'hi' ? 'जुड़ें' : 'Engage with IISER Pune'}
              </button>
            </nav>

            {/* Action Buttons & Menu Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAdmissionsModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#b62126] hover:bg-[#8e171b] text-white text-xs font-bold rounded-xs tracking-wider uppercase transition-colors shadow-xs"
              >
                <GraduationCap size={15} />
                <span>{language === 'hi' ? 'प्रवेश २०२६' : 'Admissions 2026'}</span>
              </button>

              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="md:hidden p-2 text-gray-700 hover:text-[#b62126] focus:outline-hidden"
                aria-label="Search"
              >
                <Search size={22} />
              </button>

              {/* Hamburger Toggle with Authentic Red-Charcoal Lines */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="p-2 border border-gray-200 hover:border-gray-300 rounded focus:outline-hidden flex items-center justify-center cursor-pointer transition-colors"
                title="Open mega navigation menu"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-[#b62126] rounded-full"></span>
                  <span className="w-3/4 h-0.5 bg-[#4d4d4f] rounded-full ml-auto"></span>
                  <span className="w-full h-0.5 bg-[#b62126] rounded-full"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MEGA MENU DRAWER OVERLAY
          ========================================================================= */}
      {isMegaMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#1e2327] text-white px-6 py-4 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-4">
              <img src={logos.white} alt="IISER Pune White Logo" className="h-10 w-auto" />
              <span className="text-xs uppercase tracking-widest text-gray-300 border-l border-gray-600 pl-3 hidden md:inline">
                {language === 'hi' ? 'संस्थागत नेविगेशन' : 'Institutional Directory'}
              </span>
            </div>
            <button
              onClick={() => setIsMegaMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
              title="Close navigation"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Category Tabs in Mega Menu */}
          <div className="bg-[#14181b] px-6 py-2 flex items-center gap-2 overflow-x-auto border-b border-gray-800 text-xs font-semibold">
            {megaMenu.map((sec, idx) => (
              <button
                key={sec.title}
                onClick={() => setActiveMegaTab(idx)}
                className={`px-4 py-2 rounded-xs whitespace-nowrap transition-colors ${
                  activeMegaTab === idx
                    ? 'bg-[#b62126] text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Mega Menu Body */}
          <div className="flex-1 bg-white overflow-y-auto p-6 md:p-10 text-gray-800">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 pb-3 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#b62126]">
                    {megaMenu[activeMegaTab].title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Explore official programs, personnel directories, guidelines, and services
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    setIsSearchModalOpen(true);
                  }}
                  className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#0077bf] hover:underline"
                >
                  <Search size={14} /> Search within this section
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {megaMenu[activeMegaTab].columns.map((col, colIdx) => (
                  <div key={col.heading} className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 pb-1 border-b border-gray-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b62126]"></span>
                      {col.heading}
                    </h3>
                    <ul className="space-y-2 text-xs text-gray-600">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.url}
                            onClick={() => {
                              setIsMegaMenuOpen(false);
                              if (item.url.includes('dept')) {
                                setSelectedDeptId(item.url.replace('#dept-', ''));
                              } else if (item.url.includes('adm') || item.url.includes('iat')) {
                                setIsAdmissionsModalOpen(true);
                              } else if (item.url.includes('donate')) {
                                setIsDonateModalOpen(true);
                              } else if (item.url.includes('contact')) {
                                setIsContactModalOpen(true);
                              }
                            }}
                            className="hover:text-[#b62126] hover:translate-x-1 inline-block transition-transform duration-150"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Quick Jump Callout inside Drawer */}
              <div className="mt-10 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    setIsAdmissionsModalOpen(true);
                  }}
                  className="p-3 bg-[#eff6fa] hover:bg-[#dfeef7] rounded border border-[#bad9e7] cursor-pointer transition-colors"
                >
                  <div className="font-bold text-[#0077bf] flex items-center gap-1.5">
                    <GraduationCap size={16} /> Admissions & Entrance (IAT)
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">
                    Guidance on BS-MS, MSc, and Ph.D. schedules, eligibility, and reservation norms.
                  </p>
                </div>
                <div
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    setIsDonateModalOpen(true);
                  }}
                  className="p-3 bg-[#fef2ec] hover:bg-[#fae3d7] rounded border border-[#f5c7b3] cursor-pointer transition-colors"
                >
                  <div className="font-bold text-[#b62126] flex items-center gap-1.5">
                    <HeartHandshake size={16} /> Giving to IISER Pune (CSR)
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">
                    Endow student scholarships, research laboratories, and educational outreach.
                  </p>
                </div>
                <div
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 cursor-pointer transition-colors"
                >
                  <div className="font-bold text-gray-800 flex items-center gap-1.5">
                    <MapPin size={16} /> Campus Location & Transit
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">
                    Dr. Homi Bhabha Road, Pashan, Pune. Directions from airport and railway station.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          HERO CAROUSEL / SLIDER (Home Gallery)
          ========================================================================= */}
      <section id="home" className="relative w-full bg-[#171412] text-white overflow-hidden">
        <div className="relative min-h-[460px] md:min-h-[580px] lg:min-h-[640px] flex items-center">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Authentic IISER Blur Backdrop Effect */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-7000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-radial from-transparent to-black/70" />
              </div>

              {/* Slide Content Overlay */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20">
                <div className="max-w-2xl space-y-4">
                  {/* Category Tag in Red */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#b62126] text-white text-[11px] font-bold tracking-widest uppercase rounded-xs">
                    <Award size={13} />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {slide.description && (
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
                      {slide.description}
                    </p>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setActiveSlideModal(slide)}
                      className="px-6 py-2.5 bg-[#b62126] hover:bg-[#8e171b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center gap-2"
                    >
                      <span>{slide.buttonText || 'Read more'}</span>
                      <ArrowRight size={15} />
                    </button>
                    <button
                      onClick={() => setIsAdmissionsModalOpen(true)}
                      className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-medium tracking-wider rounded-xs backdrop-blur-xs transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles size={14} className="text-amber-300" />
                      <span>Explore Academics</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Navigation Controls (Arrows + Play/Pause) */}
          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <button
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
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
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>

            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Slide Indicators Dots */}
          <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlideIndex(dotIdx)}
                className={`h-2 transition-all rounded-full ${
                  dotIdx === currentSlideIndex
                    ? 'w-8 bg-[#b62126]'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                title={`Go to slide ${dotIdx + 1}`}
                aria-label={`Slide ${dotIdx + 1}`}
              />
            ))}
            <span className="text-xs font-mono text-gray-300 ml-2">
              0{currentSlideIndex + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTITUTIONAL METRICS & HIGHLIGHTS RIBBON
          ========================================================================= */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {statistics.map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded-xs border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-[#b62126]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC NEWS SECTION ("News") with Carousel Cards
          ========================================================================= */}
      <section id="news" className="py-12 md:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#b62126]">
                  {language === 'hi' ? 'नवीनतम समाचार' : 'News'}
                </h2>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold border-l border-gray-300 pl-3">
                  Research, Accolades & Campus Happenings
                </span>
              </div>
            </div>

            {/* Scroll Controls & Category Filters */}
            <div className="flex items-center gap-3">
              {/* Category Pills */}
              <div className="hidden md:flex items-center gap-1.5 text-xs">
                {['All', 'Research News', 'Campus Life', 'Accolades'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedNewsCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      selectedNewsCategory === cat
                        ? 'bg-[#b62126] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Authentic Left / Right Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollNews('left')}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#b62126] hover:text-white hover:border-[#b62126] transition-colors shadow-xs"
                  title="Scroll news left"
                  aria-label="Previous news items"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollNews('right')}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#b62126] hover:text-white hover:border-[#b62126] transition-colors shadow-xs"
                  title="Scroll news right"
                  aria-label="Next news items"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scrolling Card Container */}
          <div
            ref={newsScrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto py-6 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredNews.map((item) => (
              <article
                key={item.id}
                onClick={() => setActiveStoryModal(item)}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white rounded-xs border border-gray-200 hover:border-[#b62126] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold uppercase rounded-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {item.date}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#b62126] transition-colors line-clamp-3 mt-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-[#b62126] font-semibold">
                    <span>{language === 'hi' ? 'पूरा पढ़ें' : 'Read Article'}</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME TILES SECTION (6 Authentic Cards with Images)
          ========================================================================= */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#b62126]">
              {language === 'hi' ? 'संस्थान के मुख्य स्तंभ' : 'Institutional Focus Areas'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Dedicated divisions advancing national research capabilities, faculty excellence, and student development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                onClick={() => setActiveTileModal(tile)}
                className="group relative bg-[#FAFAFA] rounded-xs border border-gray-200 hover:border-[#b62126] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-gray-200">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  {tile.badge && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#b62126] font-bold text-[10px] uppercase tracking-wider rounded-xs shadow-xs">
                      {tile.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                      {tile.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {tile.description}
                  </p>
                  <div className="mt-4 pt-2 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#b62126]">
                    <span>Explore Section</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACADEMIC DEPARTMENTS & RESEARCH FRONTIERS EXPLORER
          ========================================================================= */}
      <section id="departments" className="py-14 md:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#eff6fa] text-[#0077bf] font-bold text-xs uppercase tracking-wider rounded border border-[#bad9e7]">
                <Microscope size={14} />
                <span>Interdisciplinary Research</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Academic Departments
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Frontier basic sciences and integrated computational domains led by over 180 distinguished faculty members.
              </p>
            </div>

            <button
              onClick={() => setIsAdmissionsModalOpen(true)}
              className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-xs font-bold rounded-xs flex items-center gap-1.5 self-start md:self-auto transition-colors"
            >
              <GraduationCap size={15} className="text-[#b62126]" />
              <span>View All Degree Programmes</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Department Navigation List */}
            <div className="lg:col-span-4 bg-white rounded-xs border border-gray-200 p-2 space-y-1 shadow-xs">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xs text-xs font-semibold flex items-center justify-between transition-colors ${
                    selectedDeptId === dept.id
                      ? 'bg-[#b62126] text-white shadow-xs'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                      selectedDeptId === dept.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {dept.code}
                    </span>
                    <span>{dept.name}</span>
                  </div>
                  <ChevronRight size={14} className={selectedDeptId === dept.id ? 'text-white' : 'text-gray-400'} />
                </button>
              ))}
            </div>

            {/* Selected Department Deep-Dive Card */}
            <div className="lg:col-span-8 bg-white rounded-xs border border-gray-200 p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-2">
                <div>
                  <span className="text-xs font-bold text-[#b62126] uppercase tracking-wider">
                    {selectedDept.code} — Overview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
                    {selectedDept.name}
                  </h3>
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium self-start">
                  {selectedDept.facultyCount} Core Faculty Members
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed my-4">
                {selectedDept.description}
              </p>

              <div className="my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#0077bf]" />
                  Key Research Arenas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.researchAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-[#eff6fa] text-[#0077bf] border border-[#bad9e7] text-xs font-medium rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-gray-500 text-[11px]">
                  State-of-the-art instrumentations & high-performance computing clusters available.
                </div>
                <button
                  onClick={() => setIsAdmissionsModalOpen(true)}
                  className="px-4 py-2 bg-[#b62126] hover:bg-[#8e171b] text-white font-bold rounded-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Apply for Ph.D. / M.Sc.</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSIONS & EDUCATION ROADMAP SECTION
          ========================================================================= */}
      <section id="admissions" className="py-14 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#b62126] font-bold text-xs uppercase tracking-wider rounded border border-red-200">
              <GraduationCap size={15} />
              <span>Degree Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Education & Admissions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Cultivating the next generation of scientific leaders through research-embedded curricula
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-gray-50 hover:bg-white rounded-xs border border-gray-200 hover:border-[#b62126] p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 pb-2 border-b border-gray-200">
                    <span>{prog.duration}</span>
                    <span className="text-[#0077bf] font-mono">{prog.admissionMode}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-[11px] text-gray-500 mb-3 font-medium">
                    <span className="font-bold text-gray-700">Eligibility: </span>
                    {prog.eligibility}
                  </div>
                  <button
                    onClick={() => setIsAdmissionsModalOpen(true)}
                    className="w-full py-2 bg-white hover:bg-[#b62126] text-gray-800 hover:text-white border border-gray-300 hover:border-[#b62126] rounded-xs text-xs font-bold transition-colors"
                  >
                    Admission Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Admission Notice Banner */}
          <div className="mt-10 p-6 bg-[#eff6fa] border border-[#bad9e7] rounded-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#0077bf] text-white rounded">
                <Info size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0077bf]">
                  IISER Aptitude Test (IAT) 2026-27 Information Desk
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Admissions to the BS-MS program across all IISER campuses are conducted through the unified IISER Aptitude Test (IAT).
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAdmissionsModalOpen(true)}
                className="px-5 py-2.5 bg-[#0077bf] hover:bg-[#005a91] text-white text-xs font-bold rounded-xs transition-colors whitespace-nowrap shadow-xs"
              >
                IAT Guidelines & Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS & COMMUNITY GLIMPSES / VIDEO PREVIEW
          ========================================================================= */}
      <section className="py-14 bg-[#1e2327] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider rounded border border-white/20">
                <Building size={14} />
                <span>Life at Pashan Campus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                A Vibrant 98-Acre Sanctuary for Scientific Curiosity
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Nestled near Pune's National Chemical Laboratories (NCL), IISER Pune offers residential hostel complexes, eco-friendly solar-powered campus infrastructure, modern athletic centers, and 24/7 research facilities.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-5 py-2.5 bg-[#b62126] hover:bg-[#8e171b] text-white text-xs font-bold rounded-xs transition-colors flex items-center gap-1.5"
                >
                  <MapPin size={14} />
                  <span>Plan a Campus Visit</span>
                </button>
                <button
                  onClick={() => setIsDonateModalOpen(true)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xs border border-white/20 transition-colors"
                >
                  Support Infrastructure
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/3 rounded-xs overflow-hidden border border-gray-700 bg-gray-800">
                  <img
                    src="/assets/iiser-pune/tile-campus.jpg"
                    alt="Campus architecture"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white/5 rounded-xs border border-white/10">
                  <div className="text-lg font-bold text-amber-300">100% Residential</div>
                  <div className="text-xs text-gray-300 mt-1">Hostels, health centers, and dining for all enrolled scholars.</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-white/5 rounded-xs border border-white/10">
                  <div className="text-lg font-bold text-amber-300">State Facilities</div>
                  <div className="text-xs text-gray-300 mt-1">High-field NMR, Cryo-EM, Supercomputing, and Clean Rooms.</div>
                </div>
                <div className="aspect-4/3 rounded-xs overflow-hidden border border-gray-700 bg-gray-800">
                  <img
                    src="/assets/iiser-pune/tile-library.jpg"
                    alt="Srinivasa Ramanujan Library"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC INSTITUTIONAL FOOTER
          ========================================================================= */}
      <footer className="relative bg-[#171412] text-gray-300 pt-12 pb-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Institutional Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
            {/* Column 1-4: Quick Links */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-700 pb-2">
                Institutional Portals & Governance
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-400">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.url.includes('contact') || link.url.includes('visit')) {
                          setIsContactModalOpen(true);
                        } else if (link.url.includes('admissions')) {
                          setIsAdmissionsModalOpen(true);
                        } else {
                          setIsSearchModalOpen(true);
                        }
                      }}
                      className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#b62126]"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: National Portal Banner & Action Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-700 pb-2">
                National Partner Portals
              </h4>
              <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-3">
                <img
                  src={logos.indiaGov}
                  alt="National Portal of India"
                  className="h-10 w-auto object-contain bg-white rounded p-1"
                />
                <div className="text-[11px] text-gray-300">
                  <a
                    href="https://www.india.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:underline flex items-center gap-1"
                  >
                    India.gov.in <ExternalLink size={11} />
                  </a>
                  <span>The National Portal of India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setIsDonateModalOpen(true)}
                  className="px-4 py-2 bg-[#b62126] hover:bg-[#8e171b] text-white text-xs font-bold rounded-xs tracking-wider uppercase transition-colors"
                >
                  DONATE
                </button>
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xs tracking-wider uppercase transition-colors"
                >
                  WEBMAIL
                </a>
              </div>
              <div className="text-[11px] text-gray-400">
                Page last updated on 13/10/2026 11:14:56 pm
              </div>
            </div>

            {/* Column 6: Direct Official Address */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-700 pb-2">
                Official Campus Address
              </h4>
              <address className="not-italic text-xs text-gray-300 leading-relaxed space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#b62126] shrink-0 mt-0.5" />
                  <span>
                    <strong>IISER Pune</strong><br />
                    Dr. Homi Bhabha Road, Pashan,<br />
                    Pune 411008, Maharashtra, India
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Phone size={14} className="text-[#0077bf] shrink-0" />
                  <a href={`tel:${institution.phone}`} className="hover:text-white">
                    {institution.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#0077bf] shrink-0" />
                  <a href={`mailto:${institution.email}`} className="hover:text-white">
                    {institution.email}
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Dividing Red Line (`hr-red`) */}
          <div className="w-full h-0.5 bg-[#b62126] my-6" />

          {/* Lower Branding, Address, Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-800">
            {/* White Logo */}
            <div className="flex items-center gap-4">
              <img
                src={logos.white}
                alt="IISER Pune White Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Social Media Links with Verified Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-medium mr-1">Connect with us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#b62126] flex items-center justify-center transition-colors p-1.5"
                  title={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-4 h-4 invert" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Statutory Links Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {statutoryLinks.map((stat) => (
                <a
                  key={stat.label}
                  href={stat.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContactModalOpen(true);
                  }}
                  className="hover:text-white transition-colors"
                >
                  {stat.label}
                </a>
              ))}
            </div>

            <div className="text-center sm:text-right text-gray-400">
              © {new Date().getFullYear()} IISER Pune. Independent Demo Recreation.
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          NEWS STORY READER MODAL
          ========================================================================= */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto text-gray-900 shadow-2xl">
            <div className="relative aspect-16/9 bg-gray-900">
              <img
                src={activeStoryModal.image}
                alt={activeStoryModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveStoryModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                title="Close story"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#b62126] text-white text-xs font-bold uppercase rounded-xs">
                {activeStoryModal.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="text-xs text-gray-500 font-medium flex items-center gap-2">
                <Calendar size={14} className="text-[#b62126]" />
                <span>{activeStoryModal.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                {activeStoryModal.title}
              </h3>

              <div className="text-sm text-gray-700 leading-relaxed space-y-3 border-t border-gray-100 pt-4">
                <p>{activeStoryModal.summary}</p>
                <p>
                  IISER Pune remains dedicated to advancing knowledge across basic sciences, nurturing fundamental research, and facilitating public academic exchanges with partner universities worldwide.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={`https://www.iiserpune.ac.in${activeStoryModal.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0077bf] hover:underline flex items-center gap-1.5"
                >
                  <span>View Official Press Release</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setActiveStoryModal(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE CITATION MODAL
          ========================================================================= */}
      {activeSlideModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto text-gray-900 shadow-2xl">
            <div className="relative aspect-16/9 bg-gray-900">
              <img
                src={activeSlideModal.image}
                alt={activeSlideModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveSlideModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                title="Close citation"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#b62126] text-white text-xs font-bold uppercase rounded-xs">
                {activeSlideModal.tag}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#0077bf] uppercase tracking-wider">
                {activeSlideModal.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                {activeSlideModal.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeSlideModal.description}
              </p>
              <div className="p-4 bg-[#eff6fa] border border-[#bad9e7] rounded-xs text-xs text-gray-700 leading-relaxed">
                <strong>Academic Impact:</strong> Recognized at the highest national levels for scientific excellence and translational impact, fostering international collaborations and nurturing student investigators.
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveSlideModal(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TILE DETAILS MODAL
          ========================================================================= */}
      {activeTileModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-xl w-full max-h-[90vh] overflow-y-auto text-gray-900 shadow-2xl">
            <div className="relative aspect-16/9 bg-gray-900">
              <img
                src={activeTileModal.image}
                alt={activeTileModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveTileModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-[#b62126]">{activeTileModal.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{activeTileModal.description}</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                IISER Pune continually develops state-of-the-art resources and institutional programs to foster an inclusive, globally competitive research and academic community.
              </p>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveTileModal(null)}
                  className="px-4 py-2 bg-[#b62126] text-white text-xs font-semibold rounded-xs"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          ADMISSIONS INFORMATION MODAL
          ========================================================================= */}
      {isAdmissionsModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto text-gray-900 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 text-[#b62126] rounded">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    IISER Pune Admissions Guide (2026-27)
                  </h3>
                  <p className="text-xs text-gray-500">
                    Comprehensive admission tracks, entrance tests, and application schedules
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAdmissionsModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700"
                title="Close admissions guide"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xs border border-gray-200 space-y-2">
                <h4 className="text-sm font-bold text-[#b62126] flex items-center gap-2">
                  <span>BS-MS (5-Year Dual Degree)</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Admissions strictly through the centralized <strong>IISER Aptitude Test (IAT)</strong>. 288 seats available at Pune campus.
                </p>
                <div className="text-[11px] font-semibold text-gray-700 bg-white p-2 rounded border border-gray-200">
                  Applications Open: March 2027 • Exam: June 2027
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xs border border-gray-200 space-y-2">
                <h4 className="text-sm font-bold text-[#0077bf] flex items-center gap-2">
                  <span>M.Sc. Programmes (2 Years)</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Offered in Chemistry, Mathematics, and Earth Sciences. Candidates must qualify through <strong>IIT JAM</strong> followed by departmental interview.
                </p>
                <div className="text-[11px] font-semibold text-gray-700 bg-white p-2 rounded border border-gray-200">
                  Qualification: Valid IIT JAM Score & B.Sc. with 60%+
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xs border border-gray-200 space-y-2">
                <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <span>Integrated Ph.D. (Int-Ph.D.)</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bridging undergraduate studies directly to doctoral research in Physical and Biological Sciences.
                </p>
                <div className="text-[11px] font-semibold text-gray-700 bg-white p-2 rounded border border-gray-200">
                  Admission Tests: JEST / JAM / National Fellowships
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xs border border-gray-200 space-y-2">
                <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <span>Doctoral (Ph.D.) Programme</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Conducted bi-annually (August and January Sessions) across all eight academic departments.
                </p>
                <div className="text-[11px] font-semibold text-gray-700 bg-white p-2 rounded border border-gray-200">
                  National Fellowships: CSIR-JRF / UGC-JRF / INSPIRE / GATE
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#eff6fa] border border-[#bad9e7] rounded text-xs text-gray-700 space-y-1">
              <div className="font-bold text-[#0077bf]">Scholarships & Financial Assistance:</div>
              <p>
                Admitted BS-MS students are eligible for KVPY or DST-INSPIRE scholarships of ₹5,000/month plus annual contingency grant as per Govt. of India norms. All Ph.D. scholars receive institutional or national fellowship support.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-gray-200 text-xs">
              <span className="text-gray-500">Admissions Office: admissions@iiserpune.ac.in</span>
              <button
                onClick={() => setIsAdmissionsModalOpen(false)}
                className="px-5 py-2 bg-[#b62126] text-white font-bold rounded-xs hover:bg-[#8e171b] transition-colors"
              >
                Close Admissions Desk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          DONATE / GIVING TO IISER PUNE MODAL
          ========================================================================= */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-xl w-full text-gray-900 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <HeartHandshake size={22} className="text-[#b62126]" />
                <h3 className="text-lg font-bold text-gray-900">Giving to IISER Pune</h3>
              </div>
              <button onClick={() => setIsDonateModalOpen(false)} className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              Philanthropic contributions and CSR partnerships empower fundamental scientific discoveries, support merit-cum-means student scholarships, and establish world-class research facilities.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold text-gray-900">Student Excellence Fund</div>
                <div className="text-gray-500 text-[11px]">Enables underprivileged scholars to pursue research without financial constraints.</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold text-gray-900">Frontier Research & Innovation Labs</div>
                <div className="text-gray-500 text-[11px]">Supports cutting-edge instrumentation for climate, quantum, and health sciences.</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold text-gray-900">80G Income Tax Exemption</div>
                <div className="text-gray-500 text-[11px]">All donations to IISER Pune are 100% tax-exempt under Section 80G of the Indian IT Act.</div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-end gap-2 text-xs">
              <button
                onClick={() => setIsDonateModalOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Thank you for your interest! For donations and CSR initiatives, please email giving@iiserpune.ac.in');
                  setIsDonateModalOpen(false);
                }}
                className="px-4 py-2 bg-[#b62126] text-white font-bold rounded hover:bg-[#8e171b]"
              >
                Inquire Giving Information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CONTACT & CAMPUS VISIT MODAL
          ========================================================================= */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-xl w-full text-gray-900 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <MapPin size={22} className="text-[#b62126]" />
                <h3 className="text-lg font-bold text-gray-900">Campus Contact & Directions</h3>
              </div>
              <button onClick={() => setIsContactModalOpen(false)} className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-gray-700">
              <div className="p-3 bg-gray-50 rounded border border-gray-200 space-y-1">
                <strong className="text-gray-900">Physical Address:</strong>
                <div>IISER Pune, Dr. Homi Bhabha Road, Pashan, Pune 411008, Maharashtra, India</div>
                <div className="text-gray-500 text-[11px]">Landmark: Near CSIR - National Chemical Laboratory (NCL)</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="font-bold text-gray-900">Main Switchboard</div>
                  <div>+91 20 25908000</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="font-bold text-gray-900">Emergency Desk</div>
                  <div>+91 20 25908100</div>
                </div>
              </div>

              <div className="p-3 bg-[#eff6fa] border border-[#bad9e7] rounded text-[11px] text-gray-700 space-y-1">
                <strong>Reaching Campus:</strong>
                <p>• Pune International Airport (PNQ): ~18 km (45-60 mins drive)</p>
                <p>• Pune Junction Railway Station (PUNE): ~10 km (30 mins drive)</p>
                <p>• Public transit buses connect Shivajinagar to Pashan Circle regularly.</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="px-4 py-2 bg-[#b62126] text-white font-bold text-xs rounded hover:bg-[#8e171b]"
              >
                Close Directory
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIVE SITE-WIDE SEARCH MODAL
          ========================================================================= */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-20 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xs max-w-2xl w-full text-gray-900 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-500">
                <Search size={18} />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Search IISER Pune</span>
              </div>
              <button onClick={() => setIsSearchModalOpen(false)} className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search departments, news, faculty accolades, admissions, or library..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-hidden focus:border-[#b62126] focus:bg-white"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Suggestions */}
            <div className="max-h-72 overflow-y-auto space-y-2 pt-2">
              {searchQuery.trim() === '' ? (
                <div className="text-xs text-gray-500 py-4 text-center">
                  Try searching for: <span className="font-semibold text-[#b62126]">Biology</span>, <span className="font-semibold text-[#b62126]">BS-MS</span>, <span className="font-semibold text-[#b62126]">Yuva Sangam</span>, <span className="font-semibold text-[#b62126]">Accolades</span>, or <span className="font-semibold text-[#b62126]">Pashan</span>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-xs text-gray-500 py-6 text-center">
                  No direct results found for "{searchQuery}". Try broader keywords like "Research", "Admissions", or "Faculty".
                </div>
              ) : (
                searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      res.action();
                    }}
                    className="p-3 bg-gray-50 hover:bg-[#eff6fa] border border-gray-100 hover:border-[#bad9e7] rounded cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#0077bf]">
                      <span>{res.type}</span>
                      <ArrowRight size={12} />
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-0.5">{res.title}</div>
                    <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{res.desc}</div>
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
