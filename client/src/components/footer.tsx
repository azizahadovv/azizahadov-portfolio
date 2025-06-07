import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Developer } from "@/lib/api";

export default function Footer() {
  const { data: developer } = useQuery<Developer>({
    queryKey: ["/api/developer"],
  });

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            className="text-3xl font-bold gradient-text mb-6 cursor-pointer"
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            azizahadov.uz
          </motion.div>
          
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences that inspire, engage, and deliver results. 
            Let's build something amazing together.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6 mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link hover:text-accent transition-colors duration-300 text-gray-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-white font-bold text-sm">A</span>
                </motion.div>
                <span className="text-gray-400">Made with passion in Uzbekistan</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>© 2024</span>
                <span className="text-accent">•</span>
                <span>Open for opportunities</span>
                <span className="text-accent">•</span>
                <span className="gradient-text font-semibold">Let's build together</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
