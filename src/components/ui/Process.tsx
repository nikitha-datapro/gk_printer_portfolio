import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      className="relative py-24 lg:py-36 bg-gradient-to-b from-[#faf9f7] to-[#f5f3ef]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-ink-900"
          >
            From Idea to Print
          </motion.h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Base line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-ink-200" />
            {/* Animated progress line */}
            <motion.div
              style={{ scaleX: lineScale }}
              className="absolute top-10 left-[10%] right-[10%] h-px bg-accent-500 origin-left"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-4 gap-4"
            >
              {processSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="relative flex flex-col items-center text-center pt-0"
                >
                  <div className="relative mb-8 z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-ink-100 shadow-md text-ink-900 transition-all duration-500 hover:border-accent-500 hover:shadow-lg hover:shadow-accent-500/15">
                      <span className="font-display text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500 max-w-[240px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden relative pl-10">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-200" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute left-5 top-2 bottom-2 w-px bg-accent-500 origin-top"
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-8"
            >
              {processSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="relative"
                >
                  <div className="absolute -left-[34px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-ink-100 shadow-sm z-10">
                    <span className="font-display text-xs font-bold text-accent-500">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
