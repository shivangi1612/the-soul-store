import { FaShoppingCart} from "react-icons/fa";

export default function Navbar({ cart }) {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 bg-black shadow-lg">
      <p className="text-2xl md:text-xl font-bold text-white">THE SOUL STORE.</p>

      <div className="flex items-center space-x-6 md:space-x-4">

        <button className="relative text-white hover:text-emerald-300">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-white px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
