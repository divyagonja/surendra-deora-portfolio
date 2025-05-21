
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Hero animations
    tl.fromTo(
      headingRef.current?.querySelectorAll('.reveal-text') || [], 
      { y: '100%', opacity: 0 }, 
      { y: '0', opacity: 1, stagger: 0.1, duration: 1.2, ease: "power4.out" },
      0.5
    )
    .fromTo(
      subheadingRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      1
    )
    .fromTo(
      heroImageRef.current, 
      { scale: 1.1, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
      0.8
    );
    
    // Projects section animation
    gsap.fromTo(
      projectsRef.current?.querySelectorAll('.project-item') || [],
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const featuredProjects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Brand Design",
      image: "https://images.unsplash.com/photo-1600694611759-c291e7655282?q=80&w=2070"
    },
    {
      id: 2,
      title: "Abstract Motion",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
    },
    {
      id: 3,
      title: "Vibrant Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2069"
    },
    {
      id: 4,
      title: "Typographic Posters",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0" ref={heroImageRef}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974')" }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-4" ref={headingRef}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
                <div className="overflow-hidden">
                  <span className="reveal-text inline-block">Creative</span>
                </div>
                <div className="overflow-hidden">
                  <span className="reveal-text inline-block">Design</span>
                </div>
                <div className="overflow-hidden">
                  <span className="reveal-text inline-block">Studio</span>
                </div>
              </h1>
            </div>
            
            <div ref={subheadingRef}>
              <p className="text-xl md:text-2xl max-w-2xl leading-relaxed">
                We craft compelling visual stories that captivate audiences and elevate brands through innovative design.
              </p>
              <Link 
                to="/projects"
                className="inline-block mt-8 px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 md:py-32" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
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
                      <p className="text-sm uppercase tracking-wide">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/projects"
              className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8">Let's Create Something Amazing</h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Have a project in mind? We'd love to hear from you.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
