import React, {useState, useEffect} from 'react';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import Select from 'react-select';
/* import ReactSelect from 'react-select'; */
import { useLocation } from 'react-router-dom';

import axios from 'axios';

function UpdatePropietario () {

    const location = useLocation();
    const propietarioRecuperado = location.state.pro;
    const listaFincas = location.state.listafincas
    console.log(':c')
    console.log(propietarioRecuperado)
/*  
    const id_propietario_modificar = location.pathname.split('propietarios/')[1]
 */
    const {
        _id,
        Finca,
        Nombres_y_Apellidos,
        Tipo_Documento,
        Nro_Documento,
        Correo,
        Telefono,
        Departamentos,
        Estacionamientos
    } = propietarioRecuperado;

    const doc = [
        { id: 'D', name: 'D.N.I.', adress: 'dni' },
        { id: 'CE', name: 'Carnet de Extranjería', adress: 'ce' },
        { id: 'PS', name: 'Nro. Pasaporte', adress: 'passport' }
    ]
    console.log(Departamentos[0].Porcentaje_Participacion)
    const [nombres,setNombres] = useState(Nombres_y_Apellidos)
    const [listatdoc,setListatdoc] = useState(doc)
    const [tdocSelect,setTdocSelect] = useState(Tipo_Documento)
    const [ndoc,setNdoc] = useState(Nro_Documento)
    const [correo,setCorreo] = useState(Correo)
    const [ncel,setNcel] = useState(Telefono)
    const [dep,setDep] = useState(Departamentos[0].ID_Departamentos)
    const [estacionamiento,setEstacionamiento] = useState( Estacionamientos[0].Numero_Estacionamiento)
    const [part,setPart] = useState(Departamentos[0].Porcentaje_Participacion)
    const [fincaSelect,setFincaSelect] = useState(Finca)
    const [data, setData] = useState({})
    const obtenerLabelDelTipoDocumentoSeleccionado = doc.find(d=> d.id === Tipo_Documento).name 
    const obtenerLabelDeLaFincaSeleccionada = listaFincas.find(f => f._id === Finca ).Nombre

    console.log('dep',dep)
    console.log('part', part)
    console.log('estacionamiento', estacionamiento)
    
    function handlesubmit(e){
        e.preventDefault()
    }

    function updatePropietario(){

       
        const data_PUT =  {
            "_id" : tdocSelect+ndoc,
            "Finca" : fincaSelect,
            "Nombres_y_Apellidos" : nombres,
            "Tipo_Documento": tdocSelect,
            "Nro_Documento": ndoc,
            "Correo" : correo,
            "Telefono" : ncel,
            "Departamentos" : [ { "ID_Departamentos":dep, "Porcentaje_Participacion":part }],
            "Estacionamientos" : [{ "Numero_Estacionamiento" : estacionamiento }],
        }
        console.log('data_PUT', data_PUT)
         const url_base = GetURLAPI()
        const URL = url_base +"propietarios/"+_id
        try{
            /*axios.put(URL,data_PUT).then(
                res=>{
                    if(res.data.status===201){
                        alert(res.data.mensaje)
                        
                       setNombres("")
                        setTdocSelect("")
                        setNdoc("")
                        setCorreo("")
                        setNcel("")
                        setFincaSelect("")
                        setDep("")
                        setEstacionamiento("")
                        setPart(0) 
                    }else{
                        console.log("Entro al else")
                        alert(res.data.mensaje)
                 
                    }
                }
            )*/
            axios.put(URL,data_PUT).then(
                res => setData(res.data)
            )
            
        }
        catch(error){
            console.log("Entro al catch")
            alert("Hubo error en el servidor")
            console.log(URL)
            console.log(error)
        } 
      
    }
    useEffect(() => {
        console.log('entro useeffect')
        console.log(data)
        if(data.status===201){
            alert(data.message)
        }
    }, [data])
    

    return (
        <>
            
            <Regresar
                ruta='propietarios'/>
            <form className="form-propietarios" onSubmit={handlesubmit}>
                <h2 className='h2-propietario'> Nombres y Apellidos: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"nombres"}
                    value={nombres}
                    onChange={e=>setNombres(e.target.value)}
                    />
                <h2 className='h2-propietario'> Tipo de Documento: </h2>
                <div className='input-select'>
                    <Select
                        onChange={
                            (seleccion)=>{
                            setTdocSelect(seleccion.value)
                            }
                        }
                        options = { listatdoc.map(sup => ({ label: sup.name, value: sup.id })) }
                        defaultValue={{label: obtenerLabelDelTipoDocumentoSeleccionado, value: setTdocSelect }}
                    />
                </div>
                <h2 className='h2-propietario'> Nro. de Documento: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"ndoc"}
                    value={ndoc}
                    onChange={e=>setNdoc(e.target.value)}
                    />
                <h2 className='h2-propietario'> Correo Electrónico: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"correo"}
                    value={correo}
                    onChange={e=>setCorreo(e.target.value)}
                    />
                <h2 className='h2-propietario'> Nro. de Celular: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"ncel"}
                    value={ncel}
                    onChange={e=>setNcel(e.target.value)}
                    />
                <h2 className='h2-propietario'> Finca: </h2>
                <div className='input-select'>
                    <Select
                        onChange={
                            (seleccion)=>{
                            setFincaSelect(seleccion.value)
                            }
                        }
                        options = { listaFincas?.map(sup => ({ label: sup.Nombre, value: sup._id})) }
                        defaultValue={{label: obtenerLabelDeLaFincaSeleccionada, value: fincaSelect }}
                        
                    />
                </div>
                <h2 className='h2-propietario'> Departamento: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"dep"}
                    value={dep}
                    onChange={e=>setDep(e.target.value)}
                    />
                <h2 className='h2-propietario'> Estacionamiento: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"estacionamiento"}
                    value={estacionamiento}
                    onChange={e=>setEstacionamiento(e.target.value)}
                    />
                <h2 className='h2-propietario'> Participación (%): </h2>
                <input 
                    className='input-propietario'
                    type='number'
                    placeholder=''
                    name={"part"}
                    value={part}
                    onChange={e=>setPart(e.target.value)}
                    />
            </form> 
            <div className='contenedor-btn-guardar' onClick={()=>updatePropietario()}>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>    
    );
}

export default UpdatePropietario;