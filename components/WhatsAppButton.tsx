'use client';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = '919410461549';
  const message = encodeURIComponent('Hello! I am interested in your transport services. Please share details.');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#25d366',
        color: 'white',
        textDecoration: 'none',
        borderRadius: 50,
        padding: hovered ? '12px 20px 12px 14px' : '14px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        transition: 'all 0.3s ease',
        fontWeight: 700,
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: hovered ? 220 : 56,
      }}
      title="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.42.66 4.68 1.8 6.62L3 29l6.54-1.76A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="white"/>
        <path d="M22.1 19.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" fill="#25d366"/>
      </svg>
      {hovered && <span>Chat with us!</span>}
    </a>
  );
}
