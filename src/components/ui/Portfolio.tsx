import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { portfolioItems, portfolioCategories } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightbox, setLightbox] = useState<(typeof portfolioItems)[0] | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900"
          >
            Selected Work
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-lg text-ink-500"
          >
            A glimpse of what we've printed for brands, businesses, and events.
          </motion.p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-ink-600 hover:text-ink-900 bg-ink-50 hover:bg-ink-100'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink-900"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5"
        >
          {filtered.map((item) => (
            <motion.button
              layout
              key={item.title}
              variants={staggerItem}
              onClick={() => setLightbox(item)}
              className="group relative w-full overflow-hidden rounded-2xl bg-ink-900 break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-400 mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-end justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/40 backdrop-blur-sm text-white hover:bg-ink-950/60 transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-500 mb-2">
                  {lightbox.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-900">
                  {lightbox.title}
                </h3>
                <p className="mt-2 text-ink-500">
                  Printed with premium materials and professional finishing.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
