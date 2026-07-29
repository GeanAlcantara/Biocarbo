import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://biocarbo.com"),
  title: {
    default: "Biocarbo | Soluções em Carboquímica Vegetal",
    template: "%s | Biocarbo"
  },
  description:
    "Tecnologia brasileira para transformar alcatrão vegetal em soluções para agricultura, energia, materiais, química fina e alimentos.",
  keywords: [
    "Biocarbo",
    "alcatrão vegetal",
    "extrato pirolenhoso",
    "Biopirol",
    "Eucatar Fuel",
    "biopiche",
    "carboquímica vegetal",
    "biorrefinaria"
  ],
  authors: [{ name: "Biocarbo" }],
  creator: "Biocarbo",
  publisher: "Biocarbo",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Biocarbo",
    title: "Biocarbo | Da biomassa vegetal a soluções de alto valor",
    description:
      "Conheça as soluções Biocarbo para o campo e para a indústria.",
    images: [
      {
        url: "/images/hero-biorefinaria.webp",
        width: 1821,
        height: 864,
        alt: "Agricultura e biorrefinaria conectadas pela tecnologia vegetal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Biocarbo | Soluções em Carboquímica Vegetal",
    description:
      "Tecnologia vegetal para agricultura, energia, materiais e química fina.",
    images: ["/images/hero-biorefinaria.webp"]
  },
  icons: {
    icon: "/images/brand-mark.svg",
    shortcut: "/images/brand-mark.svg",
    apple: "/images/brand-mark.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#073d2d",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
