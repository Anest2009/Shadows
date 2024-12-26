import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {Array.from({ length: 64 }).map((_, i) => (
          <div 
            key={i} 
            className="border border-black/5 transition-all duration-700 hover:bg-black/5"
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 
                     font-thin tracking-[0.2em] mb-6 leading-none text-black/20"
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.1)' }}>
          SHADOW
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto 
                    tracking-[0.2em] sm:tracking-[0.3em] font-light">
          ABSTRACT · ETHEREAL · MINIMALIST
        </p>
      </div>

      <a 
        href="#gallery" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to gallery"
      >
        <ChevronDown size={32} className="text-black/30" />
      </a>
    </section>
  );
}
