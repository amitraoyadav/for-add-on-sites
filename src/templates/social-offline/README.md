# Template: SOCIAL OFFLINE

## Overview
- **Template ID:** `social-offline`
- **Display Name:** SOCIAL OFFLINE
- **Main Category:** Restaurant, Cafe & Food Business (`cat-food-hospitality`)
- **Subcategory:** Cocktail Bars & Lounges
- **Reference Architecture:** Social Offline India (https://socialoffline.in/ — Neighbourhood Cafe, High-Energy Bar & Collaborative Workspace)
- **Position:** Template #2 in Raoz Demo Factory Fresh Collection
- **Status:** Completed, verified & ready for preview

## Brand Identity & Faithful Recreation
1. **Preserved Original Branding:** Recreated the official SOCIAL OFFLINE visual language, typography, high-energy industrial aesthetics, signature orange/red color highlights, and iconic asset suite (`social-logo.png`, `SOCIAL-Works-Logo.png`, `SOCIAL-Club-logo.png`).
2. **Key Feature Modules:**
   - **Hero Carousel:** 4-slide high-impact slider showcasing all-day work/night play, crafted cocktails, coworking, and antiSOCIAL culture.
   - **Outlets Directory:** Interactive city filters for 14 top locations across Delhi NCR, Mumbai, Bengaluru, Pune, Chandigarh, Kolkata, Hyderabad, and Lucknow, with direct table reservation triggers, phone dialers, and amenity badges.
   - **Khaana & Peena Menu:** Small plates, Baos & dimsums, Mains & biryanis (The Legendary Butter Chicken Biryani), 1000ml LLIIT cocktail towers, and epic desserts with Veg / Non-Veg diet filters and direct order modal.
   - **SOCIAL WRKS Co-Working Space:** Day Pass, 7-Day Flexi, and Monthly Resident pass calculator with 100% food & drink credit redemption workflow.
   - **The Social Club:** Tiered loyalty system (Regular, Insider, Resident, Legend) with coin cashback and milestone benefits.
   - **antiSOCIAL Underground Culture:** Live gigs, indie arts, and community channel hubs.
3. **Interactive Modals:**
   - Table Reservation Modal with date, time slot, guest counter, and instant SMS/booking simulation.
   - Direct Delivery & Partner Ordering Modal (Direct, Zomato, Swiggy).
   - Workpass Booking Modal with F&B credit token generation.
   - Placeholders Config Inspector for downstream Raoz Website Maker transfer.

## Component & Asset Structure
- **Entry Component:** `src/templates/social-offline/SocialOffline.tsx`
- **Config & Datasets:** `src/templates/social-offline/social-offline.config.ts`
- **Static Assets:** `public/assets/social-offline/` (33+ local images, logos, and slide assets)
- **Isolation:** 100% self-contained React functional component with local sub-navigation. Zero dependencies on host routing or global stores.
