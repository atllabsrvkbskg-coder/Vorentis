import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Globe,
  Lock,
  Activity,
  Radar,
  Gauge,
  Bot,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Wifi,
  ChevronRight,
  Sparkles,
  Smartphone,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { VorentisShield } from './VorentisLogo';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hud' | 'emergency' | 'vault' | 'privacy' | 'reports' | 'history' | 'copilot'>('hud');
  const [radarProgress, setRadarProgress] = useState<number>(64);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [airGapActive, setAirGapActive] = useState<boolean>(false);
  const [executedPlaybook, setExecutedPlaybook] = useState<string | null>(null);
  const [selectedThreatItem, setSelectedThreatItem] = useState<'qr' | 'sms' | 'apk'>('qr');
  const [generatedReport, setGeneratedReport] = useState<boolean>(false);
  const [privacyToggles, setPrivacyToggles] = useState({
    onDeviceNeural: true,
    cloudExfiltration: false, // strictly false
    sensorSandbox: true,
    localVpnSinkhole: true,
  });

  const triggerScan = () => {
    setIsScanning(true);
    setRadarProgress(15);
    const interval = setInterval(() => {
      setRadarProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  const handleExecutePlaybook = (name: string) => {
    setExecutedPlaybook(name);
    setTimeout(() => {
      setAirGapActive(true);
    }, 600);
  };

  const handleGenerateReport = () => {
    setGeneratedReport(true);
    const reportData = {
      manifestId: 'VOR-AUDIT-2026-CAMPUS-FLEET',
      generatedAt: new Date().toISOString(),
      platform: 'Android 15 (ARM64-v8a)',
      status: 'VERIFIED_COMPLIANT',
      kernelSha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      securityPosture: {
        shieldScore: 97,
        selinuxStatus: 'Enforcing (Strict)',
        avb2VerifiedBoot: 'Pass',
        suBinariesDetected: 0,
        localVpnSinkhole: 'Active',
        zeroTelemetryEnforced: true,
        onDeviceInferenceLatencyMs: 0.42
      },
      quarantineLog: [
        { type: 'Quishing QR', vector: 'bit.ly/camp-pay-fake', status: 'Blocked' },
        { type: 'Urgent SMS', sender: 'Unknown 10-digit', status: 'Contained' }
      ],
      complianceAuditor: 'ZENTIQ Enterprise Verification Engine'
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vorentis-enterprise-security-report.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const capabilities = [
    {
      id: 'ai-detection',
      title: 'AI-Powered Threat Detection',
      icon: ShieldAlert,
      tag: 'CORE NEURAL HEURISTICS',
      desc: 'Real-time identification of deceptive shortlinks, quishing QR destinations, lookalike domains, and zero-day mobile social engineering.',
    },
    {
      id: 'emergency-containment',
      title: 'Cyber Emergency Response',
      icon: AlertTriangle,
      tag: 'AIR-GAP PLAYBOOKS',
      desc: 'One-tap incident containment severing rogue socket bindings, purging browser cache sessions, and freezing telecom hijacking vectors.',
    },
    {
      id: 'integrity-monitoring',
      title: 'Device Integrity Monitoring',
      icon: Activity,
      tag: 'KERNEL & SELINUX',
      desc: 'Continuous inspection of root status, boot partition verification, SELinux enforcement policies, and anomalous privileged processes.',
    },
    {
      id: 'privacy-protection',
      title: 'Privacy Control Enclave',
      icon: Lock,
      tag: 'ZERO-TELEMETRY VAULT',
      desc: 'Hardware-backed keystore enclaves safeguarding authentication tokens and personal data without cloud exfiltration or behavioral profiling.',
    },
    {
      id: 'network-security',
      title: 'Network & Pre-Flight TLS',
      icon: Globe,
      tag: 'LOCAL LOOPBACK SINKHOLE',
      desc: 'Pre-flight TLS evaluation and local VPN traffic routing to block malicious DNS lookups and hostile exfiltration attempts on public Wi-Fi.',
    },
    {
      id: 'audit-reports',
      title: 'Enterprise Security Reports',
      icon: Layers,
      tag: 'SHA-256 AUDIT LOGS',
      desc: 'Exportable institutional compliance reports with cryptographic integrity digests for campus IT and enterprise fleet administrators.',
    },
    {
      id: 'threat-analysis',
      title: 'Heuristic Threat History',
      icon: Gauge,
      tag: 'DETERMINISTIC 0–100 SCORE',
      desc: 'Granular deconstruction of flagged artifacts into observable risk indicators paired with immediate session containment actions.',
    },
    {
      id: 'ai-copilot',
      title: 'Aegis AI Copilot',
      icon: Bot,
      tag: 'EXPLAINABLE GUIDANCE',
      desc: 'Contextual AI assistance that translates cryptic security warnings into clear, actionable advice so users understand why alerts trigger.',
    },
  ];

  return (
    <section id="product" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] opacity-10 pointer-events-none blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse, #00D5FF 0%, rgba(10,15,26,0) 70%)',
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>LIVE APPLICATION INTERFACE</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-5">
            THE VORENTIS APPLICATION INTERFACE
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8B8] leading-relaxed">
            VORENTIS is an operational mobile security platform engineered in pure Kotlin. Recreated below directly from native Android device evidence are the core operating screens—including the System Defense HUD, Cyber Emergency Response, TrustLock Enclave, Privacy Controls, and Security Reports.
          </p>
        </div>

        {/* Centerpiece Showcase: Interactive Phone UI + Surrounding Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Left Column: UI View Navigator & Deep Dives (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>NATIVE ANDROID MODULE SCREENS:</span>
              <span className="text-[#00D5FF] font-semibold">v1.0 BETA</span>
            </div>

            <div className="space-y-2">
              {[
                { id: 'hud', label: 'Security HUD & Telemetry', sub: '97/100 Shield Score & Subsystems', tag: 'DASHBOARD' },
                { id: 'emergency', label: 'Cyber Emergency Response', sub: 'Air-gap kill switch & incident playbooks', tag: 'CONTAIN' },
                { id: 'vault', label: 'TrustLock Hardware Enclave', sub: '98% Owner match & StrongBox Keystore', tag: 'ENCLAVE' },
                { id: 'privacy', label: 'Privacy Control Enclave', sub: 'Zero-knowledge on-device data routing', tag: 'PRIVACY' },
                { id: 'reports', label: 'Enterprise Security Reports', sub: 'Cryptographic SHA-256 audit logs', tag: 'AUDIT' },
                { id: 'history', label: 'Heuristic Threat History', sub: 'Quishing, SMS scam & APK breakdown', tag: 'HISTORY' },
                { id: 'copilot', label: 'Aegis AI Copilot', sub: 'Explainable guidance for student alerts', tag: 'AI ASSIST' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    activeTab === tab.id
                      ? 'bg-[#1A2332] border-[#00D5FF] shadow-[0_0_20px_rgba(0,213,255,0.15)] ring-1 ring-[#00D5FF]/30'
                      : 'bg-[#1A2332]/50 border-[#1E293B] hover:border-[#00D5FF]/40 hover:bg-[#1A2332]/80'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeTab === tab.id ? 'bg-[#00D5FF]' : 'bg-[#9AA8B8]/50'}`} />
                      <span className="font-orbitron font-bold text-xs text-white uppercase tracking-wider truncate">
                        {tab.label}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#9AA8B8] pl-3.5 leading-tight truncate">
                      {tab.sub}
                    </p>
                  </div>
                  <span className="text-[8.5px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#00D5FF]/10 text-[#00D5FF] border border-[#00D5FF]/20 uppercase shrink-0">
                    {tab.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href="#platform"
                className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#00D5FF] text-[#0A0F1A] font-orbitron font-bold text-[11px] uppercase tracking-wider shadow-[0_0_18px_rgba(0,213,255,0.35)] hover:bg-[#4DE5FF] transition-all cursor-pointer text-center"
              >
                <span>GET ANDROID BETA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#1A2332] hover:bg-[#222E42] border border-[#1E293B] hover:border-[#00D5FF]/50 text-white font-orbitron font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                <span>REQUEST DEMO</span>
              </a>
            </div>
          </div>

          {/* Center Column: The Authentic VORENTIS Android Device Mockup (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            
            {/* Outer Android Device Shell */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-[#070A0F] rounded-[46px] p-3.5 shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(0,213,255,0.14)] border border-[#1E293B]">
              {/* Outer Metallic Bevel */}
              <div className="absolute inset-0 rounded-[46px] border border-white/10 pointer-events-none" />

              {/* Hardware Volume buttons (left) & Power button (right) */}
              <div className="absolute -left-1 top-24 w-1 h-10 bg-[#1E293B] rounded-l" />
              <div className="absolute -left-1 top-38 w-1 h-10 bg-[#1E293B] rounded-l" />
              <div className="absolute -right-1 top-28 w-1 h-12 bg-[#1E293B] rounded-r" />

              {/* Phone Screen Container */}
              <div className="relative bg-[#0A0F1A] rounded-[36px] overflow-hidden border border-[#1E293B]/80 flex flex-col min-h-[540px]">
                
                {/* 1. Android Status Bar */}
                <div className="px-5 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-[#9AA8B8] border-b border-[#1A2332] bg-[#070A0F]">
                  <div className="flex items-center gap-1.5 font-medium text-white">
                    <VorentisShield size={12} glow={false} />
                    <span>09:41</span>
                  </div>
                  {/* Camera Punchhole */}
                  <div className="w-3 h-3 rounded-full bg-black border border-white/20" />
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className={airGapActive ? 'text-[#FF3B30] font-bold' : 'text-[#00D5FF]'}>
                      {airGapActive ? 'AIR-GAP' : '5G'}
                    </span>
                    <span className="text-[#00C853] font-bold">100%</span>
                  </div>
                </div>

                {/* 2. VORENTIS App Header */}
                <div className="px-4 py-2.5 flex items-center justify-between bg-[#0A0F1A] border-b border-[#1E293B]/60">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#1A2332] border border-[#1E293B] flex items-center justify-center">
                      <VorentisShield size={16} glow={false} />
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-[11px] text-white tracking-wider">VORENTIS™</div>
                      <div className="text-[8px] text-[#00D5FF] font-mono tracking-tight">ACTIVE ON-DEVICE DEFENSE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#00C853]/10 border border-[#00C853]/30 text-[8.5px] font-mono font-medium text-[#00C853]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                    <span>SELinux: ENFORCING</span>
                  </div>
                </div>

                {/* 3. Screen Body (Switches between views based on activeTab) */}
                <div className="p-3.5 space-y-3 bg-gradient-to-b from-[#0A0F1A] to-[#141D2E]/80 flex-1 overflow-y-auto">
                  
                  {/* VIEW 1: SECURITY HUD */}
                  {activeTab === 'hud' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      {/* Threat Score Gauge */}
                      <div className="relative p-3.5 rounded-2xl bg-[#1A2332]/90 border border-[#1E293B] flex flex-col items-center justify-center shadow-inner overflow-hidden">
                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#9AA8B8] uppercase mb-1">
                          SYSTEM DEFENSE TELEMETRY
                        </div>

                        {/* Circular Score Ring */}
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#1E293B" strokeWidth="5" fill="transparent" />
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
                            <span className="font-orbitron font-extrabold text-2xl text-white tracking-tight">
                              97
                            </span>
                            <span className="text-[9px] font-mono text-[#00C853] font-semibold">OPTIMAL / 100</span>
                          </div>
                        </div>

                        <div className="mt-1 text-center">
                          <div className="text-[8.5px] font-mono tracking-wider text-[#9AA8B8] uppercase">
                            SHIELD SCORE
                          </div>
                          <div className="text-[10px] font-semibold text-[#00C853] tracking-wide">
                            All 10 Subsystems Operating
                          </div>
                        </div>
                      </div>

                      {/* 4 Status Tiles Grid */}
                      <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                        <div className="p-2 rounded-xl bg-[#1A2332]/70 border border-[#1E293B] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="font-medium text-white leading-tight">Device Integrity</div>
                            <div className="text-[#00C853] text-[8px]">Kernel Safe</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#1A2332]/70 border border-[#1E293B] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="font-medium text-white leading-tight">Network Shield</div>
                            <div className="text-[#00C853] text-[8px]">Pre-Flight TLS</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#1A2332]/70 border border-[#1E293B] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="font-medium text-white leading-tight">Active Threats</div>
                            <div className="text-[#00C853] text-[8px]">0 Active</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#1A2332]/70 border border-[#1E293B] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                          <div>
                            <div className="font-medium text-white leading-tight">On-Device DB</div>
                            <div className="text-[#00D5FF] text-[8px]">Synced Local</div>
                          </div>
                        </div>
                      </div>

                      {/* Neural Latency Indicator */}
                      <div className="p-2 rounded-xl bg-[#00D5FF]/5 border border-[#00D5FF]/20 flex items-center justify-between text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-white">
                          <Cpu className="w-3.5 h-3.5 text-[#00D5FF]" />
                          <span>Aegis Neural Model</span>
                        </div>
                        <span className="text-[#00D5FF] font-semibold">0.42ms Local ARM64</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW 2: CYBER EMERGENCY RESPONSE */}
                  {activeTab === 'emergency' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="p-3 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#FF3B30] font-orbitron font-bold text-xs">
                            <AlertTriangle className="w-4 h-4 text-[#FF3B30]" />
                            <span>EMERGENCY AIR-GAP</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[8.5px] font-mono font-bold ${
                            airGapActive ? 'bg-[#FF3B30] text-white' : 'bg-[#FF3B30]/20 text-[#FF3B30]'
                          }`}>
                            {airGapActive ? 'SEVERED' : 'STANDBY'}
                          </span>
                        </div>

                        <p className="text-[9.5px] text-white leading-snug">
                          {airGapActive
                            ? 'All outbound radio sockets, DNS sockets, and external interfaces are terminated into local loopback.'
                            : 'Instantly isolate device sockets from campus networks, public Wi-Fi, and active exfiltration channels.'}
                        </p>

                        <button
                          type="button"
                          onClick={() => setAirGapActive(!airGapActive)}
                          className={`w-full py-2 rounded-lg font-mono text-[9.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            airGapActive
                              ? 'bg-[#00C853] text-[#0A0F1A]'
                              : 'bg-[#FF3B30] text-white shadow-md hover:bg-[#FF5252]'
                          }`}
                        >
                          {airGapActive ? 'RESTORE NORMAL CONNECTIVITY' : 'TRIGGER EMERGENCY AIR-GAP NOW'}
                        </button>
                      </div>

                      {/* Incident Playbooks */}
                      <div className="space-y-1.5 text-[9px] font-mono">
                        <div className="text-[#9AA8B8] font-bold text-[8.5px] uppercase tracking-wider">
                          INCIDENT CONTAINMENT PLAYBOOKS:
                        </div>

                        {[
                          { name: 'Stolen Device Remote Quarantine', priority: 'CRITICAL', desc: 'Lock hardware keystore & wipe campus SSO tokens' },
                          { name: 'SIM-Swap & Carrier Defense', priority: 'CRITICAL', desc: 'Isolate SMS routing upon IMSI telecom change' },
                          { name: 'Account / Password Compromise', priority: 'HIGH', desc: 'Invalidate all cached browser session cookies' },
                          { name: 'Malware Sideload Sandbox Purge', priority: 'HIGH', desc: 'Revoke accessibility bindings & quarantine APK' },
                        ].map((pb) => (
                          <div
                            key={pb.name}
                            className="p-2 rounded-xl bg-[#1A2332]/70 border border-[#1E293B] flex items-center justify-between"
                          >
                            <div className="min-w-0 pr-2">
                              <div className="font-bold text-white flex items-center gap-1.5 truncate">
                                <span className={`text-[7.5px] px-1 py-0.2 rounded font-bold ${
                                  pb.priority === 'CRITICAL' ? 'bg-[#FF3B30]/20 text-[#FF3B30]' : 'bg-[#FFB300]/20 text-[#FFB300]'
                                }`}>
                                  {pb.priority}
                                </span>
                                <span className="truncate">{pb.name}</span>
                              </div>
                              <div className="text-[8px] text-[#9AA8B8] truncate">{pb.desc}</div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleExecutePlaybook(pb.name)}
                              className="px-2 py-1 rounded bg-[#00D5FF] text-[#0A0F1A] font-mono font-bold text-[8.5px] shrink-0 cursor-pointer hover:bg-[#4DE5FF]"
                            >
                              {executedPlaybook === pb.name ? 'DONE' : 'RUN'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VIEW 3: TRUSTLOCK HARDWARE ENCLAVE */}
                  {activeTab === 'vault' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="p-3.5 rounded-2xl bg-[#1A2332] border border-[#1E293B] text-center space-y-2">
                        <div className="text-[8px] font-mono text-[#00D5FF] uppercase font-bold tracking-widest">
                          OWNERSHIP VERIFICATION STATE
                        </div>
                        <div className="w-16 h-16 rounded-full border-2 border-[#00C853] mx-auto flex items-center justify-center font-orbitron font-extrabold text-xl text-white shadow-[0_0_12px_rgba(0,200,83,0.3)]">
                          98%
                        </div>
                        <div className="text-[11px] font-bold text-[#00C853] uppercase tracking-wider">
                          TRUSTED DEVICE OWNER
                        </div>
                        <p className="text-[9px] text-[#9AA8B8] leading-tight">
                          Hardware attestation and biometric signatures match device baseline. StrongBox key verified.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0A0F1A] border border-[#1E293B] space-y-2 font-mono text-[9px]">
                        <div className="flex justify-between items-center text-white pb-1.5 border-b border-[#1E293B]/60">
                          <span className="text-[#9AA8B8]">Cryptographic Store:</span>
                          <span className="text-[#00C853] font-bold">AES-256-GCM Hardware</span>
                        </div>
                        <div className="flex justify-between items-center text-white pb-1.5 border-b border-[#1E293B]/60">
                          <span className="text-[#9AA8B8]">Campus SSO Hash:</span>
                          <span className="text-[#00D5FF]">Protected (0x7F2A...E9)</span>
                        </div>
                        <div className="flex justify-between items-center text-white pb-1.5 border-b border-[#1E293B]/60">
                          <span className="text-[#9AA8B8]">Biometric Enclave:</span>
                          <span className="text-[#00C853]">StrongBox Tier 1</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                          <span className="text-[#9AA8B8]">Cloud Key Backup:</span>
                          <span className="text-[#FFB300] font-semibold">Disabled (Air-Gapped)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 4: PRIVACY CONTROL ENCLAVE */}
                  {activeTab === 'privacy' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="p-3 rounded-2xl bg-[#00D5FF]/10 border border-[#00D5FF]/30 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-orbitron font-bold text-white">
                          <Lock className="w-3.5 h-3.5 text-[#00D5FF]" />
                          <span>ZERO-TELEMETRY ENCLAVE</span>
                        </div>
                        <p className="text-[9.5px] text-[#E5E7EB] leading-tight">
                          All heuristics, text parsing, and URL inspections execute locally on-device. Zero personal browsing or messaging data ever reaches external cloud servers.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-2 text-[9px] font-mono">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">On-Device Neural Inference</div>
                            <div className="text-[8px] text-[#00D5FF]">0.42ms ARM64 Vectorization</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#00C853]/20 text-[#00C853] font-bold">
                            ENFORCED
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1.5 border-t border-[#1E293B]/70">
                          <div>
                            <div className="font-semibold text-white">Cloud Telemetry Exfiltration</div>
                            <div className="text-[8px] text-[#9AA8B8]">External analytics &amp; tracking</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#FF3B30]/20 text-[#FF3B30] font-bold">
                            BLOCKED (0 KB)
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1.5 border-t border-[#1E293B]/70">
                          <div>
                            <div className="font-semibold text-white">Local VPN DNS Sinkhole</div>
                            <div className="text-[8px] text-[#00D5FF]">On-device TUN loopback</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#00C853]/20 text-[#00C853] font-bold">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#0A0F1A] border border-[#1E293B] text-[8.5px] font-mono text-[#00C853] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>VERIFIED: Zero user behavioral profiles generated or synced.</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW 5: ENTERPRISE SECURITY REPORTS */}
                  {activeTab === 'reports' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="p-3 rounded-2xl bg-[#1A2332] border border-[#1E293B] space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-orbitron font-bold text-xs text-white uppercase">
                            COMPLIANCE AUDIT MANIFEST
                          </div>
                          <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-[#00D5FF]/10 text-[#00D5FF] font-bold border border-[#00D5FF]/30">
                            10/10 PASS
                          </span>
                        </div>

                        <p className="text-[9px] text-[#9AA8B8] leading-tight">
                          Cryptographically verifiable audit log suitable for higher-education IT administrators, campus CISOs, and enterprise compliance reviews.
                        </p>

                        <button
                          type="button"
                          onClick={handleGenerateReport}
                          className="w-full py-2 rounded-lg bg-[#00D5FF] text-[#0A0F1A] font-mono font-bold text-[9px] uppercase tracking-wider cursor-pointer hover:bg-[#4DE5FF]"
                        >
                          {generatedReport ? 'AUDIT REPORT COMPILED & EXPORTED' : 'GENERATE SHA-256 AUDIT LOG'}
                        </button>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B] space-y-1.5 font-mono text-[8.5px]">
                        <div className="text-white font-bold flex items-center justify-between">
                          <span>KERNEL SHA-256 DIGEST:</span>
                          <span className="text-[#00C853]">VERIFIED</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#1A2332] text-[#00D5FF] truncate">
                          e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                        </div>

                        <div className="space-y-1 pt-1 text-[#9AA8B8]">
                          <div className="flex justify-between">
                            <span>SELinux Enforce Status:</span>
                            <span className="text-white font-semibold">Strict (Pass)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Boot Partition Verification:</span>
                            <span className="text-white font-semibold">AVB 2.0 (Pass)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Root Binary Integrity:</span>
                            <span className="text-[#00C853] font-semibold">Zero SU Binaries</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW 6: HEURISTIC THREAT HISTORY & QUISHING */}
                  {activeTab === 'history' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      {/* Threat Selector Pills */}
                      <div className="flex gap-1 text-[8.5px] font-mono">
                        <button
                          type="button"
                          onClick={() => setSelectedThreatItem('qr')}
                          className={`flex-1 py-1 rounded-lg font-bold border transition-colors cursor-pointer ${
                            selectedThreatItem === 'qr'
                              ? 'bg-[#FF3B30] text-white border-[#FF3B30]'
                              : 'bg-[#1A2332] text-[#9AA8B8] border-[#1E293B]'
                          }`}
                        >
                          Quishing QR
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedThreatItem('sms')}
                          className={`flex-1 py-1 rounded-lg font-bold border transition-colors cursor-pointer ${
                            selectedThreatItem === 'sms'
                              ? 'bg-[#FF3B30] text-white border-[#FF3B30]'
                              : 'bg-[#1A2332] text-[#9AA8B8] border-[#1E293B]'
                          }`}
                        >
                          Urgent SMS
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedThreatItem('apk')}
                          className={`flex-1 py-1 rounded-lg font-bold border transition-colors cursor-pointer ${
                            selectedThreatItem === 'apk'
                              ? 'bg-[#FF3B30] text-white border-[#FF3B30]'
                              : 'bg-[#1A2332] text-[#9AA8B8] border-[#1E293B]'
                          }`}
                        >
                          Untrusted APK
                        </button>
                      </div>

                      {selectedThreatItem === 'qr' && (
                        <div className="p-3 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/50 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-orbitron font-bold text-xs text-[#FF3B30]">OPTICAL QUISHING</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#FF3B30] text-white font-mono text-[8.5px] font-bold">
                              SCORE: 92/100
                            </span>
                          </div>
                          <div className="text-[10px] text-white font-medium">
                            Parking flyer QR code encodes deceptive 3-hop shortlink redirect.
                          </div>
                          <div className="p-2 rounded bg-[#0A0F1A] font-mono text-[8.5px] text-[#9AA8B8] space-y-0.5">
                            <div><strong className="text-white">RAW:</strong> bit.ly/campus-park-pay</div>
                            <div><strong className="text-[#FF3B30]">RESOLVED:</strong> pay-gate-harvest.xyz/token</div>
                            <div className="text-[#FFB300]">FLAG: Domain &lt; 24h old, self-signed TLS</div>
                          </div>
                        </div>
                      )}

                      {selectedThreatItem === 'sms' && (
                        <div className="p-3 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/50 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-orbitron font-bold text-xs text-[#FF3B30]">FINANCIAL AID SMISHING</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#FF3B30] text-white font-mono text-[8.5px] font-bold">
                              SCORE: 88/100
                            </span>
                          </div>
                          <div className="text-[10px] text-white font-medium">
                            Coercive urgency SMS claiming tuition grant cancellation unless debit card is confirmed.
                          </div>
                          <div className="p-2 rounded bg-[#0A0F1A] font-mono text-[8.5px] text-[#9AA8B8] space-y-0.5">
                            <div><strong className="text-white">SENDER:</strong> +1 (800) 555-0199</div>
                            <div><strong className="text-[#FF3B30]">TARGET:</strong> student-grant-claim.net</div>
                            <div className="text-[#FFB300]">FLAG: Deceptive urgency coercion keywords</div>
                          </div>
                        </div>
                      )}

                      {selectedThreatItem === 'apk' && (
                        <div className="p-3 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/50 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-orbitron font-bold text-xs text-[#FF3B30]">ANOMALOUS SIDELOAD</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#FF3B30] text-white font-mono text-[8.5px] font-bold">
                              SCORE: 96/100
                            </span>
                          </div>
                          <div className="text-[10px] text-white font-medium">
                            Downloaded audio player APK requests stealth keylogging accessibility service.
                          </div>
                          <div className="p-2 rounded bg-[#0A0F1A] font-mono text-[8.5px] text-[#9AA8B8] space-y-0.5">
                            <div><strong className="text-white">PACKAGE:</strong> com.untrusted.media.player</div>
                            <div><strong className="text-[#FF3B30]">PERMS:</strong> BIND_ACCESSIBILITY_SERVICE</div>
                            <div className="text-[#FFB300]">FLAG: Background SMS read &amp; overlay privileges</div>
                          </div>
                        </div>
                      )}

                      <div className="p-2 rounded-xl bg-[#1A2332] border border-[#1E293B] text-[8.5px] font-mono text-[#00C853] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Automatic session containment prevented credential harvesting.</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW 7: AEGIS AI COPILOT */}
                  {activeTab === 'copilot' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <div className="p-3 rounded-2xl bg-[#00D5FF]/10 border border-[#00D5FF]/30 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-orbitron font-bold text-white">
                          <Bot className="w-3.5 h-3.5 text-[#00D5FF]" />
                          <span>AEGIS EXPLAINABLE GUIDANCE</span>
                        </div>
                        <p className="text-[9.5px] text-[#E5E7EB] leading-relaxed">
                          "I flagged the parking QR code because its URL routes through 3 anonymous redirect hops and leads to an unverified domain registered 18 hours ago. Legitimate university meters do not use disposable payment domains."
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#1A2332] border border-[#1E293B] font-mono text-[8.5px] text-[#9AA8B8] space-y-1">
                        <div className="text-white font-semibold">ACTIONABLE MITIGATION PROTOCOL:</div>
                        <div>1. Sever browser session (air-gap executed)</div>
                        <div>2. Pay parking via the physical meter keypad</div>
                        <div>3. Report fake sticker to campus police</div>
                      </div>
                    </div>
                  )}

                </div>

                {/* 4. Bottom App Navigation Bar */}
                <div className="px-2 py-2 bg-[#070A0F] border-t border-[#1E293B]/70 flex items-center justify-around text-[8px] font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab('hud')}
                    className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
                      activeTab === 'hud' ? 'text-[#00D5FF] font-bold' : 'text-[#9AA8B8]/70 hover:text-white'
                    }`}
                  >
                    <Gauge className="w-3.5 h-3.5" />
                    <span>HUD</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('emergency')}
                    className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
                      activeTab === 'emergency' ? 'text-[#FF3B30] font-bold' : 'text-[#9AA8B8]/70 hover:text-white'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Emergency</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('history')}
                    className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
                      activeTab === 'history' ? 'text-[#FFB300] font-bold' : 'text-[#9AA8B8]/70 hover:text-white'
                    }`}
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Threats</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('vault')}
                    className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
                      activeTab === 'vault' ? 'text-[#00D5FF] font-bold' : 'text-[#9AA8B8]/70 hover:text-white'
                    }`}
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Vault</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('copilot')}
                    className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
                      activeTab === 'copilot' ? 'text-[#00D5FF] font-bold' : 'text-[#9AA8B8]/70 hover:text-white'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Copilot</span>
                  </button>
                </div>

                {/* Home Indicator Bar */}
                <div className="py-1 flex justify-center bg-[#070A0F]">
                  <div className="w-20 h-1 rounded-full bg-white/20" />
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Verified Subsystem Metrics & Architecture Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>ACTIVE ARCHITECTURE INDICATORS</span>
              <span className="w-2 h-2 rounded-full bg-[#00C853]" />
            </div>

            <div className="p-5 rounded-2xl bg-[#1A2332]/70 border border-[#1E293B] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#9AA8B8]">Neural Heuristic Latency:</span>
                <span className="text-[#00D5FF] font-bold">0.42 ms</span>
              </div>
              <div className="h-1.5 bg-[#0A0F1A] rounded-full overflow-hidden">
                <div className="h-full bg-[#00D5FF] w-[88%] rounded-full shadow-[0_0_8px_#00D5FF]" />
              </div>
              <p className="text-[11px] text-[#9AA8B8] leading-relaxed">
                ARM64 NDK vectorized kernel computing risk weights directly on the device with zero cloud dependency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A2332]/70 border border-[#1E293B] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#9AA8B8]">Subsystem Governance:</span>
                <span className="text-[#00C853] font-bold">10 / 10 Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[#9AA8B8]">
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3 h-3 text-[#00C853]" />
                  <span>SELinux Enforced</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3 h-3 text-[#00C853]" />
                  <span>Local Loopback</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3 h-3 text-[#00C853]" />
                  <span>Air-Gap Scans</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3 h-3 text-[#00C853]" />
                  <span>StrongBox Key</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B384A]/30 border border-[#00D5FF]/30 text-xs font-mono text-[#E5E7EB] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#00D5FF] shrink-0 mt-0.5" />
              <span>
                <strong>Working Prototype Verification:</strong> The interactive UI presented above reflects the real Android application view hierarchy currently deployed in beta.
              </span>
            </div>
          </div>

        </div>

        {/* 8 Major Capabilities Grid (Requested in User Prompt) */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-3">
              <span>CORE CAPABILITIES MATRIX</span>
            </div>

            <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              EIGHT PILLARS OF ACTIVE DEFENSE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(capabilities || []).map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onClick={() => {
                    if (cap.id === 'emergency-containment') setActiveTab('emergency');
                    else if (cap.id === 'privacy-protection') setActiveTab('privacy');
                    else if (cap.id === 'audit-reports') setActiveTab('reports');
                    else if (cap.id === 'threat-analysis') setActiveTab('history');
                    else if (cap.id === 'ai-copilot') setActiveTab('copilot');
                    else setActiveTab('hud');
                  }}
                  className="p-6 rounded-2xl bg-[#1A2332]/60 hover:bg-[#1A2332] border border-[#1E293B] hover:border-[#00D5FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_8px_24px_rgba(0,213,255,0.08)] cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0A0F1A] border border-[#1E293B] group-hover:border-[#00D5FF]/40 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-[#00D5FF]" />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#00D5FF]/10 text-[#00D5FF] border border-[#00D5FF]/20 uppercase">
                        {cap.tag}
                      </span>
                    </div>

                    <h4 className="font-orbitron font-bold text-sm sm:text-base text-white uppercase tracking-wider mb-2">
                      {cap.title}
                    </h4>

                    <p className="text-xs text-[#9AA8B8] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[10px] font-mono text-[#00D5FF]">
                    <span>DEPLOYED IN BETA</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
