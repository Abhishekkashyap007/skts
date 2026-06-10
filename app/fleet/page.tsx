import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet | Shri Khatu Shyam Transport Co.',
  description: 'View our fleet of modern Eicher trucks with All India Permit. Well-maintained vehicles for safe goods transportation across India.',
};

const trucks = [
  { img: '/truck1.jpeg', name: 'SKTS Truck — Yellow Container', type: 'Closed Body / Container', capacity: 'Up to 7 Tons', permit: 'All India Permit', desc: 'Heavy-duty closed container truck, ideal for protected cargo.' },
  { img: '/truck2.jpeg', name: 'SKTS Eicher — Front View', type: 'Eicher Pro 2095 XP', capacity: 'Up to 8 Tons', permit: 'All India Permit', desc: 'Modern Eicher truck with good fuel efficiency and reliability.' },
  { img: '/truck3.jpeg', name: 'SKTS Eicher — Side View', type: 'Eicher Closed Body', capacity: 'Up to 8 Tons', permit: 'All India Permit', desc: 'Full closed body truck for safe transportation of all goods.' },
  { img: '/truck4.jpeg', name: 'SKTS Container Truck', type: 'Container / Box Body', capacity: 'Up to 8 Tons', permit: 'All India Permit', desc: 'Large container truck for bulk cargo and industrial transport.' },
  { img: '/truck5.jpeg', name: 'SKTS Open Body Truck', type: 'Eicher Open Body', capacity: 'Up to 9 Tons', permit: 'All India Permit', desc: 'Open platform truck ideal for construction materials and large items.' },
  { img: '/truck6.jpeg', name: 'SKTS Open Platform', type: 'Eicher Open Body', capacity: 'Up to 9 Tons', permit: 'All India Permit', desc: 'Strong open truck suitable for heavy goods and long routes.' },
  { img: '/truck7.jpeg', name: 'SKTS Cargo Truck', type: 'Eicher Side Body', capacity: 'Up to 7 Tons', permit: 'All India Permit', desc: 'Versatile side-body truck for mixed cargo loads.' },
];

export default function Fleet() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a2744, #2d3d6b)', padding: '56px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>Our Fleet</h1>
        <p style={{ color: '#8898bb', fontSize: '1rem' }}>Well-maintained Eicher trucks — All India Permit</p>
      </section>

      {/* Fleet highlights */}
      <section style={{ padding: '32px 20px', background: '#e05a1c' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, textAlign: 'center', color: 'white' }}>
          {[
            { n: '7+', l: 'Trucks in Fleet' },
            { n: 'Eicher', l: 'Trusted Brand' },
            { n: '100%', l: 'All India Permit' },
            { n: '24×7', l: 'Available' },
          ].map(s => (
            <div key={s.n}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: '0.85rem', color: '#ffe0d0' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet grid */}
      <section style={{ padding: '60px 20px', background: '#f5f6fa' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {trucks.map((t) => (
              <div key={t.img} className="card">
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 12, fontSize: '1rem' }}>{t.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>TYPE</div>
                      <div style={{ fontSize: '0.88rem', color: '#333', fontWeight: 500 }}>{t.type}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>CAPACITY</div>
                      <div style={{ fontSize: '0.88rem', color: '#333', fontWeight: 500 }}>{t.capacity}</div>
                    </div>
                  </div>
                  <div style={{ background: '#fff3ec', border: '1px solid #ffd0b0', borderRadius: 6, padding: '4px 10px', display: 'inline-block', fontSize: '0.8rem', color: '#e05a1c', fontWeight: 700, marginBottom: 10 }}>
                    ✓ {t.permit}
                  </div>
                  <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#e05a1c', padding: '40px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 10 }}>Need a Truck for Your Shipment?</h2>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
          <Link href="/quote" style={{ background: 'white', color: '#e05a1c', padding: '12px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>Book Now</Link>
          <a href="tel:9410461549" style={{ border: '2px solid white', color: 'white', padding: '10px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>📞 Call Us</a>
        </div>
      </section>
    </>
  );
}
