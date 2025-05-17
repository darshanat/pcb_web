import React, { useState } from "react";
import styles from "../styles/header.module.css";
import logo from "../assets/img/pcb01.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.logoArea}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="PCBDesign Logo" className={styles.logo} />
          <span className={styles.brand}>PCBDesign</span>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
