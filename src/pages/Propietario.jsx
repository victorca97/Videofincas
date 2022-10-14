import FormPropietario from "../componentes/FormPropietario";
import Logo from "../componentes/logo";

function Propietario () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario del Propietario'/>
            </div>
            <FormPropietario
                nombre='Nombres y Apellidos:' />
            <FormPropietario
                nombre='Nro. Documento:' />
            <FormPropietario
                nombre='Correo Electrónico:' />
            <FormPropietario
                nombre='Nro. Celular:' />
            <FormPropietario
                nombre='Finca:' />
            <FormPropietario
                nombre='Departamento:' />
            <FormPropietario
                nombre='Estacionamiento:' />
        </>    
    );
}

export default Propietario;