import React from "react";
import { useNavigate } from "react-router-dom";
import '../estilos/Regresar.css';

function Regresar(props) {

    const navigate = useNavigate();

    const linkear = e => {
        e.preventDefault();                               
        navigate(`/Videofincas/${props.ruta}`,{
            replace: true
        });
    };

    return (
        <div className="mt-2 d-flex justify-content-center">
            <button className="btn btn-regresar" onClick={linkear}>
                ← Regresar
            </button>
        </div>
    );
}

export default Regresar;