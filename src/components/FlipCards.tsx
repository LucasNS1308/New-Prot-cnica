import { motion } from 'framer-motion';

// 1. IMPORTAÇÕES (Ajuste os nomes dos arquivos se necessário)
import imgGloves from '@/assets/img/cards/gloves.jpg';
import imgMask from '@/assets/img/cards/mask.jpg';
import imgPhones from '@/assets/img/cards/phones.jpg';
import imgHelmet from '@/assets/img/cards/helmet.jpg';
import imgGlasses from '@/assets/img/cards/glasses.jpg';
import imgVest from '@/assets/img/cards/vest.jpg';
import imgBoots from '@/assets/img/cards/boots.jpg';
import imgCarabiner from '@/assets/img/cards/carabiner.jpg';

const cards = [
  {
    image: imgGloves,
    title: 'Luvas',
    desc: 'Protegem as mãos contra riscos mecânicos e térmicos, garantindo aderência e segurança em diversas atividades.',
  },
  {
    image: imgMask,
    title: 'Respirador',
    desc: 'Filtra partículas, vapores e poeiras, garantindo respiração segura em ambientes com contaminantes.',
  },
  {
    image: imgPhones,
    title: 'Abafador',
    desc: 'Reduz o impacto do ruído e preserva a saúde auditiva em áreas com máquinas e altos níveis de som.',
  },
  {
    image: imgHelmet,
    title: 'Capacete',
    desc: 'Protege a cabeça contra impactos e quedas de objetos. Segurança obrigatória em obras e indústrias.',
  },
  {
    image: imgGlasses,
    title: 'Óculos',
    desc: 'Evita lesões oculares causadas por partículas e respingos. Ideal para corte, solda e manuseio químico.',
  },
  {
    image: imgVest,
    title: 'Colete',
    desc: 'Aumenta a visibilidade do trabalhador e previne acidentes em áreas de movimentação e externas.',
  },
  {
    image: imgBoots,
    title: 'Botina',
    desc: 'Garante proteção contra quedas de objetos e perfurações, oferecendo conforto para o dia todo.',
  },
  {
    image: imgCarabiner,
    title: 'Cinto',
    desc: 'Previne quedas em trabalho em altura, garantindo proteção total e estabilidade ao trabalhador.',
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
            EPIs que fazem a <span className="text-gradient-amber">diferença</span>
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
              className="group relative h-[300px] rounded-xl overflow-hidden border border-border
                         hover:border-primary/40 transition-colors cursor-pointer"
            >
              {/* FRENTE: Imagem Centralizada */}
              <div
                className="absolute inset-0 flex items-center justify-center
                           bg-gradient-card
                           transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                           group-hover:-translate-y-[30%]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <span className="text-[8rem] font-display text-primary leading-none">
                    {card.title[0]}
                  </span>
                </div>

                <img
                  src={card.image} // AGORA É SEMPRE card.image
                  alt={card.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* VERSO: Slide de baixo para cima */}
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
                           h-[100%]"
              >
                <span className="block w-8 h-0.5 bg-gradient-amber rounded-full mb-1" />
                <h4 className="text-2xl font-display text-foreground leading-tight">
                  {card.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
