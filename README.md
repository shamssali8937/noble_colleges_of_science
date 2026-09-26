# Noble Science College, Wan Bhachran

> **"علم و حکمت کا گہوارہ"** — *A Heaven of Knowledge*  
> Official web portal and digital archive for **Noble Science College, Wan Bhachran**, affiliated with the Board of Intermediate and Secondary Education (BISE) Sargodha. Established in 2009 by Principal Ehsanullah Malik.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange.svg)](https://pnpm.io/)

---

## 🏛️ Institutional Profile

- **Institution**: Noble Science College (نوبل سائنس کالج واں بھچراں)
- **Location**: Near Old Musa Khel Road, Wan Bhachran, District Mianwali, Punjab, Pakistan
- **Founded**: 2009 by Principal Ehsanullah Malik
- **Affiliation**: Board of Intermediate and Secondary Education (BISE) Sargodha
- **Scope**: Continuous academic continuum from **Nursery through Class 12 (Higher Secondary)**
- **Admissions Policy**: Open walk-in admissions, no entrance test, informal readiness interview with the Principal, and financial scholarships for needy and high-merit candidates.

---

## 🎨 Visual Identity & Heritage Collegiate Design

The visual language follows the structural and typographic discipline of a traditional collegiate institution (inspired by the heritage DNA of institutions like the University of Oxford):

1. **Typographic Discipline**:
   - **Headings**: `Lora` (with `Source Serif 4` / Georgia fallbacks) — traditional editorial serif with restrained proportions, conveying institutional gravitas.
   - **Body**: `Source Sans 3` — clean, neutral, highly legible sans-serif engineered for reading comfort.
   - **Section Eyebrows / Labels**: Small caps and tracked uppercase (`uppercase tracking-[0.2em] text-[10px]–[11px] font-semibold text-[#8F0D19]`) with horizontal hairline accents.
   - **Urdu Script**: `Noto Nastaliq Urdu` for authentic bilingual presentation and institutional motto.
   - **Pull-Quotes & Captions**: `Lora Italic` for formal declarations, founding charters, and figure captions.

2. **Logo-Derived Color System**:
   - **Primary Accent (`#8F0D19`)**: Deep Crimson derived from the college logo, used for section eyebrows, active indicators, and primary action buttons.
   - **Secondary Accent (`#1D5B56`)**: Deep Pine for board certifications, WhatsApp links, and science badges.
   - **Parchment Backgrounds (`#FAF7F2`, `#F2ECE1`)**: Warm paper tones delivering high legibility and tactile warmth.
   - **Typographic Charcoal (`#1F1A19`, `#453D3B`, `#756A67`)**: Sustained contrast without pure harsh black.
   - **Hairline Rules (`#E2DDD5`)**: Line-based structural dividers and borders replacing rounded SaaS cards.

3. **High-Resolution Archival Photography Framing**:
   - Rectangular plates with 1px hairline framing and formal figure captioning lines (e.g., *Figure: Science laboratory station supporting practical chemistry, physics, and biology curricula.*).

---

## 📚 Academic Programs (Nursery to Class 12)

| Group / Level | Focus & Curriculum | Examination Body |
| :--- | :--- | :--- |
| **F.Sc Pre-Medical** | Biology, Chemistry, Physics, Urdu, English, Islamic Studies / Pak Studies | BISE Sargodha |
| **F.Sc Pre-Engineering** | Mathematics, Physics, Chemistry, Urdu, English, Islamic Studies / Pak Studies | BISE Sargodha |
| **ICS Computer Science** | Computer Science, Mathematics, Physics / Statistics / Economics | BISE Sargodha |
| **I.Com Commerce** | Principles of Accounting, Economics, Commercial Geography, Banking | BISE Sargodha |
| **General Arts** | Humanities, Social Sciences, Civics, Education, Islamic Studies | BISE Sargodha |
| **Foundational Schooling** | Nursery, Kindergarten, Primary (1–5), Middle (6–8), Matric (9–10) | Standard Curriculum / BISE |

---

## 🚀 Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/) with fast HMR and client bundle optimization
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` CSS tokens
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector SVG Brand Icons for WhatsApp & Facebook
- **Motion**: [Motion (Framer Motion)](https://motion.dev/) for subtle, dignified collegiate transitions
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Project Architecture

```text
noble_colleges_of_science/
├── public/
│   ├── college-logo.jpg           # Official college crest / mark
│   ├── favicon.svg                # Vector collegiate seal favicon (Est. 2009)
│   └── images/
│       ├── college-logo.jpg       # High-res official brand crest
│       ├── principal-ehsanullah-malik.jpg # Founder portrait
│       └── campus/                # High-res educational campus photography
│           ├── campus-exterior.jpg
│           ├── campus-building.jpg
│           ├── science-laboratory.jpg
│           ├── computer-lab.jpg
│           ├── commerce-study.jpg
│           ├── humanities-arts.jpg
│           ├── library-reading.jpg
│           ├── sports-grounds.jpg
│           ├── campus-gate.jpg
│           ├── classroom-lecture.jpg
│           ├── student-assembly.jpg
│           ├── academic-awards.jpg
│           └── admissions-desk.jpg
├── src/
│   ├── components/
│   │   ├── common/                # CollegeLogo, BrandIcons, PageHeader
│   │   ├── layout/                # Header, UtilityBar, DesktopNav, MobileNav, Footer
│   │   ├── sections/              # Hero, Intro, MissionVision, Academics, Principal,
│   │   │                          # Facilities, Admissions, Gallery, ClosingCta
│   │   └── ui/                    # Button, CtaButton, Container, Section, Heading
│   ├── data/
│   │   └── collegeData.ts         # Verified SRS data model & institutional text
│   ├── lib/                       # Utilities and animation configs
│   ├── pages/                     # Full interior pages (About, Academics, Admissions, etc.)
│   ├── types/                     # TypeScript models for navigation, programs, facilities
│   ├── App.tsx                    # Main application router and view controller
│   ├── index.css                  # Design tokens, typography rules & Tailwind theme
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML5 shell with Google Fonts & collegiate metadata
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development Server

Run the development server locally:

```bash
pnpm run dev
```

Open your browser at `http://localhost:5173/` (or the port specified in your console).

### Production Build

Compile and bundle the production assets:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

---

## 📞 Institutional Contacts & Links

- **Principal**: Ehsanullah Malik
- **Campus Address**: Near Old Musa Khel Road, Wan Bhachran, District Mianwali, Punjab, Pakistan
- **Telephone / WhatsApp**: `0333-6831370`
- **Direct WhatsApp API**: [wa.me/923336831370](https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions.)
- **Facebook Community**: [نوبل سائنس کالج واں بھچراں](https://www.facebook.com)

---

<!-- Designed by Shams Ali Mehdi (https://shams-portfolio-nine.vercel.app) -->
Designed & developed by **Nexappra**.

