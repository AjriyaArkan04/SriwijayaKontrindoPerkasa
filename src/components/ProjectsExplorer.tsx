"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ProjectModal } from "./ProjectModal";
import { CountStat } from "./CountStat";
import { retailClients, factoryProjects, type RetailClient } from "@/data/projects";
import { cx } from "@/lib/utils";

const tabs = [
  { key: "retail", label: "Retail" },
  { key: "factory", label: "Factory" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function ProjectsExplorer() {
  const [tab, setTab] = useState<TabKey>("retail");
  const [activeClient, setActiveClient] = useState<RetailClient | null>(null);

  return (
    <section id="projects" className="bg-paper py-20 md:py-28 scroll-mt-16 md:scroll-mt-20">
      <div className="container-skp">
        <Reveal>
          <SectionLabel index="04" title="Portofolio Proyek" />
        </Reveal>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.06} className="max-w-xl">
            <h2 className="font-display text-2xl font-800 leading-tight tracking-tight text-navy md:text-3xl">
              Pengalaman nyata, untuk klien nyata, di seluruh Indonesia.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex border border-line bg-white">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={cx(
                    "px-6 py-3 font-body text-[13px] font-600 uppercase tracking-[0.06em] transition-colors",
                    tab === t.key ? "bg-navy text-white" : "text-steel hover:text-navy"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {tab === "retail" ? (
          <div className="mt-12 space-y-6">
            {retailClients.map((client, i) => (
              <Reveal key={client.slug} delay={0.06 * i}>
                <button
                  type="button"
                  onClick={() => setActiveClient(client)}
                  className="group grid w-full grid-cols-1 items-stretch overflow-hidden border border-line bg-white text-left transition-shadow hover:shadow-[0_8px_30px_rgba(14,31,69,0.08)] md:grid-cols-12"
                >
                  <div className="relative md:col-span-5 lg:col-span-4">
                    <div className="corner-marks aspect-[4/3] text-navy/50">
                      <Image
                        src={client.heroImage}
                        alt={`Proyek ${client.client}`}
                        fill
                        className="h-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-6 md:col-span-7 md:flex-row md:items-center md:p-8 lg:col-span-8">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brick">
                        <MapPin size={12} />
                        {client.regionNote}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-800 text-navy md:text-3xl">
                        {client.client}
                      </h3>
                      <p className="mt-2 max-w-md font-body text-[13px] leading-relaxed text-steel">
                        {client.projects.length} lokasi proyek terdaftar &mdash; lihat detail lengkap.
                      </p>
                    </div>

                    <div className="flex items-center gap-8">
                      <div>
                        <div className="font-display text-4xl font-800 tabular-nums text-navy">
                          -+{client.approxCount}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-steel-light">
                          Proyek Selesai
                        </div>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-colors group-hover:border-brick group-hover:bg-brick group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-1 border border-line bg-white sm:grid-cols-2 lg:grid-cols-3">
            {factoryProjects.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i} className="h-full">
                <article className="group flex h-full flex-col bg-white">
                  <div className="corner-marks aspect-[4/3] text-navy/40">
                    <Image
                      src={project.image}
                      alt={`Proyek di ${project.company}`}
                      fill
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-base font-700 leading-snug text-navy">
                      {project.company}
                    </h3>
                    {project.note && (
                      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-brick">
                        {project.note}
                      </span>
                    )}
                    <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                      {project.scope.map((s) => (
                        <li
                          key={s}
                          className="flex gap-2 font-body text-[12.5px] leading-snug text-steel"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brick" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
          <div className="bg-navy p-8 text-center">
            <CountStat value={28} prefix="-+" label="Proyek Astra Otoparts" />
          </div>
          <div className="bg-navy p-8 text-center">
            <CountStat value={18} prefix="-+" label="Toko FamilyMart" />
          </div>
          <div className="bg-navy p-8 text-center">
            <CountStat value={12} prefix="-+" label="Toko Lawson Station" />
          </div>
        </div>
      </div>

      <ProjectModal client={activeClient} onClose={() => setActiveClient(null)} />
    </section>
  );
}
