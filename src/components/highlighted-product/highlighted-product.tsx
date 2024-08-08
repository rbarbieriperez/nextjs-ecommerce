'use client';

interface IHighlightedProduct {
  children: React.ReactElement[] | React.ReactElement;

}


const HighlightedProduct = ({ children }: IHighlightedProduct) => {
  return <>
    <h1>Highlighted Product</h1>
      {children}
    <div>
      button1
    </div>
  </>;
};

export default HighlightedProduct;