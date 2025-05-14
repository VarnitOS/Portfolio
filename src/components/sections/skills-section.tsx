"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

// Skill data organized by category
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C/C++", level: 95 },
      { name: "Go", level: 85 },
      { name: "Rust", level: 80 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Bash", level: 80 },
      { name: "R", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 85 },
      { name: "Ruby", level: 70 },
      { name: "WebAssembly", level: 75 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "libuv", level: 70 },
      { name: "Linux Kernel Modules", level: 75 },
      { name: "Pthreads", level: 80 },
      { name: "Valgrind", level: 85 },
      { name: "Next.js", level: 90 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Google Cloud", level: 80 },
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "Visual Studio", level: 85 },
      { name: "Cursor", level: 90 },
      { name: "Jest", level: 75 },
      { name: "JUnit", level: 70 },
    ],
  },
  {
    name: "Libraries & APIs",
    skills: [
      { name: "pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "PyTorch", level: 85 },
      { name: "XGBoost", level: 80 },
      { name: "Plotly", level: 75 },
      { name: "Apache", level: 80 },
      { name: "OpenAI API", level: 90 },
    ],
  },
  {
    name: "Technologies",
    skills: [
      { name: "Full Stack", level: 90 },
      { name: "Web Development", level: 85 },
      { name: "Machine Learning", level: 85 },
      { name: "Agentic AI", level: 90 },
      { name: "Game Engines", level: 75 },
      { name: "Unreal Engine", level: 70 },
      { name: "Data Pipelines", level: 85 },
      { name: "Apache Kafka", level: 80 },
      { name: "AWS SageMaker", level: 75 },
      { name: "ETL Processes", level: 85 },
    ],
  },
  {
    name: "Certificates",
    skills: [
      { name: "Stanford - Advanced Learning Algorithms", level: 100 },
      { name: "UC Davis - SEO Specialization", level: 100 },
      { name: "Stanford - Game Theory", level: 100 },
      { name: "PwC - Data Analysis & Excel", level: 100 },
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
  
  // State for expanded categories
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const skillDisplayLimit = 5;
  
  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories(prev => 
      prev.includes(categoryIndex)
        ? prev.filter(i => i !== categoryIndex)
        : [...prev, categoryIndex]
    );
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-gray-900/80 to-background/90">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_60%_60%,var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        {/* New animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <GradientText 
              text="My Skills" 
              className="inline-block hover:animate-glow transition-all duration-300"
              gradientClassName="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
            />
          </h2>
          <p className="text-white md:text-lg transition-colors duration-300">
            A collection of technologies and skills I've acquired throughout my journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Category pill badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gray-900/90 rounded-full border border-primary/30 shadow-lg">
                  <h3 className="text-sm font-semibold text-center text-white">
                    {category.name}
                  </h3>
                </div>
                
                <div className="relative z-10 mt-4">
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {category.skills
                      .slice(0, expandedCategories.includes(categoryIndex) ? category.skills.length : skillDisplayLimit)
                      .map((skill, index) => (
                        <motion.div 
                          key={index} 
                          className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <span className="text-sm text-white font-medium hover:text-primary transition-colors">{skill.name}</span>
                        </motion.div>
                      ))}
                  </div>
                  
                  {category.skills.length > skillDisplayLimit && (
                    <motion.button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="text-xs font-semibold text-primary mt-4 hover:text-white hover:underline focus:outline-none w-full text-center px-3 py-2 rounded-lg hover:bg-primary/20 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedCategories.includes(categoryIndex) ? "Show less ↑" : `Show all ${category.skills.length} skills ↓`}
                    </motion.button>
                  )}
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