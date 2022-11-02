import React, {useState} from 'react';
import FormPropietario from "../componentes/FormPropietario";
import { TipoDoc } from '../componentes/TipoDoc';
import Logo from "../componentes/logo";
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';

import Axios from 'axios';

function Propietario () {

    const [nombres,setNombres] = useState("")
    const [tdoc,setTdoc] = useState("")
    const [ndoc,setNdoc] = useState("")
    const [correo,setCorreo] = useState("")
    const [ncel,setNcel] = useState("")
    const [finca,setFinca] = useState("")
    const [dep,setDep] = useState([])
    const [estacionamiento,setEstacionamiento] = useState([])
    const [part,setPart] = useState(0)


    function handlesubmit(e){
        e.preventDefault()
    }

    function send(){
        const data = [nombres,tdoc,ndoc,correo,ncel,finca,dep,estacionamiento,part]
        const data_POST =  {
            "_id" : "0008",
            "Finca" : finca,
            "Nombres_y_Apellidos" : nombres,
            "Tipo_Documento": tdoc,
            "Nro_Documento": ndoc,
            "Correo" : correo,
            "Telefono" : ncel,
            "Departamentos" : [ { "ID_Departamentos":dep, "Porcentaje_Participacion":part }],
            "Estacionamientos" : [{ "Numero_Estacionamiento" : estacionamiento }],
        }
        const url_base = GetURLAPI()
        const URL = url_base +"propietarios"
        try{
            Axios.post(URL,data_POST).then(
                res=>{
                    if(res.status==200){
                        alert("Mensaje enviado")
                        setNombres("")
                        setTdoc("")
                        setNdoc("")
                        setCorreo("")
                        setNcel("")
                        setFinca("")
                        setDep([])
                        setEstacionamiento([])
                        setPart(0)
                    }else{
                        console.log("Entro al else")
                        alert(res)
                        console.log(res)
                    }
                }
            )}
        catch(error){
            console.log("Entro al catch")
            alert("Hubo error en el servidor")
            console.log(URL)
            console.log(error)
        }
        console.log(data_POST)
    }

    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario del Propietario'/>
            </div>
            <Regresar
                ruta='home'/>
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
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"tdoc"}
                    value={tdoc}
                    onChange={e=>setTdoc(e.target.value)}
                    />
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
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"finca"}
                    value={finca}
                    onChange={e=>setFinca(e.target.value)}
                    />
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
            <div className='contenedor-btn-guardar' onClick={()=>send()}>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>    
    );
}

export default Propietario;