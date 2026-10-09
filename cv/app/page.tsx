"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import AppleVideoSection from "@/components/VideoSection/AppleVideoSection";

// Below-the-fold components dynamically imported
const SenzMateJourney = dynamic(
  () => import("@/components/SenzMateJourney/SenzMateJourney")
);
const ProjectsSection = dynamic(
  () => import("@/components/ProjectsSection/ProjectsSection")
);
const FolderWorkSection = dynamic(
  () => import("@/components/FolderWorkSection/FolderWorkSection")
);
const EducationCertificates = dynamic(
  () => import("@/components/EducationCertificates/EducationCertificates")
);
const Testimonials = dynamic(
  () => import("@/components/Testimonials/Testimonials")
);
const Footer = dynamic(() => import("@/components/Footer/Footer"));

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget/WhatsAppWidget"),
  { ssr: true }
);

// Reusable animation wrapper for sections
const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero section loads immediately */}
      <HeroSection />

      {/* Subsequent sections animate smoothly as you scroll down */}
      <AnimatedSection>
        <SenzMateJourney />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <FolderWorkSection />
      </AnimatedSection>

      <AnimatedSection>
        <AppleVideoSection />
      </AnimatedSection>

      <AnimatedSection>
        <EducationCertificates />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <Footer />

      <WhatsAppWidget />
    </main>
  );
}