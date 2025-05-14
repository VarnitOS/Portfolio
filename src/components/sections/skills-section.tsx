"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  
  // Add state for client-side particles
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  
  // Add useEffect to generate particles only on client side
  useEffect(() => {
    const newParticles = [...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-white/10" 
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          opacity: Math.random() * 0.5,
          animation: `float ${Math.random() * 8 + 4}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      />
    ));
    setParticles(newParticles);
  }, []);
  
  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories(prev => 
      prev.includes(categoryIndex)
        ? prev.filter(i => i !== categoryIndex)
        : [...prev, categoryIndex]
    );
  };

  const getCategoryDescription = (categoryName: string) => {
    switch(categoryName) {
      case "Languages":
        return "Proficient in a diverse range of programming languages for systems, web, and data analysis";
      case "Frameworks":
        return "Experience with powerful frameworks that accelerate development and enhance performance";
      case "Developer Tools":
        return "Expertise with industry-standard tools for efficient development and deployment workflows";
      case "Libraries & APIs":
        return "Leveraging specialized libraries and APIs for data science, visualization, and integration";
      case "Technologies":
        return "Command of cutting-edge technologies spanning web, AI, and enterprise applications";
      case "Certificates":
        return "Industry-recognized credentials validating expertise in specialized domains";
      default:
        return "";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-indigo-950/30 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,var(--tw-gradient-stops))] from-primary/40 via-purple-900/10 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZ2NmgtNnYtNmgtNnYtNmg2di02aDZ2Nmg2eiIvPjwvZz48L2c+PC9zdmc+')]" />
        
        {/* Animated blobs and elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-blob opacity-70" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: "4s" }} />
          <div className="absolute top-3/4 left-1/3 w-56 h-56 bg-accent/30 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: "6s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: "8s" }} />
        </div>
        
        {/* Animated particles - modified to use client-side only rendering */}
        <div className="absolute inset-0 overflow-hidden">
          {particles}
        </div>
      </div>
      
      {/* Subtle moving light effect */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full blur-3xl opacity-30" style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white filter drop-shadow-lg">
            <GradientText 
              text="Technical Expertise" 
              className="inline-block hover:animate-glow transition-all duration-300"
              gradientClassName="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
            />
          </h2>
          <p className="text-gray-200 md:text-lg transition-colors duration-300 max-w-2xl mx-auto mb-6">
            Leveraging cutting-edge technologies to build scalable, innovative solutions across multiple domains—from systems programming to AI and web development.
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
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full bg-gradient-to-br from-gray-900/90 to-gray-800/80">
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC02djZoLTZ2LTZoLTZ2LTZoNnYtNmg2djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                </div>
                
                {/* Category pill badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-full border border-primary/40 shadow-lg shadow-primary/10">
                  <h3 className="text-sm font-semibold text-center text-white">
                    {category.name}
                  </h3>
                </div>
                
                {/* Add category description */}
                <div className="relative z-10 mt-4">
                  <p className="text-xs text-gray-300 mb-3 italic">
                    {getCategoryDescription(category.name)}
                  </p>
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
                          <span className="text-sm text-gray-100 font-medium hover:text-primary transition-colors">{skill.name}</span>
                        </motion.div>
                      ))}
                  </div>
                  
                  {category.skills.length > skillDisplayLimit && (
                    <motion.button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="text-xs font-semibold text-primary mt-4 hover:text-white hover:underline focus:outline-none w-full text-center px-3 py-2 rounded-lg hover:bg-primary/30 transition-all duration-200"
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

        {/* Floating elements */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border border-primary/30 backdrop-blur-sm"
          />
        </div>
        <div className="absolute bottom-20 left-20 hidden lg:block">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border border-accent/30 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
} 