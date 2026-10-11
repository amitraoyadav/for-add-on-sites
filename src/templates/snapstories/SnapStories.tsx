import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Heart,
  Camera,
  Film,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Maximize2,
  ArrowUp,
  MessageCircle
} from 'lucide-react';
import {
  SNAPSTORIES_CONFIG,
  PortfolioStory
} from './snapstories.config';

export const SnapStories: React.FC = () => {
  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Slider
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Category filter for portfolio
  const [activePortfolioFilter, setActivePortfolioFilter] = useState<string>('all');

  // Modals
  const [selectedStoryModal, setSelectedStoryModal] = useState<PortfolioStory | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string; title: string } | null>(null);
  const [cinematicVideosModalOpen, setCinematicVideosModalOpen] = useState(false);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Contact / Date Check Form
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Photography & Films',
    eventDate: '',
    city: 'Mumbai',
    notes: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setContactModalOpen(false);
        setInquirySubmitted(false);
        setInquiryForm({
          name: '',
          phone: '',
          email: '',
          eventType: 'Wedding Photography & Films',
          eventDate: '',
          city: 'Mumbai',
          notes: ''
        });
      }, 3000);
    }, 400);
  };

  // Filtered stories
  const filteredStories = SNAPSTORIES_CONFIG.portfolioStories.filter((story) => {
    if (activePortfolioFilter === 'all') return true;
    if (activePortfolioFilter === 'weddings')
      return story.category.toLowerCase().includes('wedding');
    if (activePortfolioFilter === 'engagements')
      return story.category.toLowerCase().includes('engagement');
    return true;
  });

  return (
    <div
      className="min-h-screen bg-white text-[#2b2b2b] selection:bg-[#333333] selection:text-white"
      style={{ fontFamily: 'Nunito Sans, Arial, Helvetica, sans-serif' }}
    >
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e5e5] transition-all">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img
              src={SNAPSTORIES_CONFIG.assets.logo}
              alt="SnapStories Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] font-medium tracking-[0.14em] text-[#333333] uppercase">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('weddings');
                scrollToSection('portfolio');
              }}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1"
            >
              WEDDING
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('engagements');
                scrollToSection('portfolio');
              }}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1"
            >
              ENGAGEMENT
            </button>
            <button
              onClick={() => setCinematicVideosModalOpen(true)}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <span>CINEMATIC VIDEOS</span>
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('all');
                scrollToSection('portfolio');
              }}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#888888] transition-colors cursor-pointer py-1 text-[#111111] font-semibold"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white text-[12px] font-semibold tracking-[0.15em] uppercase transition-all cursor-pointer rounded-xs"
            >
              <span>Book Date</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#222222] p-1.5 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e5e5e5] px-6 py-5 space-y-3.5 tracking-wider uppercase text-[13px] animate-fadeIn">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-1.5 text-[#222222] font-semibold border-b border-gray-100"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-1.5 text-[#555555] border-b border-gray-100"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('weddings');
                scrollToSection('portfolio');
              }}
              className="block w-full text-left py-1.5 text-[#555555] border-b border-gray-100"
            >
              WEDDING
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('engagements');
                scrollToSection('portfolio');
              }}
              className="block w-full text-left py-1.5 text-[#555555] border-b border-gray-100"
            >
              ENGAGEMENT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCinematicVideosModalOpen(true);
              }}
              className="block w-full text-left py-1.5 text-[#555555] border-b border-gray-100"
            >
              CINEMATIC VIDEOS
            </button>
            <button
              onClick={() => {
                setActivePortfolioFilter('all');
                scrollToSection('portfolio');
              }}
              className="block w-full text-left py-1.5 text-[#555555] border-b border-gray-100"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-1.5 text-[#111111] font-semibold"
            >
              CONTACT
            </button>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[480px] sm:h-[600px] md:h-[720px] lg:h-[814px] w-full">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={SNAPSTORIES_CONFIG.assets.heroWedding}
              alt="SnapStories Wedding Photography"
              className="w-full h-full object-cover object-bottom transition-transform duration-1000 scale-100"
            />
            {/* Subtle Dark Vignette & Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/35" />
          </div>

          {/* Centered Overlay Titles */}
          <div className="absolute inset-x-0 bottom-16 sm:bottom-24 lg:bottom-28 z-20 px-4 text-center max-w-[980px] mx-auto">
            <h1
              className="text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-normal tracking-[0.02em] leading-tight mb-3"
              style={{
                fontFamily: 'EB Garamond, Times New Roman, serif',
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 6px'
              }}
            >
              SNAPSTORIES PHOTOGRAPHY
            </h1>

            <p
              className="text-white text-[13px] sm:text-[16px] md:text-[18px] font-light tracking-[0.3em] uppercase"
              style={{
                fontFamily: 'Raleway, Helvetica, sans-serif',
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 5px'
              }}
            >
              WEDDING - ENGAGEMENT
            </p>
          </div>

          {/* Slider Pagination Controls */}
          <nav aria-label="Slides" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <ol className="flex items-center gap-2.5">
              {[0, 1, 2, 3].map((slideIndex) => (
                <li key={slideIndex}>
                  <button
                    onClick={() => setCurrentHeroSlide(slideIndex)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentHeroSlide === slideIndex
                        ? 'w-6 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Slide ${slideIndex + 1}`}
                  />
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ==================== OUR RECENT WORK (PORTFOLIO SECTION) ==================== */}
      <section id="portfolio" className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[26px] sm:text-[34px] font-normal tracking-[0.2em] text-[#111111] uppercase mb-4"
            style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
          >
            OUR RECENT WORK
          </h2>
          <div className="w-12 h-0.5 bg-[#222222] mx-auto mb-6" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium tracking-wider uppercase text-[#666666]">
            <button
              onClick={() => setActivePortfolioFilter('all')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activePortfolioFilter === 'all'
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#444444]'
              }`}
            >
              All Celebrations ({SNAPSTORIES_CONFIG.portfolioStories.length})
            </button>
            <button
              onClick={() => setActivePortfolioFilter('weddings')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activePortfolioFilter === 'weddings'
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#444444]'
              }`}
            >
              Weddings
            </button>
            <button
              onClick={() => setActivePortfolioFilter('engagements')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activePortfolioFilter === 'engagements'
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#444444]'
              }`}
            >
              Engagements
            </button>
          </div>
        </div>

        {/* 6 Portfolio Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedStoryModal(story)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-16/10 rounded-sm overflow-hidden bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 bg-white/95 text-black text-[11px] tracking-wider uppercase font-semibold rounded-xs shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Story</span>
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-4 text-center">
                <h3
                  className="text-[17px] sm:text-[19px] font-normal text-[#1a1a1a] group-hover:text-[#666666] transition-colors tracking-wide"
                  style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
                >
                  {story.title}
                </h3>
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#888888] font-light mt-0.5 block">
                  {story.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ABOUT SNAPSTORIES SECTION ==================== */}
      <section
        id="about"
        className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-y border-[#ececec]"
      >
        <div className="max-w-[880px] mx-auto text-center">
          <h2
            className="text-[26px] sm:text-[34px] font-normal tracking-[0.18em] text-[#111111] uppercase mb-8"
            style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
          >
            {SNAPSTORIES_CONFIG.about.heading}
          </h2>

          <div className="w-12 h-0.5 bg-[#222222] mx-auto mb-10" />

          {/* Verbatim Body Paragraphs */}
          <div className="space-y-6 text-[15px] sm:text-[16.5px] leading-[1.85] text-[#4a4a4a] text-center font-light">
            {SNAPSTORIES_CONFIG.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Closing Statement */}
            <p
              className="text-[18px] sm:text-[22px] font-medium text-[#111111] pt-6 leading-relaxed italic"
              style={{ fontFamily: 'EB Garamond, Times New Roman, serif' }}
            >
              “{SNAPSTORIES_CONFIG.about.closingStatement}”
            </p>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-3 bg-[#222222] hover:bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-all shadow-md cursor-pointer"
            >
              Get In Touch
            </button>
            <a
              href={SNAPSTORIES_CONFIG.brand.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#222222] text-[#222222] hover:bg-gray-100 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-all cursor-pointer"
            >
              WhatsApp Studio
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT US & FOOTER SECTION ==================== */}
      <section id="contact" className="py-20 sm:py-24 px-6 sm:px-8 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto">
          <h2
            className="text-[26px] sm:text-[32px] font-normal tracking-[0.2em] text-[#111111] uppercase mb-4"
            style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
          >
            {SNAPSTORIES_CONFIG.contact.heading}
          </h2>
          <div className="w-12 h-0.5 bg-[#222222] mx-auto mb-8" />

          {/* Contact Details */}
          <div className="space-y-2 mb-8">
            <p className="text-[18px] font-medium text-[#222222]">
              {SNAPSTORIES_CONFIG.contact.name}
            </p>
            <p>
              <a
                href={SNAPSTORIES_CONFIG.contact.telLink}
                className="text-[18px] sm:text-[20px] font-light tracking-wider text-[#333333] hover:text-black transition-colors"
              >
                {SNAPSTORIES_CONFIG.contact.phone}
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href={SNAPSTORIES_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#555555] hover:text-black transition-colors"
            >
              <img
                src={SNAPSTORIES_CONFIG.assets.instagramIcon}
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
              <span>Instagram</span>
            </a>

            <a
              href={SNAPSTORIES_CONFIG.contact.cinematicVideosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#555555] hover:text-black transition-colors"
            >
              <img
                src={SNAPSTORIES_CONFIG.assets.youtubeIcon}
                alt="Cinematic Videos"
                className="w-5 h-5 object-contain"
              />
              <span>Cinematic Videos</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-3 bg-[#222222] hover:bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-all shadow-md cursor-pointer"
            >
              Inquire Wedding Availability
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#181818] text-[#999999] py-12 px-6 border-t border-[#2a2a2a] text-center text-xs tracking-wider">
        <div className="max-w-[1240px] mx-auto space-y-4">
          <p className="text-[14px] text-white font-medium tracking-[0.1em]">
            {SNAPSTORIES_CONFIG.brand.footerLine}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[#888888] pt-2">
            <span>©2026 SnapStories</span>
            <span>|</span>
            <button
              onClick={() => setDisclaimerModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer underline"
            >
              Disclaimer
            </button>
            <span>|</span>
            <a
              href={SNAPSTORIES_CONFIG.brand.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#777777] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* ==================== STORY DETAIL MODAL ==================== */}
      {selectedStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#eeeeee] flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888] block">
                  {selectedStoryModal.category}
                </span>
                <h3
                  className="text-xl font-normal text-[#111111]"
                  style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
                >
                  {selectedStoryModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStoryModal(null)}
                className="text-gray-400 hover:text-black p-2 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div
                className="rounded overflow-hidden cursor-pointer group relative"
                onClick={() =>
                  setLightboxImage({
                    url: selectedStoryModal.image,
                    alt: selectedStoryModal.alt,
                    title: selectedStoryModal.title
                  })
                }
              >
                <img
                  src={selectedStoryModal.image}
                  alt={selectedStoryModal.alt}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-white text-xs font-semibold tracking-wider uppercase rounded shadow">
                    Enlarge Image
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-[#555555]">
                  {selectedStoryModal.storyDescription}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                    Story Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#666666]">
                    {selectedStoryModal.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setSelectedStoryModal(null);
                      setContactModalOpen(true);
                    }}
                    className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
                  >
                    Check Wedding Date
                  </button>
                  <a
                    href={SNAPSTORIES_CONFIG.brand.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-black text-black hover:bg-gray-100 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
                  >
                    WhatsApp Aniket Pawar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CINEMATIC VIDEOS MODAL ==================== */}
      {cinematicVideosModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#eeeeee] pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888] block">
                  SnapStories Films
                </span>
                <h3
                  className="text-xl font-normal text-[#111111]"
                  style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
                >
                  Cinematic Wedding Videos
                </h3>
              </div>
              <button
                onClick={() => setCinematicVideosModalOpen(false)}
                className="text-gray-400 hover:text-black cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              <p>
                Our wedding films are designed to preserve the emotional rhythm of your special day.
                Combining raw audio from vows and speeches with 4K cinematic storytelling, our team
                creates a lasting heirloom rather than a montage of poses.
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-black font-semibold text-xs">
                  <Film className="w-4 h-4" />
                  <span>Cinematic Video Deliverables</span>
                </div>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>3-5 minute Cinematic Teaser / Highlight Film</li>
                  <li>Full-length Documentary Wedding Film (25-45 minutes)</li>
                  <li>Raw Ceremony & Speeches Master Cut</li>
                  <li>Optimized 60-second Reels for Family Sharing</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 justify-end border-t border-gray-100">
              <a
                href={SNAPSTORIES_CONFIG.contact.cinematicVideosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-black text-black hover:bg-gray-100 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors inline-flex items-center gap-1.5"
              >
                <span>Watch on SnapStories.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setCinematicVideosModalOpen(false);
                  setContactModalOpen(true);
                }}
                className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                Inquire Film Packages
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== DISCLAIMER MODAL ==================== */}
      {disclaimerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#eeeeee] pb-4">
              <h3 className="text-lg font-bold text-[#111111]">Disclaimer & Policy</h3>
              <button
                onClick={() => setDisclaimerModalOpen(false)}
                className="text-gray-400 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-[#555555] leading-relaxed space-y-3">
              <p>
                All photographs, films, logos, and creative assets displayed belong to{' '}
                <strong>SnapStories Photography</strong> and are reproduced in this independent local
                showcase strictly for demonstration and architectural evaluation within RaozSite.
              </p>
              <p>
                To commission Aniket Pawar and the SnapStories team for live wedding and engagement
                coverage, please contact directly via phone (+91 9137698195) or the official website
                at <strong>www.snapstories.in</strong>.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setDisclaimerModalOpen(false)}
                className="px-5 py-2 bg-black text-white text-xs font-semibold uppercase rounded-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CONTACT / DATE CHECK MODAL ==================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-[#eeeeee] flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888] block">
                  SnapStories Photography
                </span>
                <h3
                  className="text-lg font-normal text-[#111111]"
                  style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
                >
                  Check Wedding Date Availability
                </h3>
              </div>
              <button
                onClick={() => setContactModalOpen(false)}
                className="text-gray-400 hover:text-black p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {inquirySubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111111]">Inquiry Received</h4>
                  <p className="text-xs text-[#666666] leading-relaxed max-w-xs mx-auto">
                    Thank you, {inquiryForm.name}. Aniket Pawar from SnapStories will review your
                    dates and reach out to you directly.
                  </p>
                  <div className="pt-2">
                    <a
                      href={SNAPSTORIES_CONFIG.brand.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold tracking-wider uppercase rounded-xs"
                    >
                      <span>Connect via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Couple Names *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Janhavi & Kishen"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 91376 98195"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">
                        Coverage Type
                      </label>
                      <select
                        value={inquiryForm.eventType}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, eventType: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm bg-white"
                      >
                        <option value="Wedding Photography & Films">Wedding Photography & Films</option>
                        <option value="Pre-Wedding & Engagement">Pre-Wedding & Engagement</option>
                        <option value="Destination Wedding Cinema">Destination Wedding Cinema</option>
                        <option value="Complete Multi-Day Celebration">Complete Celebration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        value={inquiryForm.eventDate}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, eventDate: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">
                      City / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Goa, Udaipur, etc."
                      value={inquiryForm.city}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, city: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">
                      Event Notes & Vision
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details of your wedding celebrations..."
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-black text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-black hover:bg-neutral-800 text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-colors cursor-pointer"
                    >
                      Submit Availability Request
                    </button>
                  </div>

                  <p className="text-[11px] text-[#888888] text-center pt-1">
                    Direct studio line: Aniket Pawar · +91 9137698195
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================== LIGHTBOX IMAGE MODAL ==================== */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="rounded overflow-hidden border border-white/20 shadow-2xl max-h-[80vh]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alt}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            {lightboxImage.title && (
              <p
                className="text-white/90 text-sm mt-3 text-center tracking-widest uppercase font-light"
                style={{ fontFamily: 'Raleway, Helvetica, sans-serif' }}
              >
                {lightboxImage.title}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ==================== FLOATING CONTACT BUTTONS ==================== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={SNAPSTORIES_CONFIG.brand.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 cursor-pointer border border-white/20"
          aria-label="WhatsApp Aniket Pawar"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SnapStories;
