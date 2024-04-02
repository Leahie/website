import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leah Zhang",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={[inter.className, "app"].join(' ')}>
        <nav>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/art_us">Art & Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          
        
        </nav>
        {children}
        </body>
    </html>
  );
}
