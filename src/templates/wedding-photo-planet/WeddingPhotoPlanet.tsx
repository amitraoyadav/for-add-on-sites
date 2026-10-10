import React, { useState, useEffect } from 'react';
import {
  weddingPhotoPlanetConfig,
  GalleryItem,
  TestimonialItem,
  BlogItem
} from './wedding-photo-planet.config';
import {
  Camera,
  Film,
  Heart,
  Phone,
  Mail,
  MapPin,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Calendar,
  Sparkles,
  MessageCircle,
  Menu,
  Clock,
  Award,
  ArrowUp,
  Share2,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

export default function WeddingPhotoPlanet() {
  // Navigation & Sub-page routing
  const [activePage, setActivePage] = useState<'home' | 'images' | 'wedding' | 'pre-wedding' | 'cinematography' | 'blog' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Home Hero Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % weddingPhotoPlanetConfig.bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Glimpses Slider state
  const [glimpseSlide, setGlimpseSlide] = useState(0);

  // Testimonials Slider state
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Gallery Filter State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'wedding' | 'pre-wedding' | 'candid' | 'destination' | 'bridal'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Modals
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogItem | null>(null);
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  // Form State
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    city: 'Delhi NCR',
    message: ''
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setIsEnquireModalOpen(false);
      setEnquiryForm({
        name: '',
        email: '',
        phone: '',
        eventType: 'Wedding',
        eventDate: '',
        city: 'Delhi NCR',
        message: ''
      });
    }, 2500);
  };

  // Filtered gallery items
  const filteredGallery = weddingPhotoPlanetConfig.galleryItems.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#222222] font-sans antialiased selection:bg-[#E11D48] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT / UTILITY BAR */}
      <div className="bg-[#111827] text-[#9CA3AF] text-xs py-2 px-4 sm:px-8 border-b border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white font-medium">
            <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
            <a href="tel:919990951995" className="hover:text-[#F59E0B] transition-colors">+91-9990951995</a>, 
            <a href="tel:919990905195" className="hover:text-[#F59E0B] transition-colors">9990905195</a>
          </span>
          <span className="text-[#374151] hidden sm:inline">|</span>
          <span className="hidden md:flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
            <a href="mailto:info@weddingphotoplanet.com" className="hover:text-white transition-colors">info@weddingphotoplanet.com</a>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="hidden lg:inline text-[#E5E7EB] font-medium">
            Award-Winning Wedding Photography Across India
          </span>
          <button
            onClick={() => setIsPlaceholdersOpen(true)}
            className="px-2 py-0.5 rounded bg-[#1F2937] text-[#FDE68A] hover:bg-[#374151] transition-all font-mono flex items-center gap-1 cursor-pointer"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#F59E0B]" />
            <span>Placeholders</span>
          </button>
          <a
            href={weddingPhotoPlanetConfig.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 rounded bg-[#991B1B] hover:bg-[#B91C1C] text-white font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Original Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER & LOGO BAR */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="h-12 w-auto max-w-[240px]">
              <img
                src="/assets/wedding-photo-planet/logo.svg"
                alt="Wedding Photo Planet"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#111827]">
            <button
              onClick={() => setActivePage('home')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'home' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('images')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'images' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActivePage('wedding')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'wedding' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Wedding
            </button>
            <button
              onClick={() => setActivePage('pre-wedding')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'pre-wedding' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Pre Wedding
            </button>
            <button
              onClick={() => setActivePage('cinematography')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'cinematography' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Cinematography
            </button>
            <button
              onClick={() => setActivePage('blog')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'blog' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                activePage === 'contact' ? 'border-[#E11D48] text-[#E11D48]' : 'border-transparent hover:text-[#E11D48]'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Book / Enquire Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="px-5 py-2.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-[#E11D48]/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Shoot</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111827] hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'images', label: 'Images Gallery' },
              { id: 'wedding', label: 'Wedding Photography' },
              { id: 'pre-wedding', label: 'Pre Wedding Photography' },
              { id: 'cinematography', label: 'Cinematography Films' },
              { id: 'blog', label: 'Blog & Guides' },
              { id: 'contact', label: 'Contact Us' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-bold tracking-wider uppercase border-b border-gray-100 ${
                  activePage === link.id ? 'text-[#E11D48]' : 'text-[#374151]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 3. MULTI-PAGE ROUTER */}
      <main id="main-content" role="main">
        {/* ============================================================== */}
        {/* VIEW 1: HOME PAGE (EXACT LAYOUT AND SECTIONS FROM SOURCE)       */}
        {/* ============================================================== */}
        {activePage === 'home' && (
          <div>
            {/* HERO CAROUSEL */}
            <section className="relative bg-[#111827] text-white overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-center">
              {/* Slides */}
              {weddingPhotoPlanetConfig.bannerSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
                  <div className="relative z-20 text-center max-w-4xl px-4 space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#E11D48] text-white text-[11px] font-bold uppercase tracking-widest rounded-full">
                      Wedding Photo Planet • Delhi NCR
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-lg text-amber-200 font-medium max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <button
                        onClick={() => setIsEnquireModalOpen(true)}
                        className="px-8 py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-md transition-all shadow-xl cursor-pointer"
                      >
                        Book Consultation
                      </button>
                      <button
                        onClick={() => setActivePage('images')}
                        className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/40 text-xs font-bold uppercase tracking-[0.2em] rounded-md transition-all cursor-pointer"
                      >
                        Explore Gallery
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? weddingPhotoPlanetConfig.bannerSlides.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#E11D48] text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % weddingPhotoPlanetConfig.bannerSlides.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#E11D48] text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {weddingPhotoPlanetConfig.bannerSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'w-8 bg-[#E11D48]' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </section>

            {/* SECTION: ABOUT WEDDING PHOTO PLANET */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                  About Wedding Photo Planet
                </h2>
                <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
              </div>

              <div className="text-sm sm:text-base text-[#4B5563] leading-relaxed space-y-4 text-justify sm:text-center">
                <p>
                  We are the leading <strong>best Wedding photographers in Delhi</strong>, capturing your special moments in an unique style with artistry and creativity. When you are searching for the go to photographer for your weddings, pre-wedding shoots, ceremonies, or any kind of functions, We are very near you! We are always there near to you in your service, ready to capture your auspicious moments.
                </p>
                <p>
                  We are a team of <strong>best Wedding Photographers in Delhi</strong> that blends professionalism and a real passion to serve, for all of your events be it grand wedding, private pre-wedding shoot, ceremonies and much more family function.
                </p>
                <p>
                  Our Head Office at New Delhi; we serve our clients all over India; as We aim to serve the best Candid wedding photography service everywhere in the country. We have done hundreds of plus memorable Professional photo shoots and countless sweet Pre-wedding shoots in these past years and we also became the best destination pre-wedding photographer. Contact us and let us help you to book and secure the service easily by just calling us from the contact numbers listed on the website; our professionals will guide you with every detail. At Wedding Photo Planet, your imagination and desires are very important to us. We make it sure to give the most Cinematic and Lovely photographs and video which reflect your sweet and precious moments of your life.
                </p>
                <p>
                  Your quality photos will help you relive these particular memories in the years to come. You inspire us when you see the smile after receiving the beautiful outcomes from the best photography skills of ours; it’s how we fulfil our dreams and that helps us continue to perform in order to improve ourselves. Let us Wedding Photo Planet accompany you by capturing the most cinematic wedding videography and also by capturing those wonderful candid memories. Get In Touch With us!
                </p>
              </div>
            </section>

            {/* CELEBRITY PHOTOGRAPHY BANNER 1 */}
            <section className="relative overflow-hidden w-full">
              <img
                src="/assets/wedding-photo-planet/banner-celebrity-1.svg"
                alt="Celebrity Photography"
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </section>

            {/* SECTION: OUR VISION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
              </div>

              <div className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
                <p>
                  Meet Mr. <strong className="text-[#E11D48]">Rajat Verma</strong> – is the owner, designer and master mind behind the one of best &amp; most professional photography firm named Wedding Photo Planet. With the affection and affection for Photography, he is been awarded as a best wedding photographer in Delhi.
                </p>
                <p className="mt-4">
                  Mr. Rajat Verma has the ambition, together with best of <strong>candid professional photographers</strong>, to make a image of Wedding Photo Planet in such way so that we can propagate professional photography with honesty &amp; quality, &amp; the outcomes of this work will be exceptional. We desire to establish our company’s name grandly into the world of Photography and to expose global professional Photography as like as the event of celebrity weddings or red carpet occasions in any global wedding event.
                </p>
              </div>
            </section>

            {/* SECTION: OUR SERVICES */}
            <section className="py-20 bg-[#F9FAFB] border-y border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                    Our Services
                  </h2>
                  <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
                  <p className="text-sm text-gray-500 mt-3 max-w-lg mx-auto">
                    Complete wedding cinematography, pre-wedding conceptual shoots, and candid royal wedding coverage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {weddingPhotoPlanetConfig.services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Service Photo */}
                        <div className="h-56 overflow-hidden relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Service Content */}
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-serif font-bold text-[#111827] group-hover:text-[#E11D48] transition-colors">
                            {service.title}
                          </h3>

                          <div className="space-y-3 text-xs text-[#4B5563] leading-relaxed">
                            {service.features.map((feat, i) => (
                              <p key={i}>
                                <strong className="text-[#111827] block mb-0.5">{feat.label}</strong>
                                {feat.text}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="p-6 pt-0">
                        <button
                          onClick={() => setActivePage(service.route as any)}
                          className="w-full py-2.5 bg-[#111827] hover:bg-[#E11D48] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION: OUR GALLERY PREVIEW */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                  Our Gallery
                </h2>
                <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
                <p className="text-sm text-gray-500 mt-2">
                  Glimpses of sacred rituals, joyous varmalas, royal bridal attire &amp; pre-wedding romance.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                  {[
                    { id: 'all', label: 'All Photos' },
                    { id: 'wedding', label: 'Wedding' },
                    { id: 'pre-wedding', label: 'Pre-Wedding' },
                    { id: 'candid', label: 'Candid' },
                    { id: 'destination', label: 'Destination' },
                    { id: 'bridal', label: 'Bridal' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setGalleryFilter(tab.id as any)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        galleryFilter === tab.id
                          ? 'bg-[#E11D48] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gallery Grid (Showing first 16 on homepage) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGallery.slice(0, 16).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    className="relative rounded-xl overflow-hidden bg-gray-100 group cursor-pointer aspect-[4/3] border border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">{item.categoryLabel}</span>
                      <p className="text-xs text-white font-medium line-clamp-1">{item.title}</p>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-white/80">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to view</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setActivePage('images')}
                  className="px-8 py-3.5 bg-[#111827] hover:bg-[#E11D48] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-colors cursor-pointer shadow-md"
                >
                  View All 52+ Photos
                </button>
              </div>
            </section>

            {/* SECTION: CLIENT TESTIMONIALS */}
            <section className="py-20 bg-[#111827] text-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    What Say Our Clients
                  </h2>
                  <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
                  <p className="text-sm text-gray-400 mt-2">
                    Heartfelt words from couples whose most cherished days were preserved by our team.
                  </p>
                </div>

                {/* Testimonial Active Display */}
                <div className="relative bg-[#1F2937] p-8 sm:p-12 rounded-3xl border border-[#374151] max-w-3xl mx-auto text-center space-y-6">
                  <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-[#E11D48] p-0.5 bg-gray-800">
                    <img
                      src={weddingPhotoPlanetConfig.testimonials[testimonialIdx].image}
                      alt={weddingPhotoPlanetConfig.testimonials[testimonialIdx].names}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed">
                    "{weddingPhotoPlanetConfig.testimonials[testimonialIdx].quote}"
                  </blockquote>

                  <div>
                    <h4 className="text-lg font-serif font-bold text-white">
                      {weddingPhotoPlanetConfig.testimonials[testimonialIdx].names}
                    </h4>
                    <span className="text-xs text-[#E11D48] font-semibold uppercase tracking-wider">
                      {weddingPhotoPlanetConfig.testimonials[testimonialIdx].role}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() =>
                        setTestimonialIdx((prev) =>
                          prev === 0 ? weddingPhotoPlanetConfig.testimonials.length - 1 : prev - 1
                        )
                      }
                      className="p-2 rounded-full bg-gray-800 hover:bg-[#E11D48] text-white transition-colors"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono text-gray-400">
                      {testimonialIdx + 1} / {weddingPhotoPlanetConfig.testimonials.length}
                    </span>
                    <button
                      onClick={() =>
                        setTestimonialIdx((prev) => (prev + 1) % weddingPhotoPlanetConfig.testimonials.length)
                      }
                      className="p-2 rounded-full bg-gray-800 hover:bg-[#E11D48] text-white transition-colors"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: WHY CHOOSE US */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                  Why choose Wedding photo planet
                </h2>
                <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
                <p className="text-sm text-gray-500 mt-2">
                  Unmatched artistry, technical precision, and complete peace of mind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weddingPhotoPlanetConfig.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-2.5 flex items-start gap-4 hover:border-[#E11D48] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">{item.title}</h4>
                      <p className="text-xs text-[#4B5563] leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-sm text-gray-600 font-medium italic">
                  Choose Wedding Photo Planet for unparalleled quality that brings your celebrations to life, capturing the magic and love that defines your special occasions.
                </p>
              </div>
            </section>

            {/* CELEBRITY PHOTOGRAPHY BANNER 2 */}
            <section className="relative overflow-hidden w-full">
              <img
                src="/assets/wedding-photo-planet/banner-celebrity-2.svg"
                alt="Celebrity Photography"
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </section>

            {/* SECTION: GLIMPSES OF OUR PHOTOGRAPHY EVENTS */}
            <section className="py-20 bg-[#F9FAFB] border-y border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Points */}
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                    Here Are Some of The Glimpses of Our Photography Events That We Were Hired To Do –
                  </h2>
                  <div className="w-16 h-1 bg-[#E11D48] rounded-full" />

                  <div className="space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {weddingPhotoPlanetConfig.glimpses.map((glimpse, i) => (
                      <div key={i} className="space-y-1">
                        <strong className="text-[#111827] text-sm block font-serif">
                          {glimpse.title}
                        </strong>
                        <p>{glimpse.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Slider */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-900 border border-gray-200">
                    <img
                      src={weddingPhotoPlanetConfig.services[glimpseSlide % 3].image}
                      alt="Glimpses Slide"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <span className="text-xs text-white font-bold tracking-widest uppercase">
                        Pre-Wedding Shoot at Rishikesh &amp; Gurugram Studios
                      </span>
                    </div>

                    {/* Nav controls */}
                    <button
                      onClick={() => setGlimpseSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#E11D48]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setGlimpseSlide((prev) => (prev + 1) % 3)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#E11D48]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: ABOUT CANDID PHOTOGRAPHY */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                  About Candid Photography
                </h2>
                <div className="w-20 h-1 bg-[#E11D48] mx-auto mt-3 rounded-full" />
              </div>

              <div className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                <p>
                  Preserving the Essence of Spontaneity and Emotions Candid photography is the art of encapsulating the magic of candid and honest emotions. As the <strong>best candid photographer in Delhi</strong>, Wedding Photo Planet excel in preserving those unplanned and untouched instants of your wedding, bursting with pure bliss, laughter, and love. We’ve assembled the finest team of Top-Rated Wedding Photographers to make your special moments everlasting, with every click a testament to the joy you shared. Looking for a candid photographer or the perfect wedding videographer near you, we at Wedding Photo Planet are committed to ensuring you a journey as memorable as your special day.
                </p>
              </div>
            </section>

            {/* CELEBRITY PHOTOGRAPHY BANNER 3 */}
            <section className="relative overflow-hidden w-full">
              <img
                src="/assets/wedding-photo-planet/banner-celebrity-3.svg"
                alt="Celebrity Photography"
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: FULL IMAGES GALLERY PAGE                               */}
        {/* ============================================================== */}
        {activePage === 'images' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Complete Portfolio</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                OUR PHOTOGRAPHY GALLERY
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Explore our full showcase of royal weddings, scenic pre-wedding shoots, emotional candid moments, and bridal elegance.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {[
                  { id: 'all', label: 'All 52 Photos' },
                  { id: 'wedding', label: 'Wedding' },
                  { id: 'pre-wedding', label: 'Pre-Wedding' },
                  { id: 'candid', label: 'Candid' },
                  { id: 'destination', label: 'Destination' },
                  { id: 'bridal', label: 'Bridal' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id as any)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      galleryFilter === tab.id
                        ? 'bg-[#E11D48] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* All 52 Photos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="relative rounded-xl overflow-hidden bg-gray-100 group cursor-pointer aspect-[4/3] border border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">{item.categoryLabel}</span>
                    <p className="text-xs text-white font-medium line-clamp-2">{item.title}</p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-white/80">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Resolution</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: WEDDING PHOTOGRAPHY DEDICATED PAGE                     */}
        {/* ============================================================== */}
        {activePage === 'wedding' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Specialized Coverage</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                ROYAL WEDDING PHOTOGRAPHY
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Immortalizing the sacred rituals, heartfelt emotions, and majestic splendor of your auspicious day.
              </p>
            </div>

            {/* Ritual Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-bold font-mono text-[#E11D48]">RITUAL 01</span>
                <h3 className="text-xl font-serif font-bold text-gray-900">Haldi &amp; Mehendi Joy</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Vibrant splashes of turmeric yellow, intricate floral jewellery, playful dance sequences, and intimate family laughter captured in crisp candid frames.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-bold font-mono text-[#E11D48]">RITUAL 02</span>
                <h3 className="text-xl font-serif font-bold text-gray-900">Sangeet &amp; Cocktail Glam</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-energy dance performances, cold pyrotechnic stage entries, cocktail toasts, and dynamic multi-camera tracking under nightclub lighting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-bold font-mono text-[#E11D48]">RITUAL 03</span>
                <h3 className="text-xl font-serif font-bold text-gray-900">Varmala, Phere &amp; Vidaai</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The solemn vows around the sacred agni kunda, the emotional tears during vidaai, and the royal reception portrayed with dignity and beauty.
                </p>
              </div>
            </div>

            {/* Wedding Package Pricing */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                  Curated Wedding Photography Packages
                </h2>
                <p className="text-xs text-gray-500 mt-1">Transparent inclusions, professional crew, and album deliverables.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {weddingPhotoPlanetConfig.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                      pkg.popular
                        ? 'bg-[#111827] text-white border-[#E11D48] shadow-2xl relative'
                        : 'bg-white text-gray-900 border-gray-200 shadow-sm'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        Most Booked Choice
                      </span>
                    )}

                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">{pkg.badge}</span>
                        <h3 className="text-2xl font-serif font-bold mt-1">{pkg.name}</h3>
                        <div className="text-2xl font-bold mt-2 text-[#E11D48]">{pkg.price}</div>
                      </div>

                      <ul className="space-y-2.5 text-xs">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setEnquiryForm({ ...enquiryForm, eventType: pkg.name });
                        setIsEnquireModalOpen(true);
                      }}
                      className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all mt-8 cursor-pointer ${
                        pkg.popular
                          ? 'bg-[#E11D48] hover:bg-[#BE123C] text-white'
                          : 'bg-[#111827] hover:bg-[#E11D48] text-white'
                      }`}
                    >
                      Book This Package
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: PRE-WEDDING PHOTOGRAPHY PAGE                           */}
        {/* ============================================================== */}
        {activePage === 'pre-wedding' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Destination Romance</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                PRE-WEDDING SHOOTS
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Breathtaking destination love stories set against Goa sunsets, the holy Ganges in Rishikesh, and the regal palaces of Jaipur.
              </p>
            </div>

            {/* Popular Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Goa Coastal Serenade', desc: 'Golden sands, rocky cliffs, and crashing waves at twilight.', icon: Heart },
                { title: 'Rishikesh River & Campfire', desc: 'Campfire warmth, guitar acoustic shoots by the pristine Ganges.', icon: Sparkles },
                { title: 'Jaipur & Agra Royal Forts', desc: 'Regal arches, intricate marble jharokhas, and timeless monuments.', icon: Award },
                { title: 'Curated Delhi NCR Studios', desc: 'Over 50+ international street and haveli sets with costume changes.', icon: Camera }
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E11D48] flex items-center justify-center">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-gray-900">{c.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="bg-[#111827] text-white p-8 sm:p-12 rounded-3xl text-center max-w-3xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Plan Your Dream Pre-Wedding Shoot
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                We handle location permits, drone authorizations, outfit coordination, and complete storyboard planning.
              </p>
              <button
                onClick={() => setIsEnquireModalOpen(true)}
                className="px-8 py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer"
              >
                Inquire Pre-Wedding Dates
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 5: CINEMATOGRAPHY FILMS PAGE                              */}
        {/* ============================================================== */}
        {activePage === 'cinematography' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Motion Picture Emotion</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                CINEMATIC WEDDING FILMS
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                We do not just record videos; we direct your wedding like a Bollywood motion picture with 4K aerial cinematography and crystal-clear audio vows.
              </p>
            </div>

            {/* Video Player Showcase Simulator */}
            <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl border border-gray-800 aspect-video max-w-4xl mx-auto flex items-center justify-center group">
              <img
                src="/assets/wedding-photo-planet/service-cinematography.svg"
                alt="Cinema Reel"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <button
                  onClick={() => alert('Playing: "Pooja & Rohan — A Royal Udaipur Love Story" (Official 4K Cinematic Teaser)')}
                  className="w-20 h-20 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-2xl cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Pooja &amp; Rohan — A Royal Udaipur Love Story
                  </h3>
                  <p className="text-xs text-amber-300 font-mono">
                    Directed by Rajat Verma • 4K UHD Master Film
                  </p>
                </div>
              </div>
            </div>

            {/* Cinematography Tech Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-2xl border border-gray-200 space-y-2">
                <span className="font-serif font-bold text-lg text-gray-900 block">4K Aerial Drones</span>
                <p className="text-xs text-gray-500">Licensed drone pilots capturing sweeping venue scale and baraat entries.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-gray-200 space-y-2">
                <span className="font-serif font-bold text-lg text-gray-900 block">Wireless Lavalier Audio</span>
                <p className="text-xs text-gray-500">Every sacred mantra, pandit chant, and couple promise recorded crisp and clean.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-gray-200 space-y-2">
                <span className="font-serif font-bold text-lg text-gray-900 block">Fast 48-Hour Social Reels</span>
                <p className="text-xs text-gray-500">Instant 1-minute Instagram reel edits delivered right during your wedding week.</p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 6: BLOG & PHOTOGRAPHY GUIDES                              */}
        {/* ============================================================== */}
        {activePage === 'blog' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Articles &amp; Inspiration</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                WEDDING PHOTO PLANET BLOG
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Insider advice on shoot locations, wedding planning timelines, and posing secrets from top photographers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {weddingPhotoPlanetConfig.blogArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#E11D48] font-bold uppercase tracking-wider">
                        <span>{article.category}</span>
                        <span className="text-gray-400 font-mono">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-gray-900 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedBlogArticle(article)}
                      className="text-xs font-bold text-[#E11D48] hover:text-[#BE123C] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Full Guide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 7: CONTACT US PAGE                                        */}
        {/* ============================================================== */}
        {activePage === 'contact' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] uppercase">Get In Touch</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
                CONTACT WEDDING PHOTO PLANET
              </h1>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Call us or drop an enquiry to check photographer availability for your wedding dates across Delhi NCR and India.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Contact Information Card */}
              <div className="lg:col-span-5 bg-[#111827] text-white p-8 sm:p-10 rounded-3xl space-y-8 border border-gray-800">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">Head Office Details</h3>
                  <p className="text-xs text-gray-400">Available 7 days a week from 9:00 AM to 9:00 PM</p>
                </div>

                <div className="space-y-6 text-xs text-gray-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-red-950 text-[#E11D48] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white text-sm mb-1">Office Address:</strong>
                      <span>Sector 9A, 761P, Sector 9A, Gurugram, Haryana 122001</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-red-950 text-[#E11D48] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white text-sm mb-1">Direct Call:</strong>
                      <p>+91-9990951995</p>
                      <p>+91-9990905195</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-red-950 text-[#E11D48] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white text-sm mb-1">Email Addresses:</strong>
                      <p>weddingphotoplanet@gmail.com</p>
                      <p>info@weddingphotoplanet.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 flex gap-3">
                  <a
                    href="https://api.whatsapp.com/send?phone=919990905195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href="tel:919990951995"
                    className="flex-1 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Booking Enquiry Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Send Booking Enquiry</h3>
                  <p className="text-xs text-gray-500 mt-1">Fill out the form below and our team will get back to you within 2 hours.</p>
                </div>

                {enquirySuccess ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-bold text-emerald-900">Enquiry Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700">Rajat Verma and the Wedding Photo Planet team will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Contact Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91-9876543210"
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Event Type *</label>
                        <select
                          value={enquiryForm.eventType}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, eventType: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        >
                          <option value="Wedding">Wedding Photography &amp; Film</option>
                          <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                          <option value="Cinematography">Cinematography Only</option>
                          <option value="Destination">Destination Wedding Package</option>
                          <option value="Engagement">Engagement / Roka Ceremony</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Tentative Event Date</label>
                        <input
                          type="date"
                          value={enquiryForm.eventDate}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, eventDate: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">City / Venue Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Gurugram / Delhi / Jaipur"
                          value={enquiryForm.city}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Special Requirements or Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your wedding functions, dates, and what style of photos you love..."
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 4. LIGHTBOX PHOTO MODAL */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full text-center space-y-4">
            <div className="max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                {lightboxItem.categoryLabel}
              </span>
              <h3 className="text-lg font-serif font-bold text-white">
                {lightboxItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* 5. ENQUIRE NOW POPUP MODAL (RECREATING SOURCE MODAL) */}
      {isEnquireModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-gray-200 shadow-2xl relative space-y-4 text-center">
            <button
              onClick={() => setIsEnquireModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E11D48] uppercase">
                Wedding Photo Planet
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">
                Enquire Now
              </h3>
              <p className="text-xs text-gray-500">
                Let us know your event dates and requirements for instant availability.
              </p>
            </div>

            {enquirySuccess ? (
              <div className="py-8 space-y-2 text-emerald-600">
                <Check className="w-10 h-10 mx-auto" />
                <h4 className="font-bold text-sm">Enquiry Received!</h4>
                <p className="text-xs text-gray-500">We will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-3 text-left pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer mt-2"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 6. BLOG READ MODAL */}
      {selectedBlogArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-gray-200 shadow-2xl relative my-8 space-y-4">
            <button
              onClick={() => setSelectedBlogArticle(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
              {selectedBlogArticle.category} • {selectedBlogArticle.date}
            </span>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              {selectedBlogArticle.title}
            </h2>
            <div className="h-56 rounded-xl overflow-hidden bg-gray-100">
              <img src={selectedBlogArticle.image} alt={selectedBlogArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
              {selectedBlogArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <button
              onClick={() => setSelectedBlogArticle(null)}
              className="w-full py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}

      {/* 7. RAOZ WEBSITE MAKER EXPORT PLACEHOLDERS INSPECTOR */}
      {isPlaceholdersOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111827] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-gray-800 shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Raoz Website Maker Export Inspector
                </h3>
              </div>
              <button
                onClick={() => setIsPlaceholdersOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Every contact detail, Gurugram office address, phone line, WhatsApp trigger, and service description in this Wedding Photo Planet template is managed via a centralized configuration object (`src/templates/wedding-photo-planet/wedding-photo-planet.config.ts`), enabling instant client rebranding.
            </p>

            <div className="max-h-80 overflow-y-auto space-y-2 font-mono text-xs">
              {Object.entries(weddingPhotoPlanetConfig.placeholders).map(([key, val]) => (
                <div key={key} className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-pink-400 font-semibold">{key}:</span>
                  <span className="text-amber-200 truncate">{String(val)}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="w-full py-2.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Done Inspecting
            </button>
          </div>
        </div>
      )}

      {/* 8. FOOTER (EXACT LAYOUT AND LINKS FROM SOURCE) */}
      <footer className="footer-main bg-[#111827] text-white pt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Social Icons Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-2 text-white">
              <a
                href={weddingPhotoPlanetConfig.placeholders.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={weddingPhotoPlanetConfig.placeholders.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#E4405F] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={weddingPhotoPlanetConfig.placeholders.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF0000] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Film className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Awarded Best Wedding Photographer in Delhi NCR. Serving weddings and pre-wedding shoots across India.
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Contact Details
            </h4>
            <div className="text-xs text-gray-300 space-y-2 leading-relaxed">
              <p>
                <strong className="text-white block text-sm">Wedding Photo Planet</strong>
                Sector 9A, 761P, Sector 9A, Gurgram, Haryana 122001
              </p>
              <p>
                <strong className="text-white">Phone No:</strong> +91-9990951995, 9990905195
              </p>
              <p>
                <strong className="text-white">E-Mail ID:</strong> weddingphotoplanet@gmail.com
              </p>
              <p>
                <strong className="text-white">E-Mail ID:</strong> info@weddingphotoplanet.com
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><button onClick={() => setActivePage('home')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => setActivePage('images')} className="hover:text-white transition-colors cursor-pointer">Images</button></li>
              <li><button onClick={() => setActivePage('wedding')} className="hover:text-white transition-colors cursor-pointer">Wedding</button></li>
              <li><button onClick={() => setActivePage('pre-wedding')} className="hover:text-white transition-colors cursor-pointer">Pre Wedding</button></li>
              <li><button onClick={() => setActivePage('cinematography')} className="hover:text-white transition-colors cursor-pointer">Cinematography</button></li>
              <li><button onClick={() => setActivePage('blog')} className="hover:text-white transition-colors cursor-pointer">Blog</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors cursor-pointer">Contact Us</button></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#0B0F19] py-5 px-4 text-center text-xs text-gray-500 border-t border-gray-800">
          <p>2010-2026 Wedding Photo Planet. All Rights Reserved.</p>
        </div>
      </footer>

      {/* 9. FLOATING ACTION QUICK BUTTONS */}
      {/* WhatsApp float */}
      <a
        href={weddingPhotoPlanetConfig.placeholders.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call float (mobile) */}
      <a
        href={`tel:${weddingPhotoPlanetConfig.placeholders.phone1.replace(/[^0-9]/g, '')}`}
        className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Back to top float */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-gray-900/80 hover:bg-[#E11D48] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
