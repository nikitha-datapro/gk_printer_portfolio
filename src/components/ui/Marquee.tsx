import { motion } from 'framer-motion';

const marqueeItems = ['Print', 'Design', 'Create', 'Deliver', 'Print', 'Design', 'Create', 'Deliver'];

export default function Marquee() {
  return (
    <div className="relative bg-ink-950 py-5 overflow-hidden border-y border-ink-800/50">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.15em] text-ink-300">
              {item}
            </span>
            <span className="mx-6 sm:mx-10 text-accent-500 text-xl sm:text-2xl">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
