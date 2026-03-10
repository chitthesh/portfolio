"use client";

import { motion } from "framer-motion";
import styles from "@/styles/ProjectDetail.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailClient({ project }) {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={900}
        height={500}
        className={styles.image}
      />

      <p>{project.description}</p>

      <h3>Key Features</h3>
      <ul>
        {project.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <h3>Tech Stack</h3>
      <div className={styles.badges}>
        {project.tech.map((t, i) => (
          <span key={i} className={styles.badge}>{t}</span>
        ))}
      </div>

      <div className={styles.buttons}>
        <a href={project.github} target="_blank">GitHub</a>
        <a href={project.demo} target="_blank">Live Demo</a>
      </div>

      <Link href="/" className={styles.back}>
        ← Back to Projects
      </Link>
    </motion.section>
  );
}