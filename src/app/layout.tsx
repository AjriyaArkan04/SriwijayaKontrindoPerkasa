import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sriwijayaperkasa.co.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PT Sriwijaya Kontrindo Perkasa (SKP) — Kontraktor, Fabrikasi & Pengolahan Air",
    template: "%s — SKP",
  },
  description:
    "PT Sriwijaya Kontrindo Perkasa (SKP) adalah kontraktor konstruksi, fabrikasi, dan pengolahan air yang berdiri sejak 2014, melayani Astra Otoparts, FamilyMart, Lawson, dan berbagai industri di seluruh Indonesia.",
  keywords: [
    "PT Sriwijaya Kontrindo Perkasa",
    "SKP",
    "kontraktor konstruksi Indonesia",
    "fabrikasi",
    "pengolahan air",
    "renovasi retail",
    "kontraktor Karawang",
  ],
  authors: [{ name: "PT Sriwijaya Kontrindo Perkasa" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "PT Sriwijaya Kontrindo Perkasa",
    title: "PT Sriwijaya Kontrindo Perkasa (SKP) — Kontraktor, Fabrikasi & Pengolahan Air",
    description:
      "Kontraktor konstruksi, fabrikasi, dan pengolahan air berpengalaman sejak 2014, melayani Astra Otoparts, FamilyMart, Lawson, dan industri di seluruh Indonesia.",
    images: [
      {
        url: "/images/og/og-image.webp",
        width: 1200,
        height: 630,
        alt: "PT Sriwijaya Kontrindo Perkasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sriwijaya Kontrindo Perkasa (SKP)",
    description:
      "Kontraktor konstruksi, fabrikasi, dan pengolahan air berpengalaman sejak 2014.",
    images: ["/images/og/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
