/**
 * FON Motion Presets
 * Centralized animation tokens for consistency across the platform.
 */

import type { Variants, Transition } from 'framer-motion';

// ─── Easing curves ────────────────────────────────────────────────
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// ─── Reusable transitions ─────────────────────────────────────────
export const transitions: Record<string, Transition> = {
  smooth: { duration: 0.8, ease: ease.out },
  slow: { duration: 1.2, ease: ease.out },
  fast: { duration: 0.4, ease: ease.out },
  stagger: { staggerChildren: 0.1, delayChildren: 0.2 },
};

// ─── Fade-up variant (most common) ────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.out },
  },
};

// ─── Fade in ──────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: ease.out } },
};

// ─── Slide in from left ───────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: ease.out } },
};

// ─── Scale in ─────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: ease.out } },
};

// ─── Stagger container ────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ─── Hero headline reveal (per word) ──────────────────────────────
export const heroLine: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: 0.3 + i * 0.15, ease: ease.out },
  }),
};

// ─── Underline reveal ─────────────────────────────────────────────
export const underlineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.6, delay: 1.4, ease: ease.out } },
};

// ─── Viewport defaults ────────────────────────────────────────────
export const viewport = { once: true, margin: '-50px' } as const;
