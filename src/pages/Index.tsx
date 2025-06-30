
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'achievements', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-blue-200/50 dark:border-blue-700/50 shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simran
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'achievements', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 font-medium px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex space-x-4 items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <a href="https://github.com/Simran759" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/simran-3b680128a/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
                <Linkedin size={20} />
              </a>
              <a href="mailto:simranbaj2000@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
