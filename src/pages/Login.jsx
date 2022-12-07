import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
/* import AuthContext from "../componentes/AuthProvider"; */
import '../estilos/Login.css';
import '../App.css';

import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const LOGIN_URL = '/auth';

const textLogin = {
    color: 'white'
}

const Login = () => {
   /*  const { setAuth } = useContext(AuthContext); */
   const { login } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            /* setAuth({ user, pwd, roles, accessToken }); */
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No hay respuesta del servidor');
            } else if (err.response?.status === 400) {
                setErrMsg('Usuario o contraseña incorrecta');
            } else if (err.response?.status === 401) {
                setErrMsg('Usuario no autorizado');
            } else {
                setErrMsg('Fallo en el logeo');
            }
            errRef.current.focus();
        }
    }

    const navigate = useNavigate();

    const onLogin = e => {
        e.preventDefault();
        console.log('dentro de onlogin')
        console.log('user: ', user)
        console.log('password', pwd)
        login(user, pwd)
        navigate("/Videofincas/home");
    };

    return (
        <>
            <div id="contenedor-login">
               
                <div className='contenedor-seccion'>

                    <div className='seccion'>
                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                        <h1 id='titulo-login' style={textLogin}>Inicio de Sesión</h1>
                        <form id="form-login" onSubmit={onLogin}>
                            {/* onSubmit={handleSubmit} */}
                            <label htmlFor="username" style={textLogin}>Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />

                            <label htmlFor="password" style={textLogin}>Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button id="btn-login" onClick={onLogin}>Ingresar</button>
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Login