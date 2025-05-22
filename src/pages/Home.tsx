import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Import featured project images
import image26 from '../images/26.jpg';
import image32 from '../images/32.jpg';
import image35 from '../images/35.png';
import image38 from '../images/38.gif';

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
      id: 26,
      title: "Visual Art",
      category: "Digital Art",
      image: image26
    },
    {
      id: 32,
      title: "Visual Series",
      category: "Digital Art",
      image: image32
    },
    {
      id: 35,
      title: "Brand Series",
      category: "Brand Identity",
      image: image35
    },
    {
      id: 38,
      title: "Animation Series",
      category: "Motion",
      image: image38
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
                  <span className="reveal-text inline-block">Graphic</span>
                </div>
                <div className="overflow-hidden">
                  <span className="reveal-text inline-block">Designer</span>
                </div>
                {/* <div className="overflow-hidden">
                  <span className="reveal-text inline-block">Studio</span>
                </div> */}
              </h1>
            </div>
            
            <div ref={subheadingRef}>
              <p className="text-xl md:text-2xl max-w-2xl leading-relaxed">
              Elevating brands through thoughtful, impactful creativity.
              It's been almost 9years+ since I developed a constant liking for
designing softwares. With a command on most of the magical tools,
I can now create visuals that follow the vision of the business and
grab the interest of the audience.
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
      
      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Level 1 – Starter Package */}
            <div className="relative bg-gray-900 rounded-2xl p-8 shadow-xl flex flex-col items-start border-2 border-gray-800 hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-4xl mb-2">🔹</div>
              <h3 className="text-2xl font-serif font-bold mb-2">Starter Package</h3>
              <p className="mb-4 text-gray-300">For individuals or startups needing quick, clean branding</p>
              <ul className="mb-6 text-gray-400 space-y-2 w-full">
                <li className="flex items-center gap-2"><span className="text-blue-400">✔</span> 1 logo concept + 1 revision</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✔</span> 1 social media post (static)</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✔</span> Basic brand color guide (2–3 colors)</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✔</span> JPG, PNG & basic PDF exports</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">⏱</span> Delivery in 3 days</li>
              </ul>
              <div className="mb-2 text-sm text-blue-300">💸 Ideal for: Freelancers, small creators, personal brands</div>
              <div className="text-3xl font-extrabold text-blue-400 mb-4">$49 – $99</div>
              <button className="w-full mt-auto py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all duration-300">Get Started</button>
            </div>
            {/* Level 2 – Professional Package (Most Popular) */}
            <div className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start border-4 border-blue-500 scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</div>
              <div className="text-4xl mb-2">🔸</div>
              <h3 className="text-2xl font-serif font-bold mb-2">Professional Package</h3>
              <p className="mb-4 text-gray-200">For growing brands needing cohesive and flexible visuals</p>
              <ul className="mb-6 text-blue-100 space-y-2 w-full">
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> Everything in Starter, plus:</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> 2 logo concepts + 3 revisions</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> 5 branded social media templates</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> Business card + letterhead design</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> Mini brand style guide (fonts, usage rules)</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">✔</span> Source files (PSD, AI)</li>
                <li className="flex items-center gap-2"><span className="text-orange-300">⏱</span> Delivery in 5–7 days</li>
              </ul>
              <div className="mb-2 text-sm text-orange-200">🔥 Ideal for: Agencies, creators, small businesses</div>
              <div className="text-3xl font-extrabold text-orange-300 mb-4">$199 – $349</div>
              <button className="w-full mt-auto py-3 rounded-lg bg-orange-400 hover:bg-orange-500 text-white font-bold transition-all duration-300">Get Started</button>
            </div>
            {/* Level 3 – Premium Brand Identity */}
            <div className="relative bg-gray-900 rounded-2xl p-8 shadow-xl flex flex-col items-start border-2 border-yellow-500 hover:border-yellow-400 hover:shadow-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-2">🔶</div>
              <h3 className="text-2xl font-serif font-bold mb-2">Premium Brand Identity</h3>
              <p className="mb-4 text-gray-300">For businesses needing a full design system</p>
              <ul className="mb-6 text-gray-400 space-y-2 w-full">
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> Everything in Professional, plus:</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> Full brand identity design (logo system, favicon, icon set)</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> 10+ branded templates (IG, reels, YouTube, carousels)</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> Packaging or merchandise mockup design</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> Brand strategy session (1-on-1 consultation)</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✔</span> Social media kit + usage rights</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">⏱</span> Delivery in 7–10 days</li>
              </ul>
              <div className="mb-2 text-sm text-yellow-300">🚀 Ideal for: Startups, rebrands, serious professionals</div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-4">$499 – $999+</div>
              <button className="w-full mt-auto py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-all duration-300">Get Started</button>
            </div>
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
