import { useRef } from "react";
import { motion, useInView } from "motion/react";
import founderImg from "../../imports/The_Founder.png";

const EASE = [0.16, 1, 0.3, 1] as const;

const words = [
  "A decade inside branding,",
  "packaging, printing and growth",
  "systems taught us one thing:",
];

export function Founder() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      id="founder"
      style={{
        background: "#F8F5EF",
        padding: "clamp(80px, 10vw, 140px) 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Structural accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "rgba(17,17,17,0.1)", transformOrigin: "left",
          marginBottom: "clamp(48px, 6vw, 80px)", position: "relative", zIndex: 1 }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#111111", opacity: 0.32,
          marginBottom: "clamp(40px, 5vw, 64px)" }}
      >
        11 — A Note from the Founder
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px]"
        style={{ gap: "clamp(48px, 8vw, 112px)", alignItems: "start" }}>

        {/* Left: editorial text */}
        <div>
          {/* Opening statement */}
          <div style={{ marginBottom: "clamp(32px, 4vw, 52px)" }}>
            {words.map((line, i) => (
              <div key={i} style={{ overflow: "hidden", display: "block" }}>
                <motion.div
                  initial={{ y: "108%", skewY: 1 }}
                  animate={isInView ? { y: "0%", skewY: 0 } : { y: "108%", skewY: 1 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: EASE }}
                  style={{ fontFamily: "'Big Shoulders Display', sans-serif",
                    fontSize: "clamp(28px, 3.8vw, 58px)", fontWeight: 900, lineHeight: 0.95,
                    letterSpacing: "-0.01em", textTransform: "uppercase", color: "#111111",
                    display: "block" }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
            <div style={{ overflow: "hidden", display: "block" }}>
              <motion.div
                initial={{ y: "108%", skewY: 1 }}
                animate={isInView ? { y: "0%", skewY: 0 } : { y: "108%", skewY: 1 }}
                transition={{ duration: 0.9, delay: 0.34, ease: EASE }}
                style={{ fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: "clamp(28px, 3.8vw, 58px)", fontWeight: 900, lineHeight: 0.95,
                  letterSpacing: "-0.01em", textTransform: "uppercase", color: "#FF5A1F",
                  display: "block" }}
              >
                Growth happens when every
              </motion.div>
            </div>
            <div style={{ overflow: "hidden", display: "block" }}>
              <motion.div
                initial={{ y: "108%", skewY: 1 }}
                animate={isInView ? { y: "0%", skewY: 0 } : { y: "108%", skewY: 1 }}
                transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
                style={{ fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: "clamp(28px, 3.8vw, 58px)", fontWeight: 900, lineHeight: 0.95,
                  letterSpacing: "-0.01em", textTransform: "uppercase", color: "#FF5A1F",
                  display: "block" }}
              >
                touchpoint works together.
              </motion.div>
            </div>
          </div>

          {/* Manifesto statements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            style={{ maxWidth: "520px" }}
          >
            <div style={{ borderLeft: "2px solid rgba(17,17,17,0.14)", paddingLeft: "22px",
              marginBottom: "clamp(28px, 3vw, 40px)" }}>
              {[
                "Design should do more than look beautiful.",
                "It should build trust.",
                "Create recognition.",
                "Drive growth.",
                "And stay memorable.",
              ].map((stmt, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.06, ease: EASE }}
                  style={{ fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: i === 0 ? 400 : 300,
                    lineHeight: 1.7, color: "#111111",
                    opacity: i === 0 ? 0.7 : 0.4,
                    marginBottom: i < 4 ? "6px" : 0 }}
                >
                  {stmt}
                </motion.p>
              ))}
            </div>

            {/* Signature block */}
            <motion.div
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "2px", background: "#FF5A1F" }}/>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
                  letterSpacing: "0.2em", textTransform: "uppercase", color: "#111111", opacity: 0.28 }}>
                  Founder
                </div>
              </div>
              <div style={{ fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: 900, lineHeight: 0.95,
                letterSpacing: "-0.01em", textTransform: "uppercase", color: "#111111",
                marginBottom: "8px" }}>
                Shahrukh Khan
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                letterSpacing: "0.1em", color: "#111111", opacity: 0.35 }}>
                Founder, Expert Designers — Est. 2021
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 20 }}
          transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
          style={{ position: "relative" }}
        >
          {/* Portrait frame */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={founderImg}
              alt="Shahrukh Khan — Founder, Expert Designers"
              style={{ width: "100%", height: "auto", display: "block",
                aspectRatio: "3/4", objectFit: "cover", objectPosition: "top center",
                filter: "grayscale(8%)" }}
            />
            {/* Lime accent corner */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px",
              background: "#D9FF45" }}/>
            {/* Orange vertical accent */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "40%",
              background: "#FF5A1F", opacity: 0.7 }}/>
          </div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ marginTop: "16px", display: "flex", justifyContent: "space-between",
              alignItems: "flex-end" }}>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
                letterSpacing: "0.2em", textTransform: "uppercase", color: "#111111", opacity: 0.28,
                marginBottom: "4px" }}>
                New Delhi, India
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
                letterSpacing: "0.2em", textTransform: "uppercase", color: "#111111", opacity: 0.18 }}>
                Est. 2021
              </div>
            </div>
            {/* Decorative registration mark */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2 }}>
              <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="0.8"/>
              <line x1="2" y1="12" x2="22" y2="12" stroke="#111" strokeWidth="0.6"/>
              <line x1="12" y1="2" x2="12" y2="22" stroke="#111" strokeWidth="0.6"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom structural line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
        style={{ height: "1px", background: "rgba(17,17,17,0.08)", transformOrigin: "left",
          marginTop: "clamp(48px, 6vw, 80px)" }}
      />
    </section>
  );
}
