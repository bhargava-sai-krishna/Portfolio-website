import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <CursorFollower />
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default Index;
