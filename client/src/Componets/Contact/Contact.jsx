import React, { useState } from "react";
import { FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import Nav from "../Nav";
import emailjs from '@emailjs/browser';
emailjs.init("D7K488ExnTxMpMPNZ");

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Simplified contact info - only keep essentials
  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      info: "eskedarya@gmail.com",
      link: "mailto:eskedarya@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <AiOutlineWhatsApp className="text-xl" />,
      title: "WhatsApp",
      info: "+251 923649404",
      link: "https://wa.me/251923649404",
      color: "#25D366",
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      info: "Addis Ababa, Ethiopia",
      color: "#4285F4",
    },
  ];

  // Simplified social links - keep only professional ones
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/in/lidia yalew",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/lidia-yalew",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_htkk8hm",      // Replace with your Service ID
        "template_pqb75zq",     // Replace with your Template ID
        {
          name: formData.name,        // This matches {{name}} in your template
          title: "Portfolio Contact", // This matches {{title}} in your template
          email: formData.email,      // Will be used as reply-to
          message: formData.message,  // Your message content
          time: new Date().toLocaleString(), // This matches {{time}} in your template
        }
      );

      if (result.status === 200) {
        // Success!
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ 
        submit: "Failed to send message. Please try again or email me directly." 
      });
    } finally {
      setIsSubmitting(false);
    }}

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white">
      <Nav />

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-24 right-4 md:right-6 z-50 animate-slideIn">
          <div className="bg-green-500 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md">
            <FiCheckCircle className="text-2xl shrink-0" />
            <div>
              <h3 className="font-bold">Message Sent!</h3>
              <p className="text-sm opacity-90">I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        {/* Simplified Header */}
        <div className="text-center mb-8">
          <h1 className="text-orange-400 text-2xl md:text-4xl font-bold mb-2">
            Contact Me
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let's discuss opportunities.
          </p>
        </div>

        {/* Two Cards Side by Side - Flex Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Contact Form Card - Left */}
            <div className="lg:w-2/3">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-3 md:p-8 h-full">
                <h2 className="text-orange-400 text-2xl font-bold mb-3">
                  Send a Message
                </h2>

                {errors.submit && (
                  <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">
                    {errors.submit}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 bg-gray-900/50 border ${
                            errors.name ? "border-red-500" : "border-gray-600"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className={`w-full px-4 py-3 bg-gray-900/50 border ${
                            errors.email ? "border-red-500" : "border-gray-600"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows="6"
                        className={`w-full px-2 py-1 bg-gray-900/50 border ${
                          errors.message ? "border-red-500" : "border-gray-600"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <p className="text-gray-400 text-sm">* Required fields</p>
                      <button
                        type="submit"
                        className="bg-linear-to-r from-orange-500 to-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-lg" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Card - Right */}
            <div className="lg:w-1/3">
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 md:p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-white/5">
                        <div style={{ color: item.color }}>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors block"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links - Simplified */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect Online</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-white ${social.color} transition-all hover:scale-110`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack - Centered Below */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Node.js",
                "MYSQL",
                "MongoDB",
                "postgreSQL",
                "Firebase",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
