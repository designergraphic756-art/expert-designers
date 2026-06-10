import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import logoWhite from "../../imports/Expert_Designer_Logo-01.png";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_OUT = [0.0, 0.0, 0.2, 1.0] as const;
const HEADLINE_SIZE = "clamp(38px, 5.75vw, 79px)";
const WA_LINK = "https://wa.me/917060258437";

// Transition scenes — play once, then hold final state
const transitionScenes = [
  {
    id: 0,
    lines: [{ text: "WE DON'T JUST DESIGN.", ghost: true }],
    sub: "Branding · Packaging · Print · Marketing",
    duration: 2800,
  },
  {
    id: 1,
    lines: [
      { text: "WE BUILD BRANDS", ghost: false },
      { text: "PEOPLE REMEMBER.", ghost: false, accent: true },
    ],
    sub: "Packaging → Print → Launch → Marketing → Growth",
    duration: 2800,
  },
  {
    id: 2,
    lines: [
      { text: "FROM PACKAGING", ghost: true },
      { text: "TO PERFORMANCE.", ghost: false },
    ],
    sub: "One Creative Partner. End-to-End.",
    duration: 2800,
  },
];

/* ─── Logo intro ─── */
function LogoIntro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.9, ease: EASE }}
      style={{ position: "absolute", inset: 0, display: "flex",
        flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 0.28, 0.15], scale: [0.4, 1.25, 1.0] }}
        transition={{ duration: 2.8, ease: "easeOut", delay: 0.3 }}
        style={{ position: "absolute", width: "clamp(280px, 38vw, 500px)", height: "clamp(280px, 38vw, 500px)",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,90,31,0.5) 0%, rgba(217,255,69,0.18) 45%, transparent 70%)",
          filter: "blur(60px)" }}
      />
      <motion.img
        src={logoWhite} alt="Expert Designers"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
        style={{ width: "clamp(100px, 16vw, 200px)", height: "auto", display: "block",
          position: "relative", zIndex: 2, filter: "drop-shadow(0 0 32px rgba(255,90,31,0.2))" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        style={{ marginTop: "clamp(20px, 3vh, 32px)", fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(9px, 0.8vw, 11px)", fontWeight: 400, letterSpacing: "0.48em",
          textTransform: "uppercase", color: "#F8F5EF", opacity: 0.35, position: "relative", zIndex: 2 }}
      >
        Expert Designers
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 1.3, ease: EASE }}
        style={{ marginTop: "clamp(12px, 2vh, 20px)", width: "clamp(60px, 8vw, 100px)", height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,90,31,0.55), transparent)",
          transformOrigin: "center", position: "relative", zIndex: 2 }}
      />
    </motion.div>
  );
}

