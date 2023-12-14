import { useState,createContext } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import UploadProductPage from './pages/UploadProductPage'
import ProductDetails from './pages/ProductDetails'
import Navigator from './components/Navigator'
import { ChakraProvider } from '@chakra-ui/react'

export const AppContext = createContext(null)

function App() {

  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [avatars,setAvatars] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)
  const [isCompleted,setIsCompleted] = useState(false)
  const [keyword,setKeyword] = useState('')


  return (
    <>
      <AppContext.Provider value={{
        name,
        setName,
        code,
        setCode,
        price,
        setPrice,
        description,
        setDescription,
        avatars,
        setAvatars,
        isLoading,
        setIsLoading,
        isSubmit,
        setIsSubmit,
        isCompleted,
        setIsCompleted,
        keyword,
        setKeyword,
      }}>
        <ChakraProvider>
          <BrowserRouter>
            <Navigator/>
            <Routes>
              <Route path='/product' element={<ProductListPage/>}/>
              <Route path='/product/upload' element={<UploadProductPage/>}/>
              <Route path='/product/detail/:id' element={<ProductDetails/>}/>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
