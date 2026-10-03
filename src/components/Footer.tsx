import React from 'react';
import { VorentisLogo } from './VorentisLogo';
import { ArrowUp, Mail, Smartphone, Monitor, Apple, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] border-t border-[#1E293B] text-white">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <VorentisLogo size="md" showText={true} showPoweredBy={false} />

            <div className="font-mono text-xs text-[#00D5FF] uppercase tracking-widest font-bold">
              SECURE. INTELLIGENT. PRIVATE.
            </div>

            <div className="text-xs sm:text-sm font-orbitron font-semibold text-white uppercase tracking-wider">
              AI-POWERED DIGITAL SECURITY FOR EDUCATION &amp; SMART CAMPUSES
            </div>

            <p className="text-xs sm:text-sm text-[#9AA8B8] max-w-sm leading-relaxed">
              Developed by <strong className="text-white">ZENTIQ</strong> to empower students and campus ecosystems with explainable, privacy-first mobile threat protection.
            </p>

            <div className="pt-1 text-xs font-mono text-[#9AA8B8]">
              <span className="text-white font-medium">Executive Leadership:</span>{' '}
              <span className="text-[#00D5FF]">Atharva V. — COO, ZENTIQ</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-orbitron font-bold text-xs uppercase tracking-widest text-white">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs text-[#9AA8B8] font-mono">
              <li><a href="#product" className="hover:text-white transition-colors">Platform Interface</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Core Capabilities</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Model</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education &amp; Smart Campuses</a></li>
              <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise Architecture</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Platform Status</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About ZENTIQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact &amp; Inquiries</a></li>
            </ul>
          </div>

          {/* Platform Status & Leadership (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-orbitron font-bold text-xs uppercase tracking-widest text-[#00D5FF]">
              PLATFORM RELEASE STATUS
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332]/60 border border-[#1E293B] space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#9AA8B8] flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#00D5FF]" />
                  Android:
                </span>
                <span className="text-[#00D5FF] font-semibold">Available (Beta)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#9AA8B8] flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-[#9AA8B8]" />
                  Desktop:
                </span>
                <span className="text-[#9AA8B8]">Coming Soon</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#9AA8B8] flex items-center gap-1.5">
                  <Apple className="w-3.5 h-3.5 text-[#9AA8B8]/70" />
                  iOS:
                </span>
                <span className="text-[#9AA8B8]/70">Not Available Yet</span>
              </div>
              <div className="pt-2 border-t border-[#1E293B] flex items-center justify-between text-[11px]">
                <span className="text-[#9AA8B8]">Company:</span>
                <span className="text-white font-semibold">ZENTIQ</span>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <a
                href="#contact"
                className="flex-1 px-5 py-2.5 rounded-lg bg-[#00D5FF] text-[#0A0F1A] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#4DE5FF] transition-colors text-center cursor-pointer shadow-[0_0_16px_rgba(0,213,255,0.3)]"
              >
                Request Demo
              </a>
              <a
                href="mailto:officialzentiq@gmail.com"
                className="px-4 py-2.5 rounded-lg bg-[#1A2332] hover:bg-[#222E42] border border-[#1E293B] hover:border-[#00D5FF]/50 text-[#00D5FF] font-mono text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AA8B8]/80 font-mono">
          <div>
            © 2026 VORENTIS™ by ZENTIQ. All rights reserved. • Contact:{' '}
            <a href="mailto:officialzentiq@gmail.com" className="text-[#00D5FF] hover:underline">
              officialzentiq@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:officialzentiq@gmail.com" className="hover:text-[#00D5FF] transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>Direct Support</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
