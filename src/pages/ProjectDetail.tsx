
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  // This would typically be fetched from an API
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Brand Design",
      year: "2023",
      client: "Synthwave Records",
      description: "A vibrant brand identity for an electronic music label focusing on retrowave and synthwave genres. The project included logo design, album artwork templates, social media assets, and event promotional materials.",
      mainImage: "https://images.unsplash.com/photo-1600694611759-c291e7655282?q=80&w=2070",
      images: [
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070",
        "https://images.unsplash.com/photo-1633376661954-bb211843b1c2?q=80&w=2070",
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2064"
      ]
    },
    {
      id: 2,
      title: "Abstract Motion",
      category: "Digital Art",
      year: "2023",
      client: "Gallery Exhibition",
      description: "A series of abstract digital artworks exploring the relationship between color, form, and movement. These pieces were displayed in a gallery exhibition and are available as limited edition prints.",
      mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      images: [
        "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070",
        "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070",
        "https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&w=2070"
      ]
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
    
    // Images animation
    gsap.fromTo(
      imagesRef.current?.querySelectorAll('.project-image'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top bottom-=100",
        }
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
            <div className="aspect-[16/9] w-full">
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
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
      
      {/* Project Images */}
      <section className="py-12 md:py-20" ref={imagesRef}>
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {project.images.map((image, index) => (
              <div key={index} className="project-image">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
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
