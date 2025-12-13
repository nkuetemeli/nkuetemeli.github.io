import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TeachingData from '@/jsons/teaching.json';

const INITIAL_VISIBLE = 4;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const TeachingSection: React.FC = () => {
  const teachingItems = TeachingData.filter(i => i.collection === 'teaching')
    .sort((a, b) => b.date.localeCompare(a.date));

  const supervisionItems = TeachingData.filter(i => i.collection === 'supervision')
    .sort((a, b) => b.date.localeCompare(a.date));

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleTeachingItems = teachingItems.slice(0, visibleCount);

  return (
    <section id="teaching" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My Teaching Activities
        </motion.h2>

        <motion.p
          className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Here are some teaching and co‑supervision activities in which I was involved.
          <br />
          Click a teaching item to see its details.
        </motion.p>

        {/* Teaching master-detail */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left column: teaching list */}
          <motion.div className="space-y-2">
            <motion.h3 className="text-2xl font-semibold text-gray-800 mb-6" variants={itemVariants}>
              Teaching
            </motion.h3>

            {visibleTeachingItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                variants={itemVariants}
                className={`text-left p-3 rounded-lg w-full transition-colors duration-200 text-indigo-600 font-semibold hover:bg-indigo-50 ${
                  selectedItem?.id === item.id ? 'bg-indigo-100' : ''
                }`}
              >
                {item.title}
              </motion.button>
            ))}

            {teachingItems.length > INITIAL_VISIBLE && (
              <motion.div className="mt-4 text-center" variants={itemVariants}>
                {visibleCount < teachingItems.length ? (
                  <button
                    onClick={() => setVisibleCount(teachingItems.length)}
                    className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition-all duration-300"
                  >
                    Show More
                  </button>
                ) : (
                  <button
                    onClick={() => setVisibleCount(INITIAL_VISIBLE)}
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition-all duration-300"
                  >
                    Show Less
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right column: selected detail panel */}
          <motion.div>
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedItem.title}</h4>
                  <p className="text-gray-500 mb-4">
                    {selectedItem.type} • {selectedItem.venue} • {new Date(selectedItem.date).getFullYear()} {selectedItem.location && `• ${selectedItem.location}`}
                  </p>
                  {selectedItem.collection === 'supervision' && selectedItem.student && (
                    <p className="text-gray-700 mb-4">Student: {selectedItem.student}</p>
                  )}
                  {selectedItem.summary && <p className="mb-3">{selectedItem.summary}</p>}
                  {selectedItem.topics && (
                    <ul className="list-disc list-inside space-y-1">
                      {selectedItem.topics.map((t: string, idx: number) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-500 p-6 border border-dashed border-gray-300 rounded-2xl"
                >
                  Select a teaching title to see details here
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Supervision full list */}
        {supervisionItems.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 className="text-2xl font-semibold text-gray-800 mb-6" variants={itemVariants}>
              Supervision
            </motion.h3>
            {supervisionItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 mb-4"
              >
                <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">
                  {item.type} • {item.venue} • {new Date(item.date).getFullYear()} {item.location && `• ${item.location}`}
                </p>
                {item.student && <p className="text-gray-700 mt-1">Student: {item.student}</p>}
                {item.summary && <p className="mt-2 text-gray-700">{item.summary}</p>}
                {item.topics && (
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {item.topics.map((t: string, idx: number) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeachingSection;
