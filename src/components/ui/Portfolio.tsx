import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { portfolioItems, portfolioCategories } from '@/lib/data';
import { staggerContainer, staggerItem, maskReveal } from '@/lib/animations';

const gridSpans = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightbox, setLightbox] = useState<(typeof portfolioItems)[0] | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <motion.span
              variants={staggerItem}
              className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-ink-900"
            >
              Selected Work
            </motion.h2>
          </div>
          <motion.p
            variants={staggerItem}
            className="text-lg text-ink-500 max-w-xs"
          >
            A glimpse of what we've printed for brands, businesses, and events.
          </motion.p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2 mb-10"
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

        {/* Asymmetric grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl bg-ink-900 ${gridSpans[i % gridSpans.length]}`}
              >
                {/* Mask reveal image */}
                <motion.div
                  variants={maskReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent-400 mb-1.5">
                      {item.category}
                    </span>
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
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
            <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
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
              <div className="p-6 sm:p-8">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 mb-2">
                  {lightbox.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">
                  {lightbox.title}
                </h3>
                <p className="mt-2 text-ink-500 leading-relaxed">
                  Printed with premium materials and professional finishing for
                  lasting impact.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
