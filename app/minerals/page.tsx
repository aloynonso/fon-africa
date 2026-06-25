"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   MINERALS DESIGN TOKENS
   Deep Charcoal · Steel Grey · Copper · Gold
───────────────────────────────────────────── */
const T = {
  charcoal: "#0E0F0F",
  charcoalMid: "#141618",
  steel: "#2A2E32",
  steelLight: "#3D4349",
  copper: "#B5621E",
  copperLight: "#D4742A",
  copperGlow: "#E8883A",
  gold: "#C9A84C",
  goldLight: "#E2C36A",
  navy: "#0D1B2A",
  orange: "#D9520E",
  white: "#F5F2EE",
  offwhite: "#C8C4BE",
  muted: "#7A7670",
};

/* ─── DATA ─────────────────────────────────── */

const STATS = [
  { value: "54", suffix: "", label: "Countries Across Africa" },
  { value: "12+", suffix: "", label: "Target Mineral Commodities" },
  { value: "$2.4B", suffix: "", label: "Pipeline Project Value" },
  { value: "8", suffix: "", label: "Processing Verticals" },
];

const VALUE_CHAIN = [
  { id: "mine", label: "MINE", icon: "⬡", sub: "Resource development & exploration support" },
  { id: "process", label: "PROCESSING", icon: "◈", sub: "Concentrators, leach plants, flotation" },
  { id: "beneficiation", label: "BENEFICIATION", icon: "◇", sub: "Value addition & grade upgrading" },
  { id: "manufacturing", label: "MANUFACTURING", icon: "⬢", sub: "Alloys, battery materials, cathodes" },
  { id: "export", label: "EXPORT", icon: "◉", sub: "Ports, logistics, offtake structuring" },
  { id: "industrial", label: "INDUSTRIAL DEV", icon: "▣", sub: "Industrial parks & downstream zones" },
];

const LIFECYCLE = [
  "Exploration Support",
  "Resource Development",
  "Project Structuring",
  "Feasibility Support",
  "Financing",
  "Plant Design",
  "EPCM Partners",
  "Construction",
  "Commissioning",
  "Operations Support",
  "Commodity Sales",
  "Export Markets",
];

const MINERALS_LIST = [
  { name: "Lithium", tag: "Battery", color: T.copper },
  { name: "Copper", tag: "Base Metal", color: T.copperLight },
  { name: "Chrome", tag: "Ferrochrome", color: T.steelLight },
  { name: "Manganese", tag: "Alloys", color: T.steel },
  { name: "Nickel", tag: "Battery", color: T.copperGlow },
  { name: "Cobalt", tag: "Critical", color: T.navy },
  { name: "Graphite", tag: "Battery", color: T.muted },
  { name: "Rare Earths", tag: "Critical", color: T.orange },
  { name: "Gold", tag: "Precious", color: T.gold },
  { name: "Tin", tag: "Industrial", color: T.steelLight },
  { name: "Iron Ore", tag: "Base Metal", color: T.steel },
  { name: "Coal", tag: "Industrial", color: T.charcoalMid },
];

const SERVICES = [
  { title: "Mineral Processing", desc: "Full-circuit processing plant development including comminution, flotation, leaching and gravity separation systems." },
  { title: "Beneficiation Facilities", desc: "Value-addition infrastructure that upgrades raw ore to high-grade concentrates, pellets and refined products." },
  { title: "Commodity Trading", desc: "Structured offtake and trading solutions connecting African mineral producers with global industrial buyers." },
  { title: "Project Development", desc: "End-to-end project development from scoping and feasibility through financing, EPCM delivery and commissioning." },
  { title: "Processing Plant Engineering", desc: "Modular and fixed plant design in partnership with tier-one engineering houses for rapid deployment." },
  { title: "Supply Chain Structuring", desc: "Integrated logistics, warehousing, port arrangements and export pathway development." },
  { title: "Strategic Partnerships", desc: "Joint venture structures with governments, mining companies, DFIs and industrial groups." },
  { title: "Investment Advisory", desc: "Bankable feasibility, financial modelling and investor relations for mineral processing projects." },
  { title: "Offtake Solutions", desc: "Pre-production offtake agreements and streaming arrangements to underpin project financing." },
  { title: "Industrial Development", desc: "Special Economic Zones, processing parks and downstream industrial cluster development." },
];

