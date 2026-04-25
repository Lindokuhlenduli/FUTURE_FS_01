import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="min-h-screen bg-background">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
