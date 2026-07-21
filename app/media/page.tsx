"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────
   MEDIA & INDUSTRY INTELLIGENCE — DESIGN TOKENS
   The group voice: core Black & Gold.
   No division-specific accent — Media wears the
   house identity because it speaks for all divisions.
───────────────────────────────────────────── */
const T = {
  ink: "#0B0C0C",
  inkMid: "#111314",
  panel: "#17191A",
  panelHi: "#1E2122",
  gold: "#C9A84C",
  goldLight: "#E2C36A",
  goldGlow: "#F0D583",
  white: "#F5F2EE",
  offwhite: "#C8C4BE",
  muted: "#8A857D",
  line: "rgba(245,242,238,0.10)",
  lineSoft: "rgba(245,242,238,0.06)",
};

const FONT_SERIF = "'Fraunces', Georgia, serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";
const FONT_SANS = "'Inter', system-ui, sans-serif";

/* ─── DATA ─────────────────────────────────── */

const HERO_SECTORS = [
  "Mining",
  "Industrial Facilities",
  "Construction",
  "Factories",
  "Ports",
  "Engineers",
  "Drones",
  "Documentary Crews",
];

const SCOPE_STATS = [
  { prefix: "", value: 5, suffix: "", label: "Group divisions amplified" },
  { prefix: "", value: 12, suffix: "", label: "Industries in editorial scope" },
  { prefix: "", value: 6, suffix: "", label: "Production formats" },
  { prefix: "", value: 54, suffix: "", label: "African markets in frame" },
];

const ACCELERATORS = [
  {
    k: "01",
    title: "Investment",
    body: "Professionally documented projects de-risk perception and shorten the distance between a resource and the capital that develops it.",
  },
  {
    k: "02",
    title: "Technology Adoption",
    body: "Showing beneficiation, automation and clean-energy systems at work turns abstract capability into an adoption case study.",
  },
  {
    k: "03",
    title: "Knowledge Sharing",
    body: "Explainer and educational content moves technical know-how across borders, institutions and generations of operators.",
  },
  {
    k: "04",
    title: "Partnerships",
    body: "Visibility introduces OEMs, developers, governments and funds to one another around a shared, credible narrative.",
  },
  {
    k: "05",
    title: "Industrialisation",
    body: "Trust and understanding compound. Sustained storytelling builds the public and institutional confidence that industry needs to scale.",
  },
];

const PRODUCE = [
  {
    title: "Documentary Films",
    items: ["Mine visits", "Infrastructure projects", "Factories", "Industrial parks", "Construction"],
  },
  {
    title: "Executive Interviews",
    items: ["CEOs", "Government", "Investors", "Engineers", "Industry leaders"],
  },
  {
    title: "Industry Intelligence",
    items: ["Research", "Market reports", "Commodity insights", "Investment reports", "Country reports"],
  },
  {
    title: "Educational Content",
    items: ["Mining", "Beneficiation", "Energy", "Infrastructure", "Technology", "Industrial policy"],
  },
  {
    title: "Conference Coverage",
    items: ["Mining Indaba", "Energy conferences", "Government forums", "Industrial summits"],
  },
  {
    title: "Project Showcases",
    items: ["Plants", "Equipment", "Factories", "Renewable energy", "Mining projects", "Industrial developments"],
  },
];

const INDUSTRIES = [
  "Mining",
  "Energy",
  "Agriculture",
  "Manufacturing",
  "Infrastructure",
  "Technology",
  "Ports",
  "Logistics",
  "Critical Minerals",
  "Water",
  "Construction",
  "Smart Cities",
];

const PARTNER_TYPES = [
  "OEMs",
  "Mining companies",
  "Governments",
  "Investment funds",
  "Industrial developers",
  "Technology providers",
  "Development finance institutions",
];

const FEATURED = [
  {
    title: "Inside African Mining",
    category: "Documentary Series",
    body: "From pit to port — the operators, engineers and communities building the continent's mineral value chain.",
  },
  {
    title: "Africa's Industrial Future",
    category: "Flagship Film",
    body: "A continental view of the shift from raw export to manufactured value, told through the people making it happen.",
  },
  {
    title: "Building Energy Africa",
    category: "Documentary Series",
    body: "Grid, generation and off-grid — how power is being built where it has never reached before.",
  },
  {
    title: "The Future of Beneficiation",
    category: "Intelligence Feature",
    body: "Why processing at source changes the economics of a nation, not just a mine.",
  },
  {
    title: "Industrial Leaders",
    category: "Interview Series",
    body: "Long-form conversations with the CEOs, ministers and financiers shaping industrial policy.",
  },
  {
    title: "Mining Explained",
    category: "Educational",
    body: "The methods, the machines and the markets — mining made legible for investors and the public.",
  },
  {
    title: "Africa's Infrastructure Stories",
    category: "Documentary Series",
    body: "Roads, rail, ports and cities — the connective tissue of an industrialising continent.",
  },
];

