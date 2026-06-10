import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    num: "01",
    title: "Brand Identity",
    headline: "Every great brand starts with a clear idea.",
    body: "We uncover what makes you distinct — your positioning, your voice, your visual language. Then we build an identity system that commands attention and creates instant recognition.",
    stat: "Great brands are recognised in under 0.07 seconds.",
    accentColor: "#FF5A1F",
    tag: "Strategy + Identity",
  },
  {
    num: "02",
    title: "Packaging Design",
    headline: "The shelf is the first campaign.",
    body: "Structural intelligence meets visual brilliance. We design packaging that stops consumers mid-aisle — dielines engineered for production, labels built for recognition, systems scaled for retail.",
    stat: "72% of purchase decisions are made at point of sale.",
    accentColor: "#D9FF45",
    tag: "Structural + Visual",
  },
  {
    num: "03",
    title: "Print Production",
    headline: "Touch creates trust.",
    body: "Brand systems that translate with precision across every printed touchpoint. From collateral to large format, stationery to publications — zero tolerance for mediocrity in production quality.",
    stat: "Print increases brand recall by 70% over digital alone.",
    accentColor: "#FF5A1F",
    tag: "Print + Production",
  },
  {
    num: "04",
    title: "Product Launch",
    headline: "Market entry, executed with authority.",
    body: "Integrated creative and media planning that ensures your brand lands with precision. Strategic launch campaigns built around insight, creative assets that create conversation from day one.",
    stat: "Decisive launches define long-term market position.",
    accentColor: "#D9FF45",
    tag: "Strategy + Campaign",
  },
  {
    num: "05",
    title: "Campaign Assets",
    headline: "Content built to compound.",
    body: "Full-spectrum campaign production across digital, OOH, and in-store. Every creative asset built around your brand system, ensuring visual consistency while driving measurable engagement.",
    stat: "Consistent brand presence lifts revenue by 23%.",
    accentColor: "#FF5A1F",
    tag: "Creative + Media",
  },
  {
    num: "06",
    title: "Marketing Systems",
    headline: "Performance designed around brand equity.",
    body: "Digital performance marketing engineered to compound. Social strategy, performance campaigns, and content systems that build brand equity while delivering measurable business results.",
    stat: "Brand-led performance delivers 4× ROI over short-term tactics.",
    accentColor: "#D9FF45",
    tag: "Digital + Performance",
  },
  {
    num: "07",
    title: "Growth",
    headline: "The brands we build don't just launch — they grow.",
    body: "Continuous creative partnership that evolves with your market. We stay inside your brand as it scales — refining, expanding, and compounding the equity we've built together.",
    stat: "Strong brands outperform markets 10:1 over a decade.",
    accentColor: "#FF5A1F",
    tag: "Partnership + Scale",
  },
];

