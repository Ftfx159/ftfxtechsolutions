import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Security & Vulnerability Disclosure | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Our Responsible Vulnerability Disclosure Policy for security researchers.',
};

export default function SecurityDisclosurePage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Security Disclosure Policy</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <article className={styles.mainContent} style={{ flex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Security Commitment</h2>
            <p className={styles.text}>
              At FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED, data security is our highest priority, particularly given the sensitive nature of our Data Recovery operations. We continuously monitor and upgrade our physical and digital infrastructure to defend against threats. We deeply value the role of independent security researchers and the cybersecurity community in keeping our systems secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Responsible Vulnerability Disclosure</h2>
            <p className={styles.text}>
              If you believe you have discovered a security vulnerability in our website, IT infrastructure, or client portals, we strongly encourage you to report it to us immediately. We request that you:
            </p>
            <ul className={styles.list}>
              <li>Do not exploit the vulnerability to view, delete, alter, or otherwise access data that does not belong to you.</li>
              <li>Do not conduct Denial of Service (DoS/DDoS) attacks, social engineering, spamming, or phishing attacks against our employees or clients.</li>
              <li>Provide us a reasonable amount of time to resolve the issue before disclosing it publicly.</li>
              <li>Submit your detailed findings, including steps to reproduce the vulnerability, to <strong>Support@ftfxtechsolutions.com</strong>.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Response</h2>
            <p className={styles.text}>
              Upon receiving your report, our engineering team will acknowledge receipt within 48 hours. We will investigate the issue and provide an estimated timeline for a patch. We commit to not pursuing legal action against security researchers who comply with this Responsible Disclosure Policy and act in good faith.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
