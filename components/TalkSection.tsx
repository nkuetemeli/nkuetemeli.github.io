import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TalksData from '@/jsons/talks.json';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TalkSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedAbstracts, setExpandedAbstracts] = useState<{ [key: string]: boolean }>({});

  const sortedTalks = [...TalksData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const visibleTalks = showAll ? sortedTalks : sortedTalks.slice(0, 3);

  const toggleAbstract = (permalink: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [permalink]: !prev[permalink] }));
  };

  return (
    <section id="talks" className="bg-white py-20 sm:py-28">
      <motion.div
        className="container mx-auto px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Talks
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            Selected talks on quantum computing, binary optimization, and computer vision.
          </motion.p>
        </div>

        <motion.div className="space-y-8" variants={containerVariants}>
          <AnimatePresence>
            {visibleTalks.map((talk) => {
              const isExpanded = expandedAbstracts[talk.permalink];
              return (
                <motion.div
                  key={talk.permalink}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
                  variants={itemVariants}
                >
                  {/* Header info */}
                  <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{talk.title}</h3>
                      <p className="text-gray-600 text-sm">{talk.venue}</p>
                      <p className="text-gray-500 text-xs mt-1">{new Date(talk.date).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => toggleAbstract(talk.permalink)}
                      className="mt-3 md:mt-0 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
                    >
                      {isExpanded ? 'Hide Abstract' : 'Show Abstract'}
                    </button>
                  </div>

                  {/* Abstract + Image */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-700"
                      >
                        {/* Optional Image */}
                        {talk.image && (
                          <img
                            src={talk.image}
                            alt={talk.title}
                            className="w-full max-h-96 object-contain rounded-lg mb-4 border border-gray-200 shadow-sm"
                          />
                        )}
                        <p>{talk.summary}</p>
                        {talk.links && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {talk.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline text-sm"
                              >
                                [{link.label}]
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Show more / Show less */}
        {TalksData.length > 3 && (
          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
            >
              {showAll ? 'Show Less' : 'Show All Talks'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default TalkSection;
