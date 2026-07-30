"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    color: "text-blue-400",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    color: "text-green-400",
    skills: [
      { icon: <FaLaravel />, name: "Laravel" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },
  {
    title: "DevOps & Systems",
    color: "text-yellow-400",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaLinux />, name: "Linux" },
    ],
  },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black"
        >
          My <span className="text-yellow-400">Skills</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <h3 className={`mb-8 text-2xl font-bold ${category.color}`}>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-xl bg-black/40 p-4 transition hover:border hover:border-yellow-400"
                  >
                    <div className="text-3xl text-yellow-400">
                      {skill.icon}
                    </div>

                    <span className="text-lg">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
