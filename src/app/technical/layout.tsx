import React from "react";
import { Inter } from "next/font/google";
import "./technical.css";
import NewNavbar from "../../components/NewNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function TechnicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <NewNavbar/>
        {children}
        
        </body>
    </html>
  )
}
