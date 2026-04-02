import { Hero } from './components/Hero';
import { About } from './components/About';
import { Coaches } from './components/Coaches';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Coaches />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
