import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import Marquee from '@/components/ui/Marquee';
import About from '@/components/ui/About';
import Services from '@/components/ui/Services';
import Portfolio from '@/components/ui/Portfolio';
import Process from '@/components/ui/Process';
import VisualBreak from '@/components/ui/VisualBreak';
import WhyGK from '@/components/ui/WhyGK';
import CTA from '@/components/ui/CTA';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <VisualBreak />
        <WhyGK />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
