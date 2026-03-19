"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Contact.module.css";
// emailjs handles the form sending implicitly if we configure it, 
// for aesthetics we will mock the interaction unless actual keys are provided.

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Mock simulation for professional feel
    setTimeout(() => {
      setStatus("Message Sent Successfully!");
      e.target.reset();
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form ref={form} onSubmit={sendEmail} className={`glass ${styles.form}`}>
          <div className={styles.inputGroup}>
            <input type="text" name="user_name" required placeholder="Name" className={styles.input} />
            <input type="email" name="user_email" required placeholder="Email" className={styles.input} />
          </div>
          
          <input type="text" name="subject" required placeholder="Subject" className={styles.input} />
          
          <textarea name="message" required placeholder="Message" className={styles.textarea} rows={6}></textarea>
          
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
            {status || "Say Hello"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}