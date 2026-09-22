import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem } from '@/lib/animations';

const highlights = ['Quality Focus', 'Creative Solutions', 'Reliable Service'];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — statement */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-500 mb-4">
              About GK Printers
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-900 text-balance">
              Print that makes an{' '}
              <span className="relative inline-block">
                <span className="relative z-10">impression.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-accent-500/25 -z-0" />
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
            <p className="text-lg leading-relaxed text-ink-500">
              GK Printers combines quality materials, modern printing techniques,
              and attention to detail to create print products that represent
              your brand beautifully. From the first proof to final delivery,
              we treat every project with the same care and commitment.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-col gap-3"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500/10">
                    <Check className="h-4 w-4 text-accent-500" />
                  </span>
                  <span className="text-base font-medium text-ink-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Small visual element */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink-100 shadow-sm"
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
                  Business, marketing, events & packaging
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
