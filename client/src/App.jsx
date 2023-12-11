import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from './pages/ProductList'
import UploadProduct from './pages/UploadProduct'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/upload' element={<UploadProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
