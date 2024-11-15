import React, { useEffect, useRef } from 'react';
import { Sparkles, Flame, Cloud } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Luminous Void',
    description: 'In the space between reality and dreams, shadows become portals to unseen dimensions.',
    gradient: 'from-purple-900 via-purple-600 to-pink-600',
  },
  {
    icon: Flame,
    title: 'Shadow Alchemy',
    description: 'Transforming darkness into liquid gold, where each shadow holds the power of metamorphosis.',
    gradient: 'from-amber-700 via-orange-600 to-yellow-600',
  },
  {
    icon: Cloud,
    title: 'Ethereal Echo',
    description: 'Whispers of light cascade through darkness, creating symphonies of visual silence.',
    gradient: 'from-blue-900 via-blue-600 to-cyan-600',
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      container.style.setProperty('--mouse-x', x.toString());
      container.style.setProperty('--mouse-y', y.toString());
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-24 bg-black overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(255,255,255,0.03) 0%, transparent 50%)'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)',
               backgroundSize: '80px 140px',
               backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
             }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-extralight mb-8 text-white opacity-90 tracking-[0.2em]">
            ESSENCE
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto tracking-wide text-lg font-light leading-relaxed">
            In the dance between presence and absence, we craft visual poetry from the void.
            Each shadow becomes a brushstroke in the canvas of consciousness, painting stories
            that exist in the liminal space between light and dark.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-xl"
                   style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}
              />
              <div className="relative p-8 text-center">
                <div className="inline-flex p-6 mb-6 rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl border border-gray-800
                               transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:-rotate-3
                               group-hover:border-opacity-50">
                  <feature.icon className="w-8 h-8 text-white opacity-80" />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide text-white opacity-90">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}