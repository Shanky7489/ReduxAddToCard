import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";

const Home = () => {
  const dipatch = useDispatch();

  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-md text-gray-600 font-medium mb-3">
                ${item.price}
              </p>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                onClick={() => dipatch(add(item))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
