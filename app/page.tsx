import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ContactInfo />
      <Footer />
    </main>
  );
}