import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animations";
import type { Skill } from "@/lib/api";

export default function SkillsSection() {
  const { data: skills = [] } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });
  
  const sectionRef = useScrollAnimation();

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getCategoryIcon = (category: string) => {
    if (category.includes("Frontend")) return "fab fa-js-square";
    if (category.includes("Backend")) return "fas fa-server";
    if (category.includes("DevOps")) return "fas fa-cloud";
    return "fas fa-code";
  };

  const getCategoryColor = (category: string) => {
    if (category.includes("Frontend")) return "text-primary";
    if (category.includes("Backend")) return "text-accent";
    if (category.includes("DevOps")) return "text-primary";
    return "text-accent";
  };

  if (skills.length === 0) {
    return (
      <section id="skills" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded mb-16 mx-auto max-w-md"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-300 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-dark" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              className="skill-card glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`text-4xl mb-4 ${getCategoryColor(category)}`}>
                <i className={getCategoryIcon(category)}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {categorySkills.map((skill) => (
                  <motion.li
                    key={skill.id}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-accent mr-3 w-4 h-4" />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="code-block p-8 rounded-2xl font-mono text-sm bg-gradient-to-r from-surface/90 to-secondary/90 border-l-4 border-accent">
            <div className="flex items-center justify-between mb-4">
              <span className="text-accent font-semibold">// Current Project Stack</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-gray-300 leading-relaxed">
{`const developer = {
  name: "Azizbek Ahadov",
  role: "Full Stack Developer",
  currentFocus: [
    "React.js", "Node.js", "TypeScript"
  ],
  learning: "Web3 & Blockchain",
  available: true
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
