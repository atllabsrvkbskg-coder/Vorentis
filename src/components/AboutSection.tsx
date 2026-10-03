import React from 'react';
import { Shield, Target, Cpu, Terminal, FileCode } from 'lucide-react';
import { VorentisLogo } from './VorentisLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Architecture Mission (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase">
              <span>EXECUTIVE &amp; PLATFORM LEADERSHIP</span>
            </div>

            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight">
              ENGINEERED FOR THE MODERN CAMPUS SURFACE.
            </h2>

            <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed">
              VORENTIS™ is an AI-powered mobile cybersecurity platform engineered by <strong className="text-white">ZENTIQ</strong> to help students and digitally connected educational environments identify, understand, and respond to potential digital-security risks.
            </p>

            <p className="text-sm sm:text-base text-[#9AA8B8] leading-relaxed">
              Cybersecurity is the core product; higher education and smart campuses represent the operational application sector. Under the leadership of <strong className="text-white">Atharva V. (COO, ZENTIQ)</strong>, VORENTIS addresses real student touchpoints with on-device heuristics, calibrated threat scoring, explainable AI guidance, and zero telemetry harvesting.
            </p>

            {/* Core Values / Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#1A2332]/60 border border-[#1E293B]">
                <div className="font-orbitron font-bold text-sm text-white uppercase mb-1">
                  TECHNICAL PRECISION
                </div>
                <div className="text-xs text-[#9AA8B8] leading-relaxed">
                  Deterministic inspection grounded in observable cryptographic, header, and redirection indicators.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1A2332]/60 border border-[#1E293B]">
                <div className="font-orbitron font-bold text-sm text-white uppercase mb-1">
                  EXPLAINABLE INTELLIGENCE
                </div>
                <div className="text-xs text-[#9AA8B8] leading-relaxed">
                  Transforming cryptic security warnings into clear, actionable advice via the Aegis AI Copilot.
                </div>
              </div>
            </div>

            {/* Enterprise Architecture & Verification Benchmarks */}
            <div className="pt-4 border-t border-[#1E293B]/70">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#00D5FF] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                <span>ARCHITECTURAL INTEGRITY &amp; EVALUATION STANDARDS</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white">
                <span className="px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                  Zero-Telemetry Privacy Guarantee
                </span>
                <span className="px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                  On-Device Neural Inference
                </span>
                <span className="px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                  Deterministic Risk Scoring
                </span>
                <span className="px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                  Education &amp; Smart Campus Focus
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Specification Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1A2332]/90 border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
              <VorentisLogo size="sm" showTagline={false} />
              <span className="text-[10px] font-mono text-[#00D5FF] bg-[#00D5FF]/10 px-2 py-0.5 rounded border border-[#00D5FF]/30">
                ACTIVE REPO: VORENTIS-MOBILE
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Brand:</span>
                <span className="font-bold text-white">VORENTIS™</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Company:</span>
                <span className="text-white font-bold">ZENTIQ</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Executive Leadership:</span>
                <span className="text-[#00D5FF] font-semibold">Atharva V. — COO, ZENTIQ</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Category:</span>
                <span className="text-white">AI-Powered Mobile Cybersecurity</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Tagline:</span>
                <span className="text-[#00D5FF]">SECURE. INTELLIGENT. PRIVATE.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Supporting Line:</span>
                <span className="text-white">YOUR DIGITAL WORLD. PROTECTED.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Product Philosophy:</span>
                <span className="text-white font-bold">DETECT. ANALYZE. SCORE. RESPOND.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1E293B]/50">
                <span className="text-[#9AA8B8]">Primary Sector:</span>
                <span className="text-white font-medium">Education &amp; Smart Campuses</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#9AA8B8]">Platform:</span>
                <span className="text-[#00D5FF] font-semibold">Android Available (Beta)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-[11px] text-[#9AA8B8] leading-relaxed">
              "We believe security technology earns institutional authority through verifiable architectural rigor, restrained design, and unwavering technical honesty."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
