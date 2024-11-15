import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Silhouettes',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1673220683833-3045d37c3dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdISVRFJTIwQU5EJTIwQkxBQ0slMjBTSEFET1dTJTIwUEFUVEVSTlN8ZW58MHx8MHx8fDA%3D',
    title: 'Patterns',
  },
  {
    url: 'https://images.unsplash.com/photo-1529432337323-223e988a90fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V0hJVEUlMjBBTkQlMjBCTEFDSyUyMFNIQURPV1MlMjBBQlNUUkFDVHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Abstract',
  },
  {
    url: 'https://images.unsplash.com/photo-1494236472818-d35e50e604cf?auto=format&fit=crop&w=800&q=80',
    title: 'Ethereal',
  },
  {
    url: 'https://i.pinimg.com/236x/64/ff/8a/64ff8a358eefa9a2df55d57f2121b98d.jpg',
    title: 'Ghostly',
  },
  {
    url: 'https://i.pinimg.com/736x/aa/28/9d/aa289de99b0e2e44aa94e5da9961394c.jpg',
    title: 'Minimal',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-thin tracking-[0.3em] mb-16 text-center text-black/30">
          GALLERY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20 pointer-events-none z-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-black/10"></div>
                ))}
              </div>
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full opacity-70 group-hover:opacity-40 transition-all duration-700 filter grayscale"
              />
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <span className="text-black/70 text-2xl tracking-[0.4em] font-thin">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}