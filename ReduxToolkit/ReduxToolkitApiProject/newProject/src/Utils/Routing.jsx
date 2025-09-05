import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../component/Products'
import ProductedRoute from '../component/ProductedRoute'
import Signup from '../component/Signup'
import Login from '../component/Login'
import Params from '../component/Params'
import Address from '../component/Address'
import Method from '../component/Method'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProductedRoute>
              <Products/>
            </ProductedRoute>
              }/>
              <Route path='/signup' element={<Signup/>}/>
        <Route path="/product/:id" element={<Params />} /> 
              <Route path='/login' element={<Login/>}/>
              <Route path='/address' element={<Address/>}/>
              <Route path='/method' element={<Method/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
