import React from 'react'
import { Routes, Route } from "react-router-dom"; 
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext"

export default function App(){
  return (
    <ShoppingCartContextProvider basename={process.env.PUBLIC_URL}>
    <Routes>
       <Route path="/" element = {<Store />}/>
       <Route path="/about" element = {<About />}/>
       <Route path="/contact" element = {<Contact />}/>
    </Routes>
    </ShoppingCartContextProvider>
  )
}