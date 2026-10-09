import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Wine,
  Coffee,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  X,
  Users,
  Info,
  Menu as MenuIcon,
  ShoppingBag,
  ExternalLink,
  Award,
  Flame,
  MessageSquare,
  Compass,
  ArrowRight
} from 'lucide-react';
import { sazyCafeConfig } from './sazy-cafe.config';

interface MenuItem {
  id: string;
  name: string;
  category: 'dining' | 'sushi' | 'drinks' | 'dessert' | 'takeout';
  price: string;
  description: string;
  dietary?: string[];
  pairing?: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  // --- DINING (Small & Large Plates) ---
  {
    id: 'd1',
    name: 'A5 Wagyu Beef Sliders',
    category: 'dining',
    price: '$24',
    description: 'Brioche buns, caramelized shallot jam, black truffle aioli, pickled daikon radish.',
    dietary: ['Signature'],
    pairing: 'Smoked Japanese Whisky Old Fashioned',
    badge: 'Chef Favorite'
  },
  {
    id: 'd2',
    name: 'Maine Lobster Tacos (3 pcs)',
    category: 'dining',
    price: '$26',
    description: 'Crispy wonton taco shell, yuzu avocado mousse, oscietra caviar, micro cilantro.',
    dietary: ['GF Option'],
    pairing: 'Junmai Daiginjo Sake'
  },
  {
    id: 'd3',
    name: 'Glazed Chilean Seabass',
    category: 'dining',
    price: '$48',
    description: 'Saikyo sweet white miso marinade, baby bok choy, ginger dashi emulsion, crispy lotus root.',
    dietary: ['GF'],
    pairing: 'Cloudy Bay Sauvignon Blanc',
    badge: 'Guest Classic'
  },
  {
    id: 'd4',
    name: 'Australian Lamb Chop Toban Yaki',
    category: 'dining',
    price: '$44',
    description: 'Sizzling ceramic plate, sansho pepper glaze, foraged maitake mushrooms, shiso butter.',
    dietary: ['GF'],
    pairing: 'Napa Valley Cabernet Sauvignon'
  },
  {
    id: 'd5',
    name: 'Truffle Warm Edamame',
    category: 'dining',
    price: '$12',
    description: 'Steamed young soy pods, white truffle oil, Maldon smoked sea salt crystals, shichimi togarashi.',
    dietary: ['Vegan', 'GF']
  },

  // --- SUSHI & RAW BAR ---
  {
    id: 's1',
    name: 'Bluefin Toro & Kaluga Caviar Nigiri',
    category: 'sushi',
    price: '$32',
    description: 'Fatty bluefin tuna belly flown fresh from Toyosu market, golden kaluga caviar, nikiri soy reduction.',
    dietary: ['Raw', 'GF'],
    badge: 'Daily Reserve'
  },
  {
    id: 's2',
    name: 'SAZY Signature Dragon Roll',
    category: 'sushi',
    price: '$24',
    description: 'Tempura tiger prawn, freshwater unagi, avocado crown, kabayaki drizzle, toasted white sesame.',
    dietary: ['Roll']
  },
  {
    id: 's3',
    name: 'Hamachi Yellowtail Carpaccio',
    category: 'sushi',
    price: '$22',
    description: 'Thinly sliced yellowtail, serrano pepper slice, garlic ponzu reduction, golden yuzu pearls.',
    dietary: ['Raw', 'GF'],
    badge: 'Top Pick'
  },
  {
    id: 's4',
    name: 'Hokkaido Scallop & Black Truffle Crudo',
    category: 'sushi',
    price: '$28',
    description: 'Sweet sea scallops, shaved Italian winter truffle, blood orange reduction, pink sea salt.',
    dietary: ['Raw', 'GF']
  },
  {
    id: 's5',
    name: 'Spicy King Salmon & Crispy Rice',
    category: 'sushi',
    price: '$20',
    description: 'Pan-crisped sushi rice cakes, tartare of Ora King salmon, serrano chile, sweet soy drizzle.',
    dietary: ['Raw']
  },

