import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} PCBDesign. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
