import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Grievance Redressal Policy | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Our policy for handling and resolving customer grievances and complaints.',
};

export default function GrievancePolicyPage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Grievance Redressal Policy</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <article className={styles.mainContent} style={{ flex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Objective</h2>
            <p className={styles.text}>
              FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED believes in providing a seamless and premium experience to all our customers. The objective of this Grievance Redressal Policy is to provide a framework for resolving customer complaints and grievances in a fair, transparent, and timely manner, in compliance with the Consumer Protection (E-Commerce) Rules, 2020 and the Information Technology Act, 2000.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How to Raise a Grievance</h2>
            <p className={styles.text}>
              If you have a grievance regarding our services, billing, or data privacy, you can register your complaint through the following channels:
            </p>
            <ul className={styles.list}>
              <li><strong>Email:</strong> Send an email to our dedicated Grievance Officer at Support@ftfxtechsolutions.com with the subject line "Grievance / Complaint - [Your Name]".</li>
              <li><strong>Phone:</strong> Call our support desk at 08595691335 during standard business hours (IST).</li>
              <li><strong>Written Letter:</strong> Send a formal letter to: Grievance Officer, FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED, Shop No. 159, Anand Garden, Near Railway Station, Gurgaon, Haryana 122001.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Resolution Process and Timelines</h2>
            <p className={styles.text}>
              Upon receiving a grievance, we adhere to the following timelines:
            </p>
            <ul className={styles.list}>
              <li><strong>Acknowledgment:</strong> We will acknowledge the receipt of your grievance within 48 hours and provide you with a ticket reference number.</li>
              <li><strong>Resolution:</strong> We aim to resolve all grievances within one (1) month from the date of receipt, in accordance with applicable Indian laws.</li>
              <li><strong>Escalation:</strong> If the resolution provided is unsatisfactory, you may request an escalation to the senior management team for further review.</li>
            </ul>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
