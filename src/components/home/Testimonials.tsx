'use client';

import React from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
      <div className={styles.container}>

        <SectionHeading 
          title="Client Success Stories" 
          subtitle="Don't just take our word for it. Read our real, verified reviews directly from Google."
          centered
        />
        
        <motion.div 
          className={styles.widgetWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Elfsight Google Reviews Script */}
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          
          {/* Elfsight Google Reviews Container */}
          <div className="elfsight-app-f7eb3cb1-7f1e-4816-b2ee-812a0dd3fa1f" data-elfsight-app-lazy style={{ width: '100%', position: 'relative', zIndex: 10 }}></div>
        </motion.div>
      </div>
    </section>
  );
}
