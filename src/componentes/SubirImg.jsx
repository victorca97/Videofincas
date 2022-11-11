import { useState, useRef, useEffect } from 'react';

import '../estilos/SubirImg.css';

const defaultImg = 'https://images.vexels.com/media/users/3/157613/isolated/lists/9aa6a8344b89e45d1adbe578dd0fc2dd-icono-de-casa-de-edificio-alto.png'

export const SubirImg = () => {

  const [imagen, setImagen] = useState()
  const [preview, setPreview] = useState()
  const fileInputRef = useRef();
  const [idenImg, setIdenImg] = useState('')

  const imageHandler = (e) => {
    const file = e.target.files[0]
    setIdenImg(file.name)
    if (file && file.type.substr(0, 5) === 'image') {
      setImagen(file)
    } else {
      setImagen(defaultImg)
    }
  }

  const aniadirImagen = (e) => {
    e.preventDefault()
    fileInputRef.current.click()
  }

  useEffect(() => {
    const reader = new FileReader()
    if (imagen) {
      reader.onloadend = () => {
        setPreview(reader.result)
        console.log(typeof reader.result)
      }
      reader.readAsDataURL(imagen)
    } else {
      setPreview(defaultImg)
    }
    
  }, [imagen])

  return (
    <>
      <p style={{color : "black"}}>{idenImg}</p>
      {/*<p style={{color : "black"}}>{preview}</p>*/}
      <div className="contenedor-img">
        <div className="contenedor-subirimg">
          <div className="contenedor-mensaje-subirimg">
            <h1 className="mensaje-subirimg"> Foto de la Finca </h1>
          </div>
          <div className="img-holder">
            <img src={preview} alt="" id="img" className="img" />
          </div>
          <input type="file" ref={fileInputRef} onChange={imageHandler} name="img-upload" id="input" accept="image/*" />
          <button onClick={aniadirImagen}>
            Añadir imagen
          </button>
        </div>
      </div>
    </>

  )
}


