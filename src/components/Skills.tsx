import { motion } from "framer-motion";
import { Code, Zap, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages and scripting expertise",
    skills: ["C++", "Python", "HTML", "CSS", "JavaScript", "SQL", "PostgreSQL"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Developer Tools",
    description: "Preferred tools for development and collaboration",
    skills: ["VS Code", "Git", "GitHub", "LaTeX", "Google Colab", "MongoDB Compass"],
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Technologies / Frameworks",
    description: "Libraries and frameworks for building performant apps",
    skills: ["Figma", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Relevant Courses",
    description: "Conceptual knowledge through academic courses",
    skills: ["Data Structures", "Algorithms", "Data PreProcessing", "Machine Learning", "DBMS", "OOP", "Computer Networks"],
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My toolbox spans full-stack engineering, clean code, and modern development practices.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Card className="bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <CardTitle className="text-foreground text-xl font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-muted border border-border text-foreground px-3 py-1 text-xs font-medium rounded-md shadow-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Focus Areas */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Code className="h-7 w-7 text-white" />,
              title: "Full Stack Development",
              description: "Building scalable web apps using modern frameworks and APIs.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <Zap className="h-7 w-7 text-white" />,
              title: "Competitive Programming",
              description: "Solving algorithmic challenges using efficient data structures.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <Brain className="h-7 w-7 text-white" />,
              title: "Machine Learning",
              description: "Preprocessing data and building predictive models.",
              color: "from-purple-500 to-purple-600"
            }
          ].map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
