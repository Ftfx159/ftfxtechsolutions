'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStack.module.css';
import SectionHeading from '../ui/SectionHeading';

const technologies = [
  'Windows', 'macOS', 'Linux', 'Android', 
  'SSD', 'HDD', 'RAID', 'NTFS', 
  'APFS', 'BitLocker', 'Office', 'Adobe', 
  'WordPress', 'React', 'Node', 'Next.js'
];

export default function TechStack() {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <SectionHeading 
          title="Supported Technologies" 
          subtitle="We work with all major platforms, file systems, and hardware configurations."
          centered
        />

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech}
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -8, 
                scale: 1.08,
                rotate: index % 2 === 0 ? 3 : -3,
                boxShadow: '0 20px 40px rgba(14, 165, 233, 0.25)',
                borderColor: '#0ea5e9',
                color: '#0ea5e9'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.techName}>{tech}</span>
              <div className={styles.glow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
