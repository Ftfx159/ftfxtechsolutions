'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={lineRef} className={styles.glowingLine} />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Column */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              <span className="text-gradient">FTFx</span> Tech Solutions
            </Link>
            <p className={styles.description}>
              Premium Data Recovery, Professional IT Solutions, and cutting-edge Website Development.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/ftfxtechsolutions?igsh=MWN4cDRhN25pdzdtMQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover-target">
                {/* Instagram Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1CrvdmEfmJ/" target="_blank" rel="noopener noreferrer" className="hover-target">
                {/* Facebook Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@FTFXTECHSOLUTIONS" target="_blank" rel="noopener noreferrer" className="hover-target">
                {/* Youtube Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="/data-recovery" className="hover-target">Data Recovery</Link></li>
              <li><Link href="/troubleshoot" className="hover-target">IT Support</Link></li>
              <li><Link href="/website-design" className="hover-target">Website Design</Link></li>
              <li><Link href="/free-evaluation" className="hover-target">Free Diagnostic & Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={16} className={styles.icon} />
                <a href="mailto:Support@ftfxtechsolutions.com" className="hover-target">
                  Support@ftfxtechsolutions.com
                </a>
              </li>
              <li>
                <Phone size={16} className={styles.icon} />
                <a href="tel:08595691335" className="hover-target">08595691335</a>
              </li>
              <li>
                <MapPin size={16} className={styles.icon} />
                <span>Shop No. 159, Anand Garden,<br/>Near Railway Station,<br/>Gurgaon, Haryana 122001</span>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Compliance</h4>
            <ul className={styles.linksList}>
              <li><Link href="/refund-policy" className="hover-target">Refund Policy</Link></li>
              <li><Link href="/copyright-policy" className="hover-target">Copyright Policy</Link></li>
              <li><Link href="/accessibility" className="hover-target">Accessibility</Link></li>
              <li><Link href="/grievance-policy" className="hover-target">Grievances</Link></li>
              <li><Link href="/security-disclosure" className="hover-target">Security</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.description}>Subscribe for the latest updates.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Email address" className={styles.input} />
              <MagneticButton variant="primary" className={styles.submitBtn}>
                <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className="hover-target">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover-target">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
