import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import Button from './Button';

const heroCards = [
  {
    src: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    alt: 'Business cards',
    className: 'top-[2%] left-[4%] w-[30%] sm:w-[32%] rotate-[-8deg] z-30',
    delay: 0.7,
  },
  {
    src: 'https://images.pexels.com/photos/36682054/pexels-photo-36682054.jpeg?auto=compress&cs=tinysrgb&h=520&w=440',
    alt: 'Brochure design',
    className: 'top-[8%] right-[2%] w-[34%] sm:w-[36%] rotate-[5deg] z-20',
    delay: 0.85,
  },
  {
    src: 'https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg?auto=compress&cs=tinysrgb&h=600&w=480',
    alt: 'Printing press detail',
    className: 'bottom-[2%] left-[12%] w-[40%] sm:w-[38%] rotate-[-3deg] z-10',
    delay: 1.0,
  },
  {
    src: 'https://images.pexels.com/photos/26611769/pexels-photo-26611769.jpeg?auto=compress&cs=tinysrgb&h=440&w=360',
    alt: 'Product packaging',
    className: 'bottom-[6%] right-[8%] w-[28%] sm:w-[30%] rotate-[6deg] z-20',
    delay: 1.15,
  },
  {
    src: 'https://images.pexels.com/photos/8559014/pexels-photo-8559014.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
    alt: 'Colored paper stack',
    className: 'top-[38%] left-[2%] w-[24%] sm:w-[22%] rotate-[3deg] z-15',
    delay: 1.3,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f7] via-[#f5f3ef] to-[#efece6]" />
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/8 blur-[100px]" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-ink-900/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/70 border border-ink-100 px-4 py-1.5 mb-7"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm font-medium text-ink-600">
                Professional Printing Studio
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-display text-[3.5rem] sm:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-bold leading-[0.98] tracking-[-0.03em] text-ink-900 text-balance"
            >
              Your Ideas.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Printed</span>
                <span className="absolute inset-x-[-4px] bottom-2 h-4 bg-accent-500/20 -z-0 sm:bottom-3" />
              </span>{' '}
              Beautifully.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-7 max-w-md text-lg leading-relaxed text-ink-500"
            >
              Professional printing crafted with precision, creativity, and
              attention to every detail.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#contact" variant="primary" size="lg" withArrow>
                Get a Quote
              </Button>
              <Button href="#portfolio" variant="outline" size="lg" withArrow>
                Explore Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — art-directed visual composition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative h-[380px] sm:h-[480px] lg:h-[580px] hidden sm:block"
          >
            {/* Background dark card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950 overflow-hidden shadow-2xl shadow-ink-900/40"
            >
              <img
                src="https://images.pexels.com/photos/6620997/pexels-photo-6620997.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Printing press"
                className="h-full w-full object-cover opacity-50 mix-blend-luminosity"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xs uppercase tracking-[0.25em] text-accent-400 mb-1">
                  Precision Print
                </p>
                <p className="text-sm text-ink-200 leading-relaxed">
                  Every layer crafted with intention.
                </p>
              </div>
            </motion.div>

            {/* Floating print material cards */}
            {heroCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 40, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${card.className}`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: card.delay,
                  }}
                  className="relative rounded-xl overflow-hidden shadow-2xl shadow-ink-900/30 ring-1 ring-white/15"
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* GK badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            >
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent-500 text-white shadow-xl shadow-accent-500/40 ring-4 ring-white/20">
                <span className="font-display text-base sm:text-lg font-bold leading-none">
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] font-medium text-ink-400 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="h-9 w-5 rounded-full border border-ink-300 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
