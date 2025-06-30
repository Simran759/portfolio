import { useState } from "react";
import { ExternalLink, Github, Calendar, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "ESports Tournament Management System",
    description: "A comprehensive full-stack eSports tournament management system featuring real-time player scheduling, automated result tracking, and dynamic ranking management with secure API integration.",
    technologies: ["Next.js", "JavaScript", "Express.js", "Node.js", "PostgreSQL", "Vercel"],
    features: [
      "Secure REST APIs for dynamic tournament updates",
      "Real-time player scheduling and match coordination",
      "Automated ranking system with live leaderboards"
    ],
    type: "Full Stack",
    category: "Database Project",
    color: "from-purple-600 to-blue-600",
    status: "Completed",
    liveLink: "https://e-sports-tournament-jdn7.vercel.app",
    codeLink: "https://github.com/Simran759/E-sports-tournament"
  },
  {
    title: "Airbnb Clone Platform",
    description: "A feature-rich property rental platform with comprehensive user authentication, authorization controls, and seamless property management capabilities.",
    technologies: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "MongoDB Atlas", "Render"],
    features: [
      "Secure user authentication and session management",
      "Role-based authorization for property owners",
      "Complete CRUD operations for property listings"
    ],
    type: "Full Stack",
    category: "GitHub Repository",
    color: "from-pink-600 to-purple-600",
    status: "Live",
    liveLink: "https://clone-airbnb-1nlt.onrender.com",
    codeLink: "https://github.com/Simran759/clone_airbnb"
  },
  {
    title: "Real-Time Currency Converter",
    description: "An intuitive and responsive currency conversion application with live exchange rates, featuring an elegant user interface and seamless user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "ExchangeRate API"],
    features: [
      "Real-time currency conversion with live rates",
      "Interactive country flag dropdowns",
      "Responsive design for all device sizes"
    ],
    type: "Frontend",
    category: "API Integration",
    color: "from-green-600 to-teal-600",
    status: "Active",
    liveLink: "https://simran759.github.io/Currency_convertor/",
    codeLink: "https://github.com/Simran759/Currency_convertor"
  }
];

const filterTabs = ["All", "Full Stack", "Frontend"];

const Projects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === selected);

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 lg:px-20 bg-white dark:bg-gray-950 transition-all">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A curated selection of my best work across full-stack development, real-time systems, and responsive UIs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                selected === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all rounded-xl">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <CardHeader className="pt-6 px-6 pb-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 text-sm font-medium">
                      {project.category}
                    </Badge>
                    <Badge className={`bg-gradient-to-r ${project.color} text-white text-xs border-none`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                      <Code2 className="h-4 w-4 text-blue-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                    <a href={project.liveLink} target="_blank" className="flex-1">
                      <Button size="sm" className={`bg-gradient-to-r ${project.color} hover:opacity-90 w-full text-white`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.codeLink} target="_blank" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full text-gray-700 dark:text-gray-300">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Philosophy */}
        <motion.div
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl max-w-4xl mx-auto rounded-2xl">
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Development Philosophy
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic max-w-3xl mx-auto">
                “Great software is built with intention. I believe in building scalable, user-centric applications that solve real-world problems. Every line of code reflects a commitment to clean architecture, performance, and delightful UX.”
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
