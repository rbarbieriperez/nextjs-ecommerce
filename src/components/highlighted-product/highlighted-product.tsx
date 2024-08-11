'use client';

import RoundedButton from "../rounded-button/rounded-button";

interface IHighlightedProduct {
  children: React.ReactElement[] | React.ReactElement;

}

const ROUNDED_BUTTON_SIZE = 32;

const HighlightedProduct = ({ children }: IHighlightedProduct) => {
  return <>
    <h1>Highlighted Product</h1>
      {children}
    <div className="flex flex-row gap-x-3">
      <RoundedButton
        src="images/add-to-cart.svg"
        alt="Add to cart"
        width={ROUNDED_BUTTON_SIZE}
        height={ROUNDED_BUTTON_SIZE}
        onClick={() => {}}
      />

      <RoundedButton
        src="images/share-product.svg"
        alt="Share product"
        width={ROUNDED_BUTTON_SIZE}
        height={ROUNDED_BUTTON_SIZE}
        onClick={() => {}}
      />
    </div>
  </>;
};

export default HighlightedProduct;