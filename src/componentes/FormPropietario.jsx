function FormPropietario (props) {
    return (
        <form className="form-propietarios">
            <div>
                <h2> {props.nombre} </h2>
                <input 
                    className='prop-input'
                    type='text'
                    placeholder=''/>
            </div>
        </form>
    );
}

export default FormPropietario;