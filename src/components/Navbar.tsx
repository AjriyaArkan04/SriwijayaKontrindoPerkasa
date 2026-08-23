"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-navy shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      )}
    >
      <div className="container-skp flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border border-white/25 font-display text-sm font-800 text-white">
            SKP
          </span>
          <span className="hidden font-display text-[13px] font-700 uppercase leading-tight tracking-[0.02em] text-white sm:block">
            Sriwijaya Kontrindo
            <br />
            Perkasa
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-500 uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="border border-brick bg-brick px-5 py-2.5 font-body text-[13px] font-600 uppercase tracking-[0.06em] text-white transition-colors hover:bg-transparent"
          >
            Diskusikan Proyek
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <nav className="container-skp flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 font-body text-sm font-500 uppercase tracking-[0.06em] text-white/85"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 bg-brick px-5 py-3 text-center font-body text-sm font-600 uppercase tracking-[0.06em] text-white"
              >
                Diskusikan Proyek
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="mt-2 text-center font-mono text-xs text-white/50"
              >
                {company.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
