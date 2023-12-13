import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import UploadProductPage from './pages/UploadProductPage'
import Navigator from './components/Navigator'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigator/>
        <Routes>
          <Route path='/products' element={<ProductListPage/>}/>
          <Route path='/upload' element={<UploadProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
