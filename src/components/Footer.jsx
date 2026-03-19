import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="https://github.com/chitthesh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/chitthesh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:chitthesh@example.com">Email</a>
        </div>
        
        <p className={styles.copyright}>
          &copy; {currentYear} Chitthesh. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}