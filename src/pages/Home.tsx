import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Services from '@/components/ui/Services';
import Portfolio from '@/components/ui/Portfolio';
import Process from '@/components/ui/Process';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import CTA from '@/components/ui/CTA';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
