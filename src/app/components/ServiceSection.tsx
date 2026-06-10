import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceSectionProps {
  sectionNum: string;
  sectionLabel: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  dark: boolean;
  id: string;
}

export function ServiceSection({
  sectionNum,
  sectionLabel,
  number,
  title,
  description,
  services,
  dark,
  id,
}: ServiceSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const bg = dark ? "#111111" : "#F8F5EF";
  const fg = dark ? "#F8F5EF" : "#111111";
  const dimFg = dark ? "rgba(248,245,239,0.2)" : "rgba(17,17,17,0.18)";
  const mutedFg = dark ? "rgba(248,245,239,0.4)" : "rgba(17,17,17,0.45)";
  const borderColor = dark ? "rgba(248,245,239,0.1)" : "rgba(17,17,17,0.1)";
  const accentColor = "#FF5A1F";

  return (
    <section
      ref={ref}
      id={id}
      style={{
        background: bg,
        padding: "clamp(80px, 12vw, 160px) 6vw",
        position: "relative",
        borderBottom: `1px solid ${borderColor}`,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: "48px",
          left: "6vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: fg,
          opacity: 0.3,
        }}
      >
        {sectionNum} — {sectionLabel}
      </motion.div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[auto_1fr]"
        style={{ gap: "0 8vw", alignItems: "start" }}
      >
        {/* Giant faded number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(100px, 20vw, 280px)",
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
            color: dimFg,
            userSelect: "none",
            marginRight: "2vw",
          }}
        >
          {number}
        </motion.div>

        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "clamp(52px, 8.5vw, 120px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: fg,
              marginBottom: "40px",
            }}
          >
            {title}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ height: "2px", width: "60px", background: accentColor, marginBottom: "32px" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.4vw, 20px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: fg,
              opacity: 0.6,
              maxWidth: "600px",
              marginBottom: "48px",
            }}
          >
            {description}
          </motion.p>

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: mutedFg,
                  padding: "12px 24px 12px 0",
                  marginRight: "24px",
                  borderTop: `1px solid ${borderColor}`,
                  minWidth: "200px",
                }}
              >
                {s}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
