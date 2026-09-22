import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function VisualBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="https://images.pexels.com/photos/6620997/pexels-photo-6620997.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Close-up of printing press detail"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink-950/55" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h2
          style={{ y: textY }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.02em] text-white text-center text-balance px-4"
        >
          Good design deserves good print.
        </motion.h2>
      </div>
    </section>
  );
}
