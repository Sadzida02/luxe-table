import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-cormorant-garamond",
  weight: "400",
});

export const metadata: Metadata = {
  title: "LUXEtABLE",
  description: "Generated by Sadzida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cormorantGaramond.className}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
