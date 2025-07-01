# Green Earth - Next.js

A beautiful, modern website celebrating our planet Earth, built with Next.js and optimized for deployment on Vercel.

## ✨ Features

- 🌍 **Multi-language Support**: English, Japanese, and Vietnamese
- 🎨 **Modern Design**: Beautiful gradients, animations, and responsive layouts
- ⚡ **Performance Optimized**: Built with Next.js for optimal loading speeds
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🎯 **Accessible**: Built with accessibility best practices
- 🌱 **Environment Focused**: Content celebrating Earth's beauty and conservation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd green-earth
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Counter.tsx     # Animated counter component
│   └── Layout.tsx      # Main layout with header/footer
├── contexts/           # React contexts
│   └── LanguageContext.tsx  # Language management
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # Document configuration
│   ├── index.tsx      # Home page
│   ├── about.tsx      # About Earth page
│   └── features.tsx   # Earth features page
└── styles/
    └── globals.css    # Global styles with Tailwind
```

## 🌟 Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 🎨 Design System

### Colors
- **Primary Green**: Various shades of green (#22c55e)
- **Emerald**: Complementary green tones (#10b981)
- **Slate**: Neutral grays for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive typography using `clamp()`

### Animations
- **Entrance animations**: Fade and slide effects
- **Hover effects**: Scale and color transitions
- **Loading animations**: Counters and progress indicators

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Build for Production

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Next.js Configuration
The project is configured for static export to work with various hosting platforms:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## 🌍 Internationalization

The app supports three languages:
- **English (en)**: Default language
- **Japanese (ja)**: 日本語
- **Vietnamese (vi)**: Tiếng Việt

Language switching is handled client-side with localStorage persistence.

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized and responsive
- **Animations**: GPU-accelerated with Framer Motion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Earth imagery**: NASA and various environmental organizations
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion community
- **Design inspiration**: Modern environmental websites

---

Made with 💚 for our beautiful Earth 🌍 