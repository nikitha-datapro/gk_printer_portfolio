import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Printer } from 'lucide-react';
import { navLinks } from '@/lib/data';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3"
      >
        <nav
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-5 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass shadow-lg shadow-ink-900/5 border border-ink-100/60'
              : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white">
              <Printer className="h-5 w-5" />
            </span>
            <span className="hidden sm:block">
              GK <span className="text-accent-500">Printers</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" variant="primary" size="md" withArrow>
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-ink-900 hover:bg-ink-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 360, damping: 36 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
                <span className="font-display text-lg font-bold text-ink-900">
                  GK <span className="text-accent-500">Printers</span>
                </span>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-ink-100 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-ink-900" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
                    >
                      {link.label}
                      <span className="text-sm font-display text-ink-300">
                        0{i + 1}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="px-6 py-5 border-t border-ink-100">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  withArrow
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
