import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// ─── TIPOS ────────────────────────────────────────────────────────────────────
interface Product {
  name: string;
  desc: string;
  ca: string;
  ref: string;
  images: string[];
}

// ─── CATEGORIAS ───────────────────────────────────────────────────────────────
const categories = [
  { id: 'altura', label: 'Trabalho em Altura', image: '/categorias/altura.jpg' },
  { id: 'industria', label: 'Indústria', image: '/categorias/industria.jpg' },
  { id: 'alimenticia', label: 'Alimentícia', image: '/categorias/food.jpg' },
  { id: 'civil', label: 'Construção Civil', image: '/categorias/civil.jpg' },
  { id: 'laboratorio', label: 'Laboratório / Área Química', image: '/categorias/quimica.jpg' },
  { id: 'soldagem', label: 'Soldagem / Metalurgia', image: '/categorias/soldagem.jpg' },
  { id: 'eletrica', label: 'Eletricidade', image: '/categorias/eletrica.jpg' },
  { id: 'respirar', label: 'Proteção Respiratória', image: '/categorias/respiratorio.jpg' },
  { id: 'limpeza', label: 'Limpeza e Saneamento', image: '/categorias/limpeza.jpg' },
  { id: 'agro', label: 'Agro / Agricultura / Florestal', image: '/categorias/agro.jpg' },
  { id: 'logistica', label: 'Logística', image: '/categorias/logistica.jpg' },
];

// ─── PRODUTOS POR CATEGORIA ────────────────────────────────────────────────────
const products: Record<string, Product[]> = {
  altura: [
    {
      name: 'Capacete',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: ['/produtos/14161.png'],
    },
    {
      name: 'Luva',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: ['/produtos/13932.png'],
    },
    { name: '', desc: 'Descrição do produto...', ca: 'Ca: ', ref: 'Referência:', images: [] },
    { name: '', desc: 'Descrição do produto...', ca: 'Ca: ', ref: 'Referência:', images: [] },
    { name: '', desc: 'Descrição do produto...', ca: 'Ca: ', ref: 'Referência:', images: [] },
    { name: '', desc: 'Descrição do produto...', ca: 'Ca: ', ref: 'Referência:', images: [] },
  ],
  industria: Array(9).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  alimenticia: Array(9).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  civil: Array(9).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  laboratorio: Array(8).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  soldagem: Array(10).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  eletrica: Array(1).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  respirar: Array(1).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  limpeza: Array(1).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  agro: Array(1).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
  logistica: Array(1).fill({
    name: '',
    desc: 'Descrição do produto...',
    ca: 'Ca: 3658224',
    ref: 'Referência:',
    images: [],
  }),
};

// ─── SKELETON ─────────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 animate-pulse">
    <div className="w-full h-36 rounded-lg bg-muted" />
    <div className="h-4 w-2/3 rounded bg-muted" />
    <div className="h-3 w-full rounded bg-muted" />
    <div className="h-3 w-1/2 rounded bg-muted" />
  </div>
);

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const speedRef = useRef(0.5); // px por frame

  // ── Carrossel infinito via requestAnimationFrame ──────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offsetRef.current += speedRef.current;
      const half = track.scrollWidth / 2;
      if (offsetRef.current >= half) offsetRef.current = 0;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // ── Ao clicar numa categoria ──────────────────────────────────────────────
  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setLoading(true);
    setItems([]);

    // Scroll suave até a seção de produtos
    setTimeout(() => {
      productsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    // Simula carregamento (skeleton por 600ms)
    setTimeout(() => {
      setItems(products[id] ?? []);
      setLoading(false);
    }, 600);
  };

  const handleClose = () => {
    setActiveCategory(null);
    setItems([]);
  };

  // ── Duplica as categorias para o loop infinito ────────────────────────────
  const loopedCategories = [...categories, ...categories];

  return (
    <section className="py-24 bg-background" id="produtos">
      <div className="container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display text-gradient-amber mb-2">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground text-lg">
            Clique em uma categoria para ver os equipamentos disponíveis
          </p>
        </motion.div>
      </div>

      {/* ── Carrossel de categorias ────────────────────────────────────────── */}
      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-5 w-max">
          {loopedCategories.map((cat, i) => (
            <button
              key={`${cat.id}-${i}`}
              onClick={() => handleCategoryClick(cat.id)}
              className={`group flex-shrink-0 w-56 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'border-primary shadow-amber-glow'
                  : 'border-border hover:border-primary/40'
              }`}
            >
              {/* Imagem */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {activeCategory === cat.id && <div className="absolute inset-0 bg-primary/20" />}
              </div>
              {/* Label */}
              <div className="bg-card px-3 py-3">
                <span
                  className={`text-sm font-medium leading-tight line-clamp-2 transition-colors ${
                    activeCategory === cat.id
                      ? 'text-primary'
                      : 'text-foreground group-hover:text-primary'
                  }`}
                >
                  {cat.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Seção de produtos (abre ao clicar) ────────────────────────────── */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            ref={productsSectionRef}
            key="products"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="container mt-10">
              {/* Cabeçalho da seção */}
              <div className="flex items-center justify-between mb-6">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl md:text-3xl font-display text-foreground"
                >
                  {categories.find((c) => c.id === activeCategory)?.label}
                </motion.h3>
                <button
                  onClick={handleClose}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-2 hover:border-primary/40"
                >
                  <X className="h-4 w-4" />
                  Fechar
                </button>
              </div>

              {/* Grid de produtos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-10">
                {loading
                  ? Array(6)
                      .fill(0)
                      .map((_, i) => <SkeletonCard key={i} />)
                  : items.map((product, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-colors"
                      >
                        {/* Imagem do produto */}
                        <div className="w-full h-36 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                          {product.images.length > 0 ? (
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <span className="text-xs text-muted-foreground">Sem imagem</span>
                          )}
                        </div>

                        {/* Informações */}
                        {product.name && (
                          <h4 className="text-base font-display text-foreground leading-tight">
                            {product.name}
                          </h4>
                        )}
                        {product.desc && (
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {product.desc}
                          </p>
                        )}
                        {product.ca && (
                          <p className="text-xs text-primary font-medium">{product.ca}</p>
                        )}
                        {product.ref && (
                          <p className="text-xs text-muted-foreground">{product.ref}</p>
                        )}
                      </motion.div>
                    ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;
