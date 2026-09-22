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

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-4"
          >
            Why Us
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 text-balance"
          >
            Why Choose GK Printers?
          </motion.h2>
        </motion.div>

        {/* Feature blocks */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Layers;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl bg-gradient-to-br from-ink-50 to-white border border-ink-100 p-7 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent-500/5 group-hover:bg-accent-500/10 transition-all duration-700" />

                <div className="relative">
                  <div className="mb-5">
                    <Icon className="h-8 w-8 text-accent-500 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
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
