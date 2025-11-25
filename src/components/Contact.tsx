import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Loader2,
  Linkedin,
  Github,
  Instagram,
  CalendarDays,
  Globe,
  Megaphone
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

interface FormData {
  name: string;
  email: string;
  message: string;
  projectType: string;
  timeline: string;
}

function createInitialFormState(): FormData {
  return {
    name: "",
    email: "",
    message: "",
    projectType: "prototype",
    timeline: "1-2-weeks"
  };
}

export default function Contact() {
  const { copy } = useLanguage();
  const { contact } = copy;
  const [formData, setFormData] = useState<FormData>(createInitialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const projectTypeLabel =
        contact.form.projectTypeOptions.find((option) => option.value === formData.projectType)?.label ||
        formData.projectType;
      const timelineLabel =
        contact.form.timelineOptions.find((option) => option.value === formData.timeline)?.label ||
        formData.timeline;
      const result = await emailjs.send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `${formData.message}\n\n${contact.form.metaProjectTypeLabel}: ${projectTypeLabel}\n${contact.form.metaTimelineLabel}: ${timelineLabel}`,
          to_name: "Andrea",
        },
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData(createInitialFormState());
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200">{contact.kicker}</p>
                <h2 className="text-4xl font-bold mb-4 mt-2">{contact.title}</h2>
                <p className="text-gray-400">
                  {contact.description}
                </p>
              </div>

              <div className="space-y-4">
                {contact.highlights.map((highlight, idx) => {
                  const icons = [CalendarDays, Megaphone, Globe];
                  const Icon = icons[idx] ?? CalendarDays;
                  return (
                    <div
                      key={highlight.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-violet-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{highlight.title}</p>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">{contact.networkLabel}</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com/andreareverberi_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 p-3 text-gray-300 hover:text-white"
                  >
                    <Instagram />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/andreareverberi00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 p-3 text-gray-300 hover:text-white"
                  >
                    <Github />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/andrea-reverberi-041a7b240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 p-3 text-gray-300 hover:text-white"
                  >
                    <Linkedin />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.f6s.com/andrea-reverberi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 p-3 text-gray-300 hover:text-white"
                  >
                    <Globe />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      {contact.form.projectTypeLabel}
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                    >
                      {contact.form.projectTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      {contact.form.timelineLabel}
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                    >
                      {contact.form.timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {contact.form.sendingLabel}
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      {contact.form.submitLabel}
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    {contact.form.success}
                  </motion.p>
                )}

                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    {contact.form.error}
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
