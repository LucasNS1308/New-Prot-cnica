import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const videos = [
  {
    id:    "IQES_OFtnp0",
    src:   "https://www.youtube.com/embed/IQES_OFtnp0?si=n3JfrczjYI4EHmgd",
    title: "Protécnica 2025",
  },
  {
    id:    "zZ3CNwkuDYA",
    src:   "https://www.youtube.com/embed/zZ3CNwkuDYA?si=XPYfmBsoyiOFPhMs",
    title: "A maior do interior",
  },
  {
    id:    "g-gNixSDyV0",
    src:   "https://www.youtube.com/embed/g-gNixSDyV0?si=fL8dkI_jiXlOkfAQ",
    title: "A maior do Brasil",
  },
];

const VideosSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="videos">
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[400px] rounded-full bg-primary/5 blur-[140px]
                      pointer-events-none" />

      <div className="container relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Youtube className="h-7 w-7 text-primary" />
            <h2 className="text-4xl md:text-6xl font-display">
              Veja{" "}
              <span className="text-gradient-amber">mais</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conheça de perto a Protécnica, nossos produtos e nossa história
          </p>
        </motion.div>

        {/* Grid de vídeos */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group rounded-xl overflow-hidden border border-border
                         hover:border-primary/30 transition-colors
                         bg-gradient-card"
            >
              {/* Wrapper 16:9 */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Label abaixo */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
