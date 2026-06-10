import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Each statement: text, visual weight, color treatment
const statements = [
  { text: "We build brands.", weight: "hero", color: "#F8F5EF", delay: 0 },
  { text: "Not just logos.", weight: "ghost", color: "rgba(248,245,239,0.22)", delay: 0.14 },
  { text: "Not just packaging.", weight: "ghost", color: "rgba(248,245,239,0.22)", delay: 0.22 },
  { text: "Not just campaigns.", weight: "ghost", color: "rgba(248,245,239,0.22)", delay: 0.3 },
  { text: "We create experiences", weight: "accent", color: "#FF5A1F", delay: 0.42 },
  { text: "people remember.", weight: "hero", color: "#F8F5EF", delay: 0.52 },
];

function WordMaskReveal({
  text,
  color,
  baseDelay,
  isVisible,
  fontSize,
}: {
  text: string;
  color: string;
  baseDelay: number;
  isVisible: boolean;
  fontSize: string;
}) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.28em",
            verticalAlign: "bottom",
          }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={isVisible ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.88,
              delay: baseDelay + i * 0.055,
              ease: EASE,
            }}
            style={{ display: "inline-block", color, fontFamily: "'Big Shoulders Display', sans-serif", fontSize, fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.01em", textTransform: "uppercase" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function PackagingDieline({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className="hidden xl:flex"
      style={{
        position: "absolute",
        right: "0",
        top: "0",
        bottom: "0",
        width: "38vw",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <motion.svg
        viewBox="0 0 500 700"
        fill="none"
        style={{ width: "min(36vw, 420px)", opacity: 0.55 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.55 : 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Main box face */}
        <motion.rect
          x="120" y="120" width="260" height="460"
          stroke="#F8F5EF"
          strokeWidth="0.9"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: EASE }}
        />
        {/* Top tab */}
        <motion.path
          d="M120 120 L80 60 L380 60 L380 120"
          stroke="#F8F5EF"
          strokeWidth="0.7"
          strokeDasharray="8 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
        />
        {/* Bottom tab */}
        <motion.path
          d="M120 580 L80 640 L380 640 L380 580"
          stroke="#F8F5EF"
          strokeWidth="0.7"
          strokeDasharray="8 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: EASE }}
        />
        {/* Left side panel */}
        <motion.rect
          x="20" y="120" width="100" height="460"
          stroke="#F8F5EF"
          strokeWidth="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
        />
        {/* Right side panel */}
        <motion.rect
          x="380" y="120" width="100" height="460"
          stroke="#F8F5EF"
          strokeWidth="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
        />
        {/* Center fold lines */}
        <motion.line x1="120" y1="120" x2="120" y2="580" stroke="#F8F5EF" strokeWidth="0.4" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.3, ease: EASE }}
        />
        <motion.line x1="380" y1="120" x2="380" y2="580" stroke="#F8F5EF" strokeWidth="0.4" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.35, ease: EASE }}
        />
        {/* Horizontal score lines */}
        <motion.line x1="120" y1="260" x2="380" y2="260" stroke="#F8F5EF" strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        <motion.line x1="120" y1="440" x2="380" y2="440" stroke="#F8F5EF" strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
        />
        {/* Label area */}
        <motion.rect
          x="150" y="285" width="200" height="140"
          stroke="#FF5A1F"
          strokeWidth="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 0.5 : 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
        />
        {/* Label lines */}
        <motion.line x1="165" y1="315" x2="335" y2="315" stroke="#F8F5EF" strokeWidth="0.4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          style={{ transformOrigin: "150px 315px" }}
          transition={{ duration: 0.7, delay: 1.65 }}
        />
        <motion.line x1="165" y1="338" x2="305" y2="338" stroke="#F8F5EF" strokeWidth="0.3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          style={{ transformOrigin: "150px 338px" }}
          transition={{ duration: 0.6, delay: 1.72 }}
        />
        <motion.line x1="165" y1="358" x2="320" y2="358" stroke="#F8F5EF" strokeWidth="0.3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          style={{ transformOrigin: "150px 358px" }}
          transition={{ duration: 0.6, delay: 1.79 }}
        />
        {/* Registration marks */}
        <g stroke="#FF5A1F" strokeWidth="0.7" opacity="0.45">
          <line x1="8" y1="46" x2="24" y2="46" /><line x1="16" y1="38" x2="16" y2="54" />
          <line x1="476" y1="46" x2="492" y2="46" /><line x1="484" y1="38" x2="484" y2="54" />
          <line x1="8" y1="654" x2="24" y2="654" /><line x1="16" y1="646" x2="16" y2="662" />
          <line x1="476" y1="654" x2="492" y2="654" /><line x1="484" y1="646" x2="484" y2="662" />
        </g>
        {/* Lime accent bar */}
        <motion.rect
          x="150" y="160" width="200" height="6"
          fill="#D9FF45"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          style={{ transformOrigin: "150px 163px" }}
          transition={{ duration: 0.9, delay: 1.6, ease: EASE }}
          opacity={0.35}
        />
      </motion.svg>
    </div>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });

  const fontSize = "clamp(44px, 7.2vw, 105px)";

  return (
    <section
      ref={ref}
      id="manifesto"
      style={{
        background: "#111111",
        padding: "clamp(80px, 12vw, 160px) 6vw",
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
        <filter id="manifesto-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#manifesto-grain)" />
      </svg>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          top: "48px",
          right: "6vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#F8F5EF",
          opacity: 0.18,
          zIndex: 2,
        }}
      >
        02 — Manifesto
      </motion.div>

      {/* Packaging dieline (right side) */}
      <PackagingDieline isVisible={isInView} />

      {/* Statement blocks */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "min(100%, 900px)",
        }}
      >
        {statements.map((s, i) => (
          <div key={i} style={{ display: "block", marginBottom: "0.08em" }}>
            <WordMaskReveal
              text={s.text}
              color={s.color}
              baseDelay={s.delay}
              isVisible={isInView}
              fontSize={fontSize}
            />
          </div>
        ))}
      </div>

      {/* Horizontal sweep line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
        style={{
          marginTop: "clamp(48px, 7vw, 80px)",
          height: "1px",
          background: "linear-gradient(to right, #FF5A1F, rgba(255,90,31,0.0))",
          width: "clamp(160px, 28vw, 320px)",
          transformOrigin: "left",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* Lime accent dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.3, ease: EASE }}
        style={{
          position: "absolute",
          zIndex: 2,
          marginTop: "-5px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#D9FF45",
        }}
      />

      {/* Brand descriptor */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        style={{
          marginTop: "40px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#F8F5EF",
          opacity: 0.3,
          position: "relative",
          zIndex: 2,
        }}
      >
        Expert Designers — New Delhi & Roorkee, India
      </motion.p>
    </section>
  );
}
