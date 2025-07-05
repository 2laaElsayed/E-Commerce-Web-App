import React from 'react'
import RecentProducts from '../RecentProducts/RecentProducts'

export default function Home() {
  return (
    <>
     <div className='bg-white'>
       <RecentProducts/>
     </div>
    </>
  )
}














// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Home() {
  
//     const [product,setProduct]= useState([]);
//     async function getProducts() {
//       let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
//       setProduct(data.data)
//       console.log(product);
      
//     }
//     useEffect(()=>{
//       getProducts()
//     })
//     return (
//       <>
//       <div className="row">
//         {product.map((product)=>
//         <div className=" w-1/6 px-2 ">
//           <img src={product.imageCover} className="w-full"/>
//           <h2>{product.title}</h2>
         
//         </div>
//         )}
//       </div>
        
//       </>
//     )  
  
// }



