import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', '') || 'home');
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === 'home' ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '') || 'home';
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '') || 'home';
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;