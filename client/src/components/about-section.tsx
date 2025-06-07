import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animations";
import type { Developer } from "@/lib/api";

export default function AboutSection() {
  const { data: developer } = useQuery<Developer>({
    queryKey: ["/api/developer"],
  });
  
  const sectionRef = useScrollAnimation();

  if (!developer) {
    return (
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded mb-16 mx-auto max-w-md"></div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="h-96 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
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
