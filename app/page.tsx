import Footer from "./_components/layout/Footer";
import CTA from "./_components/sections/CTA";
import Gallery from "./_components/sections/Gallery";
import Hero from "./_components/sections/Hero";
import Services from "./_components/sections/Services";
import Trust from "./_components/sections/Trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
