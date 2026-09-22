import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import Button from './Button';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative rounded-3xl bg-ink-950 overflow-hidden px-6 py-16 sm:px-12 lg:px-20 lg:py-24 text-center"
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 -z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -left-20 h-72 w-72 rounded-full border border-accent-500/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full border border-accent-500/10"
            />
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-accent-500/5 blur-3xl"
            />
          </div>

          <motion.div variants={staggerItem} className="relative z-10">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-400 mb-4">
              Let's Print Together
            </span>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="relative z-10 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance"
          >
            Have Something to Print?
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="relative z-10 mt-5 max-w-xl mx-auto text-lg text-ink-300"
          >
            Let's turn your idea into something people can hold, see, and
            remember.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="#contact" variant="primary" size="lg" withArrow>
              Get a Quote
            </Button>
            <Button
              href="#contact"
              size="lg"
              className="border border-white/20 text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
