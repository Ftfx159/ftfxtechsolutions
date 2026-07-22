import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Our policy regarding copyright infringement and intellectual property rights.',
};

export default function CopyrightPolicyPage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Copyright Infringement Policy</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <article className={styles.mainContent} style={{ flex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property Rights</h2>
            <p className={styles.text}>
              FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED respects the intellectual property rights of others and expects our users and clients to do the same. We strictly comply with the provisions of the Indian Copyright Act, 1957 and are aligned with international standards such as the Digital Millennium Copyright Act (DMCA).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Reporting Copyright Infringement</h2>
            <p className={styles.text}>
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our website or hosted on our servers, please notify our designated Copyright Agent. Your notification must include the following information:
            </p>
            <ul className={styles.list}>
              <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
              <li>A description of the copyrighted work that you claim has been infringed upon.</li>
              <li>A description of where the material that you claim is infringing is located on the site, including the specific URL.</li>
              <li>Your address, telephone number, and e-mail address.</li>
              <li>A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Designated Agent Contact</h2>
            <p className={styles.text}>
              Please send all infringement notices to:<br/><br/>
              <strong>Copyright Agent - FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br/>
              Email: Support@ftfxtechsolutions.com<br/>
              Address: Shop No. 159, Anand Garden, Near Railway Station, Gurgaon, Haryana 122001, India
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
