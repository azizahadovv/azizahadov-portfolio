import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Developer } from "@/lib/api";

export default function HeroSection() {
  const { data: developer } = useQuery<Developer>({
    queryKey: ["/api/developer"],
  });

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // This would typically download a resume file
    alert("Resume download would be implemented here");
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: -2,
      },
    },
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: -4,
      },
    },
  };

  if (!developer) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-300 rounded mb-4"></div>
            <div className="h-8 bg-gray-300 rounded mb-8"></div>
            <div className="h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-dark"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl"
          variants={floatingVariants2}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-lg"
          variants={floatingVariants3}
          animate="animate"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">{developer.title}</span>
            <br />
            <span className="text-white">{developer.role}</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {developer.bio}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="btn-primary bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
              onClick={scrollToAbout}
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 102, 255, 0.4)" }}
              whileTap={{ y: 0 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="glass-effect px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:border-accent/50 transition-all duration-300"
              onClick={downloadResume}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-2xl text-accent" />
      </motion.div>
    </section>
  );
}
