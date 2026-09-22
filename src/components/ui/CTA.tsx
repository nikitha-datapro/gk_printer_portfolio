import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
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
          className="relative rounded-[2rem] bg-ink-950 overflow-hidden px-6 py-20 sm:px-12 lg:px-24 lg:py-28 text-center"
        >
          {/* Paper-like animated shapes */}
          <div className="absolute inset-0 -z-0 overflow-hidden">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, i % 2 === 0 ? 3 : -3, 0],
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
                className="absolute rounded-lg border border-white/5"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${80 + i * 20}px`,
                  left: `${10 + i * 18}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  backgroundColor: `rgba(255,255,255,${0.02 - i * 0.002})`,
                }}
              />
            ))}
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
            <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-accent-500/5 blur-3xl" />
          </div>

          <motion.div variants={staggerItem} className="relative z-10">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-400 mb-5">
              Let's Print Together
            </span>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="relative z-10 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-white text-balance leading-[1.05]"
          >
            Have Something to Print?
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="relative z-10 mt-6 max-w-xl mx-auto text-lg text-ink-300 leading-relaxed"
          >
            Let's turn your idea into something people can hold, see, and
            remember.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
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
