import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import TalksData from '@/jsons/talks.json';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TalkSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedAbstracts, setExpandedAbstracts] = useState<{
    [key: string]: boolean;
  }>({});

  const sortedTalks = [...TalksData].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const visibleTalks = showAll
    ? sortedTalks
    : sortedTalks.slice(0, 3);

  const toggleAbstract = (permalink: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [permalink]: !prev[permalink],
    }));
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
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            My Talks
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Selected talks on quantum computing,
            binary optimization, and computer vision.
          </motion.p>
        </div>

        {/* Talks */}
        <motion.div
          className="space-y-8"
          layout
          variants={containerVariants}
        >
          {visibleTalks.map((talk) => {
            const isExpanded =
              expandedAbstracts[talk.permalink];

            return (
              <motion.div
                key={talk.permalink}
                layout
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {talk.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {talk.venue}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(
                        talk.date
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      toggleAbstract(talk.permalink)
                    }
                    className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
                  >
                    {isExpanded
                      ? 'Hide Details'
                      : 'Show Details'}
                  </button>
                </div>

                {/* Expandable content */}
                {isExpanded && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    {talk.image && (
                      <img
                        src={talk.image}
                        alt={talk.title}
                        className="w-full max-h-96 object-contain rounded-lg border border-gray-200 shadow-sm mb-4"
                      />
                    )}

                    <p className="text-gray-700 leading-relaxed">
                      {talk.summary}
                    </p>

                    {talk.links && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {talk.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline text-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Show More */}
        {sortedTalks.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              {showAll
                ? 'Show Less'
                : 'See More Talks'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default TalkSection;