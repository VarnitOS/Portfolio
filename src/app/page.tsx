import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProvider } from "@/components/animation/scroll-provider";
import Threads from "@/components/animation/Threads";

export default function Home() {
  return (
    <ScrollProvider>
      {/* Global animated background */}
      <div className="fixed inset-0 -z-50">
        <Threads 
          color={[0.1, 0.1, 0.2]} 
          amplitude={1.5} 
          distance={1.2} 
          enableMouseInteraction={true} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none" />
      </div>
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
