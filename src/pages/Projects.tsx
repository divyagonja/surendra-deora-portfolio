import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Import images
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';
import image7 from '../images/7.png';
import image8 from '../images/8.png';
import image9 from '../images/9.png';
import image10 from '../images/10.png';
import image11 from '../images/11.png';
import image12 from '../images/12.png';
import image13 from '../images/13.png';
import image14 from '../images/14.png';
import image15 from '../images/15.png';
import image16 from '../images/16.png';
import image17 from '../images/17.png';
import image18 from '../images/18.png';
import image19 from '../images/19.png';
import image20 from '../images/20.png';
import image21 from '../images/21.png';
import image22 from '../images/22.png';
import image23 from '../images/23.jpg';
import image24 from '../images/24.png';
import image25 from '../images/25.jpg';
import image26 from '../images/26.jpg';
import image27 from '../images/27.png';
import image28 from '../images/28.png';
import image29 from '../images/29.jpg';
import image30 from '../images/30.jpg';
import image31 from '../images/31.jpg';
import image32 from '../images/32.jpg';
import image33 from '../images/33.jpg';
import image34 from '../images/34.jpg';
import image35 from '../images/35.png';
import image36 from '../images/36.jpg';
import image37 from '../images/37.gif';
import image38 from '../images/38.gif';
import image39 from '../images/39.jpg';
import image40 from '../images/40.jpg';
import image41 from '../images/41.jpg';
import image42 from '../images/42.gif';
import image43 from '../images/43.jpg';
import image44 from '../images/44.jpg';
import image45 from '../images/45.jpg';
import image46 from '../images/46.jpg';
import image47 from '../images/47.png';
import image48 from '../images/48.png';

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
      image: image1,
      year: "2023"
    },
    {
      id: 2,
      title: "Abstract Motion",
      category: "Digital Art",
      image: image2,
      year: "2023"
    },
    {
      id: 3,
      title: "Vibrant Identity",
      category: "Brand Identity",
      image: image3,
      year: "2022"
    },
    {
      id: 4,
      title: "Typographic Posters",
      category: "Print Design",
      image: image4,
      year: "2022"
    },
    {
      id: 5,
      title: "Motion Graphics Reel",
      category: "Motion",
      image: image5,
      year: "2021"
    },
    {
      id: 6,
      title: "Organic Patterns",
      category: "Digital Art",
      image: image6,
      year: "2021"
    },
    {
      id: 7,
      title: "Minimalist Packaging",
      category: "Brand Design",
      image: image7,
      year: "2020"
    },
    {
      id: 8,
      title: "Urban Photography",
      category: "Photography",
      image: image8,
      year: "2020"
    },
    {
      id: 9,
      title: "Digital Art Collection",
      category: "Digital Art",
      image: image9,
      year: "2023"
    },
    {
      id: 10,
      title: "Abstract Design",
      category: "Brand Design",
      image: image10,
      year: "2023"
    },
    {
      id: 11,
      title: "Creative Patterns",
      category: "Digital Art",
      image: image11,
      year: "2023"
    },
    {
      id: 12,
      title: "Modern Typography",
      category: "Print Design",
      image: image12,
      year: "2023"
    },
    {
      id: 13,
      title: "Visual Identity",
      category: "Brand Identity",
      image: image13,
      year: "2023"
    },
    {
      id: 14,
      title: "Artistic Expression",
      category: "Digital Art",
      image: image14,
      year: "2023"
    },
    {
      id: 15,
      title: "Design System",
      category: "Brand Design",
      image: image15,
      year: "2023"
    },
    {
      id: 16,
      title: "Creative Direction",
      category: "Brand Identity",
      image: image16,
      year: "2023"
    },
    {
      id: 17,
      title: "Visual Storytelling",
      category: "Digital Art",
      image: image17,
      year: "2023"
    },
    {
      id: 18,
      title: "Brand Evolution",
      category: "Brand Design",
      image: image18,
      year: "2023"
    },
    {
      id: 19,
      title: "Art Direction",
      category: "Brand Identity",
      image: image19,
      year: "2023"
    },
    {
      id: 20,
      title: "Creative Design",
      category: "Digital Art",
      image: image20,
      year: "2023"
    },
    {
      id: 21,
      title: "Visual Design",
      category: "Brand Design",
      image: image21,
      year: "2023"
    },
    {
      id: 22,
      title: "Design Portfolio",
      category: "Digital Art",
      image: image22,
      year: "2023"
    },
    {
      id: 23,
      title: "Photography Series",
      category: "Photography",
      image: image23,
      year: "2023"
    },
    {
      id: 24,
      title: "Brand Identity",
      category: "Brand Identity",
      image: image24,
      year: "2023"
    },
    {
      id: 25,
      title: "Photo Collection",
      category: "Photography",
      image: image25,
      year: "2023"
    },
    {
      id: 26,
      title: "Visual Art",
      category: "Digital Art",
      image: image26,
      year: "2023"
    },
    {
      id: 27,
      title: "Creative Branding",
      category: "Brand Design",
      image: image27,
      year: "2023"
    },
    {
      id: 28,
      title: "Design Project",
      category: "Digital Art",
      image: image28,
      year: "2023"
    },
    {
      id: 29,
      title: "Photo Series",
      category: "Photography",
      image: image29,
      year: "2023"
    },
    {
      id: 30,
      title: "Art Collection",
      category: "Digital Art",
      image: image30,
      year: "2023"
    },
    {
      id: 31,
      title: "Brand Project",
      category: "Brand Design",
      image: image31,
      year: "2023"
    },
    {
      id: 32,
      title: "Visual Series",
      category: "Digital Art",
      image: image32,
      year: "2023"
    },
    {
      id: 33,
      title: "Design Collection",
      category: "Brand Design",
      image: image33,
      year: "2023"
    },
    {
      id: 34,
      title: "Art Series",
      category: "Digital Art",
      image: image34,
      year: "2023"
    },
    {
      id: 35,
      title: "Brand Series",
      category: "Brand Identity",
      image: image35,
      year: "2023"
    },
    {
      id: 36,
      title: "Photo Project",
      category: "Photography",
      image: image36,
      year: "2023"
    },
    {
      id: 37,
      title: "Motion Design",
      category: "Motion",
      image: image37,
      year: "2023"
    },
    {
      id: 38,
      title: "Animation Series",
      category: "Motion",
      image: image38,
      year: "2023"
    },
    {
      id: 39,
      title: "Visual Project",
      category: "Digital Art",
      image: image39,
      year: "2023"
    },
    {
      id: 40,
      title: "Design Series",
      category: "Brand Design",
      image: image40,
      year: "2023"
    },
    {
      id: 41,
      title: "Art Project",
      category: "Digital Art",
      image: image41,
      year: "2023"
    },
    {
      id: 42,
      title: "Motion Series",
      category: "Motion",
      image: image42,
      year: "2023"
    },
    {
      id: 43,
      title: "Photo Collection",
      category: "Photography",
      image: image43,
      year: "2023"
    },
    {
      id: 44,
      title: "Visual Series",
      category: "Digital Art",
      image: image44,
      year: "2023"
    },
    {
      id: 45,
      title: "Design Collection",
      category: "Brand Design",
      image: image45,
      year: "2023"
    },
    {
      id: 46,
      title: "Art Series",
      category: "Digital Art",
      image: image46,
      year: "2023"
    },
    {
      id: 47,
      title: "Brand Project",
      category: "Brand Identity",
      image: image47,
      year: "2023"
    },
    {
      id: 48,
      title: "Visual Design",
      category: "Digital Art",
      image: image48,
      year: "2023"
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
                    className="aspect-[4/3] w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105 protected-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
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
