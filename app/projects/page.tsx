"use client";

import { useState, useRef, useEffect } from "react";

const T = {
  black: "#0A0A0A",
  charcoal: "#111213",
  charcoalMid: "#141618",
  steel: "#1E2124",
  steelLight: "#2C3036",
  gold: "#C9A84C",
  white: "#F4F1ED",
  offwhite: "#C0BBB4",
  muted: "#6E6A64",
};

const SECTOR_COLORS: Record<string, string> = {
  Energy: "#1B6FEB",
  Agriculture: "#2D6A4F",
  Minerals: "#B5621E",
  Technology: "#00F0FF",
  Infrastructure: "#9B4DFF",
};

const PROJECTS = [
  // Minerals
  { name: "Chrome Processing Facility", country: "Zimbabwe", sector: "Minerals", status: "Development", commodity: "Chrome / Ferrochrome", capacity: "120,000 tpa Ferrochrome", investment: "USD 180M", desc: "Integrated chrome ore processing and ferrochrome smelting facility targeting European and Asian steel markets." },
  { name: "Copper Concentrator", country: "Zambia", sector: "Minerals", status: "Feasibility", commodity: "Copper", capacity: "500,000 tpa Ore", investment: "USD 240M", desc: "Greenfield copper concentrator producing 28% Cu concentrate for international smelters and local refineries." },
  { name: "Lithium Beneficiation Facility", country: "Zimbabwe", sector: "Minerals", status: "Scoping", commodity: "Lithium", capacity: "50,000 tpa LCE", investment: "USD 320M", desc: "Battery-grade lithium carbonate and hydroxide production serving global EV supply chains." },
  { name: "Gold Processing Plant", country: "DRC", sector: "Minerals", status: "Development", commodity: "Gold", capacity: "150,000 oz/yr", investment: "USD 95M", desc: "Carbon-in-leach gold processing plant supporting artisanal and small-scale mining formalisation." },
  { name: "Critical Minerals Hub", country: "South Africa", sector: "Minerals", status: "Concept", commodity: "Multi-mineral", capacity: "Industrial Park", investment: "USD 600M", desc: "Multi-commodity mineral processing and beneficiation park targeting the EU Critical Raw Materials Act supply chain." },
  { name: "Industrial Mineral Processing Park", country: "Tanzania", sector: "Minerals", status: "Development", commodity: "Graphite / REE", capacity: "75,000 tpa", investment: "USD 210M", desc: "Integrated graphite and rare earth element processing park linked to a dedicated export corridor." },
  // Energy
  { name: "Sonoran Solar Array", country: "South Africa", sector: "Energy", status: "Development", commodity: "Solar PV", capacity: "500 MW", investment: "USD 420M", desc: "Utility-scale solar PV facility with 4-hour battery storage serving South Africa's national grid." },
  { name: "East Africa Wind Corridor", country: "Kenya", sector: "Energy", status: "Feasibility", commodity: "Wind", capacity: "300 MW", investment: "USD 290M", desc: "Onshore wind energy project located in Kenya's established high-wind corridor." },
  // Agriculture
  { name: "Zambia Grain Processing Hub", country: "Zambia", sector: "Agriculture", status: "Development", commodity: "Maize / Soya", capacity: "300,000 t/yr", investment: "USD 75M", desc: "Integrated grain storage, milling and processing facility serving Zambia and export markets." },
  { name: "West Africa Agri Corridor", country: "Ghana", sector: "Agriculture", status: "Scoping", commodity: "Cocoa / Fruits", capacity: "Multi-crop", investment: "USD 110M", desc: "Agricultural value chain development linking smallholder farmers to processing and export infrastructure." },
  // Technology
  { name: "Pan-African Data Centre Network", country: "Nigeria", sector: "Technology", status: "Development", commodity: "Digital Infrastructure", capacity: "40MW Tier III", investment: "USD 180M", desc: "Hyperscale-ready data centres serving cloud providers and enterprise clients in West Africa." },
  // Infrastructure
  { name: "Dar es Salaam Logistics Hub", country: "Tanzania", sector: "Infrastructure", status: "Development", commodity: "Logistics", capacity: "1.2M TEU/yr", investment: "USD 350M", desc: "Integrated port-side logistics hub serving landlocked east and central African markets." },
];

