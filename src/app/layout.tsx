'use client';
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import MenuWrapper from "@/components/menu-wrapper/menu-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuExpanded, setMenuExpanded] = React.useState(false);


  const handleOpenCart = () => {
    console.log("handleOpenCart");
  }

  const handleOpenMenu = () => {
    console.log('entro');
    setMenuExpanded(!menuExpanded);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          title="E-commerce"
          openCart={handleOpenCart}
          openMenu={handleOpenMenu}
        >
        </Header>

        <MenuWrapper closeCallback={() => setMenuExpanded(false)} expanded={menuExpanded}>
          <Menu/>
        </MenuWrapper>
        {children}
      </body>
    </html>
  );
}
