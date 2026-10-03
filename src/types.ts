export interface ThreatScenario {
  id: string;
  name: string;
  category: string;
  threatScore: number;
  riskLevel: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number;
  target: string;
  indicators: string[];
  aiAnalysis: string;
  recommendedAction: string;
}

export interface PlatformModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  scope: string;
  status: 'ACTIVE' | 'INTEGRATED' | 'PROTECTING';
}

export type DemoScreen =
  | 'DASHBOARD'
  | 'THREAT_SCAN'
  | 'AI_COPILOT'
  | 'THREAT_REPORT'
  | 'QR_SCANNER'
  | 'TRUSTLOCK_PANEL'
  | 'EMERGENCY_RESPONSE'
  | 'PRIVACY_ENCLAVE'
  | 'SECURITY_REPORTS'
  | 'THREAT_HISTORY';
