import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;
const WA_LINK = "https://wa.me/917060258437";

const lines = ["READY TO BUILD", "SOMETHING", "PEOPLE REMEMBER?"];

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        background: "#D9FF45",
        minHeight: "82vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(80px, 12vw, 160px) 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle noise texture */}
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          pointerEvents: "none",
          zIndex: 0,
          animationName: "grainShift",
          animationDuration: "0.45s",
          animationTimingFunction: "steps(1)",
          animationIterationCount: "infinite",
          opacity: 0.025,
        }}
      >
        <filter id="cta-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cta-grain)" />
      </svg>

      {/* Structural grid overlay */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 1,
        }}
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`v${i}`} x1={i * 220} y1="0" x2={i * 220} y2="800" stroke="#111" strokeWidth="0.7" />
        ))}
        {[1, 2, 3].map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 200} x2="1440" y2={i * 200} stroke="#111" strokeWidth="0.7" />
        ))}
        <line x1="0" y1="0" x2="80" y2="80" stroke="#111" strokeWidth="0.5" />
        <line x1="1440" y1="0" x2="1360" y2="80" stroke="#111" strokeWidth="0.5" />
        <line x1="0" y1="800" x2="80" y2="720" stroke="#111" strokeWidth="0.5" />
        <line x1="1440" y1="800" x2="1360" y2="720" stroke="#111" strokeWidth="0.5" />
      </svg>

      {/* Ghost ED monogram */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "2vw",
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontSize: "clamp(200px, 34vw, 480px)",
          fontWeight: 900,
          lineHeight: 0.82,
          letterSpacing: "-0.03em",
          color: "rgba(17,17,17,0.06)",
          userSelect: "none",
          pointerEvents: "none",
          textTransform: "uppercase",
          zIndex: 1,
        }}
      >
        ED
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#111111",
            opacity: 0.45,
            marginBottom: "clamp(32px, 5vw, 52px)",
          }}
        >
          12 — Let's Build Something
        </motion.div>

        {/* Headline — clip reveal */}
        {lines.map((line, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "105%" }}
              animate={isInView ? { y: "0%" } : { y: "105%" }}
              transition={{ duration: 0.95, delay: 0.06 + i * 0.1, ease: EASE }}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(52px, 11vw, 160px)",
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#111111",
                display: "block",
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}

        {/* Horizontal accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          style={{
            height: "2px",
            background: "#111111",
            width: "clamp(80px, 12vw, 140px)",
            transformOrigin: "left",
            marginTop: "clamp(28px, 3.5vw, 44px)",
            marginBottom: "clamp(28px, 3.5vw, 44px)",
            opacity: 0.3,
          }}
        />

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 2.5vw, 40px)",
            flexWrap: "wrap",
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F8F5EF",
              background: "#111111",
              padding: "18px 40px",
              textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease, gap 0.3s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF5A1F";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111111";
            }}
          >
            Start a Project
            <span style={{ display: "block", width: "18px", height: "1px", background: "currentColor" }} />
          </a>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <a
              href="mailto:info@expertdesigners.in"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "#111111",
                opacity: 0.5,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >
              info@expertdesigners.in
            </a>
            <a
              href="tel:+918171411727"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 400,
                color: "#111111",
                opacity: 0.35,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.35")}
            >
              +91 8171411727
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
