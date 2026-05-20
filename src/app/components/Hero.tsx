import { ArrowRight, Menu, X } from 'lucide-react';

import { Button } from './ui/button';
import { useState } from 'react';

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                JL Pro Pathway
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('coaches')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                Coaches
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-gray-200 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('coaches')}
                className="block w-full text-left text-white hover:text-gray-200 py-2"
              >
                Coaches
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-white hover:text-gray-200 py-2"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1651043421470-88b023bb9636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMGFlcmlhbHxlbnwxfHx8fDE3NzUxMTYyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Football field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            JL Pro Pathway
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-green-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Train Like It Matters, Embrace The Pressure, Reach The Next Level
          </p>
          <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Elite football coaching designed to elevate your game and unlock your full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
