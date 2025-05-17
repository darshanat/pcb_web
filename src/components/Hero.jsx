import React from "react";
import styles from "../styles/hero.module.css";
import { motion } from "framer-motion";
import pcbImage from "../assets/img/landing.jpg";

function Hero() {
  return (
    <motion.section
      className={styles.hero}
      style={{ backgroundImage: `url(${pcbImage})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={styles.heading}>Expert PCB Design Solutions</h2>
        <p className={styles.subheading}>
          Reliable, efficient, and tailored to your needs
        </p>
        <motion.a
          href="#portfolio"
          className={styles.button}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          See Our Work
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
