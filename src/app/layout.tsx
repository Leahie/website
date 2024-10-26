import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import "./app.css";
import Nav from '../(components)/Nav'
import Footer from "@/(components)/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '700']});

export const metadata: Metadata = {
  title: "Leah Zhang",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="app">
        
        <main>
        {children}
        
        </main>
        <Footer/>        
        </body>
    </html>
  );
}
