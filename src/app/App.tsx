import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Manifesto } from "./components/Manifesto";
import { Potential } from "./components/Potential";
import { Journey } from "./components/Journey";
import { ServiceSection } from "./components/ServiceSection";
import { SelectedWork } from "./components/SelectedWork";
import { Results } from "./components/Results";
import { Clients } from "./components/Clients";
import { Founder } from "./components/Founder";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

const services = [
  {
    id: "branding",
    sectionNum: "05",
    sectionLabel: "Branding",
    number: "01",
    title: "Branding",
    description:
      "Identity systems that don't just represent your brand — they define its market position, create desire, and build the kind of recognition that compounds over decades.",
    services: [
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Logo & Mark Design",
      "Naming & Messaging",
      "Brand Architecture",
    ],
    dark: false,
  },
  {
    id: "packaging",
    sectionNum: "06",
    sectionLabel: "Packaging",
    number: "02",
    title: "Packaging",
    description:
      "Packaging that performs on shelf and in hand. Structural intelligence meets visual brilliance — because the box is often the first and most powerful brand touchpoint your customer ever has.",
    services: [
      "Structural Design",
      "Label & Sleeve Design",
      "Dieline Creation",
      "Production Specifications",
      "Material Consultation",
      "Retail Packaging Systems",
    ],
    dark: true,
  },
  {
    id: "print",
    sectionNum: "07",
    sectionLabel: "Print",
    number: "03",
    title: "Print",
    description:
      "Print production with zero tolerance for mediocrity. Every weight, finish, and stock decision is intentional. Every page is a brand statement.",
    services: [
      "Marketing Collateral",
      "Publication Design",
      "Large Format",
      "Brand Stationery",
      "Annual Reports",
      "POS Materials",
    ],
    dark: false,
  },
  {
    id: "marketing",
    sectionNum: "08",
    sectionLabel: "Marketing",
    number: "04",
    title: "Marketing",
    description:
      "Campaigns built to convert. Content built to compound. Digital performance designed around brand equity — so every impression strengthens your market position while driving measurable return.",
    services: [
      "Digital Campaigns",
      "Social Strategy",
      "Performance Marketing",
      "Content Production",
      "OOH & Media",
      "Analytics & Reporting",
    ],
    dark: true,
  },
];

export default function App() {
  return (
    <>
      {/* Premium custom cursor — desktop only */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div
        style={{ background: "#F8F5EF", minHeight: "100vh" }}
      >
        <Nav />

        {/* 01 — Hero */}
        <Hero />

        {/* Kinetic marquee strip */}
        <Marquee dark={true} />

        {/* 02 — Manifesto */}
        <Manifesto />

        {/* Reversed marquee */}
        <Marquee dark={false} reversed={true} />

        {/* 03 — Potential */}
        <Potential />

        {/* 04 — Packaging to Performance */}
        <Journey />

        {/* 05–08 — Services */}
        {services.map((s) => (
          <ServiceSection
            key={s.id}
            id={s.id}
            sectionNum={s.sectionNum}
            sectionLabel={s.sectionLabel}
            number={s.number}
            title={s.title}
            description={s.description}
            services={s.services}
            dark={s.dark}
          />
        ))}

        {/* 09 — Selected Work */}
        <SelectedWork />

        {/* 10 — Results */}
        <Results />

        {/* 11 — Clients */}
        <Clients />

        {/* 11 — Founder */}
        <Founder />

        {/* 12 — Final CTA */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}