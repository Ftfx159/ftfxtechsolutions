import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Link from 'next/link';
import { Code2, CheckCircle2, Layout, Database, Search } from 'lucide-react';
import styles from '../data-recovery/ServicePage.module.css';

export const metadata: Metadata = {
  title: 'Website Design Gurgaon | Custom Web Development Haryana',
  description: 'Premium Website Design in Gurgaon, Haryana. We specialize in custom corporate websites, landing pages, React.js development, and SEO optimization.',
  keywords: 'website design gurgaon, website development haryana, web developer near me, corporate website design, SEO optimized websites, premium web design, nextjs development',
};

const faqs = [
  {
    question: "Do you build custom business websites and landing pages?",
    answer: "Yes, we build fully custom business websites, portfolios, and landing pages using React and Next.js, ensuring your site is entirely unique and lightning-fast."
  },
  {
    question: "Is SEO built into the websites you design?",
    answer: "Yes, every site we build is strictly SEO Ready. We implement server-side rendering, proper meta-tags, structured JSON-LD data, and optimized sitemaps by default to ensure high rankings."
  },
  {
    question: "Will my website be mobile responsive?",
    answer: "Absolutely. Every website we design is developed with a mobile-first approach, guaranteeing it looks perfect and functions flawlessly on iPhones, Androids, tablets, and desktop monitors."
  },
  {
    question: "Do you handle domain configuration and backend setup?",
    answer: "Yes, we handle all the software configuration on the backend, including pointing DNS records, setting up secure SSL certificates, and configuring optimized cloud hosting environments."
  }
];

export default function WebsiteDesign() {
  return (
    <main>
      <Header />
      
      {/* Service Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={styles.glow} style={{ background: 'radial-gradient(circle, rgba(0, 112, 243, 0.15) 0%, transparent 70%)' }} />
        </div>
        <div className={styles.container}>
          <div className={styles.iconWrapper} style={{ color: 'var(--color-accent-blue)', borderColor: 'rgba(0, 112, 243, 0.2)', boxShadow: '0 0 40px rgba(0, 112, 243, 0.1)' }}>
            <Code2 size={64} />
          </div>
          <h1 className={styles.title}>Premium Website Design</h1>
          <p className={styles.subtitle}>
            We engineer ultra-fast, visually stunning corporate websites and landing pages using modern technologies like React, Next.js, and Three.js. Built for speed, designed to convert.
          </p>
          <Link href="/free-evaluation">
            <MagneticButton variant="primary">Start Your Web Project</MagneticButton>
          </Link>
        </div>
      </section>

      {/* Front-End Design Panel */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Modern UI/UX Design</h2>
            <p className={styles.panelText}>
              Your website is the digital storefront of your business. If it doesn't immediately impress your visitors, they will leave. We design premium, Apple-inspired aesthetics featuring Liquid Glass, smooth micro-animations, and perfect typography.
            </p>
            <p className={styles.panelText}>
              We abandon sluggish, outdated templates in favor of bespoke React architecture, ensuring your brand stands out in the crowded digital landscape.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Layout color="var(--color-accent-blue)"/> Bespoke UI/UX Wireframing</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><CheckCircle2 color="var(--color-accent-blue)"/> Fully Responsive Mobile Design</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/ui_ux_design.jpg" 
              alt="Premium laptop showcasing modern web design and development workspace" 
              fill 
              className={styles.image} 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* The Design Process */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <SectionHeading title="Our Development Process" centered subtitle="A streamlined approach from initial concept to a high-performing live deployment." />
          
          <div className={styles.processGrid}>
            <AnimatedCard className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Prototyping</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                We design high-fidelity UI/UX mockups, establishing your brand's color palette, typography, and visual identity.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.2}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                Our engineers write clean, scalable code, bringing the design to life with interactive animations and fast-loading assets.
              </p>
            </AnimatedCard>
            <AnimatedCard className={styles.processCard} delay={0.4}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>SEO & Deployment</h3>
              <p className={styles.panelText} style={{ fontSize: '1rem', marginBottom: 0 }}>
                We inject technical SEO, set up your hosting infrastructure, and launch your site to the global market.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Backend & Hosting Panel */}
      <section className={styles.featureSection}>
        <div className={`${styles.featureGrid} ${styles.reverse}`}>
          <div className={styles.glassPanel}>
            <h2 className={styles.panelTitle}>Hosting & Technical SEO</h2>
            <p className={styles.panelText}>
              A beautiful website is useless if nobody can find it. Every site we build comes pre-configured with advanced technical SEO, including JSON-LD schema markup, meta-tag optimization, and lightning-fast server-side rendering.
            </p>
            <p className={styles.panelText}>
              We also handle all the complex infrastructure, providing robust cloud hosting, automated backups, and secure SSL certificates so you can focus on running your business.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Database color="var(--color-accent-blue)"/> Secure Cloud Hosting</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-primary)' }}><Search color="var(--color-accent-blue)"/> Advanced Google SEO Integration</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/server_light.jpg" 
              alt="Bright server room representing cloud hosting and database management" 
              fill 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <SectionHeading title="Comprehensive Web Solutions" centered />
          
          <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px' }}>
            <Image 
              src="/images/data_transfer_light.jpg" 
              alt="Digital data flow representing high-speed website performance and code" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg-deep), transparent)' }} />
          </div>

          <div className={styles.grid}>
            {['Premium Custom Websites', '3D Interactive Websites', 'Corporate & Business Sites', 'High-Converting Landing Pages', 'E-Commerce Solutions', 'Portfolio & Gallery Sites', 'On-Page SEO Optimization', 'Mobile Responsive Layouts', 'Cloud Hosting Setup', 'Google Business Integration', 'Custom Domain Management', 'Speed & Performance Tuning'].map((item, i) => (
              <div key={i} className={styles.serviceItem}>
                <CheckCircle2 className={styles.checkIcon} style={{ color: 'var(--color-accent-blue)' }} />
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
              "name": "Website Design & Development",
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
