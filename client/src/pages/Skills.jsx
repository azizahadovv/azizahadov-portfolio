import { motion } from "framer-motion";
import { skills } from "../data/data";

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h1>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-accent mb-6">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      className="bg-surface p-6 rounded-xl border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:bg-surface/90"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-light">{skill.name}</h3>
                        <span className="text-accent font-bold text-lg">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-4 border border-gray-600">
                        <motion.div
                          className="bg-gradient-to-r from-accent to-secondary h-full rounded-full border border-accent/30"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                        ></motion.div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}