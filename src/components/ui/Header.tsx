'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './Header.module.css';
import MagneticButton from './MagneticButton';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '#services' },
  { name: 'About Us', path: '#about' },
  { name: 'Contact Us', path: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Set initial active path based on hash if present
    if (typeof window !== 'undefined' && window.location.hash) {
      setActivePath(window.location.hash);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setActivePath(path);
    if (path.startsWith('#')) {
      e.preventDefault();
      // Update URL hash without jumping
      window.history.pushState(null, '', path);
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/' && pathname === '/') {
      e.preventDefault();
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          {pathname !== '/' && (
            <button onClick={() => router.back()} className={styles.backButton}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          )}
          <Link href="/" className={styles.logo} onClick={(e) => handleNavClick(e, '/')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img 
              src="/logo.png" 
              alt="FTFx Logo" 
              className={styles.logoImage} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1, type: "spring" },
                rotate: { repeat: Infinity, duration: 25, ease: "linear" } 
              }}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`${styles.navLink} ${activePath === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
                {activePath === link.path && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <MagneticButton variant="primary" className={styles.ctaButton} onClick={() => {
          const storeUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3006' : 'https://store.ftfxtechsolutions.com/';
          window.open(storeUrl, '_blank');
        }}>
          Our Store
        </MagneticButton>
      </div>
    </header>
  );
}
