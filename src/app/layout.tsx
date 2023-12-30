import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import animendoLogo from "../../public/logo.png";
import Logo from "@/components/Logo/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animendo",
  description: "Website streaming anime terlengkap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center w-full bg-[#222] h-16 text-white">
          <div className="container mx-auto px-5 lg:px-20 flex justify-between items-center">
            <Logo />
            <Searchbar />
            <Navbar />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
