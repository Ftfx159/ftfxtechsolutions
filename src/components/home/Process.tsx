'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Process.module.css';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';

const steps = [
  { title: 'Diagnosis', description: 'Comprehensive analysis of your media to determine the exact cause of failure.', image: '/images/workspace_light.jpg' },
  { title: 'Recovery', description: 'Advanced techniques in our certified cleanroom to safely extract your data.', image: '/images/hard_drive_light.jpg' },
  { title: 'Verification', description: 'Strict quality control checks to ensure complete data integrity.', image: '/images/security_light.jpg' },
  { title: 'Delivery', description: 'Secure transfer of your recovered data on a new, encrypted storage device.', image: '/images/data_transfer_light.jpg' },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'center center']
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className={styles.processSection}>
      <div className={styles.container}>
        <SectionHeading 
          title="Our Proven Process" 
          subtitle="A transparent, step-by-step approach ensuring the highest success rate in data recovery."
          centered
        />

        <div className={styles.timelineContainer}>
          {/* Animated Connecting Line */}
          <div className={styles.lineTrack}>
            <motion.div className={styles.lineFill} style={{ width: lineWidth }} />
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <motion.div 
                  className={styles.node}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.15, y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className={styles.iconWrapper}
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.5 }}
                  >
                    <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 + (index * 0.2) }}
                  style={{ width: '100%' }}
                >
                  <TiltCard className={styles.contentCard} glowColor={`rgba(${index === 0 ? '0,112,243' : index === 1 ? '121,40,202' : index === 2 ? '0,240,255' : '175,82,222'}, 0.2)`}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </TiltCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
