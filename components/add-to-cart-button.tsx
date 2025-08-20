import { HiShoppingCart } from "react-icons/hi2";

const AddToCartButton = () => {
    return (
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
          <HiShoppingCart className="w-4 h-4" />
        </button>
    )
}

export default AddToCartButton
