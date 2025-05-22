import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Type,
  Palette,
  Layers,
  PenTool,
  Layout
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current?.querySelectorAll('.reveal-text') || [],
      { y: '100%', opacity: 0 },
      {
        y: '0',
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      }
    );

    // Skills animation
    gsap.fromTo(
      skillsRef.current?.querySelectorAll('.skill-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom-=100",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#001D26"/>
          <text x="10" y="34" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="#31A8FF">Ps</text>
        </svg>
      ),
      title: "Photoshop",
      level: "Advanced",
      description: "Expert in photo manipulation, compositing, and digital art creation"
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Typography",
      level: "Advanced",
      description: "Mastery in type selection, hierarchy, and custom type design"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity Design",
      level: "Advanced",
      description: "Creating cohesive and memorable brand identities"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Strategy",
      level: "Advanced",
      description: "Developing comprehensive brand strategies and guidelines"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">Skills</span>
              </div>
            </h1>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item bg-gray-900 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="text-white">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-serif">{skill.title}</h3>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 