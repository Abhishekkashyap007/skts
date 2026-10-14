import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ReviewDisplay from "@/components/ReviewDisplay";
import AnimatedStats from "@/components/AnimatedStats";

const services = [
  {
    icon: "🚛",
    title: "Full Truck Load (FTL)",
    desc: "Exclusive full truck for large shipments. Maximum security and fastest delivery across India.",
  },
  {
    icon: "🏠",
    title: "Door-to-Door Delivery",
    desc: "We pick up from your location and deliver directly to the destination.",
  },
  {
    icon: "",
    title: "Industrial Goods",
    desc: "Safe transportation for machinery, construction materials, and heavy industrial cargo.",
  },
  {
    icon: "⚡",
    title: "Express Delivery",
    desc: "Urgent shipment? Our express service ensures your goods reach faster.",
  },
  {
    icon: "️",
    title: "All India Network",
    desc: "Strong transport network covering all major cities and states across India.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .fleet-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
        .cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Info Box Styles */
        .info-box {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 22px 26px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-left: 5px solid #e05a1c;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .info-box-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .info-box-row:last-child {
          margin-bottom: 0;
        }
        .service-badge {
          background: #e05a1c;
          color: white;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1;
          white-space: nowrap;
        }
        .service-area-text {
          color: white;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.5;
        }
        .office-row {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .office-pin {
          font-size: 1.2rem;
          flex-shrink: 0;
          line-height: 1;
        }
        .office-label {
          color: #fbbf24;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5;
          margin-bottom: 4px;
        }
        .office-address {
          color: #d0d8f0;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 24px; }
          .services-grid { grid-template-columns: 1fr; gap: 14px; }
          .fleet-grid { grid-template-columns: 1fr; gap: 14px; }
          .why-grid { grid-template-columns: 1fr; gap: 24px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cta-btns { flex-direction: column; }
          .cta-btns a { text-align: center; }
          .why-img { display: none; }

          /* Info Box Mobile Responsive */
          .info-box {
            padding: 16px 18px;
            border-left-width: 4px;
          }
          .info-box-row {
            gap: 8px;
            margin-bottom: 12px;
          }
          .service-badge {
            font-size: 0.7rem;
            padding: 4px 10px;
          }
          .service-area-text {
            font-size: 0.95rem;
            font-weight: 600;
          }
          .office-row {
            gap: 8px;
          }
          .office-pin {
            font-size: 1rem;
          }
          .office-label {
            font-size: 0.72rem;
            letter-spacing: 1;
          }
          .office-address {
            font-size: 0.85rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .info-box {
            padding: 14px 14px;
          }
          .service-area-text {
            font-size: 0.88rem;
          }
          .office-address {
            font-size: 0.82rem;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a2744 0%, #2d3d6b 60%, #1a2744 100%)",
          color: "white",
          padding: "60px 20px 48px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="hero-grid">
            <div>
              <div
                style={{
                  background: "#e05a1c",
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: 20,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  marginBottom: 16,
                  letterSpacing: 1,
                }}
              >
                🇮🇳 ALL INDIA TRANSPORT SERVICE
              </div>
              <h1
                style={{
                  fontSize: "clamp(1.7rem, 5vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: "0 0 16px",
                }}
              >
                Shri Khatu Shyam
                <br />
                <span style={{ color: "#e05a1c" }}>Transport Co.</span>
              </h1>

              {/* ✅ Responsive Info Box */}
              <div className="info-box">
                {/* Working Area */}
                <div className="info-box-row">
                  <span className="service-badge">🚛 SERVICE AREA</span>
                  <span className="service-area-text">
                    DELHI NCR • NOIDA • UTTAR PRADESH
                  </span>
                </div>

                {/* Head Office */}
                <div className="office-row">
                  <span className="office-pin">📌</span>
                  <div>
                    <div className="office-label">MAIN HEAD OFFICE</div>
                    <div className="office-address">
                      A-239, IInd Floor, T.P. Nagar, Sector-69,
                      <br />
                      Gautam Budh Nagar, Noida, U.P. — 201307
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-btns">
                <Link
                  href="/quote"
                  style={{
                    background: "#e05a1c",
                    color: "white",
                    padding: "13px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  Book Now
                </Link>
                <a
                  href="tel:9410461549"
                  style={{
                    border: "2px solid white",
                    color: "white",
                    padding: "11px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  📞 Call Now
                </a>
              </div>
              <div
                style={{ marginTop: 20, fontSize: "0.88rem", color: "#8898bb" }}
              >
                ✓ Full Load &nbsp; ✓ Door-to-Door &nbsp; ✓
                24×7
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ANIMATED STATS */}
      <AnimatedStats />

      {/* SERVICES */}
      <section style={{ padding: "56px 20px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            Comprehensive transport solutions for every need
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div
                key={s.title}
                className="card"
                style={{ padding: "24px 20px", textAlign: "left" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>
                  {s.icon}
                </div>
                <h3
                  style={{
                    color: "#1a2744",
                    fontWeight: 700,
                    marginBottom: 8,
                    fontSize: "1rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/services"
              style={{
                background: "#e05a1c",
                color: "white",
                padding: "12px 28px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section style={{ padding: "56px 20px", background: "#f5f6fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 className="section-title">Our Trucks</h2>
            <p className="section-sub">
              Modern Eicher trucks — well-maintained, All India Permit
            </p>
          </div>
          <div className="fleet-grid">
            {["/truck3.jpeg", "/truck5.jpeg", "/truck6.jpeg"].map((src, i) => (
              <div key={i} className="card">
                <Image
                  src={src}
                  alt={`SKTS Truck ${i + 1}`}
                  width={400}
                  height={240}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    padding: "12px 16px",
                    fontWeight: 600,
                    color: "#1a2744",
                    fontSize: "0.9rem",
                  }}
                >
                  Eicher Truck — All India Permit
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link
              href="/fleet"
              style={{
                background: "#e05a1c",
                color: "white",
                padding: "12px 28px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              See Full Truck Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{ padding: "56px 20px", background: "#1a2744", color: "white" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="why-grid">
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                Why Choose <span style={{ color: "#e05a1c" }}>Us?</span>
              </h2>
              <p
                style={{ color: "#8898bb", lineHeight: 1.8, marginBottom: 20 }}
              >
                Experienced team, modern fleet — your goods reach safely and on
                time, every time.
              </p>
              {[
                "✓ 24×7 Customer Support",
                "✓ All India Permit — Pan India Network",
                "✓ Experienced & Trained Drivers",
                "✓ Safe & Secured Transportation",
                "✓ Competitive & Transparent Pricing",
                "✓ Timely Delivery Guaranteed",
                "✓ Full Load Available",
              ].map((p) => (
                <div
                  key={p}
                  style={{
                    color: "#c0cde8",
                    padding: "4px 0",
                    fontSize: "0.92rem",
                  }}
                >
                  {p}
                </div>
              ))}
              <div style={{ marginTop: 24 }}>
                <Link
                  href="/about"
                  style={{
                    background: "#e05a1c",
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Know More About Us
                </Link>
              </div>
            </div>
            <div
              className="why-img"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/truck1.jpeg"
                alt="SKTS Fleet"
                width={500}
                height={360}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "56px 20px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-sub">Trusted by businesses across India</p>
          <ReviewDisplay />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#e05a1c",
          padding: "48px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
            fontWeight: 800,
            marginBottom: 10,
          }}
        >
          Ready to Ship? Get a Free Quote Now!
        </h2>
        <p style={{ color: "#ffe0d0", marginBottom: 24, fontSize: "0.95rem" }}>
          Call us or fill the form — we&apos;ll get back to you within minutes.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/quote"
            style={{
              background: "white",
              color: "#e05a1c",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Book Now
          </Link>
          <a
            href="tel:9410461549"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "10px 28px",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            📞 9410461549
          </a>
        </div>
      </section>
    </>
  );
}