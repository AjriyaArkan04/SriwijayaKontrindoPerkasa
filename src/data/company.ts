// All copy in this file is sourced directly from the PT Sriwijaya Kontrindo
// Perkasa "Company Profile 2025" PDF. Do not add facts, figures, or claims
// that are not present in that document.

export const company = {
  legalName: "PT Sriwijaya Kontrindo Perkasa",
  shortName: "SKP",
  tagline: "Kontraktor, Fabrikasi & Pengolahan Air",
  establishedYear: 2014,
  website: "sriwijayaperkasa.co.id",
  email: "info@sriwijayaperkasa.co.id",
  phone: "+62 812-1361-2974",
  phoneHref: "+6281213612974",
  whatsappHref: "https://wa.me/6281213612974",
  instagramHref: "https://www.instagram.com/p/DaCtX83xmne/?stkn=NTVpZmQzMW92Njhu",
  tiktokHref: "https://vt.tiktok.com/ZSqaxSaEF/",
  instagramHandle: "@pt.skpinfo_",
  tiktokHandle: "PT SRIWIJAYA KONTRINDO PERKASA",
  address: "Perumahan Karaba Indah Blok KK No. 01, Karawang, Jawa Barat",

  businessAreas: [
    {
      code: "01",
      label: "Kontraktor",
      description: "Jasa pembangunan dan renovasi konstruksi untuk kebutuhan retail, pabrik, dan fasilitas operasional.",
    },
    {
      code: "02",
      label: "Fabrikasi",
      description: "Workshop khusus untuk kebutuhan interior dan fabrikasi, dari rak penyimpanan hingga struktur logam.",
    },
    {
      code: "03",
      label: "Pengolahan Air",
      description: "Solusi water treatment yang mendukung kelancaran operasional industri pelanggan.",
    },
  ],

  about: {
    eyebrow: "Tentang SKP",
    paragraphs: [
      "PT Sriwijaya Kontrindo Perkasa (SKP) adalah perseroan terbatas yang berdiri sejak tahun 2014 dan bergerak di bidang jasa kontraktor, fabrikasi, serta pengolahan air. SKP telah melayani berbagai pelaku usaha di seluruh Indonesia, seperti Astra Otoparts, FamilyMart, Lawson, dan lainnya.",
      "Sejalan dengan perkembangan industri Indonesia yang penuh dengan dinamika dan inovasi, SKP berkomitmen untuk memberikan jasa pembangunan konstruksi yang berkualitas tinggi, modern, dan selalu memberikan solusi kebutuhan industri yang tepat untuk mendukung kelancaran kegiatan usaha Anda.",
    ],
  },

  vision:
    "Responsif & Solutif dalam memberikan nilai tambah kepada pelanggan melalui produk & layanan berkualitas.",

  mission: [
    "Meningkatkan kesejahteraan & mengembangkan kompetensi karyawan di perusahaan untuk menjawab kebutuhan pelanggan.",
    "Memberikan pelayanan dengan sikap profesional yang memenuhi standar K3 (Kesehatan, Keselamatan Kerja & Lingkungan).",
  ],

  keyFactors: [
    {
      index: "01",
      title: "Consistent",
      description: "Menjaga standar kualitas kerja di setiap proyek, dari perencanaan hingga serah terima.",
    },
    {
      index: "02",
      title: "Communication",
      description: "Koordinasi yang jelas dengan pelanggan sepanjang proses pengerjaan proyek.",
    },
    {
      index: "03",
      title: "Continuous Improvement",
      description: "Terus mengembangkan cara kerja untuk menjawab kebutuhan industri yang terus berkembang.",
    },
    {
      index: "04",
      title: "Confident",
      description: "Menangani proyek dengan keyakinan yang dibangun dari pengalaman lapangan yang nyata.",
    },
    {
      index: "05",
      title: "Commitment",
      description: "Berkomitmen menyelesaikan setiap pekerjaan sesuai kesepakatan dengan pelanggan.",
    },
  ],

  workshop: {
    eyebrow: "Workshop",
    title: "Workshop for Interior & Fabrication",
    description:
      "PT Sriwijaya Kontrindo Perkasa memiliki workshop khusus untuk memenuhi kebutuhan konsumen di bidang interior dan fabrikasi.",
  },

  office: {
    eyebrow: "Kantor Kami",
    title: "Our Office",
    rooms: [
      { name: "Ruang Kantor Staff", image: "/images/office/staff-room.png" },
      { name: "Ruang Meeting Internal", image: "/images/office/meeting-room.png" },
      { name: "Lobby Kantor", image: "/images/office/lobby.png" },
    ],
  },

  certification: {
    eyebrow: "Sertifikasi",
    title: "Bersertifikat ISO 9001:2015",
    narrative:
      "Sistem manajemen mutu PT Sriwijaya Kontrindo Perkasa telah dinilai dan dinyatakan sesuai dengan standar internasional ISO 9001:2015, mencakup lingkup jasa pembangunan dan renovasi konstruksi (Provision of Building Construction and Renovation Works). Sertifikasi ini diterbitkan oleh EQAIMS sebagai bentuk pengakuan atas konsistensi mutu kerja SKP di setiap proyek.",
    image: "/images/certification/iso-9001-2015.jpg",
    facts: [
      { label: "Standar", value: "ISO 9001:2015" },
      { label: "Cakupan Sertifikasi", value: "Provision of Building Construction and Renovation Works" },
      { label: "Nomor Sertifikat", value: "JQS-26-0730" },
      { label: "Tanggal Terbit", value: "3 September 2026" },
      { label: "Masa Berlaku", value: "3 September 2026 – 2 September 2029" },
      { label: "Diterbitkan Oleh", value: "EQA IMS" },
    ],
  },
} as const;