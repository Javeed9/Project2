import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Catalogue from './Components/Catalogue/Catalogue.jsx'
import Category from './Components/Category/Category.jsx'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Catalogue />} />
      <Route path='contact' element={<Contact />} />
      <Route path='category/:category' element={<Category/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router} />
  </React.StrictMode>,
)
