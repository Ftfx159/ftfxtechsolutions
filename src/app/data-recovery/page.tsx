import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Link from 'next/link';
import { HardDrive, CheckCircle2, ShieldCheck, Cpu, Zap } from 'lucide-react';
import styles from './ServicePage.module.css';

export const metadata: Metadata = {
  title: 'Data Recovery Near Me | Best Data Recovery Gurgaon | FTFx Tech',
  description: 'Searching for data recovery near me? We offer professional Data Recovery in Gurgaon, Haryana. Class 100 Cleanroom HDD Recovery, SSD Recovery, and memory card data recovery.',
  keywords: 'data recovery near me, data recovery gurgaon, data recovery haryana, hard drive repair near me, SSD recovery gurgaon, class 100 cleanroom, FTFx Tech Solutions',
  openGraph: {
    title: 'Data Recovery Near Me | Data Recovery Gurgaon',
    description: 'Searching for data recovery near me? Expert Data Recovery in Gurgaon with 99% success rate and No Data, No Charge guarantee.',
    type: 'website',
  },
};

const faqs = [
  {
    question: "Can you recover data from an accidentally formatted SSD or External HDD?",
    answer: "Yes, as long as the drive hasn't been heavily overwritten. Our advanced software tools can rebuild the corrupted file system and extract the lost data from the disk sectors."
  },
  {
    question: "Is it possible to recover deleted photos from a memory card or pendrive?",
    answer: "Yes, deleted files remain on the flash memory until overwritten. Stop using the card immediately, and we can run a deep logical sector scan to retrieve your media."
  },
  {
    question: "Do you offer mobile data recovery for accidentally deleted files?",
    answer: "Yes, using specialized logical extraction software, we can often recover deleted photos, documents, and application data directly from the internal storage of the device."
  },
  {
    question: "Can you recover files from an encrypted BitLocker drive?",
    answer: "Yes, provided you have the original recovery key or password, our software can mount and decrypt the volume to extract corrupted or hidden data from it safely."
  }
];

export default function DataRecovery() {
  return (
    <main>
      <Header />
      
      {/* Service Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={styles.glow} />
        </div>
        <div className={styles.container}>
          <div className={styles.iconWrapper}>
            <HardDrive size={64} />
          </div>
          <h1 className={styles.title}>Professional Data Recovery</h1>
          <p className={styles.subtitle}>
            Don't panic. Our ISO Class 5 Cleanroom engineers utilize proprietary extraction technologies to safely recover your critical files from physically crashed and logically corrupted media.
          </p>
          <Link href="/free-evaluation">
            <MagneticButton variant="primary">Start Your Recovery</MagneticButton>
          </Link>
        </div>
      </section>

      {/* Advanced Cleanroom Technology (Feature 1) */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Class 100 Cleanroom Technology</h2>
            <p className={styles.panelText}>
              Mechanical hard drive failures require a pristine environment to prevent microscopic dust particles from permanently destroying your platter data.
            </p>
            <p className={styles.panelText}>
              Our ISO-certified Class 100 Cleanroom facilities ensure that your sensitive storage media is opened and repaired under the strictest environmental controls, maximizing the chances of a successful data extraction.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><ShieldCheck color="var(--color-accent-blue)"/> Zero Dust Contamination</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Cpu color="var(--color-accent-blue)"/> Donor Part Matching</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Zap color="var(--color-accent-blue)"/> Micro-soldering Repairs</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/cleanroom_lab_light.jpg" 
              alt="Technicians working in a Class 100 Cleanroom Data Recovery Laboratory" 
              fill 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      {/* The Recovery Process */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <SectionHeading title="Our Recovery Process" centered subtitle="A transparent, secure, and highly efficient workflow designed to get your critical data back to you as quickly as possible." />
          
          <div className={styles.processGrid}>
            <AnimatedCard className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Free Evaluation</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                We perform a non-destructive diagnostic on your media to determine the exact cause of failure and provide a firm, upfront price quote.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.2}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Secure Extraction</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                Using proprietary firmware repair tools and cleanroom mechanical replacements, we carefully image your failing drive sector-by-sector.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.4}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Data Restoration</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                Your recovered files are verified for integrity, securely encrypted, and transferred to a new, healthy external drive for return delivery.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Data Transfer Tech (Feature 2) */}
      <section className={styles.featureSection}>
        <div className={`${styles.featureGrid} ${styles.reverse}`}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Enterprise RAID & Server Recovery</h2>
            <p className={styles.panelText}>
              When critical business infrastructure fails, downtime is not an option. We specialize in complex logical rebuilds of RAID 0, 1, 5, 6, and 10 arrays.
            </p>
            <p className={styles.panelText}>
              Whether dealing with multiple simultaneous drive failures, RAID controller card corruption, or accidental array reconfigurations, our engineers can virtually rebuild the array geometry and securely extract your virtual machines and SQL databases.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/data_transfer_light.jpg" 
              alt="High speed secure enterprise data transfer and RAID server recovery" 
              fill 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <SectionHeading title="Supported Scenarios & Devices" centered />
          
          <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px' }}>
            <Image 
              src="/images/hard_drive_light.jpg" 
              alt="Macro view of exposed hard drive platter and read write head" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg-deep), transparent)' }} />
          </div>

          <div className={styles.grid}>
            {['Physical Damage (Clicking/Beeping)', 'Water & Fire Damage', 'Accidental Deletion & Formatting', 'SSD Firmware Corruption', 'Dead PCBA / Micro-soldering', 'Ransomware Encryption', 'Corrupted RAW Partitions', 'Dropped External Drives', 'Broken USB Pen Drives'].map((item, i) => (
              <div key={i} className={styles.serviceItem}>
                <CheckCircle2 className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <SectionHeading title="Frequently Asked Questions" centered />
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
      {/* JSON-LD Structured Data for Service and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Data Recovery Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "FTFx Tech Solutions",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Gurgaon"
                }
              },
              "description": "Professional cleanroom data recovery services for HDD, SSD, and Servers.",
              "offers": {
                "@type": "Offer",
                "description": "No Data, No Charge Policy"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />
    </main>
  );
}
