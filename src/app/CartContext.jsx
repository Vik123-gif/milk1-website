import { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Hook to use context easily
export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove one quantity or entire item
  const removeFromCart = (id) => {
    const existing = cartItems.find((item) => item.id === id);
    if (existing && existing.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  // Provide the cart and functions
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
