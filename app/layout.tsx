import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Tank | Professional Tattoo Artist | Kaal Chakkra Tattoo Studio",
  description:
    "Sumit Tank - Founder of Kaal Chakkra Tattoo Studio, Mumbai. Professional tattoo artist specializing in spiritual, geometric, and custom tattoo designs. Book your consultation today.",
  keywords: [
    "tattoo artist",
    "Sumit Tank",
    "Kaal Chakkra",
    "tattoo studio",
    "Mumbai tattoo",
    "spiritual tattoos",
    "geometric tattoos",
    "custom tattoos",
  ],
  openGraph: {
    title: "Sumit Tank | Professional Tattoo Artist",
    description:
      "Founder of Kaal Chakkra Tattoo Studio. Creating meaningful, spiritual tattoo art.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
