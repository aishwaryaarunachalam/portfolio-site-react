import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaCode, FaPaintBrush, FaLightbulb } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const zoomIn = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };


  const badgeAnimation = {
    initial: (i) => ({
      opacity: 0,
      x: i.type === 'slideRight' ? -100 : 0,
      y: i.type === 'slideUp' ? 100 : 0,
      scale: i.type === 'pop' ? 0 : 1,
    }),
    animate: (i) => ({
      opacity: 1,
      x: [0, i.floatX, 0],
      y: [0, i.floatY, 0],
      scale: 1,
      transition: {
        opacity: { duration: 0.8, delay: i.delay },
        scale: { duration: 0.5, delay: i.delay, ease: "backOut" },
        x: {
          duration: i.type === 'slideRight' ? 1 : i.duration + 1,
          repeat: i.type === 'slideRight' ? 0 : Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: i.delay,
        },
        y: {
          duration: i.duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: i.delay,
        }
      }
    })
  };


  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden relative bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Hello, I'm <span className="text-primary">Aishwarya</span><br />
            <span className="text-primary">Arunachalam</span>
          </h1>
          
          <div className="mt-4 text-2xl md:text-3xl text-gray-300 font-light flex gap-2">
            <span className="text-primary font-semibold">
              <TypeAnimation
                sequence={['AI Engineer', 2000, 'Machine Learning Engineer', 2000, 'Deep Learning Engineer', 2000, 'AI Solutions Architect', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>


          <p className="mt-6 text-gray-400 max-w-lg text-lg leading-relaxed">
            I love building intelligent systems and design scalable solutions that translate research into production-ready pipelines. With a background spanning software engineering, distributed systems, and applied AI, I’m comfortable taking ideas from experimentation to reliable deployment.
          </p>


          <div className="mt-8 flex gap-4">
            <Link 
              to="/portfolio"
              className="px-8 py-3 bg-primary text-black font-medium rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-primary/25 inline-block text-center"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all inline-block text-center"
            >
              Get In Touch
            </Link>
          </div>


          <div className="mt-12 flex gap-6 text-xl text-gray-400">
  <a href="https://www.linkedin.com/in/aishwaryaarunachalam/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
  <a href="https://github.com/aishwaryaarunachalam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
</div>

        </motion.div>


        {/* Right Image Section */}
        <motion.div 
          variants={zoomIn}
          initial="initial"
          animate="animate"
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[400px] h-[500px] bg-gradient-to-b from-gray-800 to-transparent rounded-[3rem]">
            <img 
              src={profileImg} 
              alt="Aishwarya" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 relative" 
            />


            {/* Badge 1: SLIDE IN FROM LEFT */}
            <motion.div 
              variants={badgeAnimation} 
              custom={{ type: 'slideRight', floatY: -20, floatX: 5, duration: 4, delay: 0.5 }} 
              initial="initial"
              animate="animate"
              className="absolute -right-8 top-12 bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-primary/20 text-primary rounded-lg"><FaPaintBrush /></div>
              <span className="font-semibold text-sm text-white">Build</span>
            </motion.div>


            {/* Badge 2: POP IN */}
            <motion.div 
              variants={badgeAnimation} 
              custom={{ type: 'pop', floatY: 15, floatX: -10, duration: 6, delay: 0.8 }} 
              initial="initial"
              animate="animate"
              className="absolute -left-12 top-1/2 bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-primary/20 text-primary rounded-lg"><FaCode /></div>
              <span className="font-semibold text-sm text-white">Code</span>
            </motion.div>


            {/* Badge 3: SLIDE IN FROM DOWN */}
            <motion.div 
              variants={badgeAnimation} 
              custom={{ type: 'slideUp', floatY: -12, floatX: 8, duration: 3.5, delay: 1.1 }} 
              initial="initial"
              animate="animate"
              className="absolute -right-4 bottom-20 bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-primary/20 text-primary rounded-lg"><FaLightbulb /></div>
              <span className="font-semibold text-sm text-white">Solutions</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Home;
