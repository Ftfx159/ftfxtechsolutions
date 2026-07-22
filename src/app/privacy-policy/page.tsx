import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'Privacy Policy for FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED in accordance with the Information Technology Act, 2000.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
        <p className={styles.heroSubtitle}>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
      </section>

      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Contents</h3>
          <ul className={styles.sidebarList}>
            <li><a href="#personal-data-collection" className={styles.sidebarLink}>Personal Data Collection</a></li>
            <li><a href="#cookies" className={styles.sidebarLink}>Cookies</a></li>
            <li><a href="#data-security" className={styles.sidebarLink}>Data Security</a></li>
            <li><a href="#third-party-services" className={styles.sidebarLink}>Third-Party Services</a></li>
            <li><a href="#user-rights" className={styles.sidebarLink}>User Rights</a></li>
            <li><a href="#contact-information" className={styles.sidebarLink}>Contact Information</a></li>
          </ul>
        </aside>

        <article className={styles.mainContent}>
          <p className={styles.text}>
            FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services. This policy is published in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
          </p>

          <section id="personal-data-collection" className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Data Collection</h2>
            <p className={styles.text}>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <p className={styles.text}>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul className={styles.list}>
              <li>Name and Contact Data: We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
              <li>Credentials: We collect passwords, password hints, and similar security information used for authentication and account access.</li>
              <li>Payment Data: We collect data necessary to process your payment if you make purchases, such as your payment instrument number and the security code associated with your payment instrument.</li>
            </ul>
          </section>

          <section id="cookies" className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and Tracking Technologies</h2>
            <p className={styles.text}>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
            <p className={styles.text}>
              Cookies help us understand how the site is being used and improve your user experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
          </section>

          <section id="data-security" className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Security</h2>
            <p className={styles.text}>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. Our physical, electronic, and managerial procedures safeguard and secure the information we collect online.
            </p>
            <p className={styles.text}>
              Especially regarding Data Recovery services, all recovered data is stored on encrypted, offline staging servers within our secure facility in Gurgaon, India, and is permanently wiped in accordance with strict data sanitization standards after successful delivery to the client.
            </p>
          </section>

          <section id="third-party-services" className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Services</h2>
            <p className={styles.text}>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul className={styles.list}>
              <li>Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            </ul>
            <p className={styles.text}>
              We do not sell, rent, or trade your personal information with third parties for their promotional purposes.
            </p>
          </section>

          <section id="user-rights" className={styles.section}>
            <h2 className={styles.sectionTitle}>User Rights</h2>
            <p className={styles.text}>
              Under Indian law, you have certain rights regarding your personal information. These include the right to review the information you have provided and request that any inaccurate or deficient information be corrected or amended.
            </p>
            <p className={styles.text}>
              If you would at any time like to review or change the information in your account or terminate your account, you can contact us using the contact information provided below. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
            </p>
          </section>

          <section id="contact-information" className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.text}>
              If you have questions or comments about this policy, or if you have a grievance with respect to the processing of your personal information, you may contact our Grievance Officer:
            </p>
            <p className={styles.text}>
              <strong>FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br/>
              Shop No. 159, Anand Garden,<br/>
              Near Railway Station,<br/>
              Gurgaon, Haryana 122001, India<br/>
              Email: Support@ftfxtechsolutions.com<br/>
              Phone: 08595691335
            </p>
          </section>

        </article>
      </div>

      <Footer />
    </main>
  );
}
