import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beranda - Lingkungan St. Maria Goretti Paroki Kosambi Baru",
  description: "Website Lingkungan Santa Maria Goretti Paroki Kosambi Baru Gereja Santo Matias Rasul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <MyNavbar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
