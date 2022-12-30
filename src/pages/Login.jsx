import { useRef, useState, useEffect, useContext } from 'react';
import '../estilos/Login.css';
import '../App.css';
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';

const textLogin = {
    color: 'white'
}

const Login = () => {
   /*  const { setAuth } = useContext(AuthContext); */
    const { login } = useContext(AuthContext);
    const userRef = useRef();

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, [])

  /*   const navigate = useNavigate();
 */
    const onLogin = async e => {
        e.preventDefault();
        console.log('dentro de onlogin')
        console.log('user: ', user)
        console.log('password', pwd)
       if(await login(user, pwd)){
            navigate("/Videofincas/home");
        } 
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