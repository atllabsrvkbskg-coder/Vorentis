import React from 'react';
import { Smartphone, Monitor, Apple, CheckCircle2, Clock, XCircle, ShieldCheck } from 'lucide-react';

export const PlatformStatus: React.FC = () => {
  return (
    <section id="platform" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>SECTION 09 • PLATFORM STATUS</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            PLATFORM AVAILABILITY
          </h2>

          <p className="text-[#9AA8B8] text-base sm:text-lg leading-relaxed">
            Transparent release status across our software ecosystem. We present only verified, currently engineered capabilities without speculative projections.
          </p>
        </div>

        {/* 3 Availability Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. ANDROID: AVAILABLE — BETA */}
          <div className="p-8 rounded-2xl bg-[#1A2332] border-2 border-[#00D5FF]/60 shadow-[0_0_30px_rgba(0,213,255,0.12)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#00D5FF] text-[#0A0F1A] font-mono font-bold text-[10px] tracking-widest uppercase rounded-bl-xl">
              AVAILABLE — BETA
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-3">
                CURRENT PLATFORM
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#00D5FF]/40 text-[#00D5FF]">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wider">
                    ANDROID
                  </h3>
                  <div className="text-xs font-mono text-[#00D5FF] font-semibold">
                    AVAILABLE — BETA
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9AA8B8] leading-relaxed mb-6">
                Active Android APK installation package featuring all core security modules: Threat Scan, AI Copilot, Web Protection, SMS Guard, Call Protection, QR Scanner, APK Auditor, and Privacy Vault.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Direct Android Package (.APK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>ARM64 &amp; x86_64 Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Local On-Device Neural Heuristics</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-[11px] font-mono text-[#00D5FF]">
              <span>ACTIVE BUILD STATUS</span>
              <span className="font-bold">BETA CANDIDATE</span>
            </div>
          </div>

          {/* 2. DESKTOP: COMING SOON */}
          <div className="p-8 rounded-2xl bg-[#1A2332]/60 border border-[#1E293B] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#1E293B] text-[#9AA8B8] font-mono font-bold text-[10px] tracking-widest uppercase rounded-bl-xl">
              COMING SOON
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#9AA8B8] uppercase mb-3">
                PLANNED EXPANSION
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-[#9AA8B8]">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wider">
                    DESKTOP
                  </h3>
                  <div className="text-xs font-mono text-[#9AA8B8]">
                    COMING SOON
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9AA8B8] leading-relaxed mb-6">
                Extending VORENTIS threat intelligence architecture to desktop environments, browser integration agents, and unified campus workstation inspection.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-[#9AA8B8]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Architecture Specification Stage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Browser Shield Protocol Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Unified Telemetry Alignment</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-[11px] font-mono text-[#9AA8B8]">
              <span>ROADMAP STATUS</span>
              <span>COMING SOON</span>
            </div>
          </div>

          {/* 3. iOS: NOT AVAILABLE YET */}
          <div className="p-8 rounded-2xl bg-[#1A2332]/40 border border-[#1E293B] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#1E293B] text-[#9AA8B8] font-mono font-bold text-[10px] tracking-widest uppercase rounded-bl-xl">
              NOT AVAILABLE YET
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#9AA8B8] uppercase mb-3">
                HONEST STATUS
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-[#9AA8B8]">
                  <Apple className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wider">
                    iOS
                  </h3>
                  <div className="text-xs font-mono text-[#9AA8B8]">
                    NOT AVAILABLE YET
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9AA8B8] leading-relaxed mb-6">
                iOS is not currently supported. VORENTIS maintains complete technical honesty: iOS requires proprietary sandboxing architectures that are currently in exploratory research.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-[#9AA8B8]">
                <div className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-[#9AA8B8]/60" />
                  <span>No iOS App Store Release</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-[#9AA8B8]/60" />
                  <span>No Simulated iOS Bindings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>Exploratory Technical Research Only</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-[11px] font-mono text-[#9AA8B8]">
              <span>PLATFORM STATUS</span>
              <span>NOT AVAILABLE YET</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlatformStatus;
