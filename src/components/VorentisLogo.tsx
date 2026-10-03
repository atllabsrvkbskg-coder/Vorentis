import React from 'react';

interface VorentisLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  showPoweredBy?: boolean;
  variant?: 'cyan' | 'monochrome' | 'icon';
  className?: string;
}

export const VorentisShield: React.FC<{ size?: number; glow?: boolean; className?: string }> = ({
  size = 40,
  glow = true,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-md opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #00D4FF 0%, rgba(0,212,255,0) 70%)',
            transform: 'scale(1.2)',
          }}
        />
      )}
      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-[0_2px_12px_rgba(0,212,255,0.25)]"
      >
        <defs>
          {/* Shield Outer Rim Gradient */}
          <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DE5FF" />
            <stop offset="35%" stopColor="#00D4FF" />
            <stop offset="70%" stopColor="#007299" />
            <stop offset="100%" stopColor="#052538" />
          </linearGradient>

          {/* Shield Interior Gradient */}
          <linearGradient id="shieldInner" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#141D2E" />
            <stop offset="60%" stopColor="#0B0F17" />
            <stop offset="100%" stopColor="#05080E" />
          </linearGradient>

          {/* Stylized V Gradient */}
          <linearGradient id="vLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70EEFF" />
            <stop offset="60%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0082A3" />
          </linearGradient>

          <linearGradient id="vRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B8DE" />
            <stop offset="50%" stopColor="#007A99" />
            <stop offset="100%" stopColor="#004A5E" />
          </linearGradient>

          {/* Highlight Sheen */}
          <linearGradient id="sheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Hex-Shield Outline */}
        <path
          d="M50 4 L88 20 L88 64 C88 86 50 106 50 106 C50 106 12 86 12 64 L12 20 Z"
          fill="url(#shieldRim)"
        />

        {/* Inner Shield Body */}
        <path
          d="M50 8 L84 23 L84 63 C84 82 50 100 50 100 C50 100 16 82 16 63 L16 23 Z"
          fill="url(#shieldInner)"
          stroke="#00D4FF"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Subtle Top-Rim Bevel Highlight */}
        <path
          d="M50 8 L84 23 L76 26 L50 14 L24 26 L16 23 Z"
          fill="url(#sheen)"
        />

        {/* The Iconic Geometric V */}
        {/* Left Wing of V */}
        <path
          d="M32 30 L45 30 L50 68 L42 68 Z"
          fill="url(#vLeftGrad)"
        />
        {/* Right Wing of V */}
        <path
          d="M68 30 L55 30 L50 68 L58 68 Z"
          fill="url(#vRightGrad)"
        />
        {/* Central V Crest Core */}
        <path
          d="M50 42 L61 30 L50 72 L39 30 Z"
          fill="url(#vLeftGrad)"
        />
        {/* Center Sharp Bottom Point */}
        <path
          d="M45 66 L50 78 L55 66 L50 72 Z"
          fill="#A8F4FF"
        />
      </svg>
    </div>
  );
};

export const VorentisLogo: React.FC<VorentisLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false,
  showPoweredBy = false,
  variant = 'cyan',
  className = '',
}) => {
  const iconSizes = {
    sm: 28,
    md: 38,
    lg: 52,
    xl: 68,
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.24em]',
    xl: 'text-3xl sm:text-4xl tracking-[0.25em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <VorentisShield size={iconSizes[size]} glow={variant === 'cyan'} />
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline leading-none">
            <span
              className={`font-orbitron font-bold text-white uppercase ${textSizes[size]}`}
            >
              VORENTIS
            </span>
            <span className="font-orbitron text-[#00D4FF] text-xs font-semibold ml-0.5 relative -top-1.5">
              ™
            </span>
          </div>
          {/* Brand Byline directly down of VORENTIS */}
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-mono font-bold tracking-[0.22em] uppercase text-[#00D4FF] ${
                size === 'sm'
                  ? 'text-[8px]'
                  : size === 'md'
                  ? 'text-[9px] sm:text-[10px]'
                  : 'text-[11px] sm:text-xs'
              }`}
            >
              BY ZENTIQ
            </span>
          </div>
          {showTagline && !showPoweredBy && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] font-medium text-[#A6B0C3] uppercase">
                SECURE
              </span>
              <span className="text-[#00D4FF]/40 text-[9px]">•</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] font-medium text-[#A6B0C3] uppercase">
                INTELLIGENT
              </span>
              <span className="text-[#00D4FF]/40 text-[9px]">•</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] font-medium text-[#A6B0C3] uppercase">
                PRIVATE
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VorentisLogo;