/* ─── Stage SVG illustrations ─── */
function BrandIdentityScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {[1,2,3,4,5].map(i=>(
        <line key={`v${i}`} x1={46+i*74} y1="40" x2={46+i*74} y2="480" stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      ))}
      {[1,2,3,4,5,6].map(i=>(
        <line key={`h${i}`} x1="46" y1={40+i*72} x2="414" y2={40+i*72} stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      ))}
      <rect x="130" y="66" width="200" height="200" stroke="rgba(248,245,239,0.18)" strokeWidth="0.7"/>
      <rect x="116" y="52" width="228" height="228" stroke="rgba(217,255,69,0.16)" strokeWidth="0.4" strokeDasharray="7 5"/>
      <circle cx="230" cy="166" r="72" stroke={active?"rgba(255,90,31,0.4)":"rgba(248,245,239,0.1)"} strokeWidth="0.8" fill="none"/>
      <circle cx="230" cy="166" r="50" stroke={active?"rgba(255,90,31,0.2)":"rgba(248,245,239,0.06)"} strokeWidth="0.5" fill="none"/>
      <circle cx="230" cy="166" r="24" stroke={active?"rgba(255,90,31,0.15)":"rgba(248,245,239,0.04)"} strokeWidth="0.4" fill="none"/>
      <line x1="130" y1="166" x2="330" y2="166" stroke="rgba(248,245,239,0.08)" strokeWidth="0.4" strokeDasharray="5 4"/>
      <line x1="230" y1="66" x2="230" y2="266" stroke="rgba(248,245,239,0.08)" strokeWidth="0.4" strokeDasharray="5 4"/>
      {["#FF5A1F","#D9FF45","#F8F5EF","rgba(248,245,239,0.22)","#111"].map((c,i)=>(
        <circle key={i} cx={96+i*62} cy="314" r="17" fill={c} opacity={active?0.9:0.5}/>
      ))}
      <rect x="46" y="358" width="368" height="74" stroke="rgba(248,245,239,0.07)" fill="rgba(248,245,239,0.02)"/>
      <text x="58" y="410" fontFamily="'Big Shoulders Display',sans-serif" fontSize="36"
        fontWeight="900" fill={active?"rgba(248,245,239,0.22)":"rgba(248,245,239,0.08)"} letterSpacing="-0.01em">HEADLINE</text>
      <rect x="46" y="450" width="368" height="12" fill={active?"rgba(255,90,31,0.14)":"rgba(248,245,239,0.03)"}/>
      <g stroke="rgba(255,90,31,0.35)" strokeWidth="0.7">
        <line x1="16" y1="32" x2="30" y2="32"/><line x1="23" y1="25" x2="23" y2="39"/>
        <line x1="430" y1="32" x2="444" y2="32"/><line x1="437" y1="25" x2="437" y2="39"/>
      </g>
    </svg>
  );
}

function PackagingScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      <motion.rect x="110" y="100" width="240" height="320"
        stroke={active?"#FF5A1F":"rgba(248,245,239,0.12)"} strokeWidth={active?"1.4":"0.7"}
        animate={{stroke:active?"#FF5A1F":"rgba(248,245,239,0.12)"}} transition={{duration:0.5}}/>
      <motion.path d="M110 100 L75 50 L385 50 L350 100" stroke="rgba(248,245,239,0.2)" strokeWidth="0.8" strokeDasharray="9 5"/>
      <motion.path d="M110 420 L75 470 L385 470 L350 420" stroke="rgba(248,245,239,0.2)" strokeWidth="0.8" strokeDasharray="9 5"/>
      <rect x="30" y="100" width="80" height="320" stroke="rgba(248,245,239,0.1)" strokeWidth="0.6"/>
      <rect x="350" y="100" width="80" height="320" stroke="rgba(248,245,239,0.1)" strokeWidth="0.6"/>
      <motion.rect x="145" y="170" width="170" height="180"
        stroke={active?"rgba(255,90,31,0.5)":"rgba(248,245,239,0.1)"} strokeWidth="0.8"
        animate={{stroke:active?"rgba(255,90,31,0.5)":"rgba(248,245,239,0.1)"}} transition={{duration:0.5}}/>
      {[0,1,2,3,4].map(i=>(
        <motion.line key={i} x1="160" y1={200+i*25} x2={active?300-i*8:260-i*8} y2={200+i*25}
          stroke="rgba(248,245,239,0.18)" strokeWidth={i===0?"1.2":"0.5"}
          animate={{x2:active?300-i*8:260-i*8}} transition={{duration:0.6,delay:i*0.05}}/>
      ))}
      <motion.rect x="110" y="100" width="240" height="55"
        fill={active?"rgba(255,90,31,0.12)":"rgba(248,245,239,0.03)"}
        animate={{fill:active?"rgba(255,90,31,0.12)":"rgba(248,245,239,0.03)"}} transition={{duration:0.5}}/>
      {["#FF5A1F","#D9FF45","#F8F5EF","rgba(248,245,239,0.3)","#111","rgba(255,90,31,0.4)"].map((c,i)=>(
        <rect key={i} x={110+i*40} y="372" width="40" height="12" fill={c} opacity={active?0.8:0.35}/>
      ))}
      <motion.rect x="110" y="392" width="240" height="5"
        fill={active?"#D9FF45":"rgba(248,245,239,0.04)"}
        animate={{fill:active?"#D9FF45":"rgba(248,245,239,0.04)"}} transition={{duration:0.5}}
        opacity={active?0.45:1}/>
      <g stroke="rgba(255,90,31,0.3)" strokeWidth="0.7">
        <line x1="15" y1="36" x2="28" y2="36"/><line x1="21" y1="30" x2="21" y2="43"/>
        <line x1="432" y1="36" x2="445" y2="36"/><line x1="438" y1="30" x2="438" y2="43"/>
        <line x1="15" y1="484" x2="28" y2="484"/><line x1="21" y1="478" x2="21" y2="491"/>
        <line x1="432" y1="484" x2="445" y2="484"/><line x1="438" y1="478" x2="438" y2="491"/>
      </g>
    </svg>
  );
}

function PrintScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {[1,2,3,4,5].map(i=>(<line key={`pv${i}`} x1={50+i*72} y1="40" x2={50+i*72} y2="480" stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>))}
      {[1,2,3,4,5,6].map(i=>(<line key={`ph${i}`} x1="50" y1={40+i*72} x2="410" y2={40+i*72} stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>))}
      <rect x="55" y="70" width="155" height="200" stroke={active?"rgba(248,245,239,0.3)":"rgba(248,245,239,0.1)"} strokeWidth="0.8"/>
      <rect x="250" y="70" width="155" height="200" stroke={active?"rgba(248,245,239,0.3)":"rgba(248,245,239,0.1)"} strokeWidth="0.8"/>
      <rect x="65" y="80" width="135" height="80" fill={active?"rgba(255,90,31,0.09)":"rgba(248,245,239,0.03)"} stroke="rgba(255,90,31,0.2)" strokeWidth="0.5"/>
      <line x1="65" y1="80" x2="200" y2="160" stroke="rgba(255,90,31,0.1)" strokeWidth="0.4"/>
      <line x1="200" y1="80" x2="65" y2="160" stroke="rgba(255,90,31,0.1)" strokeWidth="0.4"/>
      {[0,1,2,3,4].map(i=>(<line key={i} x1="70" y1={175+i*14} x2={i===0?195:180-i*4} y2={175+i*14} stroke="rgba(248,245,239,0.15)" strokeWidth={i===0?"1.2":"0.5"}/>))}
      <rect x="260" y="80" width="135" height="180" fill={active?"rgba(217,255,69,0.06)":"rgba(248,245,239,0.02)"} stroke="rgba(217,255,69,0.15)" strokeWidth="0.5"/>
      {[0,1,2].map(i=>(<line key={i} x1="260" y1={80+i*60} x2="395" y2={80+i*60} stroke="rgba(248,245,239,0.05)" strokeWidth="0.3"/>))}
      <rect x="55" y="310" width="350" height="150" stroke={active?"rgba(217,255,69,0.2)":"rgba(248,245,239,0.07)"} strokeWidth="0.8"/>
      <motion.rect x="55" y="310" width="350" height="22"
        fill={active?"rgba(255,90,31,0.15)":"rgba(248,245,239,0.04)"}
        animate={{fill:active?"rgba(255,90,31,0.15)":"rgba(248,245,239,0.04)"}} transition={{duration:0.5}}/>
      {[0,1,2,3,4].map(i=>(<line key={i} x1="70" y1={348+i*18} x2={i%2===0?390:350} y2={348+i*18} stroke="rgba(248,245,239,0.1)" strokeWidth={i===0?"0.8":"0.4"}/>))}
      <g stroke="rgba(217,255,69,0.35)" strokeWidth="0.7">
        <line x1="28" y1="56" x2="42" y2="56"/><line x1="35" y1="49" x2="35" y2="63"/>
        <line x1="418" y1="56" x2="432" y2="56"/><line x1="425" y1="49" x2="425" y2="63"/>
      </g>
    </svg>
  );
}

