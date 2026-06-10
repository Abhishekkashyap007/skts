import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transport Services | Shri Khatu Shyam Transport Co.',
  description: 'Full truck load, part load, door-to-door delivery, industrial goods transport, express service. All India transport from Noida. Call 9410461549.',
};

const services = [
  {
    icon: '🚛',
    title: 'Full Truck Load (FTL)',
    desc: 'When your cargo fills an entire truck, our Full Truck Load service is the perfect choice. Your goods get exclusive use of the vehicle, ensuring faster delivery with no handling at intermediate points. Best for large volume shipments to a single destination.',
    features: ['Exclusive truck for your cargo', 'Direct delivery — no stops', 'Faster transit time', 'Reduced handling risk', 'Ideal for 5 tons to 20 tons'],
  },
  {
    icon: '📦',
    title: 'Part Load (LTL)',
    desc: 'Have a smaller shipment? Our Less Than Truck Load service lets you share truck space and costs with other customers going in the same direction. You only pay for the space you use.',
    features: ['Cost-effective for small loads', 'Regular departures', 'Safe consolidated transport', 'Flexible pickup times', 'Ideal for under 5 tons'],
  },
  {
    icon: '🏠',
    title: 'Door-to-Door Delivery',
    desc: 'We handle everything — pickup from your warehouse or factory and direct delivery to your customer\'s doorstep. No need to visit the transport hub. Hassle-free service from start to finish.',
    features: ['Pickup from your location', 'Delivery at destination', 'No middlemen', 'Real-time coordination', 'Pan India coverage'],
  },
  {
    icon: '🏭',
    title: 'Industrial & Commercial Goods',
    desc: 'Specialized transportation for heavy machinery, factory equipment, construction materials, steel, tiles, FMCG goods, and other commercial cargo with proper securing and safe handling.',
    features: ['Heavy machinery transport', 'Construction materials', 'Steel & metal goods', 'FMCG & consumer goods', 'Proper cargo securing'],
  },
  {
    icon: '⚡',
    title: 'Express / Urgent Delivery',
    desc: 'When time is critical, our express service ensures your shipment is prioritized and delivered in the shortest possible time. Available 24×7 for urgent requirements.',
    features: ['Priority handling', '24×7 availability', 'Fastest possible transit', 'Dedicated support', 'Immediate pickup'],
  },
  {
    icon: '🗺️',
    title: 'All India Transport',
    desc: 'With our All India Permit, we transport goods to any state in the country. Strong network of routes covering Delhi, Mumbai, Chennai, Kolkata, Hyderabad, Bengaluru, and all major cities.',
    features: ['All states covered', 'All India Permit', 'Major cities network', 'Remote areas accessible', 'Regular scheduled runs'],
  },
];

export default function Services() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a2744, #2d3d6b)', padding: '56px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>Our Services</h1>
        <p style={{ color: '#8898bb', fontSize: '1rem' }}>Complete transport solutions for every need across India</p>
      </section>

      <section style={{ padding: '64px 20px', background: '#f5f6fa' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {services.map((s, i) => (
              <div key={s.title} className="card" style={{ padding: '36px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28, alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                    <span style={{ fontSize: '2.4rem' }}>{s.icon}</span>
                    <h2 style={{ color: '#1a2744', fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>{s.title}</h2>
                  </div>
                  <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#e05a1c', marginBottom: 12, fontSize: '0.9rem' }}>KEY FEATURES</div>
                  {s.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', color: '#444', fontSize: '0.92rem' }}>
                      <span style={{ color: '#e05a1c', fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                  <div style={{ marginTop: 20 }}>
                    <Link href="/quote" className="btn-primary" style={{ fontSize: '0.88rem', padding: '10px 22px' }}>Get Quote for This</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#e05a1c', padding: '40px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 10 }}>Need a Custom Transport Solution?</h2>
        <p style={{ color: '#ffe0d0', marginBottom: 24 }}>Call us now — we&apos;ll design a plan that fits your exact requirement.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:9410461549" style={{ background: 'white', color: '#e05a1c', padding: '12px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>📞 9410461549</a>
          <Link href="/quote" style={{ border: '2px solid white', color: 'white', padding: '10px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>Fill Quote Form</Link>
        </div>
      </section>
    </>
  );
}
