
import { Link } from "react-router-dom";

import '../App.css';


function Menu() {


    return (
        <>
            <ul id="lista-rutas">
                <li id="elemento-lista-finca">
                    <Link id="link-finca" to="/Videofincas/fincas">Fincas</Link>
                </li>
                <li id="elemento-lista-recibo">
                    <Link id="link-recibo" to="/Videofincas/recibos">Recibos</Link>
                </li>
                <li id="elemento-lista-propietario">
                    <Link id="link-propietario" to="/Videofincas/propietarios">Propiedades</Link>
                </li>
            </ul>
        </>
    );
}

export default Menu;