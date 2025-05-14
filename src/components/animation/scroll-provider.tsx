"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollContextProps {
  isExploding: boolean;
  startExplosion: () => void;
}

const ScrollContext = createContext<ScrollContextProps>({
  isExploding: false,
  startExplosion: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [isExploding, setIsExploding] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [originalScrollBehavior, setOriginalScrollBehavior] = useState('');
  
  // Start explosion animation
  const startExplosion = useCallback(() => {
    if (!isExploding && !isShaking) {
      setIsShaking(true);
      
      // Slow down scrolling
      setOriginalScrollBehavior(document.documentElement.style.scrollBehavior);
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Set timer for explosion
      setTimeout(() => {
        setIsShaking(false);
        setIsExploding(true);
        
        // Reset after explosion
        setTimeout(() => {
          setIsExploding(false);
          document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 500);
      }, 5000); // Shake for 5 seconds
    }
  }, [isExploding, isShaking, originalScrollBehavior]);
  
  // Handle mouse events during scroll
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0 && window.scrollY > 0) { // Left click and scrolling
        setMouseDown(true);
      }
    };
    
    const handleMouseUp = () => {
      setMouseDown(false);
    };
    
    const handleScroll = () => {
      if (mouseDown) {
        startExplosion();
      }
    };
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseDown, startExplosion]);
  
  return (
    <ScrollContext.Provider value={{ isExploding, startExplosion }}>
      <div className={isShaking ? 'animate-shake' : ''}>
        {children}
      </div>
      
      <AnimatePresence>
        {isExploding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <div className="absolute inset-0 bg-primary/10 animate-explosion" />
            <div className="absolute inset-0 bg-primary/20 animate-explosion" style={{ animationDelay: '0.1s' }} />
            <div className="absolute inset-0 bg-accent/10 animate-explosion" style={{ animationDelay: '0.2s' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollContext.Provider>
  );
} 