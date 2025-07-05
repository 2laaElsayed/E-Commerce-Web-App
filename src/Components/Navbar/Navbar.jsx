import { ShoppingBag } from 'lucide-react';
import { useContext, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { userContext } from '../Context/Context';

export default function Navbar() {
  const { pathname } = useLocation();
  const { userLogin, setuserLogin, cart } = useContext(userContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('userToken');
    setuserLogin(null);
    navigate('/login');
  };

  const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-zinc-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">

    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden text-white focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
      {userLogin !== null && (
        <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium space-y-2 md:space-y-0 md:space-x-6">
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="" className="block py-2 px-3 text-white">Home</NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="about" className="block py-2 px-3 text-white">About</NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="cart" className="block py-2 px-3 text-white">Cart</NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="brands" className="block py-2 px-3 text-white">Brands</NavLink>
          </li>
        </ul>
      )}
    </div>

    <ul className="flex items-center gap-4 mt-4 md:mt-0 font-medium">
      {userLogin === null ? (
        <>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="login" className="block py-2 px-3 text-white">Login</NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="register" className="block py-2 px-3 text-white">SignUp</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="relative transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink to="cart" className="block py-2 px-3">
              <ShoppingBag size={28} color="#fff" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-zinc-700 hover:scale-105 rounded-md">
            <NavLink onClick={logout} to="login" className="block py-2 px-3 text-white">Logout</NavLink>
          </li>
        </>
      )}
    </ul>
  </div>
</nav>

  );
}
