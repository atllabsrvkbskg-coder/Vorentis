import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Globe,
  MessageSquare,
  QrCode,
  Lock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

interface VorentisSolutionSectionProps {
  onSelectFeature?: (featureId: string) => void;
}

export const VorentisSolutionSection: React.FC<VorentisSolutionSectionProps> = ({
  onSelectFeature,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
    if (onSelectFeature) {
      onSelectFeature(id);
    }
  };

  const capabilities = [
    {
      id: 'ai-detection',
      title: 'AI Threat Detection',
      tag: 'NEURAL HEURISTICS',
      icon: ShieldAlert,
      summary: 'Real-time analysis of optical targets, lookalike domains, and mobile social engineering.',
      howItWorks: 'Vectorized on-device classifier evaluates payload signatures, domain registration age, multi-hop redirects, and SSL trust chains in <0.5ms.',
      defenseAction: 'Blocks execution before browsers or malicious APK sandboxes can render payloads or harvest credentials.',
      campusApplication: 'Shields students from quishing attacks on physical flyers, parking kiosks, and deceptive tuition assistance links.',
    },
    {
      id: 'device-integrity',
      title: 'Device Integrity Monitoring',
      tag: 'KERNEL & SELINUX',
      icon: Smartphone,
      summary: 'Continuous auditing of root status, boot partition verification, and SELinux enforcement.',
      howItWorks: 'Directly polls Android Security Framework APIs and SELinux enforcing states without requiring intrusive MDM corporate management.',
      defenseAction: 'Detects unauthorized privilege escalation, suspicious debugger attachments, and anomalous accessibility bindings.',
      campusApplication: 'Allows students to use BYOD personal phones safely on university networks with zero institutional surveillance.',
    },
    {
      id: 'web-loopback',
      title: 'Network & Pre-Flight TLS',
      tag: 'LOCAL LOOPBACK AIR-GAP',
      icon: Globe,
      summary: 'Pre-flight evaluation and local VPN traffic routing to block malicious DNS lookups on public Wi-Fi.',
      howItWorks: 'Utilizes an on-device Android VPN Service socket that routes packets locally into memory without sending any user traffic to third-party servers.',
      defenseAction: 'Air-gaps network requests when hostile captive portals or DNS spoofing attempts are intercepted.',
      campusApplication: 'Guards dorm, dining hall, and library public Wi-Fi interactions against man-in-the-middle sniffing.',
    },
    {
      id: 'privacy-vault',
      title: 'Zero-Telemetry Vault',
      tag: 'HARDWARE KEYSTORE',
      icon: Lock,
      summary: 'Hardware-backed keystore enclaves safeguarding campus SSO tokens without cloud exfiltration.',
      howItWorks: 'Leverages Android StrongBox / Trusted Execution Environment (TEE) with AES-256-GCM encrypted local SQLite storage.',
      defenseAction: 'Ensures cryptographic keys never leave silicon boundaries and cannot be extracted even during forensic memory inspection.',
      campusApplication: 'Protects student IDs, library credentials, and multi-factor session tokens from malware extraction.',
    },
    {
      id: 'ai-copilot',
      title: 'Aegis AI Copilot',
      tag: 'EXPLAINABLE INTELLIGENCE',
      icon: Cpu,
      summary: 'Contextual AI assistance that translates cryptic security warnings into clear, actionable advice.',
      howItWorks: 'Synthesizes raw telemetry indicators into natural, empathetic explanations that explain the specific "why" behind every security alert.',
      defenseAction: 'Provides structured three-step remediation protocols (Isolate, Report, Safely Verify) directly on device.',
      campusApplication: 'Educates students about deceptive patterns in real time rather than leaving them confused by technical jargon.',
    },
    {
      id: 'threat-scoring',
      title: '0–100 Threat Scoring',
      tag: 'CALIBRATED TELEMETRY',
      icon: ShieldCheck,
      summary: 'Deterministic synthesis of multifaceted indicators into standard, transparent risk brackets.',
      howItWorks: 'Weighs 14 independent subsystem audit points to yield an intuitive 0–100 Shield Score with clear categorizations: Safe, Low, Suspicious, Dangerous.',
      defenseAction: 'Provides instant visual health indicators so users immediately know their device status at a glance.',
      campusApplication: 'Gives campus administrators and IT teams confidence in endpoint hygiene without inspecting student private contents.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            SIX PILLARS OF <span className="text-[#00D5FF]">ACTIVE DEFENSE</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8B8] leading-relaxed">
            Consolidated into a single lightweight mobile footprint. Click any capability card below to inspect its on-device architecture, defensive actions, and smart-campus application.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isExpanded = expandedId === cap.id;

            return (
              <div
                key={cap.id}
                onClick={() => toggleExpand(cap.id)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm ${
                  isExpanded
                    ? 'bg-[#1A2332] border-[#00D5FF] shadow-[0_0_30px_rgba(0,213,255,0.15)] ring-1 ring-[#00D5FF]/30'
                    : 'bg-[#1A2332]/70 hover:bg-[#1A2332] border-[#1E293B] hover:border-[#00D5FF]/40 hover:shadow-[0_8px_30px_rgba(0,213,255,0.08)]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] border border-[#1E293B] group-hover:border-[#00D5FF]/50 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#00D5FF]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#00D5FF]/10 text-[#00D5FF] border border-[#00D5FF]/20 uppercase">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white uppercase tracking-wider mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E5E7EB] font-medium leading-relaxed mb-3">
                    {cap.summary}
                  </p>

                  {/* Expanded Breakdown */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#1E293B] space-y-3 animate-in fade-in duration-200 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#1E293B] space-y-1">
                        <div className="text-[#00D5FF] font-semibold flex items-center gap-1.5 uppercase text-[10px]">
                          <Zap className="w-3 h-3" />
                          <span>How It Operates On-Device:</span>
                        </div>
                        <p className="text-[#9AA8B8] leading-relaxed text-[11px]">
                          {cap.howItWorks}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#1E293B] space-y-1">
                        <div className="text-[#00C853] font-semibold flex items-center gap-1.5 uppercase text-[10px]">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Defensive Containment:</span>
                        </div>
                        <p className="text-[#9AA8B8] leading-relaxed text-[11px]">
                          {cap.defenseAction}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0B384A]/30 border border-[#00D5FF]/30 space-y-1">
                        <div className="text-white font-semibold flex items-center gap-1.5 uppercase text-[10px]">
                          <Sparkles className="w-3 h-3 text-[#00D5FF]" />
                          <span>Campus &amp; Education Deployment:</span>
                        </div>
                        <p className="text-[#E5E7EB] leading-relaxed text-[11px]">
                          {cap.campusApplication}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Expand / Collapse Toggle Bar */}
                <div className="mt-5 pt-3 border-t border-[#1E293B]/70 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#00D5FF] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>OPERATIONAL</span>
                  </span>

                  <span className="flex items-center gap-1 text-[#9AA8B8] group-hover:text-white transition-colors">
                    <span>{isExpanded ? 'COLLAPSE' : 'INSPECT ARCHITECTURE'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#00D5FF]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-[#00D5FF]" />
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Boundary Clarification */}
        <div className="mt-10 p-4 rounded-xl bg-[#1A2332]/60 border border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#9AA8B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D5FF]" />
            <span>VERIFIED CAPABILITIES: All 6 defense modules are operational in the VORENTIS Android v1.0 engine.</span>
          </div>
          <span className="text-[#00D5FF] font-semibold">ZERO SPECULATIVE CLAIMS</span>
        </div>

      </div>
    </section>
  );
};

export default VorentisSolutionSection;
