'use client';
import Image from "next/image";

interface IRoundedButton {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    onClick: () => void;
}


const RoundedButton = ({ src, alt, width, height, className = '', onClick }: IRoundedButton) => {
    return <div className="p-3 rounded-full shadow-[0_0_10px_0px_rgba(0,0,0,0.35)] w-fit h-fit cursor-pointer">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        />
    </div>
}

export default RoundedButton;