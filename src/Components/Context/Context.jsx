import { createContext, useEffect, useReducer, useState } from "react";

export let userContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = cart.find(item => item.id === action.payload.id);
      if (exists) {
        return cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...action.payload, quantity: 1 }];
      }
    }
    case "DECREASE_QUANTITY":
      return cart
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    case "REMOVE_FROM_CART":
      return cart.filter(item => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return cart;
  }
}

export default function UserContextProvider(props) {
  const [userLogin, setuserLogin] = useState(null);
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setuserLogin(localStorage.getItem("userToken"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <userContext.Provider value={{ userLogin, setuserLogin, cart, dispatch }}>
      {props.children}
    </userContext.Provider>
  );
}
