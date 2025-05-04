import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Signup from './auth/SignUp'
import ProductList from './pages/ProductList'
import './App.css'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import AdminPanel from './pages/AdminPanel'

function App() {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/productlist",
        element:<ProductList/>
      },
      {
        path:"productdetail/:id",
        element:<ProductDetail/>
      },
      {
        path:"adminpanel",
        element:<AdminPanel/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/logout",
        element:<Logout/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
