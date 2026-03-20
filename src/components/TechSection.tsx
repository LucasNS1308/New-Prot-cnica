import { motion } from "framer-motion";
import { MapPin, BarChart3, FlaskConical } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Rastreio em Tempo Real",
    text: "Saiba exatamente onde está seu lote de segurança.",
  },
  {
    icon: BarChart3,
    title: "Gestão de Inventário",
    text: "Consultoria para otimizar o estoque e evitar desperdícios de equipamentos.",
  },
  {
    icon: FlaskConical,
    title: "Curadoria de Materiais",
    text: "Só trabalhamos com polímeros e ligas testadas em condições extremas de estresse.",
  },
];

const TechSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="tecnologia">
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4">
            Muito além de uma entrega.
            <br />
            <span className="text-gradient-amber">Uma parceria tecnológica.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-4"
            >
              <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <feat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground mb-1">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