function LaunchScene({ active }: { active: boolean }) {
  const rings = [50, 95, 148, 205, 268];
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {rings.map((r,i)=>(
        <motion.circle key={i} cx="230" cy="270" r={r}
          stroke={i===0?(active?"#D9FF45":"rgba(217,255,69,0.2)"):"rgba(248,245,239,0.06)"}
          strokeWidth={i===0?(active?"1.5":"0.8"):"0.5"}
          animate={{stroke:i===0?(active?"#D9FF45":"rgba(217,255,69,0.2)"):"rgba(248,245,239,0.06)"}}
          transition={{duration:0.5}}/>
      ))}
      <line x1="230" y1="50" x2="230" y2="490" stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      <line x1="20" y1="270" x2="440" y2="270" stroke="rgba(248,245,239,0.04)" strokeWidth="0.5"/>
      <motion.path d="M230 270 L230 108" stroke={active?"#FF5A1F":"rgba(255,90,31,0.2)"}
        strokeWidth={active?"2.2":"1"} animate={{stroke:active?"#FF5A1F":"rgba(255,90,31,0.2)"}} transition={{duration:0.4}}/>
      <motion.path d="M219 132 L230 108 L241 132" stroke={active?"#FF5A1F":"rgba(255,90,31,0.2)"}
        strokeWidth={active?"2.2":"1"} fill="none" animate={{stroke:active?"#FF5A1F":"rgba(255,90,31,0.2)"}} transition={{duration:0.4}}/>
      <motion.circle cx="230" cy="270" r="9"
        fill={active?"#FF5A1F":"rgba(255,90,31,0.2)"}
        animate={{fill:active?"#FF5A1F":"rgba(255,90,31,0.2)"}} transition={{duration:0.4}}/>
      <circle cx="230" cy="270" r="3.5" fill="rgba(248,245,239,0.85)"/>
      <motion.circle cx="230" cy="270" r="32"
        stroke={active?"#D9FF45":"rgba(217,255,69,0.1)"} strokeWidth="0.8" strokeDasharray="5 5" fill="none"
        animate={{stroke:active?"#D9FF45":"rgba(217,255,69,0.1)"}} transition={{duration:0.4}}/>
      {[0,60,120,240,300].map((angle,i)=>{
        const rad=(angle*Math.PI)/180; const r=148;
        return <circle key={i} cx={230+r*Math.cos(rad)} cy={270+r*Math.sin(rad)} r={active?4.5:3}
          fill={active?"rgba(217,255,69,0.5)":"rgba(248,245,239,0.1)"}/>;
      })}
    </svg>
  );
}

function CampaignScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={46+i*138} y="68" width="120" height="120" stroke={active?"rgba(248,245,239,0.22)":"rgba(248,245,239,0.08)"} strokeWidth="0.7"/>
          <rect x={46+i*138} y="68" width="120" height="52" fill={active?(i===1?"rgba(217,255,69,0.09)":"rgba(255,90,31,0.07)"):"rgba(248,245,239,0.02)"}/>
          {[0,1,2].map(j=>(
            <line key={j} x1={58+i*138} y1={138+j*14} x2={i===1?(152+i*138-j*10):(145+i*138-j*6)} y2={138+j*14}
              stroke="rgba(248,245,239,0.14)" strokeWidth={j===0?"0.9":"0.4"}/>
          ))}
        </g>
      ))}
      <rect x="46" y="220" width="368" height="180" stroke={active?"rgba(217,255,69,0.22)":"rgba(248,245,239,0.07)"} strokeWidth="0.8"/>
      <rect x="46" y="220" width="368" height="28" fill={active?"rgba(255,90,31,0.14)":"rgba(248,245,239,0.04)"}/>
      {[0,1,2,3,4,5,6].map(i=>(
        <line key={i} x1="60" y1={264+i*18} x2={i%2===0?400:360} y2={264+i*18}
          stroke="rgba(248,245,239,0.1)" strokeWidth={i===0?"0.9":"0.4"}/>
      ))}
      <rect x="46" y="420" width="116" height="58" stroke="rgba(248,245,239,0.1)" strokeWidth="0.5"/>
      <rect x="174" y="420" width="116" height="58" stroke="rgba(248,245,239,0.1)" strokeWidth="0.5"/>
      <rect x="302" y="420" width="112" height="58" stroke={active?"rgba(217,255,69,0.25)":"rgba(248,245,239,0.1)"} strokeWidth="0.5"/>
      <g stroke="rgba(255,90,31,0.35)" strokeWidth="0.7">
        <line x1="18" y1="52" x2="32" y2="52"/><line x1="25" y1="45" x2="25" y2="59"/>
        <line x1="428" y1="52" x2="442" y2="52"/><line x1="435" y1="45" x2="435" y2="59"/>
      </g>
    </svg>
  );
}

