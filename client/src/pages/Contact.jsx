import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";
import { developer } from "../data/data";

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // 'success' | 'error' | 'loading'
    message: "",
  });

  // EmailJS configuration - REPLACE WITH YOUR ACTUAL KEYS FROM EMAILJS.COM
  const EMAILJS_SERVICE_ID = "service_kwbrxds"; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = "template_swaglqz"; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = "hv0mo3IouQotCsorT"; // Replace with your public key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "EmailJS not configured yet. Please contact me directly at azizbek.ahadov@example.com or set up EmailJS service.",
      });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
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
          {t("contactTitle")}
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("contactDescription")}
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
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                {t("contactInfo")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">{t("email")}</p>
                    <p className="text-light font-medium">{developer.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">{t("phone")}</p>
                    <p className="text-light font-medium">{developer.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">{t("location")}</p>
                    <p className="text-light font-medium">
                      {developer.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {t("workTogether")}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("workTogetherText")}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-6 flex items-center space-x-2 ${
                  status.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : status.type === "error"
                      ? "bg-red-500/20 border border-red-500/50 text-red-400"
                      : "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                }`}
              >
                {status.type === "success" && <CheckCircle size={20} />}
                {status.type === "error" && <AlertCircle size={20} />}
                {status.type === "loading" && (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                )}
                <span>{status.message}</span>
              </motion.div>
            )}

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-surface p-8 rounded-xl text-black space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("yourName")} *
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
                    {t("emailAddress")} *
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
                    {t("projectType")}
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                  >
                    <option value="">{t("selectProjectType")}</option>
                    <option value="web-development">
                      {t("webDevelopment")}
                    </option>
                    <option value="mobile-app">{t("mobileApp")}</option>
                    <option value="consulting">{t("consulting")}</option>
                    <option value="other">{t("other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("budgetRange")}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light"
                  >
                    <option value="">{t("selectBudgetRange")}</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("projectDetails")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors text-light resize-none"
                  placeholder={t("projectDetailsPlaceholder")}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status.type === "loading"}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  status.type === "loading"
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-accent text-dark hover:bg-accent/90"
                }`}
                whileHover={status.type !== "loading" ? { scale: 1.02 } : {}}
                whileTap={status.type !== "loading" ? { scale: 0.98 } : {}}
              >
                {status.type === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t("sendMessage")}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
