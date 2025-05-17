import React from "react";
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          With over 20 years of experience in PCB design, our team specializes
          in creating custom, high-performance solutions for a wide range of
          industries. We focus on reliability, speed, and customer satisfaction.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
