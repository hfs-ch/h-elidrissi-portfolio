"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "Baccalaureate in Physical Sciences",
    description:
      "Graduated with a Baccalaureate in Physical Sciences with Honors (Mention Bien). This achievement marked the beginning of my journey toward computer engineering and software development.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2023 - 2025",
    title: "University Diploma of Technology (DUT) in Computer Science",
    description:
      "Studied Computer Science at the Higher School of Technology (EST). Developed strong skills in programming, databases, software engineering, web development, algorithms and object-oriented programming.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2024",
    title: "Internship - Province of Smara",
    description:
      "Completed a professional internship where I designed and developed an RNP management application to improve administrative processes and digital services.",
    icon: <FaBriefcase />,
  },
  {
    year: "2025",
    title: "Remote Internship - AIROBUST (France)",
    description:
      "Worked remotely on an AI-powered Retrieval-Augmented Generation (RAG) application using Angular and modern AI technologies, contributing to the development of intelligent software solutions.",
    icon: <FaRocket />,
  },
  {
    year: "2025",
    title: "Graduated with DUT in Computer Science",
    description:
      "Successfully earned my University Diploma of Technology (DUT) after completing several academic projects and professional internships.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2026 - Present",
    title: "Engineering Student - EMSI Marrakech",
    description:
      "Currently pursuing an Engineering Degree in Computer Science at EMSI Marrakech. Expanding my expertise in software engineering, artificial intelligence, cloud computing, databases and modern application development.",
    icon: <FaLaptopCode />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-black"
        >
          My <span className="text-yellow-400">Journey</span>
        </motion.h2>

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-8 top-0 h-full w-1 rounded-full bg-yellow-400/30" />

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-14 flex gap-8"
            >

              {/* Icon */}

              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black shadow-lg">
                {item.icon}
              </div>

              {/* Card */}

              <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400">

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  {item.year}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}