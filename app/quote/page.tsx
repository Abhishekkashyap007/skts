'use client';
import { useState } from 'react';
import type { Metadata } from 'next';

const serviceTypes = ['Full Truck Load (FTL)', 'Part Load (LTL)', 'Door-to-Door', 'Express Delivery', 'Industrial Goods', 'Other'];

export default function Quote() {
  const [form, setForm] = useState({ name: '', phone: '', from: '', to: '', service: '', weight: '', date: '', notes: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = `Hello! I need a transport quote.\n\nName: ${form.name}\nPhone: ${form.phone}\nFrom: ${form.from}\nTo: ${form.to}\nService: ${form.service}\nWeight: ${form.weight}\nDate: ${form.date}\nNotes: ${form.notes}`;
    window.open(`https://wa.me/919410461549?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputStyle: React.CSSProperties = { width: '100%', padding: '11px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', background: '#fafafa' };
  const labelStyle: React.CSSProperties = { fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a2744, #2d3d6b)', padding: '56px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>Get a Free Quote</h1>
        <p style={{ color: '#8898bb', fontSize: '1rem' }}>Fill in your details — we&apos;ll respond within minutes</p>
      </section>

      <section style={{ padding: '60px 20px', background: '#f5f6fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <h2 style={{ color: '#1a2744', fontWeight: 800, marginBottom: 8 }}>Why Get a Quote?</h2>
              <p style={{ color: '#666', lineHeight: 1.7 }}>We offer the most competitive transport rates across India. Our quotes are transparent — no hidden charges.</p>
            </div>
            {[
              { icon: '⚡', t: 'Instant Response', d: 'We reply within minutes on WhatsApp' },
              { icon: '💰', t: 'Best Rates', d: 'Competitive pricing, no hidden costs' },
              { icon: '🔒', t: 'Safe Transport', d: 'Your goods are fully secured' },
              { icon: '🗺️', t: 'Pan India Coverage', d: 'We deliver to every corner of India' },
            ].map(item => (
              <div key={item.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a2744', marginBottom: 2 }}>{item.t}</div>
                  <div style={{ color: '#666', fontSize: '0.88rem' }}>{item.d}</div>
                </div>
              </div>
            ))}
            <div style={{ background: '#1a2744', borderRadius: 12, padding: 20, color: 'white', marginTop: 8 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Prefer to call?</div>
              <a href="tel:9410461549" style={{ color: '#e05a1c', fontWeight: 800, fontSize: '1.2rem', textDecoration: 'none', display: 'block' }}>📞 9410461549</a>
              <a href="tel:9650234838" style={{ color: '#e05a1c', fontWeight: 800, fontSize: '1.2rem', textDecoration: 'none', display: 'block', marginTop: 4 }}>📞 9650234838</a>
              <div style={{ color: '#8898bb', fontSize: '0.82rem', marginTop: 8 }}>Available 24×7</div>
            </div>
          </div>

          {/* Quote form */}
          <div className="card" style={{ padding: '32px 28px' }}>
            <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 24, borderBottom: '2px solid #e05a1c', paddingBottom: 12 }}>Transport Quote Form</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="10-digit mobile number" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>From (City) *</label>
                  <input name="from" value={form.from} onChange={handleChange} type="text" placeholder="Pickup city" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>To (City) *</label>
                  <input name="to" value={form.to} onChange={handleChange} type="text" placeholder="Delivery city" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Service Type</label>
                <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                  <option value="">-- Select Service --</option>
                  {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Approx. Weight</label>
                  <input name="weight" value={form.weight} onChange={handleChange} type="text" placeholder="e.g. 2 Tons" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Pickup Date</label>
                  <input name="date" value={form.date} onChange={handleChange} type="date" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Additional Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Type of goods, special requirements..." rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button onClick={handleWhatsApp} style={{ background: '#25d366', color: 'white', border: 'none', padding: '14px 0', borderRadius: 8, fontWeight: 700, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                💬 Send Quote on WhatsApp
              </button>
              <button onClick={() => window.location.href = 'tel:9410461549'} style={{ background: '#e05a1c', color: 'white', border: 'none', padding: '13px 0', borderRadius: 8, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                📞 Call for Instant Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
