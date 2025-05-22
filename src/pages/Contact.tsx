
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    
    // Form animation
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      }
    );
    
    // Info animation
    gsap.fromTo(
      infoRef.current?.querySelectorAll('.info-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden" ref={headerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">Get in</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">Touch</span>
              </div>
            </h1>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white focus:outline-none transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div ref={infoRef} className="space-y-12">
              <div className="info-item">
                <h3 className="text-2xl font-serif mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Mail size={20} className="mr-4" />
                    <span>surendrabhan1@gmail.com</span>
                  </p>
                  <p className="flex items-center">
                    <Phone size={20} className="mr-4" />
                    <span>+918505058163</span>
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <h3 className="text-2xl font-serif mb-4">Location</h3>
                <p>123 Design Street<br />Creative District<br />New York, NY 10001</p>
              </div>
              
              <div className="info-item">
                <h3 className="text-2xl font-serif mb-4">Follow</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