  // --- ARTISAN COFFEE & DRINKS ---
  {
    id: 'dr1',
    name: 'Kyoto-Style 12-Hour Cold Drip',
    category: 'drinks',
    price: '$9',
    description: 'Slow extraction single-origin Ethiopian Yirgacheffe, notes of bergamot, jasmine, and dried apricot.',
    dietary: ['Coffee']
  },
  {
    id: 'dr2',
    name: 'Matcha Tonic & Yuzu Blossom',
    category: 'drinks',
    price: '$10',
    description: 'Ceremonial grade Uji matcha, sparkling fever-tree tonic, Japanese yuzu citrus nectar.',
    dietary: ['Mocktail'],
    badge: 'House Special'
  },
  {
    id: 'dr3',
    name: 'Smoked Hibiki Espresso Old Fashioned',
    category: 'drinks',
    price: '$22',
    description: 'Japanese Hibiki Harmony whisky, artisanal single-origin espresso syrup, Angostura, cherrywood smoke.',
    dietary: ['Cocktail'],
    badge: 'Signature Craft'
  },
  {
    id: 'dr4',
    name: 'Lychee Blossom Empress Spritz',
    category: 'drinks',
    price: '$18',
    description: 'Empress 1908 botanical gin, sweet lychee liqueur, sparkling prosecco, edible orchid petal.',
    dietary: ['Cocktail']
  },
  {
    id: 'dr5',
    name: 'Dassai 23 Junmai Daiginjo (Glass)',
    category: 'drinks',
    price: '$28',
    description: 'Milled to 23% of original grain. Velvety texture, delicate melon aroma with an ethereal finish.',
    dietary: ['Sake']
  },

  // --- DESSERT & PATISSERIE ---
  {
    id: 'ds1',
    name: 'Warm Vanilla Soufflé Cheesecake',
    category: 'dessert',
    price: '$16',
    description: 'Baked to order Japanese-style cotton soufflé, Madagascar vanilla bean anglaise, candied kumquat.',
    dietary: ['Vegetarian'],
    badge: 'Baked Fresh'
  },
  {
    id: 'ds2',
    name: 'Matcha Basque Burnt Cheesecake',
    category: 'dessert',
    price: '$14',
    description: 'Creamy caramelised crust, ceremonial Uji green tea infusion, seasonal raspberry sorbet quenelle.',
    dietary: ['Vegetarian']
  },
  {
    id: 'ds3',
    name: 'Warm Sticky Banana Mochi Pudding',
    category: 'dessert',
    price: '$15',
    description: 'Caramelized banana bread, chewy sweet rice mochi, miso butterscotch drizzle, toasted coconut gelato.',
    dietary: ['Vegetarian']
  },

  // --- TAKEOUT & CATERING BENTOS ---
  {
    id: 't1',
    name: 'Chef’s Nigiri & Sashimi Omakase Box',
    category: 'takeout',
    price: '$65',
    description: '10 pieces of master sashimi & nigiri selection (Toro, Hamachi, Salmon, Scallop, Wagyu), fresh wasabi.',
    badge: 'Delivery Special'
  },
  {
    id: 't2',
    name: 'Robata Wagyu & Black Cod Bento',
    category: 'takeout',
    price: '$52',
    description: 'Charred miso black cod, A5 wagyu striploin bites, steamed koshihikari rice, truffle edamame.',
    badge: 'Best Seller'
  }
];

