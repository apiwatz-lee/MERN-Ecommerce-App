import ProductCartList from '../components/ProductCartList';
import ProductCartSummary from '../components/ProductCartSummary';
import Navigator from '../components/Navigator';
import { CiShoppingCart } from 'react-icons/ci';
import { useApp } from '../context/AppContext';

const ProductCartPage = () => {
  const { cart } = useApp();

  return (
    <>
      <Navigator />
      <main className='font-poppins w-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center lg:text-left'>
          Product Cart
        </h1>

        {cart.length === 0 ? (
          <section className='w-full h-[70vh] flex flex-col lg:flex-row justify-center items-center gap-5'>
            <CiShoppingCart className='text-8xl text-gray-600' />
            <p className='text-3xl sm:text-5xl text-[#E04132] text-center'>
              Your cart is empty
            </p>
          </section>
        ) : (
          <div className='flex flex-col justify-center items-center lg:items-start lg:flex-row gap-5 w-[90vw] pb-10'>
            <ProductCartList />
            <ProductCartSummary />
          </div>
        )}
      </main>
    </>
  );
};

export default ProductCartPage;
