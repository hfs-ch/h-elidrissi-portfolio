"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import AnimatedBackground from "../Background/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">

      <AnimatedBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
          >

            <div className="mb-6 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400">
              ✨ Software Engineer • AI • Full Stack • Cloud
            </div>

            <h1 className="text-6xl font-black leading-none text-white md:text-8xl">
              Hafsa
              <br />
              <span className="text-yellow-400">
                El Idrissi
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-light text-gray-300">
              Building Intelligent Digital Solutions
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Computer Engineering student passionate about software
              engineering, artificial intelligence, cloud computing,
              databases and modern web technologies.

              <br />
              <br />

              I enjoy designing scalable applications,
              solving real-world problems and continuously
              learning new technologies.
            </p>

            {/* Education */}

            <p className="mt-6 font-medium text-yellow-400">
              Engineering Student • EMSI Marrakech
            </p>

            {/* Email */}

            <a
              href="mailto:hafsamedelidrissi@gmail.com"
              className="mt-3 flex items-center gap-3 text-gray-300 transition hover:text-yellow-400"
            >
              <FaEnvelope className="text-yellow-400" />
              hafsamedelidrissi@gmail.com
            </a>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,.35)]"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 rounded-xl border border-yellow-400 px-7 py-4 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

            {/* Technologies */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "TypeScript",
                "Laravel",
                "Python",
                "Java",
                "SQL",
                "Linux",
                "Docker",
                "Artificial Intelligence",
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  {skill}
                </span>

              ))}

            </div>

            {/* Social */}

            <div className="mt-12 flex gap-8">

              <a
                href="https://github.com/hfs-ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-3xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-yellow-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hafsa-el-idrissi-b41391363"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-yellow-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:hafsamedelidrissi@gmail.com"
                aria-label="Email"
                className="text-3xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-yellow-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="relative flex justify-center"
          >

            <div className="absolute h-[700px] w-[700px] rounded-full bg-yellow-400/5 blur-[220px]" />

            <div className="absolute h-[550px] w-[550px] rounded-full bg-yellow-500/10 blur-[150px]" />

            <div className="absolute h-[560px] w-[560px] rounded-full border border-yellow-400/20" />

            <motion.div
              whileHover={{
                scale: 1.04,
                rotateY: 6,
              }}
              transition={{
                duration: .4,
              }}
            >

              <Image
                src="/images/hafsa.png"
                alt="Hafsa El Idrissi"
                width={560}
                height={760}
                priority
                className="relative rounded-[40px] border border-white/10 object-cover shadow-[0_0_80px_rgba(255,215,0,.25)]"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}