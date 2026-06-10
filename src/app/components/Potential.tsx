import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Potential() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="potential"
      style={{
        background: "#F8F5EF",
        padding: "clamp(80px, 14vw, 180px) 6vw",
        position: "relative",
        borderBottom: "1px solid rgba(17,17,17,0.1)",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{
          gap: "6vw",
          alignItems: "end",
          maxWidth: "1400px",
        }}
      >
        {/* Left: Label + Big headline */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              opacity: 0.4,
              marginBottom: "40px",
            }}
          >
            03 — Brand Potential
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            Every Brand
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            Has Potential.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.26, ease: EASE }}
            style={{
              marginTop: "8px",
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.18)",
            }}
          >
            Most Never
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.34, ease: EASE }}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.18)",
            }}
          >
            Unlock It.
          </motion.div>
        </div>

        {/* Right: Body copy */}
        <div style={{ paddingBottom: "12px" }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#FF5A1F",
                marginBottom: "36px",
              }}
            />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(15px, 1.4vw, 20px)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#111111",
                opacity: 0.65,
                marginBottom: "32px",
              }}
            >
              The gap between a forgettable brand and an iconic one isn't talent — it's the courage to commit to a vision and the craft to execute it flawlessly.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(15px, 1.4vw, 20px)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#111111",
                opacity: 0.65,
              }}
            >
              We work with brands that are ready to be seen — brands that demand to be felt. Not comfortable work. Necessary work.
            </p>

            <div style={{ marginTop: "48px", display: "flex", gap: "40px" }}>
              {[["10+", "Years"], ["500+", "Projects"], ["100+", "Clients"]].map(([num, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontSize: "clamp(32px, 3.5vw, 48px)",
                      fontWeight: 900,
                      color: "#111111",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#111111",
                      opacity: 0.4,
                      marginTop: "6px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
