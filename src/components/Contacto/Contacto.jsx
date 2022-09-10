import React from 'react'
import style from './Contacto.module.css'

export const Contacto = () => {
  return (
    <div >
      <h3 className={style.contactoTitulo}>Contacto</h3>

      <div className={style.contacto}>

        <form className={style.form} action='mailto:pablocorrea34@gmail.com'>
          <input type="text" placeholder='Ingresa tu nombre' />
            <input type="text" placeholder='Ingresa tu apellido' />
            <input type="email" placeholder='Ingresa tu correo electrónico' />
            <input type="text" placeholder='Ingresa tu teléfono' />
            <textarea placeholder='Dejame un mensaje' />
            <input type="submit" value="Enviar" />
        </form>

          <div className={style.containerImg}>
            <div className={style.boxImg}>
              <a href="#c">
                <figure>
                  <img
                  src={require("../../images/imagen-contacto/imagen fom.png")}
                  alt="css"
                  />
                </figure>
                </a>
            </div>
          </div>

      </div>
    </div>
    )
}
