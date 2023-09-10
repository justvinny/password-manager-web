"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav-bar";
import { initDb } from "@/data/db";
import { useEffect, useState } from "react";

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
  const [isDbReady, setIsDbReady] = useState(false);

  const handleInitDB = async () => {
    const status = await initDb();
    setIsDbReady(status);
  };

  useEffect(() => {
    handleInitDB();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isDbReady ? (
          <>
            {children}
            <NavBar />
          </>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
