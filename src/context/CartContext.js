import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      setCart(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      setCart(prev => [...prev, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
