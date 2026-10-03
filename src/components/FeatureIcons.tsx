import React from 'react';

interface FeatureIconProps {
  name:
    | 'dashboard'
    | 'threat-scan'
    | 'ai-copilot'
    | 'web-protection'
    | 'sms-guard'
    | 'call-protection'
    | 'qr-scanner'
    | 'apk-auditor'
    | 'privacy-vault'
    | 'settings';
  size?: number;
  className?: string;
  active?: boolean;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({
  name,
  size = 28,
  className = '',
  active = false,
}) => {
  const strokeColor = active ? '#00D4FF' : '#70E3FF';
  const fillColor = active ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 212, 255, 0.05)';

  const renderIcon = () => {
    switch (name) {
      case 'dashboard':
        return (
          // Shield with Checkmark
          <g>
            <path
              d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
              stroke={strokeColor}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={fillColor}
            />
            <path
              d="M9 11.5L11 13.5L15.5 9"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );

      case 'threat-scan':
        return (
          // Radar target reticle with concentric arcs and scan line
          <g>
            <circle cx="12" cy="12" r="9" stroke={strokeColor} strokeWidth="1.6" strokeDasharray="3 2" />
            <circle cx="12" cy="12" r="5.5" stroke={strokeColor} strokeWidth="1.6" fill={fillColor} />
            <circle cx="12" cy="12" r="2" fill={strokeColor} />
            <line x1="12" y1="3" x2="12" y2="7" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="12" y1="17" x2="12" y2="21" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="3" y1="12" x2="7" y2="12" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="17" y1="12" x2="21" y2="12" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
          </g>
        );

      case 'ai-copilot':
        return (
          // Futuristic AI Robot head with antennae & visor
          <g>
            {/* Top antenna */}
            <line x1="12" y1="2" x2="12" y2="5" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="2" r="1.2" fill={strokeColor} />
            {/* Head Box */}
            <rect
              x="4"
              y="5"
              width="16"
              height="14"
              rx="4"
              stroke={strokeColor}
              strokeWidth="1.8"
              fill={fillColor}
            />
            {/* Robot Visor / Eyes */}
            <circle cx="8.5" cy="11.5" r="1.6" fill={strokeColor} />
            <circle cx="15.5" cy="11.5" r="1.6" fill={strokeColor} />
            {/* Mouth status line */}
            <line x1="9" y1="15.5" x2="15" y2="15.5" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            {/* Ear bolts */}
            <line x1="2" y1="11" x2="4" y2="11" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="11" x2="22" y2="11" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        );

      case 'web-protection':
        return (
          // Globe with web coordinates
          <g>
            <circle cx="12" cy="12" r="9.5" stroke={strokeColor} strokeWidth="1.6" fill={fillColor} />
            <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke={strokeColor} strokeWidth="1.4" />
            <line x1="2.5" y1="12" x2="21.5" y2="12" stroke={strokeColor} strokeWidth="1.4" />
            <line x1="5" y1="7" x2="19" y2="7" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="1 1" />
            <line x1="5" y1="17" x2="19" y2="17" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="1 1" />
          </g>
        );

      case 'sms-guard':
        return (
          // Envelope with shield
          <g>
            <rect x="3" y="5" width="18" height="13" rx="2.5" stroke={strokeColor} strokeWidth="1.6" fill={fillColor} />
            <path d="M3 7L12 13L21 7" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Mini shield badge on bottom right */}
            <path
              d="M16 13L19 14.5V17C19 18.5 17.5 20 16 20.5C14.5 20 13 18.5 13 17V14.5L16 13Z"
              fill="#0B0F17"
              stroke={strokeColor}
              strokeWidth="1.4"
            />
          </g>
        );

      case 'call-protection':
        return (
          // Phone handset with wireless signal waves
          <g>
            <path
              d="M5 4C4.4 4 4 4.4 4 5C4 13.8 11.2 21 20 21C20.6 21 21 20.6 21 20V16.8C21 16.3 20.7 15.9 20.2 15.8L16.5 14.9C16.1 14.8 15.6 14.9 15.3 15.2L13.7 16.8C10.8 15.3 8.7 13.2 7.2 10.3L8.8 8.7C9.1 8.4 9.2 7.9 9.1 7.5L8.2 3.8C8.1 3.3 7.7 3 7.2 3H5Z"
              stroke={strokeColor}
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill={fillColor}
            />
            {/* Signal waves */}
            <path d="M15 5C17.2 6.2 18.8 8.8 19 11" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13 8C14.1 8.8 14.8 10 15 11.5" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
          </g>
        );

      case 'qr-scanner':
        return (
          // QR scanner viewfinder reticle
          <g>
            {/* Corner viewfinders */}
            <path d="M4 8V5C4 4.4 4.4 4 5 4H8" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M16 4H19C19.6 4 20 4.4 20 5V8" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M20 16V19C20 19.6 19.6 20 19 20H16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M8 20H5C4.4 20 4 19.6 4 19V16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            {/* Internal QR mini modules */}
            <rect x="7" y="7" width="3" height="3" fill={strokeColor} />
            <rect x="14" y="7" width="3" height="3" fill={strokeColor} />
            <rect x="7" y="14" width="3" height="3" fill={strokeColor} />
            <rect x="13" y="13" width="2" height="2" fill={strokeColor} />
            <rect x="15" y="15" width="2" height="2" fill={strokeColor} />
          </g>
        );

      case 'apk-auditor':
        return (
          // Document / Code sheet with shield badge
          <g>
            <path
              d="M6 3C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H14"
              stroke={strokeColor}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M14 3L19 8V12"
              stroke={strokeColor}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 3V8H19" stroke={strokeColor} strokeWidth="1.6" strokeLinejoin="round" />
            <line x1="8" y1="10" x2="12" y2="10" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="14" x2="11" y2="14" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            {/* Mini Auditor Shield */}
            <path
              d="M17 14L20.5 15.5V18.5C20.5 20.2 18.8 21.8 17 22.5C15.2 21.8 13.5 20.2 13.5 18.5V15.5L17 14Z"
              fill="#0B0F17"
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <path d="M16 18.2L16.8 19L18.2 17.5" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 'privacy-vault':
        return (
          // Padlock
          <g>
            <rect x="5" y="10" width="14" height="11" rx="2.5" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
            <path
              d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
              stroke={strokeColor}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="12" cy="15" r="1.5" fill={strokeColor} />
            <line x1="12" y1="16.5" x2="12" y2="18.5" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
          </g>
        );

      case 'settings':
        return (
          // Precision gear
          <g>
            <circle cx="12" cy="12" r="3.2" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
            <path
              d="M19.4 15A1.65 1.65 0 0 0 19.7 16.7L19.9 17.1A2 2 0 0 1 18.2 20A2 2 0 0 1 15.8 19.5L15.4 19.3A1.65 1.65 0 0 0 13.6 19.6A1.65 1.65 0 0 0 13 21.1V21.6A2 2 0 0 1 11 23.6A2 2 0 0 1 9 21.6V21.1A1.65 1.65 0 0 0 8.4 19.6A1.65 1.65 0 0 0 6.6 19.3L6.2 19.5A2 2 0 0 1 3.8 20A2 2 0 0 1 2.1 17.1L2.3 16.7A1.65 1.65 0 0 0 2.6 15A1.65 1.65 0 0 0 1.1 14.4H0.6A2 2 0 0 1 -1.4 12.4A2 2 0 0 1 0.6 10.4H1.1A1.65 1.65 0 0 0 2.6 9.8A1.65 1.65 0 0 0 2.3 8.1L2.1 7.7A2 2 0 0 1 3.8 4.8A2 2 0 0 1 6.2 5.3L6.6 5.5A1.65 1.65 0 0 0 8.4 5.2A1.65 1.65 0 0 0 9 3.7V3.2A2 2 0 0 1 11 1.2A2 2 0 0 1 13 3.2V3.7A1.65 1.65 0 0 0 13.6 5.2A1.65 1.65 0 0 0 15.4 5.5L15.8 5.3A2 2 0 0 1 18.2 4.8A2 2 0 0 1 19.9 7.7L19.7 8.1A1.65 1.65 0 0 0 19.4 9.8A1.65 1.65 0 0 0 20.9 10.4H21.4A2 2 0 0 1 23.4 12.4A2 2 0 0 1 21.4 14.4H20.9A1.65 1.65 0 0 0 19.4 15Z"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(0,212,255,0.2)]"
      >
        {renderIcon()}
      </svg>
    </div>
  );
};

export default FeatureIcon;
