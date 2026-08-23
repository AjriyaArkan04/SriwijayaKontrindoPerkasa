# PT Sriwijaya Kontrindo Perkasa — Company Profile Website

Website company profile untuk **PT Sriwijaya Kontrindo Perkasa (SKP)** — kontraktor,
fabrikasi, dan pengolahan air yang berdiri sejak 2014. Dibangun sebagai single-page
site yang siap deploy ke Vercel.

Isi seluruh website ini bersumber dari dokumen **Company Profile 2025 (PDF)** yang
diberikan. Lihat `PROJECT_CONTENT.md` untuk daftar lengkap semua data yang dipakai,
agar mudah kamu cek ulang terhadap PDF aslinya.

---

## 1. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Animasi | Framer Motion (`motion`) |
| Ikon | lucide-react |
| Font | Archivo, Inter, Fraunces — di-*self-host* lewat `@fontsource/*` (tidak fetch ke Google Fonts saat build, jadi build tetap jalan di environment tanpa akses internet ke `fonts.googleapis.com`) |

Tidak ada dependency tambahan yang tidak perlu — semua di atas dipakai langsung di
komponen yang ada.

---

## 2. Struktur Folder

```
skp-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata SEO (title, OG, dsb)
│   │   ├── page.tsx          # Halaman utama — merangkai semua section
│   │   ├── globals.css       # Design tokens (warna, font, spacing utilities)
│   │   ├── sitemap.ts        # /sitemap.xml
│   │   └── robots.ts         # /robots.txt
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── VisionMission.tsx
│   │   ├── KeyFactors.tsx
│   │   ├── ProjectsExplorer.tsx   # Tab Retail/Factory + modal detail proyek
│   │   ├── ProjectModal.tsx
│   │   ├── Workshop.tsx
│   │   ├── Office.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ImagePlaceholder.tsx   # Placeholder foto — lihat IMAGE_GUIDE.md
│   │   ├── Reveal.tsx             # Wrapper fade-up on scroll
│   │   ├── SectionLabel.tsx       # Label "SEC.0X — JUDUL" (signature style)
│   │   └── CountStat.tsx          # Angka statistik dengan count-up
│   ├── data/
│   │   ├── company.ts        # Profil perusahaan, visi-misi, key factors
│   │   ├── projects.ts       # Semua proyek retail & factory
│   │   └── nav.ts            # Menu navigasi
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/                # Lihat IMAGE_GUIDE.md — semua folder sudah dibuat
├── README.md                  # File ini
├── IMAGE_GUIDE.md              # Daftar lengkap foto yang dibutuhkan
└── PROJECT_CONTENT.md          # Verifikasi data terhadap PDF sumber
```

---

## 3. Instalasi & Development

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Perintah lain yang tersedia:

```bash
npm run build   # production build
npm run start   # jalankan hasil build secara lokal
npm run lint    # ESLint
```

---

## 4. Deploy ke Vercel

