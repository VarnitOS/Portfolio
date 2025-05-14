"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Experience data
const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Tech Company A",
    period: "May 2023 - Aug 2023",
    description:
      "Developed and maintained backend services using C++ and Go. Improved system performance by 30% by optimizing database queries and implementing efficient caching mechanisms.",
    skills: ["C++", "Go", "Database Optimization", "RESTful APIs"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Tech Company B",
    period: "Jan 2023 - Apr 2023",
    description:
      "Created responsive web applications using React and TypeScript. Implemented RESTful APIs and integrated with third-party services to enhance application functionality.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "REST APIs"],
  },
  {
    id: 3,
    role: "Research Assistant",
    company: "University of Waterloo",
    period: "Sep 2022 - Dec 2022",
    description:
      "Conducted research on compiler optimization techniques. Implemented experimental algorithms to improve code generation for modern CPU architectures.",
    skills: ["C", "Python", "Compiler Design", "Algorithm Design"],
  },
  {
    id: 4,
    role: "Game Development Intern",
    company: "Game Studio",
    period: "May 2022 - Aug 2022",
    description:
      "Contributed to the development of a game engine using C++ and OpenGL. Implemented physics systems and optimized rendering pipelines for better performance.",
    skills: ["C++", "OpenGL", "Game Physics", "Performance Optimization"],
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  
  // Scroll based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.3, 1, 1, 0.3]);
  
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={titleVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText 
              text="Work Experience" 
              className="inline-block"
              gradientClassName="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
            />
          </motion.h2>
          <motion.p variants={titleVariants} className="text-foreground/70 md:text-lg">
            My professional journey in the tech industry.
          </motion.p>
        </motion.div>
        
        {/* Timeline */}
        <div 
          ref={containerRef} 
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border" />
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={cn(
                "relative mb-12 md:mb-0 pb-12",
                "flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Date bubble */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-primary/30 z-10 flex items-center justify-center">
                <span className="text-sm font-bold">{exp.id}</span>
              </div>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "w-full md:w-[calc(50%-2rem)] px-8 py-6",
                  "rounded-2xl bg-card/60 backdrop-blur-sm border border-border/80",
                  "shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20",
                  "md:ml-8 md:mr-0",
                  index % 2 === 0 ? "md:ml-0 md:mr-8" : ""
                )}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-1 text-primary">{exp.role}</h3>
                  <p className="text-sm text-foreground/70 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-sm mb-4">{exp.description}</p>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 