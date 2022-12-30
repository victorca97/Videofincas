import { useReducer } from "react"
import { types } from "../types/types"
import GetURLAPI from "../utilidades/parametros"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import Axios from 'axios';
import { useState, useEffect } from "react"


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)
    const [data, setData] = useState(null)

   

    const login = async (username = '', password = '') => {
        try {
          const url_base = GetURLAPI();
          const URL = url_base + "login";
      
          const user = {
            username: username,
            password: password,
          };
          
          const res = await Axios.post(URL, user);
          console.log(res)
          setData(res.data);
          if (data?.status === 200) {
            const action = {
              type: types.login,
              payload: user,
            };
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(action);
            
            return true;
          }
          
        } catch (error) {
          console.error(error);
          return false;
        }
      };

   
    

    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout,
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
