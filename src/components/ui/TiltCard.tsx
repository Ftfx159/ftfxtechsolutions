'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import styles from './TiltCard.module.css';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({ children, className = '', glowColor = 'rgba(0, 240, 255, 0.15)' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(glowRef.current, {
      x,
      y,
      opacity: 1,
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={glowRef}
        className={styles.glow}
        style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)` }}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
