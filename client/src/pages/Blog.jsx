import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { articles } from "../data/data";

export default function Blog() {
  return (
    <section className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog & Articles
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights, tutorials, and thoughts on web development
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-surface rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-light group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}