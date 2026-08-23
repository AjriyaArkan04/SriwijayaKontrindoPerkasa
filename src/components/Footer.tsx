import { navLinks } from "@/data/nav";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep py-14 text-white">
      <div className="container-skp">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center border border-white/25 font-display text-sm font-800">
                SKP
              </span>
              <span className="font-display text-[13px] font-700 uppercase leading-tight tracking-[0.02em]">
                PT Sriwijaya Kontrindo
                <br />
                Perkasa
              </span>
            </div>
            <p className="mt-5 max-w-xs font-body text-[13px] leading-relaxed text-white/50">
              Kontraktor, fabrikasi, dan pengolahan air sejak {company.establishedYear}.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              Navigasi
            </span>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              Kontak
            </span>
            <ul className="mt-4 space-y-2.5 font-body text-[13px] text-white/65">
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.website}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} PT Sriwijaya Kontrindo Perkasa. All rights reserved.</span>
          <span>Est. {company.establishedYear} &mdash; Karawang, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
