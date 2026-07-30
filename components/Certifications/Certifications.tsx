"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "JavaScript for Beginners",
    issuer: "Coursera",
    credential:
      "https://coursera.org/share/6316fd49e62fad946b35c004239ca88a",
  },
  {
    title: "Programming Certificate",
    issuer: "Coursera",
    credential:
      "https://coursera.org/share/7263fc26d298d337fa30f98dfec08ba4",
  },
  {
    title: "Computer Science Certificate",
    issuer: "Coursera",
    credential:
      "https://coursera.org/share/0d2f467010d343d9aa546f621b15b908",
  },
  {
    title: "Software Development Certificate",
    issuer: "Coursera",
    credential:
      "https://coursera.org/share/0453a781f9e4f0ba26c82a02758362c3",
  },
  {
    title: "Technology Certificate",
    issuer: "Coursera",
    credential:
      "https://coursera.org/share/9940d7f3ea9e5721514411dfca316bed",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-black"
        >
          My{" "}
          <span className="text-yellow-400">
            Certifications
          </span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-3xl text-black">
                <FaCertificate />
              </div>

              <h3 className="text-2xl font-bold transition group-hover:text-yellow-400">
                {cert.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {cert.issuer}
              </p>

              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}