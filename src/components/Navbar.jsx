"use client";
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* LEFT → NAME */}
      <h1 className={styles.logo}>Chitthesh</h1>

      {/* RIGHT → TOGGLE + MENU ICON */}
      <div className={styles.right}>
        <ThemeToggle />

        <div
          className={styles.menuIcon}
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* NAV LINKS */}
      <div className={`${styles.links} ${open ? styles.show : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}