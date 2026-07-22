'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';
import MagneticButton from '../ui/MagneticButton';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      {/* Background Orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <motion.div style={{ y, opacity }} className={styles.content}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.titleContainer}
          >
            <h1 className={styles.title}>
              Engineering Digital <br />
              <span className="text-gradient-accent">Resilience</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={styles.subtitle}
          >
            Premium technology solutions engineered for recovery, security, innovation, and digital excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className={styles.buttonGroup}
          >
            <MagneticButton variant="primary" onClick={() => router.push('/free-evaluation')}>Free Diagnostic & Quote</MagneticButton>
            <MagneticButton 
              variant="secondary" 
              onClick={() => {
                const target = document.querySelector('#services');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Services
            </MagneticButton>
          </motion.div>

          {/* Clean Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.statsContainer}
          >
            <div className={styles.statCard}>
              <div className={styles.statValue}>99.3%</div>
              <div className={styles.statLabel}>Recovery Success</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>5k+</div>
              <div className={styles.statLabel}>Global Clients</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Expert Support</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className={styles.scrollIndicator}
      >
        <ArrowDown size={24} className={styles.arrow} />
      </motion.div>
    </section>
  );
}
