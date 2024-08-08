'use client';
import React from "react";
import ImageButton from "../image-button/image-button";

interface IHeader {
  title?: string;
  openMenu?: () => void;
  openCart?: () => void;
}

const MENU_SIZE = 32;
const CART_SIZE = 32;

const Header = ({ title, openCart, openMenu }: IHeader) => {



  return (
    <header className="p-3 shadow-lg">
      <div className="grid grid-cols-3 md:grid-cols-2">
        <ImageButton
          src="images/menu.svg"
          alt="Menu"
          width={MENU_SIZE}
          height={MENU_SIZE}
          className="justify-self-start  md:hidden"
          onClick={openCart ? openCart : () => {}}
        />
        <span className="justify-self-center self-center md:justify-self-start">{title}</span>
        <ImageButton
          src="images/cart.svg"
          alt="Cart"
          width={CART_SIZE}
          height={CART_SIZE}
          className="justify-self-end"
          onClick={openMenu ? openMenu : () => {}}
        />
      </div>
    </header>
  );
};

export default Header;
