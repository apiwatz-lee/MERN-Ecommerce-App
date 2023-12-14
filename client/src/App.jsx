import { useState,createContext } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import UploadProductPage from './pages/UploadProductPage'
import Navigator from './components/Navigator'
import { ChakraProvider } from '@chakra-ui/react'

export const AppContext = createContext(null)

function App() {

  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [price,setPrice] = useState()
  const [avatars,setAvatars] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)
  const [isCompleted,setIsCompleted] = useState(false)
  const [keyword,setKeyword] = useState('')
  const [errorMessage,setErrorMessage] = useState(null)

  return (
    <>
      <AppContext.Provider value={{
        name,
        setName,
        code,
        setCode,
        price,
        setPrice,
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
        errorMessage,
        setErrorMessage
      }}>
        <ChakraProvider>
          <BrowserRouter>
            <Navigator/>
            <Routes>
              <Route path='/products' element={<ProductListPage/>}/>
              <Route path='/upload' element={<UploadProductPage/>}/>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
