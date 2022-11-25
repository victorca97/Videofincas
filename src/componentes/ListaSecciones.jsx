
import FormSeccion from './FormSeccion';
import Seccion from './Seccion';


function ListaSecciones({listaSecciones,setListaSecciones, fincaSelect, setArreglo}) {
    
    const agregarSeccion = seccion => {
        if (seccion.nombre.trim()) {
            seccion.nombre = seccion.nombre.trim();
            const seccionesActualizadas = [...listaSecciones, seccion];
            setListaSecciones(seccionesActualizadas);
        }
    }
    
    console.log('lista secciooneeeeeeeeeeeeees', listaSecciones)
    
    
    return(
        <>  
            <div className='container-fluid'>
             
            <FormSeccion onSubmit={agregarSeccion}/>
            
                
            <div className='contenedor-secciones'>
               {
                    listaSecciones.map((seccion) =>                    
                    <Seccion  fincaSelect={fincaSelect}
                        key={seccion.ID_Seccion}
                        {...seccion}
                        seccion={seccion}
                        listaSecciones={listaSecciones}
                        setListaSecciones={setListaSecciones}
                    />
                    )
                }
            </div>
            </div>
            
        </>
    );
}

export default ListaSecciones;