/* ─── Ambient orbs ─── */
function GradientOrbs() {
  return (
    <>
      <motion.div
        animate={{ x: ["0%","7%","-4%","0%"], y: ["0%","-5%","3%","0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-20%", right: "-8%", width: "55vw", height: "55vw",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,90,31,0.13) 0%, transparent 65%)", filter: "blur(70px)" }}
      />
      <motion.div
        animate={{ x: ["0%","-5%","4%","0%"], y: ["0%","4%","-3%","0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", bottom: "-25%", left: "-12%", width: "46vw", height: "46vw",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(217,255,69,0.09) 0%, transparent 60%)", filter: "blur(80px)" }}
      />
    </>
  );
}

/* ─── Film grain ─── */
function GrainOverlay() {
  return (
    <svg aria-hidden xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%",
        pointerEvents: "none", zIndex: 5, opacity: 0.04,
        animationName: "grainShift", animationDuration: "0.45s",
        animationTimingFunction: "steps(1)", animationIterationCount: "infinite" }}>
      <filter id="hero-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-grain)"/>
    </svg>
  );
}

/* ─── Packaging dieline — refined ─── */
function PackagingDielineArt() {
  return (
    <motion.svg key="dieline" viewBox="0 0 420 520" fill="none"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }} style={{ width: "clamp(180px, 28vw, 360px)" }}>
      {/* Front face */}
      <rect x="100" y="96" width="220" height="328" stroke="rgba(248,245,239,0.2)" strokeWidth="0.9"/>
      {/* Side panels */}
      <rect x="18" y="96" width="82" height="328" stroke="rgba(248,245,239,0.09)" strokeWidth="0.5"/>
      <rect x="320" y="96" width="82" height="328" stroke="rgba(248,245,239,0.09)" strokeWidth="0.5"/>
      {/* Top flap */}
      <path d="M100 96 L62 40 L358 40 L320 96" stroke="rgba(248,245,239,0.13)" strokeWidth="0.7" strokeDasharray="8 5"/>
      {/* Bottom flap */}
      <path d="M100 424 L62 480 L358 480 L320 424" stroke="rgba(248,245,239,0.13)" strokeWidth="0.7" strokeDasharray="8 5"/>
      {/* Score lines */}
      <line x1="100" y1="96" x2="100" y2="424" stroke="rgba(248,245,239,0.09)" strokeWidth="0.4" strokeDasharray="4 4"/>
      <line x1="320" y1="96" x2="320" y2="424" stroke="rgba(248,245,239,0.09)" strokeWidth="0.4" strokeDasharray="4 4"/>
      {/* Orange header band */}
      <rect x="100" y="96" width="220" height="52" fill="rgba(255,90,31,0.1)"/>
      {/* Label zone */}
      <rect x="128" y="168" width="164" height="178" stroke="rgba(255,90,31,0.3)" strokeWidth="0.6"/>
      {/* Typography lines */}
      <line x1="144" y1="196" x2="276" y2="196" stroke="rgba(248,245,239,0.28)" strokeWidth="1.3"/>
      <line x1="144" y1="218" x2="260" y2="218" stroke="rgba(248,245,239,0.1)" strokeWidth="0.4"/>
      <line x1="144" y1="234" x2="268" y2="234" stroke="rgba(248,245,239,0.1)" strokeWidth="0.4"/>
      <line x1="144" y1="250" x2="252" y2="250" stroke="rgba(248,245,239,0.07)" strokeWidth="0.4"/>
      {/* Color proof strip */}
      {["#FF5A1F","#D9FF45","#F8F5EF","#111","rgba(255,90,31,0.45)","rgba(217,255,69,0.45)"].map((c,i)=>(
        <rect key={i} x={128+i*27.3} y="362" width="27.3" height="14" fill={c} opacity={0.8}/>
      ))}
      {/* Barcode */}
      {Array.from({length:14}).map((_,i)=>(
        <rect key={i} x={144+i*9} y="286" width={i%3===0?5:3} height="32"
          fill={`rgba(248,245,239,${i%2===0?0.2:0.07})`}/>
      ))}
      {/* Lime strip top */}
      <rect x="100" y="96" width="220" height="5" fill="#D9FF45" opacity="0.4"/>
      {/* Registration marks */}
      <g stroke="rgba(255,90,31,0.4)" strokeWidth="0.7">
        <line x1="3" y1="26" x2="18" y2="26"/><line x1="10" y1="18" x2="10" y2="34"/>
        <line x1="402" y1="26" x2="417" y2="26"/><line x1="409" y1="18" x2="409" y2="34"/>
        <line x1="3" y1="494" x2="18" y2="494"/><line x1="10" y1="486" x2="10" y2="502"/>
        <line x1="402" y1="494" x2="417" y2="494"/><line x1="409" y1="486" x2="409" y2="502"/>
      </g>
    </motion.svg>
  );
}

