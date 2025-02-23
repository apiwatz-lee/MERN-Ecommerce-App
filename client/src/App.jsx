import { createContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import UploadProductPage from './pages/UploadProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ChakraProvider } from '@chakra-ui/react';
import ProductCartPage from './pages/ProductCartPage';
import Homepage from './pages/Homepage';
import PageNotFoud from './pages/PageNotFoud';
import LoginPage from './pages/LoginPage';
import { useAuth } from './context/Authentication';
import RegisterPage from './pages/RegisterPage';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { AppProvider } from './context/AppContext';

export const AppContext = createContext(null);

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <AppProvider>
        <ChakraProvider>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path='/' element={<Homepage />} />
                <Route path='/product' element={<ProductListPage />} />
                <Route
                  path='/product/upload/'
                  element={<UploadProductPage />}
                />
                <Route
                  path='/product/upload/:id'
                  element={<UploadProductPage />}
                />
                <Route
                  path='/product/detail/:id'
                  element={<ProductDetailsPage />}
                />
                <Route path='/product/cart' element={<ProductCartPage />} />
                <Route
                  path='/payment/checkout-success'
                  element={<CheckoutSuccess />}
                />
                <Route path='*' element={<PageNotFoud />} />
              </>
            ) : (
              <>
                <Route path='/' element={<Homepage />} />
                <Route path='/product' element={<ProductListPage />} />
                <Route path='/product/cart' element={<ProductCartPage />} />
                <Route
                  path='/product/detail/:id'
                  element={<ProductDetailsPage />}
                />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<PageNotFoud />} />
              </>
            )}
          </Routes>
        </ChakraProvider>
      </AppProvider>
    </>
  );
}

export default App;
