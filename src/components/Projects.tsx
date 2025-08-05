import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Hub with Java",
      description: "Developed a full-stack web application using Only Java to create a fully working web page for a software company to manage the clients and project. This app is designed as a role-based, object-oriented approach to streamline role and permission access across the entire website.",
      technologies: ["Java", "PostgreSQL", "REST APIs", "Object-Oriented Design"],
      github: "https://github.com/bhargava-sai-krishna/E-Hub",
      timeline: "Oct 2022 – Jan 2023"
    },
    {
      title: "BookAnalyzerLLM",
      description: "Engineered a robust Flask backend with dynamic ChromaDB instances per chat, implemented JSONL-based conversation history persistence, and integrated an improved recursive text splitter for enhanced document chunking. Enables users to upload custom PDF documents per chat and receive comprehensive LLM answers directly from document content.",
      technologies: ["Python", "Flask", "React", "Ollama models", "ChromaDB"],
      github: "https://github.com/bhargava-sai-krishna/BookAnalyzerLLM",
      timeline: "Jul 2025"
    },
    {
      title: "Secure Text Transfer",
      description: "A simple web application built with Flask and JavaScript to send and receive messages and files securely over a network. Uses Diffie-Hellman key exchange for encryption and decryption. Files are converted to base64, encrypted, and sent as text, then decrypted and restored to their original form during download.",
      technologies: ["Python", "Flask", "JavaScript", "Google Cloud API", "Cryptography"],
      github: "https://github.com/bhargava-sai-krishna/secure-text-transfer-using-deffie-hill-man",
      timeline: "Feb 2024 - May 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;