"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { HiDownload, HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-900/20 dark:via-purple-900/20"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Minh Nguyen</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Data Scientist
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about applying machine learning, AI, and statistical methods to solve complex problems.
              Currently developing geospatial analytics and predictive models at Sedgwick.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#projects">
                <Button variant="primary">View Projects</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Contact Me</Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <HiDownload className="inline mr-2" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image/Placeholder */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
              <div className="relative rounded-full p-2 glass h-full flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Minh Nguyen"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
          <HiArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
