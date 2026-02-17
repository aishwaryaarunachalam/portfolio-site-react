import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaBrain, FaRobot, FaFilePrescription } from 'react-icons/fa';

const Portfolio = () => {
  // REPLACE THIS with your actual YouTube Video ID
  // Example: if url is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const youtubeVideoId = "YnH1UpY3Xao"; 

  // Project Data
  const project = {
    title: "MediMitra",
    subtitle: "Context-Aware Agentic Healthcare Assistant",
    tags: [
      "Gen AI", 
      "RAG",
      "Streamlit",
      "FastAPI", 
      "LangChain", 
      "AWS RDS", 
      "Hugging Face", 
      "Agentic AI", 
      "Healthcare"
    ],
    repoLink: "https://github.com/aishwaryaarunachalam/MediMitra", // Replace with actual repo if different
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {/* Explore my latest work in AI */}
          </motion.p>
        </div>

        {/* Project Card */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-gray-800/30 rounded-3xl border border-white/5 overflow-hidden shadow-2xl"
        >
          
          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative w-full aspect-video bg-black/50">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`} 
              title="MediMitra Demo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            
            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-primary font-medium text-lg">{project.subtitle}</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white rounded-full transition-all flex items-center gap-2 group"
                >
                  <FaGithub className="text-xl group-hover:text-primary transition-colors" />
                  <span>View Code</span>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description Grid */}
            <div className="grid md:grid-cols-3 gap-8 text-gray-400 leading-relaxed border-t border-white/5 pt-8">
              
              <div className="col-span-2 space-y-4">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                  <FaBrain className="text-primary" /> Project Overview
                </h4>
                <p>
                  MediMitra is a context-aware healthcare assistant designed to bridge the gap between patients and medical data. 
                  It utilizes a <strong>RAG (Retrieval-Augmented Generation)</strong> architecture to interpret medical documents 
                  and provide answers grounded in domain knowledge, ensuring accuracy and trust.
                </p>
                <p>
                  Beyond simple Q&A, it features an <strong>Agentic AI</strong> workflow that can autonomously manage patient 
                  appointments, classify and extract information from documents for automatic data entry and manage inventory directly through the chat interface.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                  <FaFilePrescription className="text-primary" /> Key Features
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span><strong>Surya OCR:</strong> Vision transformer-based automatic document classification & data entry.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span><strong>Prescription Scan:</strong> Instantly identifies medicines and checks inventory status.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span><strong>Smart Scheduling:</strong> Manages appointments via natural language conversation.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Subtle Nudge */}
        <div className="text-center mt-12 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-sm">
            Curious about the RAG implementation or the Agentic workflow? <br />
            <a href={project.repoLink} className="text-primary hover:underline underline-offset-4">Check out the repository</a> to see how it works under the hood.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
