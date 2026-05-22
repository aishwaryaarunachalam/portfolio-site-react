import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const barAnimation = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  const skills = [
    { name: "Agentic AI, GenAI, LLMs & RAG Pipelines", level: "90%" },
    { name: "Machine Learning & Deep Learning", level: "88%" },
    { name: "Python & SQL", level: "92%" },
    { name: "MLOps: Docker, Kubernetes, CI/CD", level: "85%" },
    { name: "Vector Databases & Retrieval (pgvector, FAISS)", level: "88%" },
    { name: "Full Stack (FastAPI, React, Node.js)", level: "80%" },
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
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Results-driven AI Engineer with 11+ years of experience designing scalable systems and
            production-grade AI solutions. Specializing in generative AI, RAG pipelines, and agentic
            workflows that streamline complex operations and drive measurable efficiency gains.
          </motion.p>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/portfolio-site-react/resume.pdf"
              download="Aishwarya_Arunachalam_AI_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all"
            >
              Download Resume <FaDownload />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaGraduationCap /> Education
              </h3>
              <div className="relative border-l-2 border-gray-700 ml-3 pl-8 pb-8 space-y-8">

                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">PG Diploma in Artificial Intelligence</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Aug 2025 – Feb 2026
                  </div>
                  <p className="text-gray-300 italic mb-2">C-DAC (R&D MeitY, GoI) · Bangalore</p>
                  <p className="text-gray-400 text-sm">
                    900-hour full-time program. Graduated with 86.6% (A+ Grade). Recognised as
                    Best-Performing Capstone Project in the cohort for MediMitra — a safety-compliant
                    AI healthcare agent with RAG, SuryaOCR, Mistral-7B, and AWS deployment.
                    All India C-CAT Rank 223.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">BE (Computer Science)</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    2009 – 2013
                  </div>
                  <p className="text-gray-300 italic mb-2">Anna University, Chennai</p>
                  <p className="text-gray-400 text-sm">
                    CGPA: 8.39. Won intercollege project expo for a Railway Management System.
                  </p>
                </div>

              </div>
            </div>

            {/* Professional Skills */}
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

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaTrophy /> Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                <li>Google Enterprise Agent Ready Certification (In Progress)</li>
                <li>Claude with Bedrock & Vertex AI, MCP, Agents, SubAgents, Claude Code — Anthropic SkillJar</li>
                <li>KNIME AI Chatbots, RAG & Governance</li>
                <li>Prompt Design in Vertex AI · Google AI Essentials · Google Prompting Essentials — Coursera</li>
                <li>Digital Marketing Associate — Meta, Google, Amazon Ads</li>
                <li>NSE NCFM Foundation Module</li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaBriefcase /> Professional Experience
              </h3>
              <div className="relative border-l-2 border-gray-700 ml-3 pl-8 space-y-10">

                {/* Job 1 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Freelance Full Stack Developer</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Sep 2021 – Apr 2025
                  </div>
                  <p className="text-gray-300 italic mb-3">Self-Employed · Bengaluru</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Built and deployed scalable enterprise-grade MERN stack applications on AWS and Azure.</li>
                    <li>Delivered high-performance solutions via microservices, REST APIs, CI/CD, and cloud-native infra.</li>
                    <li>Maintained a 4.9/5 Fiverr client rating across engagements (Sep 2022).</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Freelance Digital Marketing Executive</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Jun 2016 – Jul 2021
                  </div>
                  <p className="text-gray-300 italic mb-3">Self-Employed · Bengaluru</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Architected high-performance digital marketing ecosystems managing multi-channel ad campaigns.</li>
                    <li>Drove revenue growth via data-driven SEO, conversion automation, and nurture workflows.</li>
                    <li>Also worked as Technical Solutions Architect at The Conversation Company (Feb–Jul 2021).</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark"></span>
                  <h4 className="text-xl font-bold text-white">Systems Engineer</h4>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold my-2">
                    Nov 2013 – Feb 2016
                  </div>
                  <p className="text-gray-300 italic mb-3">Tata Consultancy Services (TCS) · Chennai</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    <li>Led migration of a legacy platform to Sungard Intellimatch for a US & UK investment banking client.</li>
                    <li>Delivered 4 major and 2 minor high-volume reconciliations processing millions of transactions.</li>
                    <li>Received multiple On the Spot Awards for documentation and rapid upskilling.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FaTrophy /> Key Achievements
              </h3>
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>Best Capstone Project — C-DAC Cohort:</strong> Recognised for technical implementation, innovation, and practical business impact.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>All India C-CAT Rank 223 (Jun 2025):</strong> Secured top rank in the highly competitive C-CAT entrance examination.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>Fiverr Rating 4.9 (Sep 2022):</strong> Consistently delivered high-quality projects across client engagements.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>Star of the Quarter (Dec 2014):</strong> Awarded by Executive Director for key contributions to a complex migration project.</span>
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">★</span>
                    <span><strong>On the Spot Awards × 2 (TCS):</strong> By Project Head (May 2015) and Group Manager (Jun 2014) for exceptional documentation and rapid mastery.</span>
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