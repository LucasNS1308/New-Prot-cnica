import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import logoProtenica from '@/assets/logo.png';

import iconeHome from '@/assets/icones/header/home.svg';
import iconeSobre from '@/assets/icones/header/sobre.svg';
import iconeProdutos from '@/assets/icones/header/produtos.svg';
import iconeYoutube from '@/assets/icones/header/youtube.svg';
import iconeContato from '@/assets/icones/header/contato.svg';
import iconeBlog from '@/assets/icones/header/blog.svg';

const navLinks = [
  { href: '#', icon: iconeHome, label: 'Home' },
  { href: '#sobre', icon: iconeSobre, label: 'Sobre' },
  { href: '#produtos', icon: iconeProdutos, label: 'Produtos' },
  { href: '#videos', icon: iconeYoutube, label: 'Veja mais' },
  { href: '#contato', icon: iconeContato, label: 'Contato' },
  { href: '#blog', icon: iconeBlog, label: 'Blog' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para mudar o fundo do header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={closeMenu}>
            <img src={logoProtenica} alt="Protécnica" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg group hover:bg-primary/10 transition-colors"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity [filter:invert(1)]"
                />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors font-medium">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Botão Hamburguer (mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground rounded transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground rounded transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-border flex flex-col pt-20 pb-8 px-6 md:hidden"
            >
              {/* Logo dentro do drawer*/}
              <img
                src={logoProtenica}
                alt="Protécnica"
                className="h-8 w-auto brightness-0 invert mb-8"
              />

              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors group"
                  >
                    <img
                      src={link.icon}
                      alt={link.label}
                      className="h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity [filter:invert(1)]"
                    />
                    <span className="text-base text-foreground group-hover:text-primary transition-colors font-medium">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
