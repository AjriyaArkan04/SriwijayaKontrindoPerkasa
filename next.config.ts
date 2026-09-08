import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — produces a plain /out folder of HTML/CSS/JS that
  // can be uploaded to any host (including shared hosting on cPanel) with
  // no Node.js server required.
  output: "export",

  // Next.js's built-in image optimization needs a Node.js server to run,
  // which a static export doesn't have. This serves images as-is instead.
  images: {
    unoptimized: true,
  },

  // Apache (what cPanel uses) serves a folder's index.html when the URL
  // ends in a slash. Without this, Next.js exports "/about" as an
  // "about.html" FILE instead of an "about/index.html" FOLDER, and Apache
  // won't find it when someone visits "/about/" — this is one of the two
  // most common causes of a broken-looking static export on cPanel.
  // Only needed if the site is deployed under a subfolder instead of the
  // domain root, e.g. https://sriwijayaperkasa.co.id/preview/ — uncomment
  // and set to match the exact folder name, then rebuild.
  // basePath: "/preview",

  trailingSlash: true,
};

export default nextConfig;