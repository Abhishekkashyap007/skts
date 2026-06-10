import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Shri Khatu Shyam Transport Co.',
  description: 'Learn about Shri Khatu Shyam Transport Company — established in 2023 by Satendra Verma. Trusted logistics and road freight company based in Noida, UP.',
};

const values = [
  { icon: '🤝', title: 'Trust', desc: 'We build lasting relationships through honesty and reliable service.' },
  { icon: '⭐', title: 'Excellence', desc: 'We never compromise on quality and always aim to exceed expectations.' },
  { icon: '🔒', title: 'Integrity', desc: 'Transparent pricing and honest communication with every client.' },
  { icon: '⚡', title: 'Efficiency', desc: 'On-time delivery with optimal routes and experienced drivers.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a2744, #2d3d6b)', padding: '56px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>About Us</h1>
        <p style={{ color: '#8898bb', fontSize: '1rem' }}>Our story, our mission, our values</p>
      </section>

      {/* Main story */}
      <section style={{ padding: '64px 20px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ background: '#e05a1c', display: 'inline-block', padding: '4px 14px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700, color: 'white', marginBottom: 14 }}>
              EST. 29 OCTOBER 2023
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a2744', marginBottom: 16 }}>Shri Khatu Shyam Transport Company</h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
              Shri Khatu Shyam Transport Company is a trusted and growing transportation service provider established on 29 October 2023 by <strong>Mr. Satendra Verma</strong>. Based in Noida, Uttar Pradesh, the company is dedicated to providing safe, reliable, and cost-effective transportation solutions across India.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
              The company specializes in road freight transportation, offering efficient logistics services for industrial goods, commercial cargo, machinery, construction materials, and other products. With a strong commitment to customer satisfaction, we ensure timely deliveries while maintaining the highest standards of safety and professionalism.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Driven by the values of trust, integrity, and excellence, the company focuses on building long-term relationships with its clients through dependable service and transparent operations. As a growing organization, Shri Khatu Shyam Transport Company aims to expand its network and become a leading name in the Indian transportation and logistics industry.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <Image src="/truck5.jpeg" alt="SKTS Fleet" width={480} height={300} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ background: '#f5f6fa', borderRadius: 12, padding: 20, borderLeft: '4px solid #e05a1c' }}>
              <div style={{ fontWeight: 700, color: '#1a2744', marginBottom: 6 }}>Founder & Director</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#e05a1c' }}>Mr. Satendra Verma</div>
              <div style={{ fontSize: '0.88rem', color: '#666', marginTop: 4 }}>📞 9410461549</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '56px 20px', background: '#f5f6fa' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-sub">What drives us every day</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '56px 20px', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-sub">The people behind every successful delivery</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
            {[
              { name: 'Satendra Verma', role: 'Founder & Director', phone: '9410461549' },
              { name: 'Sanjeev Singh', role: 'Operations Manager', phone: '9650234838' },
            ].map(p => (
              <div key={p.name} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, background: '#e05a1c', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'white', fontWeight: 800 }}>
                  {p.name.charAt(0)}
                </div>
                <h3 style={{ color: '#1a2744', fontWeight: 700, margin: '0 0 4px' }}>{p.name}</h3>
                <div style={{ color: '#e05a1c', fontSize: '0.88rem', fontWeight: 600, marginBottom: 8 }}>{p.role}</div>
                <a href={`tel:${p.phone}`} style={{ color: '#555', fontSize: '0.88rem', textDecoration: 'none' }}>📞 {p.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#e05a1c', padding: '40px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Ready to Work With Us?</h2>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
          <Link href="/quote" style={{ background: 'white', color: '#e05a1c', padding: '12px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>Get Free Quote</Link>
          <Link href="/contact" style={{ border: '2px solid white', color: 'white', padding: '10px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
