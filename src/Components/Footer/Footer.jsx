
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../Context/Context';

export default function Footer() {
    const { userLogin } = useContext(userContext);

  return (
    <>
    <div>
  {userLogin !== null && (
    <footer className="bg-white shadow-sm dark:bg-zinc-800">
      <div className="w-full mx-auto max-w-screen-xl p-1 md:flex md:items-center md:justify-between">
        
        <span className="text-sm font-serif text-gray-500 sm:text-center dark:text-gray-300">
          By: <a href="https://www.linkedin.com/in/alaa-elsayed-b46027311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="hover:underline">Alaa Salem</a>
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-300 sm:mt-0">
          <li>
            <NavLink to="" className="hover:underline me-4 md:me-6">Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className="hover:underline me-4 md:me-6">About</NavLink>
          </li>
          <li>
            <NavLink to="cart" className="hover:underline me-4 md:me-6">Cart</NavLink>
          </li>
          <li>
            <NavLink to="brands" className="hover:underline me-4 md:me-6">Brands</NavLink>
          </li>
          <li>
            <NavLink to="#" className="hover:underline">Contact</NavLink>
          </li>
        </ul>
        
      </div>
    </footer>
  )}
</div>

    





      
    </>
  )
}
