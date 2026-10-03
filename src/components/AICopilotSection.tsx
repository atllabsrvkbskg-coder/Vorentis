import React, { useState } from 'react';
import { FeatureIcon } from './FeatureIcons';
import { Send, CheckCircle2, ShieldAlert, Sparkles, MessageSquare, ArrowRight, CornerDownLeft } from 'lucide-react';

interface CopilotSample {
  id: string;
  query: string;
  context: string;
  response: string;
  indicators: string[];
  verdict: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
}

export const AICopilotSection: React.FC = () => {
  const samples: CopilotSample[] = [
    {
      id: 'qr-flag',
      query: 'Why was this QR code flagged as suspicious?',
      context: 'Scanned at a public parking terminal in downtown',
      response:
        'The QR code encodes a shortened bit.ly URL that redirects through three unverified hops before attempting to load an external payment form. Legitimate municipal parking services use verified primary domains without third-party redirection cloaking. I recommend paying via the official meter physical terminal.',
      indicators: ['3-hop nested redirect', 'Domain registration < 72 hours old', 'Missing official SSL merchant validation'],
      verdict: 'SUSPICIOUS',
    },
    {
      id: 'sms-bank',
      query: 'I got an SMS saying my bank account is locked. Is this real?',
      context: 'SMS from unknown 10-digit number claiming account suspension',
      response:
        'This is a classic urgency-coercion phishing attempt. The link leads to "secure-bank-verify.net", not your bank\'s genuine domain. Legitimate financial institutions do not demand urgent account verification via arbitrary 10-digit SMS senders. Do not open the link or enter your credentials.',
      indicators: ['Urgency manipulation keywords', 'Homoglyph domain imitation', 'Unregistered sender shortcode'],
      verdict: 'DANGEROUS',
    },
    {
      id: 'apk-install',
      query: 'Is this downloaded media player APK safe to install?',
      context: 'APK downloaded from third-party forum mirror',
      response:
        'The APK analysis flags excessive permissions. This media player requests READ_SMS, RECEIVE_BOOT_COMPLETED, and ACCESSIBILITY_SERVICE. Standard media players have no valid technical requirement to intercept SMS or monitor screen accessibility events. Sideloading this APK introduces severe keylogging risk.',
      indicators: ['Anomalous accessibility service binding', 'SMS read permission requested', 'Self-signed invalid debug certificate'],
      verdict: 'DANGEROUS',
    },
    {
      id: 'clicked-link',
      query: 'What should I do if I already clicked the link?',
      context: 'User tapped link 2 minutes ago before warning',
      response:
        'First: Close the browser tab immediately. If you entered any username, password, or PIN, change that credential immediately from a separate secure device. If the site prompted you to download any file or profile, do not install it. VORENTIS has isolated your browser session cache to prevent persistent token extraction.',
      indicators: ['Immediate session containment active', 'No malicious APK download executed'],
      verdict: 'SAFE',
    },
  ];

  const [activeSampleId, setActiveSampleId] = useState<string>('qr-flag');
  const [customInput, setCustomInput] = useState<string>('');
  const [customResponses, setCustomResponses] = useState<string[]>([]);

  const activeSample =
    (samples || []).find((s) => s.id === activeSampleId) ||
    samples[0] || {
      id: 'qr-flag',
      query: '',
      context: '',
      response: '',
      indicators: [],
      verdict: 'SAFE',
    };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setCustomResponses((prev) => [
      ...prev,
      `Aegis Analysis: Regarding "${customInput}" — In our on-device telemetry model, digital artifacts are evaluated against cryptographic signatures and domain reputation registries. If this involves an unverified link or file, treat it with caution until scanned directly by VORENTIS.`,
    ]);
    setCustomInput('');
  };

  return (
    <section id="ai-intelligence" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-15 pointer-events-none blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse, #00D5FF 0%, rgba(11,15,23,0) 70%)',
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4">
            <span>SECTION 07 • ARTIFICIAL INTELLIGENCE</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            INTELLIGENCE THAT EXPLAINS THE RISK.
          </h2>

          <p className="text-[#9AA8B8] text-base sm:text-lg leading-relaxed">
            In VORENTIS, AI serves strictly as an assistance and interpretation layer. Rather than operating as an opaque, autonomous authority, intelligence is applied to deconstruct complex technical signals, explain why an artifact was flagged, and guide contextual security choices.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sample Inquiries & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-2">
              SELECT AN INQUIRY TO INSPECT AEGIS REASONING:
            </div>

            {(samples || []).map((sample) => {
              const isSelected = sample.id === activeSampleId;
              return (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => setActiveSampleId(sample.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#1A2332] border-[#00D5FF] shadow-[0_0_20px_rgba(0,213,255,0.15)]'
                      : 'bg-[#1A2332]/40 border-[#1E293B] hover:border-[#00D5FF]/40 hover:bg-[#1A2332]/70'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-[#00D5FF]/10 border-[#00D5FF]/40 text-[#00D5FF]'
                        : 'bg-[#0A0F1A] border-[#1E293B] text-[#9AA8B8]'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-white mb-1 leading-snug">
                      {sample.query}
                    </div>
                    <div className="text-[10px] font-mono text-[#9AA8B8] truncate">
                      Context: {sample.context}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Responsible AI Engineering Grounding */}
            <div className="p-4 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-[11px] font-mono text-[#9AA8B8] leading-relaxed space-y-1.5">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF]" />
                <span>RESPONSIBLE AI BOUNDARY &amp; INTEGRITY</span>
              </div>
              <p>
                Aegis operates strictly as an assistance and interpretation tool. VORENTIS does not claim infallible detection, zero false positives, autonomous cybersecurity execution, or absolute threat prevention. Guidance is provided to help users make informed, verifiable decisions.
              </p>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mobile Copilot Screen (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            
            <div className="w-full max-w-[480px] bg-[#0A0F1A] rounded-3xl p-5 border border-[#1E293B] shadow-2xl relative">
              
              {/* Copilot Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-3">
                  {/* Aegis Glowing Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#1A2332] border border-[#00D5FF]/50 flex items-center justify-center relative shadow-[0_0_12px_rgba(0,213,255,0.3)]">
                    <FeatureIcon name="ai-copilot" size={24} active={true} />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00C853] border-2 border-[#0A0F1A]" />
                  </div>
                  <div>
                    <div className="font-orbitron font-bold text-sm text-white tracking-wider flex items-center gap-1.5">
                      <span>AEGIS</span>
                      <span className="text-[10px] text-[#00D5FF] font-mono font-normal">v1.0</span>
                    </div>
                    <div className="text-[10px] font-mono text-[#9AA8B8]">
                      AI SECURITY COPILOT
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#00C853] bg-[#00C853]/10 px-2 py-0.5 rounded border border-[#00C853]/30">
                  READY
                </span>
              </div>

              {/* Chat Stream Body */}
              <div className="py-5 space-y-4 max-h-[380px] overflow-y-auto pr-1">
                
                {/* Initial Aegis Greeting from Brand/UI Board */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1A2332] border border-[#00D5FF]/40 flex items-center justify-center shrink-0 mt-1">
                    <FeatureIcon name="ai-copilot" size={16} active={true} />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#1A2332]/90 border border-[#1E293B] text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                    <p className="font-medium text-white mb-1">
                      Hello! I'm Aegis, your AI security copilot.
                    </p>
                    <p className="text-[#9AA8B8] text-xs">
                      Ask me anything about a link, message, app, QR code or threat.
                    </p>
                  </div>
                </div>

                {/* User Prompt */}
                <div className="flex items-start justify-end gap-2">
                  <div className="p-3 rounded-2xl rounded-tr-sm bg-[#00D5FF]/15 border border-[#00D5FF]/40 text-xs sm:text-sm text-white leading-relaxed max-w-[85%]">
                    {activeSample.query}
                  </div>
                </div>

                {/* Aegis Intelligent Response */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1A2332] border border-[#00D5FF]/40 flex items-center justify-center shrink-0 mt-1">
                    <FeatureIcon name="ai-copilot" size={16} active={true} />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-[#1A2332] border border-[#1E293B] text-xs sm:text-sm text-[#E2E8F0] leading-relaxed space-y-3">
                    <p>{activeSample.response}</p>

                    {/* Detected Indicators Taglist */}
                    <div className="pt-2 border-t border-[#1E293B]/70">
                      <div className="text-[10px] font-mono text-[#00D5FF] uppercase tracking-wider mb-1.5">
                        OBSERVED SIGNALS:
                      </div>
                      <div className="space-y-1">
                        {(activeSample?.indicators || []).map((ind, i) => (
                          <div key={i} className="text-[11px] font-mono text-[#9AA8B8] flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#FFB300]" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Responses if user typed */}
                {(customResponses || []).map((cr, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1A2332] border border-[#00D5FF]/40 flex items-center justify-center shrink-0 mt-1">
                      <FeatureIcon name="ai-copilot" size={16} active={true} />
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-sm bg-[#1A2332] border border-[#1E293B] text-xs text-[#E2E8F0] leading-relaxed">
                      {cr}
                    </div>
                  </div>
                ))}

              </div>

              {/* Input Form Bar */}
              <form onSubmit={handleSendCustom} className="pt-3 border-t border-[#1E293B] flex items-center gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask Aegis anything..."
                  className="flex-1 bg-[#1A2332] border border-[#1E293B] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#9AA8B8]/60 focus:outline-none focus:border-[#00D5FF]"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#00D5FF] text-[#0A0F1A] hover:bg-[#4DE5FF] transition-colors cursor-pointer"
                  title="Submit inquiry"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AICopilotSection;
