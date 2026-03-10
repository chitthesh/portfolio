import styles from "@/styles/Section.module.css";
import skill from "@/styles/Skills.module.css";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Java", level: "85%" },
        { name: "JavaScript", level: "80%" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "React.js", level: "75%" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "70%" },
        { name: "Express.js", level: "65%" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: "70%" },
        { name: "Git & GitHub", level: "80%" },
      ],
    },
  ];

  return (
    <section id="skills" className={styles.altSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>

        <div className={skill.grid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={skill.card}>
              <h3 className={skill.groupTitle}>{group.title}</h3>

              {group.skills.map((skillItem, i) => (
                <div key={i} className={skill.skillBox}>
                  <span>{skillItem.name}</span>

                  <div className={skill.bar}>
                    <div
                      className={skill.progress}
                      style={{ width: skillItem.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}