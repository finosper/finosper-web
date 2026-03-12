"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/config/animations";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.main
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1"
        >
            {children}
        </motion.main>
    );
}
