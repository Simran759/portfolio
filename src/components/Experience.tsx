import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Vice President',
      organization: 'Science and Technology Society of MNIT Jaipur',
      period: 'April 2025 - Present',
      location: 'MNIT Jaipur',
      type: 'Leadership',
      description:
        "Led the organization of MNIT Jaipur's largest techno-management fest, Sphinx, and oversaw the operations of all technical clubs under the institute's umbrella.",
      responsibilities: [
        'Organized various events including hackathons, escape rooms, workshops, and contests',
        'Ensured engaging and interactive experiences for participants',
        'Coordinated with multiple technical clubs and managed large-scale events'
      ],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Executive of CS Club',
      organization: 'MNIT Jaipur',
      period: 'August 2024 - June 2025',
      location: 'MNIT Jaipur',
      type: 'Technical',
      description:
        'Organized various events and contests, ensuring engaging and interactive experiences for participants in the Computer Science domain.',
      responsibilities: [
        'Planned and executed technical events and coding contests',
        'Coordinated workshops and skill development sessions',
        'Facilitated engaging and interactive experiences for computer science students'
      ],
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'Executive of Think India',
      organization: 'MNIT Jaipur',
      period: 'August 2024 - June 2025',
      location: 'MNIT Jaipur',
      type: 'Management',
      description:
        'Planned and executed fests, canopy setups, and various large-scale events with effective coordination and management.',
      responsibilities: [
        'Managed event planning and execution for large-scale college events',
        'Coordinated canopy setups and logistics for outdoor events',
        'Demonstrated effective project management and team coordination skills'
      ],
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Timeline</h2>
          <p className="text-muted-foreground italic text-lg max-w-3xl mx-auto">
            I strive to lead with purpose, inspire with vision, and execute with precision. Each role represents a step forward in fostering impactful collaboration and technical excellence.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-4 space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative pl-10 before:content-[''] before:w-4 before:h-4 before:bg-gradient-to-r ${experience.color} before:rounded-full before:absolute before:left-[-0.6rem] before:top-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-card-foreground text-xl">{experience.title}</CardTitle>
                        <Badge className={`bg-gradient-to-r ${experience.color} text-white border-none px-3 py-1`}>
                          {experience.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-primary font-semibold text-lg">
                        {experience.organization}
                      </CardDescription>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base">{experience.description}</p>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="text-card-foreground font-semibold mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start text-sm">
                          <span className="text-primary mr-3 mt-1 font-bold">•</span>
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Leadership Philosophy</h3>
              </div>
              <p className="text-blue-100 text-lg italic leading-relaxed">
                I believe great leadership means enabling others to thrive while maintaining clarity in purpose and excellence in delivery.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
