import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import EvaluationForm from './EvaluationForm';

export const metadata: Metadata = {
  title: 'Get a Free Evaluation & Quote | FTFx Tech Solutions',
  description: 'Request a free diagnostic, quote, or consultation for Data Recovery, IT Support, or Website Design in Gurgaon.',
};

export default function FreeEvaluationPage() {
  return (
    <main style={{ background: 'var(--color-bg-deep)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '80px', flex: 1 }}>
        {/* Background elements */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <Image 
            src="/images/workspace_light.jpg" 
            alt="Premium Workspace" 
            fill 
            style={{ objectFit: 'cover', opacity: 0.15 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--color-bg-deep), transparent, var(--color-bg-deep))' }} />
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 1 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Get a Free <span className="text-gradient">Evaluation</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Describe your issue or project requirements below. Our engineering team will review your request and get back to you with a comprehensive diagnostic and quote.
          </p>

          <EvaluationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
