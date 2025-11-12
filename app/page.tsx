import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Library } from '@/components/sections/library';
import { CV } from '@/components/sections/cv';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { MobileNav } from '@/components/mobile-nav';
import { CodingCounter } from '@/components/coding-counter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CodingCounter />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Library />
        <CV />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
