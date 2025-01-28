import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./technical.css";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function TechnicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
