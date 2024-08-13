'use client';
import React from "react";
import ImageButton from "../image-button/image-button";
import CartIndicator from "../cart-indicator/cart-indicator";

interface IHeader {
  title?: string;
  openMenu?: () => void;
  openCart?: () => void;
  openUser?: () => void;
}

const MENU_SIZE = 32;
const USER_SIZE = 32;

const Header = ({ title, openCart = () => {}, openMenu = () => {}, openUser = () => {} }: IHeader) => {



  return (
    <header className="p-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] relative z-50">
      <div className="grid grid-cols-3 lg:grid-cols-2">
        <ImageButton
          src="images/menu.svg"
          alt="Menu"
          width={MENU_SIZE}
          height={MENU_SIZE}
          className="justify-self-start lg:hidden cursor-pointer"
          onClick={openMenu}
        />
        <span className="justify-self-center self-center lg:justify-self-start">{title}</span>
        <div className="flex gap-x-2 justify-self-end">
          <ImageButton
            src="images/user.svg"
            alt="Cart"
            width={USER_SIZE}
            height={USER_SIZE}
            className="justify-self-end cursor-pointer"
            onClick={openUser}
          />

          <CartIndicator
            className="justify-self-end cursor-pointer"
            onClick={openCart}
          />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
