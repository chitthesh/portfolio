"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={styles.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none" }}
    >
      <h1 className={styles.logo}>Chitthesh</h1>

      <div className={styles.right}>
        <ThemeToggle />

        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>
      </div>

      <div className={`${styles.links} ${open ? styles.show : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </motion.nav>
  );
}