import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Dribbble, Code, Users, Award, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { developer, projects, skills } from "../data/data";

export default function Home() {
  const { t } = useLanguage();
  const featuredProjects = projects.filter(project => project.featured);
  const topSkills = skills.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-2xl text-accent font-medium mb-4">
                  {t("hello")}
                </h1>
                <h2 className="text-6xl lg:text-7xl font-bold gradient-text mb-6">
                  {developer.name}
                </h2>
                <h3 className="text-3xl lg:text-4xl text-gray-300 mb-6">
                  {t("fullStack")} <span className="text-accent">{t("developer")}</span>
                </h3>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("bio")}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  to="/portfolio"
                  className="bg-accent text-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  {t("viewMyWork")}
                </Link>
                <Link
                  to="/contact"
                  className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-dark transition-all duration-300"
                >
                  {t("getInTouch")}
                </Link>
              </motion.div>

              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {developer.socialLinks.github && (
                  <a
                    href={developer.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 hover:bg-accent/10 rounded-lg"
                  >
                    <Github size={24} />
                  </a>
                )}
                {developer.socialLinks.linkedin && (
                  <a
                    href={developer.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 hover:bg-accent/10 rounded-lg"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {developer.socialLinks.dribbble && (
                  <a
                    href={developer.socialLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 hover:bg-accent/10 rounded-lg"
                  >
                    <Dribbble size={24} />
                  </a>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <img
                  src={developer.photo}
                  alt="Azizbek Ahadov - Developer"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
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
                  <span className="text-2xl text-dark font-bold">💻</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex flex-col items-center text-gray-400 hover:text-accent transition-colors duration-300">
              <span className="text-sm mb-2">{t("exploreMore")}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">5+</h3>
              <p className="text-gray-300">{t("yearsExperience")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">{projects.length}</h3>
              <p className="text-gray-300">{t("projectsCompleted")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">50+</h3>
              <p className="text-gray-300">{t("happyClients")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">1000+</h3>
              <p className="text-gray-300">{t("cupsOfCoffee")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">{t("coreSkills")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("skillsDescription")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="bg-surface p-6 rounded-xl border border-gray-700 hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-light">{skill.name}</h3>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/skills"
              className="inline-block bg-accent text-dark px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300"
            >
              {t("viewAllSkills")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">{t("featuredProjects")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("projectsDescription")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-surface rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-medium">
                    {t("featured")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-light group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark text-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="inline-block bg-accent text-dark px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300"
            >
              {t("viewAllProjects")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl p-12 text-center border border-accent/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              {t("readyToStart")}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("ctaDescription")}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-dark px-12 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              {t("getInTouch")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}