import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from './Icons';
import CodeTechFree from '../assets/Bloch.png';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Publications", href: "#publications" },
  { name: "Talks", href: "#talks" },
  { name: "Teaching", href: "#teaching" },
  { name: "CV", href: "#cv" }
];

const EMAIL = "natacha.kuete-meli@uni-siegen.de";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    // Wait for mobile menu to collapse
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250); // match Framer Motion exit duration
  };


  return (
    <header className="fixed top-0 left-0 right-0 mx-auto w-[95%] max-w-7xl bg-white/80 backdrop-blur-md rounded-full shadow-md py-3 px-6 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={CodeTechFree}
              alt="Natacha Kuete Meli"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-gray-800">
            Natacha Kuete Meli
          </span>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onClick={() => scrollToSection(link.href.substring(1))}
              className="text-sm font-medium text-gray-600 hover:text-teal-950 transition-colors"
            >
              {link.name}
            </motion.button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <motion.a
              href={`mailto:${EMAIL}`}
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0.5}}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="hidden lg:inline-block bg-gray-900 cursor-pointer text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </motion.a>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800"
            >
              {isMenuOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                exit={{opacity: 0, height: 0}}
                className="lg:hidden mt-4"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-sm font-medium text-gray-600 hover:text-teal-950 py-2"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile CTA */}
              <a
                href={`mailto:${EMAIL}`}
                className="sm:hidden bg-teal-950 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-sm w-40 mx-auto text-center"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
