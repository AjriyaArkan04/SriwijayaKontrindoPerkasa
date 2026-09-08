"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { company } from "@/data/company";
import { heroSlides } from "@/data/heroSlides";
import { cx } from "@/lib/utils";
import Image from "next/image";

const SLIDE_DURATION_MS = 5000;
const EDGE_ZONE_PX = 160; // how close the cursor must get to the left/right
                          // edge of the viewport before that arrow appears

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nearEdge, setNearEdge] = useState<"left" | "right" | null>(null);
  const [hasHoverCapability, setHasHoverCapability] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (shouldReduceMotion) return; // no auto-advance for reduced motion
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
  }, [shouldReduceMotion]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoplay]);

  // Detect touch/coarse-pointer devices — there's no cursor to approach an
  // edge with, so the arrows stay visible (at reduced opacity) instead of
  // being permanently hidden and undiscoverable.
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHoverCapability(query.matches);
    const onChange = (e: MediaQueryListEvent) => setHasHoverCapability(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hasHoverCapability) return;
    const handleMove = (e: MouseEvent) => {
      if (e.clientX < EDGE_ZONE_PX) setNearEdge("left");
      else if (e.clientX > window.innerWidth - EDGE_ZONE_PX) setNearEdge("right");
      else setNearEdge(null);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [hasHoverCapability]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
      startAutoplay(); // manual navigation resets the timer, so the slide
                        // doesn't jump again a moment later
    },
    [startAutoplay]
  );

  const goPrev = () => goTo((activeIndex - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => goTo((activeIndex + 1) % heroSlides.length);

  const arrowVisible = (side: "left" | "right") =>
    !hasHoverCapability || nearEdge === side;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep"
    >
      {/* Background slideshow — every slide is mounted and stacked, only
          opacity is animated, so the crossfade never shows a blank frame.
          Swap each <HeroSlidePlaceholder> for a real <Image> once you have
          the photo — see the note below this component. */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === activeIndex ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          aria-hidden={index !== activeIndex}
        >
             <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
        </motion.div>
      ))}

      {/* Single flat scrim over the ENTIRE photo, top to bottom — one
          uniform opacity, no second darker panel underneath the text. */}
      <div className="absolute inset-0 bg-navy-deep/55" />

      {/* Manual navigation arrows — hidden by default, revealed when the
          cursor approaches that edge of the viewport (or always shown at
          low opacity on touch devices, which have no cursor to detect). */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Foto sebelumnya"
        className={cx(
          "group absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-navy-deep/60 text-white backdrop-blur-sm transition-opacity duration-300 md:left-8",
          arrowVisible("left") ? "opacity-100" : "opacity-0",
          "focus-visible:opacity-100"
        )}
      >
        <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Foto berikutnya"
        className={cx(
          "group absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-navy-deep/60 text-white backdrop-blur-sm transition-opacity duration-300 md:right-8",
          arrowVisible("right") ? "opacity-100" : "opacity-0",
          "focus-visible:opacity-100"
        )}
      >
        <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Content sits directly on the uniform scrim. No background panel
          behind it — legibility comes from the scrim + a soft drop-shadow
          on the text itself. */}
      <div className="container-skp relative py-12 pt-24 md:pt-16 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.2em] text-white/50 drop-shadow-[0_1px_6px_rgba(8,16,38,0.8)]">
              <span>Company Profile</span>
              <span className="h-px w-6 bg-white/30" />
              <span>Est. {company.establishedYear}</span>
            </div>

            <h1 className="mt-5 font-display text-[13vw] font-800 uppercase leading-[0.95] tracking-[-0.01em] text-white drop-shadow-[0_2px_16px_rgba(8,16,38,0.85)] sm:text-6xl md:text-7xl lg:text-[5rem]">
              Sriwijaya Kontrindo
              <br />
              <span className="text-white">Perkasa</span>
            </h1>

            <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-white/80 drop-shadow-[0_1px_8px_rgba(8,16,38,0.8)] md:text-lg">
              Kontraktor, fabrikasi, dan pengolahan air yang mendukung kelancaran
              usaha Anda, dari toko retail hingga fasilitas pabrik di
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

      {/* Slide indicator dots — purely decorative/informational, not
          clickable, so they don't need keyboard/focus handling. */}
      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-1.5 sm:flex md:right-10">
        {heroSlides.map((slide, index) => (
          <span
            key={slide.src}
            className={
              index === activeIndex
                ? "h-1.5 w-5 bg-brick transition-all duration-500"
                : "h-1.5 w-1.5 bg-white/35 transition-all duration-500"
            }
          />
        ))}
      </div>

      {/* Blueprint-style corner registration marks framing the whole hero. */}
      <div className="corner-marks pointer-events-none absolute inset-4 text-white/30 md:inset-8" />
    </section>
  );
}

/**
 * Placeholder for one slideshow frame — fills its absolutely-positioned
 * parent instead of holding its own aspect ratio (unlike the shared
 * ImagePlaceholder component, which is built for boxed content, not a
 * full-bleed background).
 *
 * TO REPLACE WITH A REAL PHOTO:
 * Once the file exists at `src` (e.g. public/images/hero/slide-01.webp),
 * delete this component's usage above and swap it for:
 *
 *   <Image
 *     src={slide.src}
 *     alt={slide.alt}
 *     fill
 *     priority={index === 0}
 *     sizes="100vw"
 *     className="object-cover"
 *   />
 *
 * (import Image from "next/image" at the top of this file). Do this one
 * slide at a time — placeholders and real photos can mix freely while
 * you're still collecting the full set of 10 photos.
 */
function HeroSlidePlaceholder({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div role="img" aria-label={alt} className="relative h-full w-full overflow-hidden bg-navy-soft">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          {priority ? "HERO SLIDE — ACTIVE" : "HERO SLIDE"}
        </span>
        <span className="font-mono text-[10px] text-white/25">{src}</span>
      </div>
    </div>
  );
}