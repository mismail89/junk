import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState } from 'react'
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Sticky from './components/sticky';
import Layout from './layout.jsx';
import Appliances from './pages/appliances';
import Eletronic from './pages/electronic.jsx';
import Furniture from './pages/furniture.jsx'
import { RouterProvider, createBrowserRouter,createRoutesFromElements  } from 'react-router-dom';

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Layout />}>
<Route path='' element={<Home />}/>
<Route path='/services' element={<Services />}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/junk-removal-services-dubai' element={<Appliances />}/>
<Route path='/electronic' element={<Eletronic />}/>
<Route path='/furniture' element={<Furniture />}/>
</Route>
  )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
