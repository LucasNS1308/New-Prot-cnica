import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Organizamos os dados com os nomes EXATOS dos arquivos na sua pasta assets/img/marcas
const brands = [
  { name: 'Ansell', file: 'ansell.png' },
  { name: 'Athenas', file: 'athenas.png' },
  { name: 'Bompell', file: 'bompell.png' },
  { name: 'Brascamp', file: 'brascamp.png' },
  { name: 'Danny', file: 'danny.png' },
  { name: 'Delta', file: 'delta.png' },
  { name: 'Henlau', file: 'henlau.png' },
  { name: 'Hércules', file: 'hercules.png' },
  { name: 'Innpro', file: 'innpro.png' },
  { name: 'Koch', file: 'koch.png' },
  { name: 'Libus Positivo', file: 'libus-positivo.png' },
  { name: 'Libus', file: 'libus.png' },
  { name: 'Marluvas', file: 'marluvas.png' },
  { name: 'MW', file: 'mw.png' },
  { name: 'Next', file: 'next.png' },
  { name: 'Nutriex', file: 'nutriex.png' },
  { name: 'Safetline', file: 'safetline.png' },
  { name: 'Volk', file: 'volk.png' },
];

const BrandsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speed = 0.3;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offsetRef.current += speed;
      const half = track.scrollWidth / 2;
      if (offsetRef.current >= half) offsetRef.current = 0;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const loopedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden" id="marcas">
      <div className="container mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display mb-2">
            Marcas e <span className="text-gradient-amber">Parceiros</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Distribuidor autorizado das maiores marcas do mundo
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-10 w-max py-4">
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card border border-border rounded-xl px-4 hover:border-primary/30 transition-colors group"
              >
                <img
                  // RESOLUÇÃO DINÂMICA: Pega de src/assets/img/marcas/
                  src={new URL(`../assets/img/marcas/${brand.file}`, import.meta.url).href}
                  alt={brand.name}
                  className="h=full w=full object-cover opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
