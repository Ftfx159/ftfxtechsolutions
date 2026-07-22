import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Link from 'next/link';
import { MonitorSmartphone, CheckCircle2, Cpu, Laptop, ShieldAlert } from 'lucide-react';
import styles from '../data-recovery/ServicePage.module.css';

export const metadata: Metadata = {
  title: 'Computer Repair Gurgaon | OS Installation Windows & Mac',
  description: 'Professional computer repair in Gurgaon. We troubleshoot Mac OS support, troubleshoot Windows OS support, and perform flawless OS installation windows and mac.',
  keywords: 'computer repair, troubleshoot mac os support, troubleshoot windows os support, OS Installation windows and mac, computer repair gurgaon, laptop service haryana',
};

const faqs = [
  {
    question: "How do you handle malware and ransomware removal?",
    answer: "We use enterprise-grade software tools to quarantine infections, remove deep-rooted rootkits, and clean your system's registry without risking your personal data."
  },
  {
    question: "Will I lose my files during a Windows or macOS installation?",
    answer: "No. We always perform a complete software backup of your user profile, documents, and settings before formatting or reinstalling the operating system."
  },
  {
    question: "Can you optimize my slow computer without adding new hardware?",
    answer: "Yes, our performance optimization involves cleaning registry errors, disabling unnecessary startup bloatware, and clearing cached system files to drastically speed up your machine via software."
  },
  {
    question: "Do you provide software installation and configuration support?",
    answer: "Absolutely. We can properly install, license, and configure heavy applications, drivers, and specialized business software to ensure they run flawlessly without conflicts."
  }
];

export default function Troubleshoot() {
  return (
    <main>
      <Header />
      
      {/* Service Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={styles.glow} style={{ background: 'radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)' }} />
        </div>
        <div className={styles.container}>
          <div className={styles.iconWrapper} style={{ color: 'var(--color-accent-purple)', borderColor: 'rgba(121, 40, 202, 0.2)', boxShadow: '0 0 40px rgba(121, 40, 202, 0.1)' }}>
            <MonitorSmartphone size={64} />
          </div>
          <h1 className={styles.title}>Troubleshoot & IT Support</h1>
          <p className={styles.subtitle}>
            Professional diagnostics, hardware repair, and software optimization for all major brands. Get your computer running faster than the day you bought it.
          </p>
          <Link href="/free-evaluation">
            <MagneticButton variant="primary">Request Support</MagneticButton>
          </Link>
        </div>
      </section>

      {/* Hardware Repair Panel */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Hardware Upgrades & Maintenance</h2>
            <p className={styles.panelText}>
              We focus on safe, reliable part swapping and component upgrades to extend the life of your device. Instead of risky logic board repairs, we provide clean, guaranteed hardware replacements to ensure optimal performance.
            </p>
            <p className={styles.panelText}>
              From seamless SSD and RAM upgrades to comprehensive physical servicing—including deep dust removal, fan cleaning, and thermal paste replacement—we keep your device running cool and fast.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Cpu color="var(--color-accent-purple)"/> Component Upgrades & Replacements</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Laptop color="var(--color-accent-purple)"/> Comprehensive Hardware Cleaning</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/motherboard_light.jpg" 
              alt="Detailed macro view of a computer motherboard being repaired" 
              fill 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      {/* The Support Process */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <SectionHeading title="Our Support Process" centered subtitle="A streamlined, transparent workflow to get your systems back online quickly." />
          
          <div className={styles.processGrid}>
            <AnimatedCard className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Diagnostics</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                We run comprehensive software and hardware tests to pinpoint the exact root cause of the issue.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.2}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Expert Repair</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                Our technicians execute the necessary fixes, whether it's replacing a faulty capacitor or removing deep-rooted malware.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.4}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Optimization</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                Before returning the device, we clean the OS, update drivers, and optimize settings for maximum performance.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Software & Security Panel */}
      <section className={styles.featureSection}>
        <div className={`${styles.featureGrid} ${styles.reverse}`}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Software & Cybersecurity</h2>
            <p className={styles.panelText}>
              A slow computer isn't always hardware-related. Background bloatware, outdated drivers, and malicious viruses can cripple your machine's performance.
            </p>
            <p className={styles.panelText}>
              We provide comprehensive OS installations (Windows/macOS), remote IT troubleshooting, and aggressive malware/ransomware removal to secure your digital life.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><ShieldAlert color="var(--color-accent-purple)"/> Virus & Malware Eradication</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/security_light.jpg" 
              alt="Cybersecurity and software optimization concept" 
              fill 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <SectionHeading title="Comprehensive IT Solutions" centered />
          
          <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px' }}>
            <Image 
              src="/images/workspace_light.jpg" 
              alt="Pristine and professional IT support workspace" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg-deep), transparent)' }} />
          </div>

          <div className={styles.grid}>
            {['Computer Repair', 'Laptop Repair', 'Virus Removal', 'Malware Removal', 'Windows Installation', 'macOS Support', 'Performance Optimization', 'Software Installation', 'Driver Issues', 'Networking', 'Printer Setup', 'Password Recovery', 'Ransomware Recovery'].map((item, i) => (
              <div key={i} className={styles.serviceItem}>
                <CheckCircle2 className={styles.checkIcon} style={{ color: 'var(--color-accent-purple)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 0' }}>
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
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Support & Computer Repair",
              "provider": {
                "@type": "LocalBusiness",
                "name": "FTFx Tech Solutions",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Gurgaon"
                }
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
