import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';
import { ShieldCheck, Scale, FileText, Accessibility, AlertCircle, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance Center | FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED',
  description: 'FTFX TECH SOLUTIONS (OPC) PRIVATE LIMITED Compliance and Trust Center.',
};

export default function CompliancePage() {
  return (
    <main className={styles.pageContainer}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Compliance Center</h1>
        <p className={styles.heroSubtitle}>Our commitment to security, transparency, and legal compliance.</p>
      </section>

      <div className={styles.contentContainer} style={{ justifyContent: 'center' }}>
        <article className={styles.mainContent} style={{ maxWidth: '800px', flex: 'none', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            <Link href="/privacy-policy" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <ShieldCheck size={32} color="var(--color-accent-purple)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Privacy Policy</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Learn how we collect, protect, and handle your personal and sensitive data.</p>
              </div>
            </Link>

            <Link href="/terms-of-service" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <Scale size={32} color="var(--color-accent-blue)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Terms of Service</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>The rules, guidelines, and agreements for using our services.</p>
              </div>
            </Link>

            <Link href="/refund-policy" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <FileText size={32} color="#10B981" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Refund & Cancellation</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Details on our No Data, No Fee policy and milestone refund processes.</p>
              </div>
            </Link>

            <Link href="/accessibility" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <Accessibility size={32} color="#F59E0B" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Accessibility</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Our commitment to making digital experiences available to everyone.</p>
              </div>
            </Link>

            <Link href="/grievance-policy" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <AlertCircle size={32} color="#EF4444" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Grievance Redressal</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Our formal process for handling and resolving customer complaints.</p>
              </div>
            </Link>

            <Link href="/security-disclosure" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}>
                <Lock size={32} color="#6366F1" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Security Disclosure</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Our responsible vulnerability disclosure policy for researchers.</p>
              </div>
            </Link>

          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
