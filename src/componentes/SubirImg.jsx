import React, { useRef } from "react";
import { useState } from "react";

function SubirImg() {
    const [images, setimages] = useState([]);
  
    const changeInput = (e) => {
      //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
      let indexImg;
  
      //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
      if (images.length > 0) {
        indexImg = images[images.length - 1].index + 1;
      } else {
        indexImg = 0;
      }
  
      // let newImgsToState = readmultifiles(e, indexImg);
      let newImgsState = [images[0]];
      setimages(newImgsState);
  
      console.log(newImgsState);
    };
  
    function readmultifiles(e, indexInicial) {
      const files = e.currentTarget.files;
  
      //el array con las imagenes nuevas
      const arrayImages = [];
  
      Object.keys(files).forEach((i) => {
        const file = files[i];
  
        let url = URL.createObjectURL(file);
  
        //console.log(file);
        arrayImages.push({
          index: indexInicial,
          name: file.name,
          url,
          file
        });
  
        indexInicial++;
      });
  
      //despues de haber concluido el ciclo retornamos las nuevas imagenes
      return arrayImages;
    }
  
    function deleteImg(indice) {
      //console.log("borrar img " + indice);
  
      const newImgs = images.filter(function (element) {
        return element.index !== indice;
      });
      console.log(newImgs);
      setimages(newImgs);
    }
  
    return (
      <div className="container-fluid">
        <br></br>
        {/* INPUT IMAGES */}
        <label className="btn btn-warning">
          <span>Seleccionar imagen </span>
          <input hidden type="file" multiple onChange={changeInput}></input>
        </label>
  
        {/* VIEW IMAGES */}
        <div className="row">
          {images.map((imagen) => (
            <div className="col-6 col-sm-4 col-lg-3 square" key={imagen.index}>
              <div className="content_img">
                <button
                  className="position-absolute btn btn-danger"
                  onClick={deleteImg.bind(this, imagen.index)}
                >
                  x
                </button>
                <img
                  alt="algo"
                  src={imagen.url}
                  data-toggle="modal"
                  data-target="#ModalPreViewImg"
                  className="img-responsive"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default SubirImg;