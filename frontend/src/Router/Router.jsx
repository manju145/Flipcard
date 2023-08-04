import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import DetailView from '../Components/Detail/DetailView'
import Cart from '../Components/Cart/Cart'
import More from '../Components/Cart/More'
import Form from '../Components/Payment/Form'

const Router = () => {
  return (
 <Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/product/:id' element={<DetailView/>}  />
 <Route path='/cart' element={<Cart/>} />
 <Route path='/more' element={<More/>} />
 <Route path='/buy' element={<Form/>} />
 
 </Routes>
  )
}

export default Router;