import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = items.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);
    setTotalPrice(sum);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, setItems, totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
