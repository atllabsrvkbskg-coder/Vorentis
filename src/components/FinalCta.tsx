import React from 'react';
import { ArrowUpRight, Smartphone, Monitor, QrCode, Shield, Download, ExternalLink, Mail } from 'lucide-react';
import { VorentisLogo, VorentisShield } from './VorentisLogo';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-15 pointer-events-none blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse, #00D5FF 0%, rgba(10,15,26,0) 70%)',
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#1A2332]/80 border border-[#1E293B] shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Brand & Action (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <VorentisLogo size="lg" showText={true} showPoweredBy={false} />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0F1A] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase">
                <span>MOBILE THREAT DEFENSE BY ZENTIQ</span>
              </div>

              <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight">
                YOUR DIGITAL WORLD. <br />
                <span className="text-[#00D5FF]">PROTECTED.</span>
              </h2>

              <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#00D5FF] uppercase font-bold">
                SECURE. INTELLIGENT. PRIVATE.
              </div>

              <p className="text-base sm:text-lg text-[#9AA8B8] max-w-2xl leading-relaxed">
                Deploy intelligent threat analysis, on-device neural heuristics, and calibrated risk scoring across your mobile devices and smart campus environments.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  id="final-cta"
                  className="group inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#0A0F1A] bg-[#00D5FF] hover:bg-[#4DE5FF] rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(0,213,255,0.4)] hover:shadow-[0_0_36px_rgba(0,213,255,0.7)] cursor-pointer"
                >
                  <span className="font-orbitron font-bold">REQUEST DEMO</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#product"
                  className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-semibold tracking-[0.14em] text-white hover:text-[#00D5FF] bg-[#1A2332] hover:bg-[#222E42] border border-[#1E293B] hover:border-[#00D5FF]/40 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span className="font-orbitron font-semibold">VIEW PRODUCT</span>
                </a>
              </div>

              {/* Status Note */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#9AA8B8]">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#00D5FF]" />
                  <span>Android (Beta) Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#9AA8B8]" />
                  <span>Desktop Coming Soon</span>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-[#00D5FF] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>officialzentiq@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Column: Mobile Evaluation Target (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0A0F1A] border border-[#1E293B] shadow-inner text-center">
              
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-1">
                MOBILE ARTIFACT ACCESS
              </div>
              <div className="text-xs font-orbitron font-bold text-white mb-4">
                SCAN FOR DIRECT DEVICE ONBOARDING
              </div>

              {/* High-Contrast SVG QR Code with Centered V Shield */}
              <div className="relative p-4 rounded-2xl bg-white shadow-2xl border-4 border-[#1A2332] w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center">
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full"
                  fill="#0A0F1A"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Corner Finder Squares */}
                  {/* Top-Left */}
                  <rect x="10" y="10" width="40" height="40" rx="4" fill="#0A0F1A" />
                  <rect x="16" y="16" width="28" height="28" rx="2" fill="#FFFFFF" />
                  <rect x="22" y="22" width="16" height="16" rx="1" fill="#0A0F1A" />

                  {/* Top-Right */}
                  <rect x="110" y="10" width="40" height="40" rx="4" fill="#0A0F1A" />
                  <rect x="116" y="16" width="28" height="28" rx="2" fill="#FFFFFF" />
                  <rect x="122" y="22" width="16" height="16" rx="1" fill="#0A0F1A" />

                  {/* Bottom-Left */}
                  <rect x="10" y="110" width="40" height="40" rx="4" fill="#0A0F1A" />
                  <rect x="16" y="116" width="28" height="28" rx="2" fill="#FFFFFF" />
                  <rect x="22" y="122" width="16" height="16" rx="1" fill="#0A0F1A" />

                  {/* QR Matrix Data Blocks */}
                  {/* Top Row Dots */}
                  <rect x="60" y="14" width="8" height="8" />
                  <rect x="76" y="14" width="8" height="8" />
                  <rect x="92" y="14" width="8" height="8" />
                  <rect x="68" y="26" width="8" height="8" />
                  <rect x="84" y="26" width="8" height="8" />
                  <rect x="60" y="38" width="8" height="8" />
                  <rect x="76" y="38" width="8" height="8" />
                  <rect x="92" y="38" width="8" height="8" />

                  {/* Middle Left & Right Blocks */}
                  <rect x="14" y="60" width="8" height="8" />
                  <rect x="30" y="60" width="8" height="8" />
                  <rect x="22" y="72" width="8" height="8" />
                  <rect x="38" y="72" width="8" height="8" />
                  <rect x="14" y="84" width="8" height="8" />
                  <rect x="30" y="84" width="8" height="8" />

                  <rect x="118" y="60" width="8" height="8" />
                  <rect x="134" y="60" width="8" height="8" />
                  <rect x="126" y="72" width="8" height="8" />
                  <rect x="142" y="72" width="8" height="8" />
                  <rect x="118" y="84" width="8" height="8" />
                  <rect x="134" y="84" width="8" height="8" />

                  {/* Bottom Row Dots */}
                  <rect x="60" y="114" width="8" height="8" />
                  <rect x="76" y="114" width="8" height="8" />
                  <rect x="92" y="114" width="8" height="8" />
                  <rect x="68" y="126" width="8" height="8" />
                  <rect x="84" y="126" width="8" height="8" />
                  <rect x="60" y="138" width="8" height="8" />
                  <rect x="76" y="138" width="8" height="8" />
                  <rect x="92" y="138" width="8" height="8" />
                  <rect x="114" y="126" width="8" height="8" />
                  <rect x="130" y="138" width="8" height="8" />
                </svg>

                {/* Central Emblem Badge inside QR */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-1.5 rounded-xl bg-[#0A0F1A] border border-[#00D5FF] shadow-lg">
                    <VorentisShield size={24} glow={false} />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-[11px] font-mono text-[#9AA8B8] flex items-center gap-1.5">
                <span>Android Beta Package</span>
                <span className="text-[#00D5FF]">•</span>
                <span className="text-white">v1.0-RC Verified</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCta;
