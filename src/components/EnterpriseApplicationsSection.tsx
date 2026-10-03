import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Layers,
  Terminal,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server,
  FileCheck2,
} from 'lucide-react';
import TechnicalSpecsTable from './TechnicalSpecsTable';

export const EnterpriseApplicationsSection: React.FC = () => {
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState<boolean>(false);

  const pillars = [
    {
      title: 'Unmanaged & BYOD Fleet Hygiene',
      tag: 'ZERO-AGENT BYOD',
      desc: 'Enforces security baselines on personal Android endpoints without installing invasive corporate MDM profiles or certificates.',
      icon: Shield,
    },
    {
      title: 'Zero-Knowledge Privacy Standard',
      tag: 'AIR-GAPPED DATA FLOW',
      desc: 'All heuristics, SMS token parsing, and URL inspections occur locally. Zero personal communications or browsing telemetry are exfiltrated to central clouds.',
      icon: Lock,
    },
    {
      title: 'Dual-Mode Interface',
      tag: 'SIMPLE VS PRO',
      desc: 'Intuitive everyday mode for general users with 1-tap recommendations, plus an Advanced Pro mode providing raw redirection chains, certificate digests, and NDK logs for IT auditors.',
      icon: Layers,
    },
    {
      title: 'Hardware Keystore Security',
      tag: 'STRONGBOX ENCLAVE',
      desc: 'Utilizes Android Hardware Keystore (StrongBox Keymaster) for cryptographic token isolation and biometric key authentication.',
      icon: Server,
    },
  ];

  return (
    <section id="enterprise" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>ENTERPRISE &amp; INSTITUTIONAL ARCHITECTURE</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-5">
            ENTERPRISE RIGOR. <br />
            <span className="text-[#00D5FF]">RESPECT FOR PRIVACY.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8B8] leading-relaxed">
            Enterprise and campus environments cannot rely on blind trust. VORENTIS delivers verifiable mobile security that complies with institutional audit standards while fiercely preserving individual privacy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(pillars || []).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 rounded-2xl bg-[#1A2332]/70 hover:bg-[#1A2332] border border-[#1E293B] hover:border-[#00D5FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] border border-[#1E293B] group-hover:border-[#00D5FF]/40 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#00D5FF]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#00D5FF]/10 text-[#00D5FF] border border-[#00D5FF]/20 uppercase">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white uppercase tracking-wider mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1E293B]/60 flex items-center gap-1.5 text-[10px] font-mono text-[#00D5FF]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                  <span>AUDIT READY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Technical Appendix for Enterprise / IT Auditors */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A2332]/80 border border-[#1E293B] text-center">
          <div className="max-w-2xl mx-auto mb-6">
            <h4 className="font-orbitron font-bold text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
              TECHNICAL AUDIT BENCHMARKS
            </h4>
            <p className="text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
              Are you a cybersecurity researcher, systems architect, or enterprise IT auditor? Inspect our hardware bindings, cryptographic hashes, and kernel enforcement specifications.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1A2332] hover:bg-[#222E42] border border-[#1E293B] hover:border-[#00D5FF]/50 text-xs font-mono text-white transition-all cursor-pointer shadow-md"
          >
            <Terminal className="w-4 h-4 text-[#00D5FF]" />
            <span className="font-semibold">
              {showTechnicalSpecs
                ? 'HIDE HARDWARE & KERNEL SPECIFICATIONS'
                : 'VIEW HARDWARE & KERNEL SPECIFICATIONS'}
            </span>
            {showTechnicalSpecs ? (
              <ChevronUp className="w-4 h-4 text-[#00D5FF]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#00D5FF]" />
            )}
          </button>

          {showTechnicalSpecs && (
            <div className="mt-8 text-left animate-in fade-in duration-300">
              <TechnicalSpecsTable />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default EnterpriseApplicationsSection;
