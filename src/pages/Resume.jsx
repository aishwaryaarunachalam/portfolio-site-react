import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';

const Resume = () => {
  // Animation for the progress bars
  const barAnimation = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  const skills = [
    { name: "Machine Learning & Deep Learning", level: "95%" },
    { name: "AgenticAI, GenAI, LLMs & RAG Pipelines", level: "90%" },
    { name: "Python, Java & SQL", level: "92%" },
    { name: "AWS, Jenkins, Docker & Kubernetes", level: "85%" },
    { name: "Computer Vision (OCR/OpenCV)", level: "88%" },
    { name: "Full Stack (MEAN/REST APIs)", level: "80%" }
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Resume
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            An adaptable and enthusiastic professional with well-founded standards in quality. 
            As a certified AI engineer, I have helped build practical, production-ready systems 
            and end-to-end AI pipelines including machine learning, deep learning, and GenAI workflows.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN */}
          <div>
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaGraduationCap /> Education
              </h3>
              
              <div className="relative border-l-2 border-gray-700 ml-3 pl-8 pb-8 space-y-8">
                {/* Item 1 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">PG - DAI (Artificial Intelligence)</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Aug 2025 - Feb 2026
                  </div>
                  <p className="text-gray-300 italic mb-2">C-DAC, Bangalore</p>
                  <p className="text-gray-400 text-sm">
                    Graduated top of class (86.7%). Built "MediMitra", a context-aware agentic healthcare chatbot combining RAG, OCR, and AWS.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">BE (Computer Science)</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    2009 - 2013
                  </div>
                  <p className="text-gray-300 italic mb-2">Sri Sairam Engineering College</p>
                  <p className="text-gray-400 text-sm">
                    CGPA: 8.39. Developed an enhanced management system for Railways winning the intercollege project expo.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Skills (Animated Bars) */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaCode /> Professional Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={barAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Certifications (Added extra for completeness) */}
            <div className="mt-12">
               <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaTrophy /> Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>KNIME AI Chatbots, RAG & Governance</li>
                <li>Digital Marketing Associate - Meta, Google, Amazon Ads</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Experience Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaBriefcase /> Professional Experience
              </h3>

              <div className="relative border-l-2 border-gray-700 ml-3 pl-8 space-y-10">
                
                {/* Job 1 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Sep 2021 - Jul 2025
                  </div>
                  <p className="text-gray-300 italic mb-3">Fiverr (Freelance)</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Developed full stack RESTful MEAN apps, MySQL databases, and real-time prototypes.</li>
                    <li>Maintained a 4.9/5 star rating across projects.</li>
                    <li>Created an HRMS prototype for a government transport corporation.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Technical Solutions Architect</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Apr 2021 - Aug 2021
                  </div>
                  <p className="text-gray-300 italic mb-3">The Conversation Company</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Managed digital architecture and social media footprints for startups.</li>
                    <li>Designed branding and technical marketing strategies.</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Academic Content Consultant</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Sep 2018 - Mar 2020
                  </div>
                  <p className="text-gray-300 italic mb-3">Kognify</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Structured syllabus for CBSE/ICSE curriculum client classes.</li>
                  </ul>
                </div>

                {/* Job 4 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">System Engineer</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Nov 2013 - Feb 2016
                  </div>
                  <p className="text-gray-300 italic mb-3">Tata Consultancy Services (TCS)</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Migrated legacy apps to Intellimatch for a major UK/US investment bank.</li>
                    <li>Received multiple "On the Spot" awards for documentation and complex migration efforts.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaTrophy /> Key Achievements
              </h3>
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>Star of the Quarter (2014):</strong> Awarded for extensive efforts in complex migration projects.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>Excellence Award (2012):</strong> Recognized by MLA for hospital management system implementation.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>On the Spot Awards (TCS):</strong> Received twice for exceptional documentation and learning curve.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
