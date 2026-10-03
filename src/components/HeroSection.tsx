import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, ShieldCheck, Cpu, Smartphone, Activity, CheckCircle2, Lock, AlertTriangle, Radio, QrCode, Play, Monitor, Wifi } from 'lucide-react';
import { VorentisShield } from './VorentisLogo';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
}) => {
  const [phoneTab, setPhoneTab] = useState<'dashboard' | 'intercept' | 'scan'>('dashboard');
  const [isLiveScanning, setIsLiveScanning] = useState<boolean>(false);
  const [scanStep, setScanStep] = useState<number>(64);

  const handleRunRadar = () => {
    setPhoneTab('scan');
    setIsLiveScanning(true);
    setScanStep(20);
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLiveScanning(false);
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('product');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex items-center bg-[#0A0F1A]"
    >
      {/* Background Architectural Grid & Tactical HUD Geometry */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Top subtle ambient teal glow - strictly restrained, enterprise optical focus */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-15 pointer-events-none blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse, #00D5FF 0%, rgba(26,35,50,0) 70%)',
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Product Positioning & Headlines (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Brand Credential & Eyebrow */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A2332]/90 border border-[#1E293B] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D5FF] shadow-[0_0_8px_#00D5FF]" />
              <span className="font-orbitron font-bold text-xs tracking-wider text-white">VORENTIS™</span>
              <span className="px-2 py-0.5 rounded-md bg-[#00D5FF]/15 border border-[#00D5FF]/40 text-[#00D5FF] font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
                BY ZENTIQ
              </span>
              <span className="text-[#1E293B] font-bold hidden sm:inline">•</span>
              <span className="font-mono text-[10px] tracking-wider text-[#9AA8B8] uppercase hidden sm:inline">
                Atharva V. — COO, ZENTIQ
              </span>
            </div>

            {/* Tagline */}
            <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#00D5FF] uppercase font-bold mb-3">
              SECURE. INTELLIGENT. PRIVATE.
            </div>

            {/* Primary Positioning Headline */}
            <h1 className="font-orbitron font-extrabold text-white text-3xl sm:text-4xl md:text-5xl xl:text-[3.4rem] leading-[1.14] tracking-tight uppercase mb-4">
              AI-POWERED DIGITAL SECURITY <br />
              <span className="text-[#00D5FF]">FOR EDUCATION &amp; SMART CAMPUSES</span>
            </h1>

            {/* Supporting Line */}
            <div className="font-mono text-xs sm:text-sm text-white/90 uppercase tracking-widest mb-5 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
              <span>YOUR DIGITAL WORLD. PROTECTED.</span>
            </div>

            {/* Supporting Statement */}
            <p className="text-[#9AA8B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              VORENTIS is an AI-powered mobile cybersecurity platform designed to help students, faculty, and digitally connected educational environments identify, understand, and respond to potential digital-security risks. Powered by on-device neural heuristics and a zero-telemetry architecture.
            </p>

            {/* Primary Action Suite */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#product"
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#0A0F1A] bg-[#00D5FF] hover:bg-[#4DE5FF] rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(0,213,255,0.4)] hover:shadow-[0_0_36px_rgba(0,213,255,0.7)] cursor-pointer"
              >
                <span className="font-orbitron font-bold">EXPLORE PLATFORM</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em] text-white hover:text-[#00D5FF] bg-[#1A2332]/80 hover:bg-[#1A2332] border border-[#1E293B] hover:border-[#00D5FF]/50 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span className="font-orbitron">REQUEST DEMO</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-[#00D5FF]" />
              </a>
            </div>

            {/* Platform Availability Matrix & Subtle Product-Status Indicator */}
            <div className="pt-6 border-t border-[#1E293B]/80 w-full max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D5FF] shadow-[0_0_8px_#00D5FF]" />
                  <div>
                    <div className="text-[9px] font-mono tracking-widest text-[#9AA8B8] uppercase">PLATFORM BUILD</div>
                    <div className="text-xs font-orbitron font-semibold text-white">
                      ANDROID <span className="text-[#00D5FF] text-[10px]">— BETA</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D5FF]/80 shadow-[0_0_6px_#00D5FF]" />
                  <div>
                    <div className="text-[9px] font-mono tracking-widest text-[#9AA8B8] uppercase">ARCHITECTURE</div>
                    <div className="text-xs font-orbitron font-semibold text-white">
                      ON-DEVICE <span className="text-[#00D5FF] text-[10px]">— ZERO TELEMETRY</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D5FF]/60" />
                  <div>
                    <div className="text-[9px] font-mono tracking-widest text-[#9AA8B8] uppercase">TARGET ECOSYSTEM</div>
                    <div className="text-xs font-orbitron font-semibold text-white">
                      ENTERPRISE <span className="text-[#00D5FF] text-[10px]">&amp; CAMPUS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Product Intelligence Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Subtle Ambient Behind Phone */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#00D4FF]/10 blur-3xl pointer-events-none" />

            {/* Quick Interactive Screen Selectors directly above phone */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141D2E]/90 border border-[#1E293B] mb-3 z-20">
              <button
                type="button"
                onClick={() => setPhoneTab('dashboard')}
                className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  phoneTab === 'dashboard'
                    ? 'bg-[#00D4FF] text-[#0B0F17] font-bold shadow-sm'
                    : 'text-[#A6B0C3] hover:text-white'
                }`}
              >
                HUD
              </button>
              <button
                type="button"
                onClick={() => setPhoneTab('intercept')}
                className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  phoneTab === 'intercept'
                    ? 'bg-[#FF3B30] text-white font-bold shadow-sm'
                    : 'text-[#A6B0C3] hover:text-white'
                }`}
              >
                QUISH ALERT
              </button>
              <button
                type="button"
                onClick={handleRunRadar}
                className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 ${
                  phoneTab === 'scan'
                    ? 'bg-[#00C853] text-[#0B0F17] font-bold shadow-sm'
                    : 'text-[#A6B0C3] hover:text-white'
                }`}
              >
                <Radio className="w-3 h-3" />
                <span>RADAR</span>
              </button>
            </div>

            {/* Device Container - Authentic High-End Android Flagship Mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-[#070A0F] rounded-[44px] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,212,255,0.12)] border border-[#1E293B]">
              
              {/* Outer Edge Metallic Bevel */}
              <div className="absolute inset-0 rounded-[44px] border border-white/10 pointer-events-none" />

              {/* Hardware Volume buttons (left) & Power button (right) */}
              <div className="absolute -left-1 top-24 w-1 h-10 bg-[#1E293B] rounded-l" />
              <div className="absolute -left-1 top-38 w-1 h-10 bg-[#1E293B] rounded-l" />
              <div className="absolute -right-1 top-28 w-1 h-12 bg-[#1E293B] rounded-r" />

              {/* Phone Display Frame */}
              <div className="relative bg-[#0B0F17] rounded-[36px] overflow-hidden border border-[#1E293B]/80 flex flex-col min-h-[500px]">
                
                {/* Status Bar */}
                <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-[#A6B0C3]/80 border-b border-[#141D2E]/80 bg-[#070A0F]">
                  <div className="flex items-center gap-1.5 font-medium text-white">
                    <VorentisShield size={12} glow={false} />
                    <span>09:41</span>
                  </div>
                  {/* Camera Punchhole */}
                  <div className="w-3 h-3 rounded-full bg-black border border-white/20" />
                  <div className="flex items-center gap-2 text-[10px]">
                    <span>5G</span>
                    <span className="text-[#00C853] font-bold">100%</span>
                  </div>
                </div>

                {/* Android App Header */}
                <div className="px-5 py-2.5 flex items-center justify-between bg-[#0B0F17] border-b border-[#1E293B]/60">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#141D2E] border border-[#1E293B] flex items-center justify-center">
                      <VorentisShield size={16} glow={false} />
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-[11px] text-white tracking-wider">VORENTIS™</div>
                      <div className="text-[8px] text-[#00D4FF] font-mono tracking-tight">ACTIVE ON-DEVICE DEFENSE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[9px] font-mono font-medium text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>SELinux: ENFORCING</span>
                  </div>
                </div>

                {/* Dashboard Screen Content - 3 Interactive Views */}
                <div className="p-4 space-y-3.5 bg-gradient-to-b from-[#0B0F17] to-[#0D131F] flex-1">
                  
                  {/* VIEW 1: DASHBOARD HUD */}
                  {phoneTab === 'dashboard' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      {/* Threat Score Gauge */}
                      <div className="relative p-4 rounded-2xl bg-[#141D2E]/80 border border-[#1E293B] flex flex-col items-center justify-center shadow-inner overflow-hidden">
                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#A6B0C3] uppercase mb-1">
                          SYSTEM DEFENSE TELEMETRY
                        </div>

                        {/* Circular Score Ring */}
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#1E293B"
                              strokeWidth="5"
                              fill="transparent"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#00C853"
                              strokeWidth="5"
                              strokeDasharray={251}
                              strokeDashoffset={251 * (1 - 0.97)}
                              strokeLinecap="round"
                              fill="transparent"
                              className="drop-shadow-[0_0_8px_rgba(0,200,83,0.7)]"
                            />
                          </svg>
                          
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="font-orbitron font-extrabold text-3xl text-white tracking-tight">
                              97
                            </span>
                            <span className="text-[10px] font-mono text-[#00C853] font-semibold">OPTIMAL / 100</span>
                          </div>
                        </div>

                        {/* Shield Score Subtitle */}
                        <div className="mt-1 text-center">
                          <div className="text-[9px] font-mono tracking-wider text-[#A6B0C3] uppercase">
                            SHIELD SCORE
                          </div>
                          <div className="text-[11px] font-semibold text-[#00C853] tracking-wide">
                            All 10 Subsystems Operating
                          </div>
                        </div>
                      </div>

                      {/* 4 Status Tiles Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-xl bg-[#141D2E]/60 border border-[#1E293B] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="text-[9px] font-medium text-white leading-tight">Device Integrity</div>
                            <div className="text-[8px] text-[#00C853] font-mono">Kernel Safe</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141D2E]/60 border border-[#1E293B] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="text-[9px] font-medium text-white leading-tight">Network Traversal</div>
                            <div className="text-[8px] text-[#00C853] font-mono">Pre-Flight TLS</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141D2E]/60 border border-[#1E293B] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="text-[9px] font-medium text-white leading-tight">Active Threats</div>
                            <div className="text-[8px] text-[#00C853] font-mono">0 Intercepts</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141D2E]/60 border border-[#1E293B] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="text-[9px] font-medium text-white leading-tight">On-Device DB</div>
                            <div className="text-[8px] text-[#00D4FF] font-mono">Synced Real-Time</div>
                          </div>
                        </div>
                      </div>

                      {/* Aegis Copilot Micro Banner */}
                      <div className="p-2 rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/20 flex items-center justify-between text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-white">
                          <Cpu className="w-3 h-3 text-[#00D4FF]" />
                          <span>Aegis Neural Model: Idle</span>
                        </div>
                        <span className="text-[#00D4FF]">0.42ms</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: ACTIVE QUISH INTERCEPT */}
                  {phoneTab === 'intercept' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="p-3.5 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#FF3B30] font-orbitron font-bold text-xs">
                            <AlertTriangle className="w-4 h-4 text-[#FF3B30]" />
                            <span>QUISHING INTERCEPT</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#FF3B30] text-white font-mono font-bold text-[9px]">
                            SCORE: 92/100
                          </span>
                        </div>

                        <div className="text-[11px] text-white font-medium">
                          Deceptive 3-hop shortlink detected via parking meter QR code scan.
                        </div>

                        <div className="p-2 rounded-lg bg-[#0B0F17] border border-[#FF3B30]/30 font-mono text-[9px] text-[#A6B0C3] space-y-1">
                          <div><strong className="text-white">RAW:</strong> bit.ly/city-park-pay</div>
                          <div><strong className="text-[#FF3B30]">RESOLVED:</strong> pay-gate-harvest.xyz/token</div>
                          <div className="text-[#FFB300]">FLAG: Domain age &lt; 24h, self-signed TLS</div>
                        </div>

                        <div className="pt-1">
                          <button
                            type="button"
                            className="w-full py-2 bg-[#FF3B30] text-white rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-md"
                          >
                            TERMINATE NAVIGATION (AIR-GAP)
                          </button>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#141D2E] border border-[#1E293B] text-[9px] font-mono text-[#00C853] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                        <span>Terminal session prevented from harvesting payment tokens.</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW 3: RADAR SCAN */}
                  {phoneTab === 'scan' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="p-4 rounded-2xl bg-[#141D2E] border border-[#00D4FF]/40 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Radar Target Graphic */}
                        <div className="relative w-28 h-28 flex items-center justify-center my-1">
                          <div className="absolute inset-0 rounded-full border border-[#00D4FF]/30" />
                          <div className="absolute inset-4 rounded-full border border-[#00D4FF]/40 border-dashed" />
                          <div className="absolute inset-8 rounded-full border border-[#00D4FF]/60" />
                          
                          {/* Animated Radar Sweep */}
                          <div className="absolute inset-0 animate-radar-sweep pointer-events-none">
                            <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#00D4FF]/40 to-transparent rounded-tl-full" />
                          </div>

                          <span className="font-orbitron font-bold text-xl text-white z-10">
                            {scanStep}%
                          </span>
                        </div>

                        <div className="text-[10px] font-mono text-[#00D4FF] font-semibold tracking-wider uppercase">
                          {isLiveScanning ? 'HEURISTIC INSPECTION ACTIVE' : 'SCAN COMPLETED: CLEAN'}
                        </div>

                        <div className="text-[8px] font-mono text-[#A6B0C3] mt-1 truncate max-w-[200px]">
                          /data/app/com.vorentis.engine/sandbox
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRunRadar}
                        className="w-full py-2 rounded-lg bg-[#00D4FF] text-[#0B0F17] font-mono text-[10px] font-bold uppercase tracking-wider"
                      >
                        RE-RUN FULL SUBSYSTEM AUDIT
                      </button>
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Bar */}
                <div className="px-3 py-2.5 bg-[#070A0F] border-t border-[#1E293B]/70 flex items-center justify-around text-[8px] font-mono">
                  <div className="flex flex-col items-center gap-0.5 text-[#00D4FF]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>HUD</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-[#A6B0C3]/70 hover:text-white transition-colors">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Threats</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-[#A6B0C3]/70 hover:text-white transition-colors">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>VPN</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-[#A6B0C3]/70 hover:text-white transition-colors">
                    <Lock className="w-3.5 h-3.5" />
                    <span>TrustLock</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-[#A6B0C3]/70 hover:text-white transition-colors">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Copilot</span>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="py-1.5 flex justify-center bg-[#070A0F]">
                  <div className="w-20 h-1 rounded-full bg-white/20" />
                </div>

              </div>

            </div>

            {/* Overlaid Technical Telemetry Badge (Desktop) */}
            <div className="hidden sm:flex flex-col gap-1.5 absolute -bottom-5 -left-5 z-20 bg-[#141D2E]/95 backdrop-blur-md p-3 rounded-xl border border-[#1E293B] shadow-2xl max-w-[210px] font-mono">
              <div className="flex items-center justify-between text-[9px] text-[#A6B0C3] uppercase tracking-wider">
                <span>ON-DEVICE LATENCY</span>
                <span className="text-[#00C853] font-bold">0.42s</span>
              </div>
              <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden">
                <div className="h-full bg-[#00D4FF] w-4/5 rounded-full" />
              </div>
              <div className="text-[10px] text-white font-medium flex items-center gap-1.5">
                <Smartphone className="w-3 h-3 text-[#00D4FF]" />
                <span>ARM64 NDK Acceleration</span>
              </div>
            </div>

            {/* Overlaid Confidence Badge */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-3 -right-3 z-20 bg-[#141D2E]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#1E293B] shadow-xl font-mono text-[10px]">
              <span className="w-2 h-2 rounded-full bg-[#00C853] shadow-[0_0_6px_#00C853]" />
              <div className="text-[#A6B0C3]">
                CONFIDENCE: <span className="text-white font-bold">96%</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

