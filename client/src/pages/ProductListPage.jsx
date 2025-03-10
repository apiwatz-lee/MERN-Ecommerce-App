import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useToast } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import Navigator from '../components/Navigator';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import { useApp } from '../context/AppContext';

const ProductListPage = () => {
  const {
    isUploadCompleted,
    setIsUploadCompleted,
    setName,
    setCode,
    setPrice,
    setDescription,
    setAvatars,
    setIsUpdatedCompleted,
    isUpdatedCompleted,
    isDeleteCompleted,
    setIsDeleteCompleted,
    isPaymentSuccess,
    setIsPaymentSuccess,
  } = useApp();

  const toast = useToast();

  useEffect(() => {
    if (isUploadCompleted) {
      toast({
        title: 'Product Uplaoded.',
        description: 'Product have been created successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }

    if (isUpdatedCompleted) {
      toast({
        title: 'Product Updated.',
        description: 'Product have been updated successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }

    if (isDeleteCompleted) {
      toast({
        title: 'Product Deleted.',
        description: 'Product have been deleted successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }

    if (isPaymentSuccess) {
      toast({
        title: 'Payment Successfully.',
        description: `We've received your payment and we're getting your order ready to be shipped`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }

    setIsUploadCompleted(false);
    setIsUpdatedCompleted(false);
    setIsDeleteCompleted(false);
    setIsPaymentSuccess(false);
    setName('');
    setCode('');
    setPrice('');
    setDescription('');
    setAvatars([]);
  }, []);

  return (
    <div className='relative'>
      <Navigator />
      <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>
          Product list
        </h1>
        <SearchBar />
        <ProductList />
        <Loading />
        <Pagination />
      </main>
    </div>
  );
};

export default ProductListPage;
