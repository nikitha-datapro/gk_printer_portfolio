import { motion } from 'framer-motion';
import {
  Layers,
  Sparkles,
  Ruler,
  HeartHandshake,
  LucideIcon,
} from 'lucide-react';
import { features } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Sparkles,
  Ruler,
  HeartHandshake,
};

export default function WhyGK() {
  return (
    <section className="relative py-24 lg:py-36 bg-ink-950 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-500/3 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-20"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-5"
          >
            Why Us
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-6xl font-bold tracking-[-0.02em] text-white text-balance leading-[1.05]"
          >
            Made With Attention to Detail.
          </motion.h2>
        </motion.div>

        {/* Editorial feature layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0"
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Layers;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group relative flex items-start gap-6 py-10 border-t border-ink-800 last:border-b lg:last:border-b-0 lg:[&:nth-last-child(-n+1)]:border-b-0"
              >
                {/* Large number */}
                <span className="font-display text-5xl lg:text-6xl font-bold text-ink-800 tabular-nums leading-none shrink-0 transition-colors duration-500 group-hover:text-accent-500/40">
                  0{i + 1}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-accent-500" />
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-ink-400 max-w-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
