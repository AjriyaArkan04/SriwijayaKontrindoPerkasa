import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

export function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28 scroll-mt-16 md:scroll-mt-20">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="01" title="Tentang SKP" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-800 leading-[1.08] tracking-tight text-navy md:text-4xl lg:text-[2.75rem]">
                Kontraktor yang tumbuh bersama
                <span className="font-serif italic font-500 text-brick"> industri Indonesia</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {company.about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <p className="font-body text-[15px] leading-relaxed text-steel md:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.24}>
              <div
                id="capabilities"
                className="mt-10 grid scroll-mt-24 grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3"
              >
                {company.businessAreas.map((area) => (
                  <div key={area.code} className="border-l-2 border-brick pl-4">
                    <span className="font-mono text-xs text-steel-light">{area.code}</span>
                    <h3 className="mt-1 font-display text-base font-700 text-navy">
                      {area.label}
                    </h3>
                    <p className="mt-1.5 font-body text-[13px] leading-relaxed text-steel">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative h-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/about/skp-team-field.jpeg"
                alt="Tim SKP di lokasi proyek"
                fill
                priority
                className="h-full"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
