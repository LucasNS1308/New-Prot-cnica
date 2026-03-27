import { MapPin, Mail } from 'lucide-react';
import logoProtenica from '@/assets/logo.png';
import iconeWhatsapp from '@/assets/icones/whatsapp.svg';
import iconeInstagram from '@/assets/icones/instagram.svg';
import iconeYoutube from '@/assets/icones/youtube.svg';
import iconeFacebook from '@/assets/icones/facebook.svg';
import iconeLinkedin from '@/assets/icones/linkedin.svg';

const addresses = [
  {
    label: 'Matriz',
    text: 'R. Reinaldo Sandrim, 1240 - Distrito Empresarial Pref. Luiz Roberto Jabali, Ribeirão Preto - SP, 14072-080',
  },
  {
    label: 'Filial',
    text: 'R. Izais Canete, 150 - Bairro Ibirapuera, Londrina - PR, Brasil',
  },
  {
    label: 'Santa Catarina',
    text: 'R. Bento Miliorini, 54 Vila Luzia - Tijucas - SC',
  },
];

const phones = [
  { number: '553532342504', label: '(16) 3234-2504 — Matriz Ribeirão Preto' },
  { number: '554320181000', label: '(43) 2018-1000 — Filial Londrina' },
  { number: '554840423001', label: '(48) 4042-3001 — Filial Santa Catarina' },
];

const socials = [
  { href: 'https://www.instagram.com/protecnicaepis/', icon: iconeInstagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@protecnicaepis', icon: iconeYoutube, label: 'YouTube' },
  { href: 'https://www.facebook.com/protecnicaepis', icon: iconeFacebook, label: 'Facebook' },
  {
    href: 'https://www.linkedin.com/company/prot%C3%A9cnica-epi-s/',
    icon: iconeLinkedin,
    label: 'LinkedIn',
  },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-t-accent " id="contato">
      {/* ── Mapa real da Protécnica ──────────────────────────────────────── */}
      <iframe
        title="Localização Protécnica — Matriz Ribeirão Preto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.432007626835!2d-47.80041369999999!3d-21.0953362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be5643c4f7c9%3A0x9f2418e681163e09!2sProt%C3%A9cnica%20EPI&#39;s%20-%20Matriz!5e0!3m2!1spt-BR!2sbr!4v1764934733993!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        style={{ border: 0, display: 'block', alignItems: 'center' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* ── Conteúdo principal ───────────────────────────────────────────── */}
      <div className="container py-14">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Logo + descrição + redes sociais */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <img src={logoProtenica} alt="Protécnica" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Distribuidor Autorizado das Maiores Marcas do Mundo. Compromisso com a segurança e a
              excelência operacional.
            </p>

            {/* Redes sociais */}
            <div>
              <h4 className="font-display text-base text-foreground mb-3">Nossas redes sociais</h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 h-9 px-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
                  >
                    <img
                      src={s.icon}
                      alt={s.label}
                      className="h-4 w-4 [filter:invert(1)] opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Endereços */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg text-foreground mb-4">Nossos Endereços</h4>
            <div className="space-y-4">
              {addresses.map((addr) => (
                <div key={addr.label} className="flex gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{addr.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{addr.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg text-foreground mb-4">Entre em Contato</h4>
            <div className="space-y-3">
              {phones.map((p) => (
                <a
                  key={p.label}
                  href={`https://wa.me/${p.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <img
                    src={iconeWhatsapp}
                    alt="WhatsApp"
                    className="h-5 w-5 [filter:invert(1)] opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {p.label}
                  </span>
                </a>
              ))}

              <a
                href="mailto:contato@protecnicaepi.com.br"
                className="flex items-center gap-3 group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  contato@protecnicaepi.com.br
                </span>
              </a>
            </div>

            {/* Certificações */}
            <div className="mt-6">
              <h4 className="font-display text-base text-foreground mb-2">Certificações</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Certificação INMETRO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          Todos os direitos reservados a Protécnica EPI's ®
        </div>
      </div>
    </footer>
  );
};

export default Footer;
