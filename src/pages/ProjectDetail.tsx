import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import all images
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

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Brand Design",
      year: "2023",
      client: "Synthwave Records",
      description: "A vibrant brand identity for an electronic music label focusing on retrowave and synthwave genres. The project included logo design, album artwork templates, social media assets, and event promotional materials.",
      mainImage: image1
    },
    {
      id: 2,
      title: "Abstract Motion",
      category: "Digital Art",
      year: "2023",
      client: "Gallery Exhibition",
      description: "A series of abstract digital artworks exploring the relationship between color, form, and movement. These pieces were displayed in a gallery exhibition and are available as limited edition prints.",
      mainImage: image2
    },
    {
      id: 3,
      title: "Vibrant Identity",
      category: "Brand Identity",
      year: "2022",
      client: "Modern Brands Inc",
      description: "A comprehensive brand identity project that included logo design, brand guidelines, and marketing materials. The focus was on creating a bold and memorable visual identity.",
      mainImage: image3
    },
    {
      id: 4,
      title: "Typographic Posters",
      category: "Print Design",
      year: "2022",
      client: "Design Museum",
      description: "A collection of typographic posters exploring the relationship between text and visual elements. Each poster tells a unique story through innovative typography and layout.",
      mainImage: image4
    },
    {
      id: 5,
      title: "Motion Graphics Reel",
      category: "Motion",
      year: "2021",
      client: "Animation Studio",
      description: "A showcase of motion graphics work including title sequences, promotional videos, and animated infographics. The project demonstrates various animation techniques and styles.",
      mainImage: image5
    },
    {
      id: 6,
      title: "Organic Patterns",
      category: "Digital Art",
      year: "2021",
      client: "Art Gallery",
      description: "A series of digital artworks exploring organic patterns and natural forms. The pieces combine digital techniques with traditional artistic principles.",
      mainImage: image6
    },
    {
      id: 7,
      title: "Minimalist Packaging",
      category: "Brand Design",
      year: "2020",
      client: "Luxury Brands",
      description: "A minimalist packaging design project for a luxury product line. The design focuses on clean lines, premium materials, and subtle branding elements.",
      mainImage: image7
    },
    {
      id: 8,
      title: "Urban Photography",
      category: "Photography",
      year: "2020",
      client: "City Magazine",
      description: "A photography series capturing the essence of urban life. The project includes street photography, architectural shots, and candid moments of city dwellers.",
      mainImage: image8
    },
    {
      id: 9,
      title: "Digital Art Collection",
      category: "Digital Art",
      year: "2023",
      client: "Digital Gallery",
      description: "A collection of digital artworks exploring contemporary themes and digital aesthetics. The pieces combine traditional artistic principles with modern digital techniques.",
      mainImage: image9
    },
    {
      id: 10,
      title: "Abstract Design",
      category: "Brand Design",
      year: "2023",
      client: "Design Studio",
      description: "An abstract design project that pushes the boundaries of visual communication. The work explores new ways of expressing ideas through abstract forms and colors.",
      mainImage: image10
    },
    // ... Continue with projects 11-48 following the same pattern
    {
      id: 48,
      title: "Visual Design",
      category: "Digital Art",
      year: "2023",
      client: "Creative Agency",
      description: "A comprehensive visual design project that showcases the power of digital art in modern communication. The work combines various digital techniques to create compelling visual narratives.",
      mainImage: image48
    }
  ];
  
  const project = projects.find(p => p.id === parseInt(id || "1"));
  const currentIndex = projects.findIndex(p => p.id === parseInt(id || "1"));
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  
  useEffect(() => {
    if (!project) return;
    
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
    
    // Content animation
    const contentElements = contentRef.current?.querySelectorAll('h3, p, .info-item');
    gsap.fromTo(
      contentElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gray-400 hover:text-white">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden mb-12" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">{project.title}</span>
              </div>
            </h1>
            <div className="overflow-hidden">
              <p className="reveal-text inline-block text-xl text-gray-400">
                {project.category}
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <div 
              className="aspect-[16/9] w-full protected-image"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Info */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" ref={contentRef}>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">About the Project</h3>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <div className="info-item mb-8">
                <h4 className="text-sm text-gray-400 mb-2">Client</h4>
                <p className="text-lg">{project.client}</p>
              </div>
              <div className="info-item mb-8">
                <h4 className="text-sm text-gray-400 mb-2">Year</h4>
                <p className="text-lg">{project.year}</p>
              </div>
              <div className="info-item">
                <h4 className="text-sm text-gray-400 mb-2">Category</h4>
                <p className="text-lg">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Navigation */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <Link to={`/projects/${prevProject.id}`} className="mb-6 md:mb-0 group">
              <div className="flex items-center">
                <ArrowLeft className="mr-4 transform group-hover:-translate-x-2 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-gray-400">Previous Project</p>
                  <h3 className="text-xl font-serif">{prevProject.title}</h3>
                </div>
              </div>
            </Link>
            
            <Link to={`/projects/${nextProject.id}`} className="group">
              <div className="flex items-center">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Next Project</p>
                  <h3 className="text-xl font-serif">{nextProject.title}</h3>
                </div>
                <ArrowRight className="ml-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
