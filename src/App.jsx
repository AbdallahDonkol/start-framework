import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

export default function () {
  let routes = createBrowserRouter([{
    path:"", element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
      {path:"*",element:<NotFound/>}
    ]
  }])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

