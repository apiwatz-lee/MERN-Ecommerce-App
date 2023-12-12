import { useState,createContext } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import UploadProductPage from './pages/UploadProductPage'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primeflex/primeflex.css';                                   
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import Navigator from './components/Navigator'

// export const AppContext = createContext(null)

function App() {

  // const [products,setProducts] = useState({
  //   name:'',
  //   code:'',
  //   price:0,
  //   image:''
  // })

  return (
    <>
      {/* <AppContext.Provider value={{products,setProducts}}> */}
        <PrimeReactProvider>
          <BrowserRouter>
            <Navigator/>
            <Routes>
              <Route path='/products' element={<ProductListPage/>}/>
              <Route path='/upload' element={<UploadProductPage/>}/>
            </Routes>
          </BrowserRouter>
        </PrimeReactProvider>
      {/* </AppContext.Provider> */}
    </>
  )
}

export default App
