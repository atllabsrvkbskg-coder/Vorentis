import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ShieldCheck,
  Clock,
  Sparkles,
  Building2,
  HelpCircle,
  Bug,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [inquiryType, setInquiryType] = useState<string>('Support & Feedback');
  const [message, setMessage] = useState<string>('');
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);

  const contactEmail = 'officialzentiq@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Build mailto link so user's client opens directly with prefilled subject & body
    const subject = encodeURIComponent(`[Vorentis - ${inquiryType}] Inquiry from ${name || 'User'}`);
    const body = encodeURIComponent(
      `Hello ZENTIQ Team,\n\nSender Name: ${name || 'N/A'}\nSender Email: ${email}\nInquiry Category: ${inquiryType}\n\nMessage:\n${message}\n\nSent via Vorentis Official Portal`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 6000);
  };

  const inquiryCategories = [
    { label: 'Campus & Education', icon: Building2 },
    { label: 'Enterprise / Fleets', icon: ShieldCheck },
    { label: 'Technical & Security', icon: Bug },
    { label: 'General Inquiry', icon: HelpCircle },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0F1A] border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00D5FF]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1A2332] border border-[#1E293B] text-[11px] font-mono tracking-[0.2em] text-[#00D5FF] uppercase mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION WITH ZENTIQ</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            CONNECT WITH <span className="text-[#00D5FF]">ZENTIQ.</span>
          </h2>

          <p className="text-[#9AA8B8] text-base sm:text-lg leading-relaxed">
            Have questions about smart-campus pilots, higher-education evaluations, or need platform assistance? Reach our engineering and leadership team directly.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Copy Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Showcase Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A2332]/80 border border-[#1E293B] relative overflow-hidden group hover:border-[#00D5FF]/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D5FF]/5 blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#00D5FF] uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853]" />
                <span>OFFICIAL INBOX // DIRECT RESPONSE</span>
              </div>

              <div className="text-xs text-[#9AA8B8] uppercase tracking-wider font-mono">
                Official Contact Email
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B]">
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-[#00D5FF] transition-colors truncate"
                  title="Click to send email"
                >
                  {contactEmail}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A2332] hover:bg-[#222E42] border border-[#1E293B] text-xs font-mono text-[#00D5FF] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00C853]" />
                      <span className="text-[#00C853]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1E293B]/70 space-y-3.5 text-xs text-[#9AA8B8]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0F1A] border border-[#1E293B] flex items-center justify-center text-[#00D5FF] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Fast Turnaround:</span> Inquiries answered within 24–48 hours.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0F1A] border border-[#1E293B] flex items-center justify-center text-[#00C853] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Leadership Engagement:</span> Inquiries reviewed directly by ZENTIQ leadership.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0F1A] border border-[#1E293B] flex items-center justify-center text-[#00D5FF] shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Operations &amp; Security Lead:</span> Atharva V. — COO, ZENTIQ.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Badge */}
            <div className="p-5 rounded-2xl bg-[#1A2332]/60 border border-[#1E293B] flex items-center justify-between">
              <div>
                <div className="font-orbitron font-bold text-xs text-white">
                  PUBLISHER &amp; LEADERSHIP
                </div>
                <div className="text-[11px] font-mono text-[#9AA8B8] mt-0.5">
                  ZENTIQ Technologies
                </div>
              </div>
              <a
                href={`mailto:${contactEmail}?subject=Direct%20Inquiry%20to%20ZENTIQ`}
                className="px-4 py-2 rounded-lg bg-[#00D5FF]/10 hover:bg-[#00D5FF]/20 border border-[#00D5FF]/40 text-[#00D5FF] text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mailer</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A2332]/80 border border-[#1E293B] relative">
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                SEND A MESSAGE TO ZENTIQ
              </h3>
              <p className="text-xs sm:text-sm text-[#9AA8B8] mb-6">
                Fill in the details below to dispatch your message directly to <span className="text-[#00D5FF] font-mono">{contactEmail}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type Radio / Chips */}
                <div>
                  <label className="block text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-2">
                    Inquiry Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {inquiryCategories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = inquiryType === cat.label;
                      return (
                        <button
                          key={cat.label}
                          type="button"
                          onClick={() => setInquiryType(cat.label)}
                          className={`p-2.5 rounded-xl border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#00D5FF]/15 border-[#00D5FF] text-[#00D5FF] shadow-[0_0_12px_rgba(0,213,255,0.2)]'
                              : 'bg-[#0A0F1A] border-[#1E293B] text-[#9AA8B8] hover:text-white hover:border-[#1E293B]/80'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="truncate text-[11px]">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00D5FF] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-[#00D5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00D5FF] transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-mono text-[#9AA8B8] uppercase tracking-wider mb-1.5">
                    Message / Question <span className="text-[#00D5FF]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you'd like to ask or discuss with ZENTIQ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1A] border border-[#1E293B] text-white text-xs sm:text-sm focus:outline-none focus:border-[#00D5FF] transition-colors resize-none font-mono"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#00D5FF] hover:bg-[#4DE5FF] text-[#0A0F1A] font-orbitron font-bold text-xs tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,213,255,0.4)] cursor-pointer"
                  >
                    <span>SEND MESSAGE TO ZENTIQ</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] font-mono text-[#9AA8B8]">
                    Direct routing to <span className="text-white">{contactEmail}</span>
                  </div>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-[#00C853]/10 border border-[#00C853]/30 text-xs font-mono text-[#00C853] flex items-center gap-2 animate-in fade-in duration-300">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Your mail client has been opened with your inquiry pre-loaded. We look forward to connecting!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
