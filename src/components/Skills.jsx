"use client";
import styles from "@/styles/Skills.module.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "Next.js", level: "85%" },
        { name: "JavaScript", level: "90%" },
        { name: "HTML & CSS", level: "95%" },
        { name: "Tailwind CSS", level: "85%" },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", level: "80%" },
        { name: "Express.js", level: "75%" },
        { name: "MongoDB", level: "80%" },
        { name: "Java", level: "70%" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: "85%" },
        { name: "Framer Motion", level: "70%" },
        { name: "REST APIs", level: "85%" },
        { name: "Postman", level: "80%" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
          Technical Arsenal
        </motion.h2>

        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <motion.div key={index} variants={itemVariants} className={`glass ${styles.card}`}>
              <h3 className={styles.groupTitle}>{group.title}</h3>

              <div className={styles.skillsList}>
                {group.skills.map((skillItem, i) => (
                  <div key={i} className={styles.skillBox}>
                    <div className={styles.skillHeader}>
                      <span>{skillItem.name}</span>
                      <span className={styles.skillPercent}>{skillItem.level}</span>
                    </div>

                    <div className={styles.bar}>
                      <motion.div
                        className={styles.progress}
                        initial={{ width: 0 }}
                        whileInView={{ width: skillItem.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}