import React ,{useState}from 'react';
import FormPropietario from "../componentes/FormPropietario";
import SubirImg from '../componentes/SubirImg';
import Logo from "../componentes/logo";
import Regresar from '../componentes/Regresar';
import '../App.css';
import '../estilos/FormPropietario.css';
import GetURLAPI from '../utilidades/parametros';
import { v4 as uuidv4 } from 'uuid';

import Axios from 'axios';

function Finca () {

    const [nombre,setNombre] = useState("")
    const [direccion,setDireccion] = useState("")
    // const [pisos,setPisos] = useState(0)
    // const [dptos,setDptos] = useState(0)
    const [img,setImg] = useState("")


    function handlesubmit(e){
        e.preventDefault()
    }

    function send(){
        const data = [nombre,direccion]
        const data_POST =  {
            "Admin_Id" : "Admin0001",
            "Nombre" : nombre,
            direccion,
            // pisos,
            // dptos
        }
        const url_base = GetURLAPI()
        const URL = url_base +"finca"
        Axios.post(URL,data_POST).then(
            res=>{
                if(res.status==200){
                    alert("Mensaje enviado")
                    setNombre("")
                    setDireccion("")
                    // setPisos(0)
                    // setDptos(0)
                }else(console.log(res))
            }
        )
        console.log(data_POST)
    }

    return (
        <>
            <div className="contenedor-cabecera">
                <Logo 
                    nombre='Formulario de las Fincas'/>
                </div>
            <Regresar
                ruta='home'/>
            <form className="form-propietarios" onSubmit={handlesubmit}>
                <h2 className='h2-propietario'> Nombre de la Finca: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"nombre"}
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />
                <h2 className='h2-propietario'> Direccion de la Finca: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"direccion"}
                    value={direccion}
                    onChange={e=>setDireccion(e.target.value)}
                    />
                {/* <h2 className='h2-propietario'> Nro. de Pisos: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"pisos"}
                    value={pisos}
                    onChange={e=>setPisos(e.target.value)}
                    />
                <h2 className='h2-propietario'> Nro. de Departamentos: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"dptos"}
                    value={dptos}
                    onChange={e=>setDptos(e.target.value)}
                    /> */}
            </form>
            <div className='contenedor-btn-guardar' onClick={()=>send()}>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>
    );
}

export default Finca;