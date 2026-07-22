import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import About from '@/components/home/About';
import Features from '@/components/home/Features';
import Process from '@/components/home/Process';
import TechStack from '@/components/home/TechStack';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesGrid />
      <About />
      <Features />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
