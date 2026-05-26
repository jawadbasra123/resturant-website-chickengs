import type { Metadata } from "next";
import { Bebas_Neue, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Chicken G's — Premium Fried Chicken | Halal Bay Area",
  description:
    "Hand-slaughtered halal premium fried chicken in the Bay Area. Bold flavors, real ingredients. Locations in Mountain View, Fremont, and San Francisco. Order now on Uber Eats.",
  keywords: [
    "halal fried chicken",
    "bay area halal food",
    "chicken gs",
    "premium fried chicken",
    "mountain view restaurant",
    "fremont halal",
    "san francisco halal chicken",
  ],
  openGraph: {
    title: "Chicken G's — Premium Fried Chicken",
    description:
      "Hand-slaughtered halal premium fried chicken. Bay Area's finest. Mountain View, Fremont & San Francisco.",
    type: "website",
    locale: "en_US",
    siteName: "Chicken G's",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Chicken G's — Premium Fried Chicken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicken G's — Premium Fried Chicken",
    description:
      "Hand-slaughtered halal premium fried chicken. Bay Area's finest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} ${dancing.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
