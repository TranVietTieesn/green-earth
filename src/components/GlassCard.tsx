'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6',
        'backdrop-blur-lg bg-white/10 border border-white/20',
        'shadow-2xl shadow-black/10',
        gradient && 'bg-gradient-to-br from-white/20 to-white/5',
        'transition-all duration-300',
        className
      )}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Highlight effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </motion.div>
  );
} 