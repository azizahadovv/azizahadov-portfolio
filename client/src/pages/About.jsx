import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { developer } from "../data/data";

export default function About() {
  return (
    <section className="py-20 bg-secondary/50 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {developer.aboutDescription}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {developer.aboutMission}
              </p>
              <div className="flex flex-wrap gap-4">
                {developer.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-4 py-2 bg-surface rounded-full text-accent font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={developer.photo}
                alt="Professional developer portrait"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <Code className="text-2xl text-dark" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}