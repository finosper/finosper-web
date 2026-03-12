import type { Variants, Transition } from "framer-motion";

/* ── Shared transition presets ── */
export const springTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
};

export const easeTransition: Transition = {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
};

export const smoothTransition: Transition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
};

/* ── Component animation variants ── */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: easeTransition },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: easeTransition },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: springTransition },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: smoothTransition },
};

/* ── Page transition ── */
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } },
};

/* ── Nav link hover indicator ── */
export const navIndicator: Variants = {
    rest: { width: 0, opacity: 0 },
    hover: { width: "100%", opacity: 1, transition: { duration: 0.3 } },
};
