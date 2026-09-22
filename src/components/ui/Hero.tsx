import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn, staggerContainer, staggerItem } from '@/lib/animations';
import Button from './Button';

const floatingCards = [
  {
    src: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Business cards',
    className: 'top-4 left-2 w-[38%] rotate-[-6deg] z-20',
    delay: 0.8,
    floatClass: 'animate-float',
  },
  {
    src: 'https://images.pexels.com/photos/36682054/pexels-photo-36682054.jpeg?auto=compress&cs=tinysrgb&h=420&w=520',
    alt: 'Brochure design',
    className: 'top-0 right-0 w-[40%] rotate-[4deg] z-30',
    delay: 1.0,
    floatClass: 'animate-float-slow',
  },
  {
    src: 'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&h=380&w=500',
    alt: 'Printing press',
    className: 'bottom-0 left-6 w-[44%] rotate-[-2deg] z-10',
    delay: 1.2,
    floatClass: 'animate-float',
  },
  {
    src: 'https://images.pexels.com/photos/26611769/pexels-photo-26611769.jpeg?auto=compress&cs=tinysrgb&h=380&w=480',
    alt: 'Product packaging',
    className: 'bottom-4 right-4 w-[36%] rotate-[5deg] z-20',
    delay: 1.4,
    floatClass: 'animate-float-slow',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f7] via-[#f5f3ef] to-[#efece6]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-ink-900/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-ink-100 px-4 py-1.5 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm font-medium text-ink-600">
                Professional Printing Studio
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-ink-900 text-balance"
            >
              Your Ideas.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Printed</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/25 -z-0" />
              </span>{' '}
              Beautifully.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-md text-lg leading-relaxed text-ink-500"
            >
              From business essentials to creative print materials, GK Printers
              delivers professional printing with precision, quality, and care.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#portfolio" variant="secondary" size="lg">
                Explore Our Work
              </Button>
              <Button href="#contact" variant="outline" size="lg" withArrow>
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-ink-900">
                  8+
                </span>
                <span className="text-sm text-ink-400">Print Services</span>
              </div>
              <div className="h-10 w-px bg-ink-200" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-ink-900">
                  Custom
                </span>
                <span className="text-sm text-ink-400">Finishing Options</span>
              </div>
              <div className="h-10 w-px bg-ink-200" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-ink-900">
                  On Time
                </span>
                <span className="text-sm text-ink-400">Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — visual composition */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative h-[420px] sm:h-[500px] lg:h-[560px] hidden sm:block"
          >
            {/* Background card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="absolute inset-4 rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/6620972/pexels-photo-6620972.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Printing studio"
                className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-900/20 to-transparent" />
            </motion.div>

            {/* Floating print material cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${card.className}`}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/30 ring-1 ring-white/20 ${card.floatClass}`}
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}

            {/* Accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            >
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent-500 text-white shadow-xl shadow-accent-500/40">
                <span className="font-display text-xl font-bold text-center leading-none">
                  GK
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-ink-400 tracking-widest uppercase">
          Scroll
        </span>
        <div className="h-10 w-6 rounded-full border-2 border-ink-300 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
