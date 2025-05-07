// src/components/Cart.jsx
import { useCart } from "../app/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              borderBottom: "1px solid #ccc",
              padding: "1rem 0",
            }}
          >
            {/* Display product image */}
            <img
              src={item.image}
              alt={item.name}
              width="80"
              height="80"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />

            {/* Display product details */}
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>

              {/* Individual remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
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
