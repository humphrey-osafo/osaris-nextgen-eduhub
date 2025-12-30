# OSARIS NEXTGEN EDUHUB

A professional website for Osaris NextGen EduHub - an extracurricular service provider for Cambridge schools in Ghana.

## Overview

This website serves as both an informational platform and lead generation tool for Osaris NextGen EduHub, showcasing their comprehensive extracurricular programs in STEM, Sports, Arts, and Leadership.

## Features

- Modern, responsive design optimized for desktop and mobile
- Lead capture forms with Supabase backend
- WhatsApp integration for instant communication
- Comprehensive program showcases
- School and parent-focused content
- Contact and booking forms

## Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Deployment:** Vercel-ready

## Pages

1. **Home** - Hero, programs overview, testimonials, how it works
2. **About Us** - Mission, vision, values, story
3. **Programs** - Detailed program information (STEM, Sports, Arts, Leadership)
4. **Schools** - Benefits, pricing, contract model, safety policies
5. **Parents** - Child benefits, FAQs, skill development
6. **Contact** - Booking form with Supabase integration

## Color Palette

- Electric Blue: #1769FF
- NextGen Green: #00C784
- Midnight Navy: #0A1A2F
- Graphite Gray: #23272F
- Soft White: #F9FBFF
- Neon Yellow: #E9FF00

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Environment Variables

The following environment variables are pre-configured in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## Database Schema

The Supabase database includes:

- `contact_submissions` - Stores form submissions (booking, proposal requests, general inquiries)
- `testimonials` - Stores testimonials from schools and parents

## Customization

To customize the WhatsApp number, edit the `phoneNumber` in:
- `components/WhatsAppButton.tsx`

To update contact information, edit:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Deployment

This project is optimized for Vercel deployment and will work automatically when connected to a Git repository.