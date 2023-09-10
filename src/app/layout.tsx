import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Password Manager",
  description: "Password Manager by Vinson Beduya",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png", icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
