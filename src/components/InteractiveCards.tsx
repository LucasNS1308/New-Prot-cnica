import { motion } from "framer-motion";
import { Factory, Scale, Users } from "lucide-react";

const cards = [
  {
    icon: Factory,
    title: "Continuidade Operacional",
    text: "Um acidente parado custa caro. Nossos equipamentos garantem que sua linha de produção nunca precise ser interrompida.",
  },
  {
    icon: Scale,
    title: "Blindagem Jurídica e Normativa",
    text: "EPIs 100% certificados conforme as NRs vigentes. Segurança para o colaborador, tranquilidade para o compliance da empresa.",
  },
  {
    icon: Users,
    title: "Retenção de Talentos",
    text: "O colaborador que se sente seguro produz mais e melhor. Invista no capital mais valioso da sua operação: a vida.",
  },
];

const InteractiveCards = () => {
  return (
    <section className="py-24 bg-secondary/30" id="servicos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-3">
            Por que o EPI certo{" "}
            <span className="text-gradient-amber">importa?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards;
