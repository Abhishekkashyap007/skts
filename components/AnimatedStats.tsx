'use client';
import { useState, useEffect, useRef } from 'react';

interface StatItem {
  num: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { num: "4.5", label: "Customer Rating", prefix: "★ " },
  { num: "15", label: "Years Experience", suffix: "+" },
  { num: "500", label: "Deliveries Done", suffix: "+" },
  { num: "24", label: "Service Available", suffix: "/7" },
];

function AnimatedNumber({ 
  target, 
  suffix = "", 
  prefix = "",
  isDecimal = false 
}: { 
  target: number; 
  suffix?: string; 
  prefix?: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = target * easeOutQuart;
      
      if (isDecimal) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isDecimal]);

  return (
    <span>
      {prefix}{isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section style={{ background: "#e05a1c", padding: "24px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="stats-grid">
          {stats.map((s, index) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                {index === 0 ? (
                  <>
                    <span style={{ color: "#fbbf24", fontSize: "1.6rem" }}>★</span>
                    <AnimatedNumber target={4.5} isDecimal={true} />
                  </>
                ) : (
                  <AnimatedNumber 
                    target={parseFloat(s.num)} 
                    suffix={s.suffix} 
                    prefix={s.prefix}
                  />
                )}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#ffe0d0",
                  fontWeight: 500,
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}