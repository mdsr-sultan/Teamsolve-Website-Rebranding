# TeamSolve Website

Professional Next.js website for TeamSolve - Knowledge Twin platform for operational excellence.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **UI Components:** shadcn/ui (Radix UI based)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Content:** Markdown + JSON
- **Fonts:** Inter & Plus Jakarta Sans

## Project Structure

```
teamsolve-web/
├── app/                          # Next.js App Router pages
│   ├── (pages)/                  # All website pages
│   ├── layout.tsx                # Root layout with header/footer
│   ├── globals.css               # Global styles & design tokens
│   ├── robots.ts                 # SEO robots configuration
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── manifest.ts               # PWA manifest
├── components/
│   ├── ui/                       # shadcn UI components
│   ├── layout/                   # Header, Footer components
│   ├── sections/                 # Reusable section components
│   └── shared/                   # Shared components (cards, forms, etc.)
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── constants.ts              # Site-wide constants
│   ├── markdown.ts               # Markdown parsing utilities
│   └── structured-data.ts        # SEO structured data schemas
├── content/
│   ├── case-studies/             # Markdown files for case studies
│   ├── blog-posts/               # Markdown files for blog/media
│   └── site-data.json            # General site content
└── public/                       # Static assets

```

## Features

### Design System
- **Color Palette:** Teal/Cyan gradient primary, Yellow/Lime gradient secondary
- **Typography:** Inter for body, Plus Jakarta Sans for headings
- **Responsive:** Mobile-first design with Tailwind breakpoints
- **Animations:** Framer Motion for smooth transitions and interactions

### Pages Implemented
- ✅ Home Page - Complete with hero, statistics, features, testimonials
- ✅ Security Page - Security features and compliance information
- ✅ Integrations Page - Integration capabilities and options
- ✅ Pricing Page - 3-tier pricing structure
- ✅ About Page - Company story, team, partners
- ✅ Case Studies Page - Dynamic markdown-based case studies
- ✅ Media Page - Blog posts and news with tags
- ✅ Contact Page - Contact form with validation
- ✅ Additional utility pages (Terms, Privacy, Careers)

### Key Components
- **HeroSection** - Reusable hero with gradient background
- **CTASection** - Call-to-action with optional form
- **FeatureCard** - Icon-based feature cards with animations
- **StatCard** - Animated statistics with counters
- **TestimonialCard** - Customer testimonials
- **ContactForm** - Validated contact form with React Hook Form + Zod
- **AnimatedCard** - Scroll-triggered animated cards

### SEO & Performance
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Dynamic sitemap
- ✅ Robots.txt
- ✅ PWA manifest
- ✅ Optimized fonts with next/font
- ✅ Responsive images support

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
The site will be available at [http://localhost:3000](http://localhost:3000)

## Content Management

### Adding Case Studies
Create a new `.md` file in `content/case-studies/`:

```markdown
---
title: "Your Case Study Title"
date: "2025-01-27"
company: "Company Name"
excerpt: "Brief description"
image: "/images/case-studies/image.jpg"
linkedinUrl: "https://linkedin.com/..."
---

Your case study content here...
```

### Adding Blog Posts
Create a new `.md` file in `content/blog-posts/`:

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-27"
excerpt: "Brief description"
image: "/images/blog/image.jpg"
linkedinUrl: "https://linkedin.com/..."
tags: ["Tag1", "Tag2"]
---

Your blog post content here...
```

### Updating Site Data
Edit `content/site-data.json` for:
- Partners/logos
- Team members
- Testimonials
- Statistics

## Design Tokens

### Colors (CSS Variables)
```css
--brand-teal: #00BCD4
--brand-teal-light: #4DD0E1
--brand-cyan: #00ACC1
--brand-yellow: #FFEB3B
--brand-lime: #CDDC39
--brand-gray-dark: #1F2937
--brand-gray: #6B7280
--brand-gray-light: #F9FAFB
```

### Typography Scale
- H1: 48-72px (responsive)
- H2: 32-48px
- H3: 24-32px
- Body: 16-18px
- Small: 14px

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Environment Variables
No environment variables required for basic functionality. Add as needed for:
- Email service integration
- Analytics
- CMS connections

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License
Copyright © 2025 TeamSolve. All Rights Reserved.

## Contact
- Website: https://www.teamsolve.com
- Email: info@teamsolve.com
- LinkedIn: https://www.linkedin.com/company/teamsolve
