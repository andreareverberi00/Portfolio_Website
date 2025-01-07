import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, Linkedin, Github, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Andrea',
        },
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-400">
              Interested in collaboration? Let's create something amazing together.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-gray-700/50 border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-gray-700/50 border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-700/50 border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-400 focus:border-transparent disabled:opacity-50"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Failed to send message. Please try again later.
                </motion.p>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex justify-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com/andreareverberi_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/andreareverberi00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/andrea-reverberi-041a7b240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}