import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { developer } from "../data/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  return (
    <section className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to start your next project? Let's discuss how we can work together.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-surface p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-light font-medium"><a  href={`mailto:${developer.email}`}>{developer.email}</a></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-light font-medium"><a  href={`tel:${developer.phone}`}>{developer.phone}</a></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-light font-medium">{developer.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-accent">Let's Work Together</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack web application, a mobile app, or 
                consulting on your existing project, I'd love to hear from you.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                  >
                    <option value="">Select budget range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent text-dark py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}