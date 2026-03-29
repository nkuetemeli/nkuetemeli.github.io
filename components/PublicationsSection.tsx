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

  const sortedPublications = [...PublicationsData].sort((a, b) => b.id - a.id);

  const featuredPublications = sortedPublications.filter((pub) => pub.featured);

  const visiblePublications = showAll
    ? sortedPublications
    : sortedPublications.slice(0, 3);

  return (
    <section id="publications" className="bg-[#f0f4ff] py-20 sm:py-28">
      <motion.div
          className="container mx-auto px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.3}}
          variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          My Publications
        </motion.h2>

<>
  <motion.p
    variants={itemVariants}
    className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6"
  >
    Here are some of my recent publications.
  </motion.p>

  {featuredPublications.length > 0 && (
    <motion.ul
      variants={itemVariants}
      className="max-w-2xl mx-auto mb-12 text-left space-y-3"
    >
      {featuredPublications.map((pub) => (
        <li
          key={pub.permalink}
          className="border-l-4 border-indigo-500 pl-4"
        >
          <span className="text-gray-800 font-medium">{pub.title}</span>

          <div className="inline-flex gap-2 ml-2 text-sm">
            {pub.paperurl && (
              <a
                href={pub.paperurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                [paper]
              </a>
            )}

            {pub.project && (
              <a
                href={pub.project}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-medium hover:underline"
              >
                [project]
              </a>
            )}
          </div>
        </li>
      ))}
    </motion.ul>
  )}
</>


        {/* 📚 Publications Grid */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            variants={containerVariants}
        >
          {visiblePublications.map((pub) => {
            const isFeatured = pub.featured;

            return (
                <motion.div
                    key={pub.permalink}
                    layout
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className={`relative bg-white rounded-xl shadow-md overflow-hidden group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2`}
                >
                  {/* Featured badge */}
                  {isFeatured && (
                      <div
                          className="absolute top-3 left-3 z-10 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow">
                        Featured
                      </div>
                  )}

                  {/* Image */}
                  <div className="relative h-56">
                    {pub.teaser && (
                        <img
                            src={pub.teaser}
                            alt={pub.title}
                            className="w-full h-full object-contain"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/20"/>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {pub.title}
                    </h3>

                    <p
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{__html: pub.authors}}
                    />

                    <p className="text-gray-500 text-xs mt-1">
                      {pub.venue}
                    </p>

                    {pub.award && (
                        <p className="text-indigo-600 font-bold text-xs mt-1">
                          {pub.award}
                        </p>
                    )}

                    {/* Links */}
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      {pub.paperurl && (
                          <a
                              href={pub.paperurl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:underline"
                          >
                            Paper
                          </a>
                      )}

                      {pub.arxiv && (
                          <a
                              href={pub.arxiv}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:underline"
                          >
                            arXiv
                          </a>
                      )}

                      {pub.code && (
                          <a
                              href={pub.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:underline"
                          >
                            Code
                          </a>
                      )}

                      {/* ⭐ Highlight project for featured */}
                      {pub.project && (
                          <a
                              href={pub.project}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:underline"
                          >
                            Project
                          </a>
                      )}
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </motion.div>

        {/* 🔘 Show More */}
        {sortedPublications.length > 3 && (
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.5}}
                className="mt-16"
            >
              <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/50"
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