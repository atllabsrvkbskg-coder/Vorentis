import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Wifi,
  Sparkles,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  FileCode,
  ExternalLink,
  Shield,
  Lock,
} from 'lucide-react';

interface TechSpecRow {
  category: string;
  implementation: string;
  details: string;
  badge: string;
}

export const TechnicalSpecsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TABLE' | 'STACK_DETAILS' | 'PERMISSIONS'>('TABLE');

  const specs: TechSpecRow[] = [
    {
      category: 'Language',
      implementation: '100% Kotlin',
      details: 'Strict type safety, Coroutines, and modern idiomatic Kotlin 2.0 language features throughout the entire codebase.',
      badge: '100% Kotlin',
    },
    {
      category: 'UI Framework',
      implementation: 'Jetpack Compose with Material Design 3',
      details: 'Modern reactive UI pipeline utilizing Compose declarative state models, dynamic theming, and smooth hardware-accelerated animations.',
      badge: 'Compose + M3',
    },
    {
      category: 'Database',
      implementation: 'Android Room Database (SQLite via Kotlin KSP)',
      details: 'Hardware-backed encrypted Room entities protected by Android Keystore for zero-knowledge offline secret caching.',
      badge: 'Room + KSP',
    },
    {
      category: 'VPN Engine',
      implementation: 'Android android.net.VpnService',
      details: 'Zero-proxy on-device TUN interface sinkholing malicious domains and filtering tracking telemetry locally.',
      badge: 'Native VpnService',
    },
    {
      category: 'Camera / QR',
      implementation: 'Android CameraX & ML Kit Barcode Scanning',
      details: 'High-speed camera lifecycle management paired with ML Kit on-device barcode parsing for zero-latency quishing intercept.',
      badge: 'CameraX + ML Kit',
    },
    {
      category: 'AI Model',
      implementation: 'Google Gemini 1.5 Flash API + Local Rule-Based Heuristic Fallback',
      details: 'Sub-second cloud neural evaluation paired with an offline rule-based heuristic engine when air-gapped or disconnected.',
      badge: 'Gemini 1.5 Flash + Heuristics',
    },
    {
      category: 'Device Telemetry',
      implementation: 'KeyguardManager, TelephonyManager, ConnectivityManager, WifiManager, ActivityManager, AccessibilityManager',
      details: 'Granular hardware and system queries for SIM swap validation, Wi-Fi encryption checks, RAM telemetry, and accessibility service audits.',
      badge: 'Hardware Telemetry HAL',
    },
    {
      category: 'Supported OS',
      implementation: 'Android 8.0 (API 26) through Android 15+',
      details: 'Optimized for ARM64-v8a and x86_64 architectures across flagship and industrial Android mobile devices.',
      badge: 'API 26 – API 35+',
    },
    {
      category: 'App Size',
      implementation: '~50 MB compiled APK',
      details: 'Compact binary footprint containing bundled ML Kit models, Room database schema, and native cryptographic libraries.',
      badge: '~50 MB APK',
    },
  ];

  return (
    <div id="technical-specs" className="w-full text-left space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0F1A] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-2">
            <Terminal className="w-3.5 h-3.5 text-[#00D5FF]" />
            <span>OFFICIAL ARCHITECTURE SPECIFICATION</span>
          </div>
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white uppercase tracking-wider">
            TECHNICAL SPECIFICATIONS MATRIX
          </h3>
        </div>

        {/* Sub-Tabs */}
        <div className="flex items-center bg-[#0A0F1A] p-1.5 rounded-2xl border border-[#1E293B] text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('TABLE')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'TABLE'
                ? 'bg-[#00D5FF] text-[#0A0F1A] font-bold shadow-[0_0_12px_rgba(0,213,255,0.3)]'
                : 'text-[#9AA8B8] hover:text-white'
            }`}
          >
            Blueprint Matrix
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('STACK_DETAILS')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'STACK_DETAILS'
                ? 'bg-[#00D5FF] text-[#0A0F1A] font-bold shadow-[0_0_12px_rgba(0,213,255,0.3)]'
                : 'text-[#9AA8B8] hover:text-white'
            }`}
          >
            Layer Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('PERMISSIONS')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'PERMISSIONS'
                ? 'bg-[#00D5FF] text-[#0A0F1A] font-bold shadow-[0_0_12px_rgba(0,213,255,0.3)]'
                : 'text-[#9AA8B8] hover:text-white'
            }`}
          >
            Permissions Audit
          </button>
        </div>
      </div>

      {/* Tab 1: Official Blueprint Specs Table */}
      {activeTab === 'TABLE' && (
        <div className="rounded-2xl bg-[#0A0F1A] border border-[#1E293B] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E293B] bg-[#1A2332]/60 text-xs font-mono text-[#9AA8B8] uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold text-white">Category</th>
                  <th className="py-4 px-6 font-bold text-white">Implementation in App</th>
                  <th className="py-4 px-6 font-bold text-white hidden md:table-cell">Technical Detail</th>
                  <th className="py-4 px-6 font-bold text-right text-white">Module Badge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/60 text-xs font-mono">
                {(specs || []).map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#1A2332]/40 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                      <span>{row.category}</span>
                    </td>
                    <td className="py-4 px-6 text-[#00D5FF] font-semibold">
                      {row.implementation}
                    </td>
                    <td className="py-4 px-6 text-[#9AA8B8] hidden md:table-cell leading-relaxed">
                      {row.details}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[10px] text-white">
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Layer Architecture Diagram */}
      {activeTab === 'STACK_DETAILS' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
          {/* Presentation Layer */}
          <div className="p-6 rounded-2xl bg-[#0A0F1A] border border-[#1E293B] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00D5FF] uppercase">
              <Smartphone className="w-4 h-4" />
              <span>Presentation Layer (Compose UI)</span>
            </div>
            <p className="text-xs text-[#9AA8B8] leading-relaxed">
              100% Jetpack Compose with Material Design 3. Employs StateFlow observables for reactive UI rendering without heavy fragment lifecycles or layout inflation overhead.
            </p>
            <div className="p-3 rounded-xl bg-[#1A2332] font-mono text-[11px] text-white space-y-1">
              <div>• Jetpack Compose Material 3</div>
              <div>• Kotlin Coroutines & Flow</div>
              <div>• Zero-Recomposition Micro-Optimizations</div>
              <div>• Dual-Mode State Orchestration</div>
            </div>
          </div>

          {/* Domain & Engine Layer */}
          <div className="p-6 rounded-2xl bg-[#0A0F1A] border border-[#1E293B] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00C853] uppercase">
              <Cpu className="w-4 h-4" />
              <span>Aegis™ Core Domain Engine</span>
            </div>
            <p className="text-xs text-[#9AA8B8] leading-relaxed">
              Pure business logic isolated from Android OS SDK dependencies where possible. Coordinates byte-level APK inspection, root heuristics, and SIM binding checks.
            </p>
            <div className="p-3 rounded-xl bg-[#1A2332] font-mono text-[11px] text-white space-y-1">
              <div>• Clean Architecture Use-Cases</div>
              <div>• Root & SU Binary Integrity Audit</div>
              <div>• SELinux Mode Detection</div>
              <div>• On-Device Offline Heuristics</div>
            </div>
          </div>

          {/* Infrastructure & Data Layer */}
          <div className="p-6 rounded-2xl bg-[#0A0F1A] border border-[#1E293B] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFB300] uppercase">
              <Database className="w-4 h-4" />
              <span>Data & Network Shield Layer</span>
            </div>
            <p className="text-xs text-[#9AA8B8] leading-relaxed">
              Android VpnService loopback driver, Room SQLite database with AES-256 encrypted isolation, and Gemini 1.5 Flash API connector for deep smishing evaluations.
            </p>
            <div className="p-3 rounded-xl bg-[#1A2332] font-mono text-[11px] text-white space-y-1">
              <div>• Android VpnService Packet Driver</div>
              <div>• Room Database (SQLite via KSP)</div>
              <div>• Android Keystore Hardware Enclave</div>
              <div>• Google Gemini 1.5 Flash API</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Permissions Audit */}
      {activeTab === 'PERMISSIONS' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1A] border border-[#1E293B] space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
            <div>
              <h3 className="font-orbitron font-bold text-base text-white uppercase">
                ANDROID SENSORS & SYSTEM PERMISSIONS AUDITED
              </h3>
              <p className="text-xs text-[#9AA8B8]">
                Aegis™ audits sensitive Android OS permissions to detect privilege creep and stealth background access.
              </p>
            </div>
            <span className="text-xs font-mono text-[#00D5FF]">7 MONITORED VECTORS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">1. Camera & Optical Sensors</div>
              <div className="text-[#9AA8B8] text-[11px]">Flags apps requesting background camera activation.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">2. Microphone & Audio Record</div>
              <div className="text-[#9AA8B8] text-[11px]">Detects ambient background recording without active notification.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">3. Background Fine Location</div>
              <div className="text-[#9AA8B8] text-[11px]">Identifies persistent GPS tracking by non-mapping applications.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">4. SMS & MMS Telephony</div>
              <div className="text-[#9AA8B8] text-[11px]">Critical banking vector; intercepts OTP and 2FA credential harvesting.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">5. Contacts & Call History</div>
              <div className="text-[#9AA8B8] text-[11px]">Audits exfiltration of personal and organizational address books.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2332] border border-[#1E293B] space-y-1">
              <div className="text-white font-bold">6. Accessibility Services Binding</div>
              <div className="text-[#FF3B30] text-[11px]">Highest threat vector: monitors potential keystroke logging & screen overlays.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalSpecsTable;