const PROJECTS = [
  {
    name: "Chrome Processing Facility",
    country: "Zimbabwe",
    status: "Development",
    commodity: "Chrome / Ferrochrome",
    capacity: "120,000 tpa Ferrochrome",
    investment: "USD 180M",
  },
  {
    name: "Copper Concentrator",
    country: "Zambia",
    status: "Feasibility",
    commodity: "Copper",
    capacity: "500,000 tpa Ore",
    investment: "USD 240M",
  },
  {
    name: "Lithium Beneficiation Facility",
    country: "Zimbabwe",
    status: "Scoping",
    commodity: "Lithium",
    capacity: "50,000 tpa LCE",
    investment: "USD 320M",
  },
  {
    name: "Gold Processing Plant",
    country: "DRC",
    status: "Development",
    commodity: "Gold",
    capacity: "150,000 oz/yr",
    investment: "USD 95M",
  },
  {
    name: "Critical Minerals Hub",
    country: "South Africa",
    status: "Concept",
    commodity: "Multi-mineral",
    capacity: "Industrial Park",
    investment: "USD 600M",
  },
  {
    name: "Industrial Mineral Processing Park",
    country: "Tanzania",
    status: "Development",
    commodity: "Graphite / REE",
    capacity: "75,000 tpa",
    investment: "USD 210M",
  },
];

const PARTNERS = [
  "Governments & Sovereign Entities",
  "Established Mining Companies",
  "Junior Miners & Explorers",
  "Industrial & Manufacturing Groups",
  "Global Commodity Buyers",
  "Infrastructure Developers",
  "Development Finance Institutions",
  "Institutional Investors",
  "Engineering & EPCM Companies",
  "Technology Providers",
];

const INVESTMENT_STRUCTURES = [
  { title: "Strategic Partnerships", desc: "Long-term JV structures with aligned equity and governance" },
  { title: "Special Purpose Vehicles", desc: "Project-specific SPVs for ring-fenced mineral assets" },
  { title: "Project Finance", desc: "Bankable structures backed by offtake and processing contracts" },
  { title: "Development Finance", desc: "DFI, MDB and bilateral agency co-financing" },
  { title: "Equity Partnerships", desc: "Direct equity with institutional and strategic investors" },
  { title: "Offtake Financing", desc: "Streaming and royalty instruments underpinning capital raises" },
];

/* ─── HELPERS ──────────────────────────────── */

