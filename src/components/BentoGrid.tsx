import { motion } from "framer-motion";
import { Eye, Hand, Mountain, Footprints } from "lucide-react";
import epiEquipamentos from "@/assets/epi-equipamentos.jpg";
import epiCapacete from "@/assets/epi-capacete.jpg";
import epiAltura from "@/assets/epi-altura.jpg";

const categories = [
  {
    icon: Eye,
    title: "Proteção Facial",
    description: "Ótica de alta definição e resistência balística.",
    span: "col-span-2 row-span-2",
    image: epiEquipamentos,
  },
  {
    icon: Hand,
    title: "Mãos e Braços",
    description: "Fibras de Kevlar e polímeros de alta sensibilidade tátil.",
    span: "col-span-1 row-span-1",
    image: epiCapacete,
  },
  {
    icon: Mountain,
    title: "Proteção em Altura",
    description: "Sistemas de travamento inteligente e ergonomia extrema.",
    span: "col-span-1 row-span-1",
    image: epiAltura,
  },
  {
    icon: Footprints,
    title: "Calçados",
    description: "Absorção de impacto e solados inteligentes para terrenos críticos.",
    span: "col-span-2 row-span-1",
    image: null,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BentoGrid = () => {
  return (
    <section className="py-24 bg-background" id="produtos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display text-gradient-amber mb-2">
            Categorias de Elite
          </h2>
          <p className="text-muted-foreground text-lg">
            EPIs de alta performance para cada necessidade
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className={`${cat.span} group relative border border-border rounded-xl p-6 flex flex-col justify-end overflow-hidden hover:border-primary/30 transition-colors cursor-pointer`}
            >
              {cat.image ? (
                <>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-card" />
              )}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <cat.icon className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <cat.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl md:text-2xl font-display text-foreground mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
