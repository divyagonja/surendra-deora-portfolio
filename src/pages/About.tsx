
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
    
    // Content animations
    const contentElements = contentRef.current?.querySelectorAll('p, h3');
    gsap.fromTo(
      contentElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Skills animation
    gsap.fromTo(
      skillsRef.current?.querySelectorAll('.skill-item'),
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Image animation
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const skills = [
    "Brand Identity", "Visual Design", "Typography", 
    "UI/UX Design", "Print Design", "Motion Graphics",
    "Illustration", "Photography", "Art Direction"
  ];
  
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">About</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-text inline-block"></span>
              </div>
            </h1>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div ref={contentRef}>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">My Approach</h3>
              <p className="text-lg mb-8 leading-relaxed">
                I've a design studio dedicated to creating impactful visual experiences. 
                Our work spans across various mediums, from brand identities and print design 
                to digital experiences and motion graphics.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                I believe in the power of thoughtful design to transform ideas into memorable 
                experiences. Our collaborative approach ensures that each project reflects the 
                unique vision and goals of our clients.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                With a focus on craftsmanship and attention to detail, we create work that 
                resonates with audiences and stands the test of time.
              </p>
            </div>
            
            <div className="relative" ref={imageRef}>
              <div className="aspect-[3/4] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=2671" 
                  alt="Design studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-12 md:py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item border-b border-black py-4 md:py-6"
              >
                <h3 className="text-xl md:text-2xl font-serif">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">The Designer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square w-full">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C5603AQFlNFvLYVJuIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517360818165?e=1753315200&v=beta&t=3HORGEkHopO_sna3coJIcrgHQhLC-whjbgp6tpZ7vxk" 
                  alt="Designer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Surendra Bhan Deora</h3>
              <p className="text-lg mb-6 text-gray-300">Creative Graphic Designer</p>
              <p className="text-lg mb-6 leading-relaxed">
                With over a decade of experience in the design industry, Surendra has 
                worked with brands across the globe to create meaningful and impactful 
                visual experiences.
              </p>
              <p className="text-lg leading-relaxed">
                His approach combines strategic thinking with a keen eye for aesthetics, 
                resulting in work that is both beautiful and effective. Surendra's work has 
                been recognized by various design publications and has received multiple 
                industry awards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
