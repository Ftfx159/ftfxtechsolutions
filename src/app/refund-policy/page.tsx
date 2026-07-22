import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Refund, Cancellation, and Returns Policy for FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED.',
};

export default function RefundPolicyPage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Refund & Cancellation</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Contents</h3>
          <ul className={styles.sidebarList}>
            <li><a href="#eligibility" className={styles.sidebarLink}>Eligibility for Refunds</a></li>
            <li><a href="#non-refundable" className={styles.sidebarLink}>Non-Refundable Services</a></li>
            <li><a href="#cancellation-process" className={styles.sidebarLink}>Cancellation Process</a></li>
            <li><a href="#processing-timelines" className={styles.sidebarLink}>Processing Timelines</a></li>
          </ul>
        </aside>

        <article className={styles.mainContent}>
          <p className={styles.text}>
            At FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED, we strive for complete customer satisfaction. This Refund and Cancellation Policy outlines the circumstances under which you may cancel a service or request a refund.
          </p>

          <section id="eligibility" className={styles.section}>
            <h2 className={styles.sectionTitle}>Eligibility for Refunds</h2>
            <p className={styles.text}>
              <strong>Data Recovery:</strong> We operate predominantly on a "No Data, No Fee" policy for standard recoveries. If we are unable to recover the requested target data after diagnostic approval, you will not be charged the recovery fee. If payment was taken as an advance and recovery fails, the advance (minus any agreed non-refundable diagnostic/donor parts fees) will be refunded.
            </p>
            <p className={styles.text}>
              <strong>IT Support & Website Design:</strong> Refunds for IT services and development projects are evaluated on a milestone basis. If you are dissatisfied with a delivered milestone, you must notify us within 7 days. Refunds for completed and approved milestones are not generally permitted.
            </p>
          </section>

          <section id="non-refundable" className={styles.section}>
            <h2 className={styles.sectionTitle}>Non-Refundable Services</h2>
            <p className={styles.text}>
              The following items and services are strictly non-refundable:
            </p>
            <ul className={styles.list}>
              <li>Emergency or Expedited service fees (as these cover the cost of prioritizing your case, regardless of outcome).</li>
              <li>Fees for donor parts explicitly purchased specifically for your data recovery case (which you agreed to prior to purchase).</li>
              <li>Domain registration fees, server hosting costs, or third-party software licenses purchased on your behalf.</li>
              <li>Services that have been fully delivered, accepted, and signed off by the client.</li>
            </ul>
          </section>

          <section id="cancellation-process" className={styles.section}>
            <h2 className={styles.sectionTitle}>Cancellation Process</h2>
            <p className={styles.text}>
              If you wish to cancel an ongoing service or project, you must submit a cancellation request in writing to Support@ftfxtechsolutions.com.
            </p>
            <p className={styles.text}>
              <strong>Data Recovery:</strong> You may cancel a recovery request at any time before the recovery attempt begins. If you cancel after engineering work has commenced, you may be liable for labor costs incurred up to the point of cancellation.
            </p>
            <p className={styles.text}>
              <strong>Website Design:</strong> Cancellation of a web development project will result in a halt of all work. The client will be billed for the pro-rated hours completed up to the date of cancellation. Any advance deposits exceeding the value of work completed will be refunded.
            </p>
          </section>

          <section id="processing-timelines" className={styles.section}>
            <h2 className={styles.sectionTitle}>Processing Timelines</h2>
            <p className={styles.text}>
              Once a refund request is approved by our billing department, it will be processed within 5-7 business days.
            </p>
            <p className={styles.text}>
              Refunds will be credited back to the original method of payment (e.g., Credit Card, UPI, Bank Transfer). Depending on your bank or payment provider, it may take an additional 3-5 business days for the funds to reflect in your account.
            </p>
          </section>

        </article>
      </div>

      <Footer />
    </main>
  );
}
