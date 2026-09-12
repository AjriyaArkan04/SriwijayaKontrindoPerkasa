// Background slideshow images for the hero section. Each slide crossfades
// into the next automatically. See IMAGE_GUIDE.md for how these fit into
// the overall image plan, and the note at the bottom of Hero.tsx for how
// to swap a placeholder slide for a real photo.
//
// SIZING:
// - Landscape photos (fit: "cover", the default): recommended 1920 x 1080
//   px (16:9) or wider. These fill the entire screen edge-to-edge — the
//   photo gets cropped to whatever the viewport's aspect ratio is.
// - Portrait/vertical photos (fit: "contain"): the full photo is shown
//   without cropping. Empty space on the left and right follows the
//   section's background color.
//
// Format: .webp direkomendasikan (ukuran file lebih kecil), tapi .jpg
// juga tetap jalan normal kalau itu yang kamu punya.

export type HeroSlide = {
  src: string;
  alt: string;
  /** "cover" (default) fills the screen and crops to fit.
   *  "contain" shows the full photo uncropped.
   */
  fit?: "cover" | "contain";
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/slide-01.png",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 1",
  },
  {
    src: "/images/hero/slide-02.jpg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 2",
    fit: "contain",
  },
  {
    src: "/images/hero/slide-03.jpeg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 3",
  },
  {
    src: "/images/hero/slide-04.jpeg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 4",
  },
  {
    src: "/images/hero/slide-05.jpeg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 5",
  },
  {
    src: "/images/hero/slide-06.jpeg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 6",
  },
  {
    src: "/images/hero/slide-07.jpg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 7",
  },
  {
    src: "/images/hero/slide-08.png",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 8",
  },
  {
    src: "/images/hero/slide-09.jpg",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 9",
  },
  {
    src: "/images/hero/slide-10.png",
    alt: "Proyek konstruksi PT Sriwijaya Kontrindo Perkasa — foto 10",
  },
];