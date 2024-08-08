'use client';
import React from "react";
import Image from "next/image";

import HighlightedProduct from "@/components/highlighted-product/highlighted-product";
import { TProducts } from "@/types/types";



export default function Home() {
  const [products, setProducts] = React.useState<TProducts>([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => console.log(products), [products]);

  const fetchProducts = async () => {
    const response = await fetch('products.json');

    if (response.ok) {
      const products = await response.json();
      setProducts(products);
    }
  };

  return (
    <main className="">
      {
        products.length ?
          <HighlightedProduct>
            <Image src={`/${products[0].imageUrl}`} alt="Highlighted product image" width={256} height={256}/>
            <p>{products[0].description}</p>
          </HighlightedProduct>
         : <></>
      }
      
    </main>
  );
}
