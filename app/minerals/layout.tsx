// app/minerals/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FON Minerals — Pan-African Mineral Value Chain Development",
  description:
    "FON Minerals is a Pan-African mineral value chain development company building processing industries, industrial infrastructure, and responsible mineral supply chains.",
  openGraph: {
    title: "FON Minerals",
    description: "Building Africa's mineral value chain.",
    url: "https://fon.africa/minerals",
  },
};

export default function MineralsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}