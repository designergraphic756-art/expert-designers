import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across Branding, Packaging & Marketing",
    accentColor: "#FF5A1F",
    glowColor: "rgba(255,90,31,0.14)",
    textColor: "#F8F5EF",
  },
  {
    value: 100,
    suffix: "+",
    label: "Clients Served",
    sublabel: "From Startups to Industry Leaders",
    accentColor: "#D9FF45",
    glowColor: "rgba(217,255,69,0.1)",
    textColor: "#D9FF45",
  },
  {
    value: 2021,
    suffix: "",
    label: "Year Established",
    sublabel: "Premium Creative Production Since",
    accentColor: "#FF5A1F",
    glowColor: "rgba(255,90,31,0.12)",
    textColor: "#F8F5EF",
  },
  {
    value: 7,
    suffix: "+",
    label: "Leading Pharma Brands",
    sublabel: "India's Most Trusted Sector",
    accentColor: "#D9FF45",
    glowColor: "rgba(217,255,69,0.09)",
    textColor: "#D9FF45",
  },
];

function CountUp({
  end,
  suffix,
  active,
  color,
}: {
  end: number;
  suffix: string;
  active: boolean;
  color: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2400;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, end]);

  return (
    <span style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

export function Results() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      id="results"
      style={{
        background: "#111111",
        padding: "clamp(80px, 10vw, 140px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain layer */}
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
          opacity: 0.03,
        }}
      >
        <filter id="results-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#results-grain)" />
      </svg>

      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "20%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,90,31,0.07) 0%, transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(217,255,69,0.05) 0%, transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#F8F5EF",
          opacity: 0.25,
          marginBottom: "clamp(48px, 6vw, 72px)",
          padding: "0 6vw",
          position: "relative",
          zIndex: 2,
        }}
      >
        10 — Results
      </motion.div>

      {/* Stats grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2"
        style={{ gap: "0", position: "relative", zIndex: 2 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
            style={{
              position: "relative",
              padding: "clamp(40px, 5vw, 68px) clamp(32px, 5.5vw, 72px)",
              borderRight:
                i % 2 === 0 ? "1px solid rgba(248,245,239,0.06)" : "none",
              borderBottom:
                i < 2 ? "1px solid rgba(248,245,239,0.06)" : "none",
              overflow: "hidden",
            }}
          >
            {/* Stat-specific glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 1.2, delay: 0.3 + i * 0.12 }}
              style={{
                position: "absolute",
                top: "-20%",
                left: i % 2 === 0 ? "0%" : "auto",
                right: i % 2 !== 0 ? "0%" : "auto",
                width: "70%",
                height: "140%",
                borderRadius: "50%",
                background: `radial-gradient(ellipse, ${stat.glowColor} 0%, transparent 65%)`,
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Ghost number background */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(140px, 22vw, 280px)",
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                color: stat.accentColor,
                opacity: 0.04,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {stat.value}
            </div>

            {/* Number */}
            <div
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(80px, 13vw, 160px)",
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                active={isInView}
                color={stat.textColor}
              />
            </div>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: EASE }}
              style={{
                height: "1px",
                background: stat.accentColor,
                width: "56px",
                transformOrigin: "left",
                marginBottom: "18px",
                position: "relative",
                zIndex: 2,
              }}
            />

            {/* Label */}
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontWeight: 500,
                color: "#F8F5EF",
                marginBottom: "8px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {stat.label}
            </div>

            {/* Sub label */}
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#F8F5EF",
                opacity: 0.3,
                position: "relative",
                zIndex: 2,
              }}
            >
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom lime sweep */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, #D9FF45 0%, rgba(217,255,69,0.0) 100%)",
          marginTop: "clamp(48px, 6vw, 72px)",
          transformOrigin: "left",
          width: "clamp(200px, 30vw, 360px)",
          marginLeft: "6vw",
          position: "relative",
          zIndex: 2,
        }}
      />
    </section>
  );
}
