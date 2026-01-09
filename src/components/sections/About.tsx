"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="From mathematics to data science">
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            With a Bachelor of Mathematics (Statistics major, GPA 6.6/7) and currently pursuing a Master of Data Science
            at University of Queensland, I&apos;ve built a strong foundation in statistical modelling, machine learning, and computational mathematics.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Currently a Data Scientist at Sedgwick, I specialise in geospatial analytics and location intelligence,
            working with spatial data analysis, geospatial feature engineering, and proximity-based modelling. My work
            combines ensemble methods with geospatial techniques to extract meaningful insights from location-based data.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">What I Do</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
              <span>Build predictive models using ensemble methods and deep learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
              <span>Develop geospatial analytics and location intelligence solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
              <span>Design data pipelines and visualisation dashboards</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
              <span>Use statistical analysis to validate and explain model outputs</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
