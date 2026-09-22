import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#faf9f7] to-[#f5f3ef]"
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
            How It Works
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900"
          >
            From Idea to Print
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border border-ink-100 shadow-md text-ink-900 transition-all duration-500 hover:border-accent-500 hover:shadow-accent-500/20">
                  <span className="font-display text-3xl font-bold">
                    {step.number}
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 flex h-5 w-5">
                  <span className="absolute h-5 w-5 rounded-full bg-accent-500/30 animate-ping" />
                  <span className="relative h-5 w-5 rounded-full bg-accent-500" />
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500 max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
