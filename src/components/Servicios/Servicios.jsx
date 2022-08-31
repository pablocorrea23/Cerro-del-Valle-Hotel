import React from 'react';
import styles from './Servicios.module.css';

export const Servicios = () => {
  return (
    <div>
        <h3 className={styles.servicios}>S e r v i c i o s</h3>

        <div className={styles.cards}>

            {/* Aca iria un map con las imagenes que me lleguen del back para las cards */}
        <img className={styles.img_cards} src={require('../../images/Captura de pantalla servicios.png')} alt="css" width={1300} />
        </div>
        
    </div>
  )
}
