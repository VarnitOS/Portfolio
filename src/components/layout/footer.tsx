"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "GitHub", href: "https://github.com/VarnitOS", external: true },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };
  
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-border/50 py-8 md:py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-50 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center pb-8 mb-8 border-b border-border/30">
            {/* Logo */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-0">
              <Link href="/#" className="text-2xl font-bold relative">
                <span className="text-primary font-mono">VS</span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transform origin-left" />
              </Link>
            </motion.div>
            
            {/* Navigation */}
            <motion.nav variants={itemVariants} className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <motion.p variants={itemVariants}>
              © {currentYear} Varnit Sahu. All rights reserved.
            </motion.p>
            
            <motion.p variants={itemVariants} className="mt-4 md:mt-0">
              Made with 
              <span className="px-1.5 text-red-500">❤</span>
              in Waterloo, Canada
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 