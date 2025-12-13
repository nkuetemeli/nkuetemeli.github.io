import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProfileAvatar from "../assets/profile.png";
import NewsData from "@/jsons/news.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const AboutSection: React.FC = () => {
  const [showAllNews, setShowAllNews] = useState(false);

  // Sort news descending by date
  const sortedNews = [...NewsData].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });

  const visibleNews = showAllNews ? sortedNews : sortedNews.slice(0, 4);

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <motion.div
        className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* TEXT */}
        <motion.div className="text-center lg:text-left" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Since April 2024, I have held a position as a research assistant for quantum computer vision at the{" "}
            <a href="https://www.vsa.informatik.uni-siegen.de" className="text-indigo-600 hover:underline">
              University of Siegen
            </a>{" "}
            in the Computer Vision Group of{" "}
            <a href="https://sites.google.com/site/michaelmoellermath/" className="text-indigo-600 hover:underline">
              Prof. Dr. Michael Möller
            </a>
            , and I am co-supervised by{" "}
            <a href="https://people.mpi-inf.mpg.de/~golyanik/" className="text-indigo-600 hover:underline">
              Dr. Vladislav Golyanik
            </a>{" "}
            at the Max Planck Institute for Informatics.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            I received my PhD on quantum algorithms for image processing and my Master in computational life science
            from the University of Lübeck, both under the supervision of{" "}
            <a href="https://www.lellmann.net/work/" className="text-indigo-600 hover:underline">
              Prof. Dr. Jan Lellmann
            </a>
            . I received my Bachelor in computer science from the University of Dschang.
          </motion.p>

          {/* NEWS */}
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-800 mb-6">
            News
          </motion.h3>

          <motion.ul layout className="space-y-4 text-left">
            <AnimatePresence>
              {visibleNews.map((item, index) => (
                <motion.li
                  key={item.date + index} // unique key
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-l-4 border-indigo-500 pl-4"
                >
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <p className="text-gray-700">
                    {item.text}{" "}
                    {item.links?.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="text-indigo-600 hover:underline ml-1"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {/* TOGGLE BUTTON */}
          {NewsData.length > 4 && (
            <motion.div variants={itemVariants} className="mt-6 flex justify-center lg:justify-start">
              <button
                onClick={() => setShowAllNews((prev) => !prev)}
                className="px-5 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
              >
                {showAllNews ? "Show less" : "Show all news"}
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
          }}
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full -rotate-12" />
            <img
              src={ProfileAvatar}
              alt="Natacha Kuete Meli"
              className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
