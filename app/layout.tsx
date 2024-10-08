import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Et Cetera - Tabac Presse Loto à Droué",
  description: "Votre tabac presse de confiance à Droué",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <main className="container mx-auto px-4 py-8">
              {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
