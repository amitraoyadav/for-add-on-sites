# IISER Pune — Website Template Demo (#17)

## Overview
- **Name:** IISER Pune — Indian Institute of Science Education and Research Pune
- **Template ID:** `iiser-pune` (Slug: `iiser-pune-homepage-demo`)
- **Numeric ID:** `17`
- **Category:** `Education & Coaching` (`cat-education-coaching`)
- **Subcategory:** `Universities & Research Institutes`
- **Reference URL:** `https://www.iiserpune.ac.in/`
- **Component Entry Point:** `src/templates/iiser-pune/IiserPune.tsx`
- **Configuration File:** `src/templates/iiser-pune/iiser-pune.config.ts`
- **Asset Directory:** `public/assets/iiser-pune/`

---

## Design System & Typography
- **Primary Color:** Crimson Red (`#b62126` / `#a9181b`)
- **Secondary Accent:** Institutional Blue (`#0077bf` / `#0066b5`)
- **Neutral Dark:** Charcoal (`#252a2d` / `#171412` / `#231f20`)
- **Backgrounds:** Ice Blue (`#eff6fa`), Warm Cream (`#fef2ec`), Pure White (`#ffffff`)
- **Typography:** Source Sans Pro, Montserrat, system-ui sans-serif

---

## Features & Supported Interactions
1. **Institutional Header & Top Utility Bar:**
   - Official IISER Pune Emblem & Bilingual Brand Inscriptions (English & Hindi)
   - Working Search Modal with live keystroke filtering across departments, programs, news, and institutional tiles
   - Dual Language Switcher (`en` / `हिं` with Hindi UI translations)
   - Accessibility Contrast Controller (High-contrast mode)
   - Font Scaler controls (`A-`, `A`, `A+`)
2. **Interactive Mega Navigation Menu:**
   - 5 Top-Level Categories: About, Research, Education, News & Events, Engage with IISER Pune
   - Sub-columns for all departments, programs, student life, and giving
3. **Hero Gallery Carousel:**
   - 5 Verbatim Slides from the live website:
     - Slide 1119: Elected as Fellows of the National Academy of Sciences India
     - Slide 1118: CNR Rao Education Foundation's National Prize 2026
     - Slide 1116: IBRO Rising Star Award to Dr. Chandrashekhar Borkar
     - Slide 1115: CRS Lifetime Achievement Award to Prof. S. Sivaram
     - Slide 1114: Bridging Science and Enterprise: Kiran Mazumdar-Shaw's visit
   - Pause/Play toggle, Left/Right controls, and Story Reader Modal
4. **Key Institutional Metrics Ribbon:**
   - NIRF #35 Research, #55 Overall, 60%+ PhD progression, 8 Interdisciplinary Departments, 288+ Annual BS-MS intake
5. **Authentic News Cards Carousel:**
   - 8 Official News Stories with date stamps, images, category tags, and reader modal
   - Horizontal scroll with authentic arrow buttons and category filters
6. **Institutional Focus Tiles Grid:**
   - Accolades, In the Media, Alumni Affairs, Campus, Opportunities, Library
7. **Interdisciplinary Departments Explorer:**
   - Tabbed view of all 8 departments: Biology, Chemistry, Data Science, Earth & Climate Science, Humanities & Social Sciences, Mathematics, Physics, Science Media & Education
8. **Degree Programs & Admissions Desk:**
   - BS-MS (IAT), MSc (IIT JAM), Int-PhD, PhD
9. **Campus & Community Section:**
   - 98-Acre Pashan Campus architecture, 100% residential housing, and state-of-the-art facilities
10. **Comprehensive Institutional Footer:**
    - 15 Governance and statutory links
    - India.gov.in official national portal banner
    - Official campus address and telephone
    - Social media channels: LinkedIn, Twitter/X, Facebook, Instagram, YouTube

---

## Asset Manifest

