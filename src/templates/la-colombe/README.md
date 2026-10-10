# Template: LA COLOMBE

## Overview
- **Template ID:** `la-colombe`
- **Display Name:** LA COLOMBE
- **Main Category:** Restaurant, Cafe & Food Business (`cat-food-hospitality`)
- **Subcategory:** Cafes and Coffee Shops
- **Reference Architecture:** La Colombe Coffee Roasters (https://www.lacolombe.com/ — America's Premier Specialty Craft Coffee Roaster & Pioneer of the Draft Latte)
- **Position:** Template #4 in Raoz Demo Factory Fresh Collection ("4TH SITE UNDER COFFEE CAFE")
- **Status:** Completed, verified & ready for preview

## Brand Identity & Faithful Recreation
1. **Preserved Original Branding:** Recreated the official La Colombe visual language, iconic soaring Dove emblem, serif all-caps typography, deep navy (`#0C1B2A`), artisanal cream background (`#FBF9F5`), and gold accents (`#D4AF37` / `#FCE08B`).
2. **Signature Product Portfolio:**
   - **Corsica:** Classic full-bodied Dark Roast with baker's chocolate, red wine, and smoky molasses notes.
   - **Nizza:** Sweet and fruity Medium Roast espresso foundation with milk chocolate, roasted nuts, and honeycomb.
   - **Monaco:** French-style Medium-Dark Roast with caramelized sugar, stewed plum, and candied pecan.
   - **Fall Blend:** Limited seasonal roast with spiced cider, hearth-roasted chestnut, and dark chocolate.
   - **Bleu:** USDA Certified Organic Dark Roast with smoky marshmallow and molasses.
   - **Mexico:** San Roque direct-trade Single Origin with crisp almond and honeycomb.
   - **Bestsellers Gift Box:** Luxury foil-embossed trio case.
3. **Draft Latte & Cold Brew Innovation:**
   - 9 fl oz slim can presentations for **Triple Draft Latte**, **Pumpkin Spice Draft Latte**, and **Black Cold Brew** (zero sugar).
   - Patented nitrogen microfoam dosing and cold-pressed espresso technology explanation.
4. **Subscription / Coffee Club Ecosystem:**
   - Gold Shield membership badge (`membership-gold-shield.svg`).
   - 15% discount calculator with flexible 1, 2, 3, or 4 week delivery cadences.
   - Free shipping progression bar for orders over $40.
5. **Interactive Store Experiences:**
   - **Shop All Coffee Collections** with live roast level filtering (Dark, Medium-Dark, Medium).
   - **Find Your Match Quiz:** 3-step interactive roast recommendation quiz.
   - **Quick View / Full Product Detail Modal:** Bag size selection, grind selection (Whole Bean, Drip, French Press, Espresso), and One-Time vs Subscribe & Save.
   - **Sliding Shopify Cart Drawer:** Item quantity modification, free shipping progress bar, and checkout simulation receipt.
   - **Live Search Modal:** Instant search across products, tasting notes, and categories.
   - **Cafes Directory:** Filterable by city (Philadelphia, New York, Chicago, Washington D.C., Boston, Austin) with hours, address, and flagship badges.
   - **Placeholders Inspector:** One-click modal to inspect and transfer business parameters for downstream Raoz Website Maker export.

## Component & Asset Structure
- **Entry Component:** `src/templates/la-colombe/LaColombe.tsx`
- **Config & Datasets:** `src/templates/la-colombe/la-colombe.config.ts`
- **Static Assets:** `public/assets/la-colombe/` (`dove-logo.svg`, `membership-gold-shield.svg`, `free-shipping.svg`, `b-corp-badge.svg`, `hero-bg.svg`, and custom roast box & can vector graphics).
- **Isolation:** 100% self-contained React functional component with local navigation tabs. Zero dependencies on host routing or global stores.
