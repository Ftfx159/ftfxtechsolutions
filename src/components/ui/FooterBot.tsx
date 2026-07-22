'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './FooterBot.module.css';

export default function FooterBot() {
  const [mouseX, setMouseX] = useState(0.5); // Center by default

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth out the mouse movement using framer-motion spring
  const springX = useSpring(0.5, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    springX.set(mouseX);
  }, [mouseX, springX]);

  return (
    <div className={styles.botContainer}>
      <div className={styles.scene}>
        
        {/* Background Desk Layer */}
        <div className={styles.desk}>
          <div className={styles.deskFront} />
        </div>

        {/* Left Side: Plant */}
        <div className={styles.plant}>
          <div className={styles.leaves}>
            <div className={`${styles.leaf} ${styles.leaf1}`} />
            <div className={`${styles.leaf} ${styles.leaf2}`} />
            <div className={`${styles.leaf} ${styles.leaf3}`} />
            <div className={`${styles.leaf} ${styles.leaf4}`} />
          </div>
          <div className={styles.pot} />
        </div>

        {/* Right Side: Lamp */}
        <div className={styles.lamp}>
          <div className={styles.lampHead}>
            <div className={styles.lampLight} />
          </div>
          <div className={styles.lampStem} />
          <div className={styles.lampBase} />
        </div>

        {/* Robot in Background */}
        <div className={styles.bot}>
          <div className={styles.speechBubble}>
            <div className={styles.bubbleDots}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </div>
          <div className={styles.head}>
            <div className={styles.earpieceLeft} />
            <div className={styles.earpieceRight} />
            <div className={styles.antennaLeft} />
            <div className={styles.antennaRight} />
            <div className={styles.visor}>
              {/* Only the eyes track the mouse now! */}
              <motion.div style={{ x: useSpring((mouseX - 0.5) * 15, { stiffness: 100, damping: 20 }) }}>
                <div className={styles.eye} />
              </motion.div>
              <motion.div style={{ x: useSpring((mouseX - 0.5) * 15, { stiffness: 100, damping: 20 }) }}>
                <div className={styles.eye} />
              </motion.div>
            </div>
          </div>
          <div className={styles.collar} />
          
          <div className={styles.body}>
            <div className={styles.armLeft} />
            <div className={styles.armRight} />
          </div>
        </div>

        {/* Foreground: Back of Laptop */}
        <div className={styles.laptop}>
          <div className={styles.screenGlow} />
          <div className={styles.laptopLid}>
            <div className={styles.laptopLogo} />
          </div>
        </div>

      </div>
    </div>
  );
}
