// Background slideshow images for the hero section. Each slide crossfades
// into the next automatically. See IMAGE_GUIDE.md for how these fit into
// the overall image plan, and the note at the bottom of Hero.tsx for how
// to swap a placeholder slide for a real photo.
//
// Recommended: 1920 x 1280 px (landscape, rasio 3:2 kebawah masih aman),
// format .webp, ukuran file idealnya di bawah ~300KB per foto supaya
// slideshow tetap ringan meski ada 10 foto yang di-load.

export type HeroSlide = {
  src: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  { src: "/images/hero/slide-01.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 1" },
  { src: "/images/hero/slide-02.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 2" },
  { src: "/images/hero/slide-03.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 3" },
  { src: "/images/hero/slide-04.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 4" },
  { src: "/images/hero/slide-05.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 5" },
  { src: "/images/hero/slide-06.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 6" },
  { src: "/images/hero/slide-07.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 7" },
  { src: "/images/hero/slide-08.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 8" },
  { src: "/images/hero/slide-09.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 9" },
  { src: "/images/hero/slide-10.webp", alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 10" },
];