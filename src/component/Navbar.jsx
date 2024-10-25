import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="bg-red-500 w-full py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/">MyShop</Link>
        </div>

        {/* Links and Cart */}
        <div className="flex items-center space-x-8 text-white text-lg">
          {/* Navigation Links */}
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-300 transition-colors">
            Cart
          </Link>

          {/* Cart Item Count */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">Items:</span>
            <span className="bg-white text-red-500 px-3 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
