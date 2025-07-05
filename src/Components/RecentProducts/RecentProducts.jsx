import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userContext } from '../Context/Context';
export default function RecentProducts() {
    const { dispatch } = useContext(userContext);


    const[recentproducts, setRecentproducts] =useState([]);
    function getRecentProducts() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=>{
            setRecentproducts(data.data);
        })
        .catch((error) => {
            console.log(error);
            
        })
        
    }
    useEffect(()=>{
        getRecentProducts()
    }
    ,[])


   
  return (
<>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 overflow-x-hidden">
  {recentproducts.map((product) => (
    <Link to={`/productdetails/${product.id}`} key={product.id}>
      <div className="product group bg-white rounded-lg shadow-sm h-full flex flex-col">
        <img
          className="p-10 rounded-t-lg w-full object-contain"
          src={product.imageCover}
          alt={product.title}
        />
        <h2 className="text-lg font-semibold tracking-tight font-serif mb-2 px-4 text-pink-950">
          {product.title.split(' ').slice(0, 2).join(' ')}
        </h2>
        <div className="flex justify-between items-center px-4 mb-2">
          <span className="text-lg font-bold text-pink-950">{product.price} EGP</span>
          <span className="text-sm text-yellow-600">⭐ {product.ratingAverage}</span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'ADD_TO_CART', payload: product });
          }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-500 shadow-md shadow-zinc-800/40 dark:shadow-zinc-900 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-4 mx-4 scale-100 hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  ))}
</div>

</>
  )
}
