import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import slide1 from '@/assets/empresa-fachada.jpg';
import slide2 from '@/assets/epi-capacete.jpg';
import slide3 from '@/assets/epi-equipamentos.jpg';
import slide4 from '@/assets/epi-altura.jpg';

const slides = [slide1, slide2, slide3, slide4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={slides[current]} alt="Protécnica EPIs" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9] mb-6">
            Segurança que <span className="text-gradient-amber">Antecipa o Risco.</span>
            <br />
            Tecnologia que <span className="text-gradient-amber">Protege o Futuro.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
            Distribuição inteligente de EPIs de alta performance para indústrias que não podem
            parar. Logística ágil, conformidade total e proteção máxima.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-amber text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all animate-pulse-glow">
              Solicitar Consultoria Técnica
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-accent/40 text-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-accent hover:text-accent-foreground transition-all">
              Explorar Catálogo 2026 em breve.....
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-primary' : 'w-4 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
