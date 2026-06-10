import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Dot — instant
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 48 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 48 });

  // Ring — lagging parallax feel
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 18 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      // Detect dark/light section under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        // Simple heuristic: if element or any ancestor has dark bg
        const closest = el.closest('[style*="background: #111"], [style*="background:#111"], [id="hero"], [id="manifesto"], [id="journey"], [id="results"]');
        setIsDark(!!closest);
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-hover]")) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-hover]")) setHovered(false);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  const ringColor = isDark ? "rgba(248,245,239,0.4)" : "rgba(17,17,17,0.28)";

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: "fixed",
          top: -5,
          left: -5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#FF5A1F",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          mixBlendMode: "normal",
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Ring */}
      <motion.div
        animate={{
          scale: hovered ? 2.4 : 1,
          opacity: visible ? 1 : 0,
          borderColor: hovered ? "rgba(255,90,31,0.55)" : ringColor,
        }}
        transition={{
          scale: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.2 },
          borderColor: { duration: 0.25 },
        }}
        style={{
          x: ringX,
          y: ringY,
          position: "fixed",
          top: -22,
          left: -22,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: `1px solid ${ringColor}`,
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />

      {/* Glow trail on hover */}
      {hovered && (
        <motion.div
          style={{
            x: ringX,
            y: ringY,
            position: "fixed",
            top: -36,
            left: -36,
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,90,31,0.15) 0%, transparent 65%)",
            filter: "blur(8px)",
            pointerEvents: "none",
            zIndex: 99997,
          }}
        />
      )}
    </>
  );
}
