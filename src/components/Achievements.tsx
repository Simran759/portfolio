import { Trophy, Star, Target, Award, Code, Medal, Crown, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Master",
      subtitle: "800+ Problems • 1700+ Contest Rating",
      stats: ["800+ Solved", "1700+ Rating", "Top 11.5%"],
      icon: Code,
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      link: "https://leetcode.com/u/simran_123456/"
      
    },
    {
      title: "CodeChef Rising Star",
      subtitle: "Global Rank 525 • 1450+ Rating",
      stats: ["1450+ Rating", "Global Rank 525", "Starters 158"],
      icon: Star,
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      link: "https://www.codechef.com/users/worm_vibe_21"
    },
    {
      title: "Codeforces Achiever",
      subtitle: "1000+ Contest Rating",
      stats: ["1000+ Rating", "Multiple Contests", "Consistent Growth"],
      icon: Target,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      link: "https://codeforces.com/profile/simmi_2005"
      
    },
    {
      title: "C2C Contest Finalist",
      subtitle: "MNIT Jaipur • 5th Place",
      stats: ["C2C Club", "5th Position", "MNIT Jaipur"],
      icon: Award,
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    }
  ];

  const stats = [
    {
      label: "Problems Solved",
      value: "800+",
      icon: Code,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-[#FFF7ED] dark:bg-orange-900/20"
    },
    {
      label: "Contest Rating",
      value: "1700+",
      icon: Trophy,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-[#FFFAE5] dark:bg-yellow-900/20"
    },
    {
      label: "Global Rank",
      value: "525",
      icon: Medal,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-[#F5F3FF] dark:bg-purple-900/20"
    },
    {
      label: "Platforms",
      value: "4+",
      icon: Zap,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-[#EFF6FF] dark:bg-blue-900/20"
    }
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4">
            <Crown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Highlights from major coding platforms and competitions.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`text-center rounded-xl ${stat.bgColor}`}>
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow mb-4">
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Cards + Graphs */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-shadow">
                  <CardHeader className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${item.bgColor}`}>
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {/* Badges (non-interactive) */}
                    <div className="flex flex-wrap gap-2">
                      {item.stats.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 text-xs font-medium rounded-md pointer-events-none select-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Progress bar (graphical content)
                    <div className="mt-3">
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1 font-medium">Progress</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div> */}

                    {/* External Link */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline pt-2"
                      >
                        Visit Profile
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