1. Push folder ini ke repository GitHub/GitLab/Bitbucket.
2. Di [vercel.com](https://vercel.com), klik **Add New → Project**, lalu pilih repo tersebut.
3. Vercel otomatis mendeteksi Next.js — tidak perlu ubah build command atau output
   directory apa pun (default: `next build`).
4. Klik **Deploy**.
5. (Opsional) Tambahkan custom domain `sriwijayaperkasa.co.id` di tab **Domains**
   pada project settings.

Tidak ada environment variable yang dibutuhkan untuk versi ini (belum ada form
yang mengirim data ke backend/API pihak ketiga).

---

## 5. Cara Mengganti Foto Placeholder dengan Foto Asli

Semua placeholder foto memakai komponen `ImagePlaceholder` — mereka menampilkan
label `PROJECT IMAGE` + path file yang seharusnya diisi, jadi kamu tinggal cocokkan
dengan `IMAGE_GUIDE.md`.

Langkah untuk mengganti satu foto, misalnya hero image:

1. Siapkan file foto dengan dimensi yang direkomendasikan di `IMAGE_GUIDE.md`
   (idealnya format `.webp` untuk ukuran file yang kecil).
2. Simpan file ke path yang sesuai, contoh: `public/images/hero/skp-hero.webp`.
3. Buka komponen terkait (untuk hero: `src/components/Hero.tsx`), lalu ganti:

   ```tsx
   import { ImagePlaceholder } from "./ImagePlaceholder";
   // ...
   <ImagePlaceholder
     src="/images/hero/skp-hero.webp"
     alt="Bangunan dan proyek konstruksi PT Sriwijaya Kontrindo Perkasa"
     aspect="3/4"
     dark
     className="h-full"
   />
   ```

   menjadi:

   ```tsx
   import Image from "next/image";
   // ...
   <div className="relative h-full" style={{ aspectRatio: "3/4" }}>
     <Image
       src="/images/hero/skp-hero.webp"
       alt="Bangunan dan proyek konstruksi PT Sriwijaya Kontrindo Perkasa"
       fill
       priority
       className="object-cover"
     />
   </div>
   ```

   Gunakan `priority` hanya untuk foto hero (di atas layar saat halaman pertama
   dibuka). Untuk semua foto lain, biarkan tanpa `priority` — Next.js akan
   otomatis lazy-load foto tersebut.

4. Ulangi untuk setiap placeholder yang ingin diganti. Karena tiap komponen
   section memakai `ImagePlaceholder` dengan pola yang sama, cara di atas
   berlaku untuk semuanya (`About.tsx`, `ProjectsExplorer.tsx`,
   `ProjectModal.tsx`, `Workshop.tsx`, `Office.tsx`).

Kamu juga bisa mengganti path foto tanpa mengubah komponen sama sekali —
cukup edit field `heroImage` / `image` di `src/data/projects.ts` dan
`src/data/company.ts`, lalu simpan file foto ke path baru tersebut.

---

## 6. Cara Menambah Proyek Baru

Semua data proyek retail (Astra Otoparts, FamilyMart, Lawson) dan factory ada di
`src/data/projects.ts` — bukan hardcoded di JSX.

**Menambah satu lokasi baru ke klien retail yang sudah ada** (misalnya menambah
toko FamilyMart baru):

```ts
// src/data/projects.ts — di dalam array `projects` milik client "familymart"
{ name: "Family Mart Nama Lokasi Baru", location: "Kota/Area" },
```

**Menambah klien retail baru** (kategori baru selain Astra Otoparts/FamilyMart/Lawson):

```ts
// src/data/projects.ts — tambahkan object baru ke array `retailClients`
{
  slug: "nama-klien-baru",
  client: "Nama Klien",
  approxCount: 5, // jumlah proyek terverifikasi
  regionNote: "Wilayah cakupan",
  summary: "Deskripsi singkat pengerjaan.",
  heroImage: "/images/retail/nama-klien-baru/hero.webp",
  logoLabel: "XX",
  accent: "navy", // atau "maroon"
  projects: [
    { name: "Nama Proyek 1", location: "Kota" },
  ],
},
```

**Menambah proyek factory baru:**

```ts
// src/data/projects.ts — tambahkan object baru ke array `factoryProjects`
{
  slug: "nama-perusahaan",
  company: "PT Nama Perusahaan",
  scope: ["Pekerjaan 1", "Pekerjaan 2"],
  image: "/images/factory/nama-perusahaan/hero.webp",
},
```

Setelah menambah data, jangan lupa siapkan folder + foto sesuai path yang kamu
tulis di `heroImage` / `image` (lihat `IMAGE_GUIDE.md` untuk pola penamaan folder).

---

## 7. Cara Mengubah Konten Perusahaan (About, Visi-Misi, Key Factors, Kontak)

Semua ada di `src/data/company.ts`:

- `about.paragraphs` — paragraf di section "Tentang SKP"
- `vision` / `mission` — teks visi & misi
- `keyFactors` — array 5 prinsip (Consistent, Communication, dst)
- `businessAreas` — 3 bidang usaha yang tampil di section About
- `address`, `phone`, `email`, `website` — dipakai otomatis di section Kontak
  dan Footer, jadi cukup diubah sekali di sini

---

## 8. Catatan Desain

- **Tanpa gradient, tanpa glassmorphism, tanpa emoji** — sesuai arahan brief.
- Warna diambil dari sampul Company Profile 2025 (navy institusional + aksen
  maroon/brick), lihat token warna di `src/app/globals.css`.
- Motif berulang di seluruh halaman: label `SEC.0X — JUDUL` (gaya nomor lembar
  gambar arsitektur) dan garis siku di sudut foto (`corner-marks`), meniru
  tanda registrasi pada gambar teknik/blueprint — dipakai sebagai identitas
  visual situs ini.
- Semua animasi (`Reveal`, `CountStat`, transisi navbar) menghormati
  `prefers-reduced-motion` — animasi otomatis dinonaktifkan untuk pengguna
  yang mengaktifkan setelan tersebut di sistem operasinya.

---

## 9. QA Checklist Sebelum Publish

- [x] `npm run build` sukses tanpa error
- [x] `npm run lint` sukses tanpa error/warning
- [ ] Foto asli sudah menggantikan seluruh placeholder (lihat `IMAGE_GUIDE.md`)
- [ ] Favicon (`public/favicon.ico`) sudah diganti dengan logo SKP
- [ ] OG image (`public/images/og/og-image.webp`, 1200×630px) sudah disiapkan
- [ ] Cek tampilan di lebar layar 1440 / 1280 / 1024 / 768 / 430 / 390 / 375px
- [ ] Cek navigasi mobile (hamburger menu) berfungsi
- [ ] Cek semua tautan anchor (`#about`, `#projects`, dst) mengarah dengan benar
- [ ] Domain custom sudah terhubung di Vercel (jika ingin pakai `sriwijayaperkasa.co.id`)
