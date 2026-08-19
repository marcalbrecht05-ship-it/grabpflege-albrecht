import type { Variants } from "motion/react";

/**
 * Bewegungs-Presets nach Grabpflege-Albrecht-Design-System: zurückhaltend,
 * kein Bounce, kein Spring-Überschwinger. 340ms für Panels/Cards, 600ms für
 * Scroll-Reveals (fade + 12px rise statt der generischen 24-40px).
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const panelTransition = { duration: 0.34, ease: [0.32, 0.72, 0.32, 1] };
export const controlTransition = { duration: 0.2, ease: [0.32, 0.72, 0.32, 1] };

// NICHT VERWENDEN: spring/bounce, duration > 0.6s, Offsets > 40px,
// scale-Animationen auf große Elemente, rotate, Endlos-Loops.
