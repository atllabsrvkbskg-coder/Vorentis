import React, { useState } from 'react';
import {
  Radar,
  Activity,
  Gauge,
  ShieldCheck,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  XOctagon,
  ShieldAlert,
  Info,
} from 'lucide-react';

export const SecurityModelSection: React.FC = () => {
  const [selectedClassification, setSelectedClassification] = useState<'SAFE' | 'LOW' | 'SUSPICIOUS' | 'DANGEROUS'>('SAFE');

  const steps = [
    {
      num: '01',
      title: 'DETECT',
      action: 'Identify potentially suspicious content or activity.',
      details: 'Continuously monitors local touchpoints—such as tapped links, received SMS headers, scanned QR payloads, and installed package manifests—for heuristic triggers.',
      icon: Radar,
    },
    {
      num: '02',
      title: 'ANALYZE',
      action: 'Examine relevant security signals.',
      details: 'Deconstructs artifacts against on-device behavioral rules, domain age indicators, redirection path depth, and certificate signature validity.',
      icon: Activity,
    },
    {
      num: '03',
      title: 'SCORE',
      action: 'Translate the assessment into understandable risk information.',
      details: 'Synthesizes multifaceted technical indicators into a deterministic 0–100 Threat Score, categorizing risk into clear, standardized brackets.',
      icon: Gauge,
    },
    {
      num: '04',
      title: 'RESPOND',
      action: 'Provide useful security guidance.',
      details: 'Empowers the user with context-specific recommendations—such as isolating browser caches, blocking incoming sender channels, or safely proceeding.',
      icon: ShieldCheck,
    },
  ];

  const classifications = [
    {
      id: 'SAFE',
      range: '0 – 25',
      name: 'SAFE',
      color: '#00C853',
      bgBadge: 'bg-[#00C853]/15 text-[#00C853] border-[#00C853]/40',
      description: 'Zero malicious indicators detected. Cryptographic signatures valid, domain reputation established, normal permission requests.',
      actionTaken: 'Normal execution permitted. Silent verification logged.',
    },
    {
      id: 'LOW',
      range: '26 – 50',
      name: 'LOW RISK',
      color: '#00D5FF',
      bgBadge: 'bg-[#00D5FF]/15 text-[#00D5FF] border-[#00D5FF]/40',
      description: 'Minor non-critical indicators observed. Newly registered hostnames or uncommon redirection patterns without active exploit payloads.',
      actionTaken: 'Informative advisory provided. User retains full agency.',
    },
    {
      id: 'SUSPICIOUS',
      range: '51 – 75',
      name: 'SUSPICIOUS',
      color: '#FFB300',
      bgBadge: 'bg-[#FFB300]/15 text-[#FFB300] border-[#FFB300]/40',
      description: 'Multiple deceptive indicators present. Deceptive urgency wording, masked shortlinks, or mismatched institutional sender metadata.',
      actionTaken: 'Elevated caution prompt. Interception confirmation required before proceeding.',
    },
    {
      id: 'DANGEROUS',
      range: '76 – 100',
      name: 'DANGEROUS',
      color: '#FF3B30',
      bgBadge: 'bg-[#FF3B30]/15 text-[#FF3B30] border-[#FF3B30]/40',
      description: 'Confirmed hostile artifacts. High-confidence quishing destinations, credential harvesting replicas, or anomalous accessibility service bindings.',
      actionTaken: 'Navigation containment active. Air-gapped isolation recommended.',
    },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>SECTION 03 • SECURITY ARCHITECTURE</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-5">
            THE VORENTIS SECURITY MODEL
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8B8] leading-relaxed">
            Security decision-making should be systematic, transparent, and comprehensible. VORENTIS transforms complex technical telemetry into an actionable four-stage defensive lifecycle.
          </p>
        </div>

        {/* 4-Step Defensive Pipeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {(steps || []).map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative p-6 sm:p-7 rounded-2xl bg-[#1A2332]/80 border border-[#1E293B] flex flex-col justify-between shadow-lg"
                >
                  {/* Step Connector Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0A0F1A] border border-[#00D5FF]/40 items-center justify-center text-[#00D5FF] shadow-sm">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] border border-[#00D5FF]/30 flex items-center justify-center text-[#00D5FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-orbitron font-extrabold text-2xl text-[#1E293B] group-hover:text-[#00D5FF]/40">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#00D5FF] leading-snug mb-3">
                      {step.action}
                    </p>

                    <p className="text-xs text-[#9AA8B8] leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#1E293B] text-[10px] font-mono text-[#9AA8B8] uppercase">
                    STAGE {step.num} OF 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Threat Score (0-100) & Risk Classification Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1A2332] border border-[#1E293B] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Score Gauge Visual (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#0A0F1A] border border-[#1E293B]">
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#9AA8B8] uppercase mb-4">
                STANDARDIZED TELEMETRY
              </div>

              {/* Central Threat Score Dial */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#1E293B"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#00D5FF"
                    strokeWidth="8"
                    strokeDasharray={314}
                    strokeDashoffset={314 * (1 - 0.72)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="drop-shadow-[0_0_12px_rgba(0,213,255,0.7)]"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-orbitron font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    0–100
                  </span>
                  <span className="text-[10px] font-mono text-[#00D5FF] font-semibold mt-1">
                    THREAT SCORE SCALE
                  </span>
                </div>
              </div>

              <div className="mt-4 text-xs font-mono text-[#9AA8B8] max-w-xs leading-relaxed">
                Deterministic calculation combining heuristic weights, reputation signals, and anomaly severity.
              </div>
            </div>

            {/* Right 4 Classifications (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-mono text-[#00D5FF] uppercase tracking-wider font-semibold mb-2">
                FOUR RISK CLASSIFICATIONS:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(classifications || []).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedClassification(c.id as any)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedClassification === c.id
                        ? 'bg-[#0A0F1A] border-[#00D5FF] shadow-[0_0_20px_rgba(0,213,255,0.15)]'
                        : 'bg-[#1A2332]/60 border-[#1E293B] hover:border-[#00D5FF]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${c.bgBadge}`}>
                        {c.name}
                      </span>
                      <span className="text-[11px] font-mono text-white font-semibold">
                        SCORE: {c.range}
                      </span>
                    </div>

                    <p className="text-xs text-[#E5E7EB] font-medium leading-relaxed mb-2">
                      {c.description}
                    </p>

                    <div className="text-[10px] font-mono text-[#9AA8B8] pt-1 border-t border-[#1E293B]/50">
                      Guidance: {c.actionTaken}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* MANDATORY DISCLAIMER AS REQUESTED */}
          <div className="mt-8 pt-6 border-t border-[#1E293B] flex items-start gap-3 p-4 rounded-xl bg-[#0A0F1A]/80 border border-[#1E293B]/80 text-xs font-mono text-[#9AA8B8]">
            <Info className="w-4 h-4 text-[#00D5FF] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Risk-Communication Disclaimer:</strong> The 0–100 Threat Score and four-tier risk classification (Safe, Low Risk, Suspicious, Dangerous) constitute VORENTIS&apos;s own contextual risk-communication model. It is designed to assist user understanding and situational awareness and does not represent an absolute or universal cybersecurity standard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityModelSection;
