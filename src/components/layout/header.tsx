"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Handle scroll events to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50"
          : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/#" className="text-xl font-bold relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <span className="text-primary font-mono">VS</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full transform origin-left" />
          </motion.div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item, i) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeSection === item.href.replace("#", "") 
                  ? "text-primary" 
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {item.name}
              </motion.span>
              
              {activeSection === item.href.replace("#", "") && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <MobileMenu navItems={navItems} activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
}

function MobileMenu({ navItems, activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="relative flex items-center justify-center">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="absolute block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="absolute block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="absolute block h-0.5 w-6 bg-foreground"
          />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-medium transition-colors relative",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    {item.name}
                    
                    {activeSection === item.href.replace("#", "") && (
                      <motion.span
                        layoutId="activeMobileSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 