const DIVISIONS = ["Mining", "Energy", "Agro", "Technologies"];

const ROADMAP = [
  "Podcasts",
  "Streaming",
  "Newsletters",
  "Research",
  "Market Intelligence",
  "Industry Awards",
  "Annual Reports",
  "Mining TV",
  "Energy TV",
  "Infrastructure TV",
  "Events",
  "Training",
  "Digital Magazine",
];

/* ─── MOTION ───────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};
const VIEWPORT = { once: true, margin: "-80px" };

/* ─── PRIMITIVES ───────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
      <span style={{ width: 34, height: 1, background: T.gold, display: "inline-block" }} />
      <span
        style={{
          fontFamily: FONT_MONO,
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: T.gold,
        }}
      >
        {children}
      </span>
    </div>
  );
}

/* Count-up that respects reduced motion and parses cleanly */
function StatCard({
  prefix,
  value,
  suffix,
  label,
  index,
}: {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, reduce]);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      style={{
        borderTop: `1px solid ${T.line}`,
        paddingTop: "1.4rem",
      }}
    >
      <div
        ref={ref}
        style={{
          fontFamily: FONT_SERIF,
          fontWeight: 300,
          fontSize: "clamp(2.6rem, 5vw, 4rem)",
          lineHeight: 1,
          color: T.white,
          letterSpacing: "-0.02em",
        }}
      >
        {prefix}
        <span style={{ color: T.goldLight }}>{display}</span>
        {suffix}
      </div>
      <div
        style={{
          marginTop: "0.9rem",
          fontFamily: FONT_SANS,
          fontSize: "0.9rem",
          lineHeight: 1.5,
          color: T.muted,
          maxWidth: 220,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─────────────────────────────────── */

export default function MediaPage() {
  const reduce = useReducedMotion();

  return (
    <main style={{ background: T.ink, color: T.white, fontFamily: FONT_SANS, overflowX: "hidden" }}>
      {/* ══ HERO ══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10rem clamp(1.5rem, 5vw, 6rem) 6rem",
          isolation: "isolate",
        }}
      >
        {/* Cinematic backdrop: gradient wash + optional footage slot.
            Drop a poster/video at /images/media/hero.jpg (or wire a <video>) —
            the gradient stands in until then. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -3,
            background:
              "radial-gradient(120% 90% at 78% 18%, rgba(201,168,76,0.16), transparent 55%), radial-gradient(120% 120% at 12% 100%, rgba(201,168,76,0.06), transparent 60%), linear-gradient(180deg, #0B0C0C 0%, #0E0F0F 60%, #0B0C0C 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -3,
            backgroundImage: "url(/images/media/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
            filter: "grayscale(0.3) contrast(1.05)",
          }}
        />
        {/* Film grain */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
            opacity: 0.05,
            mixBlendMode: "overlay",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Letterbox bars — the documentary frame, our signature device */}
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 88, background: "linear-gradient(180deg, rgba(11,12,12,0.9), transparent)", zIndex: -1 }} />
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(0deg, rgba(11,12,12,0.95), transparent)", zIndex: -1 }} />

        <motion.div initial={reduce ? false : "hidden"} animate="visible" variants={fadeUp}>
          <Label>FON · Media &amp; Industry Intelligence</Label>
        </motion.div>

        <motion.h1
          custom={1}
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: FONT_SERIF,
            fontWeight: 300,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            margin: "2rem 0 1.5rem",
            maxWidth: 1100,
          }}
        >
          Telling Africa&rsquo;s{" "}
          <span style={{ fontStyle: "italic", color: T.goldLight, fontWeight: 400 }}>Industrial</span>{" "}
          Story.
        </motion.h1>

        <motion.p
          custom={2}
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: FONT_SANS,
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: 1.6,
            color: T.offwhite,
            maxWidth: 640,
            marginBottom: "2.6rem",
          }}
        >
          We document the people, projects, technologies and ideas shaping Africa&rsquo;s industrial
          future through world-class media, documentary production and industry intelligence.
        </motion.p>

        <motion.div
          custom={3}
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a href="#productions" style={btnPrimary}>
            View Our Productions
          </a>
          <a href="#partner" style={btnGhost}>
            Partner With Us
          </a>
        </motion.div>

        {/* Sector strip */}
        <motion.div
          custom={4}
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          style={{
            marginTop: "4rem",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            fontFamily: FONT_MONO,
            fontSize: "0.68rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: T.muted,
          }}
        >
          {HERO_SECTORS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </motion.div>
      </section>

      {/* ══ SECTION 1 — WHY MEDIA MATTERS ══ */}
      <Section id="why">
        <Label>01 — Why Media Matters</Label>
        <SectionHead>
          Industry is built on capital and technology&mdash;and on{" "}
          <span style={{ fontStyle: "italic", color: T.goldLight }}>education, trust and visibility.</span>
        </SectionHead>
        <p style={leadP}>
          Projects do not scale on engineering alone. They scale when investors understand them,
          when governments trust them, when operators can learn from them, and when partners can
          find one another. Media is the mechanism that turns industrial capability into industrial
          momentum.
        </p>

        {/* Scope stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginTop: "4rem",
          }}
        >
          {SCOPE_STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Accelerators */}
        <div
          style={{
            marginTop: "5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: T.line,
            border: `1px solid ${T.line}`,
          }}
        >
          {ACCELERATORS.map((a, i) => (
            <motion.div
              key={a.k}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              style={{ background: T.ink, padding: "2rem 1.8rem" }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.75rem", color: T.gold, letterSpacing: "0.2em" }}>
                {a.k}
              </div>
              <div
                style={{
                  fontFamily: FONT_SERIF,
                  fontSize: "1.35rem",
                  fontWeight: 400,
                  margin: "1rem 0 0.7rem",
                  color: T.white,
                }}
              >
                {a.title}
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: T.muted }}>{a.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ SECTION 2 — WHAT WE PRODUCE ══ */}
      <Section id="produce" alt>
        <Label>02 — What We Produce</Label>
        <SectionHead>Six formats, one editorial standard.</SectionHead>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {PRODUCE.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              style={{
                border: `1px solid ${T.line}`,
                background: T.panel,
                padding: "2.2rem",
                transition: "border-color 0.4s, transform 0.4s",
              }}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <h3
                style={{
                  fontFamily: FONT_SERIF,
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: T.white,
                  marginBottom: "1.4rem",
                }}
              >
                {c.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.7rem" }}>
                {c.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.7rem",
                      fontSize: "0.9rem",
                      color: T.offwhite,
                    }}
                  >
                    <span style={{ width: 5, height: 5, background: T.gold, borderRadius: "50%", flexShrink: 0 }} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ SECTION 3 — INDUSTRIES WE COVER ══ */}
      <Section id="industries">
        <Label>03 — Industries We Cover</Label>
        <SectionHead>Every sector building the continent.</SectionHead>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: T.line,
            border: `1px solid ${T.line}`,
            marginTop: "3.5rem",
          }}
        >
          {INDUSTRIES.map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="fon-industry-cell"
              style={{
                background: T.ink,
                padding: "2.4rem 1.8rem",
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "default",
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: T.gold, letterSpacing: "0.16em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: FONT_SERIF, fontSize: "1.35rem", fontWeight: 400, color: T.white }}>
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ SECTION 4 — STRATEGIC MEDIA PARTNERSHIPS ══ */}
      <Section id="partnerships" alt>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "4rem", alignItems: "start" }} className="fon-two-col">
          <div>
            <Label>04 — Strategic Media Partnerships</Label>
            <SectionHead>Not advertising. Infrastructure for understanding.</SectionHead>
            <p style={leadP}>
              FON collaborates with the institutions that build industry&mdash;not to sell space, but
              to educate markets, promote the sector, transfer knowledge and open doors to business
              development. Every partnership is editorial-first and outcome-driven.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
              {["Education", "Industry promotion", "Knowledge transfer", "Business development"].map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    color: T.goldLight,
                    border: `1px solid ${T.line}`,
                    padding: "0.6rem 1rem",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gap: "1px", background: T.line, border: `1px solid ${T.line}` }}>
            {PARTNER_TYPES.map((p, i) => (
              <motion.div
                key={p}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                style={{
                  background: T.inkMid,
                  padding: "1.3rem 1.6rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontFamily: FONT_SANS, fontSize: "1rem", color: T.white }}>{p}</span>
                <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: T.muted }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ SECTION 5 — FEATURED PRODUCTIONS ══ */}
      <Section id="productions">
        <Label>05 — Featured Productions</Label>
        <SectionHead>The FON catalogue.</SectionHead>
        <p style={{ ...leadP, marginBottom: "3.5rem" }}>
          A growing slate of documentary series, features and intelligence programming. Titles below
          are in development and production.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {FEATURED.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i % 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="fon-feature-card"
              style={{
                position: "relative",
                border: `1px solid ${T.line}`,
                background: T.panel,
                overflow: "hidden",
                minHeight: 380,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Poster slot — drop /images/media/<slug>.jpg; gradient stands in */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(155deg, rgba(201,168,76,0.14), rgba(11,12,12,0) 45%), linear-gradient(0deg, #0B0C0C 8%, rgba(11,12,12,0.2) 55%, #1a1c1d 100%)",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(/images/media/${slug(f.title)}.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.5,
                }}
              />
              <div style={{ position: "relative", padding: "2rem" }}>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.66rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: T.goldLight,
                  }}
                >
                  {f.category}
                </span>
                <h3
                  style={{
                    fontFamily: FONT_SERIF,
                    fontWeight: 400,
                    fontSize: "1.7rem",
                    color: T.white,
                    margin: "0.7rem 0 0.8rem",
                    lineHeight: 1.05,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: T.offwhite, marginBottom: "1.4rem" }}>
                  {f.body}
                </p>
                <button type="button" style={watchBtn}>
                  <span style={{ display: "inline-flex", width: 0, height: 0, borderLeft: `7px solid ${T.ink}`, borderTop: "5px solid transparent", borderBottom: "5px solid transparent" }} />
                  Watch Trailer
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ══ SECTION 6 — MEDIA SUPPORTS EVERY DIVISION ══ */}
      <Section id="ecosystem" alt>
        <Label>06 — Media Supports Every Division</Label>
        <SectionHead>The connective layer beneath the group.</SectionHead>
        <p style={{ ...leadP, marginBottom: "4rem" }}>
          Media &amp; Industry Intelligence is not a fifth silo. It runs underneath Mining, Energy,
          Agro and Technologies&mdash;strengthening each through storytelling, education and strategic
          communications.
        </p>

        <DivisionDiagram />
      </Section>

      {/* ══ SECTION 7 — BECOME A STRATEGIC MEDIA PARTNER ══ */}
      <Section id="partner">
        <div
          style={{
            border: `1px solid ${T.line}`,
            background:
              "radial-gradient(120% 140% at 85% 0%, rgba(201,168,76,0.12), transparent 55%), linear-gradient(180deg, #111314, #0B0C0C)",
            padding: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          <Label>07 — Become a Strategic Media Partner</Label>
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "1.8rem 0 1.5rem",
              maxWidth: 760,
            }}
          >
            Put your projects, people and technology in the frame.
          </h2>
          <p style={{ ...leadP, marginBottom: "2.5rem" }}>
            We work with the organisations shaping African industry to produce content that educates
            markets and advances development. If that&rsquo;s you, let&rsquo;s talk.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "3rem" }}>
            {PARTNER_TYPES.map((p) => (
              <span
                key={p}
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "0.85rem",
                  color: T.offwhite,
                  border: `1px solid ${T.line}`,
                  padding: "0.55rem 1rem",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <a href="/contact?interest=media-partnership" style={btnPrimary}>
            Discuss a Partnership
          </a>
        </div>

        {/* Future-ready roadmap — placeholder components for expansion */}
        <div style={{ marginTop: "5rem" }}>
          <Label>On the Roadmap</Label>
          <p style={{ ...leadP, marginBottom: "2.5rem", maxWidth: 620 }}>
            The division is architected to expand. These capabilities are scaffolded and coming
            online.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {ROADMAP.map((r) => (
              <span
                key={r}
                data-placeholder="media-roadmap"
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  color: T.muted,
                  border: `1px dashed ${T.line}`,
                  padding: "0.6rem 1rem",
                }}
              >
                {r}
                <span style={{ color: T.gold, marginLeft: 8, opacity: 0.7 }}>soon</span>
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Hover + responsive styles scoped to this page */}
      <style>{`
        .fon-industry-cell { transition: background 0.4s ease, transform 0.4s ease; }
        .fon-industry-cell:hover { background: ${T.panelHi}; transform: translateY(-4px); }
        .fon-industry-cell:hover span:last-child { color: ${T.goldLight}; }
        .fon-feature-card { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.5s; }
        .fon-feature-card:hover { transform: translateY(-6px); border-color: ${T.gold}; }
        @media (max-width: 860px) { .fon-two-col { grid-template-columns: 1fr !important; } }
        @media (prefers-reduced-motion: reduce) {
          .fon-industry-cell, .fon-feature-card { transition: none !important; }
        }
      `}</style>
    </main>
  );
}

/* ─── LAYOUT HELPERS ───────────────────────── */

function Section({
  id,
  children,
  alt,
}: {
  id?: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      style={{
        background: alt ? T.inkMid : T.ink,
        borderTop: `1px solid ${T.lineSoft}`,
        padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      style={{
        fontFamily: FONT_SERIF,
        fontWeight: 300,
        fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: T.white,
        margin: "1.6rem 0 1.4rem",
        maxWidth: 900,
      }}
    >
      {children}
    </motion.h2>
  );
}

/* Media-as-substrate diagram: group at top, four divisions,
   Media as the full-width connective layer beneath. */
function DivisionDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.4rem" }}>
      {/* Group node */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        style={{
          fontFamily: FONT_SERIF,
          fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)",
          color: T.white,
          border: `1px solid ${T.gold}`,
          padding: "1rem 2rem",
          textAlign: "center",
          background: T.ink,
        }}
      >
        FON Industrial Group
      </motion.div>

      <div aria-hidden style={{ width: 1, height: 32, background: T.line }} />

      {/* Divisions row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${DIVISIONS.length}, 1fr)`,
          gap: "1px",
          background: T.line,
          border: `1px solid ${T.line}`,
          width: "100%",
        }}
        className="fon-div-row"
      >
        {DIVISIONS.map((d, i) => (
          <motion.div
            key={d}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              background: T.inkMid,
              padding: "1.6rem 1rem",
              textAlign: "center",
              fontFamily: FONT_SANS,
              fontSize: "0.95rem",
              color: T.white,
            }}
          >
            {d}
          </motion.div>
        ))}
      </div>

      {/* Connective lines */}
      <div
        aria-hidden
        style={{
          width: "100%",
          height: 34,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: "12.5%", right: "12.5%", top: 0, height: 1, background: T.line }} />
        {[12.5, 37.5, 62.5, 87.5].map((x) => (
          <div key={x} style={{ position: "absolute", left: `${x}%`, top: 0, width: 1, height: 34, background: T.line }} />
        ))}
        <div style={{ position: "absolute", left: "50%", top: 17, width: 1, height: 17, background: T.gold }} />
      </div>

      {/* Media substrate */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        style={{
          width: "100%",
          border: `1px solid ${T.gold}`,
          background:
            "radial-gradient(120% 200% at 50% 0%, rgba(201,168,76,0.14), transparent 60%), " + T.ink,
          padding: "1.6rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: FONT_MONO, fontSize: "0.68rem", letterSpacing: "0.2em", color: T.gold, marginBottom: "0.5rem" }}>
          THE CONNECTIVE LAYER
        </div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: "clamp(1.2rem, 3vw, 1.9rem)", color: T.white }}>
          Media &amp; Industry Intelligence
        </div>
      </motion.div>

      <style>{`@media (max-width: 620px){ .fon-div-row{ grid-template-columns: 1fr 1fr !important; } }`}</style>
    </div>
  );
}

/* ─── UTIL ─────────────────────────────────── */

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/* ─── STYLE OBJECTS ────────────────────────── */

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  fontFamily: FONT_MONO,
  fontSize: "0.78rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: T.ink,
  background: T.gold,
  padding: "1rem 1.8rem",
  textDecoration: "none",
  border: `1px solid ${T.gold}`,
  transition: "background 0.3s, transform 0.3s",
};

const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  fontFamily: FONT_MONO,
  fontSize: "0.78rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: T.white,
  background: "transparent",
  padding: "1rem 1.8rem",
  textDecoration: "none",
  border: `1px solid ${T.line}`,
  transition: "border-color 0.3s",
};

const watchBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  fontFamily: FONT_MONO,
  fontSize: "0.72rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: T.ink,
  background: T.goldLight,
  padding: "0.7rem 1.2rem",
  border: "none",
  cursor: "pointer",
};

const leadP: React.CSSProperties = {
  fontFamily: FONT_SANS,
  fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
  lineHeight: 1.65,
  color: T.offwhite,
  maxWidth: 720,
};
