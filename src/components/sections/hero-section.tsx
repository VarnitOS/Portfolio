"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { ParallaxEffect } from "@/components/animation/parallax-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse movement for the interactive background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Variants for the staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  
  return (
    <section 
      ref={heroRef}
      className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,var(--tw-gradient-stops))] from-primary/10 via-background to-background"
          style={{
            transform: `translate(${
              (mousePosition.x - 0.5) * -20
            }px, ${
              (mousePosition.y - 0.5) * -20
            }px)`,
          }}
        />
        
        {/* Enhanced animated shapes */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-secondary/5 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        
        {/* New interactive elements */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-primary/10 animate-pulse"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-16 h-16 rounded-full bg-accent/10 animate-bounce"
          style={{
            left: `${(1 - mousePosition.x) * 100}%`,
            top: `${(1 - mousePosition.y) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Subtitle with enhanced animation */}
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-4 text-foreground/70 group"
          >
            <div className="h-px w-8 bg-primary/50 mr-3 group-hover:w-16 transition-all duration-300" />
            <span className="text-sm font-medium tracking-wider group-hover:text-primary transition-colors duration-300">SOFTWARE ENGINEER</span>
          </motion.div>
          
          {/* Name heading with enhanced gradient */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <GradientText 
              text="Varnit Sahu" 
              animateOnScroll={false}
              className="leading-tight hover:animate-glow transition-all duration-300"
            />
          </motion.h1>
          
          {/* Bio text with hover effect */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 hover:text-foreground transition-colors duration-300"
          >
            Computer Science student at the University of Waterloo specializing in AI, machine learning, and scalable systems. 
            Experienced in C++, Python, Go, and full-stack development with Next.js, Unreal Engine, and data pipelines.
          </motion.p>
          
          {/* Education & Contact Summary */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-2 mb-8">
            <div className="flex items-center">
              <span className="w-5 h-5 text-primary mr-2">🎓</span>
              <span className="text-foreground/70">University of Waterloo, Computer Science (Honours, Co-op)</span>
            </div>
            <div className="flex items-center">
              <span className="w-5 h-5 text-primary mr-2">✉️</span>
              <span className="text-foreground/70">vsahu@uwaterloo.ca</span>
            </div>
            <div className="flex items-center">
              <span className="w-5 h-5 text-primary mr-2">📱</span>
              <span className="text-foreground/70">+1 (647) 404-9425</span>
            </div>
          </motion.div>
          
          {/* CTA Buttons with enhanced hover effects */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 animate-pulse"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-xs text-foreground/50 mb-2 hover:text-primary transition-colors duration-300"
          >
            Scroll Down
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-1 hover:border-primary transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-primary animate-pulse"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <ParallaxEffect offset={30} className="absolute right-10 top-1/4 hidden lg:block">
        <div className="w-40 h-40 rounded-full border border-border/30 backdrop-blur-sm hover:border-primary/50 hover:scale-110 transition-all duration-300 animate-float" />
      </ParallaxEffect>
      
      <ParallaxEffect offset={-20} className="absolute left-10 bottom-1/4 hidden lg:block">
        <div className="w-20 h-20 rounded-full border border-border/30 backdrop-blur-sm hover:border-primary/50 hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: "0.5s" }} />
      </ParallaxEffect>
    </section>
  );
} 