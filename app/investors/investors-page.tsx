"use client";

import { useState, useRef, useEffect } from "react";

const T = {
  black: "#0A0A0A",
  charcoal: "#111213",
  charcoalMid: "#141618",
  steel: "#1E2124",
  steelLight: "#2C3036",
  gold: "#C9A84C",
  goldLight: "#E2C36A",
  white: "#F4F1ED",
  offwhite: "#C0BBB4",
  muted: "#6E6A64",
};

const SECTORS = [
  {
    name: "Energy",
    accent: "#1B6FEB",
    areas: ["Utility-Scale Solar & Wind", "Power Transmission Infrastructure", "Energy Storage", "Mini-Grids & Off-Grid Access", "LNG & Gas Infrastructure"],
  },
  {
    name: "Agriculture",
    accent: "#2D6A4F",
    areas: ["Agribusiness & Processing", "Food Supply Chain Infrastructure", "Cold Chain Logistics", "Irrigation & Water Systems", "Agricultural Technology"],
  },
  {
    name: "Minerals",
    accent: "#B5621E",
    areas: [
      "Critical Minerals Processing",
      "Mineral Beneficiation Facilities",
      "Processing Infrastructure",
      "Industrial Parks & SEZs",
      "Battery Materials",
      "Strategic Mineral Supply Chains",
      "Lithium & Cobalt Value Chains",
      "Copper Concentrator Development",
      "Chrome & Ferrochrome Production",
      "Rare Earth Element Processing",
    ],
    featured: true,
  },
  {
    name: "Technology",
    accent: "#00F0FF",
    areas: ["Digital Infrastructure", "Fintech Platforms", "Data Centres", "AgriTech Solutions", "Industrial IoT & Digital Mining"],
  },
];