function MarketingScene({ active }: { active: boolean }) {
  const bars = [65,95,130,80,155,110,175];
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {[0,1,2,3,4].map(i=>(<line key={i} x1="50" y1={100+i*70} x2="410" y2={100+i*70} stroke="rgba(248,245,239,0.05)" strokeWidth="0.5"/>))}
      {bars.map((h,i)=>(
        <motion.rect key={i} x={60+i*50} y={380-h} width="32" height={h}
          fill={active?(i%2===0?"rgba(255,90,31,0.35)":"rgba(255,90,31,0.18)"):"rgba(248,245,239,0.07)"}
          stroke={active?(i%2===0?"rgba(255,90,31,0.7)":"rgba(255,90,31,0.3)"):"rgba(248,245,239,0.1)"} strokeWidth="0.6"
          animate={{fill:active?(i%2===0?"rgba(255,90,31,0.35)":"rgba(255,90,31,0.18)"):"rgba(248,245,239,0.07)"}}
          transition={{duration:0.5,delay:i*0.04}}/>
      ))}
      <motion.path
        d={`M76 ${380-65} C126 ${380-85} 156 ${380-110} 196 ${380-80} C236 ${380-60} 266 ${380-140} 306 ${380-110} C346 ${380-90} 376 ${380-165} 396 ${380-175}`}
        stroke={active?"#D9FF45":"rgba(217,255,69,0.15)"} strokeWidth={active?"1.8":"0.8"} fill="none"
        animate={{stroke:active?"#D9FF45":"rgba(217,255,69,0.15)"}} transition={{duration:0.5}}/>
      {[0,1,2].map(i=>(
        <rect key={i} x={55+i*120} y="405" width="100" height="80"
          stroke={active?"rgba(248,245,239,0.2)":"rgba(248,245,239,0.07)"} strokeWidth="0.6"
          fill={active?"rgba(248,245,239,0.03)":"transparent"}/>
      ))}
      <rect x="55" y="405" width="100" height="20" fill={active?"rgba(255,90,31,0.2)":"rgba(248,245,239,0.04)"}/>
    </svg>
  );
}

function GrowthScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 460 520" fill="none" style={{ width: "100%", height: "100%" }}>
      {[1,2,3,4].map(i=>(<line key={i} x1="50" y1={100+i*72} x2="410" y2={100+i*72} stroke="rgba(248,245,239,0.05)" strokeWidth="0.5"/>))}
      {[0,1,2,3,4].map(i=>(<line key={i} x1={50+i*90} y1="100" x2={50+i*90} y2="460" stroke="rgba(248,245,239,0.05)" strokeWidth="0.5"/>))}
      <motion.path d="M50 460 C110 460 140 430 190 390 C240 350 270 280 310 210 C340 160 370 120 410 90"
        stroke={active?"#D9FF45":"rgba(217,255,69,0.2)"} strokeWidth={active?"2.2":"1"} fill="none"
        animate={{stroke:active?"#D9FF45":"rgba(217,255,69,0.2)"}} transition={{duration:0.5}}/>
      <motion.path d="M50 460 C110 460 140 430 190 390 C240 350 270 280 310 210 C340 160 370 120 410 90 L410 460 Z"
        fill={active?"rgba(217,255,69,0.065)":"rgba(217,255,69,0.02)"}
        animate={{fill:active?"rgba(217,255,69,0.065)":"rgba(217,255,69,0.02)"}} transition={{duration:0.5}}/>
      {[[50,460],[130,435],[200,390],[270,300],[340,170],[410,90]].map(([x,y],i)=>(
        <g key={i}>
          <motion.circle cx={x} cy={y} r={i===5?9:5}
            fill={active?(i===5?"#D9FF45":"rgba(217,255,69,0.5)"):"rgba(217,255,69,0.14)"}
            animate={{fill:active?(i===5?"#D9FF45":"rgba(217,255,69,0.5)"):"rgba(217,255,69,0.14)"}}
            transition={{duration:0.4,delay:i*0.05}}/>
          {i===5&&(<>
            <circle cx={x} cy={y} r={20} stroke="rgba(217,255,69,0.22)" strokeWidth="0.8" fill="none"/>
            <circle cx={x} cy={y} r={35} stroke="rgba(217,255,69,0.08)" strokeWidth="0.5" fill="none"/>
          </>)}
        </g>
      ))}
      {[0,1,2,3,4].map(i=>(
        <motion.rect key={i} x={60+i*72} y={460-(22+i*20)} width="22" height={22+i*20}
          fill={active?"rgba(255,90,31,0.22)":"rgba(255,90,31,0.06)"}
          animate={{fill:active?"rgba(255,90,31,0.22)":"rgba(255,90,31,0.06)"}} transition={{duration:0.4,delay:i*0.04}}/>
      ))}
    </svg>
  );
}

const stageVisuals = [BrandIdentityScene, PackagingScene, PrintScene, LaunchScene, CampaignScene, MarketingScene, GrowthScene];

