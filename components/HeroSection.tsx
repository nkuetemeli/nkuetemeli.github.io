import React from 'react';
// FIX: Add Variants to import from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { socialLinks } from '../constants';
import { Phone, Play, Linkedin, Instagram, TwitterX, PhoneOff, MicOff, Share } from './Icons';
import { s } from 'framer-motion/client';
import ProfileImage from '../assets/profile-removebg.png';

// Animation variants for Framer Motion
// FIX: Add Variants type annotation for type safety.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" }}
}

const imageFloatingVariants: Variants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// FIX: Add Variants return type annotation to fix type error for 'ease' property.
const floatingVariants = (delay = 0): Variants => ({
    initial: { y: 0 },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        },
    },
});


const ServiceCard: React.FC = () => (
     <motion.div variants={{...itemVariants, ...floatingVariants(0.8)}} className="absolute mt-20 md:1 top-1/2 -translate-y-1/2 -left-8 md:-left-12 w-48">
        <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-lg flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-800">Available for collaborations</p>
            </div>
        </div>
    </motion.div>
);

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="mt-8">
            <div className="relative bg-gradient-to-br from-[#7C87F7] to-[#4E58C7] rounded-3xl lg:rounded-[50px] p-6 sm:p-10 lg:p-16 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/0.05)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
                
                <motion.div 
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
                        >
                          <span className="text-2xl sm:text-3xl md:text-4xl font-normal block">
                            Natacha
                          </span>
                                <span className="font-extrabold">
                            Kuete Meli
                          </span>
                        </motion.h1>
                        <motion.p variants={itemVariants}
                                  className="mt-6 text-base sm:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                            I specialize in quantum computing for image processing and computer vision, developing
                            algorithms for optimization and advancing quantum machine learning.
                        </motion.p>
                        <motion.div variants={itemVariants}
                                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={() => scrollToSection("publications")}
                                    className="bg-transparent border-2 cursor-pointer border-white/80 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors duration-300">
                                See My Work
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Image and floating cards */}
                    <div className="relative h-[450px] sm:h-[550px] lg:h-full flex items-end justify-center">
                        <motion.div
                            className="absolute top-4 right-1 flex gap-2 z-20"
                            variants={itemVariants}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a 
                                    key={index} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className="bg-white/20 p-2.5 rounded-full text-white hover:bg-white/30"
                                    transition={{type: "spring", stiffness: 300}}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div 
                            className="relative w-full h-full z-10"
                            variants={{...imageVariants, ...imageFloatingVariants}}
                            animate="animate"
                        >
                            <img 
                                src={ProfileImage}
                                alt="Smiling Profile"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom h-full w-auto max-w-none" 
                            />
                             {/* Floating Cards relative to the doctor image */}
                            <ServiceCard/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
