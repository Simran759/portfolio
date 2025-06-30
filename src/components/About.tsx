
import { Code, Trophy, Users, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">


      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-full border border-blue-200 dark:border-blue-700 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience 
            in building scalable applications and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg border border-blue-200/50 dark:border-blue-700/50">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Near Old Court, Singhana, Rajasthan</span>
            </div>
    <div className="space-y-3">
 
  <div className="border-l-4 border-blue-500 pl-4 bg-white dark:bg-gray-800 py-4 rounded-r-lg shadow-sm dark:shadow-none transition-all">
    <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h4>
    <p className="text-blue-600 dark:text-blue-400 font-medium">Computer Science and Engineering</p>
    <p className="text-gray-700 dark:text-gray-300">Malaviya National Institute of Technology</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2023 - Present | CGPA: 9.44/10</p>
  </div>

  <div className="border-l-4 border-blue-500 pl-4 bg-white dark:bg-gray-800 py-4 rounded-r-lg shadow-sm dark:shadow-none transition-all">
    <h4 className="font-semibold text-gray-900 dark:text-white">Senior Secondary</h4>
    <p className="text-blue-700 dark:text-blue-300 font-medium">Class XII - 96.2%</p>
    <p className="text-gray-700 dark:text-gray-300">Vishwa Bharti Sr. Sec. School Singhana</p>
  </div>
</div>


          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40 border-blue-200/50 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Modern web applications with React, Node.js, and databases</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Competitive</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Problem solving with 800+ problems solved on various platforms</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/40 border-green-200/50 dark:border-green-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Leadership</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Vice President of Science & Tech Society at MNIT Jaipur</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 border-purple-200/50 dark:border-purple-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
  <CardContent className="p-6 text-center">
    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
      <Calendar className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">Built multiple personal and academic projects using modern web and AI tools</p>
  </CardContent>
</Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