/* ─── Brand construction grid ─── */
function BrandGridArt() {
  return (
    <motion.svg key="brandgrid" viewBox="0 0 420 520" fill="none"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }} style={{ width: "clamp(180px, 28vw, 360px)" }}>
      {/* Construction grid */}
      {[1,2,3,4,5].map(i=>(
        <line key={`v${i}`} x1={42+i*56} y1="28" x2={42+i*56} y2="492"
          stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      ))}
      {[1,2,3,4,5,6,7].map(i=>(
        <line key={`h${i}`} x1="42" y1={28+i*64} x2="378" y2={28+i*64}
          stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      ))}
      {/* Logo construction zone */}
      <rect x="128" y="60" width="164" height="164" stroke="rgba(248,245,239,0.16)" strokeWidth="0.7"/>
      <circle cx="210" cy="142" r="62" stroke="rgba(255,90,31,0.28)" strokeWidth="0.7" fill="none"/>
      <circle cx="210" cy="142" r="42" stroke="rgba(255,90,31,0.15)" strokeWidth="0.4" fill="none"/>
      <circle cx="210" cy="142" r="20" stroke="rgba(255,90,31,0.1)" strokeWidth="0.4" fill="none"/>
      {/* Safe area */}
      <rect x="114" y="46" width="192" height="192" stroke="rgba(217,255,69,0.18)" strokeWidth="0.4" strokeDasharray="6 5"/>
      {/* Axis guides */}
      <line x1="128" y1="142" x2="292" y2="142" stroke="rgba(248,245,239,0.08)" strokeWidth="0.4" strokeDasharray="5 4"/>
      <line x1="210" y1="60" x2="210" y2="224" stroke="rgba(248,245,239,0.08)" strokeWidth="0.4" strokeDasharray="5 4"/>
      {/* Color palette */}
      {["#FF5A1F","#D9FF45","#F8F5EF","rgba(248,245,239,0.25)","#111"].map((c,i)=>(
        <circle key={i} cx={98+i*56} cy="278" r="15" fill={c} opacity={0.85}/>
      ))}
      {/* Type specimen */}
      <rect x="42" y="318" width="336" height="72" stroke="rgba(248,245,239,0.07)" fill="rgba(248,245,239,0.02)"/>
      <text x="54" y="368" fontFamily="'Big Shoulders Display',sans-serif" fontSize="34"
        fontWeight="900" fill="rgba(248,245,239,0.16)" letterSpacing="-0.01em">HEADLINE</text>
      {/* Layout columns */}
      <rect x="42" y="414" width="100" height="58" stroke="rgba(248,245,239,0.09)" strokeWidth="0.4"/>
      <rect x="152" y="414" width="100" height="58" stroke="rgba(248,245,239,0.09)" strokeWidth="0.4"/>
      <rect x="262" y="414" width="116" height="58" stroke="rgba(217,255,69,0.18)" strokeWidth="0.5"/>
      {/* Brand bar */}
      <rect x="42" y="487" width="336" height="12" fill="rgba(255,90,31,0.12)"/>
      <line x1="42" y1="487" x2="378" y2="487" stroke="rgba(255,90,31,0.35)" strokeWidth="0.5"/>
    </motion.svg>
  );
}

/* ─── Growth dashboard ─── */
function DashboardArt() {
  const bars = [28,45,38,62,55,80,72,90,85,100];
  return (
    <motion.svg key="dashboard" viewBox="0 0 420 520" fill="none"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }} style={{ width: "clamp(180px, 28vw, 360px)" }}>
      <rect x="28" y="42" width="364" height="450" stroke="rgba(248,245,239,0.16)" strokeWidth="0.7" rx="2"/>
      <rect x="28" y="42" width="364" height="28" fill="rgba(248,245,239,0.05)"/>
      <circle cx="46" cy="56" r="4.5" fill="rgba(255,90,31,0.55)"/>
      <circle cx="62" cy="56" r="4.5" fill="rgba(217,255,69,0.4)"/>
      <circle cx="78" cy="56" r="4.5" fill="rgba(248,245,239,0.15)"/>
      {/* KPI cards */}
      {[
        {label:"IMPRESSIONS",val:"2.4M",col:"rgba(248,245,239,0.8)",x:42},
        {label:"CONVERSIONS",val:"12.8K",col:"#D9FF45",x:156},
        {label:"BRAND RECALL",val:"87%",col:"rgba(248,245,239,0.8)",x:270},
      ].map((k,i)=>(
        <g key={i}>
          <rect x={k.x} y="88" width="100" height="60" stroke="rgba(248,245,239,0.1)" fill="rgba(248,245,239,0.02)"/>
          <text x={k.x+12} y="111" fontFamily="'DM Sans',sans-serif" fontSize="8"
            fill="rgba(248,245,239,0.3)" letterSpacing="0.1em">{k.label}</text>
          <text x={k.x+12} y="132" fontFamily="'Big Shoulders Display',sans-serif"
            fontSize="18" fontWeight="700" fill={k.col}>{k.val}</text>
        </g>
      ))}
      {/* Chart grid */}
      {[265,232,200,168].map((y,i)=>(
        <line key={i} x1="42" y1={y} x2="392" y2={y} stroke="rgba(248,245,239,0.06)" strokeWidth="0.5"/>
      ))}
      {/* Bars */}
      {bars.map((h,i)=>(
        <rect key={i} x={48+i*34} y={265-h} width="22" height={h}
          fill={i>=7?"rgba(217,255,69,0.5)":`rgba(255,90,31,${0.1+i*0.048})`}
          stroke="none"/>
      ))}
      {/* Trend line */}
      <polyline points={bars.map((h,i)=>`${59+i*34},${265-h}`).join(" ")}
        stroke="#D9FF45" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Channel breakdown */}
      <text x="42" y="295" fontFamily="'DM Sans',sans-serif" fontSize="7"
        fill="rgba(248,245,239,0.22)" letterSpacing="0.12em">CHANNEL BREAKDOWN</text>
      {[
        {l:"DIGITAL",p:72,c:"#D9FF45"},
        {l:"OOH",p:48,c:"#FF5A1F"},
        {l:"PRINT",p:61,c:"rgba(248,245,239,0.5)"},
        {l:"SOCIAL",p:85,c:"#D9FF45"},
      ].map((ch,i)=>(
        <g key={i} transform={`translate(42,${308+i*28})`}>
          <text fontFamily="'DM Sans',sans-serif" fontSize="7" fill="rgba(248,245,239,0.28)"
            letterSpacing="0.1em" y="9">{ch.l}</text>
          <rect x="58" y="0" width="250" height="10" fill="rgba(248,245,239,0.04)"/>
          <rect x="58" y="0" width={250*ch.p/100} height="10" fill={ch.c} opacity="0.5"/>
          <text x="316" y="9" fontFamily="'DM Sans',sans-serif" fontSize="7" fill={ch.c} opacity="0.65">{ch.p}%</text>
        </g>
      ))}
    </motion.svg>
  );
}

