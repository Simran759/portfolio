import { useState, useEffect } from 'react';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer & Competitive Programmer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SIMRAN_2023UCP1610.pdf';
    link.download = 'Simran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-1000" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-2000" />
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-indigo-400 rounded-full animate-bounce animation-delay-3000" />
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in">

          {/* 📝 Text Content (Left Side) */}
          <div className="text-center md:text-left space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full border border-blue-200 dark:border-blue-700">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-pulse">Simran</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light h-8 md:h-12">
              {text}<span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Computer Science student passionate about creating innovative solutions. 
              Experienced in full-stack development with expertise in modern web technologies 
              and competitive programming.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* 👤 Profile Photo on Right */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/20 dark:ring-blue-300/30">
              <img
                src="/simmi.jpg"
                alt="Simran Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
