
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Brand Design",
      image: "https://images.unsplash.com/photo-1600694611759-c291e7655282?q=80&w=2070",
      year: "2023"
    },
    {
      id: 2,
      title: "Abstract Motion",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      year: "2023"
    },
    {
      id: 3,
      title: "Vibrant Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2069",
      year: "2022"
    },
    {
      id: 4,
      title: "Typographic Posters",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974",
      year: "2022"
    },
    {
      id: 5,
      title: "Motion Graphics Reel",
      category: "Motion",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
      year: "2021"
    },
    {
      id: 6,
      title: "Organic Patterns",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=2064",
      year: "2021"
    },
    {
      id: 7,
      title: "Minimalist Packaging",
      category: "Brand Design",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070",
      year: "2020"
    },
    {
      id: 8,
      title: "Urban Photography",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=1976",
      year: "2020"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
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
    
    // Animation for initial load
    animateProjects();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  useEffect(() => {
    // Re-animate projects when filter changes
    animateProjects();
  }, [filter]);
  
  const animateProjects = () => {
    // Reset animations
    gsap.set(projectsRef.current?.querySelectorAll('.project-item'), { 
      y: 50, 
      opacity: 0 
    });
    
    // Animate projects
    gsap.to(projectsRef.current?.querySelectorAll('.project-item'), {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  };
  
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">Projects</span>
              </div>
            </h1>
          </div>
          
          {/* Categories */}
          <div className="mt-8 mb-16">
            <ul className="flex flex-wrap gap-6">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className={`text-sm uppercase tracking-wide transition-opacity
                      ${filter === category ? 'text-white opacity-100' : 'text-gray-400 hover:opacity-70'}`}
                    onClick={() => setFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Projects */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" ref={projectsRef}>
            {filteredProjects.map((project) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id}
                className="project-item"
              >
                <div className="project-card group">
                  <div 
                    className="aspect-[4/3] w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="project-card-overlay">
                    <div className="text-center">
                      <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                      <p className="text-sm uppercase tracking-wide mb-1">{project.category}</p>
                      <p className="text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-serif">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
