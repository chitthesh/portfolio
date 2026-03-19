"use client";
import { motion } from "framer-motion";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p>
              Hello! I'm Chitthesh, a highly motivated Information Science Engineering student 
              with a profound interest in Full Stack Web Development. I enjoy creating things 
              that live on the internet, whether that be web applications, dynamic frontends, 
              or scalable backend systems.
            </p>
            <p>
              My journey into web development started with a curiosity to understand how websites 
              work under the hood, and it has evolved into a passion for building interactive, 
              user-centric digital experiences using modern technologies like the MERN stack.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on various projects 
              that challenge my problem-solving skills and push me to learn every day.
            </p>
          </div>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.initials}>C</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}