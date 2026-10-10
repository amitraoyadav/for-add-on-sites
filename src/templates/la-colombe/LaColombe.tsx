import React, { useState, useMemo, useEffect } from 'react';
import {
  laColombeConfig,
  LaColombeProduct,
  CafeLocation,
  CustomerReview
} from './la-colombe.config';
import {
  ShoppingBag,
  Search,
  User,
  Star,
  Check,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronLeft,
  Truck,
  ShieldCheck,
  Award,
  Coffee,
  Clock,
  MapPin,
  Phone,
  Mail,
  SlidersHorizontal,
  Sparkles,
  Heart,
  RotateCw,
  ExternalLink,
  Flame,
  Droplets,
  HelpCircle,
  Menu as MenuIcon
} from 'lucide-react';

interface CartItem {
  product: LaColombeProduct;
  sizeIndex: number;
  grind: string;
  isSubscription: boolean;
  frequency: string;
  quantity: number;
}

export default function LaColombe() {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState<'home' | 'coffee' | 'draft-latte' | 'club' | 'cafes' | 'story'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: laColombeConfig.products[0], // Corsica
      sizeIndex: 0,
      grind: 'Whole Bean',
      isSubscription: false,
      frequency: 'Every 2 Weeks',
      quantity: 1
    },
    {
      product: laColombeConfig.products[7], // Triple Draft Latte
      sizeIndex: 0,
      grind: 'Ready To Drink Can',
      isSubscription: true,
      frequency: 'Every 4 Weeks',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Modals & Inspect State
  const [selectedProductModal, setSelectedProductModal] = useState<LaColombeProduct | null>(null);
  const [selectedProductSizeIdx, setSelectedProductSizeIdx] = useState(0);
  const [selectedProductGrind, setSelectedProductGrind] = useState('Whole Bean');
  const [selectedProductIsSub, setSelectedProductIsSub] = useState(false);
  const [selectedProductFrequency, setSelectedProductFrequency] = useState('Every 2 Weeks');

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);

  // Filter State on Collections View
  const [roastFilter, setRoastFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('Philadelphia');

  // Interactive Roast Match Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    brewMethod: 'Drip Coffee Maker',
    roastPreference: 'Dark',
    flavorNotes: 'Chocolate & Rich'
  });
  const [matchedProduct, setMatchedProduct] = useState<LaColombeProduct | null>(null);

  // Announcement bar rotating index
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % laColombeConfig.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Calculate Cart Subtotal
  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item.isSubscription
        ? item.product.sizes[item.sizeIndex].subscribePrice
        : item.product.sizes[item.sizeIndex].price;
      return acc + price * item.quantity;
    }, 0);
  }, [cart]);

  const freeShippingThreshold = laColombeConfig.placeholders.freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const shippingProgressPct = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  // Cart operations
  const addToCart = (
    product: LaColombeProduct,
    sizeIdx = 0,
    grind = 'Whole Bean',
    isSub = false,
    freq = 'Every 2 Weeks',
    qty = 1
  ) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.sizeIndex === sizeIdx &&
          item.grind === grind &&
          item.isSubscription === isSub &&
          item.frequency === freq
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += qty;
        return next;
      }
      return [
        ...prev,
        {
          product,
          sizeIndex: sizeIdx,
          grind,
          isSubscription: isSub,
          frequency: freq,
          quantity: qty
        }
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const next = [...prev];
      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        return next.filter((_, idx) => idx !== index);
      }
      next[index].quantity = newQty;
      return next;
    });
  };

  // Open Product Modal
  const openProductDetail = (product: LaColombeProduct) => {
    setSelectedProductModal(product);
    setSelectedProductSizeIdx(0);
    setSelectedProductGrind(product.grindOptions[0] || 'Whole Bean');
    setSelectedProductIsSub(false);
    setSelectedProductFrequency('Every 2 Weeks');
  };

  // Filtered Products for Shop view
  const filteredProducts = useMemo(() => {
    return laColombeConfig.products.filter((p) => {
      const matchesCategory =
        categoryFilter === 'all' ||
        (categoryFilter === 'coffee-beans' && p.category === 'coffee-beans') ||
        (categoryFilter === 'draft-latte' && p.category === 'draft-latte') ||
        (categoryFilter === 'gift-boxes' && p.category === 'gift-boxes');

      const matchesRoast =
        roastFilter === 'all' ||
        (roastFilter === 'dark' && p.roastLevel === 'Dark Roast') ||
        (roastFilter === 'medium-dark' && p.roastLevel === 'Medium-Dark Roast') ||
        (roastFilter === 'medium' && p.roastLevel === 'Medium Roast') ||
        (roastFilter === 'light' && p.roastLevel === 'Light Roast');

      return matchesCategory && matchesRoast;
    });
  }, [categoryFilter, roastFilter]);

  // Live search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return laColombeConfig.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.notes.some((n) => n.toLowerCase().includes(q)) ||
        p.roastLevel.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Find Roast Match handler
  const calculateQuizMatch = () => {
    if (quizAnswers.roastPreference === 'Dark') {
      setMatchedProduct(laColombeConfig.products[0]); // Corsica
    } else if (quizAnswers.roastPreference === 'Medium') {
      setMatchedProduct(laColombeConfig.products[1]); // Nizza
    } else {
      setMatchedProduct(laColombeConfig.products[2]); // Monaco
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#12161A] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0C1B2A]">
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-[#0C1B2A] text-[#FCE08B] px-4 py-2 text-xs font-semibold tracking-wider flex items-center justify-between border-b border-[#1E293B]">
        <button
          onClick={() =>
            setAnnouncementIdx((prev) =>
              prev === 0 ? laColombeConfig.announcements.length - 1 : prev - 1
            )
          }
          className="text-[#94A3B8] hover:text-[#FCE08B] transition-colors p-1"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="text-center truncate px-2 font-mono text-[11px] sm:text-xs tracking-widest flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0 animate-pulse" />
          <span>{laColombeConfig.announcements[announcementIdx]}</span>
        </div>

        <button
          onClick={() =>
            setAnnouncementIdx((prev) => (prev + 1) % laColombeConfig.announcements.length)
          }
          className="text-[#94A3B8] hover:text-[#FCE08B] transition-colors p-1"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E2D7C5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0C1B2A] hover:bg-[#EFE8DB] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#0C1B2A] hover:bg-[#EFE8DB] rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-widest uppercase text-[#0C1B2A]">
            <button
              onClick={() => {
                setActiveTab('coffee');
                setCategoryFilter('coffee-beans');
              }}
              className={`hover:text-[#D4AF37] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'coffee' ? 'border-[#0C1B2A] text-[#0C1B2A]' : 'border-transparent text-[#2D3748]'
              }`}
            >
              Coffee
            </button>
            <button
              onClick={() => {
                setActiveTab('draft-latte');
                setCategoryFilter('draft-latte');
              }}
              className={`hover:text-[#D4AF37] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'draft-latte' ? 'border-[#0C1B2A] text-[#0C1B2A]' : 'border-transparent text-[#2D3748]'
              }`}
            >
              Draft Latte Cans
            </button>
            <button
              onClick={() => setActiveTab('club')}
              className={`hover:text-[#D4AF37] transition-colors cursor-pointer py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'club' ? 'border-[#D4AF37] text-[#A17C17]' : 'border-transparent text-[#2D3748]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Join The Club
            </button>
            <button
              onClick={() => setActiveTab('cafes')}
              className={`hover:text-[#D4AF37] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'cafes' ? 'border-[#0C1B2A] text-[#0C1B2A]' : 'border-transparent text-[#2D3748]'
              }`}
            >
              Cafes ({laColombeConfig.stats.cafesCount})
            </button>
          </nav>

          {/* Centered Brand Logo */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex flex-col items-center cursor-pointer select-none group text-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-5 text-[#0C1B2A] group-hover:text-[#D4AF37] transition-colors">
                <img
                  src="/assets/la-colombe/dove-logo.svg"
                  alt="La Colombe Dove"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-[0.25em] text-[#0C1B2A] font-serif group-hover:opacity-90">
                LA COLOMBE
              </span>
            </div>
            <span className="text-[9px] font-bold tracking-[0.35em] text-[#718096] uppercase -mt-0.5">
              Coffee Roasters • Est. 1994
            </span>
          </div>

          {/* Right Header Utilities */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C1B2A] hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-[#EFE8DB] transition-all cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>

            <button
              onClick={() => setIsAccountModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0C1B2A] hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-[#EFE8DB] transition-all cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>

            {/* Raoz Maker Placeholders Inspector */}
            <button
              onClick={() => setIsPlaceholdersOpen(true)}
              className="px-2.5 py-1 rounded bg-[#0C1B2A] text-[#FCE08B] hover:bg-[#152B52] text-[10px] font-mono tracking-wider transition-all flex items-center gap-1 cursor-pointer"
              title="View Raoz Website Maker export fields"
            >
              <SlidersHorizontal className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden md:inline">Placeholders</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#0C1B2A] text-white hover:bg-[#152B52] rounded-xl transition-all shadow-md shadow-[#0C1B2A]/10 flex items-center gap-2 cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#FCE08B]" />
              <span className="text-xs font-bold hidden sm:inline">${cartSubtotal.toFixed(2)}</span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-[#0C1B2A] font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2D7C5] bg-[#FBF9F5] px-6 py-4 space-y-3">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#0C1B2A] border-b border-[#E2D7C5]"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab('coffee');
                setCategoryFilter('coffee-beans');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#0C1B2A] border-b border-[#E2D7C5]"
            >
              Shop All Coffee
            </button>
            <button
              onClick={() => {
                setActiveTab('draft-latte');
                setCategoryFilter('draft-latte');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#0C1B2A] border-b border-[#E2D7C5]"
            >
              Draft Latte &amp; Cold Brew Cans
            </button>
            <button
              onClick={() => {
                setActiveTab('club');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#A17C17] border-b border-[#E2D7C5] flex items-center justify-between"
            >
              <span>Join The Coffee Club</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309]">Save 15%</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('cafes');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#0C1B2A] border-b border-[#E2D7C5]"
            >
              Our Cafes
            </button>
            <button
              onClick={() => {
                setActiveTab('story');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-[#0C1B2A]"
            >
              About &amp; Sourcing
            </button>
          </div>
        )}
      </header>

      {/* 3. MAIN CONTENT BODY ROUTER */}
      <main>
        {/* VIEW 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div>
            {/* HERO BANNER SECTION */}
            <section className="relative bg-[#0C1B2A] text-white min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden">
              {/* Background Art */}
              <div className="absolute inset-0 opacity-80 pointer-events-none">
                <img
                  src="/assets/la-colombe/hero-bg.svg"
                  alt="La Colombe Atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182C44] border border-[#2A4365] text-xs text-[#FCE08B] font-mono tracking-widest uppercase">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    America's Specialty Coffee Pioneer Since 1994
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.05]">
                    ELEVATE YOUR <br className="hidden sm:inline" />
                    <span className="text-[#FCE08B] italic">EVERYDAY</span> CUP.
                  </h1>

                  <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                    From our iconic roasts like Corsica and Nizza to the world's first cold-pressed Draft Latte in a can. Roasted fresh, sourced ethically, crafted with unmatched precision.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => {
                        setActiveTab('coffee');
                        setCategoryFilter('coffee-beans');
                      }}
                      className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] font-bold text-xs uppercase tracking-[0.2em] rounded-md transition-all shadow-xl shadow-[#D4AF37]/20 cursor-pointer"
                    >
                      Shop Best Sellers
                    </button>
                    <button
                      onClick={() => setActiveTab('club')}
                      className="px-7 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-md border border-white/30 transition-all cursor-pointer"
                    >
                      Join The Club (Save 15%)
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('draft-latte');
                        setCategoryFilter('draft-latte');
                      }}
                      className="px-6 py-4 text-[#FCE08B] hover:text-white text-xs font-semibold uppercase tracking-widest underline underline-offset-8 transition-all cursor-pointer"
                    >
                      Explore Draft Latte →
                    </button>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1E293B] text-center lg:text-left">
                    <div>
                      <span className="block text-xl font-bold font-serif text-[#FCE08B]">30+</span>
                      <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider">Neighborhood Cafes</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold font-serif text-[#FCE08B]">28,000+</span>
                      <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider">5-Star Reviews</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold font-serif text-[#FCE08B]">100%</span>
                      <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider">Direct Ethical Trade</span>
                    </div>
                  </div>
                </div>

                {/* Hero Right Floating Trio Product Preview */}
                <div className="lg:col-span-5 flex justify-center">
                  <div
                    onClick={() => openProductDetail(laColombeConfig.products[0])}
                    className="relative w-full max-w-sm group cursor-pointer"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#FCE08B] rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative rounded-2xl bg-[#0F172A] border border-[#334155] p-6 text-center">
                      <div className="w-56 h-72 mx-auto mb-4">
                        <img
                          src="/assets/la-colombe/corsica-box.svg"
                          alt="Corsica Dark Roast"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Featured Flagship Roast</span>
                        <h3 className="text-xl font-serif font-bold text-white tracking-wide">CORSICA DARK ROAST</h3>
                        <p className="text-xs text-[#94A3B8] italic">Baker's Chocolate • Red Wine • Bold Cocoa</p>
                        <div className="pt-3 flex items-center justify-between">
                          <span className="text-sm font-bold text-[#FCE08B]">$16.00 <span className="text-[10px] text-[#94A3B8] font-normal">($13.60 on sub)</span></span>
                          <span className="text-xs font-semibold text-white bg-[#1E293B] px-3 py-1 rounded hover:bg-[#D4AF37] hover:text-[#0C1B2A] transition-colors">Quick View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* VALUE PROPOSITION BADGES STRIP */}
            <section className="bg-[#EFE8DB] border-b border-[#E2D7C5] py-6 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0C1B2A] text-[#D4AF37] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1B2A]">FREE SHIPPING OVER $40</h4>
                    <p className="text-[11px] text-[#64748B]">Fast direct roastery shipping across the USA</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0C1B2A] text-[#D4AF37] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1B2A]">CERTIFIED B-CORP</h4>
                    <p className="text-[11px] text-[#64748B]">Highest social and environmental standards</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0C1B2A] text-[#D4AF37] flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1B2A]">ROASTED FRESH WEEKLY</h4>
                    <p className="text-[11px] text-[#64748B]">Peak flavor guarantee in specialty valve bags</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0C1B2A] text-[#D4AF37] flex items-center justify-center">
                    <RotateCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1B2A]">SUBSCRIBE &amp; SAVE 15%</h4>
                    <p className="text-[11px] text-[#64748B]">Custom schedule, swap or cancel anytime</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: BEST SELLING ROASTS SHOWCASE */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A17C17]">
                    Crafted with Purpose
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C1B2A] mt-1">
                    OUR SIGNATURE COFFEES
                  </h2>
                  <p className="text-sm text-[#5C6570] max-w-lg mt-2">
                    Roasted to perfection in Philadelphia and Muskegon. Available in Whole Bean or freshly ground to your preferred method.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('coffee');
                      setCategoryFilter('coffee-beans');
                    }}
                    className="text-xs font-bold tracking-widest uppercase text-[#0C1B2A] hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
                  >
                    View All Coffees <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {laColombeConfig.products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl border border-[#E2D7C5] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Badge */}
                    <div className="relative pt-6 px-6 bg-[#FBF9F5] flex items-center justify-center cursor-pointer" onClick={() => openProductDetail(product)}>
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#0C1B2A] text-[#FCE08B] text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                          {product.badge}
                        </span>
                      )}
                      <div className="w-44 h-56 mx-auto">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Product Card Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Rating & Reviews */}
                        <div className="flex items-center gap-1.5 text-xs text-[#D97706] mb-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                            ))}
                          </div>
                          <span className="text-[11px] font-semibold text-[#64748B]">({product.reviewCount.toLocaleString()})</span>
                        </div>

                        <h3
                          onClick={() => openProductDetail(product)}
                          className="text-lg font-serif font-bold text-[#0C1B2A] hover:text-[#D4AF37] cursor-pointer transition-colors"
                        >
                          {product.name}
                        </h3>
                        <span className="text-xs font-semibold text-[#A17C17] uppercase tracking-wider block">
                          {product.roastLevel}
                        </span>

                        {/* Flavor notes pills */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.notes.map((note, idx) => (
                            <span key={idx} className="text-[10px] bg-[#F1EADF] text-[#4A5568] px-2 py-0.5 rounded-full font-medium">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Add to Cart Trigger */}
                      <div className="pt-3 border-t border-[#EFE8DB] flex items-center justify-between">
                        <div>
                          <span className="text-base font-bold text-[#0C1B2A]">${product.price.toFixed(2)}</span>
                          <span className="block text-[10px] text-[#A17C17] font-semibold">
                            ${product.subscribePrice.toFixed(2)} with Sub
                          </span>
                        </div>

                        <button
                          onClick={() => addToCart(product, 0, 'Whole Bean')}
                          className="px-3.5 py-2 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: READY-TO-DRINK DRAFT LATTE INNOVATION BANNER */}
            <section className="bg-[#10141C] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-[#263345]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Cans presentation */}
                <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div
                    onClick={() => openProductDetail(laColombeConfig.products[7])}
                    className="bg-[#18202F] p-4 rounded-xl border border-[#2D3748] text-center cursor-pointer hover:border-[#D4AF37] transition-all group"
                  >
                    <div className="h-48 mx-auto mb-3">
                      <img
                        src="/assets/la-colombe/triple-draft-latte.svg"
                        alt="Triple Draft Latte"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Triple Draft Latte</h4>
                    <span className="text-[10px] text-[#FCE08B] font-mono">175mg Caffeine</span>
                  </div>

                  <div
                    onClick={() => openProductDetail(laColombeConfig.products[8])}
                    className="bg-[#18202F] p-4 rounded-xl border border-[#2D3748] text-center cursor-pointer hover:border-[#D4AF37] transition-all group"
                  >
                    <div className="h-48 mx-auto mb-3">
                      <img
                        src="/assets/la-colombe/pumpkin-spice-latte.svg"
                        alt="Pumpkin Spice Draft Latte"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pumpkin Spice</h4>
                    <span className="text-[10px] text-[#FED7AA] font-mono">Real Spices</span>
                  </div>

                  <div
                    onClick={() => openProductDetail(laColombeConfig.products[9])}
                    className="hidden sm:block bg-[#18202F] p-4 rounded-xl border border-[#2D3748] text-center cursor-pointer hover:border-[#D4AF37] transition-all group"
                  >
                    <div className="h-48 mx-auto mb-3">
                      <img
                        src="/assets/la-colombe/black-cold-brew.svg"
                        alt="Black Cold Brew"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Black Cold Brew</h4>
                    <span className="text-[10px] text-[#93C5FD] font-mono">Zero Sugar</span>
                  </div>
                </div>

                {/* Right Innovation Story */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs text-[#D4AF37] font-mono uppercase tracking-widest">
                    <Droplets className="w-3.5 h-3.5" />
                    Patented Nitrogen Microfoam
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                    THE WORLD'S FIRST <br />
                    <span className="text-[#FCE08B] italic">DRAFT LATTE</span> IN A CAN.
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    Created by La Colombe founder Todd Carmichael, the Draft Latte delivers the true texture of an iced latte on tap. Liquid nitrogen produces micro-bubbles as you crack the can, creating a velvety foam head from start to finish.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-[#18202F] rounded-lg border border-[#2D3748]">
                      <span className="font-bold text-[#FCE08B] block mb-1">Cold-Pressed Espresso</span>
                      <span className="text-[#94A3B8]">Concentrated extraction brings out sweet cocoa notes with zero bitterness.</span>
                    </div>
                    <div className="p-3 bg-[#18202F] rounded-lg border border-[#2D3748]">
                      <span className="font-bold text-[#FCE08B] block mb-1">Real Farm Fresh Milk</span>
                      <span className="text-[#94A3B8]">Nutrient-rich, cold milk without artificial thickeners or oils.</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setActiveTab('draft-latte');
                        setCategoryFilter('draft-latte');
                      }}
                      className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] font-bold text-xs uppercase tracking-[0.2em] rounded-md transition-all cursor-pointer"
                    >
                      Shop All Cans &amp; Fridge Packs
                    </button>
                    <button
                      onClick={() => openProductDetail(laColombeConfig.products[7])}
                      className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-md border border-white/20 transition-all cursor-pointer"
                    >
                      Order 12-Pack ($36.00)
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: JOIN THE CLUB (SUBSCRIPTION VALUE PROP) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="bg-[#0C1B2A] text-white rounded-3xl p-8 sm:p-14 border border-[#233549] relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182C44] text-[#FCE08B] text-xs font-mono tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      Coffee Club Perks
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                      NEVER RUN OUT. ALWAYS SAVE 15%.
                    </h2>

                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                      Select your favorite whole bean, ground coffee, or Draft Latte cans. Choose your delivery cadence (every 1, 2, 3, or 4 weeks). Enjoy 15% off every shipment, free shipping over $40, and effortless skip, swap, or cancellation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      <div className="p-3.5 bg-[#142335] rounded-xl border border-[#223B59] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold">15%</div>
                        <span className="text-xs font-semibold text-white">Save 15% On Every Single Order</span>
                      </div>
                      <div className="p-3.5 bg-[#142335] rounded-xl border border-[#223B59] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center"><Truck className="w-4 h-4 text-[#D4AF37]" /></div>
                        <span className="text-xs font-semibold text-white">Free Roastery Shipping Over $40</span>
                      </div>
                      <div className="p-3.5 bg-[#142335] rounded-xl border border-[#223B59] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center"><RotateCw className="w-4 h-4 text-[#D4AF37]" /></div>
                        <span className="text-xs font-semibold text-white">Pause, Swap, or Cancel Anytime</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveTab('club')}
                        className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] font-bold text-xs uppercase tracking-[0.2em] rounded-md transition-all cursor-pointer"
                      >
                        Build Your Subscription
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-36 h-44 sm:w-44 sm:h-52">
                      <img
                        src="/assets/la-colombe/membership-gold-shield.svg"
                        alt="Coffee Club Membership Shield"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: FIND YOUR MATCH QUIZ */}
            <section className="py-16 px-4 bg-[#EFE8DB] border-y border-[#E2D7C5]">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#A17C17] uppercase">Interactive Roast Matcher</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C1B2A] mt-1">
                    FIND YOUR PERFECT LA COLOMBE ROAST
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6570] max-w-md mx-auto mt-1">
                    Answer 3 quick preferences to find the blend crafted for your morning routine.
                  </p>
                </div>

                {/* Quiz Box */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8CDBA] shadow-md text-left">
                  {quizStep === 1 && (
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold text-[#A17C17]">STEP 1 OF 3</span>
                      <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">How do you brew your coffee?</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Drip Coffee Maker', 'French Press', 'Pour-Over', 'Espresso Machine'].map((method) => (
                          <button
                            key={method}
                            onClick={() => {
                              setQuizAnswers({ ...quizAnswers, brewMethod: method });
                              setQuizStep(2);
                            }}
                            className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                              quizAnswers.brewMethod === method
                                ? 'bg-[#0C1B2A] text-[#FCE08B] border-[#0C1B2A]'
                                : 'bg-[#FBF9F5] text-[#2D3748] border-[#E2D7C5] hover:border-[#D4AF37]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizStep === 2 && (
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold text-[#A17C17]">STEP 2 OF 3</span>
                      <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">What roast level do you prefer?</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {['Dark', 'Medium', 'Medium-Dark'].map((roast) => (
                          <button
                            key={roast}
                            onClick={() => {
                              setQuizAnswers({ ...quizAnswers, roastPreference: roast });
                              setQuizStep(3);
                            }}
                            className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                              quizAnswers.roastPreference === roast
                                ? 'bg-[#0C1B2A] text-[#FCE08B] border-[#0C1B2A]'
                                : 'bg-[#FBF9F5] text-[#2D3748] border-[#E2D7C5] hover:border-[#D4AF37]'
                            }`}
                          >
                            {roast} Roast
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizStep === 3 && (
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold text-[#A17C17]">STEP 3 OF 3</span>
                      <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">What flavors do you enjoy most?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Chocolate & Rich', 'Sweet Honey & Nuts', 'Caramel & Fruit'].map((flavor) => (
                          <button
                            key={flavor}
                            onClick={() => {
                              setQuizAnswers({ ...quizAnswers, flavorNotes: flavor });
                              calculateQuizMatch();
                              setQuizStep(4);
                            }}
                            className="p-3.5 rounded-xl border border-[#E2D7C5] bg-[#FBF9F5] text-[#2D3748] hover:border-[#D4AF37] hover:bg-[#0C1B2A] hover:text-[#FCE08B] text-xs font-bold text-center transition-all cursor-pointer"
                          >
                            {flavor}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizStep === 4 && matchedProduct && (
                    <div className="text-center space-y-4 py-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-bold">
                        <Check className="w-4 h-4" /> Perfect Match Found
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#0C1B2A]">
                        {matchedProduct.name} ({matchedProduct.roastLevel})
                      </h3>
                      <p className="text-xs text-[#5C6570] max-w-md mx-auto italic">
                        {matchedProduct.description}
                      </p>
                      <div className="w-28 h-36 mx-auto">
                        <img src={matchedProduct.image} alt={matchedProduct.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex justify-center gap-3 pt-2">
                        <button
                          onClick={() => addToCart(matchedProduct, 0, 'Whole Bean')}
                          className="px-6 py-2.5 bg-[#0C1B2A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#D4AF37] hover:text-[#0C1B2A] transition-colors"
                        >
                          Add Match to Cart (${matchedProduct.price.toFixed(2)})
                        </button>
                        <button
                          onClick={() => setQuizStep(1)}
                          className="px-4 py-2.5 bg-transparent border border-[#CBD5E1] text-[#64748B] text-xs font-semibold rounded-lg hover:bg-gray-50"
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* SECTION: OKENDO REVIEWS RECREATION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center space-y-3 mb-12">
                <div className="flex items-center justify-center gap-1.5 text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D97706] text-[#D97706]" />
                  ))}
                  <span className="text-lg font-bold text-[#0C1B2A] ml-2">4.8 / 5.0</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#0C1B2A]">
                  LOVED BY OVER 28,000 COFFEE ENTHUSIASTS
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6570] max-w-lg mx-auto">
                  Verified customer reviews collected through our authenticated store reviews platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {laColombeConfig.customerReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white p-6 rounded-2xl border border-[#E2D7C5] shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                          ))}
                        </div>
                        <span className="text-[10px] text-[#94A3B8] font-mono">{rev.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0C1B2A] mb-1 font-serif">"{rev.title}"</h4>
                      <p className="text-xs text-[#4A5568] leading-relaxed italic">
                        {rev.comment}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1EADF] text-[11px] flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#0C1B2A] block">{rev.author}</span>
                        <span className="text-[#94A3B8]">{rev.location}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-semibold text-[#059669] flex items-center gap-0.5 justify-end">
                          <Check className="w-3 h-3" /> Verified
                        </span>
                        <span className="text-[10px] text-[#718096]">{rev.productName}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: SHOP ALL COFFEE (COLLECTIONS PAGE) */}
        {activeTab === 'coffee' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header & Subcategory Banner */}
            <div className="mb-10 text-center sm:text-left border-b border-[#E2D7C5] pb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A17C17]">
                Direct Trade Roastery
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C1B2A] mt-1">
                SPECIALTY COFFEE BEANS
              </h1>
              <p className="text-sm text-[#5C6570] max-w-2xl mt-2">
                Discover the full collection of whole bean and ground coffees. Sourced from the highest elevations of Colombia, Brazil, Ethiopia, Mexico, and Honduras.
              </p>

              {/* Filters Toolbar */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#EFE8DB]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C1B2A] flex items-center gap-1.5 mr-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" /> Filter By Roast:
                </span>
                {[
                  { id: 'all', label: 'All Roasts' },
                  { id: 'dark', label: 'Dark Roast' },
                  { id: 'medium-dark', label: 'Medium-Dark' },
                  { id: 'medium', label: 'Medium Roast' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRoastFilter(item.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      roastFilter === item.id
                        ? 'bg-[#0C1B2A] text-[#FCE08B] shadow'
                        : 'bg-[#EFE8DB] text-[#4A5568] hover:bg-[#E2D7C5]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-[#E2D7C5] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div
                    onClick={() => openProductDetail(product)}
                    className="relative pt-6 px-6 bg-[#FBF9F5] flex items-center justify-center cursor-pointer"
                  >
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#0C1B2A] text-[#FCE08B] text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                        {product.badge}
                      </span>
                    )}
                    <div className="w-44 h-56 mx-auto">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#D97706] mb-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold text-[#64748B]">({product.reviewCount.toLocaleString()})</span>
                      </div>

                      <h3
                        onClick={() => openProductDetail(product)}
                        className="text-lg font-serif font-bold text-[#0C1B2A] hover:text-[#D4AF37] cursor-pointer transition-colors"
                      >
                        {product.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#A17C17] uppercase tracking-wider block">
                        {product.roastLevel}
                      </span>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.notes.map((note, idx) => (
                          <span key={idx} className="text-[10px] bg-[#F1EADF] text-[#4A5568] px-2 py-0.5 rounded-full font-medium">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EFE8DB] flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-[#0C1B2A]">${product.price.toFixed(2)}</span>
                        <span className="block text-[10px] text-[#A17C17] font-semibold">
                          ${product.subscribePrice.toFixed(2)} with Sub
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(product, 0, 'Whole Bean')}
                        className="px-3.5 py-2 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: DRAFT LATTE & COLD BREW CANS */}
        {activeTab === 'draft-latte' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center sm:text-left border-b border-[#E2D7C5] pb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A17C17]">
                Ready to Drink Innovation
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C1B2A] mt-1">
                DRAFT LATTE &amp; COLD BREW
              </h1>
              <p className="text-sm text-[#5C6570] max-w-2xl mt-2">
                Real foamed milk and cold-pressed espresso in a can. Experience the true cafe draft pour right from your refrigerator.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {laColombeConfig.products.filter((p) => p.category === 'draft-latte').map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-[#E2D7C5] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group p-6"
                >
                  <div
                    onClick={() => openProductDetail(product)}
                    className="h-60 mx-auto mb-4 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#D97706] mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                        ))}
                        <span className="text-[11px] font-semibold text-[#64748B]">({product.reviewCount.toLocaleString()})</span>
                      </div>
                      <h3
                        onClick={() => openProductDetail(product)}
                        className="text-xl font-serif font-bold text-[#0C1B2A] hover:text-[#D4AF37] cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#5C6570] mt-1 leading-relaxed">{product.description}</p>

                      {product.nutrition && (
                        <div className="flex items-center gap-3 text-[10px] text-[#4A5568] bg-[#FBF9F5] p-2.5 rounded-lg border border-[#E2D7C5] mt-3">
                          <span className="font-semibold">{product.nutrition.calories}</span>
                          <span>•</span>
                          <span className="font-semibold">{product.nutrition.caffeine}</span>
                          <span>•</span>
                          <span>{product.nutrition.sugar}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#EFE8DB] flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-[#0C1B2A]">${product.price.toFixed(2)}</span>
                        <span className="block text-[11px] text-[#A17C17] font-semibold">12-Pack Cans</span>
                      </div>

                      <button
                        onClick={() => addToCart(product, 0, 'Ready To Drink Can')}
                        className="px-4 py-2.5 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                      >
                        Add 12-Pack
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: JOIN THE COFFEE CLUB (SUBSCRIPTION PAGE) */}
        {activeTab === 'club' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="w-24 h-24 mx-auto mb-2">
                <img src="/assets/la-colombe/membership-gold-shield.svg" alt="Gold Shield" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#A17C17]">Official Membership</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C1B2A]">
                THE LA COLOMBE COFFEE CLUB
              </h1>
              <p className="text-base text-[#5C6570] leading-relaxed">
                Unlock 15% off every delivery, free shipping over $40, and automatic deliveries straight from our roasteries to your door.
              </p>
            </div>

            {/* Club Perks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-[#E2D7C5] shadow-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0C1B2A] text-[#FCE08B] flex items-center justify-center mx-auto font-bold text-lg">
                  15%
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">Save 15% On Every Order</h3>
                <p className="text-xs text-[#5C6570] leading-relaxed">
                  No coupons or codes needed. Your 15% subscriber savings are applied automatically to every whole bean, ground, and can shipment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E2D7C5] shadow-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0C1B2A] text-[#FCE08B] flex items-center justify-center mx-auto">
                  <Truck className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">Free Shipping Over $40</h3>
                <p className="text-xs text-[#5C6570] leading-relaxed">
                  Combine 2-3 bags or a can crate to easily hit $40 and unlock 100% free roastery shipping anywhere in the continental US.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E2D7C5] shadow-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0C1B2A] text-[#FCE08B] flex items-center justify-center mx-auto">
                  <RotateCw className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0C1B2A]">Complete Control</h3>
                <p className="text-xs text-[#5C6570] leading-relaxed">
                  Heading out of town? Swap your roast, alter your delivery date, or pause with one click right inside your subscriber portal.
                </p>
              </div>
            </div>

            {/* Subscribe Fast-Picker */}
            <div className="bg-[#0C1B2A] text-white p-8 sm:p-12 rounded-3xl space-y-8">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Start Your Subscription</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Select our most popular coffees and subscribe in seconds.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {laColombeConfig.products.slice(0, 3).map((p) => (
                  <div key={p.id} className="bg-[#18202F] p-5 rounded-2xl border border-[#334155] space-y-3">
                    <div className="w-32 h-40 mx-auto">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-serif font-bold text-lg text-white">{p.name}</h4>
                      <span className="text-xs text-[#D4AF37] font-semibold">{p.roastLevel}</span>
                      <div className="pt-2 text-sm font-bold text-[#FCE08B]">
                        ${p.subscribePrice.toFixed(2)}{' '}
                        <span className="text-xs line-through text-[#64748B]">${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(p, 0, 'Whole Bean', true, 'Every 2 Weeks')}
                      className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Subscribe (15% Off)
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: CAFES DIRECTORY */}
        {activeTab === 'cafes' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#A17C17]">Hospitality Since 1994</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C1B2A]">
                VISIT OUR CAFES
              </h1>
              <p className="text-sm text-[#5C6570]">
                Experience our signature coffee hospitality, fresh draft latte on tap, and fresh house-baked pastries across 32 neighborhood cafes nationwide.
              </p>

              {/* City Selector */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {['Philadelphia', 'New York', 'Chicago', 'Washington D.C.', 'Boston', 'Austin'].map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedCity === city
                        ? 'bg-[#0C1B2A] text-[#FCE08B]'
                        : 'bg-[#EFE8DB] text-[#4A5568] hover:bg-[#E2D7C5]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations Grid for Selected City */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laColombeConfig.cafes.filter((c) => c.city === selectedCity).map((cafe) => (
                <div
                  key={cafe.id}
                  className="bg-white p-6 rounded-2xl border border-[#E2D7C5] shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {cafe.isFlagship && (
                      <span className="inline-block bg-[#0C1B2A] text-[#FCE08B] text-[9px] font-mono font-bold px-2.5 py-0.5 rounded tracking-widest uppercase">
                        National Flagship
                      </span>
                    )}
                    <h3 className="text-xl font-serif font-bold text-[#0C1B2A]">{cafe.name}</h3>
                    <div className="text-xs text-[#5C6570] space-y-1">
                      <p className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{cafe.address}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{cafe.hours}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{cafe.phone}</span>
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1">
                      {cafe.features.map((f, i) => (
                        <span key={i} className="text-[10px] bg-[#F1EADF] text-[#4A5568] px-2 py-0.5 rounded font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8DB] flex gap-2">
                    <button
                      onClick={() => alert(`Directions to ${cafe.name}:\n${cafe.address}`)}
                      className="flex-1 py-2 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 6: ABOUT US & OUR STORY */}
        {activeTab === 'story' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#A17C17]">Ethical Craftsmanship</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C1B2A]">
                ROASTING WITH PURPOSE
              </h1>
              <p className="text-base text-[#5C6570] max-w-2xl mx-auto">
                Founded in 1994 on Rittenhouse Square in Philadelphia with a single mission: to provide the world with great coffee and great hospitality.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2D7C5] shadow-md space-y-6 text-[#2D3748] leading-relaxed">
              <h2 className="text-2xl font-serif font-bold text-[#0C1B2A]">Our Heritage</h2>
              <p>
                For over three decades, La Colombe has led the American craft coffee movement. Long before specialty coffee was a buzzword, founders Todd Carmichael and JP Iberti traveled the globe to discover exceptional heirloom varietals, partnering directly with farmers to ensure regenerative land stewardship and fair wages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#E2D7C5]">
                  <h3 className="font-serif font-bold text-lg text-[#0C1B2A] mb-2">Direct Trade Principles</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    We visit every estate and co-op we buy from. By establishing long-term, direct purchase agreements, we provide farmers with the financial security to invest in soil health, organic cultivation, and worker housing.
                  </p>
                </div>
                <div className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#E2D7C5]">
                  <h3 className="font-serif font-bold text-lg text-[#0C1B2A] mb-2">Certified B-Corp Impact</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    We hold ourselves to rigorous third-party auditing covering governance, worker wellness, and environmental footprint. 100% of our coffee chaff and spent grounds are composted.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#0C1B2A]">The Birth of the Draft Latte</h2>
              <p>
                In 2014, we transformed iced coffee by inventing the Draft Latte. By combining cold-pressed Nizza espresso with fresh milk under high-pressure nitrogen, we created a silky, microfoam head that had previously only been possible from a seasoned barista's steam wand. We subsequently spent two years engineering the nitrogen valve that allowed this exact texture to travel inside a 100% recyclable aluminum can.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* 4. PRODUCT DETAIL MODAL (QUICK VIEW / FULL PDP SIMULATOR) */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-[#E2D7C5] shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-4 right-4 p-2 text-[#64748B] hover:text-[#0C1B2A] hover:bg-[#F1EADF] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Visual */}
              <div className="bg-[#FBF9F5] rounded-2xl p-6 border border-[#E2D7C5] flex flex-col items-center justify-center">
                <div className="w-48 h-64">
                  <img
                    src={selectedProductModal.image}
                    alt={selectedProductModal.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Roast Scale */}
                {selectedProductModal.roastMeter && (
                  <div className="w-full mt-4 bg-white p-3 rounded-xl border border-[#E2D7C5]">
                    <div className="flex justify-between text-[11px] font-bold text-[#4A5568] mb-1">
                      <span>Light</span>
                      <span className="text-[#A17C17]">{selectedProductModal.roastLevel}</span>
                      <span>Dark</span>
                    </div>
                    <div className="w-full bg-[#E2D7C5] h-2 rounded-full overflow-hidden flex">
                      <div
                        className="bg-[#0C1B2A] h-full"
                        style={{ width: `${(selectedProductModal.roastMeter / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Configuration */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A17C17]">
                    {selectedProductModal.category === 'draft-latte' ? 'Ready to Drink' : selectedProductModal.roastLevel}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C1B2A] mt-0.5">
                    {selectedProductModal.name}
                  </h2>
                  <p className="text-xs text-[#5C6570] italic">{selectedProductModal.subtitle}</p>
                </div>

                {/* Tasting notes */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedProductModal.notes.map((n, i) => (
                    <span key={i} className="text-xs bg-[#FEF3C7] text-[#92400E] font-medium px-2.5 py-1 rounded-full">
                      {n}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  {selectedProductModal.detailedDescription}
                </p>

                {/* Size Options */}
                {selectedProductModal.sizes.length > 1 && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0C1B2A] mb-1.5">
                      Select Size:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProductModal.sizes.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedProductSizeIdx(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            selectedProductSizeIdx === idx
                              ? 'bg-[#0C1B2A] text-[#FCE08B] border-[#0C1B2A]'
                              : 'bg-white text-[#4A5568] border-[#CBD5E1] hover:border-[#D4AF37]'
                          }`}
                        >
                          {s.label} (${s.price.toFixed(2)})
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grind Options */}
                {selectedProductModal.grindOptions.length > 1 && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0C1B2A] mb-1.5">
                      Select Grind:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProductModal.grindOptions.map((g) => (
                        <button
                          key={g}
                          onClick={() => setSelectedProductGrind(g)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border text-left transition-all cursor-pointer ${
                            selectedProductGrind === g
                              ? 'bg-[#0C1B2A] text-[#FCE08B] border-[#0C1B2A]'
                              : 'bg-white text-[#4A5568] border-[#CBD5E1] hover:border-[#D4AF37]'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* One Time vs Subscribe */}
                <div className="p-3 bg-[#FBF9F5] rounded-xl border border-[#E2D7C5] space-y-2">
                  <div
                    onClick={() => setSelectedProductIsSub(false)}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                      !selectedProductIsSub ? 'bg-white shadow-sm border border-[#D4AF37]' : ''
                    }`}
                  >
                    <span className="text-xs font-bold text-[#0C1B2A]">One-Time Purchase</span>
                    <span className="text-xs font-bold text-[#0C1B2A]">
                      ${selectedProductModal.sizes[selectedProductSizeIdx].price.toFixed(2)}
                    </span>
                  </div>

                  <div
                    onClick={() => setSelectedProductIsSub(true)}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                      selectedProductIsSub ? 'bg-white shadow-sm border border-[#D4AF37]' : ''
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#0C1B2A] block">Subscribe &amp; Save 15%</span>
                      <span className="text-[10px] text-[#A17C17]">Delivery on your schedule</span>
                    </div>
                    <span className="text-xs font-bold text-[#A17C17]">
                      ${selectedProductModal.sizes[selectedProductSizeIdx].subscribePrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Submit */}
                <button
                  onClick={() => {
                    addToCart(
                      selectedProductModal,
                      selectedProductSizeIdx,
                      selectedProductGrind,
                      selectedProductIsSub,
                      selectedProductFrequency,
                      1
                    );
                    setSelectedProductModal(null);
                  }}
                  className="w-full py-3.5 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer shadow-lg"
                >
                  Add To Cart • $
                  {(selectedProductIsSub
                    ? selectedProductModal.sizes[selectedProductSizeIdx].subscribePrice
                    : selectedProductModal.sizes[selectedProductSizeIdx].price
                  ).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SLIDING CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#E2D7C5]">
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#E2D7C5] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#0C1B2A]" />
                <h3 className="font-serif font-bold text-lg text-[#0C1B2A]">YOUR CART</h3>
                <span className="text-xs bg-[#EFE8DB] text-[#4A5568] px-2 py-0.5 rounded-full font-bold">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#64748B] hover:text-[#0C1B2A] rounded-full hover:bg-[#F1EADF]"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="p-4 bg-[#EFE8DB] border-b border-[#E2D7C5] text-xs">
              <div className="flex items-center justify-between font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-[#0C1B2A]">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  {amountToFreeShipping > 0
                    ? `Add $${amountToFreeShipping.toFixed(2)} more for FREE SHIPPING`
                    : 'YOU UNLOCKED FREE SHIPPING!'}
                </span>
                <span className="text-[#A17C17] font-mono">{shippingProgressPct.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-[#E2D7C5] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#0C1B2A] h-full transition-all duration-300"
                  style={{ width: `${shippingProgressPct}%` }}
                ></div>
              </div>
            </div>

            {/* Cart Items Scrollable List */}
            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Coffee className="w-12 h-12 text-[#CBD5E1] mx-auto" />
                  <p className="text-sm font-serif font-bold text-[#0C1B2A]">Your cart is empty.</p>
                  <p className="text-xs text-[#64748B]">Explore our signature coffees and draft lattes.</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setActiveTab('coffee');
                    }}
                    className="px-6 py-2.5 bg-[#0C1B2A] text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => {
                  const unitPrice = item.isSubscription
                    ? item.product.sizes[item.sizeIndex].subscribePrice
                    : item.product.sizes[item.sizeIndex].price;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-[#E2D7C5] flex gap-3 items-center shadow-sm"
                    >
                      <div className="w-16 h-20 bg-[#FBF9F5] rounded-lg p-1 border border-[#E2D7C5] shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="font-serif font-bold text-sm text-[#0C1B2A] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-[#64748B]">
                          {item.product.sizes[item.sizeIndex].label} • {item.grind}
                        </p>
                        {item.isSubscription && (
                          <span className="inline-block text-[10px] text-[#A17C17] bg-[#FEF3C7] px-1.5 py-0.5 rounded font-semibold">
                            Sub ({item.frequency})
                          </span>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center border border-[#CBD5E1] rounded-md overflow-hidden bg-[#FBF9F5]">
                            <button
                              onClick={() => updateQuantity(idx, -1)}
                              className="p-1 hover:bg-[#E2D7C5] text-[#4A5568]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-[#0C1B2A]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(idx, 1)}
                              className="p-1 hover:bg-[#E2D7C5] text-[#4A5568]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-[#0C1B2A]">
                            ${(unitPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Cart Footer */}
            <div className="p-5 border-t border-[#E2D7C5] bg-white space-y-3">
              <div className="flex justify-between text-sm font-bold text-[#0C1B2A]">
                <span>SUBTOTAL</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Taxes calculated at checkout. Free shipping applied on orders over $40.
              </p>

              <button
                disabled={cart.length === 0}
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutModalOpen(true);
                }}
                className="w-full py-3.5 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer shadow-lg"
              >
                PROCEED TO CHECKOUT (${cartSubtotal.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 border border-[#E2D7C5] shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2D7C5]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A17C17]">
                Search La Colombe Store
              </span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-[#64748B] hover:text-[#0C1B2A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#94A3B8]" />
              <input
                type="text"
                autoFocus
                placeholder="Search roasts, draft latte, single origin (e.g. Corsica, Nizza)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#FBF9F5] border border-[#CBD5E1] rounded-xl text-sm text-[#0C1B2A] focus:outline-none focus:border-[#0C1B2A]"
              />
            </div>

            {/* Live Search Results */}
            <div className="max-h-72 overflow-y-auto space-y-2 pt-2">
              {searchQuery && searchResults.length === 0 && (
                <p className="text-xs text-center text-[#64748B] py-6">
                  No coffees found matching "{searchQuery}". Try "Corsica", "Dark", or "Latte".
                </p>
              )}
              {searchResults.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    openProductDetail(p);
                    setIsSearchOpen(false);
                  }}
                  className="p-2.5 rounded-xl hover:bg-[#FBF9F5] border border-transparent hover:border-[#E2D7C5] flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-12 object-contain" />
                    <div>
                      <h4 className="font-serif font-bold text-xs text-[#0C1B2A]">{p.name}</h4>
                      <span className="text-[10px] text-[#A17C17]">{p.roastLevel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0C1B2A]">${p.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. CHECKOUT ORDER SIMULATION RECEIPT MODAL */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E2D7C5] shadow-2xl relative space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#059669]">
                Simulated Roastery Order #LC-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0C1B2A] mt-1">
                Thank You for Your Order!
              </h3>
              <p className="text-xs text-[#5C6570] max-w-sm mx-auto mt-1">
                Your craft coffee order has been queued for fresh roasting and shipment from our Philadelphia roastery.
              </p>
            </div>

            <div className="bg-[#FBF9F5] p-4 rounded-xl border border-[#E2D7C5] text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-[#EFE8DB]">
                <span className="text-[#64748B]">Items Total:</span>
                <span className="font-bold text-[#0C1B2A]">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#EFE8DB]">
                <span className="text-[#64748B]">Shipping:</span>
                <span className="font-bold text-[#059669]">
                  {cartSubtotal >= freeShippingThreshold ? 'FREE ($0.00)' : '$5.95 Standard'}
                </span>
              </div>
              <div className="flex justify-between py-1 pt-2 font-bold text-sm text-[#0C1B2A]">
                <span>Total Paid:</span>
                <span>
                  $
                  {(
                    cartSubtotal +
                    (cartSubtotal >= freeShippingThreshold ? 0 : 5.95)
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCheckoutModalOpen(false);
                setCart([]);
              }}
              className="w-full py-3 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Close &amp; Continue Browsing
            </button>
          </div>
        </div>
      )}

      {/* 8. PLACEHOLDERS & RAOZ WEBSITE MAKER EXPORT INSPECTOR */}
      {isPlaceholdersOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0C1B2A] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#263345] shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Raoz Website Maker Export Inspector
                </h3>
              </div>
              <button
                onClick={() => setIsPlaceholdersOpen(false)}
                className="p-1.5 text-[#94A3B8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Every contact string, brand name, roastery address, and subscription rule in this template is bound to a centralized config object (`src/templates/la-colombe/la-colombe.config.ts`), making it effortless to re-brand or deploy for another specialty coffee client.
            </p>

            <div className="max-h-80 overflow-y-auto space-y-2.5 font-mono text-xs">
              {Object.entries(laColombeConfig.placeholders).map(([key, val]) => (
                <div key={key} className="bg-[#142030] p-3 rounded-lg border border-[#1E2B3E] flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-[#93C5FD] font-semibold">{key}:</span>
                  <span className="text-[#FCE08B] truncate">{String(val)}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Done Inspecting
            </button>
          </div>
        </div>
      )}

      {/* 9. ACCOUNT MODAL */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E2D7C5] shadow-2xl relative space-y-4 text-center">
            <button
              onClick={() => setIsAccountModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#64748B] hover:text-[#0C1B2A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#EFE8DB] text-[#0C1B2A] flex items-center justify-center mx-auto">
              <User className="w-6 h-6" />
            </div>

            <h3 className="font-serif font-bold text-2xl text-[#0C1B2A]">Subscriber Sign In</h3>
            <p className="text-xs text-[#64748B]">Manage your Coffee Club delivery schedule, view receipts, and update shipping details.</p>

            <div className="space-y-3 text-left">
              <div>
                <label className="block text-xs font-bold uppercase text-[#0C1B2A] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-[#CBD5E1] rounded-xl text-xs text-[#0C1B2A] focus:outline-none focus:border-[#0C1B2A]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#0C1B2A] mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-[#CBD5E1] rounded-xl text-xs text-[#0C1B2A] focus:outline-none focus:border-[#0C1B2A]"
                />
              </div>
            </div>

            <button
              onClick={() => {
                alert('Signed in as demo subscriber!');
                setIsAccountModalOpen(false);
              }}
              className="w-full py-3 bg-[#0C1B2A] hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Sign In To Portal
            </button>
          </div>
        </div>
      )}

      {/* 10. REUSABLE FOOTER */}
      <footer className="bg-[#0C1B2A] text-white pt-16 pb-12 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Newsletter Signup Strip */}
          <div className="p-8 bg-[#142232] rounded-3xl border border-[#223549] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Stay In Touch</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                GET 15% OFF YOUR FIRST ROAST
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Be the first to hear about seasonal lot drops, secret cafe events, and subscriber perks.
              </p>
            </div>
            <div className="md:col-span-5 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-[#0C1B2A] border border-[#334155] rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                onClick={() => alert('Thank you for subscribing! Use code WELCOME15 for 15% off.')}
                className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#C29D38] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shrink-0"
              >
                Join
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs text-[#94A3B8]">
            {/* Col 1 Brand */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 text-[#D4AF37]">
                  <img src="/assets/la-colombe/dove-logo.svg" alt="Dove Logo" className="w-full h-full object-contain filter invert" />
                </div>
                <span className="text-lg font-serif font-bold tracking-widest text-white">LA COLOMBE</span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
                America's specialty craft coffee roaster and inventor of the Draft Latte. Headquartered in Philadelphia, Pennsylvania.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12">
                  <img src="/assets/la-colombe/b-corp-badge.svg" alt="Certified B-Corp" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-[#64748B]">Certified B-Corporation Meeting the Highest Standards</span>
              </div>
            </div>

            {/* Col 2 Coffee */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Coffee</h4>
              <ul className="space-y-2">
                <li><button onClick={() => { setActiveTab('coffee'); setCategoryFilter('all'); }} className="hover:text-white transition-colors cursor-pointer">All Roasts</button></li>
                <li><button onClick={() => { setActiveTab('coffee'); setRoastFilter('dark'); }} className="hover:text-white transition-colors cursor-pointer">Dark Roasts</button></li>
                <li><button onClick={() => { setActiveTab('coffee'); setRoastFilter('medium'); }} className="hover:text-white transition-colors cursor-pointer">Medium Roasts</button></li>
                <li><button onClick={() => { setActiveTab('coffee'); setCategoryFilter('gift-boxes'); }} className="hover:text-white transition-colors cursor-pointer">Gift Boxes</button></li>
              </ul>
            </div>

            {/* Col 3 Draft Latte */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Cold Cans</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('draft-latte')} className="hover:text-white transition-colors cursor-pointer">Triple Draft Latte</button></li>
                <li><button onClick={() => setActiveTab('draft-latte')} className="hover:text-white transition-colors cursor-pointer">Pumpkin Spice</button></li>
                <li><button onClick={() => setActiveTab('draft-latte')} className="hover:text-white transition-colors cursor-pointer">Black Cold Brew</button></li>
                <li><button onClick={() => setActiveTab('club')} className="hover:text-white transition-colors cursor-pointer">12-Pack Subscription</button></li>
              </ul>
            </div>

            {/* Col 4 Cafes & Brand */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('cafes')} className="hover:text-white transition-colors cursor-pointer">Cafe Locations (32+)</button></li>
                <li><button onClick={() => setActiveTab('story')} className="hover:text-white transition-colors cursor-pointer">Our 1994 Story</button></li>
                <li><button onClick={() => setIsPlaceholdersOpen(true)} className="hover:text-[#FCE08B] text-[#D4AF37] transition-colors cursor-pointer">Export Placeholders</button></li>
                <li><a href={`mailto:${laColombeConfig.placeholders.customerServiceEmail}`} className="hover:text-white transition-colors">Customer Care</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
            <span>© {new Date().getFullYear()} La Colombe Coffee Roasters. All Rights Reserved.</span>
            <div className="flex gap-4">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
