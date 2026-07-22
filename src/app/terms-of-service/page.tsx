import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Terms of Service and Conditions for using FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED services.',
};

export default function TermsOfServicePage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Terms of Service</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Contents</h3>
          <ul className={styles.sidebarList}>
            <li><a href="#service-agreement" className={styles.sidebarLink}>Service Agreement</a></li>
            <li><a href="#user-responsibilities" className={styles.sidebarLink}>User Responsibilities</a></li>
            <li><a href="#limitation-of-liability" className={styles.sidebarLink}>Limitation of Liability</a></li>
            <li><a href="#intellectual-property" className={styles.sidebarLink}>Intellectual Property</a></li>
            <li><a href="#payment-terms" className={styles.sidebarLink}>Payment Terms</a></li>
            <li><a href="#governing-law" className={styles.sidebarLink}>Governing Law</a></li>
          </ul>
        </aside>

        <article className={styles.mainContent}>
          <p className={styles.text}>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED ("we," "us" or "our"), concerning your access to and use of our website and our IT and Data Recovery services.
          </p>
          <p className={styles.text}>
            By accessing or using our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
          </p>

          <section id="service-agreement" className={styles.section}>
            <h2 className={styles.sectionTitle}>Service Agreement</h2>
            <p className={styles.text}>
              FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED provides specialized services including Data Recovery, IT Support, and Website Design. By submitting a device for data recovery or commissioning a project, you authorize us to conduct evaluations, diagnostics, and recovery attempts or development work.
            </p>
            <p className={styles.text}>
              For Data Recovery: We do not guarantee that data recovery will be successful. We apply our best engineering efforts, but physical damage or severe logical corruption may render data unrecoverable.
            </p>
          </section>

          <section id="user-responsibilities" className={styles.section}>
            <h2 className={styles.sectionTitle}>User Responsibilities</h2>
            <p className={styles.text}>
              You represent and warrant that you are the legal owner or authorized representative of the legal owner of the device, media, or data submitted to FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED.
            </p>
            <p className={styles.text}>
              You agree to provide accurate and complete information regarding the circumstances of data loss or project requirements. You are solely responsible for ensuring that the data you request us to recover or process does not violate any laws or third-party rights.
            </p>
          </section>

          <section id="limitation-of-liability" className={styles.section}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p className={styles.text}>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.
            </p>
            <p className={styles.text}>
              Subject to applicable law (including the Consumer Protection Act, 2019), our maximum liability for any claim arising out of the services provided shall not exceed the total amount paid by you for the specific service in question.
            </p>
          </section>

          <section id="intellectual-property" className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p className={styles.text}>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
            </p>
            <p className={styles.text}>
              For Website Design clients, intellectual property rights for the final delivered product will be transferred to the client upon full and final payment, subject to any open-source licenses or third-party assets used.
            </p>
          </section>

          <section id="payment-terms" className={styles.section}>
            <h2 className={styles.sectionTitle}>Payment Terms</h2>
            <p className={styles.text}>
              We offer a "Free Diagnostic & Quote" for most services. Upon your approval of the quote, payment is required according to the agreed terms. We accept standard payment methods including UPI, Bank Transfers, and major credit/debit cards.
            </p>
            <p className={styles.text}>
              For Data Recovery: In standard cases, if no data is recovered, no recovery fee will be charged ("No Data, No Fee" policy). Diagnostic or shipping fees (if any) may still apply.
            </p>
          </section>

          <section id="governing-law" className={styles.section}>
            <h2 className={styles.sectionTitle}>Governing Law & Jurisdiction</h2>
            <p className={styles.text}>
              These Terms shall be governed by and defined following the laws of India, including the Indian Contract Act, 1872 and the Information Technology Act, 2000. FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED and yourself irrevocably consent that the courts of Gurgaon, Haryana, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

        </article>
      </div>

      <Footer />
    </main>
  );
}
