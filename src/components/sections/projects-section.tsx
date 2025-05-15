"use client";

import { GradientText } from "@/components/animation/gradient-text";
import { ParallaxEffect } from "@/components/animation/parallax-effect";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "OneScroll",
    description: "A modern social media aggregator that unifies all your social feeds into one seamless scrolling experience. Stop app-hopping and start enjoying your content in one place.",
    tags: ["React Native", "TypeScript", "Supabase", "Expo", "Mobile Development"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/OneScroll",
    demo: "https://onescroll.demo.dev",
    features: [
      "Unified social media feed",
      "Smart timeline across platforms",
      "Real-time notifications",
      "Cross-platform support"
    ]
  },
  {
    id: 2,
    title: "AdOpt",
    description: "A sophisticated real-time bidding (RTB) optimization platform that uses game theory principles to optimize advertising campaigns and maximize ROI.",
    tags: ["Java", "Spring Boot", "Next.js", "TypeScript", "Game Theory"],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/AdOpt",
    demo: "https://adopt.demo.dev",
    features: [
      "Game theory-based optimization",
      "Real-time bidding",
      "Competitor analysis",
      "Machine learning predictions"
    ]
  },
  {
    id: 3,
    title: "FluxStonks",
    description: "A real-time stock market analysis and trading platform with advanced visualization and prediction capabilities.",
    tags: ["Python", "React", "TypeScript", "Machine Learning", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/FluxStonks",
    demo: "https://fluxstonks.demo.dev",
    features: [
      "Real-time market data",
      "Advanced analytics",
      "ML-powered predictions",
      "Interactive charts"
    ]
  },
  {
    id: 4,
    title: "NetVigil",
    description: "A comprehensive network monitoring and security tool that provides real-time insights into network performance and potential security threats.",
    tags: ["C++", "Python", "Network Security", "System Monitoring"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/NetVigil",
    demo: "https://netvigil.demo.dev",
    features: [
      "Real-time network monitoring",
      "Threat detection algorithms",
      "Performance analytics",
      "Security alerts and reporting"
    ]
  },
  {
    id: 5,
    title: "DisasterFirstResponder",
    description: "An emergency response coordination platform designed to help first responders during natural disasters and crisis situations.",
    tags: ["React", "Node.js", "GIS", "Real-time Communication"],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/DisasterFirstResponder",
    demo: "https://dfr.demo.dev",
    features: [
      "Resource coordination",
      "Interactive mapping",
      "Real-time status updates",
      "Communication channels"
    ]
  },
  {
    id: 6,
    title: "Joblity",
    description: "A job search and career mobility platform that helps users find opportunities aligned with their skills and career goals.",
    tags: ["Vue.js", "Express", "MongoDB", "Career Tech"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/Joblity",
    demo: "https://joblity.demo.dev",
    features: [
      "Skill-based job matching",
      "Career path visualization",
      "Resume analysis",
      "Interview preparation"
    ]
  },
  {
    id: 7,
    title: "Law-Der",
    description: "An AI-powered legal document analysis and recommendation system for legal professionals.",
    tags: ["Python", "NLP", "Machine Learning", "Legal Tech"],
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/Law-Der",
    demo: "https://lawder.demo.dev",
    features: [
      "Document analysis",
      "Case recommendation",
      "Legal precedent matching",
      "Automated summaries"
    ]
  },
  {
    id: 8,
    title: "MealPlanner",
    description: "A smart meal planning application that creates personalized meal plans based on dietary preferences, restrictions, and nutritional goals.",
    tags: ["React", "Firebase", "Nutrition API", "Health Tech"],
    image: "https://images.unsplash.com/photo-1594054725229-933f666f7618?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/mealplanner",
    demo: "https://mealplanner.demo.dev",
    features: [
      "Personalized meal recommendations",
      "Nutritional analysis",
      "Grocery list generation",
      "Recipe database"
    ]
  },
  {
    id: 9,
    title: "MNIST Classifier",
    description: "A deep learning model for handwritten digit recognition using the MNIST dataset, with interactive visualization of neural network operations.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/MNIST",
    demo: "https://mnist.demo.dev",
    features: [
      "Handwritten digit recognition",
      "Interactive neural network visualization",
      "Performance metrics dashboard",
      "Training process explanation"
    ]
  },
  {
    id: 10,
    title: "TravelCompanion",
    description: "An all-in-one travel planning and companion app that helps with itinerary planning, booking, and real-time travel assistance.",
    tags: ["Flutter", "Firebase", "Maps API", "Travel Tech"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&h=600&auto=format&fit=crop",
    github: "https://github.com/VarnitOS/TravelCompanion",
    demo: "https://travelcompanion.demo.dev",
    features: [
      "Itinerary planning",
      "Local recommendations",
      "Real-time travel updates",
      "Expense tracking"
    ]
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText 
              text="Featured Projects" 
              className="inline-block hover:animate-glow transition-all duration-300"
              gradientClassName="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:400%_100%]"
            />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/70 md:text-lg hover:text-foreground transition-colors duration-300">
            A showcase of my recent work and personal projects.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              tags={project.tags}
              projectUrl={project.github}
              index={index}
            />
          ))}
        </div>

        {/* GitHub stats */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a
              href="https://github.com/VarnitOS"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <span>View more projects on GitHub</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:text-primary"
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 