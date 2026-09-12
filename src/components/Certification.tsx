import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

export function Certification() {
  const { certification } = company;

  return (
    <section id="certification" className="bg-white py-20 md:py-28 scroll-mt-16 md:scroll-mt-20">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="02" title={certification.eyebrow} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-800 leading-[1.08] tracking-tight text-navy md:text-4xl">
                {certification.title}
              </h2>
              <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-steel">
                {certification.narrative}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-2">
                {certification.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-light">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-body text-sm font-500 leading-snug text-navy">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              {/* Certificate scan — portrait document, ratio 5:7.
                  Drop the file at: public/images/certification/iso-9001-2015.jpg */}
              <div className="corner-marks relative aspect-[5/7] w-full max-w-sm mx-auto lg:mx-0 text-navy/40 border border-line bg-paper-dim">
                <Image
                  src={certification.image}
                  alt="Sertifikat ISO 9001:2015 PT Sriwijaya Kontrindo Perkasa"
                  fill
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}