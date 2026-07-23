import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Languages,
  Users,
  FileCheck,
  Download,
} from "lucide-react";
import CVData from "@/jsons/cv.json";

type NodeType = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  position: string;
};

const nodes: NodeType[] = [
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    color: "from-indigo-500 to-violet-500",
    position: "left-[10%] top-[65%]",
  },
  {
    id: "experience",
    title: "Academic Experience",
    icon: Microscope,
    color: "from-sky-500 to-cyan-500",
    position: "left-[40%] top-[30%]",
  },
  {
    id: "reviewer",
    title: "Reviewer",
    icon: FileCheck,
    color: "from-fuchsia-500 to-pink-500",
    position: "right-[12%] top-[20%]",
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
    color: "from-amber-500 to-orange-500",
    position: "right-[20%] bottom-[15%]",
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    color: "from-emerald-500 to-green-500",
    position: "left-[22%] top-[12%]",
  },
];

export default function CVWorld() {
  const [selected, setSelected] = useState<string | null>(null);

  const renderContent = () => {
    switch (selected) {
      case "education":
        return (
          <div className="space-y-3">
            {CVData.education.map((e) => (
              <div key={e.key}>
                <div className="font-semibold">{e.degree}</div>
                <div className="text-sm text-gray-600">
                  {e.field}
                </div>
                <div className="text-xs text-gray-500">
                  {e.institution} • {e.period}
                </div>
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div className="space-y-3">
            {CVData.workExperience.map((e) => (
              <div key={e.key}>
                <div className="font-semibold">{e.position}</div>
                <div className="text-sm text-gray-600">
                  {e.institution}
                </div>
                <div className="text-xs text-gray-500">
                  {e.period}
                </div>
              </div>
            ))}
          </div>
        );

      case "languages":
        return (
          <ul className="space-y-2">
            {CVData.profile.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        );

      case "community":
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                Women in Vision
              </h4>
              {CVData.profile.engagements.womenInVision.map((i) => (
                <div key={i}>{i}</div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Volunteer
              </h4>
              {CVData.profile.engagements.volunteer.map((i) => (
                <div key={i}>{i}</div>
              ))}
            </div>
          </div>
        );

      case "reviewer":
        return (
          <div className="flex flex-wrap gap-2">
            {CVData.reviewerActivities.map((r) => (
              <span
                key={r}
                className="rounded-full bg-indigo-100 px-3 py-1 text-sm"
              >
                {r}
              </span>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="cv"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white py-24"
    >
      {/* Background blobs */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-center text-5xl font-bold">
            My Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Explore the different parts of my academic journey.
          </p>
        </motion.div>

        <div className="relative mt-20 hidden h-[650px] lg:block">
          {/* Connection lines */}

          <svg className="absolute inset-0 h-full w-full">
            <line
              x1="22%"
              y1="18%"
              x2="46%"
              y2="35%"
              stroke="#c7d2fe"
              strokeWidth="2"
            />

            <line
              x1="46%"
              y1="35%"
              x2="80%"
              y2="25%"
              stroke="#c7d2fe"
              strokeWidth="2"
            />

            <line
              x1="46%"
              y1="35%"
              x2="18%"
              y2="72%"
              stroke="#c7d2fe"
              strokeWidth="2"
            />

            <line
              x1="46%"
              y1="35%"
              x2="72%"
              y2="80%"
              stroke="#c7d2fe"
              strokeWidth="2"
            />
          </svg>

          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                onClick={() => setSelected(node.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                animate={{
                  y: [0, -8, 0],
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className={`absolute ${node.position}`}
              >
                <div
                  className={`flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br ${node.color} text-white shadow-2xl`}
                >
                  <Icon size={34} />
                  <div className="mt-3 px-3 text-center text-sm font-semibold">
                    {node.title}
                  </div>
                </div>
              </motion.button>
            );
          })}

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                className="absolute left-1/2 top-1/2 w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 text-xl text-gray-400"
                >
                  ×
                </button>

                <h3 className="mb-6 text-2xl font-bold">
                  {nodes.find((n) => n.id === selected)?.title}
                </h3>

                {renderContent()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile */}

        <div className="mt-16 grid gap-6 lg:hidden">
          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <button
                key={node.id}
                onClick={() =>
                  setSelected(selected === node.id ? null : node.id)
                }
                className="rounded-3xl bg-white p-6 text-left shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Icon />
                  <span className="font-semibold">
                    {node.title}
                  </span>
                </div>

                <AnimatePresence>
                  {selected === node.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="mt-6 overflow-hidden"
                    >
                      {renderContent()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {CVData.download && (
          <div className="mt-20 flex justify-center">
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={CVData.download.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-white shadow-xl"
            >
              <Download size={18} />
              {CVData.download.label}
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
}