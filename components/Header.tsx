"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DIVISIONS = [
  { label: "Energy", href: "/energy", accent: "#1B6FEB" },
  { label: "Agro", href: "/agro", accent: "#2D6A4F" },
  { label: "Minerals", href: "/minerals", accent: "#B5621E" },
  { label: "Technologies", href: "/technologies", accent: "#00F0FF" },
];

const MORE_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Investors", href: "/investors" },
  { label: "Partners", href: "/partners" },
  { label: "Media", href: "/media" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  activeDivision?: "energy" | "agro" | "minerals" | "technologies" | null;
}

export function Header({ activeDivision = null }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const divisionColors: Record<string, string> = {
    energy: "#1B6FEB",
    agro: "#2D6A4F",
    minerals: "#B5621E",
    technologies: "#00F0FF",
  };

  const accentColor = activeDivision ? divisionColors[activeDivision] : "#C9A84C";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#2C3036" : "transparent"}`,
        transition: "all 0.3s ease",
      }}
    >
      {/* LOGO */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <Image
          src="/images/fon-logo.png"
          alt="FON Industrial Group"
          width={120}
          height={48}
          style={{ objectFit: "contain", height: 44, width: "auto" }}
          priority
        />
      </Link>

      {/* DESKTOP NAV */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {DIVISIONS.map((d) => (
          <Link
            key={d.label}
            href={d.href}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:
                activeDivision === d.label.toLowerCase()
                  ? d.accent
                  : "#C0BBB4",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {d.label}
          </Link>
        ))}

        <div
          style={{ width: 1, height: 20, background: "#2C3036" }}
        />

        {MORE_LINKS.slice(0, 3).map((l) => (
          <Link
            key={l.label}
            href={l.href}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6E6A64",
              textDecoration: "none",
            }}
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/investors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            padding: "0.5rem 1.1rem",
            border: `1px solid ${accentColor}55`,
            color: accentColor,
            textDecoration: "none",
            letterSpacing: "0.08em",
            transition: "all 0.2s",
          }}
        >
          INVESTORS
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #2C3036",
        padding: "4rem clamp(1.5rem, 5vw, 4rem) 2rem",
        background: "#0A0A0A",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(4, auto)",
            gap: "3rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid #1E2124",
          }}
        >
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", marginBottom: "0.75rem" }}>
              <Image
                src="/images/fon-logo.png"
                alt="FON Industrial Group"
                width={160}
                height={64}
                style={{ objectFit: "contain", height: 56, width: "auto" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                color: "#6E6A64",
                maxWidth: 240,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Father of Nations — A Pan-African industrial holding group.
            </p>
          </div>

          {[
            {
              label: "Divisions",
              links: DIVISIONS.map((d) => ({ label: d.label, href: d.href })),
            },
            {
              label: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Partners", href: "/partners" },
                { label: "Media", href: "/media" },
              ],
            },
            {
              label: "Investors",
              links: [
                { label: "Investment Thesis", href: "/investors" },
                { label: "Projects", href: "/projects" },
                { label: "Minerals Pipeline", href: "/minerals#projects" },
                { label: "Contact IR", href: "/contact" },
              ],
            },
            {
              label: "Contact",
              links: [
                { label: "General Enquiries", href: "/contact" },
                { label: "Partnerships", href: "/partners" },
                { label: "Investor Relations", href: "/investors" },
                { label: "Media", href: "/media" },
              ],
            },
          ].map((col) => (
            <div key={col.label}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: "1rem",
                }}
              >
                {col.label}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.82rem",
                      color: "#6E6A64",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#6E6A64",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()} Father of Nations (FON). All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#6E6A64",
              letterSpacing: "0.06em",
            }}
          >
            fon.africa
          </div>
        </div>
      </div>
    </footer>
  );
}
