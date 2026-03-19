"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Project.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Event Management Platform",
      description: "A full-stack event management platform built using React, Node.js, Express, and MongoDB. Features secure JWT Authentication and user-friendly interfaces.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/chitthesh/event-management",
      live: "https://event-management-mauve-xi.vercel.app"
    },
    {
      title: "Tandoor Review",
      description: "A comprehensive restaurant review platform featuring user authentication, advanced search, and dynamic review functionalities. Built with high performance and accessibility in mind.",
      techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/chitthesh",
      live: "#"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for an e-commerce platform. Features sales analytics charts, product inventory management, and real-time order tracking.",
      techStack: ["React", "Express.js", "Chart.js", "PostgreSQL"],
      github: "https://github.com/chitthesh",
      live: "#"
    },
    {
      title: "Real-time Chat App",
      description: "A lightweight, secure chat application supporting real-time messaging, user presence, and media sharing through websockets.",
      techStack: ["Node.js", "Socket.io", "React", "Redis"],
      github: "https://github.com/chitthesh",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
          Featured Projects
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className={`glass ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>📁</div>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Preview">
                    Live
                  </a>
                </div>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <ul className={styles.techList}>
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}