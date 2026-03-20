import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Ansell",    logo: "/img/marcas/ansell.png"         },
  { name: "Athenas",   logo: "/img/marcas/athenas.png"        },
  { name: "Bompell",   logo: "/img/marcas/bompell.png"        },
  { name: "Brascamp",  logo: "/img/marcas/brascamp.png"       },
  { name: "Danny",     logo: "/img/marcas/danny.png"          },
  { name: "Henlau",    logo: "/img/marcas/henlau.png"         },
  { name: "Hércules",  logo: "/img/marcas/hercules.png"       },
  { name: "Innpro",    logo: "/img/marcas/innpro.png"         },
  { name: "Koch",      logo: "/img/marcas/koch.png"           },
  { name: "Libus",     logo: "/img/marcas/libus-positivo.png" },
  { name: "Marluvas",  logo: "/img/marcas/marluvas.png"       },
  { name: "MW",        logo: "/img/marcas/mw.png"             },
  { name: "Next",      logo: "/img/marcas/next.png"           },
  { name: "Nutriex",   logo: "/img/marcas/nutriex.png"        },
  { name: "Safetline", logo: "/img/marcas/safetline.png"      },
  { name: "Volk",      logo: "/img/marcas/volk.png"           },
];

const BrandsCarousel = () => {
  const trackRef     = useRef<HTMLDivElement>(null);
  const offsetRef    = useRef(0);
  const animFrameRef = useRef<number>(0);
  const speed        = 0.6; // px por frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offsetRef.current += speed;
      const half = track.scrollWidth / 2;
      if (offsetRef.current >= half) offsetRef.current = 0;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Duplica para loop infinito
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden" id="marcas">
      <div className="container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-2">
            Marcas e{" "}
            <span className="text-gradient-amber">Parceiros</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Distribuidor autorizado das maiores marcas do mundo
          </p>
        </motion.div>
      </div>

      {/* Gradientes nas bordas para fade */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-secondary/30 to-transparent" />

        {/* Track do carrossel */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-10 w-max py-4">
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 w-36 h-20 flex items-center justify-center
                           bg-card border border-border rounded-xl px-4
                           hover:border-primary/30 transition-colors group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain
                             opacity-50 group-hover:opacity-100
                             grayscale group-hover:grayscale-0
                             transition-all duration-300"
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
