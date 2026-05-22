'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { primaryNav } from '@/lib/content/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled && 'blur-bg bg-black/60 border-b hairline-bone'
      )}
    >
      <div className="container-x flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border hairline-bone flex items-center justify-center relative">
            <span className="serif text-[18px] accent-text font-medium">F</span>
            <span
              className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="serif text-[15px] tracking-wide">Father of Nations</span>
            <span className="mono text-[9px] tracking-[0.2em] mt-0.5" style={{ color: 'var(--accent)' }}>
              FON · INDUSTRIAL GROUP
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'mono text-[11px] tracking-[0.15em] uppercase underline-grow transition-colors',
                isActive(item.href) ? 'text-bone' : 'text-bone-2/70 hover:text-bone'
              )}
              style={isActive(item.href) ? { color: 'var(--accent-bright)' } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/investors"
            className="hidden md:inline-flex btn-ghost !py-2.5 !px-4 !text-[10px]"
          >
            Investor Deck <ArrowUpRight size={12} />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 border hairline-bone flex items-center justify-center"
          >
            {menuOpen ? <Minus size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t hairline-bone"
            style={{ background: 'var(--ink-2)' }}
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="serif text-2xl text-bone hover:opacity-70 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
