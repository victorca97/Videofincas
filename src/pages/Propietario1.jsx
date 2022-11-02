import React, {useState} from 'react';
import FormPropietario from "../componentes/FormPropietario";
import { TipoDoc } from '../componentes/TipoDoc';
import Logo from "../componentes/logo";
import Regresar from '../componentes/Regresar';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
    {id: 1, nombres: "Eduardo Berrios Villanueva", tipo_doc: "D.N.I.", ndoc: "45286733", correo: "eduardo.berrios@gmail.com", ncel: "999999999", finca: "Finca Las Ratas", dep: "13A", estacionamiento: "45", participacion: 2.64},
    {id: 2, nombres: "Eduardo Berrios Alcantara", tipo_doc: "D.N.I.", ndoc: "35498656", correo: "eduardo.bv@gmail.com", ncel: "888888888", finca: "Finca Los Quimicos", dep: "12A", estacionamiento: "46", participacion: 2.5},
    {id: 3, nombres: "Eduardo Haro Villanueva", tipo_doc: "Nro. Pasaporte", ndoc: "764222881123", correo: "eduardo.hv@gmail.com", ncel: "777777777", finca: "Finca Villanueva", dep: "13B", estacionamiento: "47", participacion: 1.64},
    {id: 4, nombres: "Eduardo Gomez Laura", tipo_doc: "D.N.I.", ndoc: "32232222", correo: "eduardo.gl@gmail.com", ncel: "666666666", finca: "Finca Las Ratas 2", dep: "13A", estacionamiento: "48", participacion: 2.64},
    {id: 5, nombres: "Eduardo Cadillo Carranza", tipo_doc: "D.N.I.", ndoc: "23323233", correo: "eduardo.caca@gmail.com", ncel: "555555555", finca: "Finca Las Gulas", dep: "3A", estacionamiento: "49", participacion: 2.5},
    {id: 6, nombres: "Eduardo Cubas Quispe", tipo_doc: "Carnet de Extranjería", ndoc: "159456200000", correo: "eduardo.cq@gmail.com", ncel: "444444444", finca: "Finca Los Salados", dep: "11C", estacionamiento: "50", participacion: 1.64},
    {id: 7, nombres: "Eduardo Redolfo Villanueva", tipo_doc: "D.N.I.", ndoc: "45210433", correo: "eduardo.red@gmail.com", ncel: "111111222", finca: "Finca Los Tylmos", dep: "9A", estacionamiento: "51", participacion: 2.64},
];

class Propietario extends React.Component {

    state={
        propietarios: data
    }

    render(){

    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario del Propietario'/>
            </div>
            <Regresar
                ruta='home'/>
            <FormPropietario
                nombre='Nombres y Apellidos:'
                tipo='text' />
            <form className="tipodoc-formulario">
                <h2 className='h2-propietario'> Tipo de Documento: </h2>
                <div className='autocomplete-wrapper'>
                    <TipoDoc />
                </div>
            </form>
            <FormPropietario
                nombre='Nro. Documento:'
                tipo='text'
                longitud={20} />
            <FormPropietario
                nombre='Correo Electrónico:'
                tipo='text' />
            <FormPropietario
                nombre='Nro. Celular:'
                tipo='text'
                longitud={20} />
            <FormPropietario
                nombre='Finca:'
                tipo='text' />
            <FormPropietario
                nombre='Departamento:'
                tipo='text' />
            <FormPropietario
                nombre='Estacionamiento:'
                tipo='text' />
            <FormPropietario
                nombre='Participación (%):'
                tipo='number'
                longitud={5} />
            <div className='contenedor-btn-guardar'>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
            <Container>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Nombres y Apellidos
                            </th>
                            <th>
                                Tipo de Documento
                            </th>
                            <th>
                                Nro. Documento
                            </th>
                            <th>
                                Correo Electrónico
                            </th>
                            <th>
                                Nro. Celular
                            </th>
                            <th>
                                Finca
                            </th>
                            <th>
                                Departamento
                            </th>
                            <th>
                                Estacionamiento
                            </th>
                            <th>
                                Participación %
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.propietarios.map((propietario) =>   {                 
                            <tr>
                                <td>{propietario.id}</td>
                                <td>{propietario.nombres}</td>
                                <td>{propietario.tipo_doc}</td>
                                <td>{propietario.ndoc}</td>
                                <td>{propietario.correo}</td>
                                <td>{propietario.ncel}</td>
                                <td>{propietario.finca}</td>
                                <td>{propietario.dep}</td>
                                <td>{propietario.estacionamiento}</td>
                                <td>{propietario.participacion}</td>
                                <td>
                                    <Button color="primary">Editar</Button>
                                    <Button color="danger">Eliminar</Button>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </Table>
            </Container>
        </>    
    );
}}

export default Propietario;