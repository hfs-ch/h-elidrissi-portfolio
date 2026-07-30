"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TerraBuild ERP",
    description:
      "A complete ERP platform for construction companies featuring project management, quotations, invoices, clients, employees, inventory management and dashboards. Developed as a modern enterprise management solution.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
    ],

    github: "https://github.com/hfs-ch/terrabuild-erp",
    demo: "",
  },

  {
    title: "NetShield",
    description:
      "A Network Intrusion Detection System (NIDS) capable of monitoring network traffic, detecting suspicious activities and generating real-time security alerts using packet inspection.",

    technologies: [
      "Java",
      "Pcap4J",
      "SQL Server",
      "Networking",
      "Cybersecurity",
    ],

    github: "https://github.com/hfs-ch/NetShield",
    demo: "",
  },

  {
    title: "Network Vulnerability Scanner",
    description:
      "A cybersecurity tool that scans networks to discover hosts, detect open ports, identify running services and report potential vulnerabilities for security assessments.",

    technologies: [
      "Python",
      "Nmap",
      "Networking",
      "Cybersecurity",
    ],

    github:
      "https://github.com/hfs-ch/network-vulnerability-scanner",
    demo: "",
  },

  {
    title: "TripAtlas (In Progress)",
    description:
      "An AI-powered travel platform designed to help users discover countries, hotels, activities and personalized travel recommendations through an intelligent assistant.",

    technologies: [
      "Next.js",
      "AI",
      "TypeScript",
      "Firebase",
    ],

    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#070707] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-black"
        >
          Featured <span className="text-yellow-400">Projects</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10"
            >

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-10 flex gap-8">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-yellow-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-yellow-400"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="text-sm text-yellow-400">
                    🚧 Currently under development
                  </span>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}