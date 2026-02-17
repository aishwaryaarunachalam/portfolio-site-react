import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hi Aishwarya, I am reaching out regarding an AI engineering requirement..'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    // Replace '919876543210' with your actual phone number (Country Code + Number)
    const phoneNumber = "919901329303"; 
    
    const text = `*New Contact Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            WhatsApp is the fastest way to reach me for a prompt response.
            Alternatively, you’re welcome to contact me via email using the details below.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gray-800/30 p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-3xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Location</h4>
                  <p className="text-gray-400">Mangalore,</p>
                  <p className="text-gray-400">Karnataka,India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-400">+91 9901329303</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Address</h4>
                  <p className="text-gray-400">to.aishwarya.arunachalam@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (WhatsApp) */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
              Vestibulum ante ipsum primis.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <textarea 
                name="message"
                placeholder="Message" 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>

              <button 
                type="submit"
                className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-yellow-400 transition-all flex items-center gap-2"
              >
                Send Message <FaWhatsapp className="text-lg" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
