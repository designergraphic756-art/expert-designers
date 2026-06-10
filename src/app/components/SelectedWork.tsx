import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    index: "001",
    name: "Lumière",
    client: "Maison Lumière",
    year: "2024",
    category: "Brand Identity",
    tags: ["Branding", "Packaging", "Strategy"],
    accent: "#FF5A1F",
    bg: "linear-gradient(145deg, #1C0800 0%, #2E0F00 40%, #111111 100%)",
    challenge: "A heritage fragrance house entering India's luxury market with no existing brand architecture — only a name and a vision.",
    thinking: "Luxury is built on restraint. We stripped the identity to its most essential signals, allowing quality and provenance to speak through silence.",
    execution: "Complete brand architecture across 12 markets: visual language, packaging system, retail experience, and digital presence. Every touchpoint engineered to communicate premium before a word is read.",
    impact: "Launched across 3 flagship retail partners in India. 94% of surveyed consumers rated brand as 'luxury' or 'ultra-premium' at first encounter.",
  },
  {
    index: "002",
    name: "Terra Prima",
    client: "Terra Prima Foods",
    year: "2023",
    category: "Packaging Design",
    tags: ["Packaging", "Print", "Identity"],
    accent: "#D9FF45",
    bg: "linear-gradient(145deg, #0A1200 0%, #152000 40%, #111111 100%)",
    challenge: "28 SKUs across a premium organic food range competing against established players. The packaging needed to stand out at shelf while signalling provenance and trust.",
    thinking: "Organic doesn't mean rustic. We positioned Terra Prima as the intelligent choice — precise, considered, and confident rather than nostalgic or earthy.",
    execution: "Full packaging system across 28 SKUs: structural dielines, label systems, material specifications, and print production management for 6 international markets.",
    impact: "Shelf placement secured in 3 premium retail chains within 6 months of launch. 40% increase in trial rate compared to previous packaging.",
  },
  {
    index: "003",
    name: "Alkem Labs",
    client: "Alkem Laboratories",
    year: "2024",
    category: "Brand Refresh",
    tags: ["Brand Refresh", "Digital", "Print"],
    accent: "#FF5A1F",
    bg: "linear-gradient(145deg, #050A18 0%, #0A1228 40%, #111111 100%)",
    challenge: "A leading pharmaceutical company with strong market position but fragmented brand expression across consumer touchpoints. Consistency was costing them trust.",
    thinking: "Pharmaceutical brands earn trust through clarity and authority. We rebuilt the visual language around these two principles without disrupting what was already working.",
    execution: "Corporate brand refresh across all consumer pharma touchpoints — identity, print collateral, digital assets, packaging systems, and a 200-page brand guidelines document.",
    impact: "40+ digital assets delivered. Consistent brand expression across 15 consumer product lines. Internal brand adoption rate of 96% within 90 days.",
  },
  {
    index: "004",
    name: "Volant Mobility",
    client: "Volant EV",
    year: "2024",
    category: "Brand Strategy",
    tags: ["Strategy", "Identity", "Launch"],
    accent: "#D9FF45",
    bg: "linear-gradient(145deg, #050E10 0%, #0A1A1C 40%, #111111 100%)",
    challenge: "An electric mobility startup entering a crowded India market at Series A. They needed a brand strong enough to attract both consumers and investors simultaneously.",
    thinking: "The EV market talks about the future. Volant needed to be the brand that makes the future feel like now — designed for people who make decisions rather than wait for them.",
    execution: "Brand strategy, complete visual identity, launch communications, investor pitch design, digital presence, and a product experience framework ready for Series A announcement.",
    impact: "Series A announcement coverage in 8 national publications. First-month pre-orders exceeded targets by 340%. Secured 2 fleet enterprise agreements within launch quarter.",
  },
  {
    index: "005",
    name: "Crescere Wellness",
    client: "Crescere Group",
    year: "2023",
    category: "360° Campaign",
    tags: ["Campaign", "OOH", "Digital"],
    accent: "#FF5A1F",
    bg: "linear-gradient(145deg, #100510 0%, #1A0820 40%, #111111 100%)",
    challenge: "A national wellness brand launching across India needed a campaign that built brand recognition and drove clinic footfall simultaneously — with a modest media budget.",
    thinking: "Wellness is deeply personal. Rather than broad awareness, we built a campaign architecture around specific moments of decision — where people consider their health most seriously.",
    execution: "Full-spectrum launch campaign: strategy, digital performance, OOH creative in 6 cities, in-clinic experience design, and content production across 90 days.",
    impact: "22% increase in new patient footfall across all clinic locations within the first quarter. Digital campaign achieved 4.2× ROAS. Brand awareness doubled in target markets.",
  },
  {
    index: "006",
    name: "Axiom",
    client: "Axiom Fintech",
    year: "2024",
    category: "Identity System",
    tags: ["Identity", "Motion", "Digital"],
    accent: "#D9FF45",
    bg: "linear-gradient(145deg, #0A0A0A 0%, #141414 40%, #111111 100%)",
    challenge: "A Series B fintech expanding from India to Southeast Asia needed an identity system that could carry authority in multiple markets without feeling foreign in any.",
    thinking: "Trust in finance is earned through confidence and consistency. We built a visual language precise enough to function as a compliance document and compelling enough to win a pitch room.",
    execution: "Comprehensive corporate identity: visual language, motion design language, digital product design system, print standards, and market adaptation guidelines for 4 target markets.",
    impact: "SEA expansion launched across Singapore, Indonesia, and Malaysia within 8 months. Investor documentation using new identity contributed to $12M Series B close.",
  },
];

