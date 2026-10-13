# RAO COLLEGE — Website Template Demo (#18)

## Overview
- **Name:** RAO COLLEGE
- **Tagline:** Learn Today. Lead Tomorrow.
- **Motto:** Knowledge · Innovation · Character · Leadership
- **Template ID:** `rao-college` (Slug: `rao-college`)
- **Numeric ID:** `18`
- **Category:** `Education & Coaching` (`cat-education-coaching`)
- **Subcategory:** `Universities & Colleges`
- **Reference Website:** `https://www.amity.edu/`
- **Component Entry Point:** `src/templates/rao-college/RaoCollege.tsx`
- **Configuration File:** `src/templates/rao-college/rao-college.config.ts`
- **Asset Directory:** `public/assets/rao-college/`

---

## Rebranding & Identity Strategy
- **Complete Rebranding:** All Amity University naming, proprietary marks, and contact credentials were replaced with the original **RAO COLLEGE** collegiate identity.
- **Original Heraldic Emblem:** Custom SVG crest featuring deep navy `#0A192F` and academic gold `#D4AF37`, an open book of learning, the torch of leadership, and excellence stars.
- **Typography:** Serif headings (`Cinzel`, `Playfair Display`, `Georgia`) paired with clean sans-serif body (`Montserrat`, `Inter`).
- **Color Palette:** Deep Navy (`#0A192F` / `#002244`), Restrained Gold (`#D4AF37` / `#F59E0B`), Crisp White (`#FFFFFF`), and Slate neutrals (`#F8FAFC`).

---

## Implemented Pages & Functional Sections

1. **Top Utility Bar & Institutional Header:**
   - Toll-free helpline: `1800 102 8800` & Direct line: `+91 11 4050 8800`
   - Working quick search modal (`⌘K`)
   - Responsive mobile navigation drawer with working open/close toggle
   - Fast links: Home, About Us, Programmes, Admissions, Campus Life, Placements, Events, Contact, Apply Online.
2. **Hero Banner Carousel:**
   - 3 Slides featuring high-res campus photography
   - Autoplay (5.5s timer) with Pause/Play toggle, Left/Right controls, and dots
   - Direct CTAs to course catalog and online admissions desk
3. **Key Institutional Metrics:**
   - 20+ Years Legacy, 500+ Corporate Recruiters, 96% Placement Assistance, 15,000+ Alumni Network, 45+ Labs, 1:18 Faculty-Student Ratio
4. **About RAO COLLEGE Section:**
   - Academic vision, experiential learning framework, and 4 core institutional pillars.
5. **Academic Programmes (6 Core Degrees):**
   - **BCA (Bachelor of Computer Applications)** — Full stack, AI, Cloud, Python
   - **BBA (Bachelor of Business Administration)** — Marketing, Finance, Digital Strategy, E-Cell
   - **B.Com (Hons) (Bachelor of Commerce)** — Taxation, FinTech, CA/CFA prep, Capital Markets
   - **BA (JMC) (Journalism & Mass Comm)** — TV News studio, Public Relations, Digital Media
   - **B.Sc. (Data Science & AI)** — Machine Learning, Big Data, Tableau, SQL
   - **MBA (Master of Business Administration)** — Strategy, Product Management, FinTech
   - Filter tabs: All, Computer & IT, Management, Commerce, Media & Science
   - Interactive Programme Details Modal displaying duration, eligibility, modules, and career roles
6. **Admissions 2026–27 & Live Application Form:**
   - 4-Step application roadmap
   - Working form with frontend validation (Name, Email, Phone, Program, Qualification, City, Query)
   - Real success simulation banner generating unique application reference numbers (`RAO-2026-XXXX`)
7. **Campus Life & Facilities (6 Pillars):**
   - Central Knowledge Library (40,000+ volumes, RFID lending)
   - Advanced Computing & Science Laboratories (GPU workstations)
   - Grand Auditorium & Seminar Halls (1,000 seats, line-array acoustics)
   - Sports Complex & Athletic Grounds (Cricket, football, floodlit basketball)
   - Secure Residential Hostels (24/7 security, Wi-Fi, mess dining)
   - Center for Innovation & Career Readiness
   - Interactive detail modal for each facility
8. **Career Development & Placements:**
   - Corporate Resource Cell (CRC) overview
   - Top recruiter sector directory (Technology, Consulting, Banking, FMCG, Media)
   - Interactive Recruiter Enquiry Modal
9. **Student Voices & Testimonials:**
   - 6 Verified student testimonial cards with real alumni career outcomes
10. **News, Conclaves & Campus Events:**
    - Annual Convocation Walk 2026
    - Tarang 2026 Inter-College Cultural Fest
    - International AI Ethics Conclave
    - National Student Hackathon
    - Student Innovation award banners
11. **Faculty & Academic Leadership:**
    - Principal Dr. Rajeshwar Rao, Dean Dr. Meenakshi Sundaram, Head of Commerce Prof. Arvind K. Saxena, Dr. Nandita Sen
12. **Frequently Asked Questions (Accordion):**
    - Expandable Q&A for admissions, scholarships, hostels, and placements
13. **Contact & Campus Map Information:**
    - Knowledge Campus Sector 62 address, contact numbers, email, working hours, and messaging form
14. **Institutional Footer:**
    - Light logo wordmark, legal notices, degree links, and dynamic copyright

---

## Asset Manifest (`public/assets/rao-college/`)

| File Name | Purpose | Dimensions / Size |
|---|---|---|
| `logo.svg` | Main heraldic logo & wordmark | 460x90 vector SVG |
| `logo-light.svg` | Light/white heraldic logo | 460x90 vector SVG |
| `campus-hero-1.jpg` | Main hero slide & campus aerial view | 213 KB |
| `campus-hero-2.jpg` | Academic buildings & plaza | 193 KB |
| `campus-main.jpg` | Campus center & main quad | 102 KB |
| `campus-library.jpg` | Central knowledge library | 28 KB |
| `campus-sports.jpg` | Sports complex & athletic courts | 34 KB |
| `campus-auditorium.jpg` | Grand 1,000-seater auditorium | 35 KB |
| `campus-hostel.jpg` | Residential student housing | 31 KB |
| `campus-labs.jpg` | Computer & research laboratories | 36 KB |
| `academic-excellence.jpg` | Center for innovation & books | 247 KB |
| `event-convocation.jpg` | Annual Convocation Ceremony | 111 KB |
| `event-cultural.jpg` | Tarang Cultural Festival | 174 KB |
| `event-seminar.jpg` | AI Ethics Research Seminar | 126 KB |
| `event-workshop.jpg` | Innovation Hackathon | 338 KB |
| `student-achievement-1.jpg`| Student Hackathon Winners | 60 KB |
| `student-achievement-2.jpg`| Inter-University Quiz Winners | 50 KB |
| `testimonial-1.jpg` to `6.jpg` | Alumni & student portraits | 15 KB – 56 KB each |

---

## Technical Integration & Safety
- **Scoped Styling:** Bound to `.rao-college-demo` root class.
- **Zero Regression:** All previous 17 templates are unaffected and compiling cleanly.
- **Lazy Loading:** Code-split into its own standalone chunk.
