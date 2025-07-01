import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Menu } from 'lucide-react';
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-blue-200/50 dark:border-blue-700/50 shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simran
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {['hero', 'about', 'projects', 'achievements', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 font-medium px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

           <div className="flex items-center gap-1.5">
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
  <a
    href="https://github.com/Simran759"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
    aria-label="GitHub"
  >
    <Github size={20} />
  </a>
  <a
    href="https://www.linkedin.com/in/simran-3b680128a/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>
  <a
    href="mailto:simranbaj2000@gmail.com"
    className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
    aria-label="Email"
  >
    <Mail size={20} />
  </a>

  {/* Mobile menu toggle */}
  <button
    className="md:hidden p-2 rounded-lg ml-1 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
    onClick={() => setMobileNavOpen(!mobileNavOpen)}
    aria-label="Menu"
  >
    <Menu size={22} />
  </button>
</div>
</div></div>

        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
            {['hero', 'about', 'projects', 'achievements', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-full text-left capitalize font-medium px-4 py-2 rounded-lg ${
                  activeSection === section 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-800'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 bg-background text-foreground transition-colors duration-300">
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
