import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaCogs, FaChartLine, FaLayerGroup, FaDownload, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const timelineItems = [
    { year: "2013", title: "B.E. Computer Science", desc: "Graduated with 8.39 CGPA clearing Anna University exams. Won intercollege project expo for Railway management System." },
    { year: "2021", title: "Full Stack Developer", desc: "Started freelancing on Fiverr, delivering 4.9/5 star rated RESTful MEAN apps and real-time prototypes." },
    { year: "2025", title: "PG - DAI (CDAC)", desc: "Specialized in AI/ML. Top of the class (86.7%). Built 'MediMitra' agentic healthcare chatbot." },
    { year: "Present", title: "AI/ML Engineer", desc: "Building production-ready RAG pipelines, LLM workflows, and computer vision systems." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              About
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              An adaptable and enthusiastic professional with well-founded standards in quality. As a certified AI engineer, I have helped build practical, production-ready systems and end-to-end AI pipelines including machine learning, deep learning, and GenAI workflows.
            </motion.p>
          </div>

          {/* Intro & Profile Image Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
            {/* Left Text */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h6 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">HELLO THERE</h6>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                I'm Aishwarya, an <span className="text-primary">inquisitive problem</span>  solver
              </h1>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
                <p>
                  I love building intelligent systems and design scalable solutions that translate research into production-ready pipelines. With a background spanning software engineering, distributed systems, and applied AI, I’m comfortable taking ideas from experimentation to reliable deployment.
                </p>
                <p>
                  AI is no longer optional. Businesses that leverage it correctly thrive long term. Except there’s a tiny challenge. Most companies don’t know where to begin or how to extract real value from it. That’s where I come in.
                </p>
                <p>
                  When AI chooses you, it’s hard to say no, and yes, my name literally starts with “AI” 😊. I enrolled in the PG Diploma in Artificial Intelligence (PG-DAI) at CDAC (All India C-CAT rank #223), a decision that shaped my career trajectory. The program strengthened my end-to-end understanding of applied AI: data exploration, deep learning (CNNs, RNNs, LSTMs), and modern GenAI workflows such as LLMs and RAG.
                </p>
                <p>
                  What defines my work is how deeply I commit to what I take on. I care about building AI that is practical: systems that fit real workflows, are explainable enough to trust, and are engineered to run, not just impress in a demo.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Link to="/portfolio" className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-yellow-400 transition-all text-center">
                  View My Work
                </Link>
                <a 
                  href="/portfolio-site-react/resume.pdf" 
                  download="Aishwarya_Resume.pdf"
                  className="px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all flex items-center gap-2"
                >
                  Download Resume <FaDownload />
                </a>
              </div>
            </motion.div>

            {/* Right Image (Matching Home Page Dimensions) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center sticky top-24"
            >
               <div className="relative w-[400px] h-[500px] bg-gradient-to-b from-gray-800 to-transparent rounded-[3rem]">
                <img 
                  src={profileImg} 
                  alt="Aishwarya" 
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 relative transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* 4-Column Highlights Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {[
              { icon: <FaRobot />, title: "Generative & Agentic AI", desc: "Building intelligent agents and LLM workflows." },
              { icon: <FaCogs />, title: "MLOps", desc: "End-to-end pipeline design and model deployment." },
              { icon: <FaChartLine />, title: "Time Series", desc: "Forecasting and analysis of temporal data." },
              { icon: <FaLayerGroup />, title: "Full Stack", desc: "Integrating AI models into robust web applications." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8 relative"
            >
              {/* Timeline Line (Hidden on Mobile) */}
              <div className="hidden md:block absolute top-2 left-4 right-4 h-0.5 bg-gray-800 -z-10"></div>

              {timelineItems.map((item, index) => (
                <div key={index} className="relative pt-8 md:pt-0">
                  <div className="md:absolute md:-top-1.5 md:left-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 mb-4 md:mb-0"></div>
                  <span className="text-sm text-primary font-bold tracking-wider mb-1 block">{item.year}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Quote Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed">
              "Building Clean and meaningful AI features and experiences through <span className="text-primary font-normal">thoughtful code</span> and <span className="text-primary font-normal">design</span>."
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
