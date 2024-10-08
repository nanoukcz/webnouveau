import type { Metadata } from "next";
import "./globals.css";
import { PT_Mono } from "next/font/google";
import React from "react";
import Navbar from "@/components/Navbar";
import RootProviders from "@/components/providers/RootProviders";

const pt_mono = PT_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Nouveau",
  description: "Crafting ideas with code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={pt_mono.className}>
        <RootProviders>
          <div className="relative flex h-screen w-full flex-col items-left justify-between">
            <Navbar />
            <div>{children}</div>
          </div>
        </RootProviders>
      </body>
    </html>
  );
}
