import styles from "@/styles/Section.module.css";
import projectStyle from "@/styles/Project.module.css";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.grid3}>
          {projects.map((project) => (
            <div key={project.slug} className={projectStyle.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={projectStyle.buttons}>
                <Link href={`/projects/${project.slug}`}>
                  View Details →
                </Link>

                <a href={project.github} target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}