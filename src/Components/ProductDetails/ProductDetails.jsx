import axios from 'axios';
import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../Context/Context';





export default function ProductDetails() {

 const { dispatch } = useContext(userContext); 

let {id} =useParams();
const[productDetails ,setproductDetails]=useState(null);

function getProductDetaild(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
     .then((response) => {
      setproductDetails(response.data.data);
    })
    
}
useEffect(() => {
getProductDetaild(id)

},[])

    
  return (
    <>
    <div className="flex flex-col md:flex-row font-semibold bg-white">
  <div className="w-full md:w-1/4">
    <img
      className="w-full h-auto object-cover rounded-md shadow-md"
      src={productDetails?.imageCover}
      alt={productDetails?.title}
    />
  </div>

  <div className="w-full md:w-3/4 p-4 md:p-6">
    <h1 className="text-2xl md:text-3xl font-semibold   ">
      {productDetails?.title}
    </h1>

    <p className="mt-3 md:mt-4 text-base md:text-lg text-zinc-700 ">
      {productDetails?.description}
    </p>

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-8 mb-2 gap-4">
      <span className="text-xl md:text-3xl font-bold text-zinc-800 ">
        Price: {productDetails?.price} EGP
      </span>
      <span className="text-xl md:text-3xl text-yellow-600 dark:text-yellow-400">
        {productDetails?.ratingAverage}
      </span>
    </div>

    <button
      onClick={() => {
        dispatch({ type: 'ADD_TO_CART', payload: productDetails });
      }}
      className="w-full transition duration-300 text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-500 shadow-md shadow-zinc-800/40 dark:shadow-zinc-900 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-4 mx-4 scale-100 hover:scale-105">
      Add to Cart
    </button>
  </div>
</div>

      
    </>
  )
}
