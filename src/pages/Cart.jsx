import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const CartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const TotalPrice = CartItems.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {CartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto mb-8">
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {CartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <h2 className="text-lg font-medium">{item.title}</h2>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </td>
                    <td className="px-4 py-2">
                      <p className="text-lg font-semibold">${item.price}</p>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                        onClick={() => dispatch(remove(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Price and Back to Shop */}
          <div className="flex justify-between items-center mt-6">
            <Link
              to="/"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            >
              Back to Shop
            </Link>
            <div className="text-right">
              <h2 className="text-xl font-bold">Total:</h2>
              <p className="text-2xl font-semibold text-green-600">
                ${TotalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