const SECTORS = ["All", "Energy", "Agriculture", "Minerals", "Technology", "Infrastructure"];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  const accent = SECTOR_COLORS[project.sector] || T.gold;
  const statusColors: Record<string, string> = { Development: accent, Feasibility: T.gold, Scoping: T.muted, Concept: "#5A5A5A" };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "#1A1D21" : T.charcoalMid,
        border: `1px solid ${hov ? accent : T.steelLight}`,
        padding: "2rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${(index % 4) * 70}ms, transform 0.5s ease ${(index % 4) * 70}ms, background 0.25s, border-color 0.25s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hov && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accent}, transparent)` }} />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: accent, padding: "0.2rem 0.6rem", border: `1px solid ${accent}33`, background: `${accent}11` }}>
          {project.sector}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: statusColors[project.status] || T.muted }}>
          {project.status}
        </span>
      </div>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: T.white, margin: "0 0 0.5rem", fontWeight: 600 }}>{project.name}</h3>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: T.offwhite, lineHeight: 1.65, margin: "0 0 1.25rem" }}>{project.desc}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", paddingTop: "1.25rem", borderTop: `1px solid ${T.steelLight}` }}>
        {[
          ["Country", project.country],
          ["Capacity", project.capacity],
          ["Commodity", project.commodity],
          ["Investment", project.investment],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{k}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: T.offwhite }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [sector, setSector] = useState("All");
  const filtered = sector === "All" ? PROJECTS : PROJECTS.filter(p => p.sector === sector);

  return (
    <div style={{ background: T.black, color: T.white, fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: `${T.black}ee`, backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.steelLight}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(1.5rem, 5vw, 4rem)", height: 64 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/images/fon-logo.png" alt="FON Industrial Group" style={{ height: 44, width: "auto", objectFit: "contain" }} />
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Energy", "/energy"], ["Agro", "/agro"], ["Minerals", "/minerals"], ["Technologies", "/technologies"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: T.offwhite, textDecoration: "none" }}>{label}</a>
          ))}
          <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", padding: "0.5rem 1.1rem", border: `1px solid ${T.gold}44`, color: T.gold, textDecoration: "none", letterSpacing: "0.08em" }}>INVESTORS</a>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 64, padding: "clamp(5rem, 12vw, 8rem) clamp(1.5rem, 5vw, 4rem) 3rem", borderBottom: `1px solid ${T.steelLight}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 40, height: 1, background: T.gold }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: T.gold, textTransform: "uppercase" }}>Development Pipeline</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
            Projects &<br /><span style={{ color: T.gold }}>Ventures</span>
          </h1>
          <p style={{ color: T.offwhite, fontSize: "clamp(0.95rem, 2vw, 1.05rem)", maxWidth: 560, lineHeight: 1.8, margin: 0 }}>
            A diversified portfolio of industrial, energy, mineral, and technology projects spanning 12+ African nations — from early-stage development through to operating assets.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section style={{ padding: "2rem clamp(1.5rem, 5vw, 4rem)", borderBottom: `1px solid ${T.steelLight}`, position: "sticky", top: 64, background: `${T.black}f0`, backdropFilter: "blur(8px)", zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {SECTORS.map(s => (
            <button
              key={s}
              onClick={() => setSector(s)}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em",
                padding: "0.6rem 1.25rem", border: `1px solid ${sector === s ? (SECTOR_COLORS[s] || T.gold) : T.steelLight}`,
                background: sector === s ? `${(SECTOR_COLORS[s] || T.gold)}22` : "transparent",
                color: sector === s ? (SECTOR_COLORS[s] || T.gold) : T.muted,
                cursor: "pointer", textTransform: "uppercase", transition: "all 0.2s",
              }}
            >{s} {sector !== s && s !== "All" && <span style={{ marginLeft: "0.4rem", fontSize: "0.55rem", color: T.muted }}>{PROJECTS.filter(p => p.sector === s).length}</span>}</button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", background: T.steelLight }}>
            {filtered.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: "5rem", textAlign: "center", color: T.muted, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
              No projects in this sector yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${T.steelLight}`, textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
            Have a Project to<br /><span style={{ color: T.gold }}>Develop Together?</span>
          </h2>
          <p style={{ color: T.offwhite, lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.95rem" }}>FON partners with governments, mining companies, developers, and investors to bring industrial projects to fruition across Africa.</p>
          <a href="/contact" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2.5rem", background: T.gold, color: T.black, textDecoration: "none", textTransform: "uppercase", display: "inline-block" }}>
            Discuss Your Project →
          </a>
        </div>
      </section>

    </div>
  );
}
