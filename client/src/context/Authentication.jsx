import React,{createContext,useContext,useState} from 'react'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext();


const AuthProvider = (props) => {

    const [state,setState] = useState({
        loading:null,
        error:null,
        user:null,
    })

    const navigate = useNavigate();

    const server = import.meta.env.VITE_API

    const login = async(data) => {
        try {
            const result = await axios.post(`${server}/auth/login`,data)
            const token = result.data.token;
            localStorage.setItem('token',token)
            const userDataFromToken = jwtDecode(token)
            console.log(userDataFromToken)
            setState({...state,user:userDataFromToken})
            navigate('/')
        } catch (error) {
            console.log(`Cannot login from client due to ${error}`)
        }
    }

    const isAuthenticated = Boolean(localStorage.getItem('token'));

    return (
        <AuthContext.Provider value={{state,login,isAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}