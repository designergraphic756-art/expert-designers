import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const clients = [
  "Cipla",
  "GSK",
  "Alkem Laboratories",
  "Torrent Pharma",
  "Sun Pharma",
  "Zydus",
  "Dr. Reddy's",
  "Lupin",
  "Himalaya",
  "Marico",
  "Tata Consumer",
  "Dabur",
];

export function Clients() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="clients"
      style={{
        background: "#F8F5EF",
        padding: "clamp(80px, 10vw, 140px) 6vw",
        borderTop: "1px solid rgba(17,17,17,0.1)",
        borderBottom: "1px solid rgba(17,17,17,0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(48px, 6vw, 80px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              opacity: 0.35,
              marginBottom: "16px",
            }}
          >
            11 — Trusted By
          </div>
          <div
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            Industry Leaders.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "#111111",
            opacity: 0.4,
            maxWidth: "240px",
            lineHeight: 1.6,
            textAlign: "right",
          }}
        >
          Across pharma, FMCG, fintech, and consumer brands.
        </motion.div>
      </div>

      {/* Client grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "0", borderTop: "1px solid rgba(17,17,17,0.1)" }}
      >
        {clients.map((client, i) => (
          <motion.div
            key={client}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
            style={{
              padding: "clamp(24px, 3.5vw, 40px) clamp(16px, 2vw, 28px)",
              borderRight: (i + 1) % 4 !== 0 ? "1px solid rgba(17,17,17,0.1)" : "none",
              borderBottom: i < 8 ? "1px solid rgba(17,17,17,0.1)" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(17,17,17,0.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(13px, 1.2vw, 16px)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#111111",
                opacity: 0.45,
                textAlign: "center",
                transition: "opacity 0.25s ease",
              }}
            >
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
