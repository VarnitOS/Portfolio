"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxEffect({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Initialize with a default transform
  const initial = elementTop - clientHeight;
  const final = elementTop + offset;
  
  const yRange = useTransform(
    scrollY,
    [initial, final],
    [offset, -offset]
  );
  
  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element) {
        setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
        setClientHeight(window.innerHeight);
      }
    };
    
    onResize();
    window.addEventListener("resize", onResize);
    
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y: yRange }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 