import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

const workshopImages = [
  { src: "/images/workshop/fabrication-01.jpg", alt: "Proses fabrikasi rak interior di workshop SKP" },
  { src: "/images/workshop/fabrication-02.jpg", alt: "Struktur logam hasil fabrikasi SKP" },
  { src: "/images/workshop/fabrication-03.jpg", alt: "Detail material dan proses kerja workshop SKP" },
];

export function Workshop() {
  return (
    <section id="workshop" className="bg-navy-deep py-20 text-white md:py-28 scroll-mt-16 md:scroll-mt-20">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="06" title={company.workshop.title} dark />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-800 leading-[1.08] tracking-tight text-white md:text-4xl">
                Interior &amp;
                <br />
                <span className="font-serif italic font-500 text-brick">Fabrikasi</span>
              </h2>
              <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-white/65">
                {company.workshop.description}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="corner-marks relative col-span-2 aspect-[16/9] text-white/25">
                <Image
                  src={workshopImages[0].src}
                  alt={workshopImages[0].alt}
                  fill
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.08} className="corner-marks relative aspect-square text-white/25">
                <Image
                  src={workshopImages[1].src}
                  alt={workshopImages[1].alt}
                  fill
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.14} className="corner-marks relative aspect-square text-white/25">
                <Image
                  src={workshopImages[2].src}
                  alt={workshopImages[2].alt}
                  fill
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}