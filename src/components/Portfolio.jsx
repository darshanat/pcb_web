import React from "react";
import styles from "../styles/portfolio.module.css";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    { title: "Multilayer Board", image: "/project1.jpg" },
    { title: "High Frequency PCB", image: "/project2.jpg" },
    { title: "Compact IoT Module", image: "/project3.jpg" },
  ];

  return (
    <motion.section
      id="portfolio"
      className={styles.portfolio}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={styles.title}>Our Projects</h2>
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {projects.map((project, i) => (
          <div key={i} className={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Portfolio;
