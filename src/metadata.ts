import type { Metadata } from "next";

export const siteConfig = {
  name: "TornadoallyDev",
  description:
    "Unity Developer and Blender Artist with 5 years of experience, available full time for collaboration or independent production.",
  url: "https://tornadoallydev.com",
  ogImage: "https://tornadoallydev.com/og-image.jpg",
  links: {
    github: "#",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    email: "mailto:hello@tornadoallydev.com",
  },
};

export const keywords = [
  "Unity development",
  "Blender art",
  "C# programming",
  "shader development",
  "hard-surface modeling",
  "texturing",
  "TornadoallyDev",
  "game development",
  "3D art",
  "studio services",
];

export const baseMetadata: Metadata = {
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
    },
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tornadoallydev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: `${siteConfig.name} - Unity Developer & Blender Artist`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "TornadoallyDev creates Unity and Blender-focused work for games, assets, and interactive experiences.",
};

export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: "Services | TornadoallyDev",
  description:
    "Unity development, Blender art, C# programming, shader development, hard-surface modeling, and texturing.",
};

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About | TornadoallyDev",
  description:
    "Meet TornadoallyDev: a Unity Developer and Blender Artist with 5 years of experience.",
};

export const ourWorkMetadata: Metadata = {
  ...baseMetadata,
  title: "Our Work | TornadoallyDev",
  description:
    "Portfolio sections are reserved for client-provided work and will be filled in later.",
};

export const termsOfServiceMetadata: Metadata = {
  ...baseMetadata,
  title: "Terms of Service | TornadoallyDev",
  description:
    "Legal agreement and terms of service for TornadoallyDev.",
  keywords: [
    ...keywords,
    "terms of service",
    "legal agreement",
    "service terms",
    "TornadoallyDev terms",
    "service contract",
  ],
};