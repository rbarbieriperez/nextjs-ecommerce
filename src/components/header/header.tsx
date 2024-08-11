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
    <header className="p-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] relative z-50">
      <div className="grid grid-cols-3 lg:grid-cols-2">
        <ImageButton
          src="images/menu.svg"
          alt="Menu"
          width={MENU_SIZE}
          height={MENU_SIZE}
          className="justify-self-start lg:hidden"
          onClick={openMenu ? openMenu : () => {}}
        />
        <span className="justify-self-center self-center lg:justify-self-start">{title}</span>
        <ImageButton
          src="images/cart.svg"
          alt="Cart"
          width={CART_SIZE}
          height={CART_SIZE}
          className="justify-self-end"
          onClick={openCart ? openCart : () => {}}
        />
      </div>
    </header>
  );
};

export default Header;