function ProjectRow({ project, index, isInView }: {
  project: typeof projects[number]; index: number; isInView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.85, delay: index * 0.07, ease: EASE }}
      style={{ borderBottom: "1px solid rgba(17,17,17,0.12)" }}
    >
      {/* Row header */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", padding: "clamp(28px, 3.5vw, 44px) 0",
          display: "grid", gridTemplateColumns: "clamp(36px, 4vw, 52px) 1fr auto auto",
          alignItems: "center", gap: "clamp(20px, 3vw, 48px)",
          transition: "opacity 0.2s ease" }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
          letterSpacing: "0.18em", textTransform: "uppercase", color: project.accent, opacity: 0.65 }}>
          {project.index}
        </span>
        <div>
          <div style={{ fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(28px, 4vw, 60px)", fontWeight: 900, lineHeight: 0.9,
            letterSpacing: "-0.01em", textTransform: "uppercase", color: "#111111", marginBottom: "6px" }}>
            {project.name}
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
            letterSpacing: "0.06em", color: "#111111", opacity: 0.32 }}>
            {project.client} — {project.year}
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#111111", opacity: 0.28 }}>
          {project.category}
        </span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.35, ease: EASE }}
          style={{ width: "32px", height: "32px", border: `1px solid ${open ? project.accent : "rgba(17,17,17,0.18)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "border-color 0.3s" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="0" x2="6" y2="12" stroke={open ? project.accent : "#111"} strokeWidth="1.2"/>
            <line x1="0" y1="6" x2="12" y2="6" stroke={open ? project.accent : "#111"} strokeWidth="1.2"/>
          </svg>
        </motion.div>
      </button>

      {/* Expanded case study */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}
            style={{ overflow: "hidden" }}>
            <div style={{ background: project.bg, padding: "clamp(36px, 5vw, 64px)",
              position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", bottom: "-20px", right: "4vw",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(120px, 18vw, 240px)", fontWeight: 900, lineHeight: 0.85,
                letterSpacing: "-0.03em", color: project.accent, opacity: 0.04,
                userSelect: "none", pointerEvents: "none" }}>{project.index}</div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                style={{ gap: "clamp(32px, 4vw, 56px)", position: "relative", zIndex: 1 }}>
                {[
                  { label: "Challenge", text: project.challenge },
                  { label: "Thinking", text: project.thinking },
                  { label: "Execution", text: project.execution },
                  { label: "Impact", text: project.impact },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
                      letterSpacing: "0.22em", textTransform: "uppercase", color: project.accent,
                      opacity: 0.65, marginBottom: "14px" }}>{label}</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(13px, 1vw, 15px)",
                      fontWeight: 300, lineHeight: 1.82, color: "#F8F5EF", opacity: 0.5 }}>{text}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "clamp(28px, 3vw, 44px)", display: "flex",
                alignItems: "center", gap: "10px", flexWrap: "wrap",
                borderTop: "1px solid rgba(248,245,239,0.07)", paddingTop: "24px",
                position: "relative", zIndex: 1 }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: project.accent, border: `1px solid ${project.accent}`,
                    padding: "5px 10px", opacity: 0.6 }}>{tag}</span>
                ))}
                <div style={{ marginLeft: "auto", fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
                  letterSpacing: "0.2em", textTransform: "uppercase", color: project.accent, opacity: 0.45,
                  display: "flex", alignItems: "center", gap: "10px" }}>
                  Case Study
                  <span style={{ display: "block", width: "24px", height: "1px", background: project.accent }}/>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="work"
      style={{ background: "#F8F5EF", padding: "clamp(80px, 10vw, 140px) 6vw" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        marginBottom: "clamp(32px, 4vw, 52px)", paddingBottom: "24px",
        borderBottom: "1px solid rgba(17,17,17,0.1)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: EASE }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#111111", opacity: 0.35,
            marginBottom: "14px" }}>09 — Selected Work</div>
          <div style={{ fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(36px, 5.5vw, 82px)", fontWeight: 900, lineHeight: 0.9,
            letterSpacing: "-0.01em", textTransform: "uppercase", color: "#111111" }}>
            Work That Speaks.
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.12em",
            color: "#111111", opacity: 0.25, flexShrink: 0, marginLeft: "40px",
            textAlign: "right" }}>
          Challenge → Thinking<br/>Execution → Impact
        </motion.div>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.index} project={project} index={i} isInView={isInView}/>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ marginTop: "clamp(24px, 3vw, 40px)", fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", letterSpacing: "0.14em", color: "#111111", opacity: 0.26 }}>
        500+ projects delivered across 15+ categories
      </motion.div>
    </section>
  );
}
