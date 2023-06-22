import React from 'react'
import { CardServicio } from '../CardServicio/CardServicio'
import img1 from '../../images/imagen-servicios/img1.png'
import img2 from '../../images/imagen-servicios/img2.png'
import img3 from '../../images/imagen-servicios/img3.png'
import img4 from '../../images/imagen-servicios/img4.png'
import style from './Servicios.module.css'

export const Servicios = () => {
  return (
    <div>
        <h3 className={style.titleServicios} id='Servicios'> Servicios</h3>

        <div className={style.cards}>

          {/* Acá iría un map con las imágenes que me lleguen del back para las cards */}
          <CardServicio img={img1} title="Habitaciones con baño en suit"/>
          <CardServicio img={img2} title="Desayuno a la habitación"/>
          <CardServicio img={img3} title="Estacionamiento y pileta"/>
          <CardServicio img={img4} title="Calefación con salamandra"/>
        </div> 
    </div> 
  )
}