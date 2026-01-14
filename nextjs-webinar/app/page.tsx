import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import Registration from '@/components/Registration';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Benefits />
      <WhoIsThisFor />
      <Registration />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
