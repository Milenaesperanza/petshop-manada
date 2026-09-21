import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart ((prev) => {
        const existe = prev.find(
            (producto) => producto.id === item.id
        );

        if (existe) {
            return prev.map((producto) =>
            producto.id === item.id
            ? { ...producto, quantity: producto.quantity + quantity }
            : producto
            );
        }

        return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => {
  setCart((prev) =>
    prev.filter((producto) => producto.id !== id)
  );
  };

  const totalPrice = cart.reduce(
    (acc, producto) =>
      acc + producto.price * producto.quantity,
    0
  );


  const totalItems = cart.reduce(
    (acc, producto) => acc + producto.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addItem,
        removeItem,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
