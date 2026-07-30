"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black"
        >
          Get In <span className="text-yellow-400">Touch</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">

          <a
            href="mailto:hafsamedelidrissi@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400"
          >
            <FaEnvelope className="mb-4 text-4xl text-yellow-400" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-2 text-gray-400">
              hafsamedelidrissi@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/hfs-ch"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400"
          >
            <FaGithub className="mb-4 text-4xl text-yellow-400" />
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="mt-2 text-gray-400">
              github.com/hfs-ch
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/hafsa-el-idrissi-b41391363"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400"
          >
            <FaLinkedin className="mb-4 text-4xl text-yellow-400" />
            <h3 className="text-xl font-bold">LinkedIn</h3>
            <p className="mt-2 text-gray-400">
              Hafsa El Idrissi
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}