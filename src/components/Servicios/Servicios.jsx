import React from 'react'
import { Card } from '../Card Servicios/CardServicio'
import img1 from '../../images/imagen-servicios/img1.jpeg'
import img2 from '../../images/imagen-servicios/img2.jpeg'
import img3 from '../../images/imagen-servicios/img3.jpeg'
import img4 from '../../images/imagen-servicios/img4.jpeg'
import style from './Servicios.module.css'

export const Servicios = () => {
  return (
    <div>
        <h3 className={style.titleServicios} id='Servicios'> Servicios</h3>

        <div className={style.cards}>

          {/* Acá iría un map con las imágenes que me lleguen del back para las cards */}
          <Card img={img1} title="Habitaciones con baño en suit"/>
          <Card img={img2} title="Desayuno a la habitación"/>
          <Card img={img3} title="Estacionamiento y pileta"/>
          <Card img={img4} title="Calefación con salamandra"/>
        </div> 
    </div> 
  )
}
