import React from 'react';
import FormPropietario from "../componentes/FormPropietario";
import SubirImg from '../componentes/SubirImg';
import Logo from "../componentes/logo";
import '../App.css';
import {FcUndo} from "react-icons/fc";
import { Link } from 'react-router-dom';

function Finca () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario de las Fincas'/>
            </div>
            <div className="contenedor-btn-retry">
                <FcUndo className="btn-retry" >
                    <Link to="/Videofincas/home"></Link>
                </FcUndo>
            </div>
            <FormPropietario
                nombre='Nombres de la Finca:' />
            <FormPropietario
                nombre='Dirección:'
                longitud={70} />
            <SubirImg />
            <button className='btn-guardar'>GUARDAR</button>
        </>    
    );
}

export default Finca;