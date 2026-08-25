import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep"
    >
      {/* Full-bleed background photograph. Replace the file at this path
          with the final hero photo — see IMAGE_GUIDE.md. */}
      <Image
        src="/images/hero/skp-hero.webp"
        alt="Bangunan dan proyek konstruksi PT Sriwijaya Kontrindo Perkasa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Single flat scrim over the ENTIRE photo, top to bottom — one
          uniform opacity, no second darker panel underneath the text.
          This is what keeps the tone consistent instead of showing a seam
          where a separate "text plate" used to begin. */}
      <div className="absolute inset-0 bg-navy-deep/55" />

      {/* Content sits directly on the uniform scrim. No background panel
          behind it — legibility comes from the scrim + a soft drop-shadow
          on the text itself. */}
      <div className="container-skp relative py-12 pt-24 md:pt-16 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 drop-shadow-[0_1px_6px_rgba(8,16,38,0.8)]">
              <span>Company Profile 2025</span>
              <span className="h-px w-6 bg-white/30" />
              <span>Est. {company.establishedYear}</span>
            </div>

            <h1 className="mt-5 font-display text-[13vw] font-800 uppercase leading-[0.95] tracking-[-0.01em] text-white drop-shadow-[0_2px_16px_rgba(8,16,38,0.85)] sm:text-6xl md:text-7xl lg:text-[5rem]">
              Sriwijaya Kontrindo
              <br />
              <span className="text-brick">Perkasa</span>
            </h1>

            <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-white/80 drop-shadow-[0_1px_8px_rgba(8,16,38,0.8)] md:text-lg">
              Kontraktor, fabrikasi, dan pengolahan air yang mendukung kelancaran
              usaha Anda &mdash; dari toko retail hingga fasilitas pabrik di
              seluruh Indonesia.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border border-white bg-white px-6 py-3.5 font-body text-sm font-600 uppercase tracking-[0.06em] text-navy transition-colors hover:bg-transparent hover:text-white"
              >
                Lihat Proyek Kami
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3.5 font-body text-sm font-600 uppercase tracking-[0.06em] text-white transition-colors hover:border-white"
              >
                Hubungi Kami
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <dl className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Berdiri
                </dt>
                <dd className="mt-1 font-display text-2xl font-700 text-white drop-shadow-[0_1px_6px_rgba(8,16,38,0.8)]">
                  2014
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Bidang Usaha
                </dt>
                <dd className="mt-1 font-display text-2xl font-700 text-white drop-shadow-[0_1px_6px_rgba(8,16,38,0.8)]">
                  3
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Cakupan
                </dt>
                <dd className="mt-1 font-display text-lg font-700 leading-tight text-white drop-shadow-[0_1px_6px_rgba(8,16,38,0.8)]">
                  Indonesia
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Blueprint-style corner registration marks framing the whole hero. */}
      <div className="corner-marks pointer-events-none absolute inset-4 text-white/30 md:inset-8" />
    </section>
  );
}