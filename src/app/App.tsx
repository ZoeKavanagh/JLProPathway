import { About } from './components/About';
import { Coaches } from './components/Coaches';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import {Promo} from './components/Promo';
import { Services } from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Promo />
      <About />
      <Coaches />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
