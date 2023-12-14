import React from 'react'
import { useEffect,useContext } from 'react'
import { useDisclosure } from "@chakra-ui/react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { AppContext } from '../App';

const ProductConfirmation = ({handleSubmit}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isSubmit,setIsSubmit} = useContext(AppContext)
    const cancelRef = React.useRef()

    useEffect(()=>{

        if(isSubmit){
            onOpen();
        }else{
            onClose();
        }

    },[isSubmit])

    const message = {
        header:'Upload Product Confirmation',
        description:'Are you sure you want to proceed ?',
        cancel:'Cancel',
        corect:'Confirm!'
    }

    const handleCancel = () => {
        onClose();
        setIsSubmit(false)
      }

    return (
        <>
             <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}>

                <AlertDialogOverlay>
                    <AlertDialogContent>

                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {message.header} 
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            {message.description}
                        </AlertDialogBody>

                        <AlertDialogFooter className={`flex gap-5`}>
                            <button className='p-2 rounded-xl bg-gray-200 text-black outline-none' ref={cancelRef} onClick={handleCancel}>
                                {message.cancel}
                            </button>
                            <button className='p-2 rounded-xl bg-orange-700 text-white' onClick={handleSubmit} ml={3}>
                                {message.corect}
                            </button>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialogOverlay>

            </AlertDialog>
        </>
    )
}

export default ProductConfirmation