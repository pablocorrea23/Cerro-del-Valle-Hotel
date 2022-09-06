import React from 'react'
import { Card } from '../Card/Card'

export const Servicios = () => {
  return (
    <div>
        <h3 className="servicios">S e r v i c i o s</h3>

        <div className="cards">

          {/* Aca iria un map con las imagenes que me lleguen del back para las cards */}
          <img className='img_cards' src={require('../../images/imagen-servicios/img1.jpeg')} alt="css" width={1300} />
          <Card img="../../images/imagen-servicios/img1.jpeg" title="Habitaciones con baño en suit" />
          <Card img="../../images/imagen-servicios/img2.jpeg" title="Desayuno a la habitación" />
          <Card img="../../images/imagen-servicios/img3.jpeg" title="Estacionamiento y pileta" />
          <Card img="../../images/imagen-servicios/img4.jpeg" title="Calefacción con salamandra" />
        </div> 
    </div> 
  )
}
