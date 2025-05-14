"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Skill data organized by category
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 95 },
      { name: "Python", level: 85 },
      { name: "Go", level: 80 },
      { name: "Rust", level: 75 },
      { name: "Java", level: 70 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    name: "Technologies",
    skills: [
      { name: "Full Stack", level: 85 },
      { name: "Web Development", level: 80 },
      { name: "Game Engines", level: 85 },
      { name: "OS Development", level: 75 },
      { name: "Agentic AI", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "SEO", level: 70 },
    ],
  },
  {
    name: "Core Skills",
    skills: [
      { name: "Debugging", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Algorithm Design", level: 85 },
      { name: "System Architecture", level: 80 },
      { name: "Team Collaboration", level: 85 },
    ],
  },
];

export function SkillsSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/90">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_60%_60%,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        {/* New animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText 
              text="My Skills" 
              className="inline-block hover:animate-glow transition-all duration-300"
              gradientClassName="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
            />
          </h2>
          <p className="text-foreground/70 md:text-lg hover:text-foreground transition-colors duration-300">
            A collection of technologies and skills I've acquired throughout my journey.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 mx-auto text-primary group-hover:animate-bounce">
                    {/* Placeholder for category icon */}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New floating elements */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border border-primary/20 backdrop-blur-sm"
          />
        </div>
        <div className="absolute bottom-20 left-20 hidden lg:block">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border border-accent/20 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
} 