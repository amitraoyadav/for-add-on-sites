# Template: TELL-A-TALE STUDIOS

## Overview
- **Template ID:** `tell-a-tale`
- **Display Name:** TELL-A-TALE STUDIOS
- **Main Category:** Photography, Studio & Cinematography (`cat-photography`)
- **Subcategory:** Corporate and Event Photography
- **Reference Architecture:** Tell-a-Tale Studios (https://tell-a-tale.in/ — Corporate & Event Photographer Mumbai)
- **Position:** Template #7 in Raoz Demo Factory Collection
- **Status:** Completed, verified & ready for preview

## Brand Identity & Faithful Recreation
1. **Preserved Original Branding & Aesthetics:**
   - Recreated official Tell-a-Tale Studios logo (`/assets/tell-a-tale/logo.webp`), clean editorial typography, and monochrome design language with warm cream backgrounds (`#FAF9F5`) and subtle gold/amber highlights (`#C59B27`).
2. **Key Feature Modules:**
   - **Hero Section:** Preserved original H1: *"Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage"* and opening philosophy.
   - **Trusted by Institutions:** Features Australian Consulate, Asia Society, JP Morgan, TEDx, ICEF, Preqin, Hitachi, and People Matters.
   - **Four Core Operating Pillars:**
     1. We understand high-trust rooms
     2. We shoot for actual usage
     3. We keep people comfortable
     4. We deliver usable images
   - **Clean 4-Step Process:** Share the brief → We suggest the setup → We cover the shoot → You receive edited images.
   - **Portfolio & Gallery:** 14 real compositions across Corporate Events, Corporate Portraits, Celebrations, Food & Styling, Products, and Wedding Stories with category filters and high-resolution Lightbox modal.
   - **Cinematography & Films:** Video cards for leadership summits and culinary craft with interactive video player modal.
   - **Founders Story:** Word-for-word preserved story of Nikhil B. (documentary & corporate eye) and Mamta Kalambe (creative stylist & celebration warmth).
   - **Journal & Blog:** Field notes on corporate conference planning, authentic executive headshots, and restaurant food styling.
   - **Interactive Shoot Inquiry Modal:** Full form with shoot category picker, date selector, venue notes, and instant receipt simulation.
   - **Floating Actions & Direct Contact:** Direct WhatsApp trigger (+91 9619891066), click-to-call, studio email (`shoots@tell-a-tale.in`), and physical studio address in Marol, Andheri East, Mumbai.

## Component & Asset Structure
- **Entry Component:** `src/templates/tell-a-tale/TellATale.tsx`
- **Config & Datasets:** `src/templates/tell-a-tale/tell-a-tale.config.ts`
- **Static Assets:** `public/assets/tell-a-tale/` (including `logo.webp`, `corporate-event-hero.jpg`, `corporate-event-panel.webp`, `corporate-headshot.webp`, `celebration-birthday.webp`, `food-biryani.webp`, `food-butter-chicken.jpg`, `food-mutton-curry.jpg`, `product-cosmetics.jpg`, `founders-nikhil-mamta.jpg`, `wedding-praais.jpg`, `baby-maternity.jpg`).
- **Isolation:** 100% self-contained React functional component with local tab navigation and zero global store dependencies.