export default function SazyCafe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<'dining' | 'sushi' | 'drinks' | 'dessert' | 'takeout'>('dining');
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [privateEventModalOpen, setPrivateEventModalOpen] = useState(false);
  const [eventSuccess, setEventSuccess] = useState(false);

  // Reservation form state
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '2026-10-16',
    time: '19:00',
    seatingArea: 'Main Dining Room',
    notes: ''
  });

  // Takeout Cart state
  const [cart, setCart] = useState<{ [key: string]: number }>({
    's1': 1,
    'd1': 2
  });

  const filteredMenuItems = MENU_ITEMS.filter((item) => item.category === activeMenuTab);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSuccess(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEventSuccess(true);
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(cart).forEach(([itemId, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === itemId);
      if (item && qty > 0) {
        const p = parseFloat(item.price.replace('$', ''));
        total += p * qty;
      }
    });
    return total.toFixed(2);
  };

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] font-sans antialiased selection:bg-[#d4af37] selection:text-black">
      {/* 1. TOP ANNOUNCEMENT & CONCIERGE BAR */}
      <div className="bg-[#121418] border-b border-[#21252e] px-4 sm:px-6 py-2 text-xs text-[#a0a8b7] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#d4af37] font-semibold tracking-wider uppercase text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            Open Today · {sazyCafeConfig.placeholders.businessHours}
          </span>
          <span className="hidden sm:inline text-[#3a4150]">|</span>
          <span className="hidden sm:inline text-xs">
            Artisanal Coffee Bar & Japanese-Inspired Fine Dining
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`tel:${sazyCafeConfig.placeholders.phone}`}
            className="flex items-center gap-1 text-[#a0a8b7] hover:text-[#d4af37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden md:inline font-mono">{sazyCafeConfig.placeholders.phone}</span>
          </a>
          <button
            onClick={() => setReservationModalOpen(true)}
            className="text-[#d4af37] hover:underline font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            Book Table
          </button>
        </div>
      </div>

      {/* 2. STICKY HEADER & LUXURY NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#1f232b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-22 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#14161c] group-hover:border-[#d4af37] transition-colors shadow-lg shadow-[#d4af37]/10">
              <span className="font-serif text-lg font-bold text-[#d4af37] tracking-wider">S</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] text-[#f3f4f6] uppercase font-bold group-hover:text-[#d4af37] transition-colors">
                SAZY CAFE
              </span>
              <p className="text-[9px] tracking-[0.3em] text-[#9ca3af] uppercase font-medium">
                Coffee Lounge & Gastronomy
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#d1d5db]">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">
              The Story
            </a>
            <a href="#menu" className="hover:text-[#d4af37] transition-colors">
              Menus
            </a>
            <a href="#happy-hour" className="hover:text-[#d4af37] transition-colors">
              Happy Hour
            </a>
            <a href="#private-dining" className="hover:text-[#d4af37] transition-colors">
              Private Dining
            </a>
            <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
              Spaces
            </a>
            <a href="#location" className="hover:text-[#d4af37] transition-colors">
              Location
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setOrderModalOpen(true)}
              className="px-4 py-2.5 border border-[#374151] hover:border-[#d4af37] text-[#e5e7eb] hover:text-[#d4af37] text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Takeout</span>
            </button>
            <button
              onClick={() => setReservationModalOpen(true)}
              className="px-5 py-2.5 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs uppercase tracking-widest font-bold rounded-sm transition-all shadow-md shadow-[#d4af37]/20 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d1d5db] hover:text-[#d4af37] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101217] border-b border-[#232733] px-6 py-6 space-y-4 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              The Story
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              Culinary & Coffee Menus
            </a>
            <a
              href="#happy-hour"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              Happy Hour (3–5 PM)
            </a>
            <a
              href="#private-dining"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              Private Events & Buyouts
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              Atmosphere & Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#1b1f29] uppercase tracking-wider text-xs"
            >
              Hours & Location
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setReservationModalOpen(true);
                }}
                className="w-full py-3 bg-[#d4af37] text-[#0b0c0e] text-xs uppercase tracking-widest font-bold rounded-sm text-center"
              >
                Reserve a Table
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOrderModalOpen(true);
                }}
                className="w-full py-3 bg-[#181a20] border border-[#2d3340] text-[#d1d5db] text-xs uppercase tracking-widest font-semibold rounded-sm text-center"
              >
                Order Takeout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION — LUXURY ATMOSPHERE */}
      <section className="relative overflow-hidden py-24 sm:py-36 border-b border-[#1f232b] bg-gradient-to-b from-[#15171d] via-[#0b0c0e] to-[#0b0c0e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2b2414_0%,transparent_60%)] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#16181f]/80 text-[#d4af37] text-xs uppercase tracking-[0.25em] mb-8 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Elevated Japanese-Inspired Dining & Coffee Bar</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[#f3f4f6] font-light leading-[1.08] mb-8">
            Elevated Gastronomy, <br />
            <span className="italic font-normal text-[#d4af37]">Artisanal Vibe</span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#9ca3af] text-base sm:text-lg font-light leading-relaxed mb-12">
            Nestled in a distinguished Victorian landmark setting, SAZY CAFE fuses precision sushi craft with artisanal coffee culture. Experience a curated harmony of Toyosu-market sashimi, A5 Wagyu, and single-origin Kyoto extractions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setReservationModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all shadow-xl shadow-[#d4af37]/25 cursor-pointer"
            >
              Reserve a Table
            </button>
            <a
              href="#menu"
              className="w-full sm:w-auto px-9 py-4 border border-[#374151] hover:border-[#d4af37] text-[#f3f4f6] hover:text-[#d4af37] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all cursor-pointer text-center"
            >
              Explore Menus
            </a>
            <button
              onClick={() => setOrderModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 bg-[#14161c] hover:bg-[#1c1f27] border border-[#262a35] text-[#d1d5db] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Order Online</span>
            </button>
          </div>

          {/* Atmosphere Specs Banner */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-[#1f232b] pt-10">
            <div className="p-4 bg-[#121419] border border-[#1f232b] rounded-sm">
              <span className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold block mb-1">
                Location Setting
              </span>
              <div className="text-sm font-serif text-[#f3f4f6] font-medium">Historic Victorian Sanctuary</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{sazyCafeConfig.placeholders.address}</div>
            </div>
            <div className="p-4 bg-[#121419] border border-[#1f232b] rounded-sm">
              <span className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold block mb-1">
                Sushi & Raw Bar
              </span>
              <div className="text-sm font-serif text-[#d4af37] font-medium">Toyosu Flown-Fresh</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">Bluefin Toro, Caviar & Nigiri</div>
            </div>
            <div className="p-4 bg-[#121419] border border-[#1f232b] rounded-sm">
              <span className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold block mb-1">
                Artisan Beverage Bar
              </span>
              <div className="text-sm font-serif text-[#f3f4f6] font-medium">Single-Origin & Rare Sakes</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">Kyoto Cold Drip & Craft Cocktails</div>
            </div>
            <div className="p-4 bg-[#121419] border border-[#1f232b] rounded-sm">
              <span className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold block mb-1">
                Hours of Hospitality
              </span>
              <div className="text-sm font-serif text-[#f3f4f6] font-medium">Open 7 Days a Week</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">Happy Hour: Mon–Fri 3–5 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE STORY / ABOUT SECTION */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#f3f4f6] font-light mt-2 mb-6 leading-tight">
              A Vibe-Driven Approach to <br />
              <span className="italic font-normal text-[#d4af37]">Elevated Fine Dining</span>
            </h2>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
              At SAZY CAFE, we redefine the modern restaurant experience by combining world-class culinary rigor with a vibrant, welcoming social atmosphere. Set inside an architectural jewel, our venue transitions effortlessly from morning single-origin coffee rituals to evening omakase journeys and craft cocktail alchemy.
            </p>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
              Our culinary leadership sources fish flown directly from Tokyo's Toyosu Market, pairing seasonal catches with prime A5 Wagyu, house-crafted robata sauces, and artisanal patisserie baked fresh daily.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-[#16181f] flex items-center justify-center font-serif text-lg text-[#d4af37]">
                SC
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#f3f4f6]">Executive Culinary Guild</h4>
                <p className="text-xs text-[#6b7280]">SAZY CAFE Birmingham</p>
              </div>
            </div>
          </div>

          {/* 4 Feature Spaces Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#121419] border border-[#1f232b] hover:border-[#d4af37]/40 transition-all rounded-sm">
              <Flame className="w-6 h-6 text-[#d4af37] mb-3" />
              <h3 className="font-serif text-base text-[#f3f4f6] mb-1">Sushi & Raw Bar</h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Watch sushi masters craft delicate nigiri, sashimi crudo, and caviar-topped rolls over cedar counters.
              </p>
            </div>
            <div className="p-6 bg-[#121419] border border-[#1f232b] hover:border-[#d4af37]/40 transition-all rounded-sm">
              <Coffee className="w-6 h-6 text-[#d4af37] mb-3" />
              <h3 className="font-serif text-base text-[#f3f4f6] mb-1">Artisan Coffee Lounge</h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Slow-drip Kyoto towers, ceremonial matcha, and specialty micro-lot espresso extracted with scientific precision.
              </p>
            </div>
            <div className="p-6 bg-[#121419] border border-[#1f232b] hover:border-[#d4af37]/40 transition-all rounded-sm">
              <Wine className="w-6 h-6 text-[#d4af37] mb-3" />
              <h3 className="font-serif text-base text-[#f3f4f6] mb-1">Cocktail & Sake Bar</h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Japanese whiskies, Junmai Daiginjo sake flights, and smoked house craft cocktails by master mixologists.
              </p>
            </div>
            <div className="p-6 bg-[#121419] border border-[#1f232b] hover:border-[#d4af37]/40 transition-all rounded-sm">
              <Users className="w-6 h-6 text-[#d4af37] mb-3" />
              <h3 className="font-serif text-base text-[#f3f4f6] mb-1">Private Dining Room</h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Intimate private salons accommodating up to 56 guests for bespoke celebrations and corporate dinners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CULINARY & BEVERAGE MENUS */}
      <section id="menu" className="py-24 border-t border-b border-[#1f232b] bg-[#0e1014]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f3f4f6] font-light mt-1 mb-4">
              Culinary & Beverage Menus
            </h2>
            <p className="text-sm text-[#9ca3af] max-w-xl mx-auto">
              Carefully curated small & large plates, fresh sushi, single-origin coffees, and house patisseries.
            </p>
          </div>

          {/* Menu Categories Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'dining' as const, label: 'Dining (Small & Large Plates)' },
              { id: 'sushi' as const, label: 'Sushi, Nigiri & Sashimi' },
              { id: 'drinks' as const, label: 'Coffee, Cocktails & Sake' },
              { id: 'dessert' as const, label: 'Desserts & Sweets' },
              { id: 'takeout' as const, label: 'Takeout Omakase Boxes' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMenuTab(tab.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer font-medium ${
                  activeMenuTab === tab.id
                    ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#14161c] text-[#a0a8b7] hover:text-[#f3f4f6] border border-[#232733]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-[#121419] border border-[#1f232b] hover:border-[#d4af37]/40 transition-all rounded-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-baseline gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg text-[#f3f4f6] group-hover:text-[#d4af37] transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] uppercase tracking-wider text-[#d4af37] bg-[#221e14] border border-[#d4af37]/40 px-2 py-0.5 rounded-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-base font-serif text-[#d4af37] font-medium shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1a1e27] flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    {item.dietary?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-[#6b7280] font-mono border border-[#2b303d] px-1.5 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.pairing && (
                      <span className="hidden sm:inline text-[11px] text-[#a0a8b7] italic">
                        Pairing: {item.pairing}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      addToCart(item.id);
                      setOrderModalOpen(true);
                    }}
                    className="text-[11px] text-[#d4af37] hover:underline font-medium cursor-pointer"
                  >
                    + Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Notice */}
          <div className="mt-12 p-4 bg-[#121419] border border-[#1f232b] rounded-sm text-xs text-[#6b7280] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <p>
              Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please notify your server of any dietary allergies. Gluten-free soy sauce is available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HAPPY HOUR SPOTLIGHT */}
      <section id="happy-hour" className="py-20 bg-gradient-to-r from-[#14161c] via-[#101217] to-[#14161c] border-b border-[#1f232b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1c1a14] text-[#d4af37] text-xs uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            Social Hour Tradition
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#f3f4f6] font-light mb-4">
            Happy Hour at the Sushi & Cocktail Lounge
          </h2>
          <p className="text-sm text-[#9ca3af] max-w-xl mx-auto mb-8">
            Monday through Friday from 3:00 PM to 5:00 PM. Special pricing on organic edamame, rock shrimp tempura, Kobe sliders, spicy tuna maki, and signature craft cocktails.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
            <div className="p-4 bg-[#0e1014] border border-[#232733] rounded-sm">
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                $10 Hand Rolls & Maki
              </span>
              <p className="text-xs text-[#9ca3af]">Spicy Tuna, King Salmon Avocado, California Roll with Real Crab.</p>
            </div>
            <div className="p-4 bg-[#0e1014] border border-[#232733] rounded-sm">
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                $8 Small Bites
              </span>
              <p className="text-xs text-[#9ca3af]">Truffle Edamame, Crispy Duck Meatballs, Kobe Sliders (Single).</p>
            </div>
            <div className="p-4 bg-[#0e1014] border border-[#232733] rounded-sm">
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                $10 Craft Drinks
              </span>
              <p className="text-xs text-[#9ca3af]">Lychee Spritz, Selected Junmai Sake, Asahi Draft, Highballs.</p>
            </div>
          </div>

          <button
            onClick={() => setReservationModalOpen(true)}
            className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all cursor-pointer"
          >
            Reserve Lounge Seating
          </button>
        </div>
      </section>

      {/* 7. PRIVATE DINING & EVENTS */}
      <section id="private-dining" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Bespoke Entertaining
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#f3f4f6] font-light mt-1 mb-6 leading-tight">
              Private Dining & Celebrations
            </h2>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
              Whether hosting an intimate corporate dinner, milestone anniversary, or full buyout reception, SAZY CAFE offers customizable event spaces with dedicated sommelier and sushi chef service.
            </p>
            <div className="space-y-3 text-xs text-[#d1d5db] mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>The Victorian Dining Salon: Seated capacity up to 56 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>The Sushi & Cocktail Lounge Buyout: Cocktail reception up to 80 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Custom printed prix-fixe tasting menus with corporate branding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Full AV, sound system control & private valet coordination</span>
              </div>
            </div>
            <button
              onClick={() => setPrivateEventModalOpen(true)}
              className="px-8 py-3.5 bg-[#121419] border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0b0c0e] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all cursor-pointer"
            >
              Inquire for Private Dining
            </button>
          </div>

          <div className="p-8 bg-[#121419] border border-[#1f232b] rounded-sm space-y-6">
            <h3 className="font-serif text-xl text-[#f3f4f6]">Event Inquiry Hotline</h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Contact our Private Events Director directly to check dates and receive tailored package options.
            </p>
            <div className="p-4 bg-[#181a22] border border-[#272c3a] rounded-sm space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#6b7280]">Direct Line:</span>
                <span className="text-white font-mono">{sazyCafeConfig.placeholders.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7280]">Email Concierge:</span>
                <span className="text-[#d4af37]">events@sazycafe.local</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7280]">Lead Time:</span>
                <span className="text-white">48 hours for private parties</span>
              </div>
            </div>
            <button
              onClick={() => setPrivateEventModalOpen(true)}
              className="w-full py-3 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs uppercase tracking-widest font-bold rounded-sm transition-all cursor-pointer"
            >
              Request Event Packet
            </button>
          </div>
        </div>
      </section>

      {/* 8. ATMOSPHERE & GALLERY */}
      <section id="gallery" className="py-24 border-t border-[#1f232b] bg-[#0c0d11]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Aesthetic
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#f3f4f6] font-light mt-1 mb-4">
              Atmosphere & Visual Spaces
            </h2>
            <p className="text-sm text-[#9ca3af] max-w-lg mx-auto">
              A curated harmony of historic Victorian warmth, Japanese minimalism, and contemporary lounge energy.
            </p>
          </div>

          {/* Stylized Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#121419] border border-[#1f232b] p-6 rounded-sm flex flex-col justify-between h-64 hover:border-[#d4af37]/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono">01 · Space</span>
                <h3 className="font-serif text-xl text-[#f3f4f6] mt-1 mb-2">The Omakase Bar</h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Natural white cedar sushi bar where master chefs prepare live nigiri with ceremonial precision.
                </p>
              </div>
              <span className="text-xs text-[#d4af37] flex items-center gap-1 font-medium">
                Seats 14 Guests · Live Prep
              </span>
            </div>

            <div className="bg-[#121419] border border-[#1f232b] p-6 rounded-sm flex flex-col justify-between h-64 hover:border-[#d4af37]/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono">02 · Space</span>
                <h3 className="font-serif text-xl text-[#f3f4f6] mt-1 mb-2">The Victorian Parlor</h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Exposed brickwork, plush velvet banquettes, low mood lighting, and curated art collection.
                </p>
              </div>
              <span className="text-xs text-[#d4af37] flex items-center gap-1 font-medium">
                Main Dining · Full Menu Service
              </span>
            </div>

            <div className="bg-[#121419] border border-[#1f232b] p-6 rounded-sm flex flex-col justify-between h-64 hover:border-[#d4af37]/50 transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono">03 · Space</span>
                <h3 className="font-serif text-xl text-[#f3f4f6] mt-1 mb-2">The Coffee & Spirits Bar</h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Single-origin cold drip stations by day, rare Japanese whisky & cocktail mixology by evening.
                </p>
              </div>
              <span className="text-xs text-[#d4af37] flex items-center gap-1 font-medium">
                All-Day Lounge & Mixology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOURS, LOCATION, VALET & CONTACT */}
      <section id="location" className="py-24 border-t border-[#1f232b] bg-[#0b0c0e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Hours Card */}
          <div className="p-8 bg-[#121419] border border-[#1f232b] rounded-sm space-y-4">
            <Clock className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-xl text-[#f3f4f6]">Service Hours</h3>
            <div className="space-y-2 text-xs text-[#9ca3af]">
              <div className="flex justify-between py-1 border-b border-[#1b1f29]">
                <span>Monday – Thursday</span>
                <span className="text-white font-medium">3:00 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1f29]">
                <span>Friday</span>
                <span className="text-white font-medium">3:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1f29]">
                <span>Saturday</span>
                <span className="text-white font-medium">12:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1f29]">
                <span>Sunday</span>
                <span className="text-white font-medium">12:00 PM – 9:30 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-[#d4af37] font-medium">
                Happy Hour: Mon – Fri 3:00 PM – 5:00 PM
              </div>
            </div>
          </div>

          {/* Location & Valet Card */}
          <div className="p-8 bg-[#121419] border border-[#1f232b] rounded-sm space-y-4">
            <MapPin className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-xl text-[#f3f4f6]">Location & Valet</h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Located in the heart of downtown Birmingham inside the historic mansion.
            </p>
            <div className="p-3 bg-[#181a20] border border-[#242936] rounded-sm text-xs text-white font-medium">
              {sazyCafeConfig.placeholders.address}
            </div>
            <div className="space-y-1.5 text-xs text-[#9ca3af]">
              <p>• Complimentary curbside valet available from 5:00 PM daily.</p>
              <p>• Municipal parking garage available adjacent on Chester Street.</p>
            </div>
          </div>

          {/* Reservation Concierge */}
          <div className="p-8 bg-[#121419] border border-[#1f232b] rounded-sm space-y-4">
            <Phone className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-xl text-[#f3f4f6]">Reservations</h3>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Walk-ins are warmly welcomed in our sushi lounge and cocktail bar. Reservations are recommended for main dining room seatings.
            </p>
            <div className="text-xs text-[#d4af37] font-mono font-medium">
              Concierge: {sazyCafeConfig.placeholders.phone}
            </div>
            <button
              onClick={() => setReservationModalOpen(true)}
              className="w-full py-3 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs uppercase tracking-widest font-bold rounded-sm transition-all cursor-pointer"
            >
              Book Instant Table
            </button>
          </div>
        </div>
      </section>

      {/* 10. LUXURY FOOTER */}
      <footer className="border-t border-[#1f232b] bg-[#07080a] py-16 text-xs text-[#6b7280]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-3">
            <span className="text-xl font-serif tracking-[0.2em] text-[#f3f4f6] uppercase font-bold">
              SAZY CAFE
            </span>
            <p className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-medium">
              Birmingham, Michigan
            </p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              A vibe-driven approach to fine dining. Elevated Japanese-inspired cuisine, premium sushi, and artisanal coffee culture.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-3">Quick Navigation</h4>
            <div className="space-y-2 text-xs text-[#9ca3af]">
              <a href="#about" className="block hover:text-[#d4af37] transition-colors">The Story</a>
              <a href="#menu" className="block hover:text-[#d4af37] transition-colors">Dining & Raw Bar Menus</a>
              <a href="#happy-hour" className="block hover:text-[#d4af37] transition-colors">Social Happy Hour</a>
              <a href="#private-dining" className="block hover:text-[#d4af37] transition-colors">Private Dining & Buyouts</a>
              <a href="#location" className="block hover:text-[#d4af37] transition-colors">Location & Service Hours</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-3">Online & Inquiries</h4>
            <div className="space-y-2 text-xs text-[#9ca3af]">
              <button
                onClick={() => setReservationModalOpen(true)}
                className="block hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                Online Table Booking
              </button>
              <button
                onClick={() => setOrderModalOpen(true)}
                className="block hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                Curbside Takeout / Bento
              </button>
              <button
                onClick={() => setPrivateEventModalOpen(true)}
                className="block hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                Private Event Inquiry
              </button>
              <a
                href={sazyCafeConfig.placeholders.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[#d4af37] transition-colors"
              >
                Instagram: {sazyCafeConfig.placeholders.instagramLink}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-3">Raoz Demo Factory</h4>
            <div className="p-3 bg-[#111317] border border-[#1f232b] rounded-sm text-[11px] text-[#a0a8b7] space-y-1">
              <div className="font-semibold text-white">Template ID: sazy-cafe</div>
              <div>Category: Restaurant, Cafe & Food Business</div>
              <div>Subcategory: Cafes and Coffee Shops</div>
              <div className="text-[#d4af37]">Status: 100% Isolated & Verified</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-[#16181f] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#4b5563]">
          <span>© 2026 SAZY CAFE. All rights reserved. Professional Demo Template.</span>
          <span className="font-mono">Raoz Demo Factory Collection · Template #1</span>
        </div>
      </footer>

      {/* 11. INTERACTIVE RESERVATION MODAL */}
      {reservationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121419] border border-[#2b303d] max-w-lg w-full rounded-sm p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setReservationModalOpen(false);
                setReservationSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#f3f4f6]"
            >
              <X className="w-5 h-5" />
            </button>

            {reservationSuccess ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#f3f4f6] mb-2">Table Requested</h3>
                <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{reservation.name || 'Valued Guest'}</span>. Your table request for <span className="text-white font-semibold">{reservation.guests} guests</span> on <span className="text-white font-semibold">{reservation.date}</span> at <span className="text-white font-semibold">{reservation.time}</span> in <span className="text-[#d4af37]">{reservation.seatingArea}</span> has been received. Our concierge will send a confirmation SMS to your phone.
                </p>
                <button
                  onClick={() => {
                    setReservationModalOpen(false);
                    setReservationSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-[#d4af37] text-[#0b0c0e] text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    Table Booking · SAZY CAFE
                  </span>
                  <h3 className="font-serif text-2xl text-[#f3f4f6] mt-0.5">Reserve Your Seating</h3>
                  <p className="text-xs text-[#9ca3af]">Please note: Seating times are held for 15 minutes.</p>
                </div>

                <form onSubmit={handleReservationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                      Guest Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={reservation.name}
                      onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                      className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Guests
                      </label>
                      <select
                        value={reservation.guests}
                        onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6+">6+ (Large Party)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Seating Zone
                      </label>
                      <select
                        value={reservation.seatingArea}
                        onChange={(e) => setReservation({ ...reservation, seatingArea: e.target.value })}
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      >
                        <option value="Main Dining Room">Main Dining Room</option>
                        <option value="Sushi & Omakase Counter">Sushi Counter</option>
                        <option value="Cocktail & Coffee Lounge">Cocktail & Coffee Lounge</option>
                        <option value="Garden Terrace">Garden Terrace</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={reservation.date}
                        onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Time Slot
                      </label>
                      <select
                        value={reservation.time}
                        onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      >
                        <option value="17:00">5:00 PM (Early Seating)</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM (Prime Seating)</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM (Late Lounge)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                      Phone Number (for SMS Confirmation)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (248) 555-0199"
                      value={reservation.phone}
                      onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                      className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                      Dietary or Anniversary Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Birthday celebration, gluten-free preference"
                      value={reservation.notes}
                      onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
                      className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-xs text-[#f3f4f6] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs font-bold uppercase tracking-widest rounded-sm transition-all mt-2 cursor-pointer"
                  >
                    Confirm Table Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 12. INTERACTIVE ONLINE TAKEOUT MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121419] border border-[#2b303d] max-w-lg w-full rounded-sm p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setOrderModalOpen(false);
                setOrderSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#f3f4f6]"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-600 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#f3f4f6] mb-2">Order Scheduled</h3>
                <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                  Your takeout order of <span className="text-white font-semibold">${calculateTotal()}</span> is scheduled for curbside pickup at <span className="text-[#d4af37]">{sazyCafeConfig.placeholders.address}</span>. Pickup estimate is 30 minutes from confirmation.
                </p>
                <button
                  onClick={() => {
                    setOrderModalOpen(false);
                    setOrderSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-[#d4af37] text-[#0b0c0e] text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    Curbside Pickup · SAZY CAFE
                  </span>
                  <h3 className="font-serif text-2xl text-[#f3f4f6] mt-0.5">Your Takeaway Cart</h3>
                  <p className="text-xs text-[#9ca3af]">Freshly packed in insulated thermal bento containers.</p>
                </div>

                <div className="space-y-3 max-h-56 overflow-y-auto pr-1 mb-6 border-b border-[#212633] pb-4">
                  {Object.entries(cart).map(([itemId, qty]) => {
                    const item = MENU_ITEMS.find((m) => m.id === itemId);
                    if (!item || qty <= 0) return null;
                    return (
                      <div key={itemId} className="flex items-center justify-between text-xs bg-[#171a22] p-3 rounded-sm border border-[#232835]">
                        <div>
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-[11px] text-[#d4af37]">{item.price} each</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setCart({ ...cart, [itemId]: Math.max(0, qty - 1) })}
                            className="w-6 h-6 rounded bg-[#212633] text-white flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                          <span className="font-mono text-white px-1.5">{qty}</span>
                          <button
                            onClick={() => setCart({ ...cart, [itemId]: qty + 1 })}
                            className="w-6 h-6 rounded bg-[#212633] text-white flex items-center justify-center font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-sm mb-6 font-serif">
                  <span className="text-[#a0a8b7]">Order Estimated Total:</span>
                  <span className="text-xl text-[#d4af37] font-semibold">${calculateTotal()}</span>
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Ellis"
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-xs text-[#f3f4f6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9ca3af] mb-1">
                        Pickup Time
                      </label>
                      <select className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-xs text-[#f3f4f6] outline-none">
                        <option>ASAP (30–35 min)</option>
                        <option>In 1 hour</option>
                        <option>This evening (6:30 PM)</option>
                        <option>This evening (7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs font-bold uppercase tracking-widest rounded-sm transition-all cursor-pointer"
                  >
                    Place Takeaway Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 13. PRIVATE EVENT INQUIRY MODAL */}
      {privateEventModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121419] border border-[#2b303d] max-w-lg w-full rounded-sm p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setPrivateEventModalOpen(false);
                setEventSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#f3f4f6]"
            >
              <X className="w-5 h-5" />
            </button>

            {eventSuccess ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#f3f4f6] mb-2">Inquiry Submitted</h3>
                <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                  Thank you. Our Private Events Director will review availability for your requested date and email custom menu packets within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setPrivateEventModalOpen(false);
                    setEventSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-[#d4af37] text-[#0b0c0e] text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    Private Buyouts & Events
                  </span>
                  <h3 className="font-serif text-2xl text-[#f3f4f6] mt-0.5">Private Dining Request</h3>
                  <p className="text-xs text-[#9ca3af]">Accommodates 12 to 120 guests across our historic spaces.</p>
                </div>

                <form onSubmit={handleEventSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block uppercase tracking-wider text-[#9ca3af] mb-1">
                      Organizer / Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Heritage Group"
                      className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block uppercase tracking-wider text-[#9ca3af] mb-1">
                        Guest Count
                      </label>
                      <input
                        type="number"
                        min="8"
                        max="120"
                        defaultValue="25"
                        required
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-[#9ca3af] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        defaultValue="2026-11-20"
                        className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[#9ca3af] mb-1">
                      Event Type
                    </label>
                    <select className="w-full bg-[#171a22] border border-[#282d3a] focus:border-[#d4af37] rounded-sm px-3 py-2 text-sm text-[#f3f4f6] outline-none">
                      <option>Corporate Dinner & Presentation</option>
                      <option>Milestone Birthday / Anniversary</option>
                      <option>Rehearsal Dinner / Reception</option>
                      <option>Full Restaurant Mansion Buyout</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#d4af37] hover:bg-[#e8c87b] text-[#0b0c0e] text-xs font-bold uppercase tracking-widest rounded-sm transition-all cursor-pointer mt-2"
                  >
                    Submit Event Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
