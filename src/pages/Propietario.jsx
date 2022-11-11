import React, {useState, useEffect} from 'react';
import FormPropietario from "../componentes/FormPropietario";
import { TipoDoc } from '../componentes/TipoDoc';
import Logo from "../componentes/logo";
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import ReactSelect from 'react-select';

import axios from 'axios';

function Propietario () {

    const doc = [
        { id: 'D', name: 'D.N.I.', adress: 'dni' },
        { id: 'CE', name: 'Carnet de Extranjería', adress: 'ce' },
        { id: 'PS', name: 'Nro. Pasaporte', adress: 'passport' }
    ]

    const [nombres,setNombres] = useState("")
    const [listatdoc,setListatdoc] = useState(doc)
    const [tdocSelect,setTdocSelect] = useState("")
    const [ndoc,setNdoc] = useState("")
    const [correo,setCorreo] = useState("")
    const [ncel,setNcel] = useState("")
    const [dep,setDep] = useState([])
    const [estacionamiento,setEstacionamiento] = useState([])
    const [part,setPart] = useState(0)
    const [fincaSelect,setFincaSelect] = useState("")
    const [listafincas, setListafincas] = useState([])

    useEffect(() => {
        getFincas();
        console.log(fincaSelect);
    }, [fincaSelect]);



    const getFincas = async() => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base+'propiedades')
        console.log(resp.data)
        setListafincas(resp.data);

    };

    function handlesubmit(e){
        e.preventDefault()
    }

    function send(){
        const data = [nombres,tdocSelect,ndoc,correo,ncel,fincaSelect,dep,estacionamiento,part]
        console.log(fincaSelect);
        const data_POST =  {
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
        const url_base = GetURLAPI()
        const URL = url_base +"propietarios"
        try{
            axios.post(URL,data_POST).then(
                res=>{
                    if(res.data.status==201){
                        alert(res.data.mensaje)
                        console.log(res)
                        console.log(res.data);
                        setNombres("")
                        setTdocSelect("")
                        setNdoc("")
                        setCorreo("")
                        setNcel("")
                        setFincaSelect("")
                        setDep([])
                        setEstacionamiento([])
                        setPart(0)
                    }else{
                        console.log("Entro al else")
                        alert(res.data.mensaje)
                        console.log(res.data)
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
                {/* <h2 className='h2-propietario'> Tipo de Documento: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"tdoc"}
                    value={tdoc}
                    onChange={e=>setTdoc(e.target.value)}
                    /> */}
                <h2 className='h2-propietario'> Tipo de Documento: </h2>
                <div className='input-select'>
                    <ReactSelect
                        onChange={
                            (seleccion)=>{
                            setTdocSelect(seleccion.value)
                            }
                        }
                        options = { listatdoc.map(sup => ({ label: sup.name, value: sup.id })) }
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
                {/* <h2 className='h2-propietario'> Finca: </h2>
                <input 
                    className='input-propietario'
                    type='text'
                    placeholder=''
                    name={"finca"}
                    value={finca}
                    onChange={e=>setFinca(e.target.value)}
                    /> */}
                <h2 className='h2-propietario'> Finca: </h2>
                <div className='input-select'>
                    <ReactSelect
                        onChange={
                            (seleccion)=>{
                            setFincaSelect(seleccion.value)
                            }
                        }
                        options = { listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id})) }
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
            <div className='contenedor-btn-guardar' onClick={()=>send()}>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>    
    );
}

export default Propietario;