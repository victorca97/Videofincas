import React, { Component } from "react";
import '../estilos/SubirImg.css';

export class SubirImg extends Component {
  state = {
    defaultImg : 'https://images.vexels.com/media/users/3/157613/isolated/lists/9aa6a8344b89e45d1adbe578dd0fc2dd-icono-de-casa-de-edificio-alto.png'
  }

  imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2){
        this.setState({defaultImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    const {defaultImg} = this.state
    
    return (
      <div className="contenedor-img">
        <div className="contenedor-subirimg">
            <div className="contenedor-mensaje-subirimg">
              <h1 className="mensaje-subirimg"> Foto de la Finca </h1>
            </div>
            <div className="img-holder">
              <img src={defaultImg} alt="" id="img" className="img" />
            </div>
            <input type="file" name="img-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
            <div className="label">
              <label htmlFor="input" className="image-upload">
                <i className="material-icons">add_photo_alternate</i>
                Seleccionar imagen
              </label>
            </div>
        </div>
      </div>
    );
  }
}

export default SubirImg;