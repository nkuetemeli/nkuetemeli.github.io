import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import PublicationsData from '@/jsons/publications.json';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const PublicationsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePublications = showAll
  ? [...PublicationsData].sort((a, b) => b.id - a.id)
  : [...PublicationsData].sort((a, b) => b.id - a.id).slice(0, 3);


  return (
    <section id="publications" className="bg-[#f0f4ff] py-20 sm:py-28">
      <motion.div
        className="container mx-auto px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          My Publications
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Here are some of my recent publications. Click the links to read the full paper.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          variants={containerVariants}
        >
          {visiblePublications.map((pub) => (
            <motion.div
              key={pub.permalink}
              layout
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            >
              <a href={pub.paperurl || '#'} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56">
                  {pub.teaser && <img src={pub.teaser} alt={pub.title} className="w-full h-full object-contain" />}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: pub.authors }} />
                  <p className="text-gray-500 text-xs mt-1">{pub.venue}</p>
                  {pub.award && <p className="text-teal-950 font-bold text-xs mt-1">{pub.award}</p>}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {PublicationsData.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-teal-950 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              {showAll ? 'Show Less' : 'See More Publications'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PublicationsSection;
