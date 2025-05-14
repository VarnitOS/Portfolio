"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface GradientTextProps {
  text: string;
  className?: string;
  gradientClassName?: string;
  animateOnScroll?: boolean;
}

export function GradientText({
  text,
  className,
  gradientClassName,
  animateOnScroll = true,
}: GradientTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  // For scroll-based animation
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  
  // Transform values based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );
  
  // Split text into characters for individual animation
  const characters = text.split("");
  
  // Default gradient class if none provided
  const defaultGradientClass = "bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]";
  
  return (
    <motion.div
      ref={textRef}
      style={animateOnScroll ? { opacity } : {}}
      className={cn("relative inline-block", className)}
    >
      <span className={cn(defaultGradientClass, gradientClassName)}>
        {characters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ y: animateOnScroll ? 20 : 0, opacity: animateOnScroll ? 0 : 1 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                delay: i * 0.03, 
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1]
              } 
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
} 