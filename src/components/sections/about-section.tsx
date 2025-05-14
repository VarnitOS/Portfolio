"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { ParallaxEffect } from "@/components/animation/parallax-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Threads from "@/components/animation/Threads";

export function AboutSection() {
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
  
  // Interest icons/activities
  const interests = [
    { name: "Poker", icon: "♠️" },
    { name: "Gaming", icon: "🎮" },
    { name: "F1", icon: "🏎️" },
    { name: "Table Tennis", icon: "🏓" },
    { name: "Volunteering", icon: "👥" },
  ];
  
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background with threads */}
      <div className="absolute inset-0 -z-20">
        <Threads 
          color={[0.2, 0.4, 0.8]} 
          amplitude={1.2} 
          distance={0.8} 
          enableMouseInteraction={true} 
        />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_30%_30%,var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
        
        {/* Decorative blobs with increased opacity for visibility */}
        <div className="absolute top-20 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl opacity-70" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl opacity-70" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Image placeholder with animated border */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl">VS</div>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 -m-3 animate-float" style={{ animationDelay: "0.2s" }} />
              <div className="absolute inset-0 rounded-2xl border-2 border-secondary/10 m-3 animate-float" style={{ animationDelay: "0.4s" }} />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-secondary/10 -z-10" />
            </div>
          </motion.div>
          
          {/* Text column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ textShadow: '0 6px 32px rgba(255, 200, 100, 0.25), 0 2px 0 #fff, 0 1.5px 0 #ffe9b0' }}>
                <GradientText 
                  text="About Me" 
                  className="inline-block"
                  gradientClassName="bg-gradient-to-r from-yellow-200 via-white to-yellow-100 bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
                />
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 text-gray-100 text-lg md:text-2xl leading-relaxed" style={{ textShadow: '0 4px 24px rgba(255, 200, 100, 0.18), 0 1.5px 0 #fff, 0 1px 0 #ffe9b0' }}>
              <p>
                I'm a Computer Science student at the University of Waterloo with a passion for solving complex problems through elegant code. 
                My journey in tech began with curiosity about how computer systems work, which led me to explore everything from low-level 
                system programming to modern web development.
              </p>
              
              <p>
                With strong foundations in C/C++, Python, and Go, I enjoy working on projects that challenge conventional thinking 
                and push technical boundaries. I'm particularly interested in systems programming, game engine development, and creating 
                innovative financial technology solutions.
              </p>
              
              <p>
                My goal is to revolutionize the Canadian banking sector by applying game theory concepts and creating more 
                equitable financial systems. I believe technology should empower people, and I'm committed to building tools 
                that make a positive difference.
              </p>
            </motion.div>
            
            {/* Interests section */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Beyond Coding</h3>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                    className={cn(
                      "px-4 py-2 rounded-full bg-card border border-border",
                      "flex items-center gap-2 text-sm"
                    )}
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span>{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <ParallaxEffect offset={20} className="absolute left-10 bottom-1/4 hidden lg:block">
        <div className="w-16 h-16 rounded-lg border border-border/30 backdrop-blur-sm" />
      </ParallaxEffect>
    </section>
  );
} 