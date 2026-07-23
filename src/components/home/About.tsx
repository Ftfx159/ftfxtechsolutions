'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './About.module.css';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section id="about" ref={containerRef} className={styles.aboutSection}>
      <div className={styles.container}>
        <SectionHeading title="About Us" centered />
        <div className={styles.grid}>
          {/* Left: Animated Illustration */}
          <div className={styles.illustration}>
            <div className={styles.glassComposition}>
              <motion.div style={{ y: y1, rotate: rotate1 }} className={`liquid-glass ${styles.el1}`}>
                <img src="/images/server_room_light_1784699914561.jpg" alt="Server Room" className={styles.tileImage} />
              </motion.div>
              <motion.div style={{ y: y2, rotate: rotate2 }} className={`liquid-glass ${styles.el2}`}>
                <img src="/images/repair_light_1784699924410.jpg" alt="IT Repair" className={styles.tileImage} />
              </motion.div>
              <motion.div style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]) }} className={`liquid-glass ${styles.el3}`}>
                <img src="/images/data_light_1784699932764.jpg" alt="Data Recovery" className={styles.tileImage} />
                <div className={styles.glow} />
              </motion.div>
            </div>
          </div>

          {/* Right: Company Story */}
          <div className={styles.content}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Beyond Ordinary <br />
              <span className="text-gradient-accent">IT Solutions.</span>
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <strong>FTFX TECH SOLUTIONS</strong> specializes in professional Data Recovery services including HDD Recovery, SSD Recovery, Memory Card Recovery, Photo Recovery, Pen Drive Recovery and Password Recovery.
            </motion.p>

            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We also provide complete IT Support including Computer Repair, Laptop Repair, Windows & macOS Support, Virus Removal, Slow PC Optimization and Website Design & Development.
            </motion.p>

            <div className={styles.mission}>
              <h3 className={styles.missionTitle}>Our Mission Focus</h3>
              <div className={styles.tags}>
                {['Reliable', 'Professional', 'Secure', 'Fast', 'Premium'].map((tag, i) => (
                  <motion.div 
                    key={tag}
                    className={`liquid-glass ${styles.tag}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                  >
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
