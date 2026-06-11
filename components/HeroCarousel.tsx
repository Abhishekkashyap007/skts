'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/truck2.jpeg', alt: 'SKTS Eicher Truck' },
  { src: '/truck3.jpeg', alt: 'SKTS Container Truck' },
  { src: '/truck5.jpeg', alt: 'SKTS Open Body Truck' },
  { src: '/truck6.jpeg', alt: 'SKTS Fleet Truck' },
  { src: '/truck7.jpeg', alt: 'SKTS Cargo Truck' },
  { src: '/img 9.jpeg', alt: 'SKTS Truck 9' },
  { src: '/img10.jpeg', alt: 'SKTS Truck 10' },
  { src: '/img11.jpeg', alt: 'SKTS Truck 11' },
  { src: '/img12.jpeg', alt: 'SKTS Truck 12' },
  { src: '/img13.jpeg', alt: 'SKTS Truck 13' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(slides.length).fill(false));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div style={{ 
      position: 'relative', 
      borderRadius: 16, 
      overflow: 'hidden', 
      boxShadow: '0 8px 40px rgba(0,0,0,0.45)', 
      width: '100%', 
      aspectRatio: '4/3', 
      maxHeight: 380,
      background: '#1a2744' // Loading background
    }}>
      {slides.map((s, i) => (
        <div 
          key={s.src} 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: i === current ? 1 : 0, 
            transition: 'opacity 0.7s ease-in-out',
            pointerEvents: i === current ? 'auto' : 'none'
          }}
        >
          <Image 
            src={s.src} 
            alt={s.alt} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority={i === 0}
            onLoad={() => handleImageLoad(i)}
            onError={() => console.error(`Failed to load image: ${s.src}`)}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(to top, rgba(26,39,68,0.5) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Previous Button */}
      <button 
        onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} 
        style={{ 
          position: 'absolute', 
          left: 10, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: 'rgba(255,255,255,0.2)', 
          border: 'none', 
          borderRadius: '50%', 
          width: 36, 
          height: 36, 
          cursor: 'pointer', 
          color: 'white', 
          fontSize: '1.2rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
          zIndex: 10
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
      >
        ‹
      </button>

      {/* Next Button */}
      <button 
        onClick={() => setCurrent(c => (c + 1) % slides.length)} 
        style={{ 
          position: 'absolute', 
          right: 10, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: 'rgba(255,255,255,0.2)', 
          border: 'none', 
          borderRadius: '50%', 
          width: 36, 
          height: 36, 
          cursor: 'pointer', 
          color: 'white', 
          fontSize: '1.2rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
          zIndex: 10
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: 14, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        gap: 8,
        zIndex: 10
      }}>
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            style={{ 
              width: i === current ? 24 : 8, 
              height: 8, 
              borderRadius: 4, 
              border: 'none', 
              background: i === current ? '#e05a1c' : 'rgba(255,255,255,0.5)', 
              cursor: 'pointer', 
              padding: 0, 
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}