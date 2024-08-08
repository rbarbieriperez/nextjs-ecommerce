'use client';

import Image from "next/image";

interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onClick: () => void;
}

const ImageButton = ({ src, alt, width, height, className = '', onClick }: IImage) => {

  
  return <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    onClick={onClick}
  >
  </Image>
};

export default ImageButton;