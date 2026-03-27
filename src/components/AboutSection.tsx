import { motion } from 'framer-motion';
import videoProtenica from '@/assets/Videos/Video.mp4';
import { Building2, ShieldCheck, Users, Truck } from 'lucide-react';

const stats = [
  { icon: Building2, value: '+30', label: 'Anos de Mercado' },
  { icon: ShieldCheck, value: '100%', label: 'Produtos com CA Ativo' },
  { icon: Users, value: '+4000', label: 'Clientes Ativos' },
  { icon: Truck, value: '24h', label: 'Entrega Expressa' },
];

const AboutSection = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="sobre">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoProtenica} type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Gradiente nas bordas */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Conteúdo */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-3">
            Conheça a <span className="text-gradient-amber">Protécnica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Referência em distribuição de EPIs, unindo tecnologia, logística ágil e compromisso com
            a segurança dos trabalhadores brasileiros.
          </p>
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/60 backdrop-blur-md border border-border rounded-xl p-6 text-center"
            >
              <stat.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              <p className="text-3xl font-display text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
