# 🌍 Green Earth — Built with Next.js

A modern, responsive website celebrating our planet Earth. Powered by Next.js and optimized for Vercel deployment.

## ✨ Features

- Multi-language support: English, Japanese, Vietnamese
- Clean, responsive UI with Tailwind CSS
- Smooth animations with Framer Motion
- Optimized performance with Next.js 14
- Environment-focused content and design

## 🚀 Quick Start

git clone https://github.com/TranVietTieesn/green-earth.git
cd green-earth
npm install         # or yarn
npm run dev         # or yarn dev

Then open http://localhost:3000

src/
├── components/     # Reusable UI components
├── contexts/       # React context (e.g., language)
├── pages/          # App pages (Next.js routing)
├── styles/         # Global styles (Tailwind)

## 🛠 Technologies

Next.js 14 – Framework for fast, production-grade React apps
TypeScript – Safer, more scalable development
Tailwind CSS – Utility-first styling
Framer Motion – Elegant animations
Lucide React – Icon library

## 🌐 Internationalization (i18n)

Default language: English (en)
Supports: Japanese (ja) and Vietnamese (vi)
Language switching handled client-side with localStorage persistence

## 📱 Responsive Design
Mobile-first layout with adaptive breakpoints:
Mobile: <768px
Tablet: 768–1024px
Desktop: >1024px

# #⚙️ Build & Deployment
Production build
bash
npm run build
npm run start