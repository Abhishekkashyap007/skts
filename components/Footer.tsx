import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1a2744', color: '#b0bcd8', paddingTop: 48, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 36, paddingBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ color: '#e05a1c', fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>SHRI KHATU SHYAM</div>
            <div style={{ color: 'white', fontWeight: 500, fontSize: '0.8rem', letterSpacing: 2, marginBottom: 14 }}>TRANSPORT CO.</div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#8898bb' }}>
              Trusted road freight & logistics solutions across India. Safe, reliable, and on time — every time.
            </p>
            <div style={{ marginTop: 16, fontSize: '0.85rem' }}>
              <div style={{ marginBottom: 6 }}>⭐ Established: 29 October 2023</div>
              <div>🇮🇳 All India Permit</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', letterSpacing: 1 }}>QUICK LINKS</h4>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Our Services' },
              { href: '/fleet', label: 'Our Fleet' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/quote', label: 'Get a Quote' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#8898bb', textDecoration: 'none', padding: '4px 0', fontSize: '0.88rem' }}>
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', letterSpacing: 1 }}>OUR SERVICES</h4>
            {['Full Truck Load (FTL)', 'Part Load (LTL)', 'Door-to-Door Delivery', 'Industrial Goods Transport', 'Express Delivery', 'All India Transport'].map(s => (
              <div key={s} style={{ color: '#8898bb', padding: '4px 0', fontSize: '0.88rem' }}>✓ {s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', letterSpacing: 1 }}>CONTACT US</h4>
            <div style={{ fontSize: '0.88rem', lineHeight: 2 }}>
              <div>📍 A-239, IInd Floor, T.P. Nagar,</div>
              <div style={{ paddingLeft: 20 }}>Sector-69, Noida,</div>
              <div style={{ paddingLeft: 20 }}>Gautam Budh Nagar, U.P. - 201307</div>
              <div style={{ marginTop: 8 }}>
                <a href="tel:9410461549" style={{ color: '#e05a1c', textDecoration: 'none' }}>📞 Satendra Verma: 9410461549</a>
              </div>
              <div>
                <a href="tel:9650234838" style={{ color: '#e05a1c', textDecoration: 'none' }}>📞 Sanjeev Singh: 9650234838</a>
              </div>
              <div style={{ marginTop: 8 }}>🕐 24 × 7 Service Available</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #2d3d6b', padding: '16px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: '0.82rem', color: '#5a6a8a' }}>
          <span>© 2024 Shri Khatu Shyam Transport Co. All rights reserved.</span>
          <span>Noida, Uttar Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
