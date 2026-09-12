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
    approxCount: 37,
    regionNote: "Jawa Barat, Sumatera & Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan 37 renovasi dan pembangunan bengkel Astra Oto Parts yang berada di wilayah Jawa Barat, Sumatera & Jabodetabek.",
    heroImage: "/images/retail/astra-otoparts/hero.webp",
    logoLabel: "AOP",
    accent: "navy",
    projects: [
      { name: "Shop & Drive Citra Garden", location: "Jakarta" },
      { name: "Shop & Drive Garuda", location: "Jakarta" },
      { name: "Shop & Drive TC Hybrida", location: "Jakarta" },
      { name: "Shop & Drive Kelapa Gading" },
      { name: "Shop & Drive Purwakarta" },
      { name: "RDC Serang" },
      { name: "Astra Motoquick Semplak", location: "Bogor" },
      { name: "Shop & Drive Ahmad Yani", location: "Bandung" },
      { name: "Shop & Drive Cianjur" },
      { name: "Shop & Drive Dewi Sartika", location: "Jakarta" },
      { name: "Astra Otoparts HO", location: "Jakarta" },
      { name: "Astra Otoservice Buaran", location: "Jakarta" },
      { name: "Astra Otoservice Margonda", location: "Depok" },
      { name: "Astra Otoservice Cinere", location: "Depok" },
      { name: "Astra Otoservice Jatiwarna", location: "Jakarta" },
      { name: "Shop & Drive Pulogebang", location: "Jakarta" },
      { name: "Shop & Bike Rawalumbu", location: "Bekasi" },
      { name: "Astra Otoservice Lampung" },
      { name: "Astra Motoquick Bosih", location: "Cibitung" },
      { name: "Astra Motoquick Teratai", location: "Jakarta" },
      { name: "Shop & Drive Rancaekek", location: "Bandung" },
      { name: "Shop & Drive Jababeka", location: "Cikarang" },
      { name: "Shop & Drive Telukjambe", location: "Karawang" },
      { name: "Shop & Drive Mayor Oking", location: "Cibinong" },
      { name: "Shop & Drive Ahmad Yani", location: "Garut" },
      { name: "Shop & Drive Ujung Berung", location: "Bandung" },
      { name: "Shop & Drive Tajur", location: "Bogor" },
      { name: "Shop & Bike Bojongsoang", location: "Bandung" },
      { name: "Shop & Bike Pondok Kelapa", location: "Jakarta" },
      { name: "Shop & Drive Antapani", location: "Bandung" },
      { name: "Shop & Drive Batoh", location: "Aceh" },
      { name: "Shop & Drive Batu Aji", location: "Batam" },
      { name: "AOSE Veteran", location: "Palembang" },
      { name: "Shop & Drive Jl. Suprapto", location: "Palembang" },
      { name: "Shop & Drive Jl. H. Burlian", location: "Palembang" },
      { name: "Shop & Drive Jl. Wahid Hasyim", location: "Palembang" },
      { name: "SO Pusat Barat", location: "Puri Mansion" },
    ],
  },
  {
    slug: "familymart",
    client: "FamilyMart",
    approxCount: 25,
    regionNote: "Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan 25 toko FamilyMart yang berada di wilayah Jabodetabek.",
    heroImage: "/images/retail/familymart/hero.webp",
    logoLabel: "FM",
    accent: "maroon",
    projects: [
      { name: "Family Mart Tomang", location: "Jakarta" },
      { name: "Family Mart Muara Karang", location: "Jakarta" },
      { name: "Family Mart Mediterania Kelapa Gading", location: "Jakarta" },
      { name: "Family Mart Jl. R.A. Kartini", location: "Bekasi" },
      { name: "Family Mart Kalimalang Raya", location: "Jakarta" },
      { name: "Family Mart Cut Mutia", location: "Bekasi" },
      { name: "Family Mart Hankam", location: "Bekasi" },
      { name: "Family Mart Pekayon", location: "Bekasi" },
      { name: "Family Mart Daikin Factory Deltamas", location: "Bekasi" },
      { name: "Family Mart Astra Daihatsu Motor", location: "Karawang" },
      { name: "Family Mart Astra Daihatsu Motor Sunter", location: "Jakarta" },
      { name: "Family Mart MT Hub Cawang", location: "Jakarta" },
      { name: "Family Mart Pondok Indah", location: "Jakarta" },
      { name: "Family Mart Rest Area 39A", location: "Tol Jakarta-Cikampek" },
      { name: "Family Mart Cipayung", location: "Jakarta" },
      { name: "Family Mart AKR Tower", location: "Jakarta" },
      { name: "Family Mart Bidakara Building", location: "Jakarta" },
      { name: "Family Mart PIK 1", location: "Jakarta" },
      { name: "Family Mart Smesco Building", location: "Jakarta" },
      { name: "Family Mart Kemayoran", location: "Jakarta" },
      { name: "Family Mart Srengseng", location: "Jakarta" },
      { name: "Family Mart Deli Koja", location: "Jakarta" },
      { name: "Family Mart Pondok Cabe", location: "Tangerang Selatan" },
      { name: "Family Mart Jalan Pahlawan", location: "Bogor" },
      { name: "Family Mart FamiCafe Kemanggisan", location: "Jakarta" },
    ],
  },
  {
    slug: "lawson",
    client: "Lawson Station",
    approxCount: 12,
    regionNote: "Jawa Barat & Jabodetabek",
    summary:
      "PT Sriwijaya Kontrindo Perkasa telah menyelesaikan 12 toko Lawson Station yang berada di wilayah Jawa Barat & Jabodetabek.",
    heroImage: "/images/retail/lawson/hero.webp",
    logoLabel: "LAWSON",
    accent: "navy",
    projects: [
      { name: "Lawson Batununggal", location: "Bandung" },
      { name: "Lawson Candrabaga", location: "Bekasi" },
      { name: "Lawson Cililitan", location: "Jakarta" },
      { name: "Lawson Ciomas", location: "Bogor" },
      { name: "Lawson Dago", location: "Bandung" },
      { name: "Lawson Ibrahim Adjie", location: "Bandung" },
      { name: "Lawson Ir. Juanda", location: "Bandung" },
      { name: "Lawson Limus Nunggal", location: "Bogor" },
      { name: "Lawson Jl. Raya Ragunan", location: "Jakarta" },
      { name: "Lawson Sentra Sari", location: "Bandung" },
      { name: "Lawson Setiabudhi", location: "Bandung" },
      { name: "Lawson Surya Cipta", location: "Karawang" },
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
