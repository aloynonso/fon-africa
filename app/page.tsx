"use client";

import { useEffect, useRef, useState } from "react";

const T = {
  black: "#0A0A0A",
  charcoal: "#111213",
  steel: "#1E2124",
  steelLight: "#2C3036",
  white: "#F4F1ED",
  offwhite: "#C0BBB4",
  muted: "#6E6A64",
  // Division accents
  energy: { primary: "#1B6FEB", secondary: "#10B981" },
  agro: { primary: "#2D6A4F", secondary: "#C47B2B" },
  minerals: { primary: "#B5621E", secondary: "#C9A84C" },
  tech: { primary: "#00F0FF", secondary: "#9B4DFF" },
};

const DIVISIONS = [
  {
    id: "energy",
    name: "FON ENERGY",
    tagline: "Power Infrastructure & Renewable Energy",
    desc: "Developing utility-scale renewable energy, power infrastructure, and energy access solutions across Africa.",
    href: "/energy",
    accent: T.energy.primary,
    accent2: T.energy.secondary,
    tag: "Energy Transition",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
        <polygon points="20,4 24,16 36,16 26,24 30,36 20,28 10,36 14,24 4,16 16,16" stroke="#1B6FEB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: "agro",
    name: "FON AGRO",
    tagline: "Agricultural Value Chains & Food Systems",
    desc: "Building integrated agribusiness, food processing, and agricultural infrastructure across the continent.",
    href: "/agro",
    accent: T.agro.primary,
    accent2: T.agro.secondary,
    tag: "Agribusiness",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#2D6A4F" strokeWidth="1.5" />
        <path d="M20 6 Q28 14 20 20 Q12 26 20 34" stroke="#C47B2B" strokeWidth="1.5" fill="none" />
        <path d="M6 20 Q14 12 20 20 Q26 28 34 20" stroke="#2D6A4F" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: "minerals",
    name: "FON MINERALS",
    tagline: "Mineral Value Chain & Industrial Processing",
    desc: "Developing complete mineral processing industries, beneficiation facilities, and strategic supply chains from Africa to global markets.",
    href: "/minerals",
    accent: T.minerals.primary,
    accent2: T.minerals.secondary,
    tag: "Critical Minerals",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
        <polygon points="20,4 36,14 36,26 20,36 4,26 4,14" stroke="#B5621E" strokeWidth="1.5" fill="none" />
        <polygon points="20,12 28,17 28,23 20,28 12,23 12,17" stroke="#C9A84C" strokeWidth="1" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#B5621E" />
      </svg>
    ),
  },
  {
    id: "technologies",
    name: "FON TECHNOLOGIES",
    tagline: "Digital Infrastructure & Deep Tech",
    desc: "Deploying digital infrastructure, fintech platforms, and frontier technology solutions built for Africa's scale.",
    href: "/technologies",
    accent: T.tech.primary,
    accent2: T.tech.secondary,
    tag: "Deep Tech",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="2" stroke="#00F0FF" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3" fill="#00F0FF" opacity="0.6" />
        <circle cx="28" cy="12" r="3" fill="#9B4DFF" opacity="0.6" />
        <circle cx="12" cy="28" r="3" fill="#9B4DFF" opacity="0.6" />
        <circle cx="28" cy="28" r="3" fill="#00F0FF" opacity="0.6" />
        <path d="M12 12 L20 20 L28 12 M12 28 L20 20 L28 28" stroke="#00F0FF" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
];

