import React from "react";
import styles from "../styles/services.module.css";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Custom PCB Layout",
      icon: "🛠️",
      description:
        "We are professional in designing PCBs including with solid pcbs,aluminum clad pcbs,flex pcbs with standard qualities. Our expertise team designs unique pcb layouts,schematics as well as simulations according to your requirements. We use industry's leading design softwares like KiCad, Altium to ensure precise and reliable PCB designs.",
    },
    { title: "High-Speed Design", icon: "⚡", description: " " },
    {
      title: "Prototyping",
      icon: "🔬",
      description:
        "we are professional in models and enclosure designing.As a company we analize product functionality and other aspects, ensuring that designs meet performance requirements, as well as manufacturing exceed your expectation.",
    },
  ];

  return (
    <motion.section
      id="services"
      className={styles.services}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={styles.title}>Our Services</h2>
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <text className={styles.description}> {service.description}</text>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
