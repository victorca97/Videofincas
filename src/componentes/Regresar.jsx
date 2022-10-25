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
        <div className="contenedor-btn-regresar">
            <button id="btn-regresar" onClick={linkear}>
                ← Regresar
            </button>
        </div>
    );
}

export default Regresar;