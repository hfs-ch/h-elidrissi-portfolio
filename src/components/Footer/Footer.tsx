"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-black">
              Hafsa
              <span className="text-yellow-400">.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Computer Engineering Student passionate about
              Artificial Intelligence, Software Engineering,
              Cloud Computing and building impactful digital
              solutions.
            </p>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-2xl font-bold">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <a href="#about" className="transition hover:text-yellow-400">
                About
              </a>

              <a href="#skills" className="transition hover:text-yellow-400">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-yellow-400">
                Projects
              </a>

              <a href="#experience" className="transition hover:text-yellow-400">
                Experience
              </a>

              <a href="#certifications" className="transition hover:text-yellow-400">
                Certifications
              </a>

              <a href="#contact" className="transition hover:text-yellow-400">
                Contact
              </a>

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:hafsamedelidrissi@gmail.com"
                className="flex items-center gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <FaEnvelope />
                hafsamedelidrissi@gmail.com
              </a>

              <a
                href="https://github.com/hfs-ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <FaGithub />
                github.com/hfs-ch
              </a>

              <a
                href="https://www.linkedin.com/in/hafsa-el-idrissi-b41391363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-yellow-400"
              >
                <FaLinkedin />
                LinkedIn Profile
              </a>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-gray-500">
            © 2026 Hafsa El Idrissi • Built with Next.js, React & Tailwind CSS
          </p>

          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: .95,
            }}
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition hover:shadow-yellow-400/40"
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}