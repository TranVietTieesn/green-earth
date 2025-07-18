import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: t.nav_home, key: 'home' },
    { href: '/about', label: t.nav_about, key: 'about' },
    { href: '/features', label: t.nav_features, key: 'features' },
    { href: '/gallery', label: language === 'en' ? 'Gallery' : language === 'ja' ? 'ギャラリー' : 'Thư viện', key: 'gallery' },
  ];

  const languages = [
    { code: 'en' as const, label: 'EN', name: 'English' },
    { code: 'ja' as const, label: 'JP', name: '日本語' },
    { code: 'vi' as const, label: 'VI', name: 'Tiếng Việt' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-2xl animate-spin-slow">🌍</div>
              <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform">
                {t.hero_title}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    router.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Language Selector */}
              <div className="flex items-center space-x-1 bg-primary-50 rounded-full p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                      language === lang.code
                        ? 'bg-primary-500 text-white shadow-sm'
                        : 'text-primary-600 hover:bg-primary-100'
                    }`}
                    title={lang.name}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="container-custom py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    router.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-slate-400">🌐</span>
                <div className="flex space-x-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                        language === lang.code
                          ? 'bg-primary-500 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container-custom section-padding">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <blockquote className="text-lg md:text-xl font-medium text-slate-300">
                {t.footer_quote}
              </blockquote>
              <cite className="text-primary-400 font-medium">
                {t.footer_author}
              </cite>
            </div>
            
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-400">
                &copy; 2025 {t.hero_title}. Made by VTea for our beautiful Earth 🌍
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 