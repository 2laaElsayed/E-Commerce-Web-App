import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import UserContextProvider from './Components/Context/Context';
import ProtectedRouting from './Components/ProtectedRouting/ProtectedRouting';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import Checkout from './Components/Checkout/Checkout';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRouting><Home /> </ProtectedRouting>},
      { path: 'about', element:<ProtectedRouting><About /></ProtectedRouting>  },
      { path: 'login', element: <Login />},
      {path:'cart' ,element:<ProtectedRouting><Cart/></ProtectedRouting> },
      {path:'brands' ,element:<ProtectedRouting><Brands/></ProtectedRouting> },
      {path:'checkout' ,element:<ProtectedRouting><Checkout/></ProtectedRouting> },
      { path: 'register', element: <Register /> },
      { path: 'productdetails/:id', element: <ProtectedRouting><ProductDetails/></ProtectedRouting>},
      { path: '*', element: <ProtectedRouting><Notfound /></ProtectedRouting> },
      
    ]
  }
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
