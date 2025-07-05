import React, { useContext } from 'react';
import { userContext } from '../Context/Context';
import empty from '../../assets/empty.jpg'
import { NavLink } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';


export default function Cart() {
  const { cart, dispatch } = useContext(userContext); 

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 text-gray-800 bg-white">
  {cart.length === 0 ? (
    <img className="w-screen h-screen object-cover" src={empty} alt="empty" />
  ) : (
    cart.map((item) => (
      <div
        key={item.id || item._id}
        className="border-b py-6 flex flex-col lg:flex-row gap-4 items-center"
      >
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={item.imageCover}
            alt={item.title}
            className="w-full h-full object-cover rounded shadow-md"
          />
        </div>

        <div className="flex-1 w-full text-center lg:text-left space-y-1">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-base">Price: {item.price} EGP</p>
          <p className="text-base">Quantity: {item.quantity}</p>
        </div>

        <div className="flex flex-row lg:flex-col items-center gap-2">
          <button
            onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition  w-24 "
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition  w-24 "
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
            className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition  w-24 "
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )}

  {cart.length > 0 && (
    <div className="mt-6 space-y-4 text-right">
      <div className="text-xl font-semibold">Total: {totalPrice} EGP</div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          Empty the Cart
        </button>
        <NavLink to="/checkout" className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition text-center">
        Checkout
        </NavLink>
      </div>
    </div>
  )}
</div>


    
    
  );
}
