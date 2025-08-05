import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <Card className="max-w-4xl w-full p-8 bg-card/80 backdrop-blur-sm">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sanka Bhargava Sai Krishna Lakshmi Narayana
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Software Development Engineer
          </p>
          
          <div className="max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            <p>
              A proactive and adaptable Computer Science student with strong fundamentals in system design, 
              backend development, and test-driven development. Experienced with AWS-based development and 
              scalable systems, with hands-on experience from Amazon internship.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:8790949208" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 8790949208
            </a>
            <a href="mailto:bhargavasai78@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              bhargavasai78@gmail.com
            </a>
            <a href="https://linkedin.com/in/bhargavasai-sanka-a8394b233/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/bhargava-sai-krishna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild>
              <a href="#experience">View Experience</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">See Projects</a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Hero;