import React from 'react';
import {
  GraduationCap,
  Users,
  Smartphone,
  Wifi,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { VorentisShield } from './VorentisLogo';

export const SmartCampusEducationSection: React.FC = () => {
  const protectionPillars = [
    {
      target: 'STUDENTS',
      title: 'Student Mobile Defense',
      desc: 'Shields personal mobile devices against deceptive campus flyer QR codes, urgent financial aid phishing SMS, and deceptive grade-inquiry links.',
      subpoints: [
        'Optical inspection of flyer & event QR codes before browser resolution',
        'Urgency-coercion text message detection with plain-language explanations',
        'Shields against malicious third-party student companion applications',
      ],
      icon: GraduationCap,
    },
    {
      target: 'FACULTY & RESEARCHERS',
      title: 'Academic & Faculty Integrity',
      desc: 'Guards academic email workflows, peer-review invitations, and research collaboration links from targeted credential harvesting.',
      subpoints: [
        'Detects deceptive academic publication domains and homoglyph spoofing',
        'Isolates untrusted conference portal links and research attachments',
        'Maintains researcher privacy without centralized logging or inspection',
      ],
      icon: Users,
    },
    {
      target: 'CAMPUS DEVICES (BYOD)',
      title: 'Unmanaged Endpoint Hygiene',
      desc: 'Establishes baseline device integrity on personal student and staff hardware without requiring intrusive mobile device management (MDM) profiles.',
      subpoints: [
        'SELinux state and bootloader integrity verification on Android devices',
        'Heuristic scan for malicious sideloaded APK packages and keyloggers',
        'Zero-knowledge local architecture respects student privacy boundaries',
      ],
      icon: Smartphone,
    },
    {
      target: 'CAMPUS NETWORKS',
      title: 'Open Network & Wi-Fi Protection',
      desc: 'Provides local loopback protection on shared campus Wi-Fi networks, preventing rogue captive portals and DNS redirection attacks.',
      subpoints: [
        'Pre-flight TLS evaluation before browser sessions initiate navigation',
        'Prevents automated token harvesting on public library and dorm routers',
        'Contains hostile web sessions before payload scripts execute locally',
      ],
      icon: Wifi,
    },
    {
      target: 'INSTITUTIONAL INFRASTRUCTURE',
      title: 'Digital Campus Infrastructure',
      desc: 'Mitigates compromised student single-sign-on (SSO) credentials that serve as primary breach vectors into university LMS and administration portals.',
      subpoints: [
        'Reduces compromised credential volume hitting campus identity providers',
        'Supports proactive cyber hygiene across the entire campus population',
        'Hardware-backed keystore vaults for student ID and authentication tokens',
      ],
      icon: Building2,
    },
  ];

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Anchor for smart-campus */}
      <span id="smart-campus" className="absolute -top-24 pointer-events-none" />
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>SECTOR FOCUS • APPLICATION DOMAIN</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-5">
            VORENTIS FOR SMART CAMPUSES <br />
            <span className="text-[#00D5FF]">&amp; HIGHER EDUCATION</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8B8] leading-relaxed">
            While VORENTIS is fundamentally a mobile cybersecurity platform, higher education and smart campuses represent our premier application domain. Digital campuses present high-density, multi-device attack surfaces requiring student-centric, privacy-first endpoint security.
          </p>
        </div>

        {/* 5 Targeted Protection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {(protectionPillars || []).map((p, idx) => {
            const Icon = p.icon;
            const isFullWidth = idx === 4;
            return (
              <div
                key={p.target}
                className={`p-7 sm:p-8 rounded-2xl bg-[#1A2332]/70 hover:bg-[#1A2332] border border-[#1E293B] hover:border-[#00D5FF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] border border-[#1E293B] group-hover:border-[#00D5FF]/40 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#00D5FF]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#00D5FF] uppercase px-2.5 py-1 rounded bg-[#00D5FF]/10 border border-[#00D5FF]/20 font-bold">
                      {p.target}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E5E7EB] font-medium leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#1E293B]/60">
                    {(p.subpoints || []).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#9AA8B8] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] font-mono text-[#9AA8B8]">
                  <span>DEFENSIVE TOUCHPOINT</span>
                  <span className="text-white font-medium group-hover:text-[#00D5FF] transition-colors">
                    ACTIVE ARCHITECTURE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional & Evaluation Transparency Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B384A]/20 border border-[#00D5FF]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D5FF] uppercase tracking-widest font-bold">
              <VorentisShield size={16} glow={false} />
              <span>GSC 2026 • HIGHER EDUCATION INNOVATION SHOWCASE</span>
            </div>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              VORENTIS demonstrates how mobile cybersecurity can be integrated into the fabric of safer, resilient smart campuses without compromising individual privacy or imposing heavy administrative overhead.
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-lg bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono text-[#9AA8B8]">
            DEPLOYMENT: <span className="text-[#00D5FF] font-semibold">BETA EVALUATION</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartCampusEducationSection;
