"use client";
import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.content}>
        <motion.p 
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Chitthesh.
        </motion.h1>
        
        <motion.h2 
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build <span className={styles.highlight}>digital experiences</span>.
        </motion.h2>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm a Full Stack Developer specializing in the MERN stack. I'm passionate about building 
          responsive, high-performance web applications with exceptional user interfaces.
        </motion.p>

        <motion.div 
          className={styles.btnGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}