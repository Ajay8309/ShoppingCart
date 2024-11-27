import React from 'react'
import ListProducts from './components/ListProducts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCart from './components/ListCart';



const App = () => {
  return (

    <BrowserRouter> 
        <Routes>
          <Route path='/' element={<ListProducts/>} />
          <Route path="/cart" element={<ListCart />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App