'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial position off-screen
    gsap.set([cursor, follower], { x: -100, y: -100 });

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { scale: 1.5, opacity: 0.5, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Add hover effect to links and buttons
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className={styles.follower} />
      <div ref={cursorRef} className={styles.cursor} />
    </>
  );
}
