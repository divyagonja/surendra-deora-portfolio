
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };
    
    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.3
      });
    };
    
    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);
  
  return (
    <>
      <div ref={cursorRef} className="cursor-follower hidden md:flex">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        </span>
      </div>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
    </>
  );
};

export default CustomCursor;
