# Template: PHO CAFE

## Overview
- **Template ID:** `pho-cafe`
- **Display Name:** PHO CAFE
- **Main Category:** Restaurant, Cafe & Food Business (`cat-food-hospitality`)
- **Subcategory:** Boutique Hospitality & Dining / Vietnamese Street Food
- **Reference Architecture:** Pho Cafe UK (https://www.phocafe.co.uk/ — Fresh & Healthy Vietnamese Street Food Chain)
- **Position:** Template #3 in Raoz Demo Factory Fresh Collection
- **Status:** Completed, verified & ready for preview

## Brand Identity & Faithful Recreation
1. **Preserved Original Branding:** Recreated the official PHO visual language, trademark red block and cream typography (`fill="#E21837"` / `#EEE4DA`), distinctive floating black rounded pill navigation bar, and authentic asset suite (`pho-logo.svg`, `pho-logo-lines.svg`, `pho-logo-bowl.svg`, `footer-logo.svg`).
2. **Key Feature Modules:**
   - **Hero Section:** Large "VIETNAMESE STREET FOOD" typography banner with steaming pho atmospheric photo (`hero-bg.webp`) and neon lines & bowl emblem.
   - **Promotional Duo Cards:** Red brand cards for "Our Menu" ("Everything is made fresh in each restaurant, every day") and "Pho To Go" ("Order for delivery or Click & Collect").
   - **"Something Pho Everyone" Food Slider:** Interactive carousel of signature dishes (`dish-1.webp` through `dish-4.webp`) with nutrition highlights:
     - 98% Gluten Free (Accredited by Coeliac UK)
     - Nutritious Bone Broths (simmered 12+ hours)
     - Loads of Vegan Options
     - Freshly Cooked Food (0% frozen)
   - **"Find A Pho" Restaurant Finder:** Instant search filter across 45+ locations with UK region tabs (London, South & East, Midlands & North, Scotland & Wales), direct booking, and Click & Collect triggers.
   - **"JUST PHO STUDENTS!" Banner:** High-energy lifestyle photo (`students-promo.webp`) offering 15% off food all year round.
   - **Behind the Broth & Social Mosaic:** Operations voices quotes (Fran, Max, Muthu) and responsive 7-image restaurant gallery.
3. **Interactive Modals:**
   - Table Reservation Modal with date, time, guest selector, dietary notes, and instant booking confirmation receipt.
   - Pho To Go Ordering Modal (Click & Collect vs Deliveroo).
   - Coeliac UK Nutrition & Allergen breakdown modal.
   - Student Discount verification modal.
   - Placeholders Config Inspector for downstream Raoz Website Maker transfer.

## Component & Asset Structure
- **Entry Component:** `src/templates/pho-cafe/PhoCafe.tsx`
- **Config & Datasets:** `src/templates/pho-cafe/pho-cafe.config.ts`
- **Static Assets:** `public/assets/pho-cafe/` (20+ local high-res images, logos, and dish assets)
- **Isolation:** 100% self-contained React functional component with local sub-navigation. Zero dependencies on host routing or global stores.
