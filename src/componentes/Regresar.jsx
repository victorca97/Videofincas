import React from "react";
import { useNavigate } from "react-router-dom";
import '../estilos/Regresar.css';

function Regresar(props) {

    const navigate = useNavigate();

    const linkear = e => {
        e.preventDefault();                               
        navigate(`/Videofincas/${props.ruta}`);
    };

    return (
        <button id="btn-regresar" onClick={linkear}>
            Regresar
        </button>
    );
}

export default Regresar;