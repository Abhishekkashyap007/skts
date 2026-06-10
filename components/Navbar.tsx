'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav style={{ background: '#1a2744', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <img src="/logoskt.png" alt="Logo" style={{ height: 40, width: 40, objectFit: 'contain' }} />
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ color: '#e05a1c', fontWeight: 800, fontSize: '0.95rem', letterSpacing: 0.5 }}>SHRI KHATU SHYAM</div>
              <div style={{ color: 'white', fontWeight: 500, fontSize: '0.68rem', letterSpacing: 1.5 }}>TRANSPORT CO.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-desktop" style={{ gap: 2, alignItems: 'center' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                color: pathname === l.href ? '#e05a1c' : '#d0d8f0',
                textDecoration: 'none',
                padding: '6px 12px',
                fontWeight: pathname === l.href ? 700 : 500,
                fontSize: '0.88rem',
                borderBottom: pathname === l.href ? '2px solid #e05a1c' : '2px solid transparent',
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/quote" style={{
              background: '#e05a1c', color: 'white', padding: '7px 16px',
              borderRadius: 6, fontWeight: 700, textDecoration: 'none',
              fontSize: '0.88rem', marginLeft: 6,
            }}>
              Get Quote
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            style={{
              background: 'none', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 6, cursor: 'pointer', padding: '6px 8px',
              flexDirection: 'column', gap: 4, alignItems: 'center',
            }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: open ? '#e05a1c' : 'white', transition: '0.25s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'white', transition: '0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: open ? '#e05a1c' : 'white', transition: '0.25s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div style={{ background: '#1e2e58', borderTop: '1px solid #2d3d6b' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center',
                  color: pathname === l.href ? '#e05a1c' : '#d0d8f0',
                  textDecoration: 'none',
                  padding: '14px 20px',
                  fontWeight: pathname === l.href ? 700 : 400,
                  fontSize: '1rem',
                  borderBottom: '1px solid #2d3d6b',
                  background: pathname === l.href ? 'rgba(224,90,28,0.08)' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ padding: 16 }}>
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', background: '#e05a1c', color: 'white',
                  padding: '13px 20px', borderRadius: 8, fontWeight: 700,
                  textDecoration: 'none', textAlign: 'center', fontSize: '1rem',
                }}
              >
                📋 Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
