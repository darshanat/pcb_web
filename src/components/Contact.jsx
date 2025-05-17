import React from "react";
import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.contact}
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
        <h2 className={styles.title}>Get In Touch</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
