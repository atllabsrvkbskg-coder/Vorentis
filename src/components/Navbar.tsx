import React, { useState, useEffect } from 'react';
import { VorentisLogo } from './VorentisLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['product', 'security', 'education', 'platform', 'about'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PRODUCT', href: '#product' },
    { label: 'SECURITY', href: '#security' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'PLATFORM', href: '#platform' },
    { label: 'ABOUT', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1A]/95 backdrop-blur-md border-b border-[#1E293B]/80 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]">
          <VorentisLogo size="md" showText={true} showPoweredBy={false} />
        </a>

        {/* Desktop Primary Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 border border-[#1E293B]/60 rounded-full px-4 py-1.5 bg-[#1A2332]/50 backdrop-blur-sm shadow-inner">
          {(navLinks || []).map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-150 rounded-full ${
                  isActive
                    ? 'text-[#00D5FF]'
                    : 'text-[#9AA8B8] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#00D5FF] shadow-[0_0_8px_#00D5FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Build Status */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Android Status Tag */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-[#1A2332]/90 border border-[#1E293B] rounded-lg text-[10px] text-[#9AA8B8] tracking-widest uppercase font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF] shadow-[0_0_6px_#00D5FF]" />
            <span className="text-white font-medium">ANDROID</span>
            <span className="text-[#9AA8B8]/60">•</span>
            <span className="text-[#00D5FF] font-semibold">AVAILABLE — BETA</span>
          </div>

          {/* Primary Navigation CTA */}
          <a
            href="#contact"
            id="nav-cta"
            className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#0A0F1A] bg-[#00D5FF] hover:bg-[#4DE5FF] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,213,255,0.4)] hover:shadow-[0_0_28px_rgba(0,213,255,0.65)] cursor-pointer"
          >
            <span className="font-orbitron font-bold">REQUEST DEMO</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9AA8B8] hover:text-white border border-[#1E293B] rounded bg-[#1A2332]/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1A]/98 border-b border-[#1E293B] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]/60 text-[11px] text-[#9AA8B8] tracking-widest uppercase font-mono">
            <span>PLATFORM STATUS</span>
            <span className="text-[#00D5FF] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
              ANDROID: AVAILABLE — BETA
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {(navLinks || []).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium tracking-wider text-[#9AA8B8] hover:text-white hover:bg-[#1A2332] rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-semibold tracking-wider text-[#0A0F1A] bg-[#00D5FF] hover:bg-[#4DE5FF] rounded-lg shadow-[0_0_16px_rgba(0,213,255,0.3)] cursor-pointer"
            >
              <span className="font-orbitron font-bold">REQUEST DEMO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
