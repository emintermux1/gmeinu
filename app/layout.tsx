import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamestopinu.fun"),
  title: "GameStop Inu — $GMEINU",
  description:
    "Own the Inu. Earn $GME. GameStop Inu, backed by GameStop. Paired with $GME. 100% of fees go to holders as $GME rewards.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "GameStop Inu — $GMEINU",
    description: "Own the Inu. Earn $GME. Paired with $GME. 100% of fees to holders.",
    images: ["/art/banner.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameStop Inu — $GMEINU",
    description: "Own the Inu. Earn $GME.",
    images: ["/art/banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#E60012",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
