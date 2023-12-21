import React,{createContext,useContext,useState} from 'react'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import { useToast } from '@chakra-ui/react';

const AuthContext = createContext();


const AuthProvider = (props) => {

    const [state,setState] = useState({
        loading:null,
        error:null,
        user:null,
    })

    const navigate = useNavigate();
    const toast = useToast()

    const server = import.meta.env.VITE_API

    const register = async(data) => {
        await axios.post(`${server}/auth/register`,data);
        navigate('/login')
    }

    const login = async(data) => {
    
        try {
            const result = await axios.post(`${server}/auth/login`,data)
            const token = result.data.token;
            localStorage.setItem('token',token)
            const userDataFromToken = jwtDecode(token)
            setState({...state,user:userDataFromToken})
            navigate('/product')
            toast({
                title: 'Login successfully.',
                description: `Hello ${userDataFromToken.firstname}, Have a good day!`,
                status: 'success',
                duration: 2000,
                isClosable: true,
                position:'top'
              })
        } catch (error) {
            console.log(`Cannot login from client due to ${error}`)
            toast({
                title: 'Login failed.',
                description: `Please check your username and password`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:'top'
                })          
        }
    }

    const isAuthenticated = Boolean(localStorage.getItem('token'));

    const logout = () => {
        localStorage.removeItem('token')
        setState({...state,user:null})
        navigate('/')
    };

    return (
        <AuthContext.Provider value={{state,register,login,isAuthenticated,logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}