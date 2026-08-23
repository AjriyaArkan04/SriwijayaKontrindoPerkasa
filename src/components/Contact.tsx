import { Mail, MapPin, Phone, Globe, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { company } from "@/data/company";

const items = [
  {
    icon: MapPin,
    label: "Alamat",
    value: company.address,
    href: `https://www.google.com/maps/search/${encodeURIComponent(company.address)}`,
  },
  { icon: Phone, label: "Telepon", value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: Globe, label: "Website", value: company.website, href: `https://${company.website}` },
];

export function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 text-white md:py-28 scroll-mt-16 md:scroll-mt-20">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="07" title="Kontak" dark />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-800 leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                Mari diskusikan
                <br />
                proyek Anda.
              </h2>
              <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-white/65">
                Hubungi tim SKP untuk kebutuhan konstruksi, renovasi, fabrikasi,
                atau pengolahan air pada fasilitas retail maupun pabrik Anda.
              </p>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-2 border border-brick bg-brick px-7 py-4 font-body text-sm font-600 uppercase tracking-[0.06em] text-white transition-colors hover:bg-transparent"
              >
                Hubungi via WhatsApp
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="border-t border-white/15">
              {items.map((item, i) => (
                <Reveal key={item.label} delay={0.06 * i}>
                  <a
                    href={item.href}
                    target={item.label === "Alamat" || item.label === "Website" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-white/15 py-6"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon size={18} className="shrink-0 text-brick" strokeWidth={1.75} />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                          {item.label}
                        </div>
                        <div className="mt-1 font-body text-[15px] font-500 text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
