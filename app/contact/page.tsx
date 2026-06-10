import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Shri Khatu Shyam Transport Co.',
  description: 'Contact Shri Khatu Shyam Transport Company. Call Satendra Verma: 9410461549, Sanjeev Singh: 9650234838. Address: Sector-69, Noida, UP.',
};

export default function Contact() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a2744, #2d3d6b)', padding: '56px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>Contact Us</h1>
        <p style={{ color: '#8898bb', fontSize: '1rem' }}>We&apos;re available 24×7 — reach out anytime</p>
      </section>

      <section style={{ padding: '64px 20px', background: '#f5f6fa' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 20 }}>📞 Call Us Directly</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#f5f6fa', borderRadius: 10, padding: '16px 18px', borderLeft: '4px solid #e05a1c' }}>
                  <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: 4 }}>Founder & Director</div>
                  <div style={{ fontWeight: 700, color: '#1a2744', marginBottom: 6 }}>Satendra Verma</div>
                  <a href="tel:9410461549" style={{ color: '#e05a1c', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>📞 9410461549</a>
                </div>
                <div style={{ background: '#f5f6fa', borderRadius: 10, padding: '16px 18px', borderLeft: '4px solid #1a2744' }}>
                  <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: 4 }}>Operations Manager</div>
                  <div style={{ fontWeight: 700, color: '#1a2744', marginBottom: 6 }}>Sanjeev Singh</div>
                  <a href="tel:9650234838" style={{ color: '#e05a1c', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>📞 9650234838</a>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 16 }}>📍 Our Office</h3>
              <p style={{ color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>
                A-239, IInd Floor, T.P. Nagar,<br />
                Sector-69, Noida,<br />
                Gautam Budh Nagar,<br />
                Uttar Pradesh — 201307
              </p>
              <a
                href="https://maps.google.com/?q=Sector+69+Noida+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#e05a1c', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}
              >
                📌 View on Google Maps →
              </a>
            </div>

            <div className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 16 }}>⏰ Working Hours</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ color: '#555' }}>Monday — Sunday</span>
                <span style={{ color: '#e05a1c', fontWeight: 700 }}>24 Hours</span>
              </div>
              <div style={{ paddingTop: 12, color: '#555', fontSize: '0.88rem' }}>
                🟢 We are available round the clock for your transport needs
              </div>
            </div>

            <a
              href={`https://wa.me/919410461549?text=${encodeURIComponent('Hello! I need transport services. Please provide details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontSize: '1rem', display: 'block' }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Quick contact form (static — for real form add API route) */}
          <div className="card" style={{ padding: '32px 28px' }}>
            <h3 style={{ color: '#1a2744', fontWeight: 700, marginBottom: 4 }}>Send Us a Message</h3>
            <p style={{ color: '#888', fontSize: '0.88rem', marginBottom: 24 }}>We&apos;ll get back to you within minutes.</p>
            <form action={`https://wa.me/919410461549`} method="get" target="_blank" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>Your Name *</label>
                <input type="text" placeholder="Enter your name" required style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>Phone Number *</label>
                <input type="tel" placeholder="Enter your mobile number" required style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>From City</label>
                <input type="text" placeholder="Pickup location" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>To City</label>
                <input type="text" placeholder="Destination" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a2744', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea placeholder="Describe your transport requirement..." rows={4} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #ddd', borderRadius: 8, fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <a
                href="https://wa.me/919410461549"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#e05a1c', color: 'white', padding: '13px 0', borderRadius: 8, fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontSize: '1rem', display: 'block', cursor: 'pointer' }}
              >
                Send via WhatsApp 💬
              </a>
              <p style={{ fontSize: '0.78rem', color: '#aaa', margin: 0, textAlign: 'center' }}>This will open WhatsApp with your message pre-filled</p>
            </form>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section style={{ height: 360 }}>
        <iframe
          src="https://maps.google.com/maps?q=Sector+69+Noida+Uttar+Pradesh+India&output=embed"
          width="100%"
          height="360"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          allowFullScreen
          title="Shri Khatu Shyam Transport Co. Location"
        />
      </section>
    </>
  );
}