function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return val;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ─── SUB-COMPONENTS ───────────────────────── */

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [ref, inView] = useInView();
  const isNumeric = /^\d/.test(value);
  const numericPart = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[\d]/g, "");
  const counted = useCounter(numericPart, 1800, inView && isNumeric);
  const display = isNumeric ? `${counted}${suffix}` : value;

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        borderLeft: `2px solid ${T.copper}`,
        paddingLeft: "1.5rem",
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(2rem, 4vw, 3rem)", color: T.copper, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
        {display}
      </div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: T.muted, marginTop: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.5s ease ${(index % 3) * 80}ms, transform 0.5s ease ${(index % 3) * 80}ms, border-color 0.3s`,
        background: hov ? T.steel : T.charcoalMid,
        border: `1px solid ${hov ? T.copper : T.steelLight}`,
        padding: "2rem",
        cursor: "default",
      }}
    >
      <div style={{ width: hov ? 64 : 32, height: 2, background: T.copper, marginBottom: "1.25rem", transition: "width 0.3s" }} />
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: T.white, marginBottom: "0.75rem", fontWeight: 600 }}>{title}</h3>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: T.offwhite, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  const statusColors: Record<string, string> = {
    Development: T.copper, Feasibility: T.gold, Scoping: T.steelLight, Concept: T.muted
  };
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${(index % 3) * 90}ms, transform 0.55s ease ${(index % 3) * 90}ms`,
        background: hov ? "#1A1D21" : T.charcoalMid,
        border: `1px solid ${hov ? T.copper : T.steelLight}`,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hov && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${T.copper}, ${T.gold})` }} />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: T.white, fontWeight: 600, maxWidth: "75%" }}>{project.name}</h3>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", padding: "0.25rem 0.6rem", background: `${statusColors[project.status] || T.muted}22`, color: statusColors[project.status] || T.muted, border: `1px solid ${statusColors[project.status] || T.muted}44`, whiteSpace: "nowrap" }}>
          {project.status}
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {[
          ["Country", project.country],
          ["Commodity", project.commodity],
          ["Capacity", project.capacity],
          ["Investment", project.investment],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{k}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: T.offwhite }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ANIMATED VALUE CHAIN ─────────────────── */
function ValueChainDiagram() {
  const [ref, inView] = useInView(0.1);
  const [active, setActive] = useState<number | null>(null);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0",
        justifyContent: "center",
        alignItems: "stretch",
      }}>
        {VALUE_CHAIN.map((node, i) => {
          const isActive = active === i;
          return (
            <div key={node.id} style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(0.85)",
                  transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                  background: isActive ? T.copper : T.charcoalMid,
                  border: `1px solid ${isActive ? T.copperGlow : T.steelLight}`,
                  padding: "1.75rem 1.25rem",
                  textAlign: "center",
                  cursor: "default",
                  minWidth: 140,
                  transition: `all 0.25s ease, opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                  boxShadow: isActive ? `0 0 32px ${T.copper}33` : "none",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: isActive ? T.white : T.copper }}>{node.icon}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: isActive ? T.white : T.gold, marginBottom: "0.4rem" }}>{node.label}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: isActive ? "#ffffff99" : T.muted, lineHeight: 1.4 }}>{node.sub}</div>
              </div>
              {i < VALUE_CHAIN.length - 1 && (
                <div style={{
                  width: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: T.copper,
                  fontSize: "1.1rem",
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 100 + 200}ms`,
                }}>→</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── LIFECYCLE FLOW ───────────────────────── */
function LifecycleFlow() {
  const [ref, inView] = useInView(0.05);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 420 }}>
      {LIFECYCLE.map((step, i) => (
        <div key={step} style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-20px)",
          transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.copper, flexShrink: 0 }} />
            {i < LIFECYCLE.length - 1 && <div style={{ width: 1, height: 28, background: `${T.copper}44` }} />}
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: T.offwhite, paddingBottom: i < LIFECYCLE.length - 1 ? "0.75rem" : 0 }}>{step}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN PAGE ────────────────────────────── */
export default function MineralsPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const heroParallax = -scrollY * 0.25;

  return (
    <div style={{ background: T.charcoal, color: T.white, fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: `${T.charcoal}ee`, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.steelLight}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.5rem, 5vw, 4rem)", height: 64,
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/images/fon-logo.png" alt="FON Industrial Group" style={{ height: 44, width: "auto", objectFit: "contain" }} />
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Energy", "Agro", "Minerals", "Technologies"].map(d => (
            <a key={d} href={`/${d.toLowerCase()}`} style={{
              fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em",
              textTransform: "uppercase", color: d === "Minerals" ? T.copper : T.offwhite,
              textDecoration: "none", transition: "color 0.2s",
            }}>{d}</a>
          ))}
          <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", padding: "0.5rem 1.1rem", border: `1px solid ${T.copper}`, color: T.copper, textDecoration: "none", letterSpacing: "0.08em", transition: "all 0.2s" }}>INVESTORS</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 64 }}>
        {/* Background industrial grid */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
            <defs>
              <pattern id="hex-grid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke={T.copper} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" />
          </svg>
          {/* Animated copper gradient orb */}
          <div style={{
            position: "absolute", right: "-10%", top: "20%",
            width: "55vw", height: "55vw", borderRadius: "50%",
            background: `radial-gradient(circle, ${T.copper}22 0%, ${T.copper}08 40%, transparent 70%)`,
            transform: `translateY(${heroParallax * 0.5}px)`,
            transition: "transform 0.1s linear",
          }} />
          <div style={{
            position: "absolute", left: "-5%", bottom: "10%",
            width: "35vw", height: "35vw", borderRadius: "50%",
            background: `radial-gradient(circle, ${T.gold}11 0%, transparent 70%)`,
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "clamp(2rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)", maxWidth: 1200, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: 40, height: 1, background: T.copper }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: T.copper, textTransform: "uppercase" }}>FON Minerals — Division Overview</span>
          </div>

          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            margin: "0 0 1.5rem",
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}>
            Africa's Mineral<br />
            <span style={{ color: T.copper }}>Value Chain</span><br />
            Built Here.
          </h1>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: T.offwhite,
            maxWidth: 640,
            lineHeight: 1.75,
            margin: "0 0 2.5rem",
          }}>
            FON Minerals is a Pan-African mineral value chain development company building processing industries, industrial infrastructure, strategic partnerships, and responsible mineral supply chains across the continent.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#value-chain" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "0.9rem 2rem", background: T.copper, color: T.white, textDecoration: "none", textTransform: "uppercase", transition: "background 0.2s" }}>
              View Value Chain →
            </a>
            <a href="#projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "0.9rem 2rem", border: `1px solid ${T.steelLight}`, color: T.offwhite, textDecoration: "none", textTransform: "uppercase", transition: "border-color 0.2s" }}>
              Our Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: T.muted, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: `linear-gradient(${T.copper}, transparent)` }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${T.steelLight}`, borderBottom: `1px solid ${T.steelLight}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
          {STATS.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 100} />)}
        </div>
      </section>

      {/* ── POSITIONING ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 24, height: 1, background: T.copper }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase" }}>What We Are Not</span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
              Not a mining contractor.<br />
              <span style={{ color: T.copper }}>A value chain developer.</span>
            </h2>
            <p style={{ color: T.offwhite, lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              FON Minerals develops complete mineral value chains—from resource development to processing, logistics, industrial manufacturing, and international markets. We build the industries that transform Africa's mineral wealth into industrial capability.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["Mineral Processing", "Complete processing circuits—flotation, leach, gravity"],
              ["Industrial Infrastructure", "Smelters, refineries, processing parks"],
              ["Strategic Investment", "SPVs, DFI co-finance, equity partnerships"],
              ["Commodity Trading", "Offtake structuring, export facilitation"],
            ].map(([title, desc]) => (
              <div key={title} style={{ display: "flex", gap: "1rem", padding: "1.25rem", border: `1px solid ${T.steelLight}`, background: T.charcoalMid }}>
                <div style={{ width: 3, background: T.copper, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "0.95rem", color: T.white, marginBottom: "0.25rem" }}>{title}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: T.muted }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE CHAIN ── */}
      <section id="value-chain" style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.charcoalMid }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>The FON Minerals Model</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
              Mine to Market.<br /><span style={{ color: T.copper }}>Full Value Chain.</span>
            </h2>
            <p style={{ color: T.muted, maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: "0.9rem" }}>
              We develop infrastructure and partnerships across every stage of the mineral value chain—from the ground to global industrial markets.
            </p>
          </div>
          <ValueChainDiagram />
        </div>
      </section>

      {/* ── MINERAL COMMODITIES ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>Target Commodities</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              Minerals That Drive<br /><span style={{ color: T.copper }}>Industrial Progress</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1px", background: T.steelLight }}>
            {MINERALS_LIST.map((m, i) => {
              const [ref, inView] = useInView();
              return (
                <div key={m.name} ref={ref} style={{
                  background: T.charcoalMid,
                  padding: "1.5rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(0.95)",
                  transition: `opacity 0.4s ease ${i * 40}ms, transform 0.4s ease ${i * 40}ms`,
                }}>
                  <div style={{ width: 24, height: 3, background: m.color, marginBottom: "1rem" }} />
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: T.white, marginBottom: "0.4rem" }}>{m.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.tag}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECT LIFECYCLE ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.charcoalMid }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>Project Lifecycle</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
              End-to-End<br /><span style={{ color: T.copper }}>Project Development</span>
            </h2>
            <p style={{ color: T.offwhite, lineHeight: 1.75, fontSize: "0.9rem", marginBottom: "2rem" }}>
              FON Minerals supports mineral projects from initial exploration through to operating mine and global commodity sales—providing capital, expertise, partnerships and market access at every stage.
            </p>
            <div style={{ padding: "1.5rem", border: `1px solid ${T.copper}44`, background: `${T.copper}08` }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", color: T.copperLight, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>
                "We don't just invest in mines. We build the processing industries, logistics corridors and market relationships that make African mineral resources globally competitive."
              </p>
            </div>
          </div>
          <LifecycleFlow />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>Our Capabilities</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              What FON Minerals<br /><span style={{ color: T.copper }}>Delivers</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: T.steelLight }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.charcoalMid }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>Project Pipeline</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
                Development<br /><span style={{ color: T.copper }}>Portfolio</span>
              </h2>
            </div>
            <a href="/projects?sector=minerals" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", padding: "0.75rem 1.5rem", border: `1px solid ${T.steelLight}`, color: T.offwhite, textDecoration: "none", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              All Projects →
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", background: T.steelLight }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1rem" }}>Partnership Model</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
                We Work With<br /><span style={{ color: T.copper }}>Institutional Partners</span>
              </h2>
              <p style={{ color: T.offwhite, lineHeight: 1.75, fontSize: "0.9rem" }}>
                FON Minerals is designed to partner with a broad spectrum of institutional, governmental and commercial counterparties to build processing industries across Africa.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: T.steelLight }}>
              {PARTNERS.map((p, i) => {
                const [ref, inView] = useInView();
                return (
                  <div key={p} ref={ref} style={{
                    background: T.charcoalMid,
                    padding: "1.25rem",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.4s ease ${i * 50}ms, transform 0.4s ease ${i * 50}ms`,
                  }}>
                    <div style={{ width: 16, height: 2, background: T.copper, marginBottom: "0.75rem" }} />
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: T.offwhite, lineHeight: 1.4 }}>{p}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: T.gold, textTransform: "uppercase", marginBottom: "1rem" }}>Investment Structure</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
              Bankable Projects.<br /><span style={{ color: T.gold }}>Institutional Capital.</span>
            </h2>
            <p style={{ color: T.offwhite, maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: "0.9rem" }}>
              FON develops bankable mineral processing projects through structured financial instruments designed for institutional co-investors and development finance institutions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: `${T.copper}22` }}>
            {INVESTMENT_STRUCTURES.map((s, i) => {
              const [ref, inView] = useInView();
              return (
                <div key={s.title} ref={ref} style={{
                  background: "#0F1D2B",
                  padding: "2rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}>
                  <div style={{ width: 32, height: 2, background: T.gold, marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", color: T.white, marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: T.offwhite, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.1em", padding: "1rem 2.5rem", background: T.gold, color: T.charcoal, textDecoration: "none", textTransform: "uppercase", display: "inline-block" }}>
              Investment Enquiries →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${T.copper}18 0%, transparent 60%)` }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.copper, textTransform: "uppercase", marginBottom: "1.5rem" }}>Partner With FON Minerals</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
              Ready to Build Africa's<br />Processing Industries?
            </h2>
            <p style={{ color: T.offwhite, fontSize: "1rem", lineHeight: 1.75, maxWidth: 560, marginBottom: "2.5rem" }}>
              Whether you represent a government, mining company, DFI, or industrial group—let's explore how FON Minerals can develop your project.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/contact" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", background: T.copper, color: T.white, textDecoration: "none", textTransform: "uppercase" }}>
                Contact Our Team →
              </a>
              <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", border: `1px solid ${T.steelLight}`, color: T.offwhite, textDecoration: "none", textTransform: "uppercase" }}>
                Investor Relations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${T.steelLight}`, padding: "2.5rem clamp(1.5rem, 5vw, 4rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", color: T.muted }}>
          <img src="/images/fon-logo.png" alt="FON Industrial Group" style={{ height: 40, width: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: T.muted, letterSpacing: "0.08em" }}>
          fon.africa/minerals
        </div>
      </footer>

    </div>
  );
}
