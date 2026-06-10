import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const cols = [
  {
    label: "Services",
    links: ["Branding", "Packaging Design", "Print Production", "Digital Marketing"],
  },
  {
    label: "Company",
    links: ["About Us", "Selected Work", "Our Process", "Awards & Recognition"],
  },
  {
    label: "Contact",
    links: [
      "info@expertdesigners.in",
      "+91 8171411727",
      "New Delhi, India",
      "Roorkee, Uttarakhand",
    ],
  },
];

const socials = ["LinkedIn", "Instagram", "Behance", "Dribbble"];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <footer
      ref={ref}
      id="footer"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(248,245,239,0.06)",
      }}
    >
      {/* Main footer body */}
      <div
        style={{
          padding: "clamp(60px, 9vw, 120px) 6vw clamp(48px, 6vw, 80px)",
          borderBottom: "1px solid rgba(248,245,239,0.07)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]" style={{ gap: "clamp(48px, 8vw, 100px)", alignItems: "start" }}>

          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: "-0.015em",
                textTransform: "uppercase",
                color: "#F8F5EF",
                marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}
            >
              Expert<br />Designers
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#F8F5EF",
                opacity: 0.3,
                maxWidth: "340px",
                marginBottom: "clamp(28px, 3vw, 40px)",
              }}
            >
              Premium creative studio specialising in branding, packaging, print production, and digital marketing. New Delhi & Roorkee, India.
            </p>

            {/* Orange accent line + tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "36px", height: "2px", background: "#FF5A1F", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#F8F5EF",
                  opacity: 0.25,
                }}
              >
                Est. 2021
              </span>
            </div>
          </motion.div>

          {/* Links columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ gap: "clamp(32px, 5vw, 64px)" }}
          >
            {cols.map((col) => (
              <div key={col.label}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#F8F5EF",
                    opacity: 0.28,
                    marginBottom: "clamp(16px, 2vw, 24px)",
                  }}
                >
                  {col.label}
                </div>
                {col.links.map((link) => (
                  <div
                    key={link}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(13px, 1vw, 14px)",
                      fontWeight: 300,
                      color: "#F8F5EF",
                      opacity: 0.42,
                      marginBottom: "11px",
                      cursor: "pointer",
                      transition: "opacity 0.2s ease",
                      lineHeight: 1.5,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.42")}
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          padding: "clamp(20px, 2.5vw, 28px) 6vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#F8F5EF",
            opacity: 0.18,
          }}
        >
          © 2025 Expert Designers. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: "clamp(20px, 2.5vw, 32px)" }}>
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F8F5EF",
                opacity: 0.22,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.22")}
            >
              {s}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
