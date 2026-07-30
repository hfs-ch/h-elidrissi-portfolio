"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLaptopCode,
  FaBrain,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-black"
        >
          About <span className="text-yellow-400">Me</span>
        </motion.h2>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[480px] w-[480px] rounded-full bg-yellow-400/10 blur-[150px]" />

            <Image
              src="/images/hafsa.png"
              alt="Hafsa El Idrissi"
              width={460}
              height={580}
              className="relative rounded-[35px] border border-white/10 object-cover shadow-[0_0_80px_rgba(212,175,55,0.2)]"
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.4em] text-yellow-400">
              Who I Am
            </p>

            <h3 className="mt-4 text-5xl font-black leading-tight">
              Passionate about
              <br />
              Building Innovative Software
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              I'm a Computer Engineering student passionate about
              software engineering, artificial intelligence,
              cloud computing, databases and modern web development.

              <br /><br />

              I enjoy solving complex problems, learning emerging
              technologies and transforming ideas into elegant,
              scalable digital solutions.

              <br /><br />

              My goal is to become a versatile software engineer
              capable of designing impactful products across
              multiple technology domains.
            </p>

            {/* FEATURES */}

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <Card
                icon={<FaLaptopCode />}
                title="Software Engineering"
              />

              <Card
                icon={<FaBrain />}
                title="Artificial Intelligence"
              />

              <Card
                icon={<FaCloud />}
                title="Cloud Computing"
              />

              <Card
                icon={<FaDatabase />}
                title="Databases"
              />

            </div>

            {/* STATS */}

            <div className="mt-12 flex gap-12">

              <div>
                <h4 className="text-4xl font-black text-yellow-400">
                  10+
                </h4>

                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-black text-yellow-400">
                  5+
                </h4>

                <p className="text-gray-400">
                  Certifications
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function Card({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">

      <div className="mb-4 text-3xl text-yellow-400">
        {icon}
      </div>

      <h4 className="font-semibold text-lg">
        {title}
      </h4>

    </div>
  );
}