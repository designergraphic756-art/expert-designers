interface MarqueeProps {
  dark?: boolean;
  reversed?: boolean;
}

const MARQUEE_TEXT = "Branding · Packaging Design · Print Production · Digital Marketing · Brand Strategy · Visual Identity · Creative Direction · ";

export function Marquee({ dark = true, reversed = false }: MarqueeProps) {
  const repeated = `${MARQUEE_TEXT}${MARQUEE_TEXT}`;

  return (
    <div
      style={{
        background: dark ? "#111111" : "#F8F5EF",
        borderTop: dark ? "none" : "1px solid rgba(17,17,17,0.1)",
        borderBottom: dark ? "none" : "1px solid rgba(17,17,17,0.1)",
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: `marqueeScroll ${reversed ? "25s" : "30s"} linear infinite ${reversed ? "reverse" : ""}`,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: dark ? "rgba(248, 245, 239, 0.45)" : "rgba(17, 17, 17, 0.35)",
        }}
      >
        <span>{repeated}</span>
      </div>
    </div>
  );
}
