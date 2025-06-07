import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animations";
import type { Article } from "@/lib/api";

export default function BlogSection() {
  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });
  
  const sectionRef = useScrollAnimation();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (articles.length === 0) {
    return (
      <section id="blog" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded mb-16 mx-auto max-w-md"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <section id="blog" className="py-20 bg-dark" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Latest Articles
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article, index) => (
            <motion.article
              key={article.id}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => {
                // Navigate to article detail page
                alert(`Navigate to article: ${article.slug}`);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted mb-3">
                  <span>{formatDate(article.publishedAt)}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <motion.div
                  className="text-accent hover:text-green-400 transition-colors font-semibold flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  Read More 
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 102, 255, 0.4)" }}
            whileTap={{ y: 0 }}
            onClick={() => {
              alert("Navigate to all articles page");
            }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