export function Journey() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const StageVisual = stageVisuals[active];

  return (
    <section ref={ref} id="journey" style={{ background: "#111111",
      padding: "clamp(80px, 10vw, 140px) 0", position: "relative", overflow: "hidden" }}>
      {/* Grain */}
      <svg aria-hidden xmlns="http://www.w3.org/2000/svg"
        style={{ position:"absolute", top:"-50%", left:"-50%", width:"200%", height:"200%",
          pointerEvents:"none", zIndex:0, animationName:"grainShift", animationDuration:"0.45s",
          animationTimingFunction:"steps(1)", animationIterationCount:"infinite", opacity:0.03 }}>
        <filter id="journey-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#journey-grain)"/>
      </svg>

      <div style={{ padding: "0 6vw", position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }} animate={isInView?{opacity:1}:{opacity:0}} transition={{ duration: 0.6 }}
          style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"10px", fontWeight:400,
            letterSpacing:"0.22em", textTransform:"uppercase", color:"#F8F5EF", opacity:0.28,
            marginBottom:"clamp(20px,2.5vw,30px)" }}>
          04 — Brand to Growth
        </motion.div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "105%" }} animate={isInView?{y:"0%"}:{y:"105%"}}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            style={{ fontFamily:"'Big Shoulders Display',sans-serif",
              fontSize:"clamp(36px,5.5vw,82px)", fontWeight:900, lineHeight:0.92,
              letterSpacing:"-0.01em", textTransform:"uppercase", color:"#F8F5EF",
              marginBottom:"clamp(40px,5vw,64px)" }}>
            The Complete Brand Journey.
          </motion.div>
        </div>
      </div>

      {/* Stage tabs — scrollable on mobile */}
      <motion.div
        initial={{ opacity: 0 }} animate={isInView?{opacity:1}:{opacity:0}} transition={{ duration:0.6, delay:0.3 }}
        style={{ display:"flex", gap:0, borderBottom:"1px solid rgba(248,245,239,0.1)",
          padding:"0 6vw", position:"relative", zIndex:2, overflowX:"auto",
          scrollbarWidth:"none" }}>
        {stages.map((stage, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ flexShrink:0, background:"none", border:"none", cursor:"pointer",
              padding:"0 0 18px 0", marginRight:"clamp(24px,3vw,48px)", textAlign:"left", position:"relative" }}>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"9px", fontWeight:400,
              letterSpacing:"0.18em", textTransform:"uppercase", color:"#F8F5EF",
              opacity:active===i?1:0.28, marginBottom:"6px", transition:"opacity 0.3s" }}>{stage.num}</div>
            <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(11px,1.1vw,14px)",
              fontWeight:500, color:"#F8F5EF", opacity:active===i?1:0.28, transition:"opacity 0.3s",
              whiteSpace:"nowrap" }}>{stage.title}</div>
            <div style={{ position:"absolute", bottom:"-1px", left:0, right:0, height:"2px",
              background:active===i?stages[i].accentColor:"transparent", transition:"background 0.3s" }}/>
          </button>
        ))}
      </motion.div>

      {/* Content + visual */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
          transition={{ duration:0.55, ease:EASE }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_400px]"
          style={{ gap:0, position:"relative", zIndex:2 }}>
          {/* Left */}
          <div style={{ padding:"clamp(40px,5vw,64px) 6vw" }}>
            <div style={{ fontFamily:"'Big Shoulders Display',sans-serif",
              fontSize:"clamp(30px,4.2vw,64px)", fontWeight:900, lineHeight:0.92,
              letterSpacing:"-0.01em", textTransform:"uppercase", color:"#F8F5EF", marginBottom:"28px" }}>
              {stages[active].headline}
            </div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(14px,1.15vw,17px)",
              fontWeight:300, lineHeight:1.85, color:"#F8F5EF", opacity:0.48,
              maxWidth:"520px", marginBottom:"clamp(32px,4vw,48px)" }}>
              {stages[active].body}
            </p>
            {/* Insight */}
            <div style={{ borderLeft:`2px solid ${stages[active].accentColor}`, paddingLeft:"22px" }}>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"11px", fontWeight:400,
                letterSpacing:"0.1em", color:stages[active].accentColor, textTransform:"uppercase",
                marginBottom:"8px", opacity:0.7 }}>Insight</div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(13px,1.1vw,15px)",
                fontWeight:300, color:"#F8F5EF", opacity:0.42, lineHeight:1.7 }}>
                {stages[active].stat}
              </div>
            </div>
            {/* Stage tag + number */}
            <div style={{ display:"flex", alignItems:"center", gap:"16px", marginTop:"clamp(32px,4vw,48px)" }}>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"9px", letterSpacing:"0.2em",
                textTransform:"uppercase", color:stages[active].accentColor, opacity:0.65 }}>
                {stages[active].tag}
              </div>
              <div style={{ flex:1, height:"1px", background:`linear-gradient(to right, ${stages[active].accentColor}, transparent)`, opacity:0.3 }}/>
              <div style={{ fontFamily:"'Big Shoulders Display',sans-serif",
                fontSize:"clamp(64px,9vw,120px)", fontWeight:900, lineHeight:1,
                color:stages[active].accentColor, opacity:0.06 }}>
                {stages[active].num}
              </div>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="hidden lg:flex"
            style={{ alignItems:"center", justifyContent:"center", padding:"40px 6vw 40px 0",
              minHeight:"380px" }}>
            <div style={{ width:"100%", maxWidth:"360px", aspectRatio:"460/520" }}>
              <StageVisual active={true}/>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Stage progress bar */}
      <div style={{ padding:"0 6vw", position:"relative", zIndex:2, marginTop:"clamp(24px,3vw,40px)" }}>
        <div style={{ height:"1px", background:"rgba(248,245,239,0.08)", position:"relative" }}>
          <motion.div
            animate={{ width:`${((active+1)/stages.length)*100}%` }}
            transition={{ duration:0.6, ease:EASE }}
            style={{ position:"absolute", top:0, left:0, height:"100%",
              background:`linear-gradient(to right, ${stages[active].accentColor}, rgba(248,245,239,0.3))` }}/>
        </div>
        <div style={{ marginTop:"12px", fontFamily:"'DM Sans',sans-serif", fontSize:"9px",
          letterSpacing:"0.2em", textTransform:"uppercase", color:"#F8F5EF", opacity:0.22 }}>
          {stages[active].num} / {stages.length < 10 ? "0" + stages.length : stages.length} — {stages[active].title}
        </div>
      </div>
    </section>
  );
}
