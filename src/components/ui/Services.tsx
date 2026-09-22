import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Contact,
  BookOpen,
  FileText,
  Image,
  Flag,
  Mail,
  Package,
  Building2,
  LucideIcon,
  ArrowUpRight,
} from 'lucide-react';
import { services } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  Contact,
  BookOpen,
  FileText,
  Image,
  Flag,
  Mail,
  Package,
  Building2,
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 lg:py-36 bg-gradient-to-b from-[#f5f3ef] to-[#faf9f7]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <motion.span
              variants={staggerItem}
              className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-4"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-ink-900"
            >
              What We Print
            </motion.h2>
          </div>
          <motion.p
            variants={staggerItem}
            className="text-lg text-ink-500 max-w-xs"
          >
            From everyday business essentials to memorable creative pieces.
          </motion.p>
        </motion.div>

        {/* Interactive editorial list + image preview */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col"
          >
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? FileText;
              const isActive = hoveredIndex === i;
              return (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-default"
                >
                  <div
                    className={`relative flex items-center gap-5 sm:gap-8 py-5 sm:py-6 px-4 sm:px-6 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-white shadow-lg shadow-ink-900/5 border border-ink-100'
                        : 'border border-transparent'
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`font-display text-sm font-bold tabular-nums transition-colors duration-500 w-8 shrink-0 ${
                        isActive ? 'text-accent-500' : 'text-ink-300'
                      }`}
                    >
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                        isActive
                          ? 'bg-accent-500 text-white scale-110'
                          : 'bg-ink-50 text-ink-400'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Title + description */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-all duration-500 ${
                          isActive
                            ? 'text-ink-900 translate-x-1'
                            : 'text-ink-700'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm leading-relaxed text-ink-500 mt-1.5 overflow-hidden"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-all duration-500 ${
                        isActive
                          ? 'text-accent-500 opacity-100 translate-x-0'
                          : 'text-ink-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    />
                  </div>

                  {/* Accent line */}
                  <div
                    className={`h-px bg-ink-100 transition-all duration-500 ${
                      isActive ? 'bg-accent-500/30' : ''
                    }`}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Image preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[320px] sm:h-[420px] lg:h-[560px] rounded-3xl overflow-hidden bg-ink-100 hidden lg:block sticky top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex ?? 0}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={services[hoveredIndex ?? 0].image}
                  alt={services[hoveredIndex ?? 0].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-1">
                {hoveredIndex !== null ? `0${hoveredIndex + 1}` : ''}
              </span>
              <p className="font-display text-lg font-bold text-white">
                {services[hoveredIndex ?? 0].title}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