| Asset Name | Local File Path | Source Path on iiserpune.ac.in | Purpose |
|---|---|---|---|
| Color Brand Logo | `public/assets/iiser-pune/logo-color.svg` | `/images/brand/iiser-pune-logo-color-en.svg` | Main header emblem |
| White Brand Logo | `public/assets/iiser-pune/logo-white.svg` | `/images/brand/iiser-pune-logo-white-en.svg` | Footer and mega menu |
| National Portal Banner | `public/assets/iiser-pune/india-gov.jpg` | `/images/footer-tile-links/india.gov.in.jpg` | India.gov.in footer badge |
| Footer Background | `public/assets/iiser-pune/bg-footer.jpg` | `/images/backgrounds/bg-footer.jpg` | Footer backdrop pattern |
| Slide 1119 | `public/assets/iiser-pune/slide-1119.jpg` | `/storage/home-gallery-items/1119/...` | Hero Slide: NASI Fellows |
| Slide 1118 | `public/assets/iiser-pune/slide-1118.jpg` | `/storage/home-gallery-items/1118/...` | Hero Slide: CNR Rao Prize |
| Slide 1116 | `public/assets/iiser-pune/slide-1116.jpg` | `/storage/home-gallery-items/1116/...` | Hero Slide: IBRO Award |
| Slide 1115 | `public/assets/iiser-pune/slide-1115.jpg` | `/storage/home-gallery-items/1115/...` | Hero Slide: CRS Award |
| Slide 1114 | `public/assets/iiser-pune/slide-1114.jpg` | `/storage/home-gallery-items/1114/...` | Hero Slide: Kiran Mazumdar-Shaw |
| News 1686 | `public/assets/iiser-pune/news-1686.jpg` | `/storage/news/1686/...` | Yuva Sangam Phase VI |
| News 1685 | `public/assets/iiser-pune/news-1685.jpg` | `/storage/news/1685/...` | Oceanic Crust Bay of Bengal |
| News 1673 | `public/assets/iiser-pune/news-1673.jpeg` | `/storage/news/1673/...` | Plant Healing Regeneration |
| News 1674 | `public/assets/iiser-pune/news-1674.jpg` | `/storage/news/1674/...` | Mental Well-Being Centre |
| News 1672 | `public/assets/iiser-pune/news-1672.jpg` | `/storage/news/1672/...` | Royal Society of Biology Fellow |
| News 1671 | `public/assets/iiser-pune/news-1671.jpg` | `/storage/news/1671/...` | IASc Bengaluru Fellows |
| News 1669 | `public/assets/iiser-pune/news-1669.jpg` | `/storage/news/1669/...` | 100 Years of Quantum Physics |
| News 1666 | `public/assets/iiser-pune/news-1666.jpg` | `/storage/news/1666/...` | Anne McLaren Award |
| Tile Accolades | `public/assets/iiser-pune/tile-accolades.jpg` | `/storage/home-tiles/bb73aed0-...` | Home Tile: Accolades |
| Tile Media | `public/assets/iiser-pune/tile-media.jpg` | `/storage/home-tiles/6/...` | Home Tile: In the Media |
| Tile Alumni | `public/assets/iiser-pune/tile-alumni.jpg` | `/storage/home-tiles/2/...` | Home Tile: Alumni Affairs |
| Tile Campus | `public/assets/iiser-pune/tile-campus.jpg` | `/storage/home-tiles/3/...` | Home Tile: Campus |
| Tile Opportunities | `public/assets/iiser-pune/tile-opportunities.jpg` | `/storage/home-tiles/4/...` | Home Tile: Opportunities |
| Tile Library | `public/assets/iiser-pune/tile-library.jpg` | `/storage/home-tiles/5/...` | Home Tile: Library |
| Social Icons | `public/assets/iiser-pune/icons/*.svg` | `/images/assets/icons/social/...` | LinkedIn, Twitter, FB, IG, YT |

---

## Integration Safety & Verification
- Isolated styling scope: `.iiser-pune-demo`
- Zero interference with existing templates (#1 to #16)
- Preserves all existing IDs, routes, assets, and dependencies
- Compatible with Raoz Website Maker export standards
