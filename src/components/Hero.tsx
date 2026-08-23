import { ArrowDownRight, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-16 md:pt-20">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="container-skp relative grid grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24">
        <div className="lg:col-span-7 lg:pr-6">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
            <span>Company Profile 2025</span>
            <span className="h-px w-6 bg-white/25" />
            <span>Est. {company.establishedYear}</span>
          </div>

          <h1 className="mt-6 font-display text-[13vw] font-800 uppercase leading-[0.95] tracking-[-0.01em] text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            Sriwijaya
            <br />
            Kontrindo
            <br />
            <span className="text-brick">Perkasa</span>
          </h1>

          <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-white/70 md:text-lg">
            Kontraktor, fabrikasi, dan pengolahan air yang mendukung kelancaran
            usaha Anda &mdash; dari toko retail hingga fasilitas pabrik di
            seluruh Indonesia.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-white bg-white px-6 py-3.5 font-body text-sm font-600 uppercase tracking-[0.06em] text-navy transition-colors hover:bg-transparent hover:text-white"
            >
              Lihat Proyek Kami
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 font-body text-sm font-600 uppercase tracking-[0.06em] text-white transition-colors hover:border-white"
            >
              Hubungi Kami
              <ArrowDownRight size={16} />
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Berdiri</dt>
              <dd className="mt-1 font-display text-2xl font-700 text-white">2014</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Bidang Usaha</dt>
              <dd className="mt-1 font-display text-2xl font-700 text-white">3</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Cakupan</dt>
              <dd className="mt-1 font-display text-lg font-700 leading-tight text-white">Indonesia</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="corner-marks h-full text-brick">
            <ImagePlaceholder
              src="/images/hero/skp-hero.webp"
              alt="Bangunan dan proyek konstruksi PT Sriwijaya Kontrindo Perkasa"
              aspect="3/4"
              label="HERO IMAGE"
              dark
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
