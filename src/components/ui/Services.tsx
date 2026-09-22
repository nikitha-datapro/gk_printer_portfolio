import { motion } from 'framer-motion';
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
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#f5f3ef] to-[#faf9f7]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 text-balance"
          >
            What We Print
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-lg text-ink-500"
          >
            A complete range of professional printing services for every need.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? FileText;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl bg-white border border-ink-100 p-6 overflow-hidden cursor-default"
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-50 text-ink-700 transition-all duration-500 group-hover:bg-accent-500 group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink-400 transition-colors duration-300 group-hover:text-accent-500">
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-accent-500/0 group-hover:bg-accent-500/5 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
