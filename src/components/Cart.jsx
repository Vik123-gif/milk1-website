// src/components/Cart.jsx
import { useCart } from "../app/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="pt-15 text-2xl font-semibold">🛒 YOUR CART</h2>

      {cartItems.length === 0 ? (
        <p className=" mt-4 border border-yellow-300 p-6 rounded-full shadow-bold text-red-600 font-bold text-sm sm:text-bold">
          " <br /> Uh Oh... it's empty! <br />
          Make a wish and add your favorites now! <br />
          ,,
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b border-gray-300 py-4"
          >
            {/* Display product image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Display product details */}
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-700">Price: ₹{item.price}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>

              {/* Individual remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition"
              >
                Remove 1
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
