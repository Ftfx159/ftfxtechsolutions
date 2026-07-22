'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  ShieldCheck, 
  UserCog, 
  Cpu, 
  BadgeDollarSign, 
  Zap, 
  ThumbsUp, 
  Stethoscope, 
  Headset 
} from 'lucide-react';
import styles from './Features.module.css';
import SectionHeading from '../ui/SectionHeading';

import TiltCard from '../ui/TiltCard';

const features = [
  { icon: <ShieldCheck size={32} />, title: 'Data Security', description: 'Enterprise-grade security protocols to protect your sensitive information.' },
  { icon: <UserCog size={32} />, title: 'Professional Engineers', description: 'Certified experts with decades of combined experience in data recovery.' },
  { icon: <Cpu size={32} />, title: 'Latest Technology', description: 'State-of-the-art cleanroom facilities and advanced recovery tools.' },
  { icon: <BadgeDollarSign size={32} />, title: 'Affordable Pricing', description: 'Transparent, competitive pricing with no hidden charges.' },
  { icon: <Zap size={32} />, title: 'Fast Turnaround', description: 'Expedited services available for critical data emergencies.' },
  { icon: <ThumbsUp size={32} />, title: 'Customer Satisfaction', description: 'A proven track record of successful recoveries and happy clients.' },
  { icon: <Stethoscope size={32} />, title: 'Advanced Diagnostics', description: 'Precise identification of hardware and software failures.' },
  { icon: <Headset size={32} />, title: 'Premium Support', description: '24/7 dedicated support team ready to assist you anytime.' },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="We combine industry-leading technology with unparalleled expertise to deliver exceptional results."
          centered
        />

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={styles.grid}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard glowColor="#0EA5E9" className={`liquid-glass ${styles.featureCard}`}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
