import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import VorentisSolutionSection from './components/VorentisSolutionSection';
import SecurityModelSection from './components/SecurityModelSection';
import AICopilotSection from './components/AICopilotSection';
import SmartCampusEducationSection from './components/SmartCampusEducationSection';
import EnterpriseApplicationsSection from './components/EnterpriseApplicationsSection';
import PlatformStatus from './components/PlatformStatus';
import AboutSection from './components/AboutSection';
import FinalCta from './components/FinalCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-[#E5E7EB] font-sans selection:bg-[#00D5FF]/30 selection:text-white">
      {/* Top Global Navigation Bar */}
      <Navbar />

      {/* Main Enterprise Cybersecurity Narrative */}
      <main className="relative">
        {/* 1. HERO — VORENTIS CYBERSECURITY PLATFORM */}
        <HeroSection />

        {/* 2. PRODUCT / APPLICATION INTERFACE — ACTUAL VORENTIS APP INTERFACE */}
        <ProductShowcase />

        {/* 3. CORE SECURITY CAPABILITIES & THREAT SCORING MODEL */}
        <VorentisSolutionSection />
        <SecurityModelSection />

        {/* 4. AI & ON-DEVICE INTELLIGENCE — AEGIS EXPLAINABLE GUIDANCE */}
        <AICopilotSection />

        {/* 5. VORENTIS FOR SMART CAMPUSES / EDUCATION */}
        <SmartCampusEducationSection />

        {/* 6. ENTERPRISE / INSTITUTIONAL APPLICATIONS & TECHNICAL BENCHMARKS */}
        <EnterpriseApplicationsSection />

        {/* 7. PRODUCT ROADMAP / PLATFORM AVAILABILITY */}
        <PlatformStatus />

        {/* COMPANY & PROJECT LEADERSHIP — ZENTIQ */}
        <AboutSection />

        {/* 8. CONTACT / DEMO CTA */}
        <FinalCta />
        <ContactSection />
      </main>

      {/* GLOBAL FORMAL FOOTER */}
      <Footer />
    </div>
  );
}
