"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import type { RetailClient } from "@/data/projects";

type ProjectModalProps = {
  client: RetailClient | null;
  onClose: () => void;
};

export function ProjectModal({ client, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!client) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [client, onClose]);

  return (
    <AnimatePresence>
      {client && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-deep/80 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Detail proyek ${client.client}`}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-line bg-white sm:max-h-[85vh]"
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/30 bg-navy/70 text-white backdrop-blur-sm"
            >
              <X size={18} />
            </button>

            <ImagePlaceholder
              src={client.heroImage}
              alt={`Foto proyek ${client.client}`}
              aspect="16/9"
              label="PROJECT IMAGE"
              dark
            />

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brick">
                <MapPin size={13} />
                {client.regionNote}
              </div>
              <h3 className="mt-3 font-display text-2xl font-800 text-navy md:text-3xl">
                {client.client}
              </h3>
              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-steel">
                {client.summary}
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-light">
                  Daftar Proyek ({client.projects.length})
                </span>
                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {client.projects.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2 font-body text-[13px] text-navy"
                    >
                      <span className="font-500">{p.name}</span>
                      {p.location && (
                        <span className="shrink-0 font-mono text-[11px] text-steel-light">
                          {p.location}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
