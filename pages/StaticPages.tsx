
import React, { useState } from 'react';

const PageWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 transition-colors">{title}</h1>
    <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-slate-800 shadow-sm prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-slate-300 transition-colors">
      {children}
    </div>
  </div>
);

export const About: React.FC = () => (
  <PageWrapper title="About Nano Tools">
    <p className="text-lg leading-relaxed mb-6">
      Nano Tools is an all-in-one online hub designed to empower content creators, students, and professionals with high-quality AI-driven text utilities. 
    </p>
    <p className="mb-6">
      Our mission is simple: to provide a fast, clean, and distraction-free experience for everyday writing tasks. We believe that technology should be accessible and helpful, which is why Nano Tools is completely free to use without any cumbersome sign-up processes.
    </p>
    <p>
      Whether you are generating viral Instagram captions, translating global languages, or preparing for an upcoming exam, Nano Tools is here to be "The Only Hub You Ever Need."
    </p>
  </PageWrapper>
);

export const FAQ: React.FC = () => (
  <PageWrapper title="Frequently Asked Questions">
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is Nano Tools free?</h3>
        <p>Yes! All our 30+ tools are free to use. We don't require any login or subscription.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How accurate is the AI content?</h3>
        <p>We use the latest Gemini models to provide state-of-the-art text generation. While highly accurate, we recommend reviewing any content for specific context or factual nuances.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Do you save my data?</h3>
        <p>No. We do not store your input text or the generated outputs on our servers. Your privacy is paramount.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can I suggest a new tool?</h3>
        <p>Absolutely! Feel free to reach out via our contact page with any suggestions for tools you'd like to see added to our hub.</p>
      </div>
    </div>
  </PageWrapper>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact.na9otools@gmail.com?subject=${encodeURIComponent(formData.subject || 'Feedback for Nano Tools')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageWrapper title="Contact Us">
      <p className="mb-10 text-lg">
        Have questions, suggestions, or feedback? Please fill out the form below. Your message will be sent directly to our support team at <strong>contact.na9otools@gmail.com</strong>.
      </p>
      
      <form onSubmit={handleSubmit} className="not-prose space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-slate-400 uppercase tracking-wider">Subject</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-slate-400 uppercase tracking-wider">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your feedback here..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/10 active:scale-95"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800">
        <h4 className="text-gray-900 dark:text-white font-bold mb-2">Direct Email</h4>
        <p className="text-blue-600 dark:text-blue-400 font-medium select-all">contact.na9otools@gmail.com</p>
      </div>
    </PageWrapper>
  );
};

export const Privacy: React.FC = () => (
  <PageWrapper title="Privacy Policy">
    <p className="mb-6">At Nano Tools, your privacy is our top priority. This Privacy Policy outlines the types of information we do and do not collect.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Information Collection</h3>
    <p className="mb-6">We do not collect any personally identifiable information. Our website is designed to function without user accounts or registration.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Data Usage</h3>
    <p className="mb-6">Any text you enter into our tools is processed by the AI in real-time and is not stored or logged by our systems. We use standard analytical tools to monitor website performance and improve user experience.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Cookies</h3>
    <p>We may use cookies to remember your preferences (like recent tools) and to provide a smoother browsing experience.</p>
  </PageWrapper>
);

export const Terms: React.FC = () => (
  <PageWrapper title="Terms of Service">
    <p className="mb-6">By using Nano Tools, you agree to the following terms and conditions.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Usage Rights</h3>
    <p className="mb-6">Nano Tools is provided as-is for personal and commercial use. You are responsible for the content you generate and publish using our tools.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Prohibited Use</h3>
    <p className="mb-6">You may not use our service to generate harmful, illegal, or malicious content. Automated scraping or bulk access to our API endpoints is strictly prohibited.</p>
    <h3 className="text-gray-900 dark:text-white font-bold mb-4">Disclaimer</h3>
    <p>Nano Tools does not guarantee the absolute accuracy of AI-generated content and is not liable for any decisions or actions taken based on such content.</p>
  </PageWrapper>
);
