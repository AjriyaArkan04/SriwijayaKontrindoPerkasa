"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type CountStatProps = {
  value: number;
  prefix?: string; // e.g. "-+ " to mark an approximate figure
  suffix?: string;
  label: string;
  className?: string;
};

/**
 * Animated count-up for factual figures pulled from the company profile.
 * Approximate figures must be passed with prefix="-+ " so the distinction
 * between exact and approximate numbers stays visible on screen.
 */
export function CountStat({ value, prefix = "", suffix = "", label, className }: CountStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, shouldReduceMotion]);

  // For reduced-motion users, skip the count-up entirely and show the
  // final value as soon as the stat scrolls into view.
  const shownValue = shouldReduceMotion ? (inView ? value : 0) : display;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-5xl font-800 tabular-nums text-white md:text-6xl">
        {prefix}
        {shownValue}
        {suffix}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
        {label}
      </div>
    </motion.div>
  );
}
