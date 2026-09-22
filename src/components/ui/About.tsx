import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem } from '@/lib/animations';

const highlights = ['Quality Focus', 'Creative Solutions', 'Reliable Service'];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
          {/* Left — large editorial statement */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-5">
              About GK Printers
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-ink-900 text-balance">
              Print that makes an{' '}
              <span className="relative inline-block">
                <span className="relative z-10">impression.</span>
                <span className="absolute inset-x-[-2px] bottom-1 h-3 sm:h-4 bg-accent-500/20 -z-0" />
              </span>
            </h2>
          </motion.div>

          {/* Right — description + highlights */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-xl leading-relaxed text-ink-600 font-light">
              GK Printers combines quality materials, modern printing
              techniques, and attention to detail to create print products
              that represent your brand beautifully.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-1"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="group flex items-center gap-4 py-4 border-b border-ink-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/10 transition-all duration-300 group-hover:bg-accent-500">
                    <Check className="h-4 w-4 text-accent-500 transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <span className="text-lg font-medium text-ink-800 transition-colors duration-300 group-hover:text-ink-900">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual element */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-white to-ink-50/50 border border-ink-100 shadow-sm"
            >
              <div className="flex -space-x-3">
                {[
                  'https://images.pexels.com/photos/9878725/pexels-photo-9878725.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
                  'https://images.pexels.com/photos/36682054/pexels-photo-36682054.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
                  'https://images.pexels.com/photos/26611769/pexels-photo-26611769.jpeg?auto=compress&cs=tinysrgb&h=100&w=100',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-xl overflow-hidden ring-2 ring-white shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`Print sample ${i + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  Diverse print portfolio
                </p>
                <p className="text-sm text-ink-400">
                  Business, marketing, events &amp; packaging
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
