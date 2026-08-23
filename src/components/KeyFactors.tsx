import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

export function KeyFactors() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="03" title="Key Factors" />
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-display text-2xl font-800 leading-tight tracking-tight text-navy md:text-3xl">
            Lima prinsip yang menjaga setiap proyek tetap konsisten.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-5">
          {company.keyFactors.map((factor, i) => (
            <Reveal key={factor.index} delay={0.05 * i} className="h-full">
              <div className="group relative h-full border-b border-r border-line p-6 transition-colors duration-300 hover:bg-navy md:p-7">
                <span className="font-display text-3xl font-800 text-line-dark/25 transition-colors duration-300 group-hover:text-brick md:text-4xl">
                  {factor.index}
                </span>
                <h3 className="mt-5 font-display text-lg font-700 uppercase tracking-tight text-navy transition-colors duration-300 group-hover:text-white">
                  {factor.title}
                </h3>
                <p className="mt-3 font-body text-[13px] leading-relaxed text-steel transition-colors duration-300 group-hover:text-white/70">
                  {factor.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
