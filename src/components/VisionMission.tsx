import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

export function VisionMission() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="03" title="Visi & Misi" dark />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="font-mono text-base uppercase tracking-[0.2em] text-brick">Visi</span>
              <p className="mt-5 font-serif text-2xl italic font-400 leading-snug text-white/95 md:text-[2rem]">
                &ldquo;{company.vision}&rdquo;
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <span className="font-mono text-base uppercase tracking-[0.2em] text-brick">Misi</span>
            <ol className="mt-5 space-y-6">
              {company.mission.map((m, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <li className="flex gap-5 border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                    <span className="font-display text-sm font-700 text-white/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-[15px] leading-relaxed text-white/80">{m}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
