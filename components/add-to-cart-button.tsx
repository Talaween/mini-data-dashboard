import { HiShoppingCart } from "react-icons/hi2";

interface AddToCartButtonProps {
    onClick: () => void;
    label?: string;
}

const AddToCartButton = ({ onClick, label }: AddToCartButtonProps) => {
    return (
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors duration-200" onClick={onClick}>
          <HiShoppingCart className="w-4 h-4" />
          {label}
        </button>
    )
}

export default AddToCartButton