function SceneVisual({ sceneIdx }: { sceneIdx: number }) {
  return (
    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "38vw",
      pointerEvents: "none", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AnimatePresence mode="wait">
        {sceneIdx === 0 && <PackagingDielineArt/>}
        {sceneIdx === 1 && <BrandGridArt/>}
        {sceneIdx === 2 && <DashboardArt/>}
      </AnimatePresence>
    </div>
  );
}

/* ─── Single headline line with clip-mask reveal ─── */
function HeadlineLine({ text, color, delay, size = HEADLINE_SIZE, weight = 900, opacity = 1 }:
  { text: string; color: string; delay: number; size?: string; weight?: number; opacity?: number }) {
  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <motion.div
        initial={{ y: "106%", skewY: 1.2 }}
        animate={{ y: "0%", skewY: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
        style={{ display: "block", fontFamily: "'Big Shoulders Display', sans-serif",
          fontSize: size, fontWeight: weight, lineHeight: 0.92, letterSpacing: "-0.01em",
          textTransform: "uppercase", color, opacity }}
      >
        {text}
      </motion.div>
    </div>
  );
}

/* ─── Transition scene ─── */
function TransitionScene({ lines, sub }: { lines: { text: string; ghost: boolean; accent?: boolean }[]; sub: string }) {
  return (
    <motion.div
      key={`ts-${lines[0].text}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {lines.map((line, i) => (
        <HeadlineLine
          key={i}
          text={line.text}
          color={line.accent ? "#FF5A1F" : line.ghost ? "rgba(248,245,239,0.18)" : "#F8F5EF"}
          delay={i * 0.09}
        />
      ))}
      <motion.p
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ marginTop: "clamp(16px, 2.5vh, 28px)", fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(9px, 0.85vw, 12px)", fontWeight: 400, letterSpacing: "0.22em",
          color: "#F8F5EF", opacity: 0.28, textTransform: "uppercase" }}
      >
        {sub}
      </motion.p>
    </motion.div>
  );
}

/* ─── Final permanent state ─── */
function FinalState({ showCTAs }: { showCTAs: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <HeadlineLine text="WE DESIGN" color="#F8F5EF" delay={0}/>
      <HeadlineLine text="EVERYTHING" color="#F8F5EF" delay={0.08}/>
      <HeadlineLine text="FOR EVERYONE." color="#D9FF45" delay={0.16}/>
      <motion.p
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: "clamp(16px, 2.5vh, 28px)", fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(9px, 0.85vw, 12px)", fontWeight: 400, letterSpacing: "0.22em",
          color: "#F8F5EF", opacity: 0.28, textTransform: "uppercase" }}
      >
        New Delhi & Roorkee — EST. 2021
      </motion.p>

      {/* CTA buttons */}
      {showCTAs && (
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          style={{ marginTop: "clamp(28px, 4vh, 44px)", display: "flex",
            alignItems: "center", gap: "clamp(12px, 2vw, 24px)", flexWrap: "wrap" }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "12px",
              fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#111111",
              background: "#D9FF45", padding: "14px 32px", textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease" }}
            onMouseEnter={e=>{e.currentTarget.style.background="#FF5A1F";e.currentTarget.style.color="#F8F5EF"}}
            onMouseLeave={e=>{e.currentTarget.style.background="#D9FF45";e.currentTarget.style.color="#111111"}}
          >
            Let's Talk
            <span style={{ display: "block", width: "14px", height: "1px", background: "currentColor" }}/>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "12px",
              fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#F8F5EF",
              background: "transparent", border: "1px solid rgba(248,245,239,0.2)",
              padding: "14px 32px", textDecoration: "none",
              transition: "border-color 0.3s, color 0.3s" }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="#FF5A1F";e.currentTarget.style.color="#FF5A1F"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(248,245,239,0.2)";e.currentTarget.style.color="#F8F5EF"}}
          >
            Start a Project
            <span style={{ display: "block", width: "14px", height: "1px", background: "currentColor" }}/>
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export function Hero() {
  const [phase, setPhase] = useState<"logo" | "scene0" | "scene1" | "scene2" | "final">("logo");
  const [showCTAs, setShowCTAs] = useState(false);

  useEffect(() => {
    // Logo → scene0 after 3.2s
    const t0 = setTimeout(() => setPhase("scene0"), 3200);
    // scene0 → scene1
    const t1 = setTimeout(() => setPhase("scene1"), 3200 + transitionScenes[0].duration);
    // scene1 → scene2
    const t2 = setTimeout(() => setPhase("scene2"), 3200 + transitionScenes[0].duration + transitionScenes[1].duration);
    // scene2 → final
    const t3 = setTimeout(() => setPhase("final"), 3200 + transitionScenes[0].duration + transitionScenes[1].duration + transitionScenes[2].duration);
    // CTAs appear shortly after final state
    const t4 = setTimeout(() => setShowCTAs(true), 3200 + transitionScenes[0].duration + transitionScenes[1].duration + transitionScenes[2].duration + 900);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const sceneIdx = phase === "scene0" ? 0 : phase === "scene1" ? 1 : phase === "scene2" ? 2 : 2;

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#111111", position: "relative",
      overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "flex-start", padding: "100px 6vw 80px" }}>
      <GradientOrbs/>
      <GrainOverlay/>

      {/* Logo intro */}
      <AnimatePresence>{phase === "logo" && <LogoIntro/>}</AnimatePresence>

      {/* Scenes content */}
      {phase !== "logo" && (
        <>
          {/* Headline block */}
          <div style={{ position: "relative", zIndex: 6, maxWidth: "62vw" }}>
            <AnimatePresence mode="wait">
              {phase === "scene0" && (
                <TransitionScene key="s0" lines={transitionScenes[0].lines as any} sub={transitionScenes[0].sub}/>
              )}
              {phase === "scene1" && (
                <TransitionScene key="s1" lines={transitionScenes[1].lines as any} sub={transitionScenes[1].sub}/>
              )}
              {phase === "scene2" && (
                <TransitionScene key="s2" lines={transitionScenes[2].lines as any} sub={transitionScenes[2].sub}/>
              )}
              {phase === "final" && (
                <FinalState key="final" showCTAs={showCTAs}/>
              )}
            </AnimatePresence>
          </div>

          {/* Right-side scene visual */}
          <div className="hidden lg:block" style={{ position: "absolute", inset: 0, zIndex: 2 }}>
            <SceneVisual sceneIdx={sceneIdx}/>
          </div>
        </>
      )}

      {/* Bottom bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 6vw 28px", zIndex: 10 }}>
        {/* Scene progress dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "16px" }}>
          {phase !== "logo" && ["scene0","scene1","scene2","final"].map((p, i) => (
            <div key={i} style={{
              width: phase === p ? "28px" : "6px", height: "2px",
              background: phase === p ? "#FF5A1F" : "#F8F5EF",
              opacity: phase === p ? 1 : 0.16,
              transition: "width 0.4s ease, opacity 0.4s ease",
            }}/>
          ))}
        </div>
        {/* Email + scroll */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 40px)" }}>
          <a href="mailto:info@expertdesigners.in"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#F8F5EF", opacity: 0.26, textDecoration: "none",
              transition: "opacity 0.2s ease" }}
            onMouseEnter={e=>(e.currentTarget.style.opacity="0.65")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="0.26")}
          >
            info@expertdesigners.in
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "12px",
            fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.26em",
            textTransform: "uppercase", color: "#F8F5EF", opacity: 0.22 }}>
            <span>Scroll</span>
            <div style={{ width: "40px", height: "1px", background: "#F8F5EF" }}/>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "rgba(248,245,239,0.07)" }}/>
    </section>
  );
}
