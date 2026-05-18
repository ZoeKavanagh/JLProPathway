import { About } from './components/About';
import { Coaches } from './components/Coaches';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import {Promo} from './components/Promo';
import { Services } from './components/Services';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = 'JL Pro Pathway - Elite Football Coaching';

    // Set favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll("link[rel*='icon']");
      existingFavicons.forEach(favicon => favicon.remove());

      // Create new favicon link with football and JLPro text
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';

      const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <defs>
            <style>
              .bg { fill: %2310b981; }
              .ball { fill: white; }
              .text { fill: white; font-family: Arial, sans-serif; font-weight: bold; font-size: 36px; }
            </style>
          </defs>
          <rect width='200' height='200' class='bg' rx='20'/>
          <circle cx='60' cy='80' r='35' class='ball'/>
          <path d='M 60 50 L 65 65 L 55 65 Z M 45 70 L 50 85 L 40 75 Z M 75 70 L 80 75 L 70 85 Z M 50 95 L 60 105 L 70 95 Z M 55 75 L 60 80 L 65 75 L 60 70 Z' fill='%2310b981'/>
          <text x='100' y='115' class='text'>JLPro</text>
        </svg>
      `;

      favicon.href = `data:image/svg+xml,${svg.replace(/\n/g, '').replace(/\s+/g, ' ')}`;
      document.head.appendChild(favicon);
    };

    setFavicon();
  }, []);
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
