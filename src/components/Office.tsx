import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

export function Office() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="06" title={company.office.title} />
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-lg font-display text-2xl font-800 leading-tight tracking-tight text-navy md:text-3xl">
            Lingkungan kerja yang mendukung setiap proyek.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {company.office.rooms.map((room, i) => (
            <Reveal key={room.name} delay={0.08 * i}>
              <div className="corner-marks text-navy/40">
                <ImagePlaceholder src={room.image} alt={room.name} aspect="3/4" />
              </div>
              <h3 className="mt-4 font-display text-base font-700 text-navy">{room.name}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
