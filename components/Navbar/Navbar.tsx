"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .7 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#"
          className="text-3xl font-black tracking-wide text-white"
        >
          Hafsa
          <span className="text-yellow-400">.</span>
        </a>

        <nav className="hidden gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-300 transition hover:text-yellow-400"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 hover:w-full"></span>

            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Hire Me
        </a>

      </div>
    </motion.header>
  );
}