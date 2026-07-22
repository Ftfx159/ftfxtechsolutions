'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HardDrive, MonitorSmartphone, Code2, ArrowRight } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';

const services = [
  {
    title: 'DATA RECOVERY',
    icon: <HardDrive size={48} strokeWidth={1.5} />,
    color: '#0EA5E9',
    items: [
      'Photo Recovery',
      'Hard Disk Recovery',
      'SSD Recovery',
      'Memory Card Recovery',
      'Pendrive Recovery',
      'External HDD Recovery',
      'Mobile Data Recovery',
      'Laptop Recovery',
      'Accidental Delete Recovery',
      'RAW Recovery',
      'Encrypted Drive Recovery',
      'RAID Recovery',
    ],
    path: '/data-recovery',
  },
  {
    title: 'TROUBLESHOOT & IT SUPPORT',
    icon: <MonitorSmartphone size={48} strokeWidth={1.5} />,
    color: '#0EA5E9',
    items: [
      'Computer Repair',
      'Laptop Repair',
      'Virus Removal',
      'Malware Removal',
      'Windows Installation',
      'macOS Support',
      'Performance Optimization',
      'Software Installation',
      'Driver Issues',
      'Networking',
      'Printer Setup',
      'Password Recovery',
      'Ransomware Recovery',
    ],
    path: '/troubleshoot',
  },
  {
    title: 'WEBSITE DESIGN',
    icon: <Code2 size={48} strokeWidth={1.5} />,
    color: '#0EA5E9',
    items: [
      'Premium Websites',
      '3D Websites',
      'Corporate Websites',
      'Business Websites',
      'Landing Pages',
      'Portfolio',
      'SEO Ready',
      'Mobile Responsive',
      'Hosting Setup',
      'Google Business',
      'Domain Setup',
      'Performance Optimization',
    ],
    path: '/website-design',
  },
];

export default function ServicesGrid() {
  const router = useRouter();

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeading 
          title="Our Premium Services" 
          subtitle="Explore our world-class data recovery, IT support, and web development solutions tailored for exceptional results."
          centered
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.cardWrapper}
              onClick={() => router.push(service.path)}
            >
              <TiltCard className={styles.card} glowColor={service.color}>
                <div className={styles.iconWrapper} style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <div className={styles.listContainer}>
                  <ul className={styles.list}>
                    {/* Duplicate list for seamless infinite marquee scroll */}
                    {[...service.items, ...service.items].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.footer}>
                  <span>Explore Service</span>
                  <ArrowRight size={20} />
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
