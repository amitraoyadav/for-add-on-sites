import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Camera,
  Film,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Heart,
  Share2,
  Maximize2
} from 'lucide-react';
import {
  TRUE_SHADES_PHOTOGRAPHY_CONFIG,
  ReviewCardItem,
  FooterBlogItem
} from './true-shades-photography.config';

export const TrueShadesPhotography: React.FC = () => {
  // Mobile navigation drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  // Hero Slider
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Reviews Slider
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Modals
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string; title: string } | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [portfolioModalTab, setPortfolioModalTab] = useState<'wedding' | 'films' | 'pre-wedding' | 'pre-wedding-films' | null>(null);
  const [blogModalItem, setBlogModalItem] = useState<FooterBlogItem | null>(null);

  // Inquiry Form
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Photography & Films',
    eventDate: '',
    cityLocation: 'Mumbai',
    message: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % TRUE_SHADES_PHOTOGRAPHY_CONFIG.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextHero = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % TRUE_SHADES_PHOTOGRAPHY_CONFIG.heroSlides.length);
  };

  const handlePrevHero = () => {
    setCurrentHeroSlide((prev) =>
      prev === 0 ? TRUE_SHADES_PHOTOGRAPHY_CONFIG.heroSlides.length - 1 : prev - 1
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev + 1 >= TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.length ? 0 : prev + 1
    );
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.length - 1 : prev - 1
    );
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      setTimeout(() => {
        setInquiryModalOpen(false);
        setInquirySubmitted(false);
        setInquiryForm({
          name: '',
          phone: '',
          email: '',
          eventType: 'Wedding Photography & Films',
          eventDate: '',
          cityLocation: 'Mumbai',
          message: ''
        });
      }, 3000);
    }, 500);
  };

  return (
    <div
      className="min-h-screen bg-[#fdfcf7] text-[#666666] selection:bg-[#bfd5c8] selection:text-white"
      style={{ fontFamily: 'Quicksand, Helvetica, Arial, Verdana, sans-serif' }}
    >
      {/* ==================== TOP CONTACT BAR ==================== */}
      <div className="bg-[#242424] text-[#a0a0a0] text-[12px] py-2 px-4 border-b border-[#333333]">
        <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Address & Quick Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-center md:text-left">
              <MapPin className="w-3.5 h-3.5 text-[#B68D40] shrink-0" />
              <span className="line-clamp-1">{TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.address}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#B68D40]" />
              <a
                href={`tel:${TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.phone}`}
                className="hover:text-white transition-colors"
              >
                {TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.displayPhone}
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#B68D40]" />
              <a
                href={`mailto:${TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.email}
              </a>
            </div>
          </div>

          {/* Social Links & WhatsApp Button */}
          <div className="flex items-center gap-3">
            <a
              href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#a0a0a0] hover:text-[#B68D40] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a
              href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#a0a0a0] hover:text-[#B68D40] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimeo"
              className="text-[#a0a0a0] hover:text-[#B68D40] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
              </svg>
            </a>
            <a
              href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[#a0a0a0] hover:text-[#B68D40] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 384 512">
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
              </svg>
            </a>
            <a
              href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#a0a0a0] hover:text-emerald-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ==================== MAIN HEADER ==================== */}
      <header className="sticky top-0 z-40 bg-[#fdfcf7]/95 backdrop-blur-md border-b border-[#e5e5e5] shadow-xs">
        <div className="max-w-[1250px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <img
              src={TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.logo}
              alt="True Shades Photography Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block text-[15px] sm:text-[17px] font-bold tracking-tight text-[#222222] font-serif">
                TRUE SHADES
              </span>
              <span className="block text-[9px] tracking-[0.25em] text-[#888888] uppercase">
                PHOTOGRAPHY
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[14px] font-medium text-[#7a7a7a]">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              About us
            </button>

            {/* Our Work Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                onMouseEnter={() => setWorkDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-[#B68D40] transition-colors cursor-pointer py-1"
              >
                <span>Our Work</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setWorkDropdownOpen(false)}
                className={`absolute top-full left-0 w-56 bg-white border border-[#eaeaea] shadow-lg rounded-md py-2 transition-all duration-200 z-50 ${
                  workDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <button
                  onClick={() => {
                    setPortfolioModalTab('wedding');
                    setWorkDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#666666] hover:bg-[#f7f7f7] hover:text-[#B68D40] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-[#B68D40]" />
                  <span>Wedding Photography</span>
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('films');
                    setWorkDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#666666] hover:bg-[#f7f7f7] hover:text-[#B68D40] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Film className="w-3.5 h-3.5 text-[#B68D40]" />
                  <span>Wedding Films</span>
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('pre-wedding');
                    setWorkDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#666666] hover:bg-[#f7f7f7] hover:text-[#B68D40] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-[#B68D40]" />
                  <span>Pre Wedding Photography</span>
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('pre-wedding-films');
                    setWorkDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#666666] hover:bg-[#f7f7f7] hover:text-[#B68D40] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Film className="w-3.5 h-3.5 text-[#B68D40]" />
                  <span>Pre Wedding Films</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setPortfolioModalTab('wedding')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Wedding Photography
            </button>
            <button
              onClick={() => setPortfolioModalTab('films')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Wedding Films
            </button>
            <button
              onClick={() => setPortfolioModalTab('pre-wedding')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Pre Wedding Photography
            </button>
            <button
              onClick={() => setPortfolioModalTab('pre-wedding-films')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Pre Wedding Films
            </button>
            <button
              onClick={() => scrollToSection('client-reviews')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1"
            >
              Blogs
            </button>
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="hover:text-[#B68D40] transition-colors cursor-pointer py-1 text-[#B68D40] font-semibold"
            >
              Contact us
            </button>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-[13px] font-bold tracking-wider uppercase rounded transition-colors shadow-xs cursor-pointer"
            >
              <span>Book Shoot</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#7a7a7a] hover:text-[#222222] p-1.5 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#eaeaea] px-5 py-4 space-y-3 animate-fadeIn">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-sm text-[#444444] font-medium border-b border-[#f0f0f0]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="block w-full text-left py-2 text-sm text-[#444444] font-medium border-b border-[#f0f0f0]"
            >
              About us
            </button>
            <div className="py-2 border-b border-[#f0f0f0]">
              <span className="block text-xs uppercase tracking-wider text-[#999999] font-bold mb-2">
                Our Work
              </span>
              <div className="pl-3 space-y-2">
                <button
                  onClick={() => {
                    setPortfolioModalTab('wedding');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-sm text-[#666666] hover:text-[#B68D40]"
                >
                  Wedding Photography
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('films');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-sm text-[#666666] hover:text-[#B68D40]"
                >
                  Wedding Films
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('pre-wedding');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-sm text-[#666666] hover:text-[#B68D40]"
                >
                  Pre Wedding Photography
                </button>
                <button
                  onClick={() => {
                    setPortfolioModalTab('pre-wedding-films');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-left text-sm text-[#666666] hover:text-[#B68D40]"
                >
                  Pre Wedding Films
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('client-reviews')}
              className="block w-full text-left py-2 text-sm text-[#444444] font-medium border-b border-[#f0f0f0]"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="block w-full text-left py-2 text-sm text-[#444444] font-medium border-b border-[#f0f0f0]"
            >
              Blogs
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setInquiryModalOpen(true);
              }}
              className="block w-full text-left py-2 text-sm text-[#B68D40] font-semibold"
            >
              Contact us
            </button>
          </div>
        )}
      </header>

      {/* ==================== SECTION 1: HERO SLIDER ==================== */}
      <section id="home" className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[320px] sm:h-[480px] md:h-[580px] lg:h-[680px] w-full">
          {TRUE_SHADES_PHOTOGRAPHY_CONFIG.heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevHero}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextHero}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentHeroSlide ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: INTRO RED BG SECTION ==================== */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 text-center">
        {/* Background Paint Graphic */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.redBgPaint}
            alt="Background Paint Graphic"
            className="w-full h-full object-cover object-center opacity-90"
          />
        </div>

        {/* Decorative Lights Graphic */}
        <div className="absolute top-0 left-0 right-0 z-1 pointer-events-none">
          <img
            src={TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.lights}
            alt="Decorative Fairy Lights"
            className="w-full h-auto object-contain max-h-[80px] sm:max-h-[120px] mx-auto"
          />
        </div>

        {/* Intro Content */}
        <div className="relative z-10 max-w-[960px] mx-auto pt-6 sm:pt-10">
          <div className="inline-block border border-[#a89798] px-5 sm:px-8 py-3 mb-6 bg-white/70 backdrop-blur-xs shadow-xs">
            <h1 className="text-[19px] sm:text-[23px] font-semibold text-[#666666] tracking-wide">
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.intro.heading}
            </h1>
          </div>

          <p className="text-[14px] sm:text-[16px] leading-[1.8] text-[#555555] max-w-[850px] mx-auto mb-10 px-4">
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.intro.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setPortfolioModalTab('wedding')}
              className="px-8 sm:px-12 py-4 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-[15px] sm:text-[17px] font-bold uppercase tracking-wider rounded-sm shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.intro.ctaPrimary}
            </button>
            <button
              onClick={() => setPortfolioModalTab('films')}
              className="px-8 sm:px-12 py-4 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-[15px] sm:text-[17px] font-bold uppercase tracking-wider rounded-sm shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.intro.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: FEATURED MARQUEE SECTION ==================== */}
      <section className="bg-[#f7f7f7] w-full overflow-hidden border-y border-[#ececec]">
        {/* Featured Heading Banner */}
        <div className="bg-[#bb687a] py-3.5 px-4 text-center">
          <h2
            className="text-[26px] sm:text-[34px] font-medium text-white tracking-[0.3px]"
            style={{ fontFamily: 'Cinzel, Georgia, serif' }}
          >
            Featured In
          </h2>
        </div>

        {/* Marquee Track */}
        <div className="py-8 sm:py-10 relative overflow-hidden">
          <div className="flex items-center gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
            {/* First Set of Logos */}
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.featuredPublications.map((pub, index) => (
              <div
                key={`pub-1-${index}`}
                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              >
                <img
                  src={pub.image}
                  alt={pub.name}
                  className="h-10 sm:h-14 w-auto object-contain max-w-[180px] sm:max-w-[240px]"
                />
              </div>
            ))}

            {/* Repeated Set for Seamless Infinite Scrolling */}
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.featuredPublications.map((pub, index) => (
              <div
                key={`pub-2-${index}`}
                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
                aria-hidden="true"
              >
                <img
                  src={pub.image}
                  alt={pub.name}
                  className="h-10 sm:h-14 w-auto object-contain max-w-[180px] sm:max-w-[240px]"
                />
              </div>
            ))}

            {/* Third Set for wide displays */}
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.featuredPublications.map((pub, index) => (
              <div
                key={`pub-3-${index}`}
                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
                aria-hidden="true"
              >
                <img
                  src={pub.image}
                  alt={pub.name}
                  className="h-10 sm:h-14 w-auto object-contain max-w-[180px] sm:max-w-[240px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: ABOUT INTRO SECTION ==================== */}
      <section
        id="about-us"
        className="relative max-w-[1140px] mx-auto py-16 sm:py-20 px-6 sm:px-8 text-center bg-[#fdfcf7]"
        style={{
          backgroundImage: `url(${TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.cameraIcon})`,
          backgroundPosition: '55px -14px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '16%'
        }}
      >
        <div className="relative z-10">
          <div className="inline-block border border-[#b7b7b7] px-6 sm:px-10 py-3 mb-10 bg-white/80 backdrop-blur-xs">
            <h2 className="text-[20px] sm:text-[24px] font-medium text-[#666666]">
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.aboutIntro.heading}
            </h2>
          </div>

          <div className="space-y-6 text-[14px] sm:text-[15.5px] leading-[1.8] text-[#555555] max-w-[980px] mx-auto text-center">
            <p>
              We are one of the{' '}
              <strong className="text-[#222222] font-semibold">
                Best Wedding Photographers in Mumbai
              </strong>
              ! Events such as weddings are about traditions and rituals, about momentous moments,
              about journeys of discovery and about new relationships. To cement all of that
              together you need something strong, something beautiful and something everlasting.
              That’s what True Shades Photography creates for you-beautiful memories that outlive
              time and space with our specialized{' '}
              <strong className="text-[#222222] font-semibold">Candid Photography</strong>
            </p>
            <p>
              In Mumbai, things are always happening and competition is cut-throat, but amidst it
              all we are there for you, providing artistically and stylistically, the joyous moments
              of a lifetime. Love may be in the air, but we capture that too by not missing out on
              those hidden glances, the subtle displays of affection, the latent nuances that emerge
              stealthily—oblivious to all eyes but that of our camera!
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: CANDID PHOTOGRAPHY & PHILOSOPHY ==================== */}
      <section className="relative max-w-[1140px] mx-auto my-8 py-14 sm:py-16 px-6 sm:px-8 text-center">
        {/* Left Video Camera Graphic */}
        <div
          className="hidden md:block absolute w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url(${TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.videoCameraLeft})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            top: '220px',
            left: '-30px'
          }}
        />

        {/* Right Video Camera Graphic */}
        <div
          className="hidden md:block absolute w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] opacity-60 pointer-events-none"
          style={{
            backgroundImage: `url(${TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.videoCameraRight})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            top: '-20px',
            right: '-20px'
          }}
        />

        <div className="relative z-10">
          <div className="inline-block border border-[#b7b7b7] px-6 sm:px-10 py-3 mb-10 bg-white/80 backdrop-blur-xs">
            <h2 className="text-[20px] sm:text-[24px] font-medium text-[#666666]">
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.candidSection.heading}
            </h2>
          </div>

          <div className="space-y-6 text-[14px] sm:text-[15.5px] leading-[1.8] text-[#555555] max-w-[980px] mx-auto text-center">
            <p>
              A peep into our work on{' '}
              <strong className="text-[#222222] font-semibold">Candid Photography</strong> by our{' '}
              <strong className="text-[#222222] font-semibold">Candid Photographers</strong> will
              show you how stimulating we can be and why we chose True Shades Photography as our
              signature. We understand the meaning of business success and know what it takes to get
              there.
            </p>
            <p>
              For all practical purposes we may be photographers, but we believe that it's an art
              that goes beyond the mere technicalities. It's a passion for us and each photograph is
              a commitment towards excellence.
            </p>
            <p>
              Reviews from our clients further proves our claim of being{' '}
              <strong className="text-[#222222] font-semibold">
                One Of The Best Wedding Photographers in Mumbai
              </strong>
            </p>
            <p>
              Dynamism, diligence and perfection, you may say, are our middle names—so if you do need
              to pep up your special day, do reach out to us. If you're in Mumbai, we'll make your
              special day extraordinary for you—through the color and romance of our candid
              photography services.
            </p>
            <p>
              Post processing also plays a virtual part in making us{' '}
              <strong className="text-[#222222] font-semibold">
                One Of The Best Wedding Photographers In Mumbai
              </strong>
            </p>
            <p>
              Your satisfaction is our yardstick and our wedding photography will way exceed your
              expectations. We lay claim as{' '}
              <strong className="text-[#222222] font-semibold">
                One Of The Best Wedding Photographers in Mumbai
              </strong>{' '}
              has had in decades and every event we shoot takes us a few notches higher.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: CLIENT REVIEWS ==================== */}
      <section id="client-reviews" className="py-16 sm:py-20 px-4 bg-[#faf8f2] border-t border-[#eae6db]">
        <div className="max-w-[1250px] mx-auto text-center">
          {/* Reviews Title Badge */}
          <div className="mb-12">
            <span className="inline-block bg-[#bfd5c8] text-white px-8 sm:px-16 py-3.5 text-[18px] sm:text-[22px] font-semibold tracking-wide rounded-xs shadow-xs">
              Client Reviews
            </span>
          </div>

          {/* Reviews Carousel Slider */}
          <div className="relative max-w-[1100px] mx-auto">
            {/* Desktop Review Grid (shows 3 at a time) / Mobile Slider */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews
                .slice(currentReviewIndex, currentReviewIndex + 3)
                .concat(
                  currentReviewIndex + 3 > TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.length
                    ? TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.slice(
                        0,
                        (currentReviewIndex + 3) % TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.length
                      )
                    : []
                )
                .map((review, i) => (
                  <div
                    key={review.id}
                    onClick={() =>
                      setLightboxImage({
                        url: review.image,
                        alt: review.alt,
                        title: review.title
                      })
                    }
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border border-[#ece8de]"
                  >
                    <div className="relative aspect-4/5 sm:aspect-3/4 overflow-hidden bg-[#f0ede4]">
                      <img
                        src={review.image}
                        alt={review.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-white/90 text-black text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Full Review</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Mobile Single Review View */}
            <div className="sm:hidden">
              {TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex] && (
                <div
                  onClick={() =>
                    setLightboxImage({
                      url: TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex].image,
                      alt: TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex].alt,
                      title: TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex].title
                    })
                  }
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-[#ece8de]"
                >
                  <img
                    src={TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex].image}
                    alt={TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews[currentReviewIndex].alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrevReview}
                className="w-10 h-10 rounded-full border border-[#d4cfc5] hover:border-[#bfd5c8] bg-white hover:bg-[#bfd5c8] text-[#666666] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {TRUE_SHADES_PHOTOGRAPHY_CONFIG.reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReviewIndex(i)}
                    className={`transition-all rounded-full cursor-pointer ${
                      i === currentReviewIndex ? 'w-6 h-2 bg-[#bfd5c8]' : 'w-2 h-2 bg-[#d4cfc5]'
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextReview}
                className="w-10 h-10 rounded-full border border-[#d4cfc5] hover:border-[#bfd5c8] bg-white hover:bg-[#bfd5c8] text-[#666666] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: FOOTER ==================== */}
      <footer id="contact" className="bg-[#d7dce8] pt-12 pb-8 px-6 text-[#666666]">
        <div className="max-w-[1250px] mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-[#c2cbdb]">
            {/* Column 1: Our Address */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#555555] uppercase tracking-wider mb-5">
                Our Address
              </h3>
              <div className="space-y-3.5 text-[14px] leading-relaxed text-[#555555]">
                <p>{TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.address}</p>
                <div>
                  <span className="block font-medium">Mobile Number:</span>
                  <a
                    href={`tel:${TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.phone}`}
                    className="hover:text-[#222222] font-semibold transition-colors"
                  >
                    {TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.displayPhone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.email}`}
                    className="hover:text-[#222222] transition-colors"
                  >
                    {TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-[#B68D40] text-[#555555] hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-[#B68D40] text-[#555555] hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.vimeo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-[#B68D40] text-[#555555] hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label="Vimeo"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                    <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
                  </svg>
                </a>
                <a
                  href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-[#B68D40] text-[#555555] hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label="Pinterest"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 384 512">
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                  </svg>
                </a>
                <a
                  href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-emerald-600 text-[#555555] hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label="WhatsApp"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Blogs */}
            <div id="blogs">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#555555] uppercase tracking-wider mb-5">
                Blogs
              </h3>
              <div className="space-y-3.5">
                {TRUE_SHADES_PHOTOGRAPHY_CONFIG.footerBlogs.map((blog, idx) => (
                  <button
                    key={idx}
                    onClick={() => setBlogModalItem(blog)}
                    className="w-full text-left flex items-center gap-3.5 group cursor-pointer"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-12 h-12 rounded object-cover shrink-0 border border-[#b8c3d4] group-hover:border-[#B68D40] transition-colors"
                    />
                    <span className="text-[13.5px] text-[#555555] group-hover:text-[#222222] transition-colors leading-snug">
                      {blog.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Useful Links & Studio Hours */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#555555] uppercase tracking-wider mb-5">
                Useful Links
              </h3>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="hover:text-[#222222] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about-us')}
                    className="hover:text-[#222222] transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPortfolioModalTab('wedding')}
                    className="hover:text-[#222222] transition-colors cursor-pointer"
                  >
                    Wedding Photography
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPortfolioModalTab('films')}
                    className="hover:text-[#222222] transition-colors cursor-pointer"
                  >
                    Wedding Films
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('client-reviews')}
                    className="hover:text-[#222222] transition-colors cursor-pointer"
                  >
                    Client Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="hover:text-[#222222] transition-colors cursor-pointer font-medium text-[#B68D40]"
                  >
                    Contact
                  </button>
                </li>
                <li className="pt-2">
                  <a
                    href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#222222] underline cursor-pointer"
                  >
                    <span>Visit Live trueshadesphotography.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright text */}
          <div className="pt-6 text-center text-[13px] text-[#777777]">
            {TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.copyright}
          </div>
        </div>
      </footer>

      {/* ==================== LIGHTBOX MODAL ==================== */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="rounded-lg overflow-hidden border border-white/20 shadow-2xl max-h-[80vh]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alt}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            {lightboxImage.title && (
              <p className="text-white/90 text-sm mt-3 text-center font-medium">
                {lightboxImage.title}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ==================== WORK / PORTFOLIO MODAL ==================== */}
      {portfolioModalTab && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#eeeeee] flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#bfd5c8] block mb-1">
                  True Shades Photography Portfolio
                </span>
                <h3 className="text-xl font-bold text-[#222222]">
                  {portfolioModalTab === 'wedding' && 'Wedding Photography Showcase'}
                  {portfolioModalTab === 'films' && 'Wedding Films & Cinematography'}
                  {portfolioModalTab === 'pre-wedding' && 'Pre-Wedding Romance Shoots'}
                  {portfolioModalTab === 'pre-wedding-films' && 'Pre-Wedding Cinematic Films'}
                </h3>
              </div>
              <button
                onClick={() => setPortfolioModalTab(null)}
                className="text-gray-400 hover:text-gray-700 p-2 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-lg overflow-hidden border border-[#eeeeee]">
                  <img
                    src={TRUE_SHADES_PHOTOGRAPHY_CONFIG.assets.heroWedding}
                    alt="True Shades Wedding Work"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#333333]">
                    {portfolioModalTab === 'wedding' && 'Timeless Wedding Memories in Mumbai & Beyond'}
                    {portfolioModalTab === 'films' && 'High-Definition Wedding Cinema'}
                    {portfolioModalTab === 'pre-wedding' && 'Intimate & Scenic Pre-Wedding Sessions'}
                    {portfolioModalTab === 'pre-wedding-films' && 'Narrative Pre-Wedding Teasers'}
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    With an array of photographic and related services, True Shades Photography
                    crafts exquisite wedding memories that outlive time and space with our
                    specialized Candid Photography.
                  </p>
                  <ul className="text-xs text-[#555555] space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#bfd5c8]" />
                      <span>Dedicated documentary candid photographers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#bfd5c8]" />
                      <span>4K Ultra-HD cinematography and color grading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#bfd5c8]" />
                      <span>Covering Mumbai, Goa, Rajasthan, and destination weddings</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => {
                        setPortfolioModalTab(null);
                        setInquiryModalOpen(true);
                      }}
                      className="px-6 py-2.5 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Inquire Availability
                    </button>
                    <a
                      href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
                    >
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== BLOG MODAL ==================== */}
      {blogModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#eeeeee] pb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#bfd5c8]">
                True Shades Photography Blog
              </span>
              <button
                onClick={() => setBlogModalItem(null)}
                className="text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={blogModalItem.image}
                alt={blogModalItem.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h4 className="text-lg font-bold text-[#222222]">{blogModalItem.title}</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Explore insightful location scouting and wedding planning advice from True Shades
              Photography. For pre-wedding locations across Mumbai, studio setups, and candid shoot
              logistics, our team guides you every step of the way.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setBlogModalItem(null);
                  setInquiryModalOpen(true);
                }}
                className="px-5 py-2 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Plan Shoot Here
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CONSULTATION / INQUIRY BOOKING MODAL ==================== */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto">
            <div className="p-6 border-b border-[#f0f0f0] flex items-center justify-between bg-[#fdfcf7] sticky top-0 z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B68D40] block">
                  True Shades Photography · Mumbai
                </span>
                <h3 className="text-lg font-bold text-[#222222]">
                  Check Date Availability & Quote
                </h3>
              </div>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {inquirySubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#222222]">Inquiry Received!</h4>
                  <p className="text-xs text-[#666666] leading-relaxed max-w-xs mx-auto">
                    Thank you, {inquiryForm.name}. Our studio team at True Shades Photography will
                    review your date and reach out to you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded shadow-sm"
                    >
                      <span>Connect Immediately via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#555555] font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma & Rohan Verma"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#555555] font-semibold mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[#555555] font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#555555] font-semibold mb-1">
                        Service Required
                      </label>
                      <select
                        value={inquiryForm.eventType}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, eventType: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm bg-white"
                      >
                        <option value="Wedding Photography & Films">Wedding Photography & Films</option>
                        <option value="Candid Wedding Photography">Candid Wedding Photography</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Pre-Wedding Film">Pre-Wedding Film</option>
                        <option value="Complete Destination Wedding">Complete Destination Wedding</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#555555] font-semibold mb-1">
                        Tentative Shoot Date
                      </label>
                      <input
                        type="date"
                        value={inquiryForm.eventDate}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, eventDate: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#555555] font-semibold mb-1">
                      Event City / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Goa, Udaipur, etc."
                      value={inquiryForm.cityLocation}
                      onChange={(e) =>
                        setInquiryForm({ ...inquiryForm, cityLocation: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#555555] font-semibold mb-1">
                      Shoot Details / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your wedding dates, schedule, or vision..."
                      value={inquiryForm.message}
                      onChange={(e) =>
                        setInquiryForm({ ...inquiryForm, message: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-[#dddddd] rounded focus:outline-none focus:border-[#bfd5c8] text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#bfd5c8] hover:bg-[#a6c4b2] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition-all cursor-pointer"
                    >
                      Submit Booking Inquiry
                    </button>
                  </div>

                  <p className="text-[11px] text-[#888888] text-center pt-1">
                    Direct studio contact: +91 9920144211 · info@trueshadesphotography.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <a
        href={TRUE_SHADES_PHOTOGRAPHY_CONFIG.brand.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp with True Shades Photography"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
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

export default TrueShadesPhotography;
