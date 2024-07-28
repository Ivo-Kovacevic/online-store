import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import { Container } from '@mui/material'

function App() {

  return (
    <>

      
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={ <Products /> } />
        </Routes>

        
    </>
  )
}

export default App;