const METRICS = [
  { val: "4", label: "Primary Divisions" },
  { val: "54", label: "African Nations" },
  { val: "$5B+", label: "Development Pipeline" },
  { val: "2024", label: "Established" },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function DivisionCard({ div, index }: { div: typeof DIVISIONS[0]; index: number }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={div.href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: hov ? T.steel : T.charcoal,
        border: `1px solid ${hov ? div.accent : T.steelLight}`,
        padding: "2.5rem",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${index * 100}ms, transform 0.55s ease ${index * 100}ms, background 0.25s, border-color 0.25s`,
        cursor: "pointer",
      }}
    >
      {/* Accent glow on hover */}
      {hov && (
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at top left, ${div.accent}12, transparent 60%)`,
          pointerEvents: "none",
        }} />
      )}
      {/* Top border accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: hov ? `linear-gradient(90deg, ${div.accent}, ${div.accent2})` : "transparent", transition: "background 0.3s" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
        {div.icon}
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem",
          letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "0.25rem 0.6rem", border: `1px solid ${div.accent}44`,
          color: div.accent, background: `${div.accent}11`,
        }}>{div.tag}</span>
      </div>

      <h3 style={{
        fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 700,
        color: T.white, margin: "0 0 0.4rem", letterSpacing: "-0.01em",
      }}>{div.name}</h3>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem",
        color: div.accent, letterSpacing: "0.06em", marginBottom: "1rem",
      }}>{div.tagline}</div>
      <p style={{
        fontFamily: "Inter, sans-serif", fontSize: "0.85rem",
        color: T.offwhite, lineHeight: 1.7, margin: 0,
      }}>{div.desc}</p>

      <div style={{
        marginTop: "1.75rem", display: "flex", alignItems: "center", gap: "0.5rem",
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem",
        letterSpacing: "0.1em", color: hov ? div.accent : T.muted,
        transition: "color 0.25s",
      }}>
        <span>EXPLORE DIVISION</span>
        <span style={{ transform: hov ? "translateX(4px)" : "translateX(0)", transition: "transform 0.25s" }}>→</span>
      </div>
    </a>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ background: T.black, color: T.white, fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: `${T.black}ee`, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.steelLight}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.5rem, 5vw, 4rem)", height: 64,
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/images/fon-logo.png" alt="FON Industrial Group" style={{ height: 44, width: "auto", objectFit: "contain" }} />
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Energy", "/energy"], ["Agro", "/agro"], ["Minerals", "/minerals"], ["Technologies", "/technologies"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: T.offwhite, textDecoration: "none" }}>{label}</a>
          ))}
          <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", padding: "0.5rem 1.1rem", border: `1px solid #C9A84C44`, color: "#C9A84C", textDecoration: "none", letterSpacing: "0.08em" }}>INVESTORS</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
            <defs>
              <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "clamp(2rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)", maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>

          {/* LEFT — headline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <div style={{ width: 40, height: 1, background: "#C9A84C" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C9A84C", textTransform: "uppercase" }}>Father of Nations — Industrial Group</span>
            </div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: 1.0, margin: "0 0 1.5rem", letterSpacing: "-0.03em" }}>
              Building<br />Africa's<br /><span style={{ color: "#C9A84C" }}>Industrial</span><br />Future.
            </h1>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: T.offwhite, maxWidth: 540, lineHeight: 1.8, margin: "0 0 3rem" }}>
              A Pan-African industrial holding group operating across energy, agriculture, minerals, and technology — building the infrastructure, industries, and supply chains that will define the continent's next century.
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/about" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", background: "#C9A84C", color: T.black, textDecoration: "none", textTransform: "uppercase" }}>
                About FON →
              </a>
              <a href="/investors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", border: `1px solid ${T.steelLight}`, color: T.offwhite, textDecoration: "none", textTransform: "uppercase" }}>
                Investors
              </a>
            </div>
          </div>

          {/* RIGHT — logo */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", opacity: 0.92, marginTop: "-8rem" }}>
            <img
              src="/images/fon-logo.png"
              alt="FON Industrial Group"
              style={{ width: "clamp(220px, 22vw, 380px)", height: "auto", objectFit: "contain", filter: "drop-shadow(0 0 40px rgba(201,168,76,0.15))" }}
            />
          </div>

        </div>
      </section>

      {/* METRICS */}
      <section style={{ borderTop: `1px solid ${T.steelLight}`, borderBottom: `1px solid ${T.steelLight}`, padding: "3rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {METRICS.map((m) => (
            <div key={m.label} style={{ borderLeft: `2px solid #C9A84C44`, paddingLeft: "1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#C9A84C", fontWeight: 700 }}>{m.val}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVISIONS */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C9A84C", textTransform: "uppercase", marginBottom: "1rem" }}>Our Business Divisions</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              Four Pillars.<br /><span style={{ color: "#C9A84C" }}>One Vision.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: T.steelLight }}>
            {DIVISIONS.map((div, i) => <DivisionCard key={div.id} div={div} index={i} />)}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ borderTop: `1px solid ${T.steelLight}`, borderBottom: `1px solid ${T.steelLight}`, padding: "1rem 0", overflow: "hidden", background: T.charcoal }}>
        <div style={{ display: "flex", gap: "4rem", animation: "ticker 30s linear infinite", whiteSpace: "nowrap" }}>
          {Array(3).fill(["ENERGY", "AGRICULTURE", "MINERALS", "TECHNOLOGY", "INFRASTRUCTURE", "PROCESSING", "TRADE", "DEVELOPMENT"]).flat().map((item, i) => (
            <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: T.muted }}>
              {item} <span style={{ color: "#C9A84C44", marginLeft: "2rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "7rem clamp(1.5rem, 5vw, 4rem)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1.5rem", letterSpacing: "-0.02em" }}>
            Partner With<br /><span style={{ color: "#C9A84C" }}>Father of Nations</span>
          </h2>
          <p style={{ color: T.offwhite, fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Governments, investors, and industrial partners—explore how FON can develop Africa's energy, agriculture, mineral, and technology sectors together.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", background: "#C9A84C", color: T.black, textDecoration: "none", textTransform: "uppercase" }}>
              Contact Us →
            </a>
            <a href="/projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "1rem 2rem", border: `1px solid ${T.steelLight}`, color: T.offwhite, textDecoration: "none", textTransform: "uppercase" }}>
              View Projects
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
