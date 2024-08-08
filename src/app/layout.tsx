'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const handleOpenCart = () => {
    console.log("handleOpenCart");
  }

  const handleOpenMenu = () => {
    console.log("handleOpenMenu");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          title="E-commerce"
          openCart={handleOpenCart}
          openMenu={handleOpenMenu}
        >
        </Header>
        {children}
      </body>
    </html>
  );
}
