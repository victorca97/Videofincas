
import '../estilos/Seccion.css';
import { BsFillTrashFill } from "react-icons/bs";
import { ListaSubSecciones } from './ListaSubSecciones';

function Seccion({ID_Seccion, nombre, listaSecciones, setListaSecciones,seccion }) {
    console.log('Entro a seccion', listaSecciones)
    const {Subsecciones} = seccion;
    
    const eliminarSeccion = ID_Seccion => {
        console.log(ID_Seccion)
        const seccionesActualizadas = listaSecciones.filter(seccion => seccion.ID_Seccion !== ID_Seccion);
        setListaSecciones(seccionesActualizadas);
    }
    
    return (
        <div className='form-info'>
            <h3> {nombre.charAt(0).toUpperCase() + nombre.slice(1)} </h3>
            <ListaSubSecciones Subsecciones={Subsecciones} listaSecciones={listaSecciones} setListaSecciones={setListaSecciones} ID_Seccion={ID_Seccion}/>
            <div className='seccion-contenedor-iconos'>
                <BsFillTrashFill 
                className="seccion-icono"
                onClick={() => eliminarSeccion(ID_Seccion)}/>
            </div>
        </div>
    );
}

export default Seccion;