import React from 'react';
import { motion, Variants } from 'framer-motion';
import CVData from '@/jsons/cv.json';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ConciseCVCards: React.FC = () => {
  return (
    <section id="cv" className="bg-white py-20 sm:py-28">
      <motion.div
          className="container mx-auto px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          My CV
        </h2>

        <motion.p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Here is my concise CV with education, experience, profile details, and reviewer activities.
        </motion.p>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
        >
          {/* Education Card */}
          <motion.div
              variants={itemVariants}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {CVData.education.map(edu => (
                  <li key={edu.key}>
                    <span className="font-semibold">{edu.degree}</span> — {edu.field} <br/>
                    <span className="text-gray-500">{edu.institution} • {edu.period}</span>
                  </li>
              ))}
            </ul>
          </motion.div>

          {/* Work Experience Card */}
          <motion.div
              variants={itemVariants}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Experience</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {CVData.workExperience.map(work => (
                  <li key={work.key}>
                    <span className="font-semibold">{work.position}</span> <br/>
                    <span className="text-gray-500">{work.institution} • {work.period}</span>
                  </li>
              ))}
            </ul>
          </motion.div>

          {/* Reviewer Activities Card */}
          <motion.div
              variants={itemVariants}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reviewer Activities</h3>
            <div className="flex flex-wrap gap-2">
              {CVData.reviewerActivities.map((rev, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-700 font-medium text-xs px-3 py-1 rounded-full">
                    {rev}
                  </span>
              ))}
            </div>
          </motion.div>

          {/* Profile Card (Languages + Engagements) */}
          <motion.div
              variants={itemVariants}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile</h3>

            {/* Languages */}
            <div className="mb-3">
              <h4 className="font-semibold text-gray-700 mb-1">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {CVData.profile.languages.map((lang, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-700 font-medium text-xs px-3 py-1 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagements */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Engagements</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {CVData.profile.engagements.womenInVision.map((item, idx) => (
                  <li key={`women-${idx}`}>{item}</li>
                ))}
                {CVData.profile.engagements.volunteer.map((item, idx) => (
                  <li key={`volunteer-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Optional Download Button */}
        {CVData.download && (
            <motion.div variants={itemVariants} className="text-center mt-12">
              <a
                  href={CVData.download.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
              >
                {CVData.download.label}
              </a>
            </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ConciseCVCards;
