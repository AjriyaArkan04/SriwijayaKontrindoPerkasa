// Project data sourced directly from the PT Sriwijaya Kontrindo Perkasa
// Company Profile 2025 PDF. Image paths point to /public/images — see
// IMAGE_GUIDE.md for exactly what photograph belongs at each path.

export type RetailProject = {
  name: string;
  location?: string;
};

export type RetailClient = {
  slug: "astra-otoparts" | "familymart" | "lawson";
  client: string;
  approxCount: number;
  regionNote: string;
  summary: string;
  heroImage: string;
  logoLabel: string;
  accent: "navy" | "maroon";
  projects: RetailProject[];
};

export const retailClients: RetailClient[] = [
  {
    slug: "astra-otoparts",
    client: "Astra Otoparts",
    approxCount: 28,
    regionNote: "Jawa Barat, Sumatera & Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan -+ 28 renovasi dan pembangunan bengkel Astra Oto Parts yang berada di wilayah Jawa Barat, Sumatera & Jabodetabek.",
    heroImage: "/images/retail/astra-otoparts/hero.webp",
    logoLabel: "AOP",
    accent: "navy",
    projects: [
      { name: "Astra Motor Quick Bosih", location: "Cibitung" },
      { name: "Astra Motor Quick Semplak", location: "Bogor" },
      { name: "Astra Motor Quick Teratai Putih", location: "Jakarta" },
      { name: "AOP Ahmadyani", location: "Bandung" },
      { name: "AOP Antapani", location: "Bandung" },
      { name: "AOP Cianjur" },
      { name: "AOP Citra Garden", location: "Cengkareng" },
      { name: "AOP Dewi Sartika", location: "Jakarta Timur" },
      { name: "AOP Garuda", location: "Jakarta Pusat" },
      { name: "AOP Head Office", location: "Jakarta Utara" },
      { name: "AOP HYBRIDA", location: "Jakarta" },
      { name: "AOP Jatiwaringin" },
      { name: "AOP Kelapa Gading", location: "Jakarta Utara" },
      { name: "AOP Pulo Gebang", location: "Jakarta Timur" },
      { name: "AOP Purwakarta" },
      { name: "AOP Rawalumbu", location: "Bekasi" },
      { name: "AOP RDC", location: "Serang" },
      { name: "AOSE Lampung" },
    ],
  },
  {
    slug: "familymart",
    client: "FamilyMart",
    approxCount: 18,
    regionNote: "Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan -+ 18 toko FamilyMart yang berada di wilayah Jabodetabek.",
    heroImage: "/images/retail/familymart/hero.webp",
    logoLabel: "FM",
    accent: "maroon",
    projects: [
      { name: "Family Mart Tomang" },
      { name: "Family Mart Muara Karang" },
      { name: "Family Mart Apartement Kelapa Gading" },
      { name: "Family Mart Jl. R.A Kartini", location: "Bekasi" },
      { name: "Family Mart Kalimalang Raya" },
      { name: "Family Mart Cut Mutia", location: "Bekasi" },
      { name: "Family Mart Pekayon", location: "Bekasi" },
      { name: "Family Mart Hankam", location: "Jakarta Timur" },
      { name: "Family Mart PT. Daikin Deltamas" },
      { name: "Family Mart PT. Daihatsu Plant 2", location: "Karawang" },
      { name: "Family Mart Bidakara 2" },
      { name: "Family Mart Elang Laut", location: "PIK 1" },
      { name: "Family Mart MT Hub", location: "Cawang" },
      { name: "Family Mart Cipayung Raya", location: "Jakarta Timur" },
      { name: "Family Mart Smesco", location: "Gedung Kementrian UMKM" },
      { name: "Family Mart Pondok Indah Golf" },
      { name: "Family Mart Rest Area 39" },
      { name: "Family Mart PT. Daihatsu Plant 4", location: "Sunter" },
    ],
  },
  {
    slug: "lawson",
    client: "Lawson Station",
    approxCount: 12,
    regionNote: "Jawa Barat & Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan -+ 12 toko Lawson Station yang berada di wilayah Jawa Barat & Jabodetabek.",
    heroImage: "/images/retail/lawson/hero.webp",
    logoLabel: "LAWSON",
    accent: "navy",
    projects: [
      { name: "LAWSON Batununggal", location: "Bandung" },
      { name: "LAWSON Candrabaga" },
      { name: "LAWSON Cililitan", location: "Jakarta Selatan" },
      { name: "LAWSON Ciomas", location: "Bogor" },
      { name: "LAWSON Dago", location: "Bandung" },
      { name: "LAWSON Ibrahim Ajie" },
      { name: "LAWSON Limus Nunggal" },
      { name: "LAWSON Ragunan" },
      { name: "LAWSON Setrasari", location: "Bandung" },
      { name: "LAWSON Setiabudhi", location: "Bandung" },
      { name: "LAWSON Surya Cipta" },
      { name: "LAWSON Ir. Juanda", location: "Bekasi" },
    ],
  },
];

export type FactoryProject = {
  slug: string;
  company: string;
  note?: string;
  scope: string[];
  image: string;
};

export const factoryProjects: FactoryProject[] = [
  {
    slug: "astra-otoparts",
    company: "PT Astra Otoparts Indonesia",
    scope: [
      "Renovasi Cat Dinding (Lobby, Ruang Meeting, Pagar & Loading Dock)",
      "Renovasi Logo AOP",
      "Epoxy Lantai",
    ],
    image: "/images/factory/astra-otoparts/hero.webp",
  },
  {
    slug: "molten-aluminum",
    company: "PT Molten Aluminum Producer Indonesia",
    note: "Renovasi berjalan selama -+ 1 tahun",
    scope: ["Renovasi Atap", "Renovasi Kantin", "Renovasi Canopy", "Renovasi Claim Pipa"],
    image: "/images/factory/molten-aluminum/hero.webp",
  },
  {
    slug: "central-motor-wheel",
    company: "PT Central Motor Wheel Indonesia",
    scope: ["Pembangunan Gudang", "Maintenance Mesin Operasional"],
    image: "/images/factory/central-motor-wheel/hero.webp",
  },
  {
    slug: "sharp",
    company: "PT Sharp Mall Of Indonesia",
    scope: ["Renovasi Marketing Gallery"],
    image: "/images/factory/sharp/hero.webp",
  },
  {
    slug: "moratelindo",
    company: "PT Moratelindo",
    scope: ["Maintenance Bangunan", "Maintenance Kelistrikan", "Beberapa Outlet Moratelindo di Indonesia"],
    image: "/images/factory/moratelindo/hero.webp",
  },
  {
    slug: "united-tractor",
    company: "PT United Tractor Pandu Engineering",
    scope: ["Pengecatan Gedung Pabrik", "Renovasi Ruang Office"],
    image: "/images/factory/united-tractor/hero.webp",
  },
];
