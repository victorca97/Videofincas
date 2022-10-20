import Logo from "../componentes/logo";
import { Fincas } from "../componentes/Fincas";
import ListaSecciones from "../componentes/ListaSecciones";
import SubirImg from "../componentes/SubirImg";
import '../App.css';

function Admin() {
    return (
        <>
            <div className="contenedor-cabecera">
                <Logo 
                    nombre='Formulario del Administrador'/>
            </div>
            <form className="nombre-finca-formulario">
                <h2> Nombre de la Finca: </h2>
                <div className='autocomplete-wrapper'>
                    <Fincas />
                </div>
            </form>
            <ListaSecciones />
        </>
    );
}

export default Admin;