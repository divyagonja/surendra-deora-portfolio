import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'The House of Things',
    location: 'Udaipur',
    duration: 'May - July 2015',
    details: [
      'Responsible for creative package design, social media creatives, and product cutting.'
    ]
  },
  {
    company: 'Meta Tag Solution',
    location: 'Udaipur',
    duration: 'Aug - Dec 2015',
    details: [
      'Managed and maintained graphics, including creative website banners, visiting cards, and social media creatives.'
    ]
  },
  {
    company: 'Artifacto Pvt. Ltd',
    location: 'Udaipur',
    duration: 'Feb - Aug 2016',
    details: [
      'Served as an image editor, handling image cutting for eCommerce.'
    ]
  },
  {
    company: 'Bulk Agro',
    location: 'Udaipur',
    duration: 'Oct - March 2017',
    details: [
      'Used Premiere Pro for cutting study videos, with minimal design work beyond basic editing.'
    ]
  },
  {
    company: 'First Economy',
    location: 'Mumbai',
    duration: 'July 2017 - Jan 2020',
    details: [
      'Managed creatives and GIFs for five social media clients, including Dr. Lakshyaraj Singh Mewar, where I gained advanced knowledge.'
    ]
  },
  {
    company: 'Mathscare',
    location: 'Udaipur',
    duration: 'Feb 2021 - Present',
    details: [
      'Currently creating all YouTube thumbnails for his three channels and managing social media visuals, including flyers, posts, banners, and GIFs.'
    ]
  }
];

const Experience = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

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
        ease: 'power4.out',
        delay: 0.5
      }
    );

    // Experience cards animation
    gsap.fromTo(
      expRef.current?.querySelectorAll('.exp-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: expRef.current,
          start: 'top bottom-=100',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden mb-12" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
              <span className="reveal-text inline-block">Experience</span>
            </h1>
          </div>
          <div className="space-y-10" ref={expRef}>
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-item bg-gray-900 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h2 className="text-2xl font-serif font-semibold">{exp.company}, <span className="text-lg font-normal text-gray-400">{exp.location}</span></h2>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <ul className="list-disc pl-6 text-gray-300">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 