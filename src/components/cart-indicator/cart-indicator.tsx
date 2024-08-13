import ImageButton from "../image-button/image-button";

interface ICartIndicator {
    onClick?: () => void;
    totalItemsInCart?: number;
    showIndicator?: boolean;
    className?: string;
};

const CART_SIZE = 32;
const CartIndicator = ({ onClick = () => {}, totalItemsInCart = 0, showIndicator = true, className = '' }: ICartIndicator) => {
    return <div className="relative">
        <ImageButton
            src="images/cart.svg"
            alt="Cart"
            width={CART_SIZE}
            height={CART_SIZE}
            className={className}
            onClick={onClick}
          />
        
        <span className={`absolute text-white pointer-events-none bg-red-500 px-1 bottom-[-.1rem] right-0 text-xs rounded-full ${showIndicator ? 'block' : 'hidden' }`}>{totalItemsInCart}</span>
    </div>
};

export default CartIndicator;