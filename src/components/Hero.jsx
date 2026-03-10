import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi, I'm Chitthesh 👋</h1>
      <p>Full Stack Developer | MERN Stack Enthusiast</p>
      <a href="/resume.pdf" className={styles.btn}>Download Resume</a>
    </section>
  );
}