import React from 'react'
import Logo from '../componentes/logo.jsx'
import {useHistory,useLocation} from 'react-router-dom';
import Axios from 'axios'

import {MdPictureAsPdf} from 'react-icons/md'
import {SiMicrosoftexcel} from 'react-icons/si'
import { Link } from 'react-router-dom';

//Assets
import DownArrow from '../imagenes/Arrow-down.svg';
import Regresar from '../componentes/Regresar.jsx';

export default function Descarga() {

    const location = useLocation()
   // const id = location.state.poder

    async function downloadHandle(tipo){
        //let url =  `https://url/${id}/${tipo}`
        // try{
        //     await  Axios.get(url).then(res =>{
        //         if(res.status === 200){
        //        //     const arrayBuffer = res.data.file.data;
        //             const extension = res.data.tipo 
        //             const id = res.data.id
        //                          //Obtiene el array de la respuesta
        //         //    const buffer = Buffer.from(arrayBuffer);             //Transforma el array en un Buffer
                    
        //          //   const url = URL.createObjectURL(new Blob([buffer])); //Crea un objeto Blob y una url a partir el objeto
        //             const url = 'https://drive.google.com/file/d/18Eijqil2Sp1PWNcIQXRavd4amn2l0XNc/view?usp=sharing'//res.data.url
        //             const link = document.createElement('a');            //Crea un elemento html <a>
        //             link.href = url; 
        //             link.target = '_blank';
        //                                                 //Asigna al atributo href la url creada
        //             link.setAttribute('download', `Ticket.${id}`);           //Añade el atributo download al elemento <a>
        //             document.body.appendChild(link);                     //Agrega el elemento <a> como hijo del Body
        //             link.click();                                        //Detona el evento click del elemento <a> iniciado la descarga
        //             link.parentNode.removeChild(link)                    //Remueve el elemento <a> del Body
        //         }else{
        //             console.log(res.data.message)
        //         }
        //     })        
        // }
        // catch(error){
        //     console.log(url)
        //     console.log(error)
        // }
        const extension = "pdf"//res.data.tipo 
        const id = "455"//res.data.id
                                 //Obtiene el array de la respuesta
                //    const buffer = Buffer.from(arrayBuffer);             //Transforma el array en un Buffer
                    
                 //   const url = URL.createObjectURL(new Blob([buffer])); //Crea un objeto Blob y una url a partir el objeto
        const url = 'https://drive.google.com/file/d/18Eijqil2Sp1PWNcIQXRavd4amn2l0XNc/view?usp=sharing'//res.data.url
                    const link = document.createElement('a');            //Crea un elemento html <a>
                    link.href = url; 
                    link.target = '_blank';
                                                        //Asigna al atributo href la url creada
                    link.setAttribute('download', `Ticket.${id}`);           //Añade el atributo download al elemento <a>
                    document.body.appendChild(link);                     //Agrega el elemento <a> como hijo del Body
                    link.click();                                        //Detona el evento click del elemento <a> iniciado la descarga
                    link.parentNode.removeChild(link) 
    }



    return (
        <div style={{textAlign:"center"}}>
            <div className='contenedor-cabecera'>
                <Logo nombre='Formulario para Recibos' />
            </div>
            <Regresar 
                ruta="recibo"/>
            <div >
                <h1 className="StolzlMedium">El proceso se realizó exitosamente</h1>
                <h2>Su Ticket es el Número:</h2>
                <h2>11111</h2>
            </div>
            <div className='mt-5'>
                <h3 className='msje-descarga'>Haga click aquí para descargar los documentos</h3>
                <img src={DownArrow} className='mt-2 mb-2 floating-img' style={{width:"4rem", height:"4rem"}}/>
                <div>
                    <div className='mb-4' style={{cursor:"pointer"}}>
                        <MdPictureAsPdf
                            className='downloadpdf'                            
                        />
                        <span onClick={()=>downloadHandle("pdf")}>Descargar PDF</span>
                    </div>
                    <div className='mb-4' style={{cursor:"pointer"}}>
                        <SiMicrosoftexcel
                            className='downloadexcel'
                        />
                        <span onClick={()=>downloadHandle("xlsx")}>Descargar EXCEL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}