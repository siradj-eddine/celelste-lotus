import { createContext, useState, useContext } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // If the product exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity/2;
        return updatedCart;
      } else {
        // If the product doesn't exist, add it to the cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};