const INSTRUMENTS = [
  { name: "Direct Equity", desc: "Minority and majority equity stakes in FON operating companies and project SPVs." },
  { name: "Project Finance", desc: "Senior and mezzanine debt structures backed by bankable project assets and offtake agreements." },
  { name: "Special Purpose Vehicles", desc: "Ring-fenced SPVs for individual mineral processing, energy, and infrastructure projects." },
  { name: "Development Finance", desc: "Co-financing structures with DFIs, MDBs, and bilateral development agencies." },
  { name: "Offtake Financing", desc: "Streaming arrangements and royalty instruments underpinning capital raises for mineral projects." },
  { name: "Infrastructure Bonds", desc: "Project-level bond structures for large-scale infrastructure across FON's divisions." },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

export default function InvestorsPage() {
  const [activeTab, setActiveTab] = useState("Minerals");

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
          <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", padding: "0.5rem 1.1rem", border: `1px solid ${T.gold}`, color: T.gold, textDecoration: "none", letterSpacing: "0.08em" }}>INVESTORS</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 64, padding: "clamp(5rem, 12vw, 9rem) clamp(1.5rem, 5vw, 4rem) 5rem", borderBottom: `1px solid ${T.steelLight}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 40, height: 1, background: T.gold }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: T.gold, textTransform: "uppercase" }}>Investor Relations</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1.5rem", letterSpacing: "-0.02em", maxWidth: 800 }}>
            Institutional Capital for<br /><span style={{ color: T.gold }}>Africa's Industrial Buildout</span>
          </h1>
          <p style={{ color: T.offwhite, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 600, lineHeight: 1.8, margin: 0 }}>
            FON develops bankable industrial, energy, agricultural, and mineral projects across Africa—offering institutional co-investors structured access to one of the world's most significant long-cycle development opportunities.
          </p>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.charcoal }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.gold, textTransform: "uppercase", marginBottom: "1rem" }}>The Investment Thesis</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              Why Africa. Why Now.<br /><span style={{ color: T.gold }}>Why FON.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: T.steelLight }}>
            {[
              { title: "Structural Demand", body: "Africa's industrialisation, urbanisation, and energy transition create multi-decade infrastructure and commodity demand that cannot be met from existing capacity." },
              { title: "Critical Minerals Position", body: "Africa holds 30%+ of global critical mineral reserves required for the energy transition. FON is positioned to develop processing infrastructure that captures value domestically." },
              { title: "First-Mover Advantage", body: "Pan-African industrial holding groups of FON's scale and sector breadth are rare. We occupy a structural positioning that compounds over time with each project developed." },
              { title: "Diversified Revenue", body: "Four operating divisions across energy, agriculture, minerals, and technology provide genuine cash flow diversification across uncorrelated industry cycles." },
              { title: "Institutional Architecture", body: "FON structures bankable projects with DFI-grade documentation, ring-fenced SPVs, and governance standards that satisfy institutional co-investors and lenders." },
              { title: "Sovereign Partnerships", body: "Direct government partnerships across multiple African nations provide project pipeline visibility, land access, operating permits, and policy risk mitigation." },
            ].map((item, i) => {
              const [ref, inView] = useInView();
              return (
                <div key={item.title} ref={ref} style={{ background: T.charcoalMid, padding: "2rem", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.5s ease ${(i % 3) * 80}ms, transform 0.5s ease ${(i % 3) * 80}ms` }}>
                  <div style={{ width: 32, height: 2, background: T.gold, marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: T.white, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: T.offwhite, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTOR TABS */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.gold, textTransform: "uppercase", marginBottom: "1rem" }}>Sector Investment Areas</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: "0 0 2.5rem", letterSpacing: "-0.02em" }}>
              Where We<br /><span style={{ color: T.gold }}>Deploy Capital</span>
            </h2>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${T.steelLight}`, marginBottom: "3rem" }}>
              {SECTORS.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setActiveTab(s.name)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em",
                    padding: "0.85rem 1.5rem", border: "none",
                    background: "transparent", cursor: "pointer", textTransform: "uppercase",
                    color: activeTab === s.name ? s.accent : T.muted,
                    borderBottom: `2px solid ${activeTab === s.name ? s.accent : "transparent"}`,
                    transition: "all 0.2s",
                    position: "relative",
                  }}
                >
                  {s.name}
                  {s.featured && activeTab !== s.name && (
                    <span style={{ position: "absolute", top: 6, right: 6, width: 5, height: 5, borderRadius: "50%", background: s.accent }} />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {SECTORS.filter(s => s.name === activeTab).map(s => (
              <div key={s.name}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: T.steelLight }}>
                  {s.areas.map((area, i) => (
                    <div key={area} style={{ background: T.charcoalMid, padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ width: 3, height: "100%", minHeight: 20, background: s.accent, flexShrink: 0, marginTop: 2 }} />
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: T.offwhite, lineHeight: 1.5 }}>{area}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUMENTS */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", background: T.charcoal }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: T.gold, textTransform: "uppercase", marginBottom: "1rem" }}>Investment Instruments</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              Structured for<br /><span style={{ color: T.gold }}>Institutional Investors</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: T.steelLight }}>
            {INSTRUMENTS.map((inst, i) => {
              const [ref, inView] = useInView();
              return (
                <div key={inst.name} ref={ref} style={{ background: T.charcoalMid, padding: "2rem", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.5s ease ${(i % 3) * 80}ms, transform 0.5s ease ${(i % 3) * 80}ms` }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: T.gold, textTransform: "uppercase", marginBottom: "0.75rem" }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: T.white, marginBottom: "0.75rem" }}>{inst.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: T.offwhite, lineHeight: 1.7, margin: 0 }}>{inst.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
            Ready to Discuss<br /><span style={{ color: T.gold }}>Investment Opportunities?</span>
          </h2>
          <p style={{ color: T.offwhite, lineHeight: 1.75, marginBottom: "2.5rem" }}>Our investment relations team works with institutional investors, DFIs, sovereign wealth funds, and family offices interested in Africa's industrial development.</p>
          <a href="/contact" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.1em", padding: "1rem 2.5rem", background: T.gold, color: T.black, textDecoration: "none", textTransform: "uppercase", display: "inline-block" }}>
            Contact Investor Relations →
          </a>
        </div>
      </section>

    </div>
  );
}
