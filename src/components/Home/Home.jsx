import React from 'react';
import style from './Home.module.css'

export const Home = () => {
    return (
        <div className={style.title} id='Home' >
            <div >
                {/* <img className='img_fondo1' src={require('../../images/img hero.png')} alt="css"/> */}
            </div>

            <div className={style.imgTitulo}>
                <img className={style.imgCerro} src={require('../../images/titulo de img hero.png')} alt="css" width={500} /> 
                <h3 className={style.descriptionTitle}>Somos un lugar que encierra todos los <br />
                    secretos de la naturaleza</h3>
            </div>

            <div>
                <h2 className={style.description}>Somos un hotel rústico que los espera para una estadía de descanso y confort en sus habitaciones realizadas con materiales autóctonos de la zona. <br/>
                <br/>
                Está ubicado en la provincia de San Juan, Argentina. Zona de Valle Fértil, a 75KM del Parque Ishigualasto</h2>
            </div>

        </div>
    )
}
