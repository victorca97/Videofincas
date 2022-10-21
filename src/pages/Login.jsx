import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../componentes/AuthProvider";
import '../estilos/Login.css';
import '../App.css';

import axios from '../api/axios';
import Logo from '../componentes/logo';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
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
            setAuth({ user, pwd, roles, accessToken });
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
    
    return (
        <>
            {/* {success ? (
                <section>
                    <h1>Te has logeado satisfactoriamente</h1>
                    <br />
                    <p>
                        <a href="#">Menu Principal</a>
                    </p>
                </section>
            ) : ( */}
                <div id="contenedor-login">
                    <div className='contenedor-cabecera'>
                        <Logo nombre=''/>
                    </div>
                    <section>
                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                        <h1 id='titulo-login'>Inicio de Sesión</h1>
                        <form id="form-login" action="https://victorca97.github.io/Videofincas/home"> 
                        {/* onSubmit={handleSubmit} */}
                            <label htmlFor="username">Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />

                            <label htmlFor="password">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button id="btn-login" >Ingresar</button>
                        </form>
                    </section>
                    <div id='footer'>‎ </div>
                </div>
            {/* )} */}
        </>
    );
}

export default Login
