import { motion } from "framer-motion";

const cards = [
  {
    gif:   "/img/gifs/gloves.gif",
    title: "Luvas",
    desc:  "Protegem as mãos contra cortes, abrasões e agentes químicos. Essenciais para qualquer atividade que exige segurança no manuseio.",
  },
  {
    gif:   "/img/gifs/mask.gif",
    title: "Respirador",
    desc:  "Filtra partículas, vapores e poeiras, garantindo respiração segura. Ideal para ambientes com exposição a contaminantes.",
  },
  {
    gif:   "/img/gifs/phones.gif",
    title: "Abafador",
    desc:  "Reduz o impacto do ruído e preserva a saúde auditiva. Indispensável em áreas com máquinas e altos níveis de som.",
  },
  {
    gif:   "/img/gifs/helmet.gif",
    title: "Capacete",
    desc:  "Protege a cabeça contra impactos e quedas de objetos. Segurança obrigatória em obras e ambientes industriais.",
  },
  {
    gif:   "/img/gifs/glasses.gif",
    title: "Óculos",
    desc:  "Evita lesões oculares causadas por partículas e respingos. Ideal para operações de corte, solda e manuseio de químicos.",
  },
  {
    gif:   "/img/gifs/vest.gif",
    title: "Colete",
    desc:  "Aumenta a visibilidade do trabalhador e previne acidentes. Perfeito para áreas externas e operações de movimentação.",
  },
  {
    gif:   "/img/gifs/boots.gif",
    title: "Botina",
    desc:  "Garante proteção contra quedas de objetos, perfurações e escorregões. Conforto e segurança para o dia inteiro de trabalho.",
  },
  {
    gif:   "/img/gifs/carabiner.gif",
    title: "Cinto",
    desc:  "Previne quedas em trabalho em altura, garantindo proteção total ao trabalhador.",
  },
];

const FlipCards = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-3">
            EPIs que fazem a{" "}
            <span className="text-gradient-amber">diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Passe o mouse para conhecer cada equipamento
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              /* Card container — overflow hidden para o slide-up funcionar */
              className="group relative h-[300px] rounded-xl overflow-hidden border border-border
                         hover:border-primary/40 transition-colors cursor-pointer"
            >
              {/* ── FRENTE: GIF centralizado ─────────────────────────────── */}
              <div
                className="absolute inset-0 flex items-center justify-center
                           bg-gradient-card
                           transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                           group-hover:-translate-y-[30%]"
              >
                {/* Ícone âmbar decorativo de fundo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <span className="text-[8rem] font-display text-primary leading-none">
                    {card.title[0]}
                  </span>
                </div>

                <img
                  src={card.gif}
                  alt={card.title}
                  className="w-24 h-24 object-contain relative z-10 drop-shadow-lg"
                />
              </div>

              {/* ── VERSO: slide de baixo para cima ─────────────────────── */}
              <div
                className="absolute bottom-0 left-0 right-0
                           bg-gradient-to-b from-background/95 to-card
                           border-t border-primary/20
                           backdrop-blur-sm
                           flex flex-col items-center justify-center text-center
                           px-5 py-6 gap-3
                           translate-y-full
                           transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                           group-hover:translate-y-0
                           h-[65%]"
              >
                {/* Linha âmbar decorativa no topo */}
                <span className="block w-8 h-0.5 bg-gradient-amber rounded-full mb-1" />

                <h4 className="text-2xl font-display text-foreground leading-tight">
                  {card.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Borda âmbar sutil no hover */}
              <div
                className="absolute inset-0 rounded-xl ring-0 ring-primary/0
                           group-hover:ring-1 group-hover:ring-primary/20
                           transition-all duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
