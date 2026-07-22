import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Accessibility Statement | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Our commitment to digital accessibility for all users.',
};

export default function AccessibilityPage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Accessibility Statement</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <article className={styles.mainContent} style={{ flex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Commitment</h2>
            <p className={styles.text}>
              FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conformance Status</h2>
            <p className={styles.text}>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
            </p>
            <p className={styles.text}>
              We strive to maintain conformance with WCAG 2.1 level AA. We regularly test our website to ensure we meet or exceed these standards, utilizing modern semantic HTML, ARIA labels, and high-contrast color palettes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Feedback & Support</h2>
            <p className={styles.text}>
              We welcome your feedback on the accessibility of the FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED website. If you encounter any accessibility barriers while using our site, please let us know:
            </p>
            <ul className={styles.list}>
              <li>Phone: 08595691335</li>
              <li>Email: Support@ftfxtechsolutions.com</li>
              <li>Address: Shop No. 159, Anand Garden, Near Railway Station, Gurgaon, Haryana 122001</li>
            </ul>
            <p className={styles.text}>
              We try to respond to feedback within 2 business days and will work with you to provide the information or service you need in a format that is accessible to you.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
