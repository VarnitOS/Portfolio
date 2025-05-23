"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  tags,
  projectUrl,
  index,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }
    }
  };
  
  // Image hover animation variants
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    rest: { scale: 1, transition: { duration: 0.3 } }
  };
  
  // Multiple fallback options
  const getFallbackImage = () => {
    const seed = title.toLowerCase().replace(/\s+/g, '-');
    
    // Try different sources in case one fails
    const fallbackOptions = [
      `https://picsum.photos/seed/${seed}/800/600`,
      `https://source.unsplash.com/800x600/?${seed.replace(/-/g, ',')}`,
      `https://loremflickr.com/800/600/${seed.replace(/-/g, ',')}`,
      // Default solid color as final fallback
      null
    ];
    
    // Find the first fallback that's different from the current failing URL
    const nextFallback = fallbackOptions.find(url => url !== currentImageUrl);
    return nextFallback;
  };
  
  const handleImageError = () => {
    console.log(`Error loading image for project: ${title}`);
    const nextImage = getFallbackImage();
    
    if (nextImage) {
      setCurrentImageUrl(nextImage);
    } else {
      // If all image options failed, just mark as error and use color placeholder
      setImageError(true);
    }
  };
  
  // Reset error state if imageUrl changes
  useEffect(() => {
    setCurrentImageUrl(imageUrl);
    setImageError(false);
  }, [imageUrl]);
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border/50",
        "h-full flex flex-col transition-all duration-300 hover:shadow-xl",
        "hover:shadow-primary/5 hover:border-primary/20"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project image */}
      <div className="relative h-60 overflow-hidden">
        <motion.div
          variants={imageVariants}
          animate={hovered ? "hover" : "rest"}
          className="w-full h-full relative"
        >
          {imageError ? (
            // Colored placeholder when all images fail
            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{title.charAt(0)}</span>
            </div>
          ) : (
            <Image
              src={currentImageUrl}
              alt={`${title} project thumbnail`}
              fill
              className="object-cover"
              onError={handleImageError}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
      
      {/* Project content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-foreground/70 mb-4 flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action link */}
        <Link
          href={projectUrl}
          target="_blank"
          className={cn(
            "flex items-center justify-center w-full rounded-full",
            "bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground",
            "py-2 transition-colors text-sm font-medium"
          )}
        >
          <span>View Project</span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: hovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            →
          </motion.span>
        </Link>
      </div>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div 
          className={cn(
            "absolute top-0 right-0 w-5 h-5 rounded-bl-lg",
            "transform rotate-45 translate-x-1/2 -translate-y-1/2",
            "bg-primary transition-all duration-300",
            hovered ? "scale-150" : "scale-100"
          )}
        />
      </div>
    </motion.div>
  );
} 