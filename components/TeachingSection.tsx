import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TeachingData from '@/jsons/teaching.json';

const INITIAL_VISIBLE = 4;

const TeachingSection: React.FC = () => {
  const teachingItems = TeachingData
    .filter(i => i.collection === 'teaching')
    .sort((a, b) => b.date.localeCompare(a.date));

  const supervisionItems = TeachingData
    .filter(i => i.collection === 'supervision')
    .sort((a, b) => b.date.localeCompare(a.date));

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedItem, setSelectedItem] = useState(teachingItems[0] ?? null);

  const visibleTeachingItems = teachingItems.slice(0, visibleCount);

  return (
    <section id="teaching" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Teaching Activities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Teaching and co-supervision activities carried out as a research and teaching assistant.
            Click on a teaching title to view detailed information.
          </p>
        </div>

        {/* Teaching: master–detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Left: teaching titles */}
          <motion.div layout className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Teaching
            </h3>

            <AnimatePresence initial={false}>
              {visibleTeachingItems.map(item => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors
                    ${selectedItem?.id === item.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  {item.title}
                </motion.button>
              ))}
            </AnimatePresence>

            {/* Show more / less */}
            {teachingItems.length > INITIAL_VISIBLE && (
              <div className="pt-4 text-center">
                {visibleCount < teachingItems.length ? (
                  <button
                    onClick={() => setVisibleCount(teachingItems.length)}
                    className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition"
                  >
                    Show more
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setVisibleCount(INITIAL_VISIBLE);
                      setSelectedItem(teachingItems[0] ?? null);
                    }}
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition"
                  >
                    Show less
                  </button>
                )}
              </div>
            )}
          </motion.div>

          {/* Right: details panel */}
          <div>
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedItem.title}
                  </h4>

                  <p className="text-gray-500 mb-4">
                    {selectedItem.venue} • {new Date(selectedItem.date).getFullYear()}
                    {selectedItem.location && ` • ${selectedItem.location}`}
                  </p>

                  {selectedItem.summary && (
                    <p className="text-gray-700 mb-4">
                      {selectedItem.summary}
                    </p>
                  )}

                  {selectedItem.topics && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedItem.topics.map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 rounded-2xl border border-dashed text-gray-500"
                >
                  Select a teaching activity to view details.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Supervision (full details list) */}
        {supervisionItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Supervision
            </h3>

            <div className="space-y-4">
              {supervisionItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.venue} • {new Date(item.date).getFullYear()}
                    {item.location && ` • ${item.location}`}
                  </p>
                  {item.student && (
                    <p className="text-gray-700 mt-1">
                      Student: {item.student}
                    </p>
                  )}
                  {item.summary && (
                    <p className="text-gray-700 mt-3">
                      {item.summary}
                    </p>
                  )}
                  {item.topics && (
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                      {item.topics.map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TeachingSection;
