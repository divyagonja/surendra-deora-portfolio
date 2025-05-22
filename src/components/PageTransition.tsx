import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [direction, setDirection] = useState<'left' | 'right' | 'up' | 'down' | 'center'>('up');

  // Change direction on each route change
  useEffect(() => {
    const directions: Array<'left' | 'right' | 'up' | 'down' | 'center'> = ['left', 'right', 'up', 'down', 'center'];
    setDirection(directions[Math.floor(Math.random() * directions.length)]);
  }, [location.pathname]);

  // Animation variants for the curtain
  const curtainVariants = {
    initial: (direction: string) => ({
      ...(direction === 'left' && { scaleX: 1, x: 0 }),
      ...(direction === 'right' && { scaleX: 1, x: 0 }),
      ...(direction === 'up' && { scaleY: 1, y: 0 }),
      ...(direction === 'down' && { scaleY: 1, y: 0 }),
      ...(direction === 'center' && { scale: 1 }),
    }),
    animate: (direction: string) => ({
      ...(direction === 'left' && { scaleX: 0, x: '-100%' }),
      ...(direction === 'right' && { scaleX: 0, x: '100%' }),
      ...(direction === 'up' && { scaleY: 0, y: '-100%' }),
      ...(direction === 'down' && { scaleY: 0, y: '100%' }),
      ...(direction === 'center' && { scale: 0 }),
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: (direction: string) => ({
      ...(direction === 'left' && { scaleX: 1, x: 0 }),
      ...(direction === 'right' && { scaleX: 1, x: 0 }),
      ...(direction === 'up' && { scaleY: 1, y: 0 }),
      ...(direction === 'down' && { scaleY: 1, y: 0 }),
      ...(direction === 'center' && { scale: 1 }),
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  // Animation variants for the content
  const contentVariants = {
    initial: (direction: string) => ({
      opacity: 0,
      ...(direction === 'left' && { x: 100 }),
      ...(direction === 'right' && { x: -100 }),
      ...(direction === 'up' && { y: 100 }),
      ...(direction === 'down' && { y: -100 }),
      ...(direction === 'center' && { scale: 0.8 }),
    }),
    animate: (direction: string) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5,
      },
    }),
    exit: (direction: string) => ({
      opacity: 0,
      ...(direction === 'left' && { x: -100 }),
      ...(direction === 'right' && { x: 100 }),
      ...(direction === 'up' && { y: -100 }),
      ...(direction === 'down' && { y: 100 }),
      ...(direction === 'center' && { scale: 0.8 }),
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={location.pathname}
        className="relative min-h-screen"
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}
      >
        {/* Curtain overlay */}
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #B8860B, #DAA520, #CD853F)',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(5px)',
          }}
          variants={curtainVariants}
          custom={direction}
        />

        {/* Page content */}
        <motion.div
          className="relative z-10"
          variants={contentVariants}
          custom={direction